import type { AudioTrack } from './types'

const easeOutCubic = (value: number): number => 1 - (1 - value) ** 3

export class MusicPlayer {
  private audio: HTMLAudioElement | undefined
  private fadeFrame: number | undefined
  private targetVolume = 0

  get currentTrackId(): string | undefined {
    return this.audio?.dataset.trackId
  }

  get isPlaying(): boolean {
    return Boolean(this.audio && !this.audio.paused)
  }

  load(track: AudioTrack): void {
    this.cancelFade()

    if (this.audio) {
      this.audio.pause()
    }

    this.audio = new Audio(track.src)
    this.audio.dataset.trackId = track.id
    this.audio.loop = false
    this.audio.preload = 'auto'
    this.audio.volume = 0
  }

  async play(): Promise<boolean> {
    if (!this.audio) {
      return false
    }

    if (!this.audio.paused) {
      return true
    }

    try {
      await this.audio.play()
      return true
    } catch {
      // Missing files or autoplay restrictions must not break the app.
      return false
    }
  }

  pause(): void {
    this.audio?.pause()
  }

  fadeTo(volume: number, durationMs: number, pauseWhenSilent = false): void {
    if (!this.audio) {
      return
    }

    this.cancelFade()

    const audio = this.audio
    const startVolume = audio.volume
    const safeTargetVolume = Math.min(1, Math.max(0, volume))
    const startedAt = performance.now()

    this.targetVolume = safeTargetVolume

    const tick = (now: number): void => {
      const elapsed = now - startedAt
      const progress = Math.min(1, elapsed / durationMs)
      const easedProgress = easeOutCubic(progress)

      audio.volume = startVolume + (this.targetVolume - startVolume) * easedProgress

      if (progress < 1) {
        this.fadeFrame = window.requestAnimationFrame(tick)
        return
      }

      this.fadeFrame = undefined
      audio.volume = this.targetVolume

      if (pauseWhenSilent && this.targetVolume === 0) {
        audio.pause()
      }
    }

    this.fadeFrame = window.requestAnimationFrame(tick)
  }

  onEnded(handler: () => void): void {
    if (this.audio) {
      this.audio.onended = handler
    }
  }

  onError(handler: () => void): void {
    if (this.audio) {
      this.audio.onerror = handler
    }
  }

  private cancelFade(): void {
    if (this.fadeFrame) {
      window.cancelAnimationFrame(this.fadeFrame)
      this.fadeFrame = undefined
    }
  }
}
