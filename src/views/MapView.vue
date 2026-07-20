<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { BaseBadge, BaseCard, BaseProgress } from '../components/ui'
import { APP_RELEASE_LABEL } from '../config/version'
import { locations } from '../data/locations'
import { missions } from '../data/missions'
import { worlds } from '../data/worlds'
import { useGameStore } from '../stores/game'
import type { Location } from '../types/location'
import type { World } from '../types/world'
import {
  getLocationCompletedMissions,
  isLocationCompleted,
  isLocationUnlocked,
  isMissionCompleted,
} from '../utils/gameProgress'

const gameStore = useGameStore()
const mapRoot = ref<HTMLElement | null>(null)

const orderedWorlds = computed(() => [...worlds].sort((currentWorld, nextWorld) => currentWorld.order - nextWorld.order))

const getWorldLocations = (world: World): Location[] =>
  locations
    .filter((location) => world.locationIds.includes(location.id))
    .sort((currentLocation, nextLocation) => currentLocation.order - nextLocation.order)

const getLocationStatus = (location: Location): 'locked' | 'unlocked' | 'current' | 'completed' => {
  const locationMissions = missions.filter((mission) => mission.locationId === location.id)

  if (locationMissions.length > 0 && isLocationCompleted(location.id, gameStore.player.completedLocations)) {
    return 'completed'
  }

  if (isLocationUnlocked(location.id, gameStore.player.unlockedLocations)) {
    return locationMissions.some((mission) => !isMissionCompleted(mission.id, gameStore.player.completedMissions))
      ? 'current'
      : 'completed'
  }

  return 'locked'
}

const getLocationProgressValue = (location: Location): number =>
  getLocationCompletedMissions(location.id, gameStore.player.completedMissions).length

const getLocationProgressMax = (location: Location): number =>
  missions.filter((mission) => mission.locationId === location.id).length

const getWorldProgressValue = (world: World): number =>
  getWorldLocations(world).reduce((sum, location) => sum + getLocationProgressValue(location), 0)

const getWorldProgressMax = (world: World): number =>
  getWorldLocations(world).reduce((sum, location) => sum + getLocationProgressMax(location), 0)

const getWorldStatus = (world: World): 'locked' | 'unlocked' | 'current' | 'completed' => {
  const worldLocations = getWorldLocations(world)
  const progressMax = getWorldProgressMax(world)

  if (progressMax > 0 && getWorldProgressValue(world) === progressMax) {
    return 'completed'
  }

  if (worldLocations.some((location) => isLocationUnlocked(location.id, gameStore.player.unlockedLocations))) {
    return 'current'
  }

  return world.status
}

const getFirstAccessibleWorldId = (): string =>
  orderedWorlds.value.find((world) => getWorldStatus(world) !== 'locked')?.id ?? orderedWorlds.value[0]?.id ?? ''

const activeWorldId = ref(getFirstAccessibleWorldId())

const activeWorld = computed(() => {
  const selectedWorld = orderedWorlds.value.find((world) => world.id === activeWorldId.value)

  if (selectedWorld && getWorldStatus(selectedWorld) !== 'locked') {
    return selectedWorld
  }

  const fallbackWorld = orderedWorlds.value.find((world) => getWorldStatus(world) !== 'locked') ?? orderedWorlds.value[0]
  activeWorldId.value = fallbackWorld?.id ?? ''

  return fallbackWorld
})

const activeWorldLocations = computed(() => (activeWorld.value ? getWorldLocations(activeWorld.value) : []))

const statusVariant = (status: 'locked' | 'unlocked' | 'current' | 'completed') => {
  const variants = {
    locked: 'neutral',
    unlocked: 'primary',
    current: 'warning',
    completed: 'success',
  } as const

  return variants[status]
}

