<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import LevelResult from '../components/quiz/LevelResult.vue'
import QuestionCard from '../components/quiz/QuestionCard.vue'
import { BaseBadge, BaseButton, BaseCard, BaseProgress } from '../components/ui'
import { levels, normalizeLevelId } from '../data/levels'
import { getMissionLocation } from '../data/missions'
import { questions } from '../data/questions'
import { useGameStore } from '../stores/game'
import type { Achievement } from '../types/achievement'
import { isLevelCompleted, isLevelUnlocked } from '../utils/gameProgress'

const route = useRoute()
const gameStore = useGameStore()

const levelId = computed(() => {
  const routeLevelId = route.params.levelId

  return normalizeLevelId(Array.isArray(routeLevelId) ? routeLevelId[0] : routeLevelId)
})

const level = computed(() => levels.find((item) => item.id === levelId.value))

const levelQuestions = computed(() => questions.filter((question) => question.levelId === levelId.value))

const currentQuestionIndex = ref(0)
const selectedOptionId = ref<string | undefined>()
const correctAnswers = ref(0)
const wrongAnswers = ref(0)
const currentCorrectStreak = ref(0)
const maxCorrectStreak = ref(0)
const quizFinished = ref(false)
const rewardGranted = ref(false)
const trainingRunCompleted = ref(false)
const newAchievements = ref<Achievement[]>([])

const isCurrentLevelUnlocked = computed(() => {
  if (!level.value) {
    return false
  }

  return !level.value.lockedByDefault || isLevelUnlocked(level.value.id, gameStore.player.unlockedLevels)
})

const isCurrentLevelCompleted = computed(() => {
  if (!level.value) {
    return false
  }

  return isLevelCompleted(level.value.id, gameStore.player.completedLevels)
})

const totalQuestions = computed(() => levelQuestions.value.length)

const currentQuestion = computed(() => levelQuestions.value[currentQuestionIndex.value])

const currentQuestionNumber = computed(() => {
  if (totalQuestions.value === 0) {
    return 0
  }

  return currentQuestionIndex.value + 1
})

const isLastQuestion = computed(() => currentQuestionIndex.value >= totalQuestions.value - 1)

const resultPercent = computed(() => {
  if (totalQuestions.value === 0) {
    return 0
  }

  return Math.round((correctAnswers.value / totalQuestions.value) * 100)
})

const missionProgressValue = computed(() => {
  if (quizFinished.value) {
    return totalQuestions.value
  }

  return currentQuestion.value ? currentQuestionNumber.value : 0
})

const levelRunStatus = computed(() => (isCurrentLevelCompleted.value ? 'Тренировка' : 'Впервые'))

const resetQuizState = (): void => {
  currentQuestionIndex.value = 0
  selectedOptionId.value = undefined
  correctAnswers.value = 0
  wrongAnswers.value = 0
  currentCorrectStreak.value = 0
  maxCorrectStreak.value = 0
  quizFinished.value = false
  rewardGranted.value = false
  trainingRunCompleted.value = false
  newAchievements.value = []
}

const restartQuiz = (): void => {
  resetQuizState()
}

const addNewAchievements = (items: Achievement[]): void => {
  items.forEach((achievement) => {
    if (!newAchievements.value.some((item) => item.id === achievement.id)) {
      newAchievements.value.push(achievement)
    }
  })
}

const selectOption = (optionId: string): void => {
  if (!currentQuestion.value || selectedOptionId.value) {
    return
  }

  selectedOptionId.value = optionId

  const isCorrect = optionId === currentQuestion.value.correctOptionId

  if (isCorrect) {
    correctAnswers.value += 1
    currentCorrectStreak.value += 1
    maxCorrectStreak.value = Math.max(maxCorrectStreak.value, currentCorrectStreak.value)
  } else {
    currentCorrectStreak.value = 0
    wrongAnswers.value += 1
  }

  addNewAchievements(
    gameStore.checkAchievements({
      type: 'questionAnswered',
      isCorrect,
      questionDifficulty: currentQuestion.value.difficulty,
      currentStreak: currentCorrectStreak.value,
    }),
  )
}

const finishLevel = (): void => {
  if (!level.value) {
    return
  }

  const wasCompleted = isLevelCompleted(level.value.id, gameStore.player.completedLevels)

  if (!wasCompleted) {
    gameStore.completeLevel(level.value.id, level.value.xpReward, level.value.coinReward)
  }

  rewardGranted.value = !wasCompleted
  trainingRunCompleted.value = wasCompleted
  addNewAchievements(
    gameStore.checkAchievements({
      type: 'missionCompleted',
      missionId: level.value.id,
      locationId: getMissionLocation(level.value.id),
      correctAnswers: correctAnswers.value,
      wrongAnswers: wrongAnswers.value,
      totalQuestions: totalQuestions.value,
      maxCorrectStreak: maxCorrectStreak.value,
      wasCompleted,
    }),
  )
  quizFinished.value = true
}

