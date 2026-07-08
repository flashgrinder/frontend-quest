<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useSoundEffects } from '../../composables/useSoundEffects'
import type { Achievement } from '../../types/achievement'
import { BaseBadge, BaseButton, BaseCard } from '../ui'

interface Props {
  correctAnswers: number
  wrongAnswers: number
  totalQuestions: number
  xpReward: number
  coinReward: number
  rewardGranted: boolean
  trainingRunCompleted: boolean
  newAchievements: Achievement[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  retry: []
}>()

const { playLevelComplete } = useSoundEffects()

const resultPercent = computed(() => {
  if (props.totalQuestions <= 0) {
    return 0
  }

  return Math.round((props.correctAnswers / props.totalQuestions) * 100)
})

onMounted(() => {
  if (props.rewardGranted) {
    playLevelComplete()
  }
})
</script>

<template>
  <BaseCard class="grid gap-6 p-6">
    <div class="grid gap-4 border-b border-[rgba(0,255,177,0.22)] pb-5">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <BaseBadge :variant="rewardGranted ? 'success' : 'warning'">
          {{ rewardGranted ? 'Mission Complete' : 'Training Complete' }}
        </BaseBadge>

        <span class="neon-text font-mono text-xs font-bold uppercase tracking-[0.14em]">Result Screen</span>
      </div>

      <div>
        <h2 class="pixel-title text-3xl text-white md:text-4xl">
          {{ rewardGranted ? 'Уровень завершён' : 'Тренировка завершена' }}
        </h2>
        <p class="mt-3 text-base leading-7 text-slate-300">
          Правильных ответов: {{ correctAnswers }} / {{ totalQuestions }} · Ошибок: {{ wrongAnswers }}
        </p>
      </div>
    </div>

    <div class="grid gap-3 sm:grid-cols-3">
      <BaseCard class="p-4">
        <p class="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">Accuracy</p>
        <p class="mt-2 text-3xl font-black text-[var(--color-neon-green)]">{{ resultPercent }}%</p>
      </BaseCard>

      <BaseCard class="p-4">
        <p class="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">XP Reward</p>
        <p class="mt-2 text-3xl font-black text-[var(--color-success)]">+{{ rewardGranted ? xpReward : 0 }}</p>
      </BaseCard>

      <BaseCard class="p-4">
        <p class="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">Coins</p>
        <p class="mt-2 text-3xl font-black text-[var(--color-warning)]">+{{ rewardGranted ? coinReward : 0 }}</p>
      </BaseCard>
    </div>

    <BaseCard v-if="rewardGranted" completed class="p-4">
      <p class="font-semibold text-[var(--color-success)]">
        Награда начислена впервые: +{{ xpReward }} XP, +{{ coinReward }} монет.
      </p>
    </BaseCard>

    <BaseCard v-else class="grid gap-2 p-4">
      <p v-if="trainingRunCompleted" class="font-semibold text-[var(--color-neon-green)]">Тренировочное прохождение завершено.</p>
      <p>Награда уже была получена ранее. Повторное прохождение доступно для тренировки.</p>
    </BaseCard>

    <section v-if="newAchievements.length > 0" class="grid gap-3">
      <div>
        <BaseBadge variant="warning">Новые достижения</BaseBadge>
        <h3 class="pixel-title mt-3 text-xl text-white">Награды разблокированы</h3>
      </div>

      <div class="grid gap-3 md:grid-cols-2">
        <BaseCard
          v-for="achievement in newAchievements"
          :key="achievement.id"
          completed
          class="grid gap-3 p-4 shadow-[0_0_24px_rgba(255,216,77,0.22)]"
        >
          <div class="flex items-start gap-3">
            <div class="grid size-11 shrink-0 place-items-center border-2 border-[var(--color-warning)] bg-black font-mono text-sm font-black text-[var(--color-warning)] shadow-[3px_3px_0_rgba(229,0,255,0.32),0_0_18px_rgba(255,216,77,0.22)]">
              {{ achievement.icon }}
            </div>

            <div class="min-w-0">
              <h4 class="font-bold text-white">{{ achievement.title }}</h4>
              <p class="mt-1 text-sm leading-6 text-slate-300">{{ achievement.description }}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 text-xs font-semibold">
            <BaseBadge variant="success">+{{ achievement.rewardXp }} XP</BaseBadge>
            <BaseBadge variant="warning">+{{ achievement.rewardCoins }} монет</BaseBadge>
          </div>
        </BaseCard>
      </div>
    </section>

    <div class="flex flex-col gap-3 sm:flex-row">
      <BaseButton class="w-full sm:w-auto" @click="emit('retry')">Пройти ещё раз</BaseButton>

      <RouterLink to="/" custom v-slot="{ navigate }">
        <BaseButton variant="ghost" class="w-full sm:w-auto" @click="navigate">Вернуться на карту</BaseButton>
      </RouterLink>
    </div>
  </BaseCard>
</template>
