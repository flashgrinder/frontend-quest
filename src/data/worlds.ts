import type { World } from '../types/world'

export const worlds: World[] = [
  {
    id: 'web-foundations',
    title: 'Web Foundations',
    description:
      'Фундамент современной Frontend-разработки. Именно здесь начинается путь каждого разработчика: структура веба, визуальный слой, язык браузера, сетевые запросы и рабочие инструменты.',
    motto: 'Любое великое приложение начинается с прочного фундамента.',
    order: 1,
    locationIds: ['html-academy', 'css-city', 'javascript-valley', 'browser-core', 'network-zone', 'git-terminal'],
    status: 'current',
    accentColor: '#FFD84D',
    icon: 'WEB',
  },
  {
    id: 'vue-ecosystem',
    title: 'Vue Ecosystem',
    description:
      'Vue 3, Vue Router, Pinia и Nuxt как основной маршрут подготовки к собеседованию по современной Vue-экосистеме.',
    motto: 'Собери реактивный город из компонентов, состояния и маршрутов.',
    order: 2,
    locationIds: ['vue-city', 'router-mountains', 'pinia-village', 'nuxt-space'],
    status: 'current',
    accentColor: '#00FFB1',
    icon: 'VUE',
  },
]
