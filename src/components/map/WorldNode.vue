<script setup lang="ts">
import { computed } from 'vue'
import { BaseBadge, BaseButton, BaseCard } from '../ui'
import type { World } from '../../types/world'

export type WorldNodeStatus = 'locked' | 'unlocked' | 'current' | 'completed'

interface Props {
  world: World
  status: WorldNodeStatus
  progressValue: number
  progressMax: number
  isLast?: boolean
  highlighted?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isLast: false,
  highlighted: false,
})

const emit = defineEmits<{
  activate: [worldId: string]
}>()

const statusLabel: Record<WorldNodeStatus, string> = {
  locked: 'Locked',
  unlocked: 'Open',
  current: 'Current',
  completed: 'Complete',
}

const statusVariant = computed(() => {
  const variants: Record<WorldNodeStatus, 'primary' | 'success' | 'warning' | 'neutral'> = {
    locked: 'neutral',
    unlocked: 'primary',
    current: 'warning',
    completed: 'success',
  }

  return variants[props.status]
})

const progressPercent = computed(() => {
  if (props.progressMax <= 0) {
    return props.status === 'completed' ? 100 : 0
  }

  return Math.min(100, Math.max(0, (props.progressValue / props.progressMax) * 100))
})

const canActivate = computed(() => props.status === 'current' || props.status === 'unlocked' || props.status === 'completed')

const nodeClasses = computed(() => [
  'world-node',
  canActivate.value ? 'world-node--interactive' : 'world-node--disabled',
  `world-node--${props.status}`,
  props.highlighted ? 'world-node--highlighted' : '',
])

const activateWorld = (): void => {
  emit('activate', props.world.id)
}
</script>

<template>
  <article
    :class="nodeClasses"
    :style="{ '--world-accent': world.accentColor, '--world-progress': `${progressPercent}%` }"
    :role="canActivate ? 'button' : undefined"
    :tabindex="canActivate ? 0 : undefined"
    @click="canActivate ? activateWorld() : undefined"
    @keydown.enter="canActivate ? activateWorld() : undefined"
    @keydown.space.prevent="canActivate ? activateWorld() : undefined"
  >
    <div class="world-node__line" aria-hidden="true">
      <span class="world-node__point"></span>
      <span v-if="!isLast" class="world-node__connector"></span>
      <span v-if="!isLast" class="world-node__arrow">v</span>
    </div>

    <BaseCard
      :interactive="canActivate"
      :locked="status === 'locked'"
      :completed="status === 'completed'"
      class="world-node__card"
    >
      <div class="grid gap-5 p-5">
        <div class="flex items-start justify-between gap-4">
          <div class="flex min-w-0 items-center gap-4">
            <div class="world-node__icon" aria-hidden="true">
              <svg viewBox="0 0 64 64" role="img">
                <rect x="8" y="8" width="48" height="48" rx="0"></rect>
                <path d="M16 20H48M16 44H48M20 16V48M44 16V48"></path>
                <text x="32" y="37" text-anchor="middle">{{ world.icon }}</text>
              </svg>
            </div>

            <div class="min-w-0">
              <p class="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                Node {{ String(world.order).padStart(2, '0') }}
              </p>
              <h3 class="pixel-title mt-2 text-xl text-white md:text-2xl">{{ world.title }}</h3>
            </div>
          </div>

          <BaseBadge :variant="statusVariant">{{ statusLabel[status] }}</BaseBadge>
        </div>

        <p class="text-base leading-7 text-slate-300">{{ world.description }}</p>

        <div class="grid gap-3 border-t border-[rgba(245,245,245,0.08)] pt-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex flex-wrap gap-2">
              <BaseBadge variant="neutral">{{ world.status }}</BaseBadge>
              <BaseBadge variant="primary">{{ progressMax }} missions</BaseBadge>
            </div>

            <p class="font-mono text-xs font-bold uppercase tracking-[0.12em] text-slate-300">
              {{ progressValue }} / {{ progressMax }} · {{ Math.round(progressPercent) }}%
            </p>
          </div>

          <div class="world-node__progress" aria-hidden="true">
            <span></span>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3">
          <p v-if="status === 'locked'" class="text-sm leading-6 text-slate-400">
            Требуется пройти предыдущий мир.
          </p>
          <p v-else-if="status === 'completed'" class="text-sm leading-6 text-[var(--color-success)]">
            Мир завершён. Можно открыть маршрут снова.
          </p>
          <p v-else-if="status === 'current'" class="text-sm leading-6 text-[var(--color-neon-green)]">
            Текущая точка маршрута развития.
          </p>
          <p v-else class="text-sm leading-6 text-slate-300">
            Мир открыт для прохождения.
          </p>

          <BaseButton
            v-if="canActivate"
            size="sm"
            :variant="status === 'completed' ? 'ghost' : 'primary'"
            @click.stop="activateWorld"
          >
            {{ status === 'current' ? 'Продолжить' : 'Открыть' }}
          </BaseButton>
        </div>
      </div>
    </BaseCard>
  </article>
