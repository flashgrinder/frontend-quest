<script setup lang="ts">
import { watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import AppMain from './components/layout/AppMain.vue'
import AppShell from './components/layout/AppShell.vue'

const route = useRoute()
const router = useRouter()

watch(
  () => route.matched.length,
  (matchedRoutesCount) => {
    if (matchedRoutesCount === 0) {
      void router.replace('/')
    }
  },
  { immediate: true },
)
</script>

<template>
  <AppShell>
    <AppMain>
      <RouterView />
    </AppMain>
  </AppShell>
</template>
