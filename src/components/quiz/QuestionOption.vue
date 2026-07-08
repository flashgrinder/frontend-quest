<script setup lang="ts">
import { computed } from 'vue'
import { useSoundEffects } from '../../composables/useSoundEffects'
import type { QuestionOption } from '../../types/question'
import { BaseButton } from '../ui'

interface Props {
  option: QuestionOption
  correctOptionId: string
  selected?: boolean
  correct?: boolean
  wrong?: boolean
  revealAnswer?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  selected: false,
  correct: false,
  wrong: false,
  revealAnswer: false,
})

const emit = defineEmits<{
  select: [optionId: string]
}>()

const { playCorrect, playSelect, playWrong } = useSoundEffects()

const optionClasses = computed(() => [
  'quiz-option-button w-full text-left',
  props.revealAnswer ? '!cursor-default' : '',
  props.selected && !props.revealAnswer
    ? 'border-[var(--color-neon-violet)] bg-[rgba(94,0,255,0.22)] text-white shadow-[3px_3px_0_rgba(229,0,255,0.34),0_0_24px_rgba(94,0,255,0.42)]'
    : '',
  props.correct
    ? 'border-[var(--color-success)] bg-[rgba(93,255,79,0.16)] text-white shadow-[3px_3px_0_rgba(0,255,177,0.32),0_0_26px_rgba(93,255,79,0.34)] ring-2 ring-[rgba(93,255,79,0.45)]'
    : '',
  props.wrong
    ? 'border-[var(--color-danger)] bg-[rgba(255,77,126,0.18)] text-white shadow-[3px_3px_0_rgba(229,0,255,0.34),0_0_26px_rgba(255,77,126,0.34)] ring-2 ring-[rgba(255,77,126,0.45)]'
    : '',
])

const markerClasses = computed(() => [
  'grid size-9 shrink-0 place-items-center rounded-full border-2 bg-black font-mono text-sm font-black',
  props.correct ? 'border-[var(--color-success)] text-[var(--color-success)] shadow-[0_0_14px_rgba(93,255,79,0.35)]' : '',
  props.wrong ? 'border-[var(--color-danger)] text-[var(--color-danger)] shadow-[0_0_14px_rgba(255,77,126,0.35)]' : '',
  props.selected && !props.revealAnswer ? 'border-[var(--color-neon-violet)] text-[var(--color-neon-pink)] shadow-[0_0_14px_rgba(94,0,255,0.42)]' : '',
  !props.correct && !props.wrong && (!props.selected || props.revealAnswer)
    ? 'border-[rgba(0,255,177,0.42)] text-[var(--color-neon-green)]'
    : '',
])

const stateLabel = computed(() => {
  if (props.correct) {
    return 'Правильно'
  }

  if (props.wrong) {
    return 'Неправильно'
  }

  return ''
})

const stateSymbol = computed(() => {
  if (props.correct) {
    return '✓'
  }

  if (props.wrong) {
    return '✕'
  }

  return ''
})

const selectOption = (): void => {
  if (!props.revealAnswer) {
    playSelect()

    if (props.option.id === props.correctOptionId) {
      playCorrect()
    } else {
      playWrong()
    }

    emit('select', props.option.id)
  }
}
</script>

<template>
  <BaseButton
    variant="ghost"
    :sound="false"
    :class="optionClasses"
    :aria-pressed="selected"
    @click="selectOption"
  >
    <span class="grid w-full grid-cols-[3rem_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[3rem_minmax(0,1fr)_auto]">
      <span class="flex w-12 justify-start">
        <span :class="markerClasses">{{ option.id.toUpperCase() }}</span>
      </span>

      <span class="min-w-0 text-base leading-7 md:text-lg md:leading-8">
        {{ option.text }}
      </span>

      <span
        v-if="stateLabel"
        class="col-start-2 inline-flex shrink-0 items-center gap-2 justify-self-start border bg-black/60 px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.08em] sm:col-start-auto sm:justify-self-end"
        :class="correct ? 'border-[var(--color-success)] text-[var(--color-success)]' : 'border-[var(--color-danger)] text-[var(--color-danger)]'"
      >
        <span aria-hidden="true">{{ stateSymbol }}</span>
        <span>{{ stateLabel }}</span>
      </span>

      <span v-else aria-hidden="true"></span>
    </span>
  </BaseButton>
</template>

<style scoped>
.quiz-option-button {
  font-family: var(--font-readable);
  letter-spacing: 0;
  text-transform: none;
}
</style>
