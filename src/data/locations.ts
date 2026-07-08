import type { Location } from '../types/location'

export const locations: Location[] = [
  {
    id: 'html-kingdom',
    worldId: 'web-foundations',
    title: 'HTML Kingdom',
    description: 'Семантика, структура документа и фундамент веб-страниц.',
    order: 1,
    missionIds: [],
    status: 'locked',
    accentColor: '#38BDF8',
    icon: 'HTML',
  },
  {
    id: 'css-forest',
    worldId: 'web-foundations',
    title: 'CSS Forest',
    description: 'Стили, layout, адаптивность и визуальная система интерфейса.',
    order: 2,
    missionIds: [],
    status: 'locked',
    accentColor: '#34D399',
    icon: 'CSS',
  },
  {
    id: 'javascript-desert',
    worldId: 'web-foundations',
    title: 'JavaScript Desert',
    description: 'Язык, браузерные API и логика интерактивных приложений.',
    order: 3,
    missionIds: [],
    status: 'locked',
    accentColor: '#FFD84D',
    icon: 'JS',
  },
  {
    id: 'typescript-castle',
    worldId: 'web-foundations',
    title: 'TypeScript Castle',
    description: 'Типизация, интерфейсы, generics и надёжные контракты данных.',
    order: 4,
    missionIds: [],
    status: 'locked',
    accentColor: '#60A5FA',
    icon: 'TS',
  },
  {
    id: 'vue-city',
    worldId: 'vue-ecosystem',
    title: 'Vue City',
    description: 'Core-маршрут Vue 3: основы, реактивность, компоненты, props, slots и composables.',
    order: 1,
    missionIds: [
      'vue-basics',
      'reactivity',
      'composition-api',
      'components',
      'props-emits',
      'slots',
      'lifecycle',
      'composables',
    ],
    status: 'current',
    accentColor: '#00FFB1',
    icon: 'VUE',
  },
  {
    id: 'router-mountains',
    worldId: 'vue-ecosystem',
    title: 'Router Mountains',
    description: 'Маршрутизация Vue Router: history, guards, params, lazy loading и навигация.',
    order: 2,
    missionIds: ['router'],
    status: 'locked',
    accentColor: '#6366F1',
    icon: 'RTR',
  },
  {
    id: 'pinia-village',
    worldId: 'vue-ecosystem',
    title: 'Pinia Village',
    description: 'State management в Pinia: stores, getters, actions, persistence и SSR-ограничения.',
    order: 3,
    missionIds: ['pinia'],
    status: 'locked',
    accentColor: '#E500FF',
    icon: 'PIN',
  },
  {
    id: 'nuxt-space',
    worldId: 'vue-ecosystem',
    title: 'Nuxt Space',
    description: 'Nuxt 3: core, data fetching, Server API, SSR, hydration и performance.',
    order: 4,
    missionIds: ['nuxt-core', 'nuxt-data-fetching', 'server-api', 'ssr-hydration', 'performance'],
    status: 'locked',
    accentColor: '#14B8A6',
    icon: 'NUX',
  },
]

export const getLocationById = (locationId: string): Location | undefined =>
  locations.find((location) => location.id === locationId)

export const getWorldLocations = (worldId: string): Location[] =>
  locations
    .filter((location) => location.worldId === worldId)
    .sort((currentLocation, nextLocation) => currentLocation.order - nextLocation.order)
