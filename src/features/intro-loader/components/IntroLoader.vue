<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useAudioManager } from '../../audio'
import { BaseButton } from '../../../components/ui'
import { APP_VERSION_LABEL } from '../../../config/version'

const emit = defineEmits<{
  complete: []
}>()

const bootSteps = [
  'BOOTING HERO TERMINAL...',
  'INITIALIZING SYSTEM...',
  'LOADING USER INTERFACE...',
  'LOADING KNOWLEDGE BASE...',
  'LOADING MISSIONS...',
  'LOADING WORLD MAP...',
  'INITIALIZING AUDIO...',
  'CONNECTING TERMINAL...',
  'SYSTEM READY',
] as const

const STEP_DURATION_MS = 420

const currentStepIndex = ref(0)
const isReady = ref(false)
let timer: ReturnType<typeof window.setInterval> | undefined

const { startBackgroundMusic, unlockAudio } = useAudioManager()

const progressPercent = computed(() => Math.round(((currentStepIndex.value + 1) / bootSteps.length) * 100))
const currentStep = computed(() => bootSteps[currentStepIndex.value])

const beginLoading = (): void => {
  timer = window.setInterval(() => {
    if (currentStepIndex.value >= bootSteps.length - 1) {
      isReady.value = true

      if (timer) {
        window.clearInterval(timer)
        timer = undefined
      }

      return
    }

    currentStepIndex.value += 1
  }, STEP_DURATION_MS)
}

const startGame = async (): Promise<void> => {
  await unlockAudio()
  startBackgroundMusic()
  emit('complete')
}

onMounted(() => {
  startBackgroundMusic()
  beginLoading()
})

onBeforeUnmount(() => {
  if (timer) {
    window.clearInterval(timer)
  }
})
</script>

<template>
  <section class="intro-loader scanline-overlay" aria-live="polite">
    <div class="intro-loader__crt" aria-hidden="true"></div>

    <div class="intro-loader__terminal">
      <div class="intro-loader__header">
        <span>Frontend Quest</span>
        <span>{{ APP_VERSION_LABEL }}</span>
      </div>

      <div class="intro-loader__screen">
        <p class="intro-loader__eyebrow">Hero Terminal Boot Sequence</p>
        <h1 class="intro-loader__title">SYSTEM BOOT</h1>

        <div class="intro-loader__log">
          <p
            v-for="(step, index) in bootSteps"
            :key="step"
            class="intro-loader__line"
            :class="{
              'intro-loader__line--active': index === currentStepIndex,
              'intro-loader__line--done': index < currentStepIndex,
            }"
          >
            <span>{{ index < currentStepIndex ? 'OK' : index === currentStepIndex ? '>>' : '--' }}</span>
            <span>{{ step }}</span>
          </p>
        </div>

        <div class="intro-loader__progress-wrap">
          <div class="intro-loader__progress-meta">
            <span>{{ currentStep }}</span>
            <span>{{ progressPercent }}%</span>
          </div>

          <div class="intro-loader__progress" :style="{ '--intro-progress': `${progressPercent}%` }">
            <span></span>
          </div>
        </div>

        <Transition name="intro-start">
          <BaseButton
            v-if="isReady"
            size="lg"
            class="intro-loader__button"
            @click="startGame"
          >
            НАЧАТЬ ИГРУ
          </BaseButton>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-loader {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 20%, rgba(94, 0, 255, 0.34), transparent 34rem),
    radial-gradient(circle at 18% 78%, rgba(0, 255, 177, 0.18), transparent 28rem),
    #000;
  padding: 1rem;
  color: var(--color-text);
}

.intro-loader::before {
  position: absolute;
  inset: 0;
  content: "";
  background:
    linear-gradient(rgba(0, 255, 177, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(229, 0, 255, 0.035) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.58;
}

.intro-loader__crt {
  position: absolute;
  inset: -4rem;
  pointer-events: none;
  background:
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.045) 0 1px, transparent 1px 4px),
    linear-gradient(90deg, rgba(229, 0, 255, 0.08), transparent 24%, rgba(0, 255, 177, 0.08));
  mix-blend-mode: screen;
  opacity: 0.34;
  animation: crt-drift 5s linear infinite;
}

.intro-loader__terminal {
  position: relative;
  width: min(100%, 52rem);
  border: 2px solid var(--color-neon-green);
  background: rgba(0, 0, 0, 0.88);
  box-shadow:
    6px 6px 0 rgba(94, 0, 255, 0.45),
    0 0 42px rgba(0, 255, 177, 0.28),
    inset 0 0 32px rgba(0, 255, 177, 0.08);
}

.intro-loader__header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 2px solid rgba(0, 255, 177, 0.34);
  padding: 0.85rem 1rem;
  color: var(--color-neon-green);
  font-family: var(--font-arcade);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.intro-loader__screen {
  display: grid;
  gap: 1.4rem;
  padding: clamp(1.25rem, 4vw, 2rem);
}

.intro-loader__eyebrow {
  color: var(--color-neon-pink);
  font-family: var(--font-arcade);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.intro-loader__title {
  color: var(--color-text);
  font-family: var(--font-arcade);
  font-size: clamp(2.4rem, 8vw, 5.5rem);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-shadow:
    3px 0 0 rgba(229, 0, 255, 0.8),
    -3px 0 0 rgba(0, 255, 177, 0.8),
    0 0 28px rgba(0, 255, 177, 0.35);
}

.intro-loader__log {
  display: grid;
  gap: 0.45rem;
  border: 1px solid rgba(245, 245, 245, 0.1);
  background: rgba(0, 255, 177, 0.035);
  padding: 1rem;
}

.intro-loader__line {
  display: grid;
  grid-template-columns: 2.4rem minmax(0, 1fr);
  gap: 0.75rem;
  color: rgba(156, 163, 175, 0.72);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: clamp(0.72rem, 2.6vw, 0.95rem);
  font-weight: 800;
}

.intro-loader__line--done {
  color: var(--color-neon-green);
}

.intro-loader__line--active {
  color: var(--color-warning);
  text-shadow: 0 0 14px rgba(255, 216, 77, 0.45);
}

.intro-loader__progress-wrap {
  display: grid;
  gap: 0.65rem;
}

.intro-loader__progress-meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: var(--color-neon-green);
  font-family: var(--font-arcade);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.intro-loader__progress {
  height: 1.45rem;
  border: 2px solid var(--color-neon-green);
  background:
    linear-gradient(90deg, rgba(245, 245, 245, 0.08) 1px, transparent 1px),
    #030006;
  background-size: 12px 100%, auto;
  padding: 3px;
  box-shadow:
    0 0 22px rgba(0, 255, 177, 0.22),
    inset 0 0 18px rgba(0, 255, 177, 0.06);
}

.intro-loader__progress span {
  display: block;
  width: var(--intro-progress);
  height: 100%;
  background: linear-gradient(90deg, var(--color-neon-green), var(--color-neon-pink));
  box-shadow: 0 0 18px rgba(0, 255, 177, 0.55);
  transition: width 380ms ease;
}

.intro-loader__button {
  justify-self: center;
  min-width: min(100%, 18rem);
}

.intro-start-enter-active {
  transition:
    opacity 280ms ease,
    transform 280ms ease,
    filter 280ms ease;
}

.intro-start-enter-from {
  opacity: 0;
  filter: blur(6px);
  transform: translateY(1rem) scale(0.94);
}

@keyframes crt-drift {
  from {
    transform: translateY(-1rem);
  }

  to {
    transform: translateY(1rem);
  }
}
</style>
