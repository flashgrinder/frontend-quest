import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import { defineStore } from 'pinia'
import type { AudioSettings } from '../types/settings'

const AUDIO_SETTINGS_STORAGE_KEY = 'frontend-quest:settings:audio'

const createDefaultAudioSettings = (): AudioSettings => ({
  musicEnabled: true,
  musicVolume: 60,
  soundEffectsEnabled: true,
  soundEffectsVolume: 70,
})

const clampVolume = (value: number): number => Math.min(100, Math.max(0, Math.round(value)))

export const useSettingsStore = defineStore('settings', () => {
  const audio = useLocalStorage<AudioSettings>(AUDIO_SETTINGS_STORAGE_KEY, createDefaultAudioSettings(), {
    mergeDefaults: true,
  })

  audio.value.musicVolume = clampVolume(audio.value.musicVolume)
  audio.value.soundEffectsVolume = clampVolume(audio.value.soundEffectsVolume)

  const musicVolumePercent = computed(() => audio.value.musicVolume)
  const soundEffectsVolumePercent = computed(() => audio.value.soundEffectsVolume)

  const setMusicEnabled = (value: boolean): void => {
    audio.value.musicEnabled = value
  }

  const setSoundEffectsEnabled = (value: boolean): void => {
    audio.value.soundEffectsEnabled = value
  }

  const setMusicVolume = (value: number): void => {
    audio.value.musicVolume = clampVolume(value)
  }

  const setSoundEffectsVolume = (value: number): void => {
    audio.value.soundEffectsVolume = clampVolume(value)
  }

  const toggleMusic = (): void => {
    audio.value.musicEnabled = !audio.value.musicEnabled
  }

  const toggleSoundEffects = (): void => {
    audio.value.soundEffectsEnabled = !audio.value.soundEffectsEnabled
  }

  return {
    audio,
    musicVolumePercent,
    soundEffectsVolumePercent,
    setMusicEnabled,
    setSoundEffectsEnabled,
    setMusicVolume,
    setSoundEffectsVolume,
    toggleMusic,
    toggleSoundEffects,
  }
})
