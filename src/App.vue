<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import AppMain from './components/layout/AppMain.vue'
import AppShell from './components/layout/AppShell.vue'
import { useAudioManager } from './features/audio'
import { IntroLoader } from './features/intro-loader'

const route = useRoute()
const router = useRouter()
const isIntroComplete = ref(false)

useAudioManager()

watch(
  () => route.matched.length,
  (matchedRoutesCount) => {
    if (matchedRoutesCount === 0) {
      void router.replace('/')
    }
  },
  { immediate: true },
)

const completeIntro = (): void => {
  isIntroComplete.value = true
}
</script>

<template>
  <IntroLoader v-if="!isIntroComplete" @complete="completeIntro" />

  <AppShell v-else>
    <AppMain>
      <RouterView />
    </AppMain>
  </AppShell>
</template>
