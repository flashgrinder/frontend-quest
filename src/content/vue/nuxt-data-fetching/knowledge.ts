import type { ContentKnowledgeCard } from '../../../types/content'
import type { CodeExample, InterviewLevel, KnowledgeRarity } from '../../../types/knowledge'

interface DataFetchingCardSeed {
  questionId: number
  title: string
  category: string
  rarity: KnowledgeRarity
  interviewLevel: InterviewLevel
  readingTime: string
  whatIsIt: string
  whenToUse: string
  howItWorks: string
  whyImportant: string
  codeExample: CodeExample
  commonMistake: string
  interviewQuestions: string[]
  remember: string
}

const createCard = (seed: DataFetchingCardSeed): ContentKnowledgeCard => ({
  id: `nuxt-data-fetching-${seed.questionId}`,
  moduleId: 'nuxt-data-fetching',
  questionId: seed.questionId,
  title: seed.title,
  category: seed.category,
  rarity: seed.rarity,
  interviewLevel: seed.interviewLevel,
  readingTime: seed.readingTime,
  whatIsIt: seed.whatIsIt,
  whenToUse: seed.whenToUse,
  howItWorks: seed.howItWorks,
  whyImportant: seed.whyImportant,
  codeExample: seed.codeExample,
  commonMistake: seed.commonMistake,
  interviewQuestions: seed.interviewQuestions,
  remember: seed.remember,
})

