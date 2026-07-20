<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import CharacterProfileForm from '../features/character/components/CharacterProfileForm.vue'
import { useProfileStore } from '../stores/profile'
import type { AvatarPreset } from '../types/profile'

const router = useRouter()
const profileStore = useProfileStore()
const isSaved = ref(false)

const pageTitle = computed(() => (profileStore.isProfileCreated ? 'Редактирование персонажа' : 'Создание персонажа'))
const submitLabel = computed(() => (profileStore.isProfileCreated ? 'Сохранить персонажа' : 'Начать приключение'))

const saveProfile = (payload: { nickname: string; avatar: AvatarPreset }): void => {
  profileStore.saveProfile(payload.nickname, payload.avatar.id)
  isSaved.value = true

  window.setTimeout(() => {
    void router.push('/')
  }, 520)
}
</script>

<template>
  <main class="scanline-overlay min-h-screen bg-[var(--fq-color-bg)] p-4 text-[var(--fq-color-text)] sm:p-6">
    <section class="mx-auto grid min-h-[calc(100vh-2rem)] w-full max-w-6xl content-center gap-6">
      <div class="grid gap-3">
        <p class="font-mono text-xs font-black uppercase tracking-[0.18em] text-[var(--color-neon-green)]">
          Hero Identity
        </p>
        <h1 class="pixel-title text-4xl text-white md:text-5xl">{{ pageTitle }}</h1>
        <p class="max-w-2xl text-base leading-7 text-slate-300">
          Выбери имя и пиксельный образ героя. Все аватары доступны сразу и бесплатно.
        </p>
      </div>

      <CharacterProfileForm
        :initial-profile="profileStore.profile"
        :submit-label="submitLabel"
        @submit="saveProfile"
      />

      <Transition name="profile-saved">
        <div
          v-if="isSaved"
          class="fixed inset-x-4 bottom-6 z-50 mx-auto max-w-md border-2 border-[var(--color-neon-green)] bg-black px-5 py-4 text-center font-mono text-sm font-black uppercase tracking-[0.12em] text-[var(--color-neon-green)] shadow-[0_0_28px_rgba(0,255,177,0.3)]"
        >
          Профиль сохранён
        </div>
      </Transition>
    </section>
  </main>
</template>

<style scoped>
.profile-saved-enter-active,
.profile-saved-leave-active {
  transition:
    opacity 220ms ease,
    transform 220ms ease;
}

.profile-saved-enter-from,
.profile-saved-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}
</style>