</template>

<style scoped>
.world-node {
  --world-accent: var(--color-neon-green);
  --world-progress: 0%;

  display: grid;
  grid-template-columns: 3.25rem minmax(0, 1fr);
  gap: 1rem;
  min-width: 0;
  scroll-margin-top: 1.5rem;
}

.world-node--interactive {
  cursor: pointer;
}

.world-node--disabled {
  cursor: not-allowed;
}

.world-node__line {
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100%;
}

.world-node__point {
  position: relative;
  z-index: 1;
  display: block;
  width: 1.35rem;
  height: 1.35rem;
  margin-top: 1.5rem;
  border: 2px solid var(--world-accent);
  background: #000;
  box-shadow:
    0 0 0 4px rgba(0, 0, 0, 0.85),
    0 0 18px color-mix(in srgb, var(--world-accent) 70%, transparent);
}

.world-node__connector {
  position: absolute;
  top: 3rem;
  bottom: -2.5rem;
  width: 2px;
  background: linear-gradient(var(--world-accent), rgba(156, 163, 175, 0.22));
  box-shadow: 0 0 16px color-mix(in srgb, var(--world-accent) 44%, transparent);
}

.world-node__arrow {
  position: absolute;
  bottom: -1.8rem;
  color: var(--world-accent);
  font-family: var(--font-arcade);
  font-size: 0.8rem;
  font-weight: 900;
  text-shadow: 0 0 12px color-mix(in srgb, var(--world-accent) 70%, transparent);
}

.world-node__card {
  border-color: color-mix(in srgb, var(--world-accent) 62%, transparent);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--world-accent) 18%, transparent),
    0 0 26px color-mix(in srgb, var(--world-accent) 18%, transparent),
    inset 0 0 18px rgba(245, 245, 245, 0.035);
}

.world-node__icon {
  display: grid;
  width: 3.5rem;
  height: 3.5rem;
  flex: 0 0 auto;
  place-items: center;
  border: 2px solid var(--world-accent);
  background: rgba(0, 0, 0, 0.72);
  box-shadow: 0 0 18px color-mix(in srgb, var(--world-accent) 24%, transparent);
}

.world-node__icon svg {
  width: 2.7rem;
  height: 2.7rem;
  fill: rgba(0, 0, 0, 0.4);
  stroke: var(--world-accent);
}

.world-node__icon text {
  fill: var(--world-accent);
  stroke: none;
  font-family: var(--font-arcade);
  font-size: 0.72rem;
  font-weight: 900;
}

.world-node__progress {
  height: 0.75rem;
  border: 1px solid color-mix(in srgb, var(--world-accent) 48%, transparent);
  background:
    linear-gradient(90deg, rgba(245, 245, 245, 0.06) 1px, transparent 1px),
    #050009;
  background-size: 10px 100%, auto;
  padding: 2px;
}

.world-node__progress span {
  display: block;
  width: var(--world-progress);
  height: 100%;
  background: linear-gradient(90deg, var(--world-accent), var(--color-neon-pink));
  box-shadow: 0 0 14px color-mix(in srgb, var(--world-accent) 48%, transparent);
  transition: width 180ms ease;
}

.world-node--locked .world-node__connector {
  background: linear-gradient(rgba(156, 163, 175, 0.28), rgba(156, 163, 175, 0.12));
  box-shadow: none;
}

.world-node--locked .world-node__point,
.world-node--locked .world-node__arrow {
  opacity: 0.55;
}

.world-node--current .world-node__card,
.world-node--highlighted .world-node__card {
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--world-accent) 35%, transparent),
    0 0 34px color-mix(in srgb, var(--world-accent) 32%, transparent),
    0 0 58px rgba(229, 0, 255, 0.18),
    inset 0 0 24px color-mix(in srgb, var(--world-accent) 10%, transparent);
}

.world-node--completed {
  --world-accent: var(--color-success);
}

@media (min-width: 1024px) {
  .world-node {
    grid-template-columns: minmax(0, 1fr) 3.5rem minmax(0, 1fr);
    gap: 1.25rem;
    align-items: stretch;
  }

  .world-node__line {
    grid-column: 2;
    grid-row: 1;
  }

  .world-node__card {
    width: min(100%, 34rem);
  }

  .world-node:nth-child(odd) .world-node__card {
    grid-column: 1;
    justify-self: end;
  }

  .world-node:nth-child(even) .world-node__card {
    grid-column: 3;
    justify-self: start;
  }
}
</style>
