<script setup lang="ts">
import { useSettingsStore } from '../stores/settings'
import { BaseBadge, BaseCard, BasePixelSwitch, BaseVolumeSlider } from '../components/ui'

const settingsStore = useSettingsStore()
</script>

<template>
  <section class="grid gap-6">
    <div>
      <p class="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-neon-green)]">
        Система
      </p>
      <h1 class="pixel-title mt-3 text-3xl text-slate-50">Настройки</h1>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <BaseCard class="grid gap-5 p-5">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <h2 class="text-xl font-bold text-white">Музыка</h2>
              <BaseBadge :variant="settingsStore.audio.musicEnabled ? 'success' : 'neutral'">
                {{ settingsStore.audio.musicEnabled ? 'Включена' : 'Выключена' }}
              </BaseBadge>
            </div>

            <p class="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Фоновая музыка приложения.
            </p>
          </div>

          <BasePixelSwitch
            v-model="settingsStore.audio.musicEnabled"
            label="Музыка"
          />
        </div>

        <BaseVolumeSlider
          v-model="settingsStore.audio.musicVolume"
          label="Громкость музыки"
          :disabled="!settingsStore.audio.musicEnabled"
        />
      </BaseCard>

      <BaseCard class="grid gap-5 p-5">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <h2 class="text-xl font-bold text-white">Звуковые эффекты</h2>
              <BaseBadge :variant="settingsStore.audio.soundEffectsEnabled ? 'success' : 'neutral'">
                {{ settingsStore.audio.soundEffectsEnabled ? 'Включены' : 'Выключены' }}
              </BaseBadge>
            </div>

            <p class="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Звуки интерфейса, ответов и игровых событий.
            </p>
          </div>

          <BasePixelSwitch
            v-model="settingsStore.audio.soundEffectsEnabled"
            label="Звуковые эффекты"
          />
        </div>

        <BaseVolumeSlider
          v-model="settingsStore.audio.soundEffectsVolume"
          label="Громкость эффектов"
          :disabled="!settingsStore.audio.soundEffectsEnabled"
        />
      </BaseCard>
    </div>
  </section>
</template>
