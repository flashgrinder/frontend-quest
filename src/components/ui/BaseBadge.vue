<script setup lang="ts">
import { computed } from 'vue'

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'neutral'

interface Props {
  variant?: BadgeVariant
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'neutral',
})

const variantClasses: Record<BadgeVariant, string> = {
  primary:
    'border-[var(--color-neon-green)] bg-[rgba(0,255,177,0.12)] text-[var(--color-neon-green)] shadow-[0_0_12px_rgba(0,255,177,0.18)]',
  success:
    'border-[var(--color-success)] bg-[rgba(93,255,79,0.12)] text-[var(--color-success)] shadow-[0_0_12px_rgba(93,255,79,0.16)]',
  warning:
    'border-[var(--color-warning)] bg-[rgba(255,216,77,0.12)] text-[var(--color-warning)] shadow-[0_0_12px_rgba(255,216,77,0.16)]',
  danger:
    'border-[var(--color-danger)] bg-[rgba(255,77,126,0.13)] text-[var(--color-danger)] shadow-[0_0_12px_rgba(255,77,126,0.18)]',
  neutral:
    'border-slate-500/55 bg-black/55 text-[var(--color-muted)] shadow-[0_0_10px_rgba(94,0,255,0.16)]',
}

const badgeClasses = computed(() => [
  'inline-flex items-center border px-2.5 py-1 font-mono text-[0.68rem] font-bold uppercase leading-none tracking-[0.08em]',
  variantClasses[props.variant],
])
</script>

<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>
