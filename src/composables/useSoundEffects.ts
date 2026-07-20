import { computed } from 'vue'
import { useSettingsStore } from '../stores/settings'

type OscillatorWave = OscillatorType

interface ToneStep {
  frequency: number
  duration: number
  type?: OscillatorWave
  gain?: number
}

let audioContext: AudioContext | undefined

const getAudioContext = (): AudioContext | undefined => {
  if (typeof window === 'undefined' || !window.AudioContext) {
    return undefined
  }

  if (!audioContext) {
    audioContext = new window.AudioContext()
  }

  return audioContext
}

const resumeAudioContext = async (context: AudioContext): Promise<boolean> => {
  if (context.state !== 'suspended') {
    return true
  }

  try {
    await context.resume()
    return true
  } catch {
    return false
  }
}

const playTone = async (step: ToneStep, startTime: number, volume: number): Promise<void> => {
  const context = getAudioContext()

  if (!context || !(await resumeAudioContext(context))) {
    return
  }

  const oscillator = context.createOscillator()
  const gain = context.createGain()
  const duration = Math.max(0.03, step.duration)
  const volumeRatio = Math.min(1, Math.max(0, volume / 100))
  const safeGain = Math.min(0.12, Math.max(0.01, step.gain ?? 0.05)) * volumeRatio

  oscillator.type = step.type ?? 'sine'
  oscillator.frequency.setValueAtTime(step.frequency, startTime)
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(40, step.frequency * 1.08), startTime + duration)

  gain.gain.setValueAtTime(0.0001, startTime)
  gain.gain.exponentialRampToValueAtTime(safeGain, startTime + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration)

  oscillator.connect(gain)
  gain.connect(context.destination)
  oscillator.start(startTime)
  oscillator.stop(startTime + duration + 0.01)
}

const playSequence = async (steps: ToneStep[], volume: number): Promise<void> => {
  const context = getAudioContext()

  if (!context || !(await resumeAudioContext(context))) {
    return
  }

  let startTime = context.currentTime

  steps.forEach((step) => {
    void playTone(step, startTime, volume)
    startTime += step.duration * 0.82
  })
}

export const useSoundEffects = () => {
  const settingsStore = useSettingsStore()

  const isSoundEnabled = computed(() => settingsStore.audio.soundEffectsEnabled)

  const playIfEnabled = (steps: ToneStep[]): void => {
    if (!settingsStore.audio.soundEffectsEnabled || settingsStore.audio.soundEffectsVolume <= 0) {
      return
    }

    void playSequence(steps, settingsStore.audio.soundEffectsVolume)
  }

  const playClick = (): void => {
    playIfEnabled([{ frequency: 920, duration: 0.045, type: 'square', gain: 0.035 }])
  }

  const playSelect = (): void => {
    playIfEnabled([{ frequency: 560, duration: 0.075, type: 'sine', gain: 0.045 }])
  }

  const playCorrect = (): void => {
    playIfEnabled([
      { frequency: 660, duration: 0.07, type: 'triangle', gain: 0.055 },
      { frequency: 940, duration: 0.09, type: 'triangle', gain: 0.05 },
    ])
  }

  const playWrong = (): void => {
    playIfEnabled([
      { frequency: 180, duration: 0.055, type: 'sawtooth', gain: 0.055 },
      { frequency: 120, duration: 0.06, type: 'square', gain: 0.04 },
    ])
  }

  const playLevelComplete = (): void => {
    playIfEnabled([
      { frequency: 520, duration: 0.08, type: 'triangle', gain: 0.05 },
      { frequency: 780, duration: 0.08, type: 'triangle', gain: 0.05 },
      { frequency: 1040, duration: 0.13, type: 'sine', gain: 0.055 },
    ])
  }

  const playLocked = (): void => {
    playIfEnabled([
      { frequency: 220, duration: 0.055, type: 'square', gain: 0.045 },
      { frequency: 160, duration: 0.07, type: 'square', gain: 0.04 },
    ])
  }

  const setSoundEnabled = (value: boolean): void => {
    settingsStore.setSoundEffectsEnabled(value)
  }

  const toggleSound = (): void => {
    settingsStore.toggleSoundEffects()
  }

  return {
    playClick,
    playSelect,
    playCorrect,
    playWrong,
    playLevelComplete,
    playLocked,
    setSoundEnabled,
    toggleSound,
    isSoundEnabled,
  }
}
