<script setup lang="ts">
import { APP_BUILD_LABEL, APP_VERSION_LABEL } from '../../config/version'
</script>

<template>
  <footer class="overflow-hidden bg-black/70 px-3 py-2">
    <div class="grid grid-cols-[auto_1fr_auto] items-center gap-2 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
      <span class="inline-flex items-center gap-2 text-[var(--color-neon-green)]">
        <span class="size-1.5 bg-[var(--color-neon-green)] shadow-[0_0_10px_rgba(0,255,177,0.9)]"></span>
        ONLINE
      </span>
      <span class="truncate text-center">{{ APP_VERSION_LABEL }}</span>
      <span>Build {{ APP_BUILD_LABEL }}</span>
    </div>
  </footer>
</template>
