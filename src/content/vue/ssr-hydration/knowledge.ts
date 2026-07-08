import type { ContentKnowledgeCard } from '../../../types/content'
import type { CodeExample, InterviewLevel, KnowledgeRarity } from '../../../types/knowledge'

interface SsrHydrationCardInput {
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
  remember: string
}

const createInterviewQuestions = (title: string, category: string): string[] => [
  `Какие задачи решает ${title} в теме ${category} (SSR / hydration)?`,
  `Какие ограничения ${title} важно учитывать в контексте SSR / hydration?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

const createCard = (input: SsrHydrationCardInput): ContentKnowledgeCard => ({
  id: `ssr-hydration-${input.questionId}`,
  moduleId: 'ssr-hydration',
  questionId: input.questionId,
  title: input.title,
  category: input.category,
  rarity: input.rarity,
  interviewLevel: input.interviewLevel,
  readingTime: input.readingTime,
  whatIsIt: input.whatIsIt,
  whenToUse: input.whenToUse,
  howItWorks: input.howItWorks,
  whyImportant: input.whyImportant,
  codeExample: input.codeExample,
  commonMistake: input.commonMistake,
  interviewQuestions: createInterviewQuestions(input.title, input.category),
  remember: input.remember,
})

const cards = [
  {
    questionId: 1101,
    title: 'SSR в Nuxt',
    category: 'SSR Basics',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'SSR — server-side rendering, при котором начальный HTML страницы формируется на сервере. Браузер получает уже содержательную разметку, а не пустой контейнер. После загрузки JavaScript Vue делает страницу интерактивной через hydration.',
    whenToUse:
      'SSR полезен для публичных страниц, SEO-sensitive контента, страниц с важным first content и сценариев, где начальный HTML влияет на восприятие скорости. Он не обязателен для каждой приватной панели. Выбор должен опираться на метрики и требования.',
    howItWorks:
      'Nuxt выполняет Vue-компоненты на сервере, получает данные, формирует HTML и отправляет его клиенту. Затем клиент загружает payload и JavaScript bundle. Hydration связывает клиентское Vue-приложение с уже существующей DOM.',
    whyImportant:
      'SSR влияет на SEO, FCP, LCP, TTFB, стоимость инфраструктуры и сложность кода. На интервью важно объяснить не только определение, но и цену серверного рендера. Это один из базовых trade-off Nuxt.',
    codeExample: {
      language: 'vue',
      filename: 'pages/articles/[slug].vue',
      code: `<script setup lang="ts">
const route = useRoute()
const { data: article } = await useAsyncData(
  () => \`article:\${route.params.slug}\`,
  () => $fetch(\`/api/articles/\${route.params.slug}\`)
)
</script>

<template>
  <article>
    <h1>{{ article?.title }}</h1>
    <p>{{ article?.lead }}</p>
  </article>
</template>`,
    },
    commonMistake:
      'Ошибка — считать SSR бесплатным ускорителем. Сервер должен выполнить работу до ответа, а клиент всё равно платит стоимость hydration.',
    remember: 'SSR отдаёт готовый HTML, но добавляет серверную работу и hydration cost.',
  },
  {
    questionId: 1102,
    title: 'CSR vs SSR',
    category: 'Rendering Strategy',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'CSR рендерит начальный интерфейс в браузере после загрузки JavaScript. SSR формирует начальный HTML на сервере и затем оживляет его на клиенте. Разница находится в месте и времени появления первого HTML.',
    whenToUse:
      'CSR часто подходит для приватных dashboards, admin tools и интерфейсов, где SEO не важно. SSR полезен для публичных страниц и контента, который должен быть виден до полного клиентского рендера. В одном продукте могут сочетаться разные стратегии.',
    howItWorks:
      'В CSR браузер получает минимальный HTML и сам строит UI. В SSR сервер возвращает HTML, payload и ссылки на bundle. Клиент затем выполняет hydration, чтобы обработчики событий и реактивность заработали.',
    whyImportant:
      'На интервью этот вопрос проверяет понимание architecture trade-offs. Нельзя утверждать, что SSR всегда быстрее или CSR всегда проще. Нужно связывать выбор с SEO, данными, latency и стоимостью поддержки.',
    codeExample: {
      language: 'vue',
      filename: 'pages/admin.vue',
      code: `<script setup lang="ts">
const users = ref<User[]>([])

onMounted(async () => {
  users.value = await $fetch('/api/admin/users')
})
</script>`,
    },
    commonMistake:
      'Ошибка — включать SSR для приватной страницы без анализа пользы. Иногда CSR даёт меньше сложности и достаточно хороший UX.',
    remember: 'CSR и SSR выбирают по сценарию, а не по моде.',
  },
  {
    questionId: 1103,
    title: 'SSG',
    category: 'Rendering Strategy',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'SSG — static site generation, при котором HTML создаётся заранее на этапе build или генерации. Пользователь получает статический файл без серверного рендера на каждый запрос. Это хорошо подходит для стабильного публичного контента.',
    whenToUse:
      'SSG выбирают для документации, блогов, маркетинговых страниц, каталогов с редкими изменениями и контента, который можно заранее подготовить. Если данные персональные или часто меняются на каждый запрос, SSG может быть неудобен. Иногда лучше использовать ISR или SSR.',
    howItWorks:
      'Nuxt генерирует страницы заранее и размещает их как статические артефакты. CDN может отдавать их очень быстро. Обновление контента требует новой генерации или стратегии revalidation.',
    whyImportant:
      'SSG часто даёт отличные performance и надёжность, но требует правильной модели данных. На интервью важно объяснить, почему статическая генерация не равна отсутствию Vue или hydration.',
    codeExample: {
      language: 'bash',
      filename: 'terminal',
      code: `npm run generate
# Generated pages can be served from static hosting or CDN.`,
    },
    commonMistake:
      'Ошибка — выбирать SSG для данных, которые должны быть персональными и актуальными на каждый запрос. Это создаёт проблемы свежести и кеширования.',
    remember: 'SSG заранее создаёт HTML и выигрывает на стабильном публичном контенте.',
  },
  {
    questionId: 1104,
    title: 'Hydration',
    category: 'Hydration',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Hydration — процесс подключения клиентского Vue-приложения к HTML, который уже был сгенерирован сервером. Vue не должен пересоздавать весь DOM с нуля. Он сопоставляет виртуальное дерево с разметкой и подключает события.',
    whenToUse:
      'Hydration нужна в SSR/SSG-страницах, которые должны стать интерактивными. Если страница полностью статична, часть JavaScript может быть не нужна. Если компонент browser-only, иногда используют ClientOnly или lazy hydration.',
    howItWorks:
      'Сервер отправляет HTML и payload. Клиент загружает bundle, создаёт виртуальное дерево и проверяет соответствие DOM. Если структура совпадает, Vue подключает реактивность и event listeners.',
    whyImportant:
      'Hydration объясняет, почему SSR-страница сначала видима, но не всегда сразу интерактивна. Она также объясняет источник hydration mismatch и часть performance cost. Это центральная тема для Nuxt SSR.',
    codeExample: {
      language: 'vue',
      filename: 'components/CounterButton.vue',
      code: `<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <button @click="count += 1">
    Clicked {{ count }} times
  </button>
</template>`,
    },
    commonMistake:
      'Ошибка — думать, что SSR полностью заменяет клиентский JavaScript. Интерактивная страница всё равно нуждается в hydration.',
    remember: 'Hydration делает серверный HTML интерактивным.',
  },
  {
    questionId: 1105,
    title: 'window is not defined',
    category: 'Browser API',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'window is not defined возникает, когда код обращается к browser API в серверной среде. При SSR setup, plugins или импортируемые модули могут выполняться на сервере. В Node/edge runtime объекта window нет.',
    whenToUse:
      'Browser API нужно читать только после client boundary: onMounted, import.meta.client, client-only plugin или ClientOnly. Если значение нужно для SSR, лучше получить его через headers, cookies или безопасный fallback. Это особенно важно для localStorage, document и navigator.',
    howItWorks:
      'Сервер выполняет JavaScript без DOM. Если модуль на верхнем уровне читает window.innerWidth, выполнение падает до отправки HTML. Проверка должна защищать именно место доступа или импорт.',
    whyImportant:
      'Это одна из самых частых production-ошибок при переходе с SPA на Nuxt SSR. На интервью важно не просто назвать onMounted, а объяснить различие сред выполнения.',
    codeExample: {
      language: 'vue',
      filename: 'components/ViewportWidth.vue',
      code: `<script setup lang="ts">
const width = ref<number | null>(null)

onMounted(() => {
  width.value = window.innerWidth
})
</script>`,
    },
    commonMistake:
      'Ошибка — добавить if (import.meta.client) вокруг использования, но оставить импорт browser-only библиотеки на верхнем уровне.',
    remember: 'Browser API нужно изолировать от серверного выполнения.',
  },
  {
    questionId: 1106,
    title: 'ClientOnly',
    category: 'Hydration Tools',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'ClientOnly — компонент Nuxt для отложенного рендера содержимого до клиентской среды. Он полезен, когда компонент нельзя корректно отрендерить на сервере. Обычно нужен fallback, чтобы страница не выглядела сломанной.',
    whenToUse:
      'ClientOnly применяют для карт, графиков, редакторов, browser-only SDK и виджетов, которым нужен DOM. Его не стоит использовать как универсальный способ скрыть SSR-проблемы. Если компонент можно сделать SSR-safe, лучше сделать его SSR-safe.',
    howItWorks:
      'На сервере Nuxt не рендерит содержимое ClientOnly или показывает fallback. После загрузки клиента компонент монтируется в браузере. Это предотвращает server crash, но может задержать видимость интерактивного блока.',
    whyImportant:
      'ClientOnly — компромисс между SSR и browser-only реальностью. На интервью важно объяснить, что он решает проблему среды, но не улучшает SEO для содержимого внутри.',
    codeExample: {
      language: 'vue',
      filename: 'components/MapPanel.vue',
      code: `<template>
  <ClientOnly>
    <InteractiveMap />

    <template #fallback>
      <div class="map-placeholder">Map loading...</div>
    </template>
  </ClientOnly>
</template>`,
    },
    commonMistake:
      'Ошибка — оборачивать в ClientOnly весь page content. Это фактически возвращает CSR и убирает пользу SSR для этого контента.',
    remember: 'ClientOnly подходит для browser-only островов, а не для всего приложения.',
  },
  {
    questionId: 1107,
    title: 'import.meta.server',
    category: 'Server Client Execution',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'import.meta.server — флаг Nuxt/Vite, который равен true в серверной среде. Он помогает явно разделять код, который должен выполняться только на сервере. Парный флаг import.meta.client используется для браузера.',
    whenToUse:
      'Флаг полезен для logging, server-only веток, безопасного доступа к server context и защиты browser-only кода. Его стоит использовать точечно. Если логика становится сложной, лучше вынести её в отдельный server/client модуль.',
    howItWorks:
      'Во время сборки и выполнения Nuxt знает текущую среду. Условия с import.meta.server/client позволяют избежать выполнения неподходящего кода. Это современный подход в Nuxt 3.',
    whyImportant:
      'На интервью это проверяет понимание universal execution. Код в Nuxt не всегда выполняется только в браузере, поэтому среду нужно учитывать явно.',
    codeExample: {
      language: 'ts',
      filename: 'utils/environment.ts',
      code: `export const getRuntimeLabel = () => {
  if (import.meta.server) {
    return 'server'
  }

  return 'client'
}`,
    },
    commonMistake:
      'Ошибка — использовать browser API до проверки import.meta.client. Проверка должна стоять перед доступом к API.',
    remember: 'import.meta.server помогает отделять server-only ветки в Nuxt 3.',
  },
  {
    questionId: 1108,
    title: 'SSR и SEO',
    category: 'SEO',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'SSR может помочь SEO, потому что поисковый бот получает содержательный HTML в первом ответе. Контент, заголовки и метаданные доступны без ожидания полного клиентского рендера. Это особенно важно для публичных страниц.',
    whenToUse:
      'SSR полезен для статей, лендингов, каталогов, документации и страниц, где organic traffic важен. Для приватных dashboards SEO обычно не является аргументом. SSR не заменяет качественный контент и правильные meta tags.',
    howItWorks:
      'Nuxt формирует HTML на сервере, включая данные страницы и head/meta при правильной настройке. Бот или браузер видит первичный контент сразу. Затем клиентская hydration добавляет интерактивность.',
    whyImportant:
      'На интервью важно не преувеличивать SEO-эффект SSR. Он делает контент доступнее, но ranking зависит от множества факторов. SSR — техническая основа, а не магическая SEO-кнопка.',
    codeExample: {
      language: 'vue',
      filename: 'pages/blog/[slug].vue',
      code: `<script setup lang="ts">
const { data: post } = await useAsyncData('post', () => $fetch('/api/post'))

useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.description,
})
</script>`,
    },
    commonMistake:
      'Ошибка — полагаться только на SSR и забывать про title, description, canonical, semantic HTML и качество контента.',
    remember: 'SSR помогает отдать контент ботам, но SEO требует полной технической и контентной работы.',
  },
  {
    questionId: 1109,
    title: 'Когда выбрать SPA',
    category: 'Rendering Strategy',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'SPA/CSR strategy означает, что основной UI строится в браузере. Это не устаревший подход, а нормальный выбор для некоторых сценариев. Особенно часто он подходит для приватных интерактивных tools.',
    whenToUse:
      'SPA стоит рассмотреть для admin panels, внутренних кабинетов, сложных authenticated workflows и интерфейсов без SEO-требований. Если данные персональные и не кешируются, SSR может только увеличить TTFB. Простота CSR иногда важнее SSR-преимуществ.',
    howItWorks:
      'Браузер получает базовый HTML, загружает JS bundle и строит интерфейс на клиенте. Данные запрашиваются после запуска приложения. Это снижает нагрузку на SSR, но первый контент может появиться позже.',
    whyImportant:
      'На Middle/Senior интервью важно уметь выбрать не только SSR. Зрелый инженер объясняет, что rendering strategy зависит от пользователей, SEO, данных, latency и команды.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  ssr: false,
})`,
    },
    commonMistake:
      'Ошибка — считать SPA признаком плохой архитектуры. Для внутренних инструментов это может быть самый рациональный вариант.',
    remember: 'SPA подходит там, где SEO и server-rendered first content не дают ощутимой пользы.',
  },
  {
    questionId: 1110,
    title: 'localStorage и SSR',
    category: 'Browser API',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'localStorage — browser-only storage API. Он недоступен во время SSR, потому что сервер не имеет браузерного окружения и пользовательского storage. Прямой доступ в setup может привести к runtime error.',
    whenToUse:
      'localStorage можно читать после монтирования клиента, для UI preferences, черновиков и некритичных локальных данных. Для SSR-важных данных лучше использовать cookies, server state или data fetching. Нужно иметь fallback для первого HTML.',
    howItWorks:
      'onMounted выполняется только в браузере, поэтому там безопаснее читать localStorage. До mounted компонент должен иметь начальное состояние, совпадающее с серверной разметкой. Иначе возможен flicker или mismatch.',
    whyImportant:
      'Это частая ошибка при миграции SPA-кода в Nuxt. На интервью важно объяснить, почему browser storage нельзя читать на сервере и как построить безопасный fallback.',
    codeExample: {
      language: 'vue',
      filename: 'components/ThemeToggle.vue',
      code: `<script setup lang="ts">
