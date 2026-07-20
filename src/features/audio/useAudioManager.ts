import { watch } from 'vue'
import { useSettingsStore } from '../../stores/settings'
import { audioManager } from './audioManager'

export const useAudioManager = () => {
  const settingsStore = useSettingsStore()

  watch(
    () => ({
      musicEnabled: settingsStore.audio.musicEnabled,
      musicVolume: settingsStore.audio.musicVolume,
      soundEffectsEnabled: settingsStore.audio.soundEffectsEnabled,
      soundEffectsVolume: settingsStore.audio.soundEffectsVolume,
    }),
    (settings) => {
      audioManager.syncSettings(settings)
    },
    { immediate: true },
  )

  const startBackgroundMusic = (): void => {
    audioManager.startBackgroundMusic()
  }

  const unlockAudio = async (): Promise<void> => {
    await audioManager.unlock()
  }

  return {
    startBackgroundMusic,
    unlockAudio,
  }
}
