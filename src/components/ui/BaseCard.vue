<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  interactive?: boolean
  completed?: boolean
  locked?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  interactive: false,
  completed: false,
  locked: false,
})

const cardClasses = computed(() => [
  'base-card pixel-panel text-[var(--color-text)] transition duration-200',
  props.interactive ? 'base-card--interactive' : '',
  props.completed ? 'base-card--completed' : '',
  props.locked ? 'base-card--locked' : '',
])
</script>

<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<style scoped>
.base-card--interactive:hover {
  border-color: var(--color-neon-green);
  box-shadow:
    0 0 0 1px rgba(0, 255, 177, 0.22),
    0 0 28px rgba(0, 255, 177, 0.22),
    inset 0 0 18px rgba(0, 255, 177, 0.08);
  transform: translateY(-4px);
}

.base-card--locked {
  cursor: not-allowed;
}

.base-card--interactive[role='button']:not([aria-disabled='true']) {
  cursor: pointer;
}

.base-card--interactive:active {
  transform: translateY(0);
}

.base-card--completed {
  border-color: var(--color-success);
  box-shadow:
    0 0 0 1px rgba(93, 255, 79, 0.22),
    0 0 24px rgba(93, 255, 79, 0.18),
    inset 0 0 18px rgba(93, 255, 79, 0.06);
}

.base-card--locked {
  border-color: rgba(156, 163, 175, 0.42);
  color: var(--color-muted);
  filter: grayscale(0.55);
  opacity: 0.72;
  box-shadow: inset 0 0 0 1px rgba(156, 163, 175, 0.06);
}
</style>