const theme = ref('light')

onMounted(() => {
  theme.value = localStorage.getItem('theme') ?? 'light'
})
</script>`,
    },
    commonMistake:
      'Ошибка — инициализировать ref значением localStorage прямо в setup. На сервере такого API нет.',
    remember: 'localStorage читают только на клиенте и с SSR-safe начальным состоянием.',
  },
  {
    questionId: 1111,
    title: 'Universal Rendering',
    category: 'SSR Basics',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Universal Rendering означает, что один Vue/Nuxt код участвует и в серверной, и в клиентской фазе. Такой код должен быть безопасен для обеих сред. Это требует дисциплины при работе с browser APIs, датами и случайными значениями.',
    whenToUse:
      'Universal Rendering используется по умолчанию в SSR Nuxt-приложениях. Он подходит для страниц, где нужен серверный HTML и клиентская интерактивность. Если компонент нельзя сделать универсальным, его изолируют через client boundary.',
    howItWorks:
      'Сначала код компонента выполняется на сервере для HTML. Затем похожая логика выполняется на клиенте для hydration. Если результаты расходятся, Vue может предупредить о mismatch.',
    whyImportant:
      'Понимание universal execution объясняет большинство SSR-багов. На интервью это фундамент для разговора о hydration, payload и browser API.',
    codeExample: {
      language: 'vue',
      filename: 'pages/status.vue',
      code: `<script setup lang="ts">
