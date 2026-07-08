<script setup lang="ts"></script>

<template>
  <div class="pixel-panel flex h-full min-h-0 min-w-0 flex-col bg-black/80">
    <div class="shrink-0 border-b border-[rgba(0,255,177,0.32)]">
      <slot name="header" />
    </div>

    <slot />

    <div class="shrink-0 border-t border-[rgba(0,255,177,0.32)]">
      <slot name="footer" />
    </div>
  </div>
</template>
