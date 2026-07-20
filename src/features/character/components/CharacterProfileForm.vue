<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { avatarPresets, defaultAvatar } from '../../avatar'
import AvatarGallery from '../../avatar/components/AvatarGallery.vue'
import { BaseButton, BaseCard, BaseBadge } from '../../../components/ui'
import type { AvatarPreset, PlayerProfile } from '../../../types/profile'

interface Props {
  initialProfile?: PlayerProfile
  submitLabel: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  submit: [payload: { nickname: string; avatar: AvatarPreset }]
}>()

const nickname = ref(props.initialProfile?.nickname ?? '')
const selectedAvatar = ref(
  avatarPresets.find((avatar) => avatar.id === props.initialProfile?.avatarId) ?? defaultAvatar ?? avatarPresets[0],
)
const hasSubmitted = ref(false)

const trimmedNickname = computed(() => nickname.value.trim())

const validationError = computed(() => {
  if (!hasSubmitted.value && trimmedNickname.value.length === 0) {
    return ''
  }

  if (trimmedNickname.value.length === 0) {
    return 'Введите никнейм.'
  }

  if (trimmedNickname.value.length < 3 || trimmedNickname.value.length > 20) {
    return 'Никнейм должен быть от 3 до 20 символов.'
  }

  if (!/^[\p{L}\p{N}_ -]+$/u.test(trimmedNickname.value)) {
    return 'Можно использовать буквы, цифры, пробел, дефис и подчёркивание.'
  }

  return ''
})

const canSubmit = computed(() => validationError.value.length === 0 && trimmedNickname.value.length > 0 && Boolean(selectedAvatar.value))

const selectAvatar = (avatar: AvatarPreset): void => {
  selectedAvatar.value = avatar
}

const submitForm = (): void => {
  hasSubmitted.value = true

  if (!canSubmit.value || !selectedAvatar.value) {
    return
  }

  emit('submit', {
    nickname: trimmedNickname.value,
    avatar: selectedAvatar.value,
  })
}

watch(
  () => props.initialProfile,
  (profile) => {
    nickname.value = profile?.nickname ?? ''
    selectedAvatar.value = avatarPresets.find((avatar) => avatar.id === profile?.avatarId) ?? defaultAvatar ?? avatarPresets[0]
    hasSubmitted.value = false
  },
)
</script>

<template>
  <div class="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
    <BaseCard class="grid gap-5 p-5">
      <div class="grid gap-2">
        <label for="character-nickname" class="font-mono text-xs font-black uppercase tracking-[0.14em] text-[var(--color-neon-green)]">
          Никнейм
        </label>
        <input
          id="character-nickname"
          v-model="nickname"
          type="text"
          maxlength="20"
          class="border-2 border-[rgba(0,255,177,0.34)] bg-black px-4 py-3 text-base font-bold text-white outline-none transition placeholder:text-slate-600 focus:border-[var(--color-neon-green)] focus:shadow-[0_0_18px_rgba(0,255,177,0.24)]"
          placeholder="Например: Neon Coder"
          autocomplete="nickname"
          @blur="hasSubmitted = true"
        >
        <p v-if="validationError" class="text-sm font-semibold text-[var(--color-danger)]">{{ validationError }}</p>
      </div>

      <div class="grid gap-3">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="font-mono text-xs font-black uppercase tracking-[0.14em] text-[var(--color-neon-pink)]">
            Выбор аватара
          </h2>
          <BaseBadge variant="neutral">{{ avatarPresets.length }} вариантов</BaseBadge>
        </div>

        <AvatarGallery
          :avatars="avatarPresets"
          :selected-avatar-id="selectedAvatar?.id ?? ''"
          @select="selectAvatar"
        />
      </div>
    </BaseCard>

    <BaseCard class="grid content-start gap-5 p-5">
      <div>
        <p class="font-mono text-xs font-black uppercase tracking-[0.14em] text-[var(--color-muted)]">Preview</p>
        <h2 class="pixel-title mt-2 text-2xl text-white">Персонаж</h2>
      </div>

      <div class="mx-auto grid size-44 place-items-center overflow-hidden rounded-full border-2 border-[var(--color-neon-green)] bg-black shadow-[5px_5px_0_rgba(229,0,255,0.38),0_0_26px_rgba(0,255,177,0.22)]">
        <img
          v-if="selectedAvatar"
          :src="selectedAvatar.url"
          :alt="selectedAvatar.title"
          class="size-full rounded-full object-cover"
        >
      </div>

      <div class="grid gap-2 text-center">
        <p class="truncate text-2xl font-black text-white">{{ trimmedNickname || 'Новый герой' }}</p>
        <div class="flex flex-wrap justify-center gap-2">
          <BaseBadge variant="neutral">Junior Adventurer</BaseBadge>
          <BaseBadge variant="primary">LVL 1</BaseBadge>
        </div>
      </div>

      <BaseButton size="lg" :disabled="!canSubmit" @click="submitForm">
        {{ submitLabel }}
      </BaseButton>
    </BaseCard>
  </div>
</template>
