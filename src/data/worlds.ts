import type { World } from '../types/world'

export const worlds: World[] = [
  {
    id: 'web-foundations',
    title: 'Web Foundations',
    description: 'HTML, CSS, JavaScript и TypeScript как базовый маршрут frontend-разработчика.',
    order: 1,
    locationIds: ['html-kingdom', 'css-forest', 'javascript-desert', 'typescript-castle'],
    status: 'locked',
    accentColor: '#FFD84D',
    icon: 'WEB',
  },
  {
    id: 'vue-ecosystem',
    title: 'Vue Ecosystem',
    description: 'Vue 3, Router, Pinia и Nuxt как основной маршрут подготовки к собеседованию.',
    order: 2,
    locationIds: ['vue-city', 'router-mountains', 'pinia-village', 'nuxt-space'],
    status: 'current',
    accentColor: '#00FFB1',
    icon: 'VUE',
  },
]
