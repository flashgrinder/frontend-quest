<script setup lang="ts">
import { computed } from 'vue'
import { useSoundEffects } from '../../composables/useSoundEffects'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  sound?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  sound: true,
})

const { playClick } = useSoundEffects()

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-[var(--color-neon-green)] bg-[var(--color-neon-green)] text-black shadow-[3px_3px_0_rgba(229,0,255,0.45),0_0_18px_rgba(0,255,177,0.2)] hover:border-[var(--color-neon-pink)] hover:bg-black hover:text-[var(--color-neon-green)] hover:shadow-[4px_4px_0_rgba(0,255,177,0.3),0_0_24px_rgba(229,0,255,0.35)]',
  secondary:
    'border-[var(--color-neon-pink)] bg-[var(--color-dark-violet)] text-[var(--color-text)] shadow-[3px_3px_0_rgba(0,255,177,0.28),0_0_20px_rgba(229,0,255,0.28)] hover:border-[var(--color-neon-green)] hover:text-[var(--color-neon-pink)] hover:shadow-[4px_4px_0_rgba(229,0,255,0.28),0_0_24px_rgba(94,0,255,0.4)]',
  ghost:
    'border-[rgba(0,255,177,0.45)] bg-black/60 text-[var(--color-text)] shadow-[2px_2px_0_rgba(94,0,255,0.35)] hover:border-[var(--color-neon-green)] hover:bg-[rgba(0,255,177,0.08)] hover:text-[var(--color-neon-green)] hover:shadow-[3px_3px_0_rgba(229,0,255,0.26),0_0_18px_rgba(0,255,177,0.22)]',
  danger:
    'border-[var(--color-danger)] bg-[rgba(255,77,126,0.18)] text-[var(--color-text)] shadow-[3px_3px_0_rgba(229,0,255,0.3),0_0_18px_rgba(255,77,126,0.26)] hover:bg-[var(--color-danger)] hover:text-black hover:shadow-[4px_4px_0_rgba(0,255,177,0.24),0_0_24px_rgba(255,77,126,0.36)]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
}

const buttonClasses = computed(() => [
  'arcade-button-base inline-flex cursor-pointer items-center justify-center gap-2 border-2 font-bold leading-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-slate-600 disabled:bg-black/50 disabled:text-slate-500 disabled:shadow-none disabled:opacity-60',
  variantClasses[props.variant],
  sizeClasses[props.size],
])

const handleClick = (): void => {
  if (!props.disabled && props.sound) {
    playClick()
  }
}
</script>

<template>
  <button :class="buttonClasses" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>
