<script setup lang="ts">
import { useGameStore } from '../../stores/game'
import { BaseBadge, BaseCard } from '../ui'

const gameStore = useGameStore()
</script>

<template>
  <section class="grid min-w-0 shrink-0 gap-3">
    <div class="flex items-center justify-between gap-3">
      <h2 class="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-neon-pink)]">
        Player Stats
      </h2>
      <BaseBadge variant="neutral">HUD</BaseBadge>
    </div>

    <div class="grid min-w-0 grid-cols-3 gap-3 text-sm">
      <BaseCard class="min-w-0 p-3">
        <p class="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">Level</p>
        <p class="mt-1 text-2xl font-black text-white">{{ gameStore.player.level }}</p>
      </BaseCard>

      <BaseCard class="min-w-0 p-3">
        <p class="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">Coins</p>
        <p class="mt-1 text-2xl font-black text-[var(--color-warning)]">{{ gameStore.player.coins }}</p>
      </BaseCard>

      <BaseCard class="min-w-0 p-3">
        <p class="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">Energy</p>
        <p class="mt-1 text-2xl font-black text-[var(--color-success)]">{{ gameStore.player.energy }}</p>
        <p class="font-mono text-[0.62rem] font-bold text-[var(--color-muted)]">/ {{ gameStore.player.maxEnergy }}</p>
      </BaseCard>
    </div>
  </section>
</template>
