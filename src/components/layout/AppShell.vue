<script setup lang="ts">
import AppSidebar from './AppSidebar.vue'
</script>

<template>
  <div class="scanline-overlay min-h-screen bg-[var(--fq-color-bg)] text-[var(--fq-color-text)]">
    <div class="mx-auto grid min-h-screen w-full max-w-[1720px] grid-cols-1 gap-4 p-3 sm:p-4 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-5 lg:p-5 xl:gap-6 xl:p-6">
      <AppSidebar />

      <slot />
    </div>
  </div>
</template>
