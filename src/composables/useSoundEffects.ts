import { computed } from 'vue'
import { audioManager } from '../features/audio'
import { useSettingsStore } from '../stores/settings'
import type { ToneStep } from '../features/audio/audioManager'

export const useSoundEffects = () => {
  const settingsStore = useSettingsStore()

  const isSoundEnabled = computed(() => settingsStore.audio.soundEffectsEnabled)

  const playIfEnabled = (steps: ToneStep[]): void => {
    audioManager.playSoundEffect(steps)
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
