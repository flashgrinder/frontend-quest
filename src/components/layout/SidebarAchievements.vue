<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { achievements } from '../../data/achievements'
import { useGameStore } from '../../stores/game'
import { BaseBadge, BaseCard } from '../ui'

const gameStore = useGameStore()

const achievementProgress = computed(() => `${gameStore.player.unlockedAchievements.length} / ${achievements.length}`)
</script>

<template>
  <section class="grid min-w-0 shrink-0 gap-2">
    <RouterLink to="/achievements" class="block min-w-0 cursor-pointer">
      <BaseCard interactive class="min-w-0 p-4">
        <div class="flex min-w-0 items-center justify-between gap-3">
          <div>
            <p class="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
              Achievements
            </p>
            <p class="mt-1 text-2xl font-black text-[var(--color-neon-pink)]">{{ achievementProgress }}</p>
          </div>

          <BaseBadge variant="success">Rewards</BaseBadge>
        </div>
      </BaseCard>
    </RouterLink>
  </section>
</template>