const runtime = computed(() => (import.meta.server ? 'server' : 'client'))
</script>

<template>
  <p>Rendered in a universal context</p>
</template>`,
    },
    commonMistake:
      'Ошибка — писать Nuxt-компонент как обычный SPA-компонент и забывать, что setup может выполниться на сервере.',
    remember: 'Universal code должен работать предсказуемо и на сервере, и на клиенте.',
  },
  {
    questionId: 1112,
    title: 'Math.random mismatch',
    category: 'Hydration Mismatch',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Hydration mismatch из-за Math.random возникает, когда сервер и клиент генерируют разные значения для одной и той же разметки. Vue ожидает совпадение DOM, но видит другой текст, id или структуру. Это ломает предсказуемость hydration.',
    whenToUse:
      'Случайные значения нельзя генерировать прямо в template или SSR-зависимом render path. Если id нужен для accessibility, он должен быть стабильным. Если случайность нужна только для декоративного эффекта, её лучше запускать после mounted.',
    howItWorks:
      'Сервер формирует HTML с одним random value. Клиент при hydration вычисляет другое значение. Разметка не совпадает, и Vue вынужден исправлять DOM или предупреждать.',
    whyImportant:
      'На практике mismatch часто появляется именно из-за случайных значений, дат и timezone. На интервью важно назвать причину и предложить SSR-safe решение.',
    codeExample: {
      language: 'vue',
      filename: 'components/StableId.vue',
      code: `<script setup lang="ts">
const id = useId()
</script>

<template>
  <label :for="id">Email</label>
  <input :id="id" />
</template>`,
    },
    commonMistake:
      'Ошибка — использовать Math.random для key, id или текста, который рендерится и на сервере, и на клиенте.',
    remember: 'SSR-разметка должна быть детерминированной.',
  },
  {
    questionId: 1113,
    title: 'Date.now mismatch',
    category: 'Hydration Mismatch',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Date.now mismatch появляется, когда текущее время вычисляется отдельно на сервере и клиенте. Даже разница в миллисекунды может изменить текст. Для hydration это уже другое содержимое.',
    whenToUse:
      'Текущее время лучше фиксировать в данных, переданных через payload, или показывать клиентский live-time только после mounted. Для статичных дат нужно использовать одинаковое исходное значение. Для timezone-зависимого отображения нужен осторожный fallback.',
    howItWorks:
      'Сервер рендерит timestamp в момент запроса. Клиент запускает hydration позже и получает новое значение. Vue сравнивает DOM и видит различие.',
    whyImportant:
      'Время кажется безобидным, но часто ломает SSR. На интервью важно объяснить разницу между исходной датой данных и вычислением текущего времени в render path.',
    codeExample: {
      language: 'vue',
      filename: 'components/ClientClock.vue',
      code: `<script setup lang="ts">
const now = ref<string | null>(null)

onMounted(() => {
  now.value = new Date().toLocaleTimeString()
})
</script>

<template>
  <time>{{ now ?? 'Loading time...' }}</time>
</template>`,
    },
    commonMistake:
      'Ошибка — выводить Date.now() прямо в template SSR-компонента. Значение почти гарантированно изменится к hydration.',
    remember: 'Текущее время в SSR-разметке должно быть фиксированным или client-only.',
  },
  {
    questionId: 1114,
    title: 'TTFB и SSR',
    category: 'Performance',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'TTFB — time to first byte, время до получения первого байта ответа. SSR может увеличить TTFB, потому что сервер должен выполнить рендеринг и загрузку данных до отправки HTML. Это цена серверного рендера.',
    whenToUse:
      'TTFB особенно важен для страниц с медленными API, персональными запросами и слабым серверным кешированием. Если SSR не улучшает пользовательский результат, высокий TTFB может сделать страницу хуже. Нужно измерять полную цепочку.',
    howItWorks:
      'Запрос приходит на сервер, Nuxt выполняет SSR, ждёт необходимые данные и только затем отправляет HTML. Чем дороже работа до ответа, тем выше TTFB. Кеш и SSG/ISR могут снизить эту стоимость.',
    whyImportant:
      'На интервью важно не продавать SSR как абсолютное ускорение. SSR может улучшить FCP/LCP, но ухудшить TTFB. Баланс метрик важнее одного числа.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/slow.get.ts',
      code: `export default defineEventHandler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 800))
  return { status: 'ready' }
})`,
    },
    commonMistake:
      'Ошибка — делать медленные персональные SSR-запросы без кеша, fallback или анализа влияния на TTFB.',
    remember: 'SSR может улучшать первый контент, но часто повышает TTFB.',
  },
  {
    questionId: 1115,
    title: 'FCP и LCP',
    category: 'Performance',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'FCP показывает момент первого отрисованного контента, LCP — момент крупнейшего видимого контентного элемента. SSR может помочь этим метрикам, потому что HTML приходит уже с содержимым. Но размер JS, изображения и hydration тоже влияют на результат.',
    whenToUse:
      'SSR стоит рассматривать для страниц, где ранний видимый контент критичен. Это часто публичные страницы, статьи, карточки товаров и landing pages. Если главный контент всё равно появляется только после клиентского запроса, польза SSR снижается.',
    howItWorks:
      'Сервер отдаёт HTML, браузер может быстрее нарисовать текст и структуру. Затем загружаются CSS, изображения и JavaScript. Если hydration тяжёлая, интерактивность может задержаться даже при хорошем FCP.',
    whyImportant:
      'На интервью важно разделять видимость и интерактивность. SSR может ускорить отрисовку, но не отменяет стоимость JavaScript. Оптимизация должна смотреть на весь пользовательский путь.',
    codeExample: {
      language: 'vue',
      filename: 'pages/product/[id].vue',
      code: `<template>
  <main>
    <h1>{{ product?.title }}</h1>
    <img :src="product?.image" alt="" fetchpriority="high" />
  </main>
