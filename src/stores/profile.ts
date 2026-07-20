import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import { defineStore } from 'pinia'
import { defaultAvatar, getAvatarById } from '../features/avatar'
import type { PlayerProfile } from '../types/profile'

const PROFILE_STORAGE_KEY = 'frontend-quest:profile'

const createDefaultProfile = (): PlayerProfile => ({
  nickname: '',
  avatarId: defaultAvatar?.id ?? '',
  profileCreatedAt: '',
  isProfileCreated: false,
})

export const useProfileStore = defineStore('profile', () => {
  const profile = useLocalStorage<PlayerProfile>(PROFILE_STORAGE_KEY, createDefaultProfile(), {
    mergeDefaults: true,
  })

  const legacyProfile = profile.value as PlayerProfile & { avatarUrl?: string }

  if (legacyProfile.avatarUrl) {
    delete legacyProfile.avatarUrl
  }

  const isProfileCreated = computed(() => profile.value.isProfileCreated)
  const avatar = computed(() => getAvatarById(profile.value.avatarId) ?? defaultAvatar)
  const avatarUrl = computed(() => avatar.value?.url ?? '')

  const saveProfile = (nickname: string, avatarId: string): void => {
    profile.value.nickname = nickname.trim()
    profile.value.avatarId = avatarId

    if (!profile.value.profileCreatedAt) {
      profile.value.profileCreatedAt = new Date().toISOString()
    }

    profile.value.isProfileCreated = true
  }

  const resetProfile = (): void => {
    profile.value = createDefaultProfile()
  }

  return {
    profile,
    isProfileCreated,
    avatar,
    avatarUrl,
    saveProfile,
    resetProfile,
  }
})
