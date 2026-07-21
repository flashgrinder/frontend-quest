import type { Location } from '../types/location'

export const locations: Location[] = [
  {
    id: 'html-academy',
    worldId: 'web-foundations',
    title: 'HTML Academy',
    description:
      'Древняя цифровая академия, где зародилась структура Всемирной паутины. Здесь изучают семантику, доступность и основу любого веб-приложения.',
    motto: 'Любое великое приложение начинается со структуры.',
    difficulty: 'Foundation',
    futureProgress: 'Будущие миссии: семантика, формы, доступность, SEO-основа и структура документа.',
    order: 1,
    missionIds: [],
    status: 'current',
    accentColor: '#FFD84D',
    icon: 'HTML',
  },
  {
    id: 'css-city',
    worldId: 'web-foundations',
    title: 'CSS City',
    description:
      'Неоновый мегаполис дизайна, где каждый пиксель находится на своём месте. Здесь рождаются адаптивные интерфейсы, анимации и современные макеты.',
    motto: 'Красота рождается из порядка.',
    difficulty: 'Foundation+',
    futureProgress: 'Будущие миссии: cascade, layout, responsive UI, animations, CSS architecture и design systems.',
    order: 2,
    missionIds: [],
    status: 'locked',
    accentColor: '#E500FF',
    icon: 'CSS',
  },
  {
    id: 'javascript-valley',
    worldId: 'web-foundations',
    title: 'JavaScript Valley',
    description:
      'Бескрайняя киберпустыня с древними алгоритмами, асинхронными бурями и заброшенными дата-центрами. Это крупнейшая локация Web Foundations, рассчитанная на десятки будущих областей.',
    motto: 'Здесь начинается настоящее путешествие.',
    difficulty: 'Junior to Senior',
    futureProgress:
      'Будущие области: Variables, Functions, Scope, Closures, Objects, Prototypes, Async, Promises, Event Loop, Modules и Advanced JavaScript.',
    order: 3,
    missionIds: [],
    status: 'locked',
    accentColor: '#FFD84D',
    icon: 'JS',
  },
  {
    id: 'browser-core',
    worldId: 'web-foundations',
    title: 'Browser Core',
    description:
      'Цифровое сердце браузера, где оживают DOM, Event Loop, рендеринг и тысячи внутренних процессов, скрытых от глаз обычного пользователя.',
    motto: 'Пойми браузер — и поймёшь веб.',
    difficulty: 'Middle',
    futureProgress: 'Будущие миссии: DOM, rendering pipeline, storage, browser APIs, events и performance basics.',
    order: 4,
    missionIds: [],
    status: 'locked',
    accentColor: '#00FFB1',
    icon: 'DOM',
  },
  {
    id: 'network-zone',
    worldId: 'web-foundations',
    title: 'Network Zone',
    description:
      'Глобальная сеть серверов и цифровых магистралей, по которым путешествуют HTTP-запросы, WebSocket-соединения и миллионы пакетов данных.',
    motto: 'Каждый запрос находит свой путь.',
    difficulty: 'Middle+',
    futureProgress: 'Будущие миссии: HTTP, caching, cookies, CORS, WebSocket, security headers и API contracts.',
    order: 5,
    missionIds: [],
    status: 'locked',
    accentColor: '#38BDF8',
    icon: 'NET',
  },
  {
    id: 'git-terminal',
    worldId: 'web-foundations',
    title: 'Git Terminal',
    description:
      'Огромный промышленный терминал, где разработчики управляют историей проектов, объединяют ветки и готовят код к новым релизам.',
    motto: 'История проекта — это его память.',
    difficulty: 'Junior+',
    futureProgress: 'Будущие миссии: commits, branches, merge, rebase, pull requests, conflicts и release workflow.',
    order: 6,
    missionIds: [],
    status: 'locked',
    accentColor: '#5E00FF',
    icon: 'GIT',
  },
  {
    id: 'vue-city',
    worldId: 'vue-ecosystem',
    title: 'Vue City',
    description:
      'Core-маршрут Vue 3: основы, реактивность, компоненты, props, slots, lifecycle и composables.',
    motto: 'Реактивность превращает интерфейс в живую систему.',
    difficulty: 'Junior to Middle+',
    futureProgress: 'Текущие миссии Vue City уже доступны через Content Engine.',
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
    description:
      'Маршрутизация Vue Router: history, guards, params, lazy loading, active states и навигационные сценарии.',
    motto: 'Каждый маршрут должен вести игрока точно туда, куда он собирался.',
    difficulty: 'Middle',
    futureProgress: 'Миссия Router уже подключена к Content Engine.',
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
    description:
      'State management в Pinia: stores, getters, actions, persistence, SSR-ограничения и разделение ответственности.',
    motto: 'Состояние должно быть предсказуемым даже в хаосе интерфейса.',
    difficulty: 'Middle+',
    futureProgress: 'Миссия Pinia уже подключена к Content Engine.',
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
    description:
      'Nuxt 3: core, data fetching, Server API, Nitro, SSR, hydration и performance для production-приложений.',
    motto: 'За пределами SPA начинается космос универсального рендеринга.',
    difficulty: 'Middle+ to Senior',
    futureProgress: 'Nuxt-миссии уже подключены к Content Engine.',
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
