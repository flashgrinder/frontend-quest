import type { ToneStep } from './types'

interface WindowWithAudioContext extends Window {
  webkitAudioContext?: typeof AudioContext
}

const EFFECT_MAX_GAIN = 0.12

export class SfxManager {
  private context: AudioContext | undefined
  private effectsGain: GainNode | undefined
  private enabled = true
  private volume = 1

  setEnabled(value: boolean): void {
    this.enabled = value
    this.applyVolume()
  }

  setVolume(value: number): void {
    this.volume = value
    this.applyVolume()
  }

  async unlock(): Promise<void> {
    const context = this.getContext()

    if (!context || context.state !== 'suspended') {
      return
    }

    try {
      await context.resume()
    } catch {
      // Browser audio permission can fail silently; UI must keep working.
    }
  }

  play(steps: ToneStep[]): void {
    if (!this.enabled || this.volume <= 0) {
      return
    }

    const context = this.getContext()

    if (!context) {
      return
    }

    this.ensureEffectsGain()

    let startTime = context.currentTime

    steps.forEach((step) => {
      this.playTone(step, startTime)
      startTime += step.duration * 0.82
    })
  }

  private getContext(): AudioContext | undefined {
    if (typeof window === 'undefined') {
      return undefined
    }

    if (!this.context) {
      const audioWindow = window as WindowWithAudioContext
      const AudioContextConstructor = globalThis.AudioContext ?? audioWindow.webkitAudioContext

      if (!AudioContextConstructor) {
        return undefined
      }

      this.context = new AudioContextConstructor()
    }

    return this.context
  }

  private ensureEffectsGain(): GainNode | undefined {
    const context = this.getContext()

    if (!context) {
      return undefined
    }

    if (!this.effectsGain) {
      this.effectsGain = context.createGain()
      this.effectsGain.connect(context.destination)
    }

    this.applyVolume()

    return this.effectsGain
  }

  private applyVolume(): void {
    if (!this.effectsGain || !this.context) {
      return
    }

    const targetGain = this.enabled ? Math.min(1, Math.max(0, this.volume)) : 0

    this.effectsGain.gain.setTargetAtTime(targetGain, this.context.currentTime, 0.08)
  }

  private playTone(step: ToneStep, startTime: number): void {
    const context = this.getContext()
    const effectsGain = this.ensureEffectsGain()

    if (!context || !effectsGain) {
      return
    }

    const oscillator = context.createOscillator()
    const gain = context.createGain()
    const duration = Math.max(0.03, step.duration)
    const safeGain = Math.min(EFFECT_MAX_GAIN, Math.max(0.01, step.gain ?? 0.05))

    oscillator.type = step.type ?? 'sine'
    oscillator.frequency.setValueAtTime(step.frequency, startTime)
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(40, step.frequency * 1.08), startTime + duration)

    gain.gain.setValueAtTime(0.0001, startTime)
    gain.gain.exponentialRampToValueAtTime(safeGain, startTime + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration)

    oscillator.connect(gain)
    gain.connect(effectsGain)
    oscillator.start(startTime)
    oscillator.stop(startTime + duration + 0.01)
  }
}