</template>`,
    },
    commonMistake:
      'Ошибка — улучшить SSR HTML, но оставить огромный client bundle и неоптимизированное LCP-изображение.',
    remember: 'SSR помогает FCP/LCP только как часть общей performance-стратегии.',
  },
  {
    questionId: 1116,
    title: 'useAsyncData',
    category: 'Nuxt Data Fetching',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'useAsyncData — Nuxt composable для SSR-aware загрузки данных. Он может выполнить запрос на сервере, сериализовать результат в payload и переиспользовать его на клиенте. Это снижает риск двойной загрузки и пустого первого HTML.',
    whenToUse:
      'useAsyncData используют, когда данные нужны странице до рендера или когда логика загрузки не сводится к простому URL. Он подходит для server-rendered pages, SEO-sensitive контента и агрегированных данных. Для простого HTTP-запроса часто удобен useFetch.',
    howItWorks:
      'Composable принимает key и async handler. На SSR Nuxt выполняет handler, кладёт результат в payload и затем клиент восстанавливает состояние по key. Уникальный key важен для корректной привязки данных.',
    whyImportant:
      'На интервью useAsyncData связывает SSR, payload, hydration и data consistency. Неправильные ключи или возврат секретов могут привести к серьёзным багам.',
    codeExample: {
      language: 'vue',
      filename: 'pages/profile.vue',
      code: `<script setup lang="ts">
const { data, pending, error } = await useAsyncData(
  'profile-summary',
  () => $fetch('/api/profile-summary')
)
</script>`,
    },
    commonMistake:
      'Ошибка — использовать одинаковый key для разных запросов. Payload может восстановить не те данные.',
    remember: 'useAsyncData связывает SSR-загрузку данных с Nuxt payload.',
  },
  {
    questionId: 1117,
    title: 'useFetch',
    category: 'Nuxt Data Fetching',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'useFetch — Nuxt composable для SSR-aware HTTP-запросов. Он построен поверх fetch-подхода Nuxt и интегрирован с SSR, payload и hydration. Это удобный вариант для типичных API-запросов.',
    whenToUse:
      'useFetch подходит для получения данных по URL, особенно если данные должны попасть в initial HTML. Он может заменить клиентский onMounted-fetch там, где важны SEO или FCP. Для сложной async-логики можно выбрать useAsyncData.',
    howItWorks:
      'При SSR useFetch может выполнить запрос на сервере и передать результат клиенту. На клиенте Nuxt использует payload, чтобы не повторять запрос без необходимости. Состояния pending/error/data помогают строить UI.',
    whyImportant:
      'На интервью важно объяснить, почему onMounted не равен SSR data fetching. useFetch позволяет загрузить данные до HTML и уменьшить пустые состояния при первом открытии.',
    codeExample: {
      language: 'vue',
      filename: 'pages/products.vue',
      code: `<script setup lang="ts">
const { data: products } = await useFetch('/api/products', {
  query: { limit: 12 },
})
</script>`,
    },
    commonMistake:
      'Ошибка — загружать публичный SEO-контент только в onMounted. Первый HTML остаётся бедным или пустым.',
    remember: 'useFetch подходит для SSR-aware HTTP-запросов в Nuxt.',
  },
  {
    questionId: 1118,
    title: 'onMounted и SEO-контент',
    category: 'Code Review',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'onMounted выполняется только на клиенте после hydration. Если важный контент загружается только там, серверный HTML не содержит этих данных. Для публичных страниц это может ухудшить SEO и first content.',
    whenToUse:
      'onMounted подходит для browser-only действий: DOM, analytics, localStorage, resize listeners. Для данных, которые должны быть в HTML, лучше использовать useFetch или useAsyncData. Разделение задач делает SSR предсказуемым.',
    howItWorks:
      'Сервер рендерит страницу без onMounted-результата. Браузер загружает bundle, выполняет hydration и только затем вызывает onMounted. Данные появляются позже, иногда с заметным layout shift.',
    whyImportant:
      'Это частый code review сигнал. На Middle/Senior уровне важно видеть, когда клиентская загрузка ломает цель SSR.',
    codeExample: {
      language: 'vue',
      filename: 'pages/catalog.vue',
      code: `<script setup lang="ts">
const { data: products } = await useFetch('/api/products')
</script>

<template>
  <ProductGrid :products="products ?? []" />
</template>`,
    },
    commonMistake:
      'Ошибка — переносить все запросы в onMounted по привычке из SPA. В Nuxt это часто лишает страницу SSR-преимуществ.',
    remember: 'onMounted не участвует в серверном HTML.',
  },
  {
    questionId: 1119,
    title: 'Nuxt payload',
    category: 'Payload',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Nuxt payload — сериализованное состояние, которое переносит SSR-данные на клиент. Он помогает клиенту восстановить результат useAsyncData/useFetch без повторной загрузки. Payload является частью hydration bridge.',
    whenToUse:
      'Payload используется автоматически в SSR data fetching. Важно помнить о нём, когда данные большие, персональные или чувствительные. Всё, что попало в payload, нужно считать доступным клиенту.',
    howItWorks:
      'Сервер выполняет запросы и встраивает сериализованные результаты. Клиент читает payload и восстанавливает состояние по ключам. Это делает HTML и клиентское состояние согласованными.',
    whyImportant:
      'Payload объясняет, почему SSR-данные не должны содержать секреты. На интервью это связывает performance, security и hydration.',
    codeExample: {
      language: 'vue',
      filename: 'pages/account.vue',
      code: `<script setup lang="ts">
