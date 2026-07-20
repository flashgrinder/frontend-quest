<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import AppMain from './components/layout/AppMain.vue'
import AppShell from './components/layout/AppShell.vue'
import { useAudioManager } from './features/audio'
import { IntroLoader } from './features/intro-loader'
import { useProfileStore } from './stores/profile'

const route = useRoute()
const router = useRouter()
const profileStore = useProfileStore()
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

watch(
  () => [isIntroComplete.value, profileStore.isProfileCreated, route.name] as const,
  ([isComplete, isCreated, routeName]) => {
    if (isComplete && !isCreated && routeName !== 'character-creation') {
      void router.replace('/character-creation')
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

  <RouterView v-else-if="route.name === 'character-creation' || !profileStore.isProfileCreated" />

  <AppShell v-else>
    <AppMain>
      <RouterView />
    </AppMain>
  </AppShell>
</template>
