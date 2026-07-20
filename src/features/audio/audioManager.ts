import type { AudioSettings } from '../../types/settings'
import { MusicManager } from './musicManager'
import { SfxManager } from './sfxManager'
import type { ToneStep } from './types'

class AudioManager {
  private readonly musicManager = new MusicManager()
  private readonly sfxManager = new SfxManager()

  syncSettings(settings: AudioSettings): void {
    this.musicManager.setEnabled(settings.musicEnabled)
    this.musicManager.setVolume(settings.musicVolume)
    this.sfxManager.setEnabled(settings.soundEffectsEnabled)
    this.sfxManager.setVolume(settings.soundEffectsVolume)
  }

  async unlock(): Promise<void> {
    await this.sfxManager.unlock()
  }

  startBackgroundMusic(): void {
    this.musicManager.start()
  }

  fadeOutBackgroundMusic(): void {
    this.musicManager.fadeOut()
  }

  crossFadeToNextTrack(): void {
    this.musicManager.crossFadeToNextTrack()
  }

  playSoundEffect(steps: ToneStep[]): void {
    this.sfxManager.play(steps)
  }
}

export const audioManager = new AudioManager()
export type { ToneStep }
