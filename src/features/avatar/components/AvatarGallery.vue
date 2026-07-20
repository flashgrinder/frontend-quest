<script setup lang="ts">
import type { AvatarPreset } from '../../../types/profile'

interface Props {
  avatars: AvatarPreset[]
  selectedAvatarId: string
}

defineProps<Props>()

const emit = defineEmits<{
  select: [avatar: AvatarPreset]
}>()
</script>

<template>
  <div class="avatar-gallery" role="listbox" aria-label="Выбор аватара">
    <button
      v-for="avatar in avatars"
      :key="avatar.id"
      type="button"
      class="avatar-gallery__item"
      :class="{ 'avatar-gallery__item--selected': avatar.id === selectedAvatarId }"
      :aria-selected="avatar.id === selectedAvatarId"
      :aria-label="avatar.title"
      role="option"
      @click="emit('select', avatar)"
    >
      <img :src="avatar.url" :alt="avatar.title" class="avatar-gallery__image">
    </button>
  </div>
</template>

<style scoped>
.avatar-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5.5rem, 1fr));
  gap: 1rem;
  align-items: center;
  max-height: min(24rem, 48vh);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0.35rem 0.75rem 0.35rem 0.25rem;
}

.avatar-gallery__item {
  position: relative;
  display: grid;
  place-items: center;
  justify-self: center;
  width: clamp(4.5rem, 100%, 5.5rem);
  height: clamp(4.5rem, 100%, 5.5rem);
  box-sizing: border-box;
  overflow: visible;
  border: 2px solid rgba(0, 255, 177, 0.26);
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.72);
  cursor: pointer;
  box-shadow: 2px 2px 0 rgba(94, 0, 255, 0.34);
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.avatar-gallery__item:hover {
  border-color: var(--color-neon-green);
  box-shadow:
    3px 3px 0 rgba(229, 0, 255, 0.28),
    0 0 18px rgba(0, 255, 177, 0.22);
  transform: translateY(-2px);
}

.avatar-gallery__item:focus-visible {
  outline: 2px solid var(--color-warning);
  outline-offset: 3px;
}

.avatar-gallery__item--selected {
  border-color: var(--color-neon-pink);
  box-shadow:
    3px 3px 0 rgba(0, 255, 177, 0.28),
    0 0 24px rgba(229, 0, 255, 0.42);
}

.avatar-gallery__item--selected::after {
  position: absolute;
  right: -0.1rem;
  bottom: -0.1rem;
  display: grid;
  width: 1.45rem;
  height: 1.45rem;
  place-items: center;
  border: 2px solid var(--color-neon-green);
  border-radius: 9999px;
  background: #000;
  color: var(--color-neon-green);
  content: "✓";
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 0.8rem;
  font-weight: 900;
  line-height: 1;
  box-shadow: 0 0 14px rgba(0, 255, 177, 0.42);
}

.avatar-gallery__image {
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  object-fit: cover;
}
</style>
