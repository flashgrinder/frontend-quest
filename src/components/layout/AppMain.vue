<script setup lang="ts">
import { APP_RELEASE_LABEL } from '../../config/version'
import { BaseCard } from '../ui'
</script>

<template>
  <main class="min-w-0 py-0 lg:py-0">
    <BaseCard class="min-h-[calc(100dvh-1.5rem)] p-4 sm:min-h-[calc(100dvh-2rem)] sm:p-5 lg:min-h-[calc(100dvh-2.5rem)] lg:p-6 xl:min-h-[calc(100dvh-3rem)] xl:p-7">
      <div class="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(0,255,177,0.22)] pb-4">
        <div>
          <p class="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--color-neon-green)]">
            Quest Area
          </p>
          <h2 class="pixel-title mt-1 text-xl text-white">Training Instance</h2>
        </div>

        <div class="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
          <span class="size-2 bg-[var(--color-neon-green)] shadow-[0_0_12px_rgba(0,255,177,0.8)]"></span>
          {{ APP_RELEASE_LABEL }}
        </div>
      </div>

      <div class="mx-auto w-full max-w-6xl">
        <slot />
      </div>
    </BaseCard>
  </main>
</template>