const { data: account } = await useAsyncData('account-public', async () => {
  const account = await $fetch('/api/account')
  return { name: account.name, plan: account.plan }
})
</script>`,
    },
    commonMistake:
      'Ошибка — возвращать из SSR data fetching internalToken, permissions dump или большие сырые backend-ответы.',
    remember: 'Payload доступен клиенту и должен содержать только безопасные нужные данные.',
  },
  {
    questionId: 1120,
    title: 'Timezone mismatch',
    category: 'Hydration Mismatch',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Timezone mismatch возникает, когда сервер и клиент форматируют дату в разных часовых поясах или locale. Строка даты становится другой, хотя исходный timestamp тот же. Для hydration это несовпадение текста.',
    whenToUse:
      'Для SSR лучше рендерить стабильный формат или передавать timezone явно. Если нужна локальная timezone пользователя, её можно применить после mounted или через cookie/header при наличии. Важно не полагаться на окружение по умолчанию.',
    howItWorks:
      'Node runtime может использовать одну timezone, браузер пользователя — другую. toLocaleString без явных параметров даёт разные строки. Vue видит отличие при hydration.',
    whyImportant:
      'Эта ошибка часто проявляется только у части пользователей и в production. На интервью она показывает практическое понимание детерминированного SSR.',
    codeExample: {
      language: 'ts',
      filename: 'utils/formatDate.ts',
      code: `export const formatDateUtc = (date: string) =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: 'UTC',
    dateStyle: 'medium',
  }).format(new Date(date))`,
    },
    commonMistake:
      'Ошибка — использовать toLocaleString без timeZone и locale для текста, который должен совпасть при SSR и hydration.',
    remember: 'Дата в SSR должна форматироваться детерминированно или обновляться на клиенте.',
  },
  {
    questionId: 1121,
    title: 'navigator и SSR',
    category: 'Browser API',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'navigator — browser API с данными о языке, платформе и возможностях браузера. На сервере объекта navigator нет. Использование navigator в SSR path приводит к ошибке или mismatch.',
    whenToUse:
      'navigator можно читать на клиенте после mounted. Если язык нужен на сервере, лучше использовать accept-language header, cookie или route-level locale. Для feature detection нужно иметь SSR fallback.',
    howItWorks:
      'Серверная среда не знает браузерный navigator. Клиентская среда знает, но значение может отличаться от серверного fallback. Поэтому начальная разметка должна быть устойчивой.',
    whyImportant:
      'Многие SPA-компоненты используют navigator без проверки. В Nuxt это становится SSR-проблемой. На интервью важно предложить архитектурно правильный источник данных.',
    codeExample: {
      language: 'vue',
      filename: 'components/ClientLanguage.vue',
      code: `<script setup lang="ts">
const language = ref('en')

