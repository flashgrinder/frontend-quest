<script setup lang="ts">
import { computed, ref } from 'vue'
import { BaseBadge, BaseButton, BaseCard } from '../components/ui'
import CharacterProfileForm from '../features/character/components/CharacterProfileForm.vue'
import { useGameStore } from '../stores/game'
import { useProfileStore } from '../stores/profile'
import type { AvatarPreset } from '../types/profile'

const gameStore = useGameStore()
const profileStore = useProfileStore()

const isProfileSaved = ref(false)
const isResetConfirmVisible = ref(false)

const currentNickname = computed(() => profileStore.profile.nickname || 'Не задан')
const profileStatus = computed(() => (profileStore.isProfileCreated ? 'Создан' : 'Не создан'))

const saveProfile = (payload: { nickname: string; avatar: AvatarPreset }): void => {
  profileStore.saveProfile(payload.nickname, payload.avatar.id)
  isProfileSaved.value = true
  window.setTimeout(() => {
    isProfileSaved.value = false
  }, 1600)
}

const resetProfile = (): void => {
  profileStore.resetProfile()
  isResetConfirmVisible.value = false
  isProfileSaved.value = false
}
</script>

<template>
  <section class="grid gap-6">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-neon-green)]">
          Игрок
        </p>
        <h1 class="pixel-title mt-3 text-3xl text-slate-50">Профиль</h1>
      </div>

      <BaseBadge :variant="profileStore.isProfileCreated ? 'success' : 'neutral'">
        {{ profileStatus }}
      </BaseBadge>
    </div>

    <BaseCard class="grid gap-4 p-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="font-mono text-xs font-black uppercase tracking-[0.14em] text-[var(--color-muted)]">
            Текущий никнейм
          </p>
          <p class="mt-2 text-2xl font-black text-white">{{ currentNickname }}</p>
        </div>

        <div class="flex flex-wrap gap-2">
          <BaseBadge variant="neutral">{{ gameStore.player.rank }}</BaseBadge>
          <BaseBadge variant="primary">LVL {{ gameStore.player.level }}</BaseBadge>
        </div>
      </div>

      <p class="text-sm leading-6 text-slate-300">
        Изменения никнейма и аватара применяются только после сохранения. Игровой прогресс, XP, монеты и достижения остаются отдельно от профиля.
      </p>
    </BaseCard>

    <CharacterProfileForm
      :initial-profile="profileStore.profile"
      submit-label="Сохранить изменения"
      @submit="saveProfile"
    />

    <p
      v-if="isProfileSaved"
      class="font-mono text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-neon-green)]"
    >
      Профиль сохранён
    </p>

    <BaseCard class="grid gap-4 border-[var(--color-danger)] p-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="font-mono text-sm font-black uppercase tracking-[0.14em] text-[var(--color-danger)]">
            Сброс профиля
          </h2>
          <p class="mt-2 text-sm leading-6 text-slate-300">
            Сбрасывает только никнейм и выбранный аватар. Прогресс миссий, XP, уровень, монеты и достижения не удаляются.
          </p>
        </div>

        <BaseButton variant="danger" @click="isResetConfirmVisible = true">
          Сбросить профиль
        </BaseButton>
      </div>

      <div
        v-if="isResetConfirmVisible"
        class="grid gap-3 border border-[rgba(255,77,126,0.34)] bg-black/60 p-4 sm:flex sm:items-center sm:justify-between"
      >
        <p class="text-sm font-semibold text-[var(--color-danger)]">
          Подтверди сброс профиля. Игровой прогресс останется без изменений.
        </p>

        <div class="flex flex-wrap gap-2">
          <BaseButton variant="ghost" size="sm" @click="isResetConfirmVisible = false">
            Отмена
          </BaseButton>
          <BaseButton variant="danger" size="sm" @click="resetProfile">
            Подтвердить
          </BaseButton>
        </div>
      </div>
    </BaseCard>
  </section>
</template>
