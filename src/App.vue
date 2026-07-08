<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppMain from './components/layout/AppMain.vue'
import AppShell from './components/layout/AppShell.vue'
</script>

<template>
  <AppShell>
    <AppMain>
      <RouterView />
    </AppMain>
  </AppShell>
</template>
