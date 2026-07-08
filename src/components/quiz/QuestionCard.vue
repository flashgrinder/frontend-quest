<script setup lang="ts">
import { computed, watch } from 'vue'
import { knowledgeCards } from '../../data/knowledgeCards'
import KnowledgeCardPanel from '../../features/knowledge/components/KnowledgeCard.vue'
import { useGameStore } from '../../stores/game'
import type { Achievement } from '../../types/achievement'
import type { Question } from '../../types/question'
import { BaseBadge, BaseCard } from '../ui'
import QuestionOption from './QuestionOption.vue'

interface Props {
  question: Question
  selectedOptionId?: string
}

const props = defineProps<Props>()
const gameStore = useGameStore()

const emit = defineEmits<{
  selectOption: [optionId: string]
  unlockAchievements: [achievements: Achievement[]]
}>()

const isAnswered = computed(() => Boolean(props.selectedOptionId))

const isOptionSelected = (optionId: string): boolean => props.selectedOptionId === optionId

const isOptionCorrect = (optionId: string): boolean => isAnswered.value && props.question.correctOptionId === optionId

const isOptionWrong = (optionId: string): boolean =>
  isAnswered.value && props.selectedOptionId === optionId && props.question.correctOptionId !== optionId

const knowledgeCard = computed(() => knowledgeCards.find((card) => card.questionId === props.question.id))

watch(
  () => (isAnswered.value ? knowledgeCard.value?.id : undefined),
  (knowledgeCardId) => {
    if (knowledgeCardId) {
      const unlockedAchievements = gameStore.checkAchievements({
        type: 'knowledgeCardOpened',
        knowledgeCardId,
      })

      if (unlockedAchievements.length > 0) {
        emit('unlockAchievements', unlockedAchievements)
      }
    }
  },
)
</script>

<template>
  <BaseCard class="grid gap-5 p-5">
    <div class="flex flex-wrap items-start justify-between gap-3">
      <div class="min-w-0">
        <BaseBadge variant="primary">Question</BaseBadge>
        <h3 class="mt-4 text-2xl font-bold leading-8 text-white md:text-3xl md:leading-10">
          {{ question.title }}
        </h3>
      </div>

      <BaseBadge variant="neutral">{{ question.difficulty }}</BaseBadge>
    </div>

    <div class="h-0.5 bg-gradient-to-r from-[var(--color-neon-green)] via-[var(--color-neon-pink)] to-transparent shadow-[0_0_18px_rgba(0,255,177,0.4)]"></div>

    <div class="grid gap-3">
      <QuestionOption
        v-for="option in question.options"
        :key="option.id"
        :option="option"
        :correct-option-id="question.correctOptionId"
        :selected="isOptionSelected(option.id)"
        :correct="isOptionCorrect(option.id)"
        :wrong="isOptionWrong(option.id)"
        :reveal-answer="isAnswered"
        @select="emit('selectOption', $event)"
      />
    </div>

    <KnowledgeCardPanel v-if="isAnswered && knowledgeCard" :card="knowledgeCard" />

    <BaseCard v-else-if="isAnswered" class="grid gap-4 p-5">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <BaseBadge variant="warning">Knowledge Preview</BaseBadge>
          <h4 class="mt-3 text-xl font-bold text-white">Технический конспект</h4>
        </div>

        <span class="neon-text font-mono text-xs font-bold uppercase tracking-[0.14em]">Interview Mode</span>
      </div>

      <div class="knowledge-preview-text code-panel whitespace-pre-line p-4 text-base leading-8 text-slate-100">
        {{ question.explanation }}
      </div>
    </BaseCard>
  </BaseCard>
</template>

<style scoped>
.knowledge-preview-text {
  font-family: var(--font-readable);
}
</style>