const handleMapScrollRequest = (): void => {
  mapRoot.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const selectWorld = (world: World): void => {
  if (getWorldStatus(world) === 'locked') {
    return
  }

  activeWorldId.value = world.id
}

onMounted(() => {
  window.addEventListener('frontend-quest:scroll-map', handleMapScrollRequest)
})

onUnmounted(() => {
  window.removeEventListener('frontend-quest:scroll-map', handleMapScrollRequest)
})
</script>

<template>
  <section ref="mapRoot" class="grid scroll-mt-6 gap-8">
    <header class="grid gap-5">
      <div>
        <p class="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-neon-green)]">{{ APP_RELEASE_LABEL }}</p>
        <h1 class="pixel-title mt-3 text-3xl text-slate-50 md:text-4xl">World Map</h1>
      </div>
    </header>

    <section class="grid gap-4">
      <div class="grid gap-3 md:grid-cols-2">
        <button
          v-for="world in orderedWorlds"
          :key="world.id"
          type="button"
          class="arcade-button-base grid min-h-[5rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-2 bg-black/70 p-4 text-left transition"
          :class="[
            activeWorld?.id === world.id
              ? 'border-[var(--color-neon-green)] text-[var(--color-neon-green)] shadow-[4px_4px_0_rgba(229,0,255,0.34),0_0_28px_rgba(0,255,177,0.28)]'
              : 'border-[rgba(0,255,177,0.28)] text-[var(--color-text)] hover:border-[var(--color-neon-green)] hover:text-[var(--color-neon-green)]',
            getWorldStatus(world) === 'locked' ? 'cursor-not-allowed opacity-55 hover:border-slate-600 hover:text-slate-500' : 'cursor-pointer',
          ]"
          :disabled="getWorldStatus(world) === 'locked'"
          @click="selectWorld(world)"
        >
          <span class="min-w-0">
            <span class="font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--color-muted)]">
              World {{ world.order }}
            </span>
            <span class="mt-2 block truncate font-mono text-base font-black uppercase tracking-[0.08em]">{{ world.title }}</span>
          </span>

          <span
            class="grid size-11 place-items-center border-2 bg-black font-mono text-xs font-black"
            :style="{ borderColor: world.accentColor, color: world.accentColor }"
          >
            {{ world.icon }}
          </span>
        </button>
      </div>

      <BaseCard
        v-if="activeWorld"
        :key="activeWorld.id"
        class="grid gap-5 p-5"
        :class="getWorldStatus(activeWorld) === 'locked' ? 'opacity-70' : ''"
      >
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <BaseBadge :variant="statusVariant(getWorldStatus(activeWorld))">{{ getWorldStatus(activeWorld) }}</BaseBadge>
              <BaseBadge variant="neutral">World {{ activeWorld.order }}</BaseBadge>
            </div>

            <h2 class="pixel-title mt-3 text-2xl text-white">{{ activeWorld.title }}</h2>
            <p class="mt-2 max-w-3xl text-sm leading-6 text-slate-300">{{ activeWorld.description }}</p>
          </div>

          <div
            class="grid size-14 shrink-0 place-items-center border-2 bg-black font-mono text-sm font-black"
            :style="{ borderColor: activeWorld.accentColor, color: activeWorld.accentColor, boxShadow: `0 0 20px ${activeWorld.accentColor}33` }"
          >
            {{ activeWorld.icon }}
          </div>
        </div>

        <BaseProgress :value="getWorldProgressValue(activeWorld)" :max="Math.max(1, getWorldProgressMax(activeWorld))" label="World Progress" />

        <div class="grid gap-3 md:grid-cols-2">
          <template v-for="location in activeWorldLocations" :key="location.id">
            <RouterLink
              v-if="getLocationStatus(location) !== 'locked'"
              :to="`/location/${location.id}`"
              class="block"
            >
              <BaseCard
                interactive
                :completed="getLocationStatus(location) === 'completed'"
                class="h-full grid gap-4 p-4"
              >
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <BaseBadge :variant="statusVariant(getLocationStatus(location))">{{ getLocationStatus(location) }}</BaseBadge>
                    <h3 class="mt-3 text-lg font-black text-white">{{ location.title }}</h3>
                  </div>

                  <span
                    class="grid size-11 shrink-0 place-items-center border-2 bg-black font-mono text-xs font-black"
                    :style="{ borderColor: location.accentColor, color: location.accentColor }"
                  >
                    {{ location.icon }}
                  </span>
                </div>

                <p class="text-sm leading-6 text-slate-300">{{ location.description }}</p>

                <div class="grid gap-2">
                  <BaseProgress
                    :value="getLocationProgressValue(location)"
                    :max="Math.max(1, getLocationProgressMax(location))"
                    label="Location"
                  />
                  <p class="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    {{ getLocationProgressValue(location) }} / {{ getLocationProgressMax(location) }} missions
                  </p>
                </div>
              </BaseCard>
            </RouterLink>

            <BaseCard v-else locked class="grid gap-4 p-4">
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <BaseBadge variant="neutral">locked</BaseBadge>
                  <h3 class="mt-3 text-lg font-black text-white">{{ location.title }}</h3>
                </div>

                <span class="grid size-11 shrink-0 place-items-center border-2 border-slate-600 bg-black font-mono text-xs font-black text-slate-500">
                  {{ location.icon }}
                </span>
              </div>

              <p class="text-sm leading-6 text-slate-400">{{ location.description }}</p>

              <p class="font-mono text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                {{ getLocationProgressMax(location) }} missions
              </p>
            </BaseCard>
          </template>
        </div>
      </BaseCard>
    </section>
  </section>
</template>
