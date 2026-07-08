<script setup lang="ts">
import { useGameStore } from '../../stores/game'
import { BaseCard, BaseProgress } from '../ui'

const gameStore = useGameStore()
</script>

<template>
  <section class="grid min-w-0 shrink-0 gap-3">
    <div class="flex items-center justify-between gap-3">
      <h2 class="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-neon-pink)]">
        XP
      </h2>
      <span class="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
        Next Level
      </span>
    </div>

    <BaseCard class="grid min-w-0 gap-3 p-4">
      <BaseProgress :value="gameStore.player.xp" :max="gameStore.player.xpToNextLevel" label="XP" />
    </BaseCard>
  </section>
</template>
