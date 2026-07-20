<script setup lang="ts">
import { APP_BUILD_LABEL, APP_VERSION_LABEL } from '../../config/version'
</script>

<template>
  <footer class="neon-border shrink-0 overflow-hidden bg-black/60 px-3 py-2">
    <div class="grid grid-cols-[auto_1fr_auto] items-center gap-2 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
      <span class="text-[var(--color-neon-green)]">ONLINE</span>
      <span class="truncate text-center">{{ APP_VERSION_LABEL }}</span>
      <span>Build {{ APP_BUILD_LABEL }}</span>
    </div>
  </footer>
</template>
