<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: number
  label: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const safeValue = computed(() => Math.min(1, Math.max(0, props.modelValue)))
const safePercent = computed(() => Math.round(safeValue.value * 100))

const handleInput = (event: Event): void => {
  if (event.target instanceof HTMLInputElement) {
    emit('update:modelValue', Number(event.target.value) / 100)
  }
}
</script>

<template>
  <label class="volume-slider" :class="{ 'volume-slider--disabled': disabled }">
    <span class="volume-slider__header">
      <span>{{ label }}</span>
      <span>{{ safePercent }}%</span>
    </span>

    <input
      type="range"
      min="0"
      max="100"
      step="1"
      :value="safePercent"
      :disabled="disabled"
      :aria-label="label"
      class="volume-slider__input"
      :style="{ '--volume-value': `${safePercent}%` }"
      @input="handleInput"
    >
  </label>
</template>

<style scoped>
.volume-slider {
  display: grid;
  gap: 0.75rem;
}

.volume-slider__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--color-muted);
  font-family: var(--font-arcade);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.volume-slider__input {
  width: 100%;
  height: 1.1rem;
  appearance: none;
  border: 2px solid rgba(0, 255, 177, 0.35);
  background:
    linear-gradient(90deg, var(--color-neon-green) var(--volume-value), rgba(255, 255, 255, 0.08) var(--volume-value)),
    #050009;
  cursor: pointer;
  box-shadow:
    2px 2px 0 rgba(94, 0, 255, 0.32),
    0 0 16px rgba(0, 255, 177, 0.12);
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease;
}

.volume-slider__input:hover {
  border-color: var(--color-neon-pink);
  box-shadow:
    2px 2px 0 rgba(0, 255, 177, 0.28),
    0 0 20px rgba(229, 0, 255, 0.22);
}

.volume-slider__input:focus-visible {
  outline: 2px solid var(--color-warning);
  outline-offset: 4px;
}

.volume-slider__input:disabled {
  cursor: not-allowed;
  filter: grayscale(0.75);
  opacity: 0.55;
}

.volume-slider__input::-webkit-slider-thumb {
  width: 1rem;
  height: 1.55rem;
  appearance: none;
  border: 2px solid var(--color-neon-pink);
  background: var(--color-black);
  box-shadow: 0 0 16px rgba(229, 0, 255, 0.7);
}

.volume-slider__input::-moz-range-thumb {
  width: 1rem;
  height: 1.55rem;
  border: 2px solid var(--color-neon-pink);
  border-radius: 0;
  background: var(--color-black);
  box-shadow: 0 0 16px rgba(229, 0, 255, 0.7);
}

.volume-slider--disabled {
  opacity: 0.72;
}
</style>
