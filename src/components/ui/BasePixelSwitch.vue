<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: boolean
  label: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const switchClasses = computed(() => [
  'pixel-switch',
  props.modelValue ? 'pixel-switch--on' : 'pixel-switch--off',
  props.disabled ? 'pixel-switch--disabled' : '',
])

const toggle = (): void => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>

<template>
  <button
    type="button"
    :class="switchClasses"
    :aria-label="label"
    :aria-checked="modelValue"
    :disabled="disabled"
    role="switch"
    @click="toggle"
  >
    <span class="pixel-switch__track">
      <span class="pixel-switch__thumb"></span>
    </span>
    <span class="pixel-switch__state">{{ modelValue ? 'ON' : 'OFF' }}</span>
  </button>
</template>

<style scoped>
.pixel-switch {
  display: inline-grid;
  grid-template-columns: auto 3rem;
  align-items: center;
  gap: 0.75rem;
  border: 2px solid rgba(0, 255, 177, 0.4);
  background: rgba(0, 0, 0, 0.76);
  padding: 0.45rem 0.6rem;
  color: var(--color-text);
  cursor: pointer;
  font-family: var(--font-arcade);
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow:
    2px 2px 0 rgba(94, 0, 255, 0.36),
    inset 0 0 14px rgba(0, 255, 177, 0.06);
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

.pixel-switch:hover {
  border-color: var(--color-neon-green);
  box-shadow:
    3px 3px 0 rgba(229, 0, 255, 0.3),
    0 0 22px rgba(0, 255, 177, 0.22),
    inset 0 0 16px rgba(0, 255, 177, 0.08);
  transform: translateX(2px);
}

.pixel-switch:active {
  transform: translate(2px, 2px);
}

.pixel-switch:focus-visible {
  outline: 2px solid var(--color-warning);
  outline-offset: 4px;
}

.pixel-switch__track {
  position: relative;
  display: block;
  width: 3.4rem;
  height: 1.55rem;
  border: 2px solid currentColor;
  background:
    linear-gradient(90deg, rgba(245, 245, 245, 0.08) 1px, transparent 1px),
    #050009;
  background-size: 7px 100%, auto;
}

.pixel-switch__thumb {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.9rem;
  height: 0.9rem;
  background: currentColor;
  box-shadow: 0 0 14px currentColor;
  transition:
    left 160ms ease,
    background-color 160ms ease,
    box-shadow 160ms ease;
}

.pixel-switch__state {
  min-width: 2.5rem;
  text-align: center;
}

.pixel-switch--on {
  color: var(--color-neon-green);
}

.pixel-switch--on .pixel-switch__thumb {
  left: 1.85rem;
}

.pixel-switch--off {
  border-color: rgba(156, 163, 175, 0.48);
  color: var(--color-muted);
}

.pixel-switch--disabled {
  cursor: not-allowed;
  opacity: 0.58;
  box-shadow: none;
}

.pixel-switch--disabled:hover {
  border-color: rgba(156, 163, 175, 0.48);
  box-shadow: none;
  transform: none;
}
</style>
