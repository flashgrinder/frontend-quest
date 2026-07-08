<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  value: number
  max: number
  label?: string
}

const props = defineProps<Props>()

const percentage = computed(() => {
  if (props.max <= 0) {
    return 0
  }

  const rawPercentage = (props.value / props.max) * 100

  return Math.min(100, Math.max(0, rawPercentage))
})
</script>

<template>
  <div class="grid gap-2">
    <div class="flex items-center justify-between gap-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-muted)]">
      <span v-if="label" class="text-[var(--color-neon-green)]">{{ label }}</span>
      <span v-else>Progress</span>
      <span>{{ value }} / {{ max }} · {{ Math.round(percentage) }}%</span>
    </div>

    <div class="neon-border bg-black p-1">
      <progress class="base-progress block h-3 w-full overflow-hidden bg-black" :value="percentage" max="100">
        {{ Math.round(percentage) }}%
      </progress>
    </div>
  </div>
</template>

<style scoped>
.base-progress {
  appearance: none;
}

.base-progress::-webkit-progress-bar {
  background-color: #07000f;
  background-image:
    linear-gradient(90deg, rgba(245, 245, 245, 0.06) 1px, transparent 1px),
    linear-gradient(#07000f, #07000f);
  background-size: 10px 100%, auto;
}

.base-progress::-webkit-progress-value {
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-neon-green), var(--color-neon-violet));
  background-size: 8px 100%, auto;
  box-shadow: 0 0 16px rgba(0, 255, 177, 0.45);
  transition: width 180ms ease;
}

.base-progress::-moz-progress-bar {
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-neon-green), var(--color-neon-violet));
  background-size: 8px 100%, auto;
  box-shadow: 0 0 16px rgba(0, 255, 177, 0.45);
  transition: width 180ms ease;
}
</style>
