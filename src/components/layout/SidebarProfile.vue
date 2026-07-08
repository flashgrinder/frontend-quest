<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../../stores/game'
import { BaseBadge, BaseCard } from '../ui'

const gameStore = useGameStore()

const playerInitial = computed(() => gameStore.player.name.charAt(0).toUpperCase())
</script>

<template>
  <BaseCard class="min-w-0 shrink-0 p-4">
    <div class="flex min-w-0 items-center gap-4">
      <div class="grid size-16 shrink-0 place-items-center border-2 border-[var(--color-neon-green)] bg-[var(--color-dark-violet)] font-mono text-2xl font-black text-[var(--color-neon-green)] shadow-[4px_4px_0_rgba(229,0,255,0.45),0_0_22px_rgba(0,255,177,0.24)]">
        {{ playerInitial }}
      </div>

      <div class="min-w-0 flex-1">
        <p class="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">Player</p>
        <div class="mt-1 flex flex-wrap items-center gap-2">
          <p class="truncate text-xl font-bold text-white">{{ gameStore.player.name }}</p>
          <BaseBadge variant="primary">LVL {{ gameStore.player.level }}</BaseBadge>
        </div>
        <div class="mt-2 flex flex-wrap items-center gap-2">
          <BaseBadge variant="neutral">{{ gameStore.player.rank }}</BaseBadge>
          <BaseBadge variant="success">Mission Ready</BaseBadge>
        </div>
      </div>
    </div>
  </BaseCard>
</template>