const goToNextQuestion = (): void => {
  if (!selectedOptionId.value) {
    return
  }

  if (isLastQuestion.value) {
    finishLevel()
    return
  }

  currentQuestionIndex.value += 1
  selectedOptionId.value = undefined
}

watch(levelId, resetQuizState)
</script>

<template>
  <section class="grid gap-6">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-neon-green)]">Mission Node</p>
        <h1 class="pixel-title mt-3 text-3xl text-slate-50">
          {{ level?.title ?? 'Уровень не найден' }}
        </h1>
      </div>

      <RouterLink to="/" custom v-slot="{ navigate }">
        <BaseButton variant="ghost" @click="navigate">Назад к карте</BaseButton>
      </RouterLink>
    </div>

    <BaseCard v-if="!level" class="p-5">
      <BaseBadge variant="danger">Error</BaseBadge>
      <h2 class="mt-4 text-xl font-bold text-[var(--color-danger)]">Ошибка</h2>
      <p class="mt-2 text-slate-300">Уровень с таким идентификатором не найден.</p>
    </BaseCard>

    <BaseCard v-else-if="!isCurrentLevelUnlocked" locked class="p-5">
      <BaseBadge variant="neutral">Закрыто</BaseBadge>
      <h2 class="mt-4 text-xl font-bold text-white">Уровень закрыт</h2>
      <p class="mt-2 text-slate-400">Вернитесь к карте и пройдите предыдущие испытания.</p>
    </BaseCard>

    <template v-else-if="quizFinished && level">
      <LevelResult
        :correct-answers="correctAnswers"
        :wrong-answers="wrongAnswers"
        :total-questions="totalQuestions"
        :xp-reward="level.xpReward"
        :coin-reward="level.coinReward"
        :reward-granted="rewardGranted"
        :training-run-completed="trainingRunCompleted"
        :new-achievements="newAchievements"
        @retry="restartQuiz"
      />
    </template>

    <template v-else>
      <BaseCard class="grid gap-5 p-5">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <BaseBadge variant="primary">Mission</BaseBadge>
              <BaseBadge :variant="isCurrentLevelCompleted ? 'warning' : 'success'">{{ levelRunStatus }}</BaseBadge>
              <BaseBadge variant="neutral">{{ level.difficulty }}</BaseBadge>
            </div>

            <h2 class="pixel-title mt-4 text-2xl text-white">{{ level.title }}</h2>
            <p class="mt-3 max-w-3xl text-base leading-7 text-slate-300">{{ level.description }}</p>
          </div>

          <div class="grid min-w-[12rem] gap-2">
            <BaseBadge variant="success">XP: {{ level.xpReward }}</BaseBadge>
            <BaseBadge variant="warning">Монеты: {{ level.coinReward }}</BaseBadge>
          </div>
        </div>

        <div class="grid gap-4 border-t border-[rgba(0,255,177,0.22)] pt-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <BaseProgress :value="missionProgressValue" :max="totalQuestions" label="Mission Progress" />

          <div class="grid gap-2 sm:grid-cols-3 lg:min-w-[25rem]">
            <BaseCard class="p-3">
              <p class="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">Question</p>
              <p class="mt-1 text-xl font-black text-[var(--color-neon-green)]">{{ currentQuestionNumber }} / {{ totalQuestions }}</p>
            </BaseCard>

            <BaseCard class="p-3" completed>
              <p class="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">Correct</p>
              <p class="mt-1 text-xl font-black text-[var(--color-success)]">{{ correctAnswers }}</p>
            </BaseCard>

            <BaseCard class="p-3">
              <p class="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">Accuracy</p>
              <p class="mt-1 text-xl font-black text-[var(--color-neon-pink)]">{{ resultPercent }}%</p>
            </BaseCard>
          </div>
        </div>
      </BaseCard>

      <BaseCard v-if="isCurrentLevelCompleted" completed class="p-4">
        <BaseBadge variant="success">Тренировка</BaseBadge>
        <p class="mt-3 text-sm leading-6 text-emerald-50">
          Вы уже проходили этот уровень.<br>
          Повторное прохождение доступно для тренировки.<br>
          Награда повторно начисляться не будет.
        </p>
      </BaseCard>

      <section v-if="currentQuestion" class="grid gap-4">
        <QuestionCard
          :question="currentQuestion"
          :selected-option-id="selectedOptionId"
          @select-option="selectOption"
          @unlock-achievements="addNewAchievements"
        />

        <div class="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p class="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
            Ошибок: {{ wrongAnswers }} · Серия: {{ currentCorrectStreak }}
          </p>

          <BaseButton :disabled="!selectedOptionId" @click="goToNextQuestion">
            {{ isLastQuestion ? 'Показать результат' : 'Следующий вопрос' }}
          </BaseButton>
        </div>
      </section>

      <BaseCard v-else class="p-5">
        <h2 class="text-xl font-bold text-white">Вопросы не найдены</h2>
        <p class="mt-2 text-slate-400">Для этого уровня пока нет данных квиза.</p>
      </BaseCard>
    </template>
  </section>
</template>
