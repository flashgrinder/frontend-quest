<script setup lang="ts">
import { computed, ref } from 'vue'
import { achievements } from '../data/achievements'
import { useGameStore } from '../stores/game'
import type { Achievement, AchievementCategory, AchievementProgress, AchievementRarity } from '../types/achievement'
import { BaseBadge, BaseButton, BaseCard, BaseProgress } from '../components/ui'

type AchievementFilter = 'all' | AchievementCategory

const gameStore = useGameStore()
const activeFilter = ref<AchievementFilter>('all')

const filters: { value: AchievementFilter; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'progress', label: 'Progress' },
  { value: 'skill', label: 'Skill' },
  { value: 'learning', label: 'Learning' },
]

const unlockedAchievements = computed(() => gameStore.player.unlockedAchievements)
const unlockedCount = computed(() => unlockedAchievements.value.length)

const filteredAchievements = computed(() =>
  activeFilter.value === 'all'
    ? achievements
    : achievements.filter((achievement) => achievement.category === activeFilter.value),
)

const isAchievementUnlocked = (achievement: Achievement): boolean =>
  unlockedAchievements.value.some((item) => item.id === achievement.id)

const getUnlockedAt = (achievement: Achievement): string | undefined =>
  unlockedAchievements.value.find((item) => item.id === achievement.id)?.unlockedAt

const getProgress = (achievement: Achievement): AchievementProgress => gameStore.getAchievementProgress(achievement)

const getRarityBadgeVariant = (rarity: AchievementRarity): 'primary' | 'success' | 'warning' | 'danger' | 'neutral' => {
  if (rarity === 'legendary') {
    return 'warning'
  }

  if (rarity === 'epic') {
    return 'primary'
  }

  if (rarity === 'rare') {
    return 'success'
  }

  return 'neutral'
}

const formatUnlockedAt = (value?: string): string => {
  if (!value) {
    return 'Не открыто'
  }

  if (value === '1970-01-01T00:00:00.000Z') {
    return 'Перенесено из сохранения'
  }

  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))
}
</script>

<template>
  <section class="grid gap-6">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-neon-green)]">
          Reward Archive
        </p>
        <h1 class="pixel-title mt-3 text-3xl text-slate-50">Достижения</h1>
      </div>

      <BaseBadge variant="primary">{{ unlockedCount }} / {{ achievements.length }}</BaseBadge>
    </div>

    <BaseCard class="grid gap-4 p-4">
      <div class="flex flex-wrap gap-2">
        <BaseButton
          v-for="filter in filters"
          :key="filter.value"
          :variant="activeFilter === filter.value ? 'primary' : 'ghost'"
          size="sm"
          @click="activeFilter = filter.value"
        >
          {{ filter.label }}
        </BaseButton>
      </div>
    </BaseCard>

    <div class="grid gap-4 xl:grid-cols-2">
      <BaseCard
        v-for="achievement in filteredAchievements"
        :key="achievement.id"
        :completed="isAchievementUnlocked(achievement)"
        :locked="!isAchievementUnlocked(achievement)"
        class="grid gap-4 p-5"
        :class="isAchievementUnlocked(achievement) ? 'shadow-[0_0_28px_rgba(0,255,177,0.16)]' : ''"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex min-w-0 items-start gap-3">
            <div
              class="grid size-12 shrink-0 place-items-center border font-mono text-sm font-black uppercase"
              :class="isAchievementUnlocked(achievement)
                ? 'border-[var(--color-neon-green)] bg-[rgba(0,255,177,0.12)] text-[var(--color-neon-green)] shadow-[0_0_18px_rgba(0,255,177,0.24)]'
                : 'border-[rgba(156,163,175,0.32)] bg-black text-[var(--color-muted)]'"
            >
              {{ achievement.icon }}
            </div>

            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                <h2 class="text-lg font-black text-white">{{ achievement.title }}</h2>
                <BaseBadge :variant="getRarityBadgeVariant(achievement.rarity)">
                  {{ achievement.rarity }}
                </BaseBadge>
              </div>

              <p class="mt-2 text-sm leading-6 text-slate-300">{{ achievement.description }}</p>
            </div>
          </div>

          <BaseBadge :variant="isAchievementUnlocked(achievement) ? 'success' : 'neutral'">
            {{ isAchievementUnlocked(achievement) ? 'Получено' : 'Не открыто' }}
          </BaseBadge>
        </div>

        <div class="grid gap-3 border-t border-[rgba(0,255,177,0.18)] pt-4">
          <BaseProgress
            :value="getProgress(achievement).current"
            :max="getProgress(achievement).target"
            label="Progress"
          />

          <div class="flex flex-wrap items-center gap-2">
            <BaseBadge variant="success">+{{ achievement.rewardXp }} XP</BaseBadge>
            <BaseBadge variant="warning">+{{ achievement.rewardCoins }} coins</BaseBadge>
            <BaseBadge variant="neutral">{{ achievement.category }}</BaseBadge>
          </div>

          <p class="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">
            {{ formatUnlockedAt(getUnlockedAt(achievement)) }}
          </p>
        </div>
      </BaseCard>
    </div>
  </section>
</template>
