import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import { defineStore } from 'pinia'
import type { AudioSettings } from '../types/settings'

const AUDIO_SETTINGS_STORAGE_KEY = 'frontend-quest:settings:audio'

const createDefaultAudioSettings = (): AudioSettings => ({
  musicEnabled: true,
  musicVolume: 1,
  soundEffectsEnabled: true,
  soundEffectsVolume: 1,
})

const normalizeVolume = (value: number): number => {
  if (value > 1) {
    return Math.min(1, Math.max(0, value / 100))
  }

  return Math.min(1, Math.max(0, value))
}

export const useSettingsStore = defineStore('settings', () => {
  const audio = useLocalStorage<AudioSettings>(AUDIO_SETTINGS_STORAGE_KEY, createDefaultAudioSettings(), {
    mergeDefaults: true,
  })

  audio.value.musicVolume = normalizeVolume(audio.value.musicVolume)
  audio.value.soundEffectsVolume = normalizeVolume(audio.value.soundEffectsVolume)

  const musicVolumePercent = computed(() => Math.round(audio.value.musicVolume * 100))
  const soundEffectsVolumePercent = computed(() => Math.round(audio.value.soundEffectsVolume * 100))

  const setMusicEnabled = (value: boolean): void => {
    audio.value.musicEnabled = value
  }

  const setSoundEffectsEnabled = (value: boolean): void => {
    audio.value.soundEffectsEnabled = value
  }

  const setMusicVolume = (value: number): void => {
    audio.value.musicVolume = normalizeVolume(value)
  }

  const setSoundEffectsVolume = (value: number): void => {
    audio.value.soundEffectsVolume = normalizeVolume(value)
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
