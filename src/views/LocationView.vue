<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { BaseBadge, BaseButton, BaseCard, BaseProgress } from '../components/ui'
import { getLocationById } from '../data/locations'
import { getLocationMissions } from '../data/missions'
import { useSoundEffects } from '../composables/useSoundEffects'
import { useGameStore } from '../stores/game'
import type { Mission } from '../types/mission'
import {
  getLocationCompletedMissions,
  isLocationCompleted,
  isLocationUnlocked,
  isMissionCompleted,
  isMissionUnlocked,
} from '../utils/gameProgress'

const route = useRoute()
const router = useRouter()
const gameStore = useGameStore()
const { playLocked } = useSoundEffects()

const locationId = computed(() => {
  const routeLocationId = route.params.locationId

  return Array.isArray(routeLocationId) ? routeLocationId[0] : routeLocationId
})

const location = computed(() => getLocationById(locationId.value))
const locationMissions = computed(() => (location.value ? getLocationMissions(location.value.id) : []))

const completedMissionsCount = computed(() =>
  location.value ? getLocationCompletedMissions(location.value.id, gameStore.player.completedMissions).length : 0,
)

const isCurrentLocationUnlocked = computed(() =>
  location.value ? isLocationUnlocked(location.value.id, gameStore.player.unlockedLocations) : false,
)

const isCurrentLocationCompleted = computed(() =>
  location.value ? isLocationCompleted(location.value.id, gameStore.player.completedLocations) : false,
)

const getMissionStatus = (mission: Mission): 'locked' | 'unlocked' | 'current' | 'completed' => {
  if (isMissionCompleted(mission.id, gameStore.player.completedMissions)) {
    return 'completed'
  }

  if (isMissionUnlocked(mission.id, gameStore.player.unlockedMissions)) {
    return 'current'
  }

  return 'locked'
}

const statusVariant = (status: 'locked' | 'unlocked' | 'current' | 'completed') => {
  const variants = {
    locked: 'neutral',
    unlocked: 'primary',
    current: 'warning',
    completed: 'success',
  } as const

  return variants[status]
}

const handleMissionCardClick = (mission: Mission): void => {
  if (getMissionStatus(mission) === 'locked') {
    playLocked()
    return
  }

  void router.push(`/level/${mission.id}`)
}
</script>

<template>
  <section class="grid gap-6">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-neon-green)]">Location Terminal</p>
        <h1 class="pixel-title mt-3 text-3xl text-slate-50">
          {{ location?.title ?? 'Location not found' }}
        </h1>
      </div>

      <RouterLink to="/" custom v-slot="{ navigate }">
        <BaseButton variant="ghost" @click="navigate">Назад к карте</BaseButton>
      </RouterLink>
    </div>

    <BaseCard v-if="!location" class="p-5">
      <BaseBadge variant="danger">Error</BaseBadge>
      <h2 class="mt-4 text-xl font-bold text-[var(--color-danger)]">Локация не найдена</h2>
      <p class="mt-2 text-slate-300">На карте нет локации с таким идентификатором.</p>
    </BaseCard>

    <BaseCard v-else-if="!isCurrentLocationUnlocked" locked class="p-5">
      <BaseBadge variant="neutral">Locked</BaseBadge>
      <h2 class="mt-4 text-xl font-bold text-white">Локация закрыта</h2>
      <p class="mt-2 text-slate-400">Завершите предыдущую локацию, чтобы открыть этот маршрут.</p>
    </BaseCard>

    <template v-else-if="location">
      <BaseCard class="grid gap-5 p-5">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <BaseBadge :variant="isCurrentLocationCompleted ? 'success' : 'warning'">
                {{ isCurrentLocationCompleted ? 'completed' : 'current' }}
              </BaseBadge>
              <BaseBadge variant="neutral">{{ locationMissions.length }} missions</BaseBadge>
            </div>

            <h2 class="pixel-title mt-4 text-2xl text-white">{{ location.title }}</h2>
            <p class="mt-3 max-w-3xl text-base leading-7 text-slate-300">{{ location.description }}</p>
          </div>

          <div
            class="grid size-16 shrink-0 place-items-center border-2 bg-black font-mono text-sm font-black"
            :style="{ borderColor: location.accentColor, color: location.accentColor, boxShadow: `0 0 22px ${location.accentColor}33` }"
          >
            {{ location.icon }}
          </div>
        </div>

        <BaseProgress :value="completedMissionsCount" :max="Math.max(1, locationMissions.length)" label="Location Progress" />
      </BaseCard>

      <div class="grid gap-3">
        <BaseCard
          v-for="mission in locationMissions"
          :key="mission.id"
          :completed="getMissionStatus(mission) === 'completed'"
          :locked="getMissionStatus(mission) === 'locked'"
          class="grid gap-4 p-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center"
          :class="getMissionStatus(mission) === 'locked' ? 'cursor-not-allowed' : ''"
          :interactive="getMissionStatus(mission) !== 'locked'"
          :role="getMissionStatus(mission) !== 'locked' ? 'button' : undefined"
          :aria-disabled="getMissionStatus(mission) === 'locked' ? 'true' : undefined"
          :tabindex="getMissionStatus(mission) !== 'locked' ? 0 : undefined"
          @click="handleMissionCardClick(mission)"
          @keydown.enter="handleMissionCardClick(mission)"
          @keydown.space.prevent="handleMissionCardClick(mission)"
        >
          <div class="min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <BaseBadge variant="neutral">#{{ mission.order }}</BaseBadge>
              <BaseBadge :variant="statusVariant(getMissionStatus(mission))">{{ getMissionStatus(mission) }}</BaseBadge>
            </div>

            <h3 class="mt-3 text-lg font-bold text-white">{{ mission.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-400">{{ mission.description }}</p>

            <div class="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
              <span>XP: {{ mission.xpReward }}</span>
              <span>Монеты: {{ mission.coinReward }}</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3 md:justify-end">
            <RouterLink
              v-if="getMissionStatus(mission) !== 'locked'"
              :to="`/level/${mission.id}`"
              custom
              v-slot="{ navigate }"
            >
              <BaseButton size="sm" @click.stop="navigate">
                {{ getMissionStatus(mission) === 'completed' ? 'Пройти ещё раз' : 'Начать миссию' }}
              </BaseButton>
            </RouterLink>

            <BaseBadge v-else variant="neutral">Закрыто</BaseBadge>
          </div>
        </BaseCard>
      </div>
    </template>
  </section>
</template>
