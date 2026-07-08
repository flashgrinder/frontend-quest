<script setup lang="ts">
import { useSoundEffects } from '../composables/useSoundEffects'
import { BaseBadge, BaseCard } from '../components/ui'

const { isSoundEnabled, setSoundEnabled } = useSoundEffects()

const handleSoundChange = (event: Event): void => {
  if (event.target instanceof HTMLInputElement) {
    setSoundEnabled(event.target.checked)
  }
}
</script>

<template>
  <section class="grid gap-6">
    <div>
      <p class="text-sm font-semibold uppercase text-sky-300">Система</p>
      <h1 class="mt-3 text-3xl font-bold text-slate-50">Настройки</h1>
    </div>

    <BaseCard class="grid gap-4 p-5">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div class="min-w-0">
          <div class="flex flex-wrap items-center gap-2">
            <h2 class="text-xl font-bold text-white">Звуки интерфейса</h2>
            <BaseBadge :variant="isSoundEnabled ? 'success' : 'neutral'">
              {{ isSoundEnabled ? 'Включены' : 'Выключены' }}
            </BaseBadge>
          </div>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Киберпанк-звуки при кликах, выборе ответов и завершении уровней.
          </p>
        </div>

        <label class="inline-flex cursor-pointer items-center gap-3 rounded-full border border-sky-300/25 bg-slate-900/70 p-1.5 transition hover:border-sky-300/45">
          <input
            class="peer sr-only"
            type="checkbox"
            :checked="isSoundEnabled"
            aria-label="Звуки интерфейса"
            @change="handleSoundChange"
          >

          <span class="relative h-7 w-12 rounded-full bg-slate-700 transition peer-checked:bg-sky-400">
            <span
              class="absolute left-1 top-1 size-5 rounded-full bg-white shadow-lg transition"
              :class="isSoundEnabled ? 'translate-x-5' : ''"
            ></span>
          </span>

          <span class="pr-3 text-sm font-semibold text-slate-200">
            {{ isSoundEnabled ? 'On' : 'Off' }}
          </span>
        </label>
      </div>
    </BaseCard>
  </section>
</template>