const createInterviewQuestions = (title: string, category: string): string[] => [
  `Какие задачи решает ${title} в теме ${category} (Nuxt Data Fetching)?`,
  `Какие ограничения ${title} важно учитывать в контексте Nuxt Data Fetching?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

export const nuxtDataFetchingKnowledgeCards: ContentKnowledgeCard[] = [
  createCard({
    questionId: 1501,
    title: 'useFetch',
    category: 'Basics',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'useFetch — composable Nuxt для HTTP-запросов, интегрированный с SSR, payload и реактивным состоянием. Он возвращает data, pending, error, refresh и другие служебные значения. Это основной инструмент для типичных API-запросов на страницах и компонентах.',
    whenToUse:
      'useFetch используют, когда данные можно получить по URL и они могут быть нужны до рендера страницы. Он удобен для списков, карточек, профилей, публичного контента и API, где URL и параметры описывают запрос. Если нужна произвольная async-логика, лучше рассмотреть useAsyncData.',
    howItWorks:
      'При SSR Nuxt может выполнить запрос на сервере, сериализовать результат в payload и переиспользовать его на клиенте. На клиенте composable отдаёт реактивные data/error/pending и умеет обновляться через refresh. Key и параметры запроса помогают Nuxt понять идентичность данных.',
    whyImportant:
      'useFetch связывает data loading с rendering strategy Nuxt. Правильное применение уменьшает пустые первые экраны и двойные запросы. На интервью важно объяснить, что это не просто fetch, а SSR-aware слой данных.',
    codeExample: {
      language: 'vue',
      filename: 'pages/products.vue',
      code: `<script setup lang="ts">
const { data: products, pending, error } = await useFetch('/api/products')
</script>`,
    },
    commonMistake:
      'Ошибка — заменять useFetch обычным $fetch на SSR-странице и затем удивляться повторному запросу на клиенте.',
    interviewQuestions: createInterviewQuestions("useFetch", "Basics"),
    remember: 'useFetch подходит для SSR-aware HTTP-запросов по URL.',
  }),
  createCard({
    questionId: 1502,
    title: 'useAsyncData',
    category: 'Basics',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'useAsyncData — универсальный Nuxt composable для async-данных. Он принимает key и handler, который может выполнять любую асинхронную работу. В отличие от useFetch, handler не обязан быть прямым HTTP-запросом по URL.',
    whenToUse:
      'useAsyncData выбирают для repository calls, агрегации нескольких источников, преобразования данных или server-side вычислений. Он полезен, когда источник данных сложнее, чем один endpoint. Для простого GET-запроса useFetch часто короче и понятнее.',
    howItWorks:
      'Nuxt выполняет handler, связывает результат с key и может перенести данные через payload. На клиенте результат гидратируется и доступен как reactive data. Key должен быть стабильным и отражать параметры данных.',
    whyImportant:
      'useAsyncData часто становится архитектурной точкой для сложного data layer. Он позволяет отделить UI от деталей получения данных, но требует дисциплины с key и ошибками. На Middle+/Senior уровне важно понимать его отличие от useFetch.',
    codeExample: {
      language: 'ts',
      filename: 'pages/dashboard.vue',
      code: `const { data } = await useAsyncData('dashboard', async () => {
  const [profile, metrics] = await Promise.all([
    profileRepository.getCurrent(),
    metricsRepository.getSummary(),
  ])

  return { profile, metrics }
})`,
    },
    commonMistake:
      'Ошибка — использовать один и тот же key для разных handler-ов или параметров.',
    interviewQuestions: createInterviewQuestions("useAsyncData", "Basics"),
    remember: 'useAsyncData нужен для произвольного async handler и контролируемого key.',
  }),
  createCard({
    questionId: 1503,
    title: '$fetch',
    category: 'Basics',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      '$fetch — низкоуровневый HTTP-клиент Nuxt на базе ofetch. Он возвращает Promise с результатом и не создаёт reactive data state. Это хороший инструмент для server routes, actions, repository layer и одноразовых запросов.',
    whenToUse:
      '$fetch используют внутри Server API, actions, repositories и ручных операций, где не нужен SSR payload state. Он подходит для mutation-запросов и событий пользователя. Для page-level данных, влияющих на HTML, чаще лучше useFetch или useAsyncData.',
    howItWorks:
      '$fetch выполняет HTTP-запрос, обрабатывает JSON и может работать с относительными URL Nuxt. На сервере относительный запрос к server/api может выполняться эффективно внутри Nitro. Но reactive pending/error/data нужно строить самостоятельно или использовать composables Nuxt.',
    whyImportant:
      'Путаница между $fetch и useFetch приводит к двойным запросам и потере SSR-преимуществ. На интервью важно уметь объяснить разницу между HTTP-клиентом и SSR-aware data composable. Это влияет на архитектуру страниц.',
    codeExample: {
      language: 'ts',
      filename: 'repositories/products.ts',
      code: `export const productsRepository = {
  list: () => $fetch<Product[]>('/api/products'),
  create: (payload: ProductInput) => $fetch('/api/products', { method: 'POST', body: payload }),
}`,
    },
    commonMistake:
      'Ошибка — использовать await $fetch в setup SSR-страницы вместо useAsyncData/useFetch для данных первого экрана.',
    interviewQuestions: createInterviewQuestions("$fetch", "Basics"),
    remember: '$fetch — HTTP-клиент, а не полноценное Nuxt async data состояние.',
  }),
  createCard({
    questionId: 1504,
    title: 'Lazy data fetching',
    category: 'Lazy Loading',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Lazy data fetching — загрузка данных без блокировки навигации. В Nuxt это можно сделать через useLazyFetch, useLazyAsyncData или опцию lazy: true. Пользователь быстрее видит страницу, а данные приходят позже.',
    whenToUse:
      'Lazy подходит для второстепенных блоков, рекомендаций, виджетов ниже первого экрана и данных, не критичных для SEO. Для hero-контента, LCP и важных SSR-данных lazy может ухудшить первый опыт. Решение зависит от приоритета данных.',
    howItWorks:
      'Nuxt не ждёт завершения lazy-запроса перед завершением navigation. pending остаётся true, пока данные загружаются. UI должен показывать skeleton, placeholder или graceful empty state.',
    whyImportant:
      'Lazy — UX-инструмент, а не универсальная оптимизация. Он помогает избежать блокировки маршрута, но переносит ответственность на состояние загрузки. На интервью важно обсудить trade-off между скоростью навигации и полнотой первого HTML.',
    codeExample: {
      language: 'vue',
      filename: 'components/Recommendations.vue',
      code: `<script setup lang="ts">
const { data, pending } = await useLazyFetch('/api/recommendations')
</script>`,
    },
    commonMistake:
      'Ошибка — делать lazy критичные SEO-данные и получать пустой первый HTML.',
    interviewQuestions: createInterviewQuestions("Lazy data fetching", "Lazy Loading"),
    remember: 'Lazy нужен для некритичных данных и требует pending UI.',
  }),
  createCard({
    questionId: 1505,
    title: 'server: false',
    category: 'Execution',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'server: false — опция Nuxt data fetching, которая отключает выполнение запроса на сервере. Запрос стартует только в браузере. Это делает данные client-only и исключает их из SSR HTML.',
    whenToUse:
      'server: false уместен для browser-only данных, персонализации после hydration, неSEO-критичных виджетов или API, который доступен только из браузера. Если данные нужны для первого HTML, SEO или LCP, эту опцию лучше не использовать. Также нужно учитывать pending state.',
    howItWorks:
      'Во время SSR запрос пропускается, а на клиенте composable запускает его после hydration/инициализации. data сначала может быть пустым или default. UI должен корректно пережить отсутствие данных на сервере.',
    whyImportant:
      'server: false часто исправляет ошибки с browser-only API, но может ухудшить первый экран. На интервью важно показать, что это не “ускоритель”, а изменение места выполнения запроса. Решение должно быть связано с требованиями данных.',
    codeExample: {
      language: 'ts',
      filename: 'components/ClientMetrics.vue',
      code: `const { data: metrics, pending } = await useFetch('/api/client-metrics', {
  server: false,
})`,
    },
    commonMistake:
      'Ошибка — ставить server: false на основные данные страницы и терять SSR-преимущества.',
    interviewQuestions: createInterviewQuestions("server: false", "Execution"),
    remember: 'server: false делает запрос client-only.',
  }),
  createCard({
    questionId: 1506,
    title: 'Двойной запрос',
    category: 'Common Mistakes',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Двойной запрос возникает, когда одни и те же данные загружаются в SSR и повторно на клиенте без переиспользования payload. Частая причина — смешение $fetch в setup и fetch в onMounted. Это увеличивает нагрузку и может давать визуальные скачки.',
    whenToUse:
      'Проверять двойные запросы нужно на страницах с SSR-данными, фильтрами, mounted hooks и ручным refresh. Особенно важно смотреть Network panel после первого открытия и после hydration. Иногда повторный запрос оправдан, но он должен быть явным.',
    howItWorks:
      'useFetch/useAsyncData связывают результат с key и payload, чтобы клиент мог не повторять серверный запрос. Обычный $fetch не создаёт такой Nuxt data state. Если затем компонент запускает onMounted-запрос, серверный результат не переиспользуется.',
    whyImportant:
      'Лишние запросы ухудшают TTFB, backend load, INP и стабильность данных. На интервью это практический маркер опыта с SSR. Правильное решение начинается с единого источника загрузки данных.',
    codeExample: {
      language: 'vue',
      filename: 'pages/products.vue',
      code: `<script setup lang="ts">
const { data: products } = await useFetch('/api/products')
</script>`,
    },
    commonMistake:
      'Ошибка — дублировать тот же endpoint в onMounted после SSR-загрузки.',
    interviewQuestions: createInterviewQuestions("Двойной запрос", "Common Mistakes"),
    remember: 'Для SSR-данных нужен payload-aware composable, иначе легко получить повторный запрос.',
  }),
  createCard({
    questionId: 1507,
    title: 'Key в async data',
    category: 'Cache Keys',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Key в useAsyncData/useFetch идентифицирует набор данных в Nuxt async data cache и payload. Он должен отражать сущность и параметры запроса. Неправильный key связывает разные данные или ломает кэширование.',
    whenToUse:
      'Явный key особенно важен, когда handler зависит от route params, query, locale, user id или фильтров. Если данные разные, key тоже должен отличаться. Для простого useFetch Nuxt может сгенерировать key, но явный key часто делает намерение понятнее.',
    howItWorks:
      'Nuxt сохраняет результат под key и использует его для hydration, dedupe, refreshNuxtData и clearNuxtData. Если key одинаковый для разных запросов, они конкурируют за один cache slot. Если key случайный, кэш становится бесполезным.',
    whyImportant:
      'Key — маленькая строка с большим архитектурным влиянием. Ошибка в key может выглядеть как “случайно показываются чужие данные”. На интервью это проверяет понимание identity данных.',
    codeExample: {
      language: 'ts',
      filename: 'pages/users/[id].vue',
      code: `const route = useRoute()
const userId = computed(() => String(route.params.id))

const { data: user } = await useAsyncData(
  () => \`user-\${userId.value}\`,
  () => usersRepository.getById(userId.value),
)`,
    },
    commonMistake:
      'Ошибка — использовать key "data" для нескольких разных запросов.',
    interviewQuestions: createInterviewQuestions("Key в async data", "Cache Keys"),
    remember: 'Key должен стабильно описывать конкретные данные и их параметры.',
  }),
  createCard({
    questionId: 1508,
    title: 'watch и reactive params',
    category: 'Reactivity',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'watch в Nuxt data fetching управляет повторным выполнением запроса при изменении реактивных источников. Query, params и body могут зависеть от refs/computed. Это позволяет связать фильтры UI с загрузкой данных.',
    whenToUse:
      'watch нужен для поиска, фильтров, pagination, route query и других параметров, меняющих результат. Если значение не влияет на запрос, добавлять его в watch не нужно. Для частого ввода стоит учитывать debounce или manual execute.',
    howItWorks:
      'Nuxt отслеживает указанные источники и вызывает refresh при изменении. Если handler сам меняет watched source, можно получить цикл. Хорошая схема имеет одно направление: UI state меняет параметры, параметры обновляют запрос.',
    whyImportant:
      'Реактивные запросы легко сделать слишком шумными. На production-страницах один лишний watch может создать десятки запросов. На интервью важно показать контроль над зависимостями и частотой обновления.',
    codeExample: {
      language: 'ts',
      filename: 'pages/catalog.vue',
      code: `const category = ref('books')

const { data } = await useFetch('/api/products', {
  query: { category },
  watch: [category],
})`,
    },
    commonMistake:
      'Ошибка — добавлять watch на объект, который пересоздаётся при каждом render.',
    interviewQuestions: createInterviewQuestions("watch и reactive params", "Reactivity"),
    remember: 'watch должен отражать реальные параметры запроса и не создавать циклы.',
  }),
  createCard({
    questionId: 1509,
    title: 'dedupe',
    category: 'Concurrency',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'dedupe — стратегия обработки повторных запросов с одинаковой identity. Она помогает избежать гонок и лишней нагрузки, когда один запрос запускается несколько раз. В Nuxt это связано с key и конкурентным refresh.',
    whenToUse:
      'dedupe важен при быстрых фильтрах, route changes, повторных кликах и нескольких компонентах, читающих одни данные. Нужно решить, отменять старый запрос или игнорировать новый запуск. Выбор зависит от UX и актуальности результата.',
    howItWorks:
      'Nuxt может связывать запросы по key и применять dedupe-стратегию. Если ключи нестабильны, dedupe не поможет. Если key слишком общий, dedupe может связать разные данные ошибочно.',
    whyImportant:
      'Конкурентные запросы вызывают race conditions: старый ответ приходит позже и перезаписывает новый. На senior-уровне важно думать о порядке завершения, актуальности результата и нагрузке на backend.',
    codeExample: {
      language: 'ts',
      filename: 'search.vue',
      code: `const { data } = await useFetch('/api/search', {
  query: { q },
  key: () => \`search-\${q.value}\`,
  dedupe: 'cancel',
})`,
    },
    commonMistake:
      'Ошибка — надеяться на dedupe при случайном key или при каждом новом объекте параметров.',
    interviewQuestions: createInterviewQuestions("dedupe", "Concurrency"),
    remember: 'dedupe работает только при корректной identity запроса.',
  }),
  createCard({
    questionId: 1510,
    title: 'Repository pattern',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Repository pattern — слой функций, который скрывает детали API: URL, DTO mapping, headers и обработку ошибок. UI и composables получают понятные методы домена. Это снижает связанность страниц с backend-контрактом.',
    whenToUse:
      'Repository полезен, когда API используется в нескольких местах, требует transform, имеет версионирование или сложную обработку ошибок. Для одного простого запроса слой может быть лишним. В больших Nuxt-приложениях repository помогает держать data layer устойчивым.',
    howItWorks:
      'Repository вызывает $fetch или server API, преобразует ответ и возвращает типизированную модель. useAsyncData или useFetch могут использовать repository как источник данных. Компонент не знает детали endpoint.',
    whyImportant:
      'Без data layer URL и mapping размазываются по компонентам. Любое изменение backend-контракта превращается в поиск по всему UI. На интервью это показывает архитектурное мышление, а не только знание composables.',
    codeExample: {
      language: 'ts',
      filename: 'repositories/articles.ts',
      code: `export const articlesRepository = {
  list: () => $fetch<ArticleDto[]>('/api/articles').then(mapArticles),
  bySlug: (slug: string) => $fetch<ArticleDto>(\`/api/articles/\${slug}\`).then(mapArticle),
}`,
    },
    commonMistake:
      'Ошибка — превращать repository в огромный слой без доменных границ и типов.',
    interviewQuestions: createInterviewQuestions("Repository pattern", "Architecture"),
    remember: 'Repository отделяет UI от деталей backend API.',
  }),
  createCard({
    questionId: 1511,
    title: 'useFetch vs useAsyncData',
    category: 'Interview',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'useFetch и useAsyncData оба решают SSR-aware получение данных, но имеют разные уровни абстракции. useFetch удобен для HTTP-запроса по URL. useAsyncData подходит для произвольной async-логики и агрегации.',
    whenToUse:
      'useFetch выбирают для простых endpoint-ов, где URL, method, query и body полностью описывают запрос. useAsyncData выбирают, когда нужно вызвать repository, объединить несколько запросов или выполнить вычисление. Оба варианта требуют продуманного key и error handling.',
    howItWorks:
      'useFetch фактически строит data fetching вокруг HTTP-клиента. useAsyncData принимает handler и не навязывает источник данных. Результат обоих может попасть в payload и быть гидратирован на клиенте.',
    whyImportant:
      'На интервью этот выбор проверяет понимание не только API, но и архитектуры. Неправильный выбор часто ведёт к дублированию кода или слабому контролю над data layer. Хороший ответ начинается с формы данных и требований страницы.',
    codeExample: {
      language: 'ts',
      filename: 'data-choice.ts',
      code: `const products = await useFetch('/api/products')

const dashboard = await useAsyncData('dashboard', () =>
  dashboardRepository.load(),
)`,
    },
    commonMistake:
      'Ошибка — считать useAsyncData устаревшей заменой useFetch или наоборот.',
    interviewQuestions: createInterviewQuestions("useFetch vs useAsyncData", "Interview"),
    remember: 'useFetch — для HTTP по URL, useAsyncData — для произвольного async handler.',
  }),
  createCard({
    questionId: 1512,
    title: 'useLazyFetch',
    category: 'Lazy Loading',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'useLazyFetch — вариант useFetch, который не блокирует navigation ожиданием результата. Он возвращает те же reactive-состояния, но данные могут прийти после отображения страницы. Это делает его удобным для второстепенных блоков.',
    whenToUse:
      'useLazyFetch подходит для рекомендаций, боковых виджетов, похожих материалов, аналитических блоков и данных ниже первого экрана. Если данные критичны для SEO или первого экрана, lazy может быть неправильным выбором. UI должен явно показывать loading state.',
    howItWorks:
      'Nuxt запускает запрос, но не ждёт его перед завершением перехода. pending показывает состояние загрузки. После получения ответа data обновляет UI реактивно.',
    whyImportant:
      'Lazy-загрузка помогает управлять perceived performance. Но она не должна скрывать отсутствие архитектуры loading/error states. На интервью важно обсуждать приоритет данных, а не только синтаксис.',
    codeExample: {
      language: 'vue',
      filename: 'RelatedPosts.vue',
      code: `<script setup lang="ts">
const { data: related, pending } = await useLazyFetch('/api/related-posts')
</script>`,
    },
    commonMistake:
      'Ошибка — использовать lazy и не предусмотреть skeleton или fallback.',
    interviewQuestions: createInterviewQuestions("useLazyFetch", "Lazy Loading"),
    remember: 'useLazyFetch не блокирует навигацию, но требует loading UX.',
  }),
  createCard({
    questionId: 1513,
    title: 'Неправильный key',
    category: 'Cache Keys',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Неправильный key — одна из самых частых причин странных багов в Nuxt data fetching. Key может быть слишком общим, нестабильным или не учитывать параметры. В результате данные конфликтуют или кэш не используется.',
    whenToUse:
      'Проверять key нужно при route params, query filters, locale, auth context и разных handler-ах. Один key для разных данных почти всегда ошибка. Случайный key допустим редко, потому что он отключает смысл кэша.',
    howItWorks:
      'Nuxt использует key как identity для payload, refreshNuxtData, clearNuxtData и dedupe. Если два запроса делят key, они делят слот данных. Если key зависит от Math.random, каждый запуск становится новым набором данных.',
    whyImportant:
      'Баги key трудно заметить сразу: UI может показывать старые или чужие данные только при определённой навигации. На interview это хороший способ проверить практический опыт с SSR cache. Правильный key документирует смысл данных.',
    codeExample: {
      language: 'ts',
      filename: 'stable-key.ts',
      code: `const key = computed(() => \`orders-\${status.value}-\${page.value}\`)

const { data } = await useAsyncData(key, () =>
  ordersRepository.list({ status: status.value, page: page.value }),
)`,
    },
    commonMistake:
      'Ошибка — использовать key "list" для всех списков на странице.',
    interviewQuestions: createInterviewQuestions("Неправильный key", "Cache Keys"),
    remember: 'Key должен учитывать параметры, влияющие на результат.',
  }),
  createCard({
    questionId: 1514,
    title: 'Server API vs прямой запрос',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Выбор между Server API и прямым запросом определяет, где находится boundary данных. Прямой useFetch к публичному API проще. Server API нужен, когда frontend должен получить безопасный, адаптированный или агрегированный контракт.',
    whenToUse:
      'Server API выбирают для секретов, private runtimeConfig, proxy, BFF, агрегации, нормализации DTO и централизованного error handling. Прямой запрос подходит для публичных endpoints без секретов и специальных правил. Важно учитывать CORS, auth и deployment.',
    howItWorks:
      'Компонент или composable вызывает /api/* внутри Nuxt, а server route уже обращается к внешнему backend. Так секреты остаются на сервере, а клиент получает client-safe DTO. Это добавляет слой, но повышает контроль.',
    whyImportant:
      'На senior-уровне data fetching — это не только “куда fetch-ить”, но и security boundary. Неверный выбор может раскрыть секреты или сделать UI зависимым от неудобного backend-контракта. Хороший ответ учитывает риски и стоимость слоя.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/products.get.ts',
      code: `export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const products = await $fetch<ProductDto[]>(config.privateProductsUrl)

  return products.map(toPublicProduct)
})`,
    },
    commonMistake:
      'Ошибка — вызывать внешний private API прямо из браузера ради меньшего количества файлов.',
    interviewQuestions: createInterviewQuestions("Server API vs прямой запрос", "Architecture"),
    remember: 'Server API нужен, когда требуется server boundary или адаптация контракта.',
  }),
  createCard({
    questionId: 1515,
    title: 'Бесконечный refresh',
    category: 'Common Mistakes',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Бесконечный refresh — реактивный цикл, где запрос изменяет зависимость, которая снова запускает запрос. Это может быстро создать лавину HTTP-запросов. Чаще всего причина в неправильном watch или unstable object dependency.',
    whenToUse:
      'Искать эту проблему нужно при watch на объекты, transform-логике, обновлении query из результата и ручных watchers вокруг refresh. Если запрос зависит от состояния, он не должен без необходимости менять это же состояние. Иногда нужен debounce или explicit execute.',
    howItWorks:
      'Reactive source меняется, Nuxt вызывает refresh, handler или обработчик результата меняет source снова. Цикл повторяется. Чем быстрее backend отвечает, тем быстрее накапливаются запросы.',
    whyImportant:
      'Такая ошибка влияет на backend load, UX и стоимость инфраструктуры. На интервью важно уметь объяснить не только симптом, но и петлю зависимости. Исправление обычно начинается с упрощения data flow.',
    codeExample: {
      language: 'ts',
      filename: 'avoid-loop.ts',
      code: `const page = ref(1)

const { data } = await useFetch('/api/products', {
  query: { page },
  watch: [page],
})`,
    },
    commonMistake:
      'Ошибка — менять page или filters внутри handler результата без условия, которое останавливает цикл.',
    interviewQuestions: createInterviewQuestions("Бесконечный refresh", "Common Mistakes"),
    remember: 'Запрос не должен бесконтрольно менять собственные watch-зависимости.',
  }),
  createCard({
    questionId: 1516,
    title: 'refresh',
    category: 'Cache Refresh',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'refresh — метод, возвращаемый useFetch/useAsyncData для повторного выполнения текущего запроса. Он сохраняет настройки composable и обновляет data/error/pending. Это точечный способ обновить конкретный data source.',
    whenToUse:
      'refresh используют после пользовательского действия, mutation, retry после ошибки или ручной кнопки обновления. Его не стоит вызывать в каждом render или watcher без необходимости. Если обновлять нужно несколько ключей, полезнее refreshNuxtData.',
    howItWorks:
      'Метод повторно запускает handler или HTTP-запрос текущего composable. pending меняется на время запроса, error отражает сбой. Если есть dedupe, поведение зависит от стратегии повторного запуска.',
    whyImportant:
      'refresh помогает сделать data обновляемыми без перезагрузки страницы. На интервью важно показать, что обновление данных должно быть связано с событием или invalidation, а не происходить хаотично. Это основа контролируемого client cache.',
    codeExample: {
      language: 'vue',
      filename: 'ProductsToolbar.vue',
      code: `<script setup lang="ts">
const { data, pending, refresh } = await useFetch('/api/products')
</script>

<template>
  <button :disabled="pending" @click="refresh()">Обновить</button>
</template>`,
    },
    commonMistake:
      'Ошибка — вызывать refresh сразу после каждого изменения, хотя useFetch уже следит за параметрами.',
    interviewQuestions: createInterviewQuestions("refresh", "Cache Refresh"),
    remember: 'refresh повторяет конкретный запрос с текущими настройками.',
  }),
  createCard({
    questionId: 1517,
    title: 'refreshNuxtData',
    category: 'Cache Refresh',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'refreshNuxtData — утилита Nuxt для обновления async data по ключу или всех async data. Она полезна, когда mutation в одном месте должна обновить данные, созданные в другом компоненте. Это механизм invalidation на уровне Nuxt data cache.',
    whenToUse:
      'refreshNuxtData используют после POST/PUT/DELETE, изменения фильтров вне текущего composable или события, которое затрагивает несколько источников. Если нужно обновить только локальный composable, достаточно его refresh. Для logout может понадобиться clearNuxtData.',
    howItWorks:
      'Nuxt ищет async data с указанным key и вызывает их refresh. Если key не передан, можно обновить больше данных, чем нужно. Поэтому ключи должны быть осмысленными и достаточно точными.',
    whyImportant:
      'В больших интерфейсах данные распределены по компонентам. refreshNuxtData позволяет связать mutation и обновление связанных read-моделей без полной перезагрузки страницы. На senior-уровне важно не обновлять всё без причины.',
    codeExample: {
      language: 'ts',
      filename: 'createProduct.ts',
      code: `await $fetch('/api/products', {
  method: 'POST',
  body: productInput,
})

await refreshNuxtData('products')`,
    },
    commonMistake:
      'Ошибка — вызывать refreshNuxtData без key после каждой mutation и перегружать страницу лишними запросами.',
    interviewQuestions: createInterviewQuestions("refreshNuxtData", "Cache Refresh"),
    remember: 'refreshNuxtData обновляет Nuxt async data по ключам.',
  }),
  createCard({
    questionId: 1518,
    title: 'Payload',
    category: 'SSR',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Payload — сериализованные данные, которые Nuxt передаёт с сервера на клиент для hydration. Он позволяет клиенту не повторять SSR-запрос и восстановить data state. Payload является частью моста между server render и клиентским приложением.',
    whenToUse:
      'Payload используется автоматически при SSR data fetching. О нём нужно думать при больших ответах, персональных данных, секретах и дорогостоящих запросах. В payload должны попадать только client-safe и действительно нужные данные.',
    howItWorks:
      'useFetch/useAsyncData выполняются на сервере, результат сохраняется в payload, а клиент при hydration читает его по key. Если key совпадает и данные есть, повторный запрос не нужен. Если payload большой, клиент дольше загружает и парсит страницу.',
    whyImportant:
      'Payload влияет одновременно на безопасность и performance. Ошибка может раскрыть internal fields или раздуть HTML/JS. На интервью важно сказать: SSR data не становится приватной только потому, что получена на сервере.',
    codeExample: {
      language: 'ts',
      filename: 'safe-payload.ts',
      code: `const { data: user } = await useAsyncData('public-user', async () => {
  const user = await usersRepository.current()
  return { id: user.id, name: user.name }
})`,
    },
    commonMistake:
      'Ошибка — возвращать из SSR data fetching полный backend object с internal fields.',
    interviewQuestions: createInterviewQuestions("Payload", "SSR"),
    remember: 'Payload должен быть безопасным и компактным.',
  }),
  createCard({
    questionId: 1519,
    title: 'clearNuxtData',
    category: 'Cache Invalidation',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'clearNuxtData — утилита для очистки Nuxt async data cache по ключам. Она помогает удалить устаревшие или приватные данные из клиентского состояния. Частый сценарий — logout или смена аккаунта.',
    whenToUse:
      'clearNuxtData используют, когда данные больше не должны быть доступны: logout, смена tenant, сброс фильтров или invalidation после критичного изменения. Для простого обновления данных лучше refreshNuxtData. Очистка должна быть точечной.',
    howItWorks:
      'Nuxt удаляет сохранённые async data, связанные с key. Следующее обращение может снова загрузить данные. Если рядом есть Pinia или другой cache, их тоже нужно очистить отдельно.',
    whyImportant:
      'Очистка данных важна для безопасности и consistency. Если после logout оставить user-specific async data, интерфейс может показать старую информацию. На интервью это связывает data fetching с lifecycle пользователя.',
    codeExample: {
      language: 'ts',
      filename: 'logout.ts',
      code: `await authRepository.logout()
clearNuxtData('current-user')
clearNuxtData('notifications')`,
    },
    commonMistake:
      'Ошибка — очищать только token, но оставлять Nuxt async data с приватной информацией.',
    interviewQuestions: createInterviewQuestions("clearNuxtData", "Cache Invalidation"),
    remember: 'clearNuxtData удаляет async data cache, но не заменяет сброс других stores.',
  }),
  createCard({
    questionId: 1520,
    title: 'createError и showError',
    category: 'Errors',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'createError создаёт Nuxt/H3 ошибку с statusCode и сообщением, а showError программно переводит Nuxt в error state. Эти API помогают сделать ошибки управляемыми. Они часто встречаются вокруг data fetching и Server API.',
    whenToUse:
      'createError используют, когда данные не найдены, доступ запрещён или server handler должен вернуть контролируемый HTTP status. showError полезен, когда ошибку нужно показать из клиентского сценария. Для локального виджета иногда достаточно error.value и fallback UI.',
    howItWorks:
      'createError можно throw-нуть в page setup, route middleware или server handler. Nuxt обработает statusCode и покажет error page или boundary. showError устанавливает глобальное состояние ошибки без throw.',
    whyImportant:
      'Хорошее error handling отличает production data fetching от демо. Пользователь должен видеть понятное состояние, а HTTP status должен соответствовать проблеме. На интервью важно различать локальную ошибку блока и ошибку всей страницы.',
    codeExample: {
      language: 'ts',
      filename: 'pages/articles/[slug].vue',
      code: `const { data: article } = await useFetch(\`/api/articles/\${slug}\`)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}`,
    },
    commonMistake:
      'Ошибка — ловить 404 и показывать пустой успешный экран без статуса ошибки.',
    interviewQuestions: createInterviewQuestions("createError и showError", "Errors"),
    remember: 'Ошибки данных должны иметь корректный status и понятный UX.',
  }),
  createCard({
    questionId: 1521,
    title: 'HTTP ошибки',
    category: 'Errors',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'HTTP ошибки — ответы вроде 400, 401, 403, 404 и 500, которые должны быть отражены в UI и логике. В useFetch они попадают в error. В Server API их можно создавать через createError.',
    whenToUse:
      'Обработка HTTP ошибок нужна во всех production-запросах. 401 может вести к reauth, 403 — к сообщению о доступе, 404 — к not found, 500 — к retry или error page. Пустой список не должен маскировать любую ошибку.',
    howItWorks:
      'useFetch возвращает error ref, который можно проверить в компоненте. Server API должен возвращать корректный statusCode. UI должен различать empty state и error state, потому что это разные ситуации.',
    whyImportant:
      'Если ошибки маскируются, пользователи и мониторинг теряют сигнал о проблеме. На интервью важно объяснить, что “нет данных” и “не удалось загрузить” — разные состояния. Это влияет на доверие к интерфейсу.',
    codeExample: {
      language: 'vue',
      filename: 'UsersList.vue',
      code: `<template>
  <ErrorState v-if="error" :message="error.statusMessage" />
  <UsersTable v-else :users="users ?? []" />
</template>`,
    },
    commonMistake:
      'Ошибка — заменять любую HTTP ошибку на пустой массив.',
    interviewQuestions: createInterviewQuestions("HTTP ошибки", "Errors"),
    remember: 'Empty state и error state должны быть разными.',
  }),
  createCard({
    questionId: 1522,
    title: 'Error boundaries',
    category: 'Errors',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Error boundary — граница, которая определяет, какая часть интерфейса ломается при ошибке данных. Иногда ошибка должна показать error page, иногда достаточно fallback внутри одного блока. Правильная граница сохраняет UX управляемым.',
    whenToUse:
      'Page-level boundary нужен для критичных данных страницы: товар не найден, доступ запрещён, статья отсутствует. Component-level fallback подходит для рекомендаций, аналитики или второстепенного виджета. Решение зависит от важности данных.',
    howItWorks:
      'Критичные ошибки можно throw-нуть через createError, чтобы Nuxt показал error state. Локальные ошибки можно обработать через error.value и компонент fallback. В обоих случаях должен быть recovery path: retry, back, support или альтернативный контент.',
    whyImportant:
      'Без границ ошибка маленького виджета может сломать всю страницу или наоборот важная ошибка скрывается как пустой блок. На senior-уровне data fetching всегда обсуждается вместе с UX failure states. Это часть надёжности продукта.',
    codeExample: {
      language: 'vue',
      filename: 'AnalyticsWidget.vue',
      code: `<template>
  <WidgetError v-if="error" @retry="refresh" />
  <AnalyticsChart v-else :data="data" />
</template>`,
    },
    commonMistake:
      'Ошибка — использовать один и тот же global error page для любого сбоя, включая второстепенные виджеты.',
    interviewQuestions: createInterviewQuestions("Error boundaries", "Errors"),
    remember: 'Граница ошибки зависит от критичности данных.',
  }),
  createCard({
    questionId: 1523,
    title: 'Parallel requests',
    category: 'Performance',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Parallel requests — выполнение независимых запросов одновременно. Это уменьшает суммарное время ожидания по сравнению с последовательным waterfall. В Nuxt это особенно важно для SSR, где каждый лишний await влияет на TTFB.',
    whenToUse:
      'Параллелить стоит независимые данные: профиль и справочник, метрики и настройки, несколько виджетов. Если второй запрос зависит от результата первого, полная параллельность невозможна. Иногда полезно объединить запросы на стороне Server API.',
    howItWorks:
      'Promise.all запускает handlers одновременно и ждёт оба результата. useAsyncData может вернуть агрегированный объект. Альтернативно несколько awaited composables могут стартовать параллельно, если не зависят друг от друга.',
    whyImportant:
      'Waterfall часто незаметен в коде, но сильно влияет на performance. На интервью важно уметь читать последовательность await и видеть, где ожидание можно сократить. Это practical performance skill.',
    codeExample: {
      language: 'ts',
      filename: 'pages/dashboard.vue',
      code: `const { data } = await useAsyncData('dashboard', async () => {
  const [profile, stats] = await Promise.all([
    $fetch('/api/profile'),
    $fetch('/api/stats'),
  ])

  return { profile, stats }
})`,
    },
    commonMistake:
      'Ошибка — последовательно await-ить независимые запросы и увеличивать TTFB.',
    interviewQuestions: createInterviewQuestions("Parallel requests", "Performance"),
    remember: 'Независимые запросы стоит запускать параллельно.',
  }),
  createCard({
    questionId: 1524,
    title: 'Waterfall requests',
    category: 'Performance',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Waterfall requests — последовательная цепочка запросов, где следующий стартует после завершения предыдущего. Иногда это необходимо, но часто возникает случайно из-за лишних await. В SSR waterfall увеличивает TTFB.',
    whenToUse:
      'Waterfall оправдан, если второй запрос реально зависит от данных первого, например нужен user id или token exchange. Если зависимости нет, запросы лучше параллелить. Иногда зависимость можно убрать изменением backend endpoint или Server API aggregation.',
    howItWorks:
      'Каждый await блокирует следующий шаг handler-а. Итоговое время становится суммой задержек. При параллельном запуске время ближе к самому медленному запросу, а не к сумме всех.',
    whyImportant:
      'Performance-аудит часто начинается с поиска waterfall. На senior-интервью важно объяснить, как отличить реальную зависимость от случайной последовательности. Это влияет на архитектуру API.',
    codeExample: {
      language: 'ts',
      filename: 'dependent-request.ts',
      code: `const user = await $fetch<User>('/api/current-user')
const orders = await $fetch<Order[]>(\`/api/users/\${user.id}/orders\`)`,
    },
    commonMistake:
      'Ошибка — делать последовательными запросы, которые не зависят друг от друга.',
    interviewQuestions: createInterviewQuestions("Waterfall requests", "Performance"),
    remember: 'Waterfall допустим только при настоящей зависимости данных.',
  }),
  createCard({
    questionId: 1525,
    title: 'Prefetch',
    category: 'Performance',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Prefetch — предварительная загрузка ресурсов или данных до явного перехода пользователя. Он может ускорить следующий экран, если вероятность перехода высокая. Но prefetch потребляет сеть, память и cache budget.',
    whenToUse:
      'Prefetch полезен для вероятных переходов: hover на ссылке, видимый next step, wizard flow. Он менее полезен для редких веток, больших данных и слабой сети. Стратегия должна учитывать размер payload и приоритет текущей страницы.',
    howItWorks:
      'Данные можно подготовить через prefetchComponents, prefetch route resources или ручной data preloading. При переходе часть работы уже выполнена. Если пользователь не переходит, ресурсы могли быть загружены зря.',
    whyImportant:
      'Prefetch — trade-off между скоростью будущего действия и стоимостью сейчас. На интервью senior-уровня важно не говорить “prefetch всегда хорошо”. Нужно учитывать контекст устройства, сети и поведения пользователя.',
    codeExample: {
      language: 'ts',
      filename: 'prefetch-product.ts',
      code: `const prefetchProduct = (id: string) => {
  return useAsyncData(\`product-\${id}\`, () => productsRepository.byId(id))
}`,
    },
    commonMistake:
      'Ошибка — prefetch-ить все карточки большого списка и перегружать сеть.',
    interviewQuestions: createInterviewQuestions("Prefetch", "Performance"),
    remember: 'Prefetch полезен только при разумной вероятности использования данных.',
  }),
  createCard({
    questionId: 1526,
    title: 'immediate: false',
    category: 'Execution',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'immediate: false откладывает старт запроса до ручного execute или refresh. Composable создаётся, но не выполняет handler сразу. Это удобно, когда параметры ещё не готовы или запрос зависит от действия пользователя.',
    whenToUse:
      'Опция полезна для поиска по кнопке, модального окна, подтверждения формы, dependent filters и сценариев с explicit user intent. Если данные нужны сразу для страницы, immediate: false только усложнит flow. Нужно показывать состояние “ещё не запускалось”.',
    howItWorks:
      'useFetch/useAsyncData возвращают execute/refresh. До запуска data может быть default/null, pending обычно false. После execute запрос проходит обычный lifecycle pending/error/data.',
    whyImportant:
      'Не каждый запрос должен стартовать при создании компонента. immediate: false помогает контролировать момент загрузки и избегать лишних запросов. На interview это показывает понимание execution timing.',
    codeExample: {
      language: 'vue',
      filename: 'SearchPanel.vue',
      code: `<script setup lang="ts">
const query = ref('')
const { data, execute, pending } = await useFetch('/api/search', {
  query: { q: query },
  immediate: false,
})
</script>`,
    },
    commonMistake:
      'Ошибка — ставить immediate: false и забывать вызвать execute, получая вечное пустое состояние.',
    interviewQuestions: createInterviewQuestions("immediate: false", "Execution"),
    remember: 'immediate: false делает запуск запроса ручным.',
  }),
  createCard({
    questionId: 1527,
    title: 'Composable data layer',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Composable data layer — обёртка над Nuxt data fetching, которая отдаёт UI понятный API. Она скрывает endpoint, key, transform, error mapping и refresh strategy. Это полезно для повторяемых data-сценариев.',
    whenToUse:
      'Composable стоит создавать, когда запрос используется в нескольких местах или имеет нетривиальные параметры. Он помогает стабилизировать контракт и уменьшить копирование useFetch options. Для одного простого запроса отдельный слой может быть лишним.',
    howItWorks:
      'Composable принимает параметры, строит стабильный key, вызывает useFetch/useAsyncData и возвращает data, pending, error, refresh. Внутри можно использовать repository, transform и default values. UI остаётся сфокусированным на отображении.',
    whyImportant:
      'Без такого слоя сложные запросы расползаются по компонентам. Любое изменение endpoint или DTO требует множества правок. На senior-уровне это часть масштабируемой архитектуры Nuxt.',
    codeExample: {
      language: 'ts',
      filename: 'composables/useProductsQuery.ts',
      code: `export const useProductsQuery = (category: Ref<string>) => {
  return useFetch('/api/products', {
    key: () => \`products-\${category.value}\`,
    query: { category },
    watch: [category],
  })
}`,
    },
    commonMistake:
      'Ошибка — прятать слишком много поведения в composable без понятного имени и документации контракта.',
    interviewQuestions: createInterviewQuestions("Composable data layer", "Architecture"),
    remember: 'Composable data layer стабилизирует повторяемые запросы.',
  }),
  createCard({
    questionId: 1528,
    title: '$fetch на SSR-странице',
    category: 'Code Review',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      '$fetch на SSR-странице может быть корректным, но он не создаёт Nuxt async data cache. Если результат нужен для HTML и клиентской hydration, useFetch/useAsyncData обычно лучше. Важно понимать, где результат будет храниться после server render.',
    whenToUse:
      '$fetch уместен внутри useAsyncData handler, Server API, repository или action. Непосредственный await $fetch в setup страницы стоит проверять на повторный запрос и отсутствие error/pending модели. Для mutation после клика $fetch подходит лучше.',
    howItWorks:
      'Обычный $fetch возвращает Promise и результат остаётся локальной переменной. Nuxt payload не получает этот результат автоматически как async data entry. Клиент может выполнить setup снова и повторить запрос.',
    whyImportant:
      'Это типичный review-вопрос для Nuxt SSR. Разработчик должен понимать разницу между transport и state. Неверный выбор приводит к двойным запросам и слабому UX ошибок.',
    codeExample: {
      language: 'ts',
      filename: 'better-ssr-data.ts',
      code: `const { data: profile } = await useAsyncData('profile', () =>
  profileRepository.current(),
)`,
    },
    commonMistake:
      'Ошибка — считать $fetch полной заменой useAsyncData на page-level SSR данных.',
    interviewQuestions: createInterviewQuestions("$fetch на SSR-странице", "Code Review"),
    remember: '$fetch не создаёт payload-aware async data state сам по себе.',
  }),
  createCard({
    questionId: 1529,
    title: 'Hydration mismatch',
    category: 'SSR',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Hydration mismatch возникает, когда HTML сервера не совпадает с тем, что клиент ожидает при hydration. В data fetching это часто связано с недетерминированными значениями, временем, random, timezone или разным окружением. Данные первого HTML должны быть стабильными.',
    whenToUse:
      'Проверять риск mismatch нужно при Date.now, Math.random, browser-only API, locale/timezone formatting и user-specific данных. Если значение должно отличаться на клиенте, его лучше выводить после mounted или через client-only сценарий. SSR-важные данные должны быть детерминированными.',
    howItWorks:
      'Сервер создаёт HTML и payload, клиент загружает bundle и пытается связать DOM с виртуальным деревом. Если данные при клиентском render отличаются, Vue может предупредить о mismatch или заменить DOM. Это ухудшает UX и производительность.',
    whyImportant:
      'Mismatch — один из ключевых практических рисков SSR. На senior-интервью важно уметь назвать причины и способы исправления. Data fetching должен учитывать не только HTTP, но и стабильность render output.',
    codeExample: {
      language: 'ts',
      filename: 'stable-time.ts',
      code: `const { data } = await useAsyncData('server-time', async () => {
  const now = await timeRepository.getServerTime()
  return { iso: now.toISOString() }
})`,
    },
    commonMistake:
      'Ошибка — формировать SSR-разметку из Math.random или Date.now без стабилизации значения.',
    interviewQuestions: createInterviewQuestions("Hydration mismatch", "SSR"),
    remember: 'SSR data должны давать стабильный HTML для hydration.',
  }),
  createCard({
    questionId: 1530,
    title: 'lazy:true и critical data',
    category: 'Performance',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'lazy:true меняет приоритет данных: страница может отрисоваться до завершения запроса. Для второстепенных блоков это полезно. Для critical data первого экрана это может ухудшить SEO, LCP и восприятие готовности страницы.',
    whenToUse:
      'lazy:true стоит применять к данным, отсутствие которых не ломает основной смысл страницы. Hero, title, product details и SEO-контент обычно должны приходить в SSR HTML. Для secondary widgets lazy может быть отличным выбором.',
    howItWorks:
      'Nuxt не блокирует navigation ожиданием lazy-запроса. pending остаётся true, data обновляется позже. Если этот блок занимает first viewport, пользователь увидит skeleton или пустоту вместо контента.',
    whyImportant:
      'Оптимизация всегда зависит от приоритета данных. На interview важно сказать, что lazy не является универсальным ускорением. Иногда блокировка SSR ради важного контента даёт лучший итоговый UX.',
    codeExample: {
      language: 'ts',
      filename: 'critical-vs-lazy.ts',
      code: `const article = await useFetch('/api/article/main')
const related = await useFetch('/api/article/related', { lazy: true })`,
    },
    commonMistake:
      'Ошибка — включить lazy для основного контента страницы и получить пустой first paint.',
    interviewQuestions: createInterviewQuestions("lazy:true и critical data", "Performance"),
    remember: 'lazy:true подходит для secondary data, а не для всего подряд.',
  }),
  createCard({
    questionId: 1531,
    title: 'Concurrency и dedupe',
    category: 'Concurrency',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Concurrency в data fetching — ситуация, когда несколько запросов на похожие данные выполняются одновременно. dedupe помогает контролировать поведение одинаковых ключей. Без стратегии старый ответ может перезаписать новый.',
    whenToUse:
      'Это важно для поиска, фильтров, быстрых route transitions, autocomplete и refresh-кнопок. Если пользователь быстро меняет параметры, нужно понимать, какой ответ актуален. Иногда нужен AbortController, request id или dedupe cancel.',
    howItWorks:
      'Nuxt связывает async data по key и может применять dedupe. При cancel старый запрос отменяется, при defer новый может ждать существующий. Но если key не отражает параметры, стратегия будет неверной.',
    whyImportant:
      'Race conditions выглядят как случайные баги UI. Senior-разработчик должен думать о порядке завершения запросов, а не только о старте. Это напрямую влияет на доверие к интерфейсу.',
    codeExample: {
      language: 'ts',
      filename: 'search-dedupe.ts',
      code: `const { data } = await useFetch('/api/search', {
  query: { q },
  key: () => \`search-\${q.value}\`,
  dedupe: 'cancel',
})`,
    },
    commonMistake:
      'Ошибка — не учитывать, что медленный старый запрос может прийти после быстрого нового.',
    interviewQuestions: createInterviewQuestions("Concurrency и dedupe", "Concurrency"),
    remember: 'Concurrency требует стабильного key и стратегии актуальности ответа.',
  }),
  createCard({
    questionId: 1532,
    title: 'Invalidation cache',
    category: 'Cache Invalidation',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Invalidation cache — стратегия признания данных устаревшими после mutation или внешнего события. В Nuxt это может быть refreshNuxtData, clearNuxtData или локальное обновление cached data. Без invalidation UI показывает stale state.',
    whenToUse:
      'Инвалидация нужна после создания, удаления, редактирования, logout, смены tenant и изменения permissions. Для маленькой mutation можно локально обновить список. Для сложных связей лучше refresh связанных ключей или пересмотреть API contract.',
    howItWorks:
      'Mutation меняет серверное состояние. Клиент должен синхронизировать read models: обновить ключи, очистить кэш или применить optimistic result. Выбор зависит от цены запроса и риска рассинхронизации.',
    whyImportant:
      'Кэш без invalidation — источник production-багов. Пользователь видит старые данные и не понимает, произошло ли действие. На senior-интервью это одна из центральных тем client/server consistency.',
    codeExample: {
      language: 'ts',
      filename: 'product-mutation.ts',
      code: `await $fetch('/api/products', {
  method: 'POST',
  body: input,
})

await refreshNuxtData('products')`,
    },
    commonMistake:
      'Ошибка — выполнить POST и оставить список на экране без обновления или optimistic вставки.',
    interviewQuestions: createInterviewQuestions("Invalidation cache", "Cache Invalidation"),
    remember: 'После mutation нужно явно решить, какие данные стали устаревшими.',
  }),
  createCard({
    questionId: 1533,
    title: 'Лишний watch',
    category: 'Code Review',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Лишний watch вокруг refresh — частая причина повторных запросов. Nuxt composables уже умеют следить за reactive params. Если добавить ручной watch поверх встроенного механизма, можно получить дублирование.',
    whenToUse:
      'Ручной watch нужен только при нестандартной логике запуска: debounce, сложные условия, несколько источников или ручная orchestration. Если параметр уже передан в query/watch useFetch, дополнительный watcher нужно обосновать. Иначе data flow становится шумным.',
    howItWorks:
      'Изменение параметра запускает встроенный refresh. Затем ручной watch вызывает refresh ещё раз. В Network panel это выглядит как два одинаковых запроса на одно изменение UI.',
    whyImportant:
      'Лишние запросы ухудшают performance и усложняют debugging. На code review важно искать дублированные источники правды. Один параметр должен иметь один понятный механизм обновления запроса.',
    codeExample: {
      language: 'ts',
      filename: 'single-source.ts',
      code: `const { data } = await useFetch('/api/search', {
  query: { q },
  watch: [q],
})`,
    },
    commonMistake:
      'Ошибка — одновременно передать q в query и вручную watch-ить q для refresh без debounce или условия.',
    interviewQuestions: createInterviewQuestions("Лишний watch", "Code Review"),
    remember: 'Не дублируй встроенное reactive обновление ручным watch без причины.',
  }),
  createCard({
    questionId: 1534,
    title: 'Server/client окружения',
    category: 'SSR',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Server и client окружения выполняют запросы в разных контекстах. На сервере доступны runtimeConfig, server headers и Nitro context. В браузере действуют cookies, CORS, текущий origin и ограничения безопасности.',
    whenToUse:
      'Эту разницу нужно учитывать при auth, cookies, proxy, baseURL, private APIs и SSR. Если запрос должен использовать секреты, он должен остаться на серверной стороне. Если данные зависят от браузерного API, нужен client-only сценарий.',
    howItWorks:
      'Один и тот же относительный URL может быть обработан Nitro на сервере или браузером на клиенте. Headers и credentials могут отличаться. Поэтому repository или Server API слой должен явно задавать правила выполнения.',
    whyImportant:
      'Многие Nuxt-баги появляются из-за предположения, что серверный и клиентский fetch одинаковы. На senior-интервью важно говорить о boundary, cookies, CORS и runtimeConfig. Это влияет на безопасность и стабильность данных.',
    codeExample: {
      language: 'ts',
      filename: 'server-auth-fetch.ts',
      code: `export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'session')
  return $fetch('/internal/profile', {
    headers: { Authorization: \`Bearer \${token}\` },
  })
})`,
    },
    commonMistake:
      'Ошибка — ожидать, что client-side $fetch получит private runtimeConfig или server-only headers.',
    interviewQuestions: createInterviewQuestions("Server/client окружения", "SSR"),
    remember: 'Server fetch и client fetch имеют разные контексты и ограничения.',
  }),
  createCard({
    questionId: 1535,
    title: 'Senior strategy',
    category: 'Interview',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Зрелая стратегия Nuxt data fetching — выбор инструмента под требования данных. Важны SSR-ценность, безопасность, UX, кэширование, error handling, invalidation и performance. Один API не подходит для всех ситуаций.',
    whenToUse:
      'useFetch подходит для простого HTTP, useAsyncData — для произвольной async-логики, $fetch — для низкоуровневых запросов и mutations, Server API — для server boundary. Lazy применяют для второстепенных данных, а critical data обычно загружают до HTML. Кэш требует invalidation.',
    howItWorks:
      'Сначала определяется критичность данных и место выполнения. Затем выбирается composable, key, error boundary, refresh strategy и security boundary. После mutation проектируется invalidation или optimistic update.',
    whyImportant:
      'Data fetching — центральная часть Nuxt-архитектуры. Ошибки здесь влияют на SEO, TTFB, LCP, безопасность и backend load. На senior-интервью ожидается не знание одного composable, а способность спроектировать поток данных.',
    codeExample: {
      language: 'bash',
      filename: 'decision-checklist.txt',
      code: `Critical for HTML? -> SSR useFetch/useAsyncData
Needs secrets? -> Server API
User action mutation? -> $fetch + invalidation
Secondary widget? -> lazy data + fallback`,
    },
    commonMistake:
      'Ошибка — всегда выбирать один механизм, не учитывая требования конкретных данных.',
    interviewQuestions: createInterviewQuestions("Senior strategy", "Interview"),
    remember: 'Выбор data fetching API начинается с требований данных и UX.',
  }),
]