onMounted(() => {
  language.value = navigator.language
})
</script>`,
    },
    commonMistake:
      'Ошибка — определять критичный язык страницы только через navigator на клиенте. Серверный HTML будет создан с другим fallback.',
    remember: 'navigator читают на клиенте; для SSR locale лучше использовать headers или cookies.',
  },
  {
    questionId: 1122,
    title: 'ISR',
    category: 'Rendering Strategy',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'ISR — incremental static regeneration, стратегия обновления статически подготовленного контента по правилам revalidation. Она пытается совместить скорость статической отдачи и возможность обновлять страницы без полной ручной пересборки. В Nuxt похожие задачи часто решают через routeRules и caching-подходы.',
    whenToUse:
      'ISR-like подход полезен для публичных страниц, которые меняются периодически, но не требуют свежести на каждый запрос. Это статьи, каталоги, landing pages и справочники. Для персональных данных ISR обычно не подходит.',
    howItWorks:
      'Страница отдаётся из статического или кешированного слоя, а обновление происходит по TTL, событию или revalidation-механизму платформы. Пользователь получает быстрый ответ, но данные могут быть слегка устаревшими. Это осознанный trade-off.',
    whyImportant:
      'На Senior-интервью важно выбирать между SSR, SSG, ISR и CSR не по названию, а по freshness, cost и UX. ISR особенно полезен, когда полный SSR слишком дорогой.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  routeRules: {
    '/blog/**': { isr: 3600 },
  },
})`,
    },
    commonMistake:
      'Ошибка — применять ISR-like кеширование к персональным страницам. Пользователи могут увидеть чужие или устаревшие данные.',
    remember: 'ISR подходит для публичного контента с допустимой задержкой обновления.',
  },
  {
    questionId: 1123,
    title: 'Browser-only SDK',
    category: 'Client Only',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Browser-only SDK — библиотека, которая требует DOM, window, canvas, layout measurements или других browser APIs. Такие SDK не могут безопасно выполняться во время SSR. Их нужно отделять от универсального кода.',
    whenToUse:
      'ClientOnly или client-only plugin подходят для карт, редакторов, charting SDK, payment widgets и visual builders. Важно дать fallback, skeleton или статичное представление. Если SDK нужен только после взаимодействия, можно загрузить его лениво.',
    howItWorks:
      'Компонент не рендерит SDK на сервере, а монтирует его в браузере. Динамический import внутри onMounted защищает сервер от top-level browser API. Это уменьшает риск server crash.',
    whyImportant:
      'На практике многие hydration и SSR bugs приходят из сторонних библиотек. На интервью нужно уметь распознать browser-only dependency и предложить safe boundary.',
    codeExample: {
      language: 'vue',
      filename: 'components/ChartClient.vue',
      code: `<script setup lang="ts">
const el = ref<HTMLElement | null>(null)

onMounted(async () => {
  const { createChart } = await import('lightweight-charts')
  if (el.value) createChart(el.value)
})
</script>

<template>
  <div ref="el" />
</template>`,
    },
    commonMistake:
      'Ошибка — импортировать browser-only SDK на верхнем уровне SSR-компонента. Модуль может упасть ещё до mounted.',
    remember: 'Browser-only SDK загружают и запускают только на клиенте.',
  },
  {
    questionId: 1124,
    title: 'Hydration mismatch',
    category: 'Hydration Mismatch',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Hydration mismatch — несовпадение серверного HTML и клиентского render output. Vue пытается гидратировать DOM, но видит другой текст, атрибуты или структуру. Это может привести к предупреждениям, лишней перерисовке и багам UI.',
    whenToUse:
      'Термин важен при диагностике SSR-страниц. Его ищут, когда в консоли есть hydration warnings, layout отличается после загрузки JS или состояние внезапно перескакивает. Исправление зависит от причины.',
    howItWorks:
      'Сервер рендерит одну версию DOM. Клиент запускает тот же компонент и ожидает такую же разметку. Если данные, условия, random, dates или browser API дают другой результат, hydration нарушается.',
    whyImportant:
      'Mismatch часто не ломает страницу полностью, но маскирует глубокую архитектурную проблему. На интервью важно уметь назвать причины и способы исправления.',
    codeExample: {
      language: 'vue',
      filename: 'components/BadRandom.vue',
      code: `<template>
  <!-- Bad for SSR: value differs between server and client -->
  <span>{{ Math.random() }}</span>
</template>`,
    },
    commonMistake:
      'Ошибка — игнорировать warning, если визуально всё выглядит почти нормально. Mismatch может ломать события, доступность и производительность.',
    remember: 'Hydration требует одинаковой начальной разметки на сервере и клиенте.',
  },
  {
    questionId: 1125,
    title: 'import.meta.client',
    category: 'Server Client Execution',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'import.meta.client — современный флаг Nuxt 3 для проверки клиентской среды. Он помогает выполнять browser-only код только в браузере. Это безопаснее, чем полагаться на существование window без проверки.',
    whenToUse:
      'Флаг используют для localStorage, document, navigator, analytics и browser-only branches. Для DOM-операций часто удобнее onMounted. Для больших client-only зависимостей лучше использовать динамический import или client plugin.',
    howItWorks:
      'В клиентской сборке условие true, в серверной — false. Код внутри условия не должен нарушать SSR. Важно, чтобы опасный browser API не выполнялся до проверки.',
    whyImportant:
      'На интервью это показывает знание Nuxt 3 execution model. process.client/process.server встречались исторически, но import.meta-флаги лучше отражают современный подход.',
    codeExample: {
      language: 'ts',
      filename: 'utils/readTheme.ts',
      code: `export const readTheme = () => {
  if (import.meta.client) {
    return localStorage.getItem('theme')
  }

  return null
}`,
    },
    commonMistake:
      'Ошибка — использовать import.meta.client слишком поздно, когда browser-only модуль уже импортирован и выполнился.',
    remember: 'import.meta.client защищает код, который должен выполняться только в браузере.',
  },
  {
    questionId: 1126,
    title: 'Lazy hydration',
    category: 'Hydration Performance',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Lazy hydration — стратегия отложенного подключения интерактивности для компонентов, которые не нужны сразу. HTML может быть видимым, но JavaScript для поведения подключается позже. Это снижает начальный CPU и JS cost.',
    whenToUse:
      'Lazy hydration полезна для виджетов ниже первого экрана, отзывов, рекомендаций, второстепенных интерактивных блоков и heavy components. Не стоит откладывать критичные controls, которые пользователь ожидает нажать сразу. UX важнее технической экономии.',
    howItWorks:
      'Компонент гидратируется по событию: viewport, idle, interaction или условие. До этого он может быть статичным HTML или fallback. Конкретная реализация зависит от Nuxt/Vue tooling и выбранного паттерна.',
    whyImportant:
      'Hydration cost часто становится bottleneck современных SSR-приложений. На Senior-уровне важно думать не только о серверном HTML, но и о цене оживления интерфейса.',
    codeExample: {
      language: 'vue',
      filename: 'components/DeferredReviews.vue',
      code: `<template>
  <section>
    <h2>Reviews</h2>
    <ClientOnly>
      <InteractiveReviews />
    </ClientOnly>
  </section>
</template>`,
    },
    commonMistake:
      'Ошибка — гидратировать десятки неважных виджетов сразу, а затем удивляться высокой main-thread нагрузке.',
    remember: 'Lazy hydration оптимизирует стоимость интерактивности, а не только HTML.',
  },
  {
    questionId: 1127,
    title: 'Ключи useAsyncData',
    category: 'Payload',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Ключ useAsyncData идентифицирует данные в Nuxt payload и cache. Он должен быть стабильным и уникальным для конкретного запроса. Неправильный ключ может связать разные данные между собой.',
    whenToUse:
      'Явный key важен, когда данные зависят от route params, query, пользователя или типа ресурса. Для динамических страниц ключ должен включать значимые параметры. Это помогает избежать конфликтов payload.',
    howItWorks:
      'Сервер сохраняет результат под key, клиент восстанавливает его по тому же key. Если два разных запроса используют одинаковый key, клиент может получить не тот результат. Если key нестабилен, кеширование становится непредсказуемым.',
    whyImportant:
      'На интервью это показывает понимание не только API, но и внутреннего механизма SSR data transfer. Ошибка ключей часто проявляется как странные данные после навигации.',
    codeExample: {
      language: 'vue',
      filename: 'pages/articles/[slug].vue',
      code: `<script setup lang="ts">
const route = useRoute()
const key = computed(() => \`article:\${route.params.slug}\`)

const { data } = await useAsyncData(key, () =>
  $fetch(\`/api/articles/\${route.params.slug}\`)
)
</script>`,
    },
    commonMistake:
      'Ошибка — использовать key "data" для нескольких разных запросов на странице. Это создаёт конфликты состояния.',
    remember: 'Ключ useAsyncData должен однозначно описывать данные.',
  },
  {
    questionId: 1128,
    title: 'Медленный SSR-запрос',
    category: 'Performance',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Медленный SSR-запрос задерживает отправку HTML, потому что сервер ждёт данные до ответа. Это напрямую влияет на TTFB. Если запрос персональный и не кешируется, стоимость платит каждый request.',
    whenToUse:
      'SSR-загрузку стоит применять для данных, которые действительно нужны первому HTML. Если данные второстепенные, можно загрузить их на клиенте или отложить. Если данные публичные, можно рассмотреть кеширование, SSG или ISR-like подход.',
    howItWorks:
      'useAsyncData/useFetch блокирует серверный render до завершения запроса, если данные awaited. Чем медленнее backend, тем дольше пользователь ждёт первый byte. Это может ухудшить performance даже при хорошем HTML.',
    whyImportant:
      'На Senior-интервью важно видеть полную цену SSR. Не каждый запрос должен быть частью server render path. Нужно проектировать critical и non-critical data отдельно.',
    codeExample: {
      language: 'vue',
      filename: 'pages/dashboard.vue',
      code: `<script setup lang="ts">
const { data: summary } = await useFetch('/api/dashboard/summary')

const { data: recommendations } = useLazyFetch('/api/recommendations')
</script>`,
    },
    commonMistake:
      'Ошибка — awaited SSR-fetch для всех блоков страницы, включая те, которые пользователь увидит позже.',
    remember: 'В SSR path должны попадать только действительно критичные данные.',
  },
  {
    questionId: 1129,
    title: 'SSR не всегда быстрее',
    category: 'Rendering Strategy',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'SSR — это trade-off, а не универсальный ускоритель. Он может улучшить видимость первого контента, но увеличить TTFB, нагрузку на сервер и стоимость hydration. Итог зависит от данных, кеша, bundle size и устройства пользователя.',
    whenToUse:
      'SSR стоит выбирать, когда он улучшает реальные пользовательские или продуктовые метрики: SEO, FCP, LCP, perceived speed. Для приватных или highly interactive tools CSR может быть выгоднее. Для стабильного контента часто лучше SSG/ISR.',
    howItWorks:
      'Сервер выполняет render и data fetching, браузер получает HTML, затем загружает JS и гидратирует. Каждая фаза имеет цену. Если сервер медленный или hydration тяжёлая, SSR может проиграть альтернативам.',
    whyImportant:
      'На Middle/Senior интервью этот вопрос проверяет инженерное мышление. Правильный ответ должен быть не догматичным, а основанным на метриках и контексте.',
    codeExample: {
      language: 'bash',
      filename: 'rendering-checklist.sh',
      code: `# Compare rendering strategies by:
# SEO requirements
# TTFB
# FCP and LCP
# hydration cost
# cacheability
# server cost`,
    },
    commonMistake:
      'Ошибка — включать SSR как default для всех страниц без измерений и без понимания данных.',
    remember: 'SSR нужно доказывать метриками и требованиями.',
  },
  {
    questionId: 1130,
    title: 'Стабильные id',
    category: 'Hydration Mismatch',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Стабильный id — идентификатор, который одинаков при серверном рендере и клиентской hydration. Он важен для aria-связей, label/input, tabs, dialogs и списков. Случайный id в template может создать mismatch.',
    whenToUse:
      'Стабильные id нужны в доступных компонентах и дизайн-системах. Если id зависит от данных, он должен приходить из этих данных. Если id генерируется компонентом, нужно использовать SSR-safe API или стабильный алгоритм.',
    howItWorks:
      'Сервер и клиент должны получить одинаковую строку. useId или переданный prop помогают избежать Math.random. Если id отличается, DOM-атрибуты и aria-связи могут разойтись.',
    whyImportant:
      'На Senior-уровне hydration mismatch связывается не только с warning, но и с accessibility. Сломанный aria-labelledby может ухудшить опыт пользователей screen reader.',
    codeExample: {
      language: 'vue',
      filename: 'components/AccessibleField.vue',
      code: `<script setup lang="ts">
const id = useId()
</script>

<template>
  <label :for="id">Name</label>
  <input :id="id" />
</template>`,
    },
    commonMistake:
      'Ошибка — генерировать id через Math.random или Date.now в render path. Это ломает детерминированность SSR.',
    remember: 'ID в SSR-компоненте должен быть стабильным между сервером и клиентом.',
  },
  {
    questionId: 1131,
    title: 'Когда SSR ухудшает UX',
    category: 'Architecture',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'SSR может ухудшить UX, если серверный рендер медленный, данные персональные и не кешируются, а JavaScript hydration тяжёлая. Пользователь может увидеть HTML быстро, но ждать интерактивности. Иногда CSR или гибридная стратегия проще и быстрее.',
    whenToUse:
      'Этот анализ нужен для dashboards, сложных authenticated pages, real-time screens и интерфейсов с большим количеством browser-only widgets. Если SEO не важно, SSR должен доказывать пользу через метрики. Не все страницы одного продукта обязаны иметь одну стратегию.',
    howItWorks:
      'Сервер тратит время на render и data fetching. Затем клиент загружает bundle и выполняет hydration. Если обе фазы дорогие, итоговая задержка может быть хуже, чем у хорошо оптимизированного CSR.',
    whyImportant:
      'Senior-разработчик должен уметь сказать "SSR здесь не нужен". Это показывает зрелость и способность выбирать архитектуру по задаче, а не по тренду.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  routeRules: {
    '/admin/**': { ssr: false },
  },
})`,
    },
    commonMistake:
      'Ошибка — использовать SSR для тяжёлой приватной страницы только потому, что Nuxt поддерживает SSR по умолчанию.',
    remember: 'SSR должен улучшать конкретные метрики, иначе он может быть лишним.',
  },
  {
    questionId: 1132,
    title: 'SSG/ISR для маркетинга',
    category: 'Rendering Strategy',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Маркетинговые страницы часто лучше подходят для SSG, ISR-like revalidation или CDN caching, чем для SSR на каждый запрос. Контент публичный, редко меняется и должен быстро открываться глобально. Это сильный аргумент против лишнего server render.',
    whenToUse:
      'SSG/ISR выбирают для лендингов, pricing, документации и блогов, где допустима небольшая задержка обновления. SSR нужен, если содержимое должно рассчитываться на каждый запрос. Выбор зависит от freshness и персонализации.',
    howItWorks:
      'Страница генерируется заранее или кешируется с revalidation. CDN отдаёт HTML близко к пользователю. Обновление происходит по расписанию, TTL или событию публикации.',
    whyImportant:
      'На интервью важно связать rendering strategy с бизнес-сценарием. Для публичного стабильного контента постоянный SSR может быть просто дорогим способом получить тот же HTML.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  routeRules: {
    '/pricing': { prerender: true },
    '/blog/**': { isr: 3600 },
  },
})`,
    },
    commonMistake:
      'Ошибка — рендерить на сервере каждый запрос для страниц, которые меняются раз в день и отлично кешируются.',
    remember: 'Стабильный публичный контент часто выигрывает от SSG/ISR и CDN.',
  },
  {
    questionId: 1133,
    title: 'Top-level document',
    category: 'Browser API',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Top-level document access — обращение к document на уровне модуля, до функций и lifecycle hooks. В SSR это особенно опасно, потому что импорт модуля может выполниться на сервере. Проверка внутри mounted уже не спасёт, если импорт упал раньше.',
    whenToUse:
      'Browser-only библиотеки нужно импортировать динамически внутри client boundary или подключать как .client plugin. Если библиотека поддерживает SSR-safe entry, лучше использовать его. Важно проверять документацию зависимости.',
    howItWorks:
      'ES module выполняет top-level код при импорте. Если там есть document.querySelector, серверная среда падает до рендера. Dynamic import inside onMounted откладывает загрузку до браузера.',
    whyImportant:
      'Это Senior-level SSR bug: код выглядит защищённым, но падает из-за top-level side effect зависимости. На интервью это показывает глубокое понимание JavaScript modules и Nuxt execution.',
    codeExample: {
      language: 'ts',
      filename: 'plugins/editor.client.ts',
      code: `export default defineNuxtPlugin(async () => {
  const editor = await import('browser-only-editor')

  return {
    provide: { editor },
  }
})`,
    },
    commonMistake:
      'Ошибка — импортировать browser-only-editor на верхнем уровне обычного plugin-файла и надеяться на if (import.meta.client).',
    remember: 'Browser-only imports должны быть client-only не только при вызове, но и при загрузке модуля.',
  },
  {
    questionId: 1134,
    title: 'process.client история',
    category: 'Server Client Execution',
    rarity: 'rare',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'process.client и process.server — исторические флаги, известные по Nuxt 2 и старым примерам. В Nuxt 3 современным и предпочтительным способом обычно являются import.meta.client и import.meta.server. Старый синтаксис может встретиться в legacy-коде.',
    whenToUse:
      'В новом Nuxt 3 коде лучше писать import.meta-флаги. При чтении legacy-кода полезно понимать process.client/server, чтобы корректно мигрировать. Важно не смешивать стили без необходимости.',
    howItWorks:
      'Флаги отвечают на вопрос, где выполняется код: на клиенте или сервере. import.meta лучше вписывается в современный Vite/Nuxt 3 tooling. Это делает код понятнее для новых проектов.',
    whyImportant:
      'На интервью могут спросить и старый, и новый подход. Зрелый ответ объясняет историю и рекомендуемый Nuxt 3 стиль, а не просто механически называет флаг.',
    codeExample: {
      language: 'ts',
      filename: 'utils/clientOnly.ts',
      code: `export const runClientOnly = (callback: () => void) => {
  if (import.meta.client) {
    callback()
  }
}`,
    },
    commonMistake:
      'Ошибка — копировать старые process.client примеры без понимания, какой Nuxt version и build tooling используются.',
    remember: 'Для Nuxt 3 предпочитай import.meta.client/server.',
  },
  {
    questionId: 1135,
    title: 'Payload security',
    category: 'Payload',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Payload security — правило, что данные, сериализованные для hydration, доступны клиенту. Даже если данные получены на сервере, после попадания в payload они не являются приватными. Это критично для токенов, internal IDs и raw backend responses.',
    whenToUse:
      'О payload security нужно думать при любом useAsyncData/useFetch, который возвращает персональные или backend-данные. Возвращай только поля, нужные UI. Секреты и internal metadata должны оставаться на сервере.',
    howItWorks:
      'Nuxt сериализует результат SSR data fetching и отправляет клиенту. Браузер использует этот payload при hydration. Пользователь может увидеть эти данные в devtools или HTML/JS context.',
    whyImportant:
      'На Senior-интервью это связывает SSR и security. Ошибка здесь может стать утечкой данных, даже если endpoint сам защищён.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/account.get.ts',
      code: `export default defineEventHandler(async (event) => {
  const account = await loadAccount(event)

  return {
    name: account.name,
    plan: account.plan,
  }
})`,
    },
    commonMistake:
      'Ошибка — вернуть весь объект account из backend, включая internalToken или permissions audit data.',
    remember: 'В payload должны попадать только безопасные и нужные клиенту поля.',
  },
  {
    questionId: 1136,
    title: 'Фильтрация SSR-данных',
    category: 'Code Review',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Фильтрация SSR-данных — обязательная практика перед возвратом результата в useAsyncData/useFetch. Серверный endpoint может знать больше, чем должен знать браузер. UI-модель должна быть ограниченной и явной.',
    whenToUse:
      'Фильтровать нужно профили пользователей, платежи, admin data, интеграции и любые backend DTO. Если данные уходят в payload, они должны пройти review. Это особенно важно при ускоренной разработке BFF endpoints.',
    howItWorks:
      'Backend object преобразуется в client-safe DTO. Поля вроде token, secret, internal flags и raw provider responses удаляются. Типы помогают закрепить контракт.',
    whyImportant:
      'На Senior-уровне ожидается понимание, что SSR data fetching не делает данные приватными. Без фильтрации можно случайно раскрыть чувствительную информацию.',
    codeExample: {
      language: 'ts',
      filename: 'server/utils/toPublicUser.ts',
      code: `interface PublicUser {
  id: string
  name: string
  avatarUrl: string
}

export const toPublicUser = (user: User): PublicUser => ({
  id: user.id,
  name: user.name,
  avatarUrl: user.avatarUrl,
})`,
    },
    commonMistake:
      'Ошибка — возвращать raw user object, потому что UI всё равно показывает только несколько полей. Payload может содержать все поля.',
    remember: 'SSR endpoint должен возвращать client-safe DTO, а не raw backend model.',
  },
  {
    questionId: 1137,
    title: 'Hydration process',
    category: 'Hydration',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Hydration process — последовательность, в которой клиентский Vue загружает приложение, создаёт виртуальное дерево, сопоставляет его с серверной DOM и подключает интерактивность. Он опирается на совпадение HTML и payload. Чем сложнее UI, тем выше стоимость hydration.',
    whenToUse:
      'Понимание процесса нужно для диагностики mismatch, slow interactivity, event handler bugs и hydration performance. Оно особенно важно для страниц с большим количеством интерактивных компонентов. Без этого сложно оптимизировать SSR-приложение.',
    howItWorks:
      'Браузер получает HTML, CSS, payload и JS. После загрузки bundle Vue запускается и гидратирует DOM вместо полного пересоздания. Если DOM не совпадает, возникают warnings и дополнительные исправления.',
    whyImportant:
      'На Senior-интервью важно объяснять hydration как отдельную фазу, а не как магическое продолжение SSR. Это помогает говорить о lazy hydration, payload и mismatch.',
    codeExample: {
      language: 'bash',
      filename: 'hydration-flow.sh',
      code: `# 1. Server renders HTML
# 2. Browser paints initial content
# 3. Client JS loads
# 4. Vue hydrates existing DOM
# 5. Page becomes interactive`,
    },
    commonMistake:
      'Ошибка — считать, что если HTML уже виден, приложение полностью готово к взаимодействию. Hydration может ещё выполняться.',
    remember: 'Hydration — отдельная клиентская фаза после серверного HTML.',
  },
  {
    questionId: 1138,
    title: 'Hydration cost ниже fold',
    category: 'Hydration Performance',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Hydration cost ниже первого экрана — стоимость оживления компонентов, которые пользователь ещё не видит или не использует. Если таких компонентов много, они могут задержать интерактивность важной части страницы. Это типичная проблема богатых SSR-интерфейсов.',
    whenToUse:
      'Оптимизацию стоит рассмотреть для рекомендаций, отзывов, графиков, комментариев, виджетов и embedded blocks ниже fold. Критичные controls нужно гидратировать раньше. Решение зависит от UX: что пользователь должен сделать в первые секунды.',
    howItWorks:
      'Компоненты можно грузить лениво, гидратировать по viewport/interaction или заменить статичным fallback. Это уменьшает initial JS execution. Нужно следить, чтобы deferred блоки не ломали layout.',
    whyImportant:
      'Senior performance работа не заканчивается SSR. Главная боль может быть не в HTML, а в JS и CPU при hydration. Умение отложить неважное улучшает real user experience.',
    codeExample: {
      language: 'vue',
      filename: 'pages/product.vue',
      code: `<template>
  <ProductHero />
  <ProductBuyBox />

  <ClientOnly>
    <HeavyRecommendations />
  </ClientOnly>
</template>`,
    },
    commonMistake:
      'Ошибка — гидратировать весь rich page сразу, включая тяжёлые блоки, которые находятся далеко ниже первого экрана.',
    remember: 'Не вся интерактивность обязана стартовать одновременно.',
  },
  {
    questionId: 1139,
    title: 'Rendering strategy review',
    category: 'Architecture',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Rendering strategy review — проверка, подходит ли выбранный SSR/CSR/SSG/ISR подход конкретной странице. Это архитектурное решение, которое должно учитывать SEO, данные, кешируемость, UX и стоимость эксплуатации. Универсального ответа нет.',
    whenToUse:
      'Такой review нужен при создании новых разделов, миграции SPA в Nuxt, проблемах performance и выборе deployment strategy. Разные route groups могут иметь разные правила. Важно документировать причины выбора.',
    howItWorks:
      'Команда анализирует, публичная ли страница, как часто меняются данные, можно ли кешировать, важен ли SEO, какой hydration cost и как быстро нужен первый интерактивный экран. Затем выбирается стратегия и проверяется метриками.',
    whyImportant:
      'На Senior-уровне rendering strategy — часть продуктовой архитектуры. Решение "SSR везде" часто так же плохо, как "CSR везде", если оно не связано с требованиями.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },
    '/blog/**': { isr: 3600 },
    '/admin/**': { ssr: false },
  },
})`,
    },
    commonMistake:
      'Ошибка — выбирать rendering mode на уровне всего продукта без анализа отдельных типов страниц.',
    remember: 'Rendering strategy должна быть route-aware и metric-driven.',
  },
  {
    questionId: 1140,
    title: 'Зрелая SSR-архитектура',
    category: 'Architecture',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Зрелая SSR-архитектура применяет серверный рендеринг там, где он даёт measurable value. Она учитывает SEO, TTFB, FCP, LCP, hydration cost, caching, browser APIs и безопасность payload. SSR становится инструментом, а не догмой.',
    whenToUse:
      'Такой подход нужен в продуктах с разными типами страниц: публичный маркетинг, контент, личный кабинет, интерактивные tools и heavy widgets. У каждого типа может быть своя стратегия. Хорошая архитектура допускает гибридность.',
    howItWorks:
      'Страницы классифицируются по данным и целям. Публичный стабильный контент может быть SSG/ISR, SEO-sensitive dynamic content — SSR, приватный dashboard — CSR, browser-only widgets — ClientOnly или lazy hydration. Метрики подтверждают выбор.',
    whyImportant:
      'Это один из ключевых Middle/Senior навыков в Nuxt. Нужно уметь проектировать не только компоненты, но и поведение всей страницы от сервера до интерактивности.',
    codeExample: {
      language: 'bash',
      filename: 'ssr-architecture-checklist.sh',
      code: `# For each route, decide:
# 1. Is SEO important?
# 2. Is data public or private?
# 3. Can response be cached?
# 4. What is hydration cost?
# 5. Which metric should improve?`,
    },
    commonMistake:
      'Ошибка — игнорировать hydration warnings и browser-only проблемы, потому что серверный HTML визуально похож на ожидаемый.',
    remember: 'Зрелая SSR-архитектура выбирает стратегию по странице, данным и метрикам.',
  },
] satisfies SsrHydrationCardInput[]

export const ssrHydrationKnowledgeCards: ContentKnowledgeCard[] = cards.map(createCard)
