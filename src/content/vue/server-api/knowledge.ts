import type { ContentKnowledgeCard } from '../../../types/content'
import type { CodeExample, InterviewLevel, KnowledgeRarity } from '../../../types/knowledge'

interface ServerApiCardInput {
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
  interviewQuestions?: string[]
}

const createInterviewQuestions = (title: string, category: string): string[] => [
  `Какие задачи решает ${title} в теме ${category} (Server API / Nitro)?`,
  `Какие ограничения ${title} важно учитывать в контексте Server API / Nitro?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

const createCard = (input: ServerApiCardInput): ContentKnowledgeCard => ({
  id: `server-api-${input.questionId}`,
  moduleId: 'server-api',
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
  interviewQuestions: input.interviewQuestions ?? createInterviewQuestions(input.title, input.category),
  remember: input.remember,
})

export const serverApiKnowledgeCards: ContentKnowledgeCard[] = [
  createCard({
    questionId: 1001,
    title: 'server/api',
    category: 'Server API',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'server/api — папка Nuxt для создания HTTP endpoints внутри серверного runtime. Файлы в этой папке становятся маршрутами с префиксом /api. Это способ добавить backend-facing слой рядом с Nuxt-приложением.',
    whenToUse:
      'server/api используют для BFF, proxy к внешним сервисам, небольших CRUD endpoints, авторизации, чтения приватного runtimeConfig и адаптации данных под frontend. Он особенно полезен, когда клиенту нельзя раскрывать секреты или внешний контракт. Для большого домена может понадобиться отдельный backend.',
    howItWorks:
      'Nuxt/Nitro сканирует server/api и создаёт route handlers. Имя файла определяет путь, а suffix вроде .get.ts или .post.ts может ограничить HTTP-метод. Handler возвращает сериализуемые данные, Response или выбрасывает контролируемую ошибку.',
    whyImportant:
      'На интервью важно объяснить server/api как server boundary. Это не Vue-компонент и не просто fetch-wrapper, а полноценная точка входа HTTP-запроса. Через неё проходят безопасность, статусы, cookies и интеграции.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/users.get.ts',
      code: `export default defineEventHandler(async () => {
  return [
    { id: 1, name: 'Ada Lovelace' },
    { id: 2, name: 'Grace Hopper' },
  ]
})`,
    },
    commonMistake:
      'Ошибка — считать server/api местом для UI-логики или Vue-состояния. Endpoint должен описывать серверный контракт и не зависеть от компонентов.',
    remember: 'server/api создаёт HTTP endpoints внутри Nitro runtime.',
  }),
  createCard({
    questionId: 1002,
    title: 'defineEventHandler',
    category: 'Server API',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'defineEventHandler объявляет серверный обработчик H3/Nitro. Он принимает event, из которого читаются request, params, query, headers, cookies и runtime-контекст. Handler возвращает ответ endpoint-а.',
    whenToUse:
      'Его используют почти во всех server/api и server/routes файлах. Он подходит для синхронной и асинхронной логики, вызова внешних API, работы с body и формирования HTTP-ответа. Для shared-логики лучше выносить функции рядом, а handler оставлять тонким.',
    howItWorks:
      'Nitro вызывает handler при совпадении маршрута. Объект event содержит node/runtime abstraction, чтобы один и тот же код мог работать в разных deployment targets. Возвращаемое значение автоматически сериализуется, если это обычный объект.',
    whyImportant:
      'Понимание defineEventHandler помогает отличать серверный lifecycle от Vue lifecycle. На интервью это базовая точка входа в Server API и Nitro.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/health.get.ts',
      code: `export default defineEventHandler(() => {
  return {
    status: 'ok',
    checkedAt: new Date().toISOString(),
  }
})`,
    },
    commonMistake:
      'Ошибка — писать слишком много доменной логики прямо в handler. Для production-кода лучше отделять validation, service calls и mapping ответа.',
    remember: 'defineEventHandler — входная функция серверного endpoint-а.',
  }),
  createCard({
    questionId: 1003,
    title: 'Query parameters',
    category: 'Request',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Query parameters — часть URL после знака вопроса. В Server API Nuxt их читают через getQuery(event). Они подходят для фильтров, поиска, пагинации и необязательных параметров запроса.',
    whenToUse:
      'Query используют, когда параметр не является частью идентичности ресурса. Например, q, page, limit, sort или filter. Для обязательного ID ресурса чаще подходит route param.',
    howItWorks:
      'H3 парсит query string и возвращает объект значений. Значения нужно валидировать и приводить к ожидаемым типам, потому что из URL всё приходит как внешние данные. Даже page=2 не стоит автоматически считать безопасным number.',
    whyImportant:
      'На собеседовании важно показать, что чтение query — не только синтаксис. Production endpoint должен учитывать валидацию, default values, лимиты и защиту от слишком дорогих запросов.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/search.get.ts',
      code: `export default defineEventHandler((event) => {
  const query = getQuery(event)
  const search = String(query.q ?? '').trim()

  return { query: search }
})`,
    },
    commonMistake:
      'Ошибка — передавать query напрямую в базу данных или внешний API без нормализации. Это повышает риск ошибок, перегрузки и injection-уязвимостей.',
    remember: 'getQuery читает query string, но значения всё равно нужно валидировать.',
  }),
  createCard({
    questionId: 1004,
    title: 'readBody',
    category: 'Request',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'readBody(event) читает body HTTP-запроса в Server API. Обычно он используется в POST, PUT и PATCH endpoints. Body является внешним вводом и не должен считаться доверенным.',
    whenToUse:
      'readBody нужен при создании или изменении данных: регистрация, формы, CRUD, настройки пользователя, команды. Для GET-запросов лучше использовать query или params. Body должен иметь ожидаемую форму и ограничения.',
    howItWorks:
      'H3 читает stream запроса и парсит body по content type. Затем endpoint получает объект или значение, которое можно проверить. После чтения body обычно выполняют validation, authorization и бизнес-действие.',
    whyImportant:
      'На интервью вопрос body почти всегда связан с безопасностью. Сильный ответ упоминает schema validation, ограничения размера, типы и корректные HTTP-статусы при ошибках.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/users.post.ts',
      code: `interface CreateUserBody {
  email?: string
  name?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<CreateUserBody>(event)

  if (!body.email || !body.name) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid user payload' })
  }

  return { id: crypto.randomUUID(), email: body.email, name: body.name }
})`,
    },
    commonMistake:
      'Ошибка — использовать body как уже проверенную модель. Серверный код должен защищаться от пустых, лишних и неверно типизированных полей.',
    remember: 'readBody читает тело запроса, но безопасность начинается с validation.',
  }),
  createCard({
    questionId: 1005,
    title: 'setResponseStatus',
    category: 'Response',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'setResponseStatus(event, statusCode) задаёт HTTP-статус ответа. Body ответа и статус протокола — разные вещи. Клиентские библиотеки, мониторинг и кеширование часто ориентируются именно на HTTP-статус.',
    whenToUse:
      'Статус нужно задавать для создания ресурсов, отсутствия контента, частичных сценариев или контролируемых нестандартных ответов. Для ошибок часто удобнее createError. Важно не возвращать 200 там, где запрос фактически не был успешным.',
    howItWorks:
      'Handler устанавливает статус в response metadata через event. После этого возвращаемое значение становится body ответа, но статус уже будет указанным. Например, при создании пользователя можно вернуть 201 Created.',
    whyImportant:
      'Корректные статусы — часть API-контракта. На интервью это показывает понимание HTTP, а не только JavaScript. Без статусов сложно строить retry, error handling и observability.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/users.post.ts',
      code: `export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const user = await createUser(body)

  setResponseStatus(event, 201)
  return user
})`,
    },
    commonMistake:
      'Ошибка — всегда возвращать 200 и класть статус в JSON. Это ломает стандартные ожидания HTTP-клиентов.',
    remember: 'HTTP-статус должен отражать результат запроса.',
  }),
  createCard({
    questionId: 1006,
    title: 'Validation в Server API',
    category: 'Security',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Validation — проверка входных данных до выполнения серверного действия. В Server API это касается body, query, params, headers и cookies. TypeScript не заменяет runtime validation, потому что запрос приходит извне.',
    whenToUse:
      'Валидация нужна во всех endpoints, где вход влияет на данные, доступ или внешний запрос. Особенно важны POST/PUT/PATCH/DELETE, поиск с лимитами, авторизация и proxy. Даже внутренний endpoint может быть вызван некорректно.',
    howItWorks:
      'Сервер читает входные данные, приводит типы, проверяет обязательные поля и ограничения. При ошибке возвращается 400 или другой корректный статус. После валидации код работает с уже нормализованной моделью.',
    whyImportant:
      'На Middle+/Senior уровне ожидают понимание runtime границы. Нельзя доверять клиенту, generated types или форме UI. Server API должен быть самостоятельной защитной точкой.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/products.post.ts',
      code: `interface ProductBody {
  title?: string
  price?: number
}

const assertProductBody = (body: ProductBody) => {
  if (!body.title || typeof body.price !== 'number' || body.price < 0) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid product payload' })
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ProductBody>(event)
  assertProductBody(body)
  return createProduct(body)
})`,
    },
    commonMistake:
      'Ошибка — считать TypeScript interface достаточной защитой. Interface исчезает в runtime и не проверяет реальный HTTP-запрос.',
    remember: 'Валидация в Server API должна выполняться в runtime.',
  }),
  createCard({
    questionId: 1007,
    title: 'Server API как BFF',
    category: 'BFF Architecture',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Server API может выполнять роль Backend for Frontend. BFF адаптирует общий backend или внешний сервис под нужды конкретного frontend-клиента. Он скрывает секреты, нормализует ответы и упрощает контракт для UI.',
    whenToUse:
      'BFF полезен, когда frontend не должен напрямую знать сложный внешний API, токены, внутренние поля или несколько backend-вызовов. Также он помогает собрать данные из нескольких источников в один удобный ответ. Для крупной доменной логики может понадобиться отдельный backend.',
    howItWorks:
      'Клиент вызывает /api endpoint Nuxt, а endpoint на сервере обращается к внешним сервисам с приватными credentials. Затем BFF фильтрует поля, обрабатывает ошибки и возвращает стабильный контракт. Это уменьшает связанность frontend с внешними API.',
    whyImportant:
      'На интервью важно не продавать BFF как универсальную замену backend. Сильный ответ объясняет границы: adapter, security boundary, aggregation и контракт для frontend.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/account.get.ts',
      code: `export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const token = getCookie(event, 'session')

  const account = await $fetch(\`\${config.accountApiUrl}/me\`, {
    headers: { authorization: \`Bearer \${token}\` },
  })

  return {
    id: account.id,
    email: account.email,
    plan: account.subscription.plan,
  }
})`,
    },
    commonMistake:
      'Ошибка — делать BFF прозрачным proxy без проверки доступа и нормализации ответа. Тогда frontend всё равно оказывается связан с внешним контрактом.',
    remember: 'BFF должен контролировать контракт, безопасность и форму данных для frontend.',
  }),
  createCard({
    questionId: 1008,
    title: 'Route params',
    category: 'Request',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Route params — значения из динамических сегментов server/api маршрута. В Nuxt файл server/api/users/[id].get.ts создаёт endpoint, где id читается через getRouterParam. Это отличается от query string.',
    whenToUse:
      'Params подходят для идентичности ресурса: user id, slug статьи, order id. Query лучше подходит для фильтров и режимов просмотра. Разделение делает API более читаемым.',
    howItWorks:
      'Nitro сопоставляет URL с динамическим сегментом файла. getRouterParam(event, "id") возвращает строковое значение параметра. Его нужно проверять, потому что пустые, неверные или вредные значения всё ещё возможны.',
    whyImportant:
      'На интервью это проверяет понимание REST-ish структуры и файловой маршрутизации server/api. Ошибка params/query часто приводит к неясным контрактам endpoints.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/users/[id].get.ts',
      code: `export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing user id' })
  }

  return getUserById(id)
})`,
    },
    commonMistake:
      'Ошибка — читать route id из query в динамическом endpoint. Это делает контракт менее явным и мешает поддержке.',
    remember: 'Динамические сегменты server/api читаются через getRouterParam.',
  }),
  createCard({
    questionId: 1009,
    title: 'Cookies в Server API',
    category: 'Security',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Cookies — HTTP-механизм хранения небольших значений, автоматически отправляемых браузером по правилам domain/path/sameSite. В Server API Nuxt cookies можно читать и устанавливать через H3 helpers. Они часто используются для session tokens.',
    whenToUse:
      'Cookie подходит для session id, csrf token или небольших серверно-контролируемых признаков. Для больших данных, профиля пользователя или секретов без защиты cookie не подходит. Security options обязательны для auth-сценариев.',
    howItWorks:
      'getCookie читает cookie из запроса, setCookie добавляет Set-Cookie в ответ. Options вроде httpOnly, secure, sameSite, maxAge и path определяют доступность и безопасность. Для удаления используют deleteCookie.',
    whyImportant:
      'На интервью cookies часто обсуждают в контексте XSS, CSRF и session security. Недостаточно знать helper; нужно понимать флаги и угрозы.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/login.post.ts',
      code: `export default defineEventHandler(async (event) => {
  const sessionId = await createSession(event)

  setCookie(event, 'session', sessionId, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
  })

  return { ok: true }
})`,
    },
    commonMistake:
      'Ошибка — хранить session cookie без httpOnly и secure. Такой токен легче украсть или отправить по небезопасному каналу.',
    remember: 'Auth cookies требуют строгих security options.',
  }),
  createCard({
    questionId: 1010,
    title: 'Nitro engine',
    category: 'Nitro',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Nitro — серверный engine Nuxt 3. Он отвечает за server runtime, server routes, API endpoints, middleware, storage, caching и сборку под разные deployment targets. Это слой, который делает Nuxt portable на разные платформы.',
    whenToUse:
      'Nitro используется всегда, когда Nuxt-приложение имеет серверный runtime или Server API. Разработчик взаимодействует с ним через server/api, server/routes, routeRules, storage и конфигурацию. Глубина использования зависит от архитектуры.',
    howItWorks:
      'Nitro строит серверный bundle и адаптирует его под target: Node, serverless, edge или platform preset. Он использует H3 для request handling и предоставляет abstractions, которые не привязаны к одному серверу. Это позволяет менять deployment strategy без полного переписывания endpoint-ов.',
    whyImportant:
      'Middle+/Senior разработчик должен понимать, что Server API работает не сам по себе, а внутри Nitro. Это влияет на доступные API, холодные старты, кеширование, storage и deployment.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
  },
})`,
    },
    commonMistake:
      'Ошибка — думать о Nuxt Server API как о классическом Express-сервере без учёта Nitro runtime и target-платформы.',
    remember: 'Nitro — серверный engine, который запускает и собирает Server API.',
  }),
  createCard({
    questionId: 1011,
    title: 'BFF-архитектура',
    category: 'Architecture',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Backend for Frontend — слой, который проектируется под нужды конкретного клиента. В Nuxt Server API он часто находится между браузером и внешними backend-сервисами. BFF не просто проксирует, а формирует удобный и безопасный контракт.',
    whenToUse:
      'BFF полезен, когда нужно объединить несколько источников данных, скрыть приватные ключи, упростить ответ или адаптировать legacy backend. Он также помогает разделить frontend-friendly модель и внутренний backend contract. Не стоит превращать BFF в огромный доменный backend без явной причины.',
    howItWorks:
      'Клиент делает запрос к Nuxt endpoint. Endpoint проверяет доступ, вызывает backend-сервисы, обрабатывает ошибки и возвращает минимально нужные поля. Это снижает объём клиентской логики и уменьшает утечку внутренних деталей.',
    whyImportant:
      'На Senior-интервью BFF часто обсуждают как границу ответственности. Хороший ответ объясняет безопасность, контракт, агрегацию и риски избыточной логики в Nuxt-слое.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/dashboard.get.ts',
      code: `export default defineEventHandler(async (event) => {
  await requireUser(event)

  const [profile, invoices] = await Promise.all([
    fetchProfile(event),
    fetchRecentInvoices(event),
  ])

  return {
    userName: profile.name,
    latestInvoices: invoices.slice(0, 5),
  }
})`,
    },
    commonMistake:
      'Ошибка — переносить в BFF весь бизнес-домен без границ. Это усложняет масштабирование и владение логикой.',
    remember: 'BFF адаптирует backend под frontend, но не обязан заменять весь backend.',
  }),
  createCard({
    questionId: 1012,
    title: 'Динамические API routes',
    category: 'Request',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Динамические API routes позволяют описывать endpoints с переменными сегментами пути. Например, [slug].get.ts принимает значение slug из URL. Это удобно для ресурсов, которые идентифицируются id или slug.',
    whenToUse:
      'Динамические сегменты используют для чтения, обновления или удаления конкретного ресурса. Они хорошо подходят для /api/posts/[slug], /api/users/[id], /api/orders/[orderId]. Для необязательных фильтров лучше использовать query.',
    howItWorks:
      'Nitro сопоставляет сегмент URL с именем в квадратных скобках. getRouterParam возвращает строковое значение. Endpoint должен валидировать параметр и корректно отвечать 400 или 404 при проблеме.',
    whyImportant:
      'Это базовый building block CRUD API. На интервью важно показать, что route params, query и body имеют разные роли в HTTP-контракте.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/posts/[slug].get.ts',
      code: `export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const post = slug ? await findPostBySlug(slug) : null

  if (!post) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found' })
  }

  return post
})`,
    },
    commonMistake:
      'Ошибка — возвращать null со статусом 200 для отсутствующего ресурса. Для API-клиента это успешный ответ, а не Not Found.',
    remember: 'Динамический API route должен валидировать param и возвращать корректный HTTP-статус.',
  }),
  createCard({
    questionId: 1013,
    title: 'Secrets и private runtimeConfig',
    category: 'Security',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Secrets — приватные значения: API tokens, signing keys, service credentials и internal URLs. В Nuxt они должны храниться в приватной части runtimeConfig или в инфраструктуре секретов платформы. public runtimeConfig не подходит для секретов.',
    whenToUse:
      'Private runtimeConfig используют, когда Server API должен вызвать внешний сервис или подписать запрос. Значение доступно серверному коду и не должно попадать в клиентский bundle. Для публичных URL и flags есть public section.',
    howItWorks:
      'nuxt.config.ts объявляет runtimeConfig, а значения часто приходят из environment variables. Server API читает config через useRuntimeConfig(event). Клиентская часть видит только public-подмножество.',
    whyImportant:
      'Утечка секрета через public config — серьёзная production-проблема. На интервью важно ясно объяснить, где проходит граница public/private и почему TypeScript не защищает от неправильной публикации.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  runtimeConfig: {
    paymentApiToken: process.env.PAYMENT_API_TOKEN,
    public: {
      appBaseUrl: process.env.NUXT_PUBLIC_APP_BASE_URL,
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — помещать token в runtimeConfig.public ради удобного доступа из компонента. Всё публичное следует считать раскрытым.',
    remember: 'Секреты принадлежат private runtimeConfig или secret manager, но не public config.',
  }),
  createCard({
    questionId: 1014,
    title: 'createError',
    category: 'Errors',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'createError создаёт контролируемую ошибку с HTTP-статусом и сообщением. В Server API это основной способ вернуть 400, 401, 403, 404 и другие ожидаемые ошибки. Он лучше, чем ответ 200 с error-флагом.',
    whenToUse:
      'createError используют для validation errors, unauthorized, forbidden, not found и конфликтов состояния. Для успешных нестандартных статусов можно использовать setResponseStatus. Внутренние непредвиденные ошибки лучше логировать и не раскрывать клиенту детали.',
    howItWorks:
      'Handler выбрасывает createError, Nitro/H3 превращает её в HTTP response с указанным statusCode. Клиент получает корректный статус, а observability-система может отличать ожидаемые ошибки от 500. Это делает контракт честным.',
    whyImportant:
      'На Middle+/Senior уровне важно уважать HTTP. Корректные статусы упрощают клиентский код, retry policy, monitoring и caching. Ошибки не должны маскироваться успешными ответами.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/users/[id].get.ts',
      code: `export default defineEventHandler(async (event) => {
  const user = await getUserById(getRouterParam(event, 'id'))

  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }

  return user
})`,
    },
    commonMistake:
      'Ошибка — возвращать { error: true } со статусом 200. Такой контракт усложняет обработку ошибок и ломает стандартные ожидания HTTP.',
    remember: 'createError делает ошибку частью HTTP-контракта.',
  }),
  createCard({
    questionId: 1015,
    title: 'Nitro presets',
    category: 'Nitro Deployment',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Nitro presets описывают, как собрать server runtime под конкретную платформу или тип запуска. Это может быть node-server, serverless, edge или preset для конкретного хостинга. Preset влияет на output и runtime expectations.',
    whenToUse:
      'Preset выбирают при деплое или настройке infrastructure target. Для классического сервера подходит Node, для функций — serverless, для низкой latency рядом с пользователем — edge. Выбор должен учитывать ограничения API, cold start и storage.',
    howItWorks:
      'Nitro генерирует разные артефакты под разные targets. Один и тот же server/api код может потребовать корректировок, если runtime не поддерживает определённые Node APIs. Поэтому deployment target нужно учитывать заранее.',
    whyImportant:
      'На интервью вопрос presets проверяет понимание production-среды. Senior-разработчик не пишет Server API в вакууме: он думает о том, где и как этот код будет запускаться.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  nitro: {
    preset: 'node-server',
  },
})`,
    },
    commonMistake:
      'Ошибка — выбирать edge runtime и затем использовать Node-only API без проверки совместимости.',
    remember: 'Nitro preset связывает код Server API с реальной платформой деплоя.',
  }),
  createCard({
    questionId: 1016,
    title: 'Proxy API',
    category: 'BFF Architecture',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Proxy API в Nuxt Server API — endpoint, который вызывает внешний сервис от имени server-side слоя. Он может скрывать credentials, менять формат ответа и централизовать error handling. Это частый BFF-сценарий.',
    whenToUse:
      'Proxy нужен, когда браузер не должен знать секреты, внутренние URL или сложный backend contract. Также он полезен для CORS, агрегации и стабилизации контракта. Не стоит делать proxy полностью прозрачным без правил.',
    howItWorks:
      'Клиент обращается к /api endpoint, Nuxt server читает private runtimeConfig и делает запрос через $fetch или другой клиент. Затем endpoint возвращает только нужные поля и корректные ошибки. Секрет остаётся на сервере.',
    whyImportant:
      'На интервью важно показать, что proxy — это security boundary. Плохо спроектированный proxy может раскрыть лишние данные или стать открытым шлюзом к внутреннему API.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/weather.get.ts',
      code: `export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const query = getQuery(event)

  const response = await $fetch<{ temp: number }>(\`\${config.weatherApiUrl}/current\`, {
    query: { city: query.city },
    headers: { 'x-api-key': config.weatherApiKey },
  })

  return { temperature: response.temp }
})`,
    },
    commonMistake:
      'Ошибка — проксировать все query и headers как есть. Нужно явно разрешать поля и контролировать контракт.',
    remember: 'Proxy API должен фильтровать вход и выход, а не быть открытым туннелем.',
  }),
  createCard({
    questionId: 1017,
    title: 'CRUD endpoint',
    category: 'Practice',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'CRUD endpoint выполняет создание, чтение, обновление или удаление ресурса. В Nuxt Server API такие endpoints часто описываются через method suffix: .get.ts, .post.ts, .patch.ts, .delete.ts. Это делает контракт понятным.',
    whenToUse:
      'CRUD подходит для ресурсов с устойчивой моделью: пользователи, заказы, статьи, настройки. Важно не путать CRUD с произвольными командами; некоторые действия лучше описывать отдельным command endpoint. Все mutation endpoints требуют валидации и авторизации.',
    howItWorks:
      'Endpoint читает params/body, проверяет доступ, вызывает service/repository слой и возвращает корректный статус. Создание часто возвращает 201, отсутствие ресурса — 404, неверный ввод — 400. Service layer помогает не раздувать handler.',
    whyImportant:
      'CRUD кажется простым, но в production именно здесь появляются ошибки безопасности, статусов и консистентности. На интервью важно говорить о validation, authorization, idempotency и error handling.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/products/[id].patch.ts',
      code: `export default defineEventHandler(async (event) => {
  await requireAdmin(event)

  const id = getRouterParam(event, 'id')
  const body = await readBody<{ title?: string; price?: number }>(event)

  const product = await updateProduct(String(id), body)
  return product
})`,
    },
    commonMistake:
      'Ошибка — выполнять mutation без проверки прав. Наличие endpoint-а в server/api не означает, что он автоматически защищён.',
    remember: 'CRUD endpoint должен валидировать вход, проверять доступ и возвращать честный HTTP-статус.',
  }),
  createCard({
    questionId: 1018,
    title: 'server/middleware',
    category: 'Nitro Middleware',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'server/middleware — серверный middleware слой Nitro, который выполняется до route handler. Его можно использовать для логирования, request id, security headers, базовых проверок и подготовки context. Это не Vue route middleware.',
    whenToUse:
      'Middleware подходит для cross-cutting concerns, которые нужны многим endpoints. Например, добавить correlation id или общий заголовок безопасности. Доменную логику конкретного endpoint лучше оставить в handler или service layer.',
    howItWorks:
      'Файл в server/middleware регистрируется Nitro и получает event. Middleware может читать request, менять response headers или бросать ошибку. Он должен быть лёгким, потому что выполняется часто.',
    whyImportant:
      'На интервью важно различать route middleware страниц и server middleware Nitro. Это разные уровни: один связан с навигацией UI, другой с серверным HTTP pipeline.',
    codeExample: {
      language: 'ts',
      filename: 'server/middleware/request-id.ts',
      code: `export default defineEventHandler((event) => {
  const requestId = getHeader(event, 'x-request-id') ?? crypto.randomUUID()
  setResponseHeader(event, 'x-request-id', requestId)
})`,
    },
    commonMistake:
      'Ошибка — помещать в server middleware тяжёлые запросы к базе для каждого request без необходимости. Это ухудшает latency всего приложения.',
    remember: 'server/middleware подходит для общих серверных concerns, а не для логики одной страницы.',
  }),
  createCard({
    questionId: 1019,
    title: 'routeRules и caching',
    category: 'Nitro Caching',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'routeRules позволяют задавать инфраструктурное поведение маршрутов: caching, headers, redirects, proxy и другие правила. В Nitro это декларативный способ управлять поведением routes. Особенно часто routeRules обсуждают вместе с caching.',
    whenToUse:
      'routeRules используют, когда нужно настроить кеш для публичной страницы или API, добавить headers или описать proxy на уровне маршрута. Для персональных данных правила должны быть очень осторожными. Не каждый route безопасно кешировать.',
    howItWorks:
      'Правила задаются в nuxt.config.ts по pattern маршрута. Nitro применяет их при обработке запроса или сборке. Конкретная поддержка зависит от deployment target и платформы.',
    whyImportant:
      'Кеширование может резко ускорить приложение или создать серьёзную утечку данных. На Senior-уровне важно понимать freshness, cache key, пользователя, HTTP-метод и invalidation.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  routeRules: {
    '/api/catalog/**': {
      cache: { maxAge: 60 },
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — кешировать персональный endpoint вроде /api/me как общий публичный ответ. Это может отдать данные одного пользователя другому.',
    remember: 'routeRules мощны, но cache policy должна учитывать приватность и freshness.',
  }),
  createCard({
    questionId: 1020,
    title: 'Headers',
    category: 'Request',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Headers — метаданные HTTP-запроса и ответа. В Server API через headers часто передают authorization, content type, request id, language и cache hints. Заголовки не являются body или route params.',
    whenToUse:
      'Headers используют для протокольных и инфраструктурных данных. Authorization header подходит для bearer token, accept-language — для локализации, x-request-id — для traceability. Пользовательский ввод лучше передавать через body или query по смыслу.',
    howItWorks:
      'getHeader читает значение из запроса, setResponseHeader добавляет заголовок ответа. Имена headers нечувствительны к регистру, но в коде лучше придерживаться стандартных названий. Значения нужно проверять так же, как любой внешний ввод.',
    whyImportant:
      'На интервью headers связывают с auth, observability, caching и content negotiation. Непонимание headers приводит к небезопасной авторизации и плохой диагностике.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/me.get.ts',
      code: `export default defineEventHandler(async (event) => {
  const authorization = getHeader(event, 'authorization')

  if (!authorization?.startsWith('Bearer ')) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  return getCurrentUser(authorization.slice('Bearer '.length))
})`,
    },
    commonMistake:
      'Ошибка — читать token из query string вместо authorization header. Query часто попадает в логи, историю и analytics.',
    remember: 'Headers подходят для auth и протокольных метаданных, но их нужно валидировать.',
  }),
  createCard({
    questionId: 1021,
    title: 'Security options cookies',
    category: 'Security',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Security options cookies определяют, как cookie доступна браузеру и когда отправляется. Для session cookie особенно важны httpOnly, secure и sameSite. Эти флаги снижают риски XSS, перехвата и CSRF.',
    whenToUse:
      'Строгие options нужны для любой cookie, связанной с авторизацией или приватным состоянием. httpOnly ограничивает доступ из JavaScript, secure требует HTTPS, sameSite помогает контролировать cross-site отправку. Для production auth это базовая гигиена.',
    howItWorks:
      'setCookie добавляет Set-Cookie header с параметрами. Браузер затем применяет эти правила при хранении и отправке cookie. Неверные параметры могут либо сломать auth, либо сделать её уязвимой.',
    whyImportant:
      'На интервью cookie security часто отличает поверхностный опыт от production-опыта. Нужно уметь объяснить не только как поставить cookie, но и почему флаги важны.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/session.post.ts',
      code: `setCookie(event, 'session', sessionId, {
  httpOnly: true,
  secure: true,
  sameSite: 'lax',
  maxAge: 60 * 60 * 24 * 7,
  path: '/',
})`,
    },
    commonMistake:
      'Ошибка — хранить session token в cookie без httpOnly. Тогда XSS может прочитать токен из document.cookie.',
    remember: 'Session cookie без security flags — слабое место авторизации.',
  }),
  createCard({
    questionId: 1022,
    title: 'Caching API routes',
    category: 'Nitro Caching',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Caching API routes — сохранение ответа endpoint-а для повторного использования. В Nitro это может настраиваться через routeRules или другие механизмы кеширования. Кеш ускоряет ответы, но требует строгой политики.',
    whenToUse:
      'Кеш подходит для публичных, дорогих и относительно стабильных данных: каталог, справочники, публичные статьи. Персональные данные, auth-зависимые ответы и mutation endpoints обычно нельзя кешировать общим образом. Всегда нужно понимать invalidation.',
    howItWorks:
      'При подходящем cache rule Nitro или платформа может вернуть сохранённый ответ вместо повторного выполнения handler. Cache key, maxAge и условия зависят от настройки и runtime. Ошибка в ключе может смешать данные разных пользователей.',
    whyImportant:
      'Caching — performance-инструмент с security-рисками. На Senior-интервью важно говорить про private/public данные, HTTP methods, freshness и observability.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  routeRules: {
    '/api/public-posts': {
      cache: { maxAge: 300 },
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — включить кеш для endpoint-а, который зависит от cookie или authorization header, без user-specific стратегии.',
    remember: 'Кешировать можно только ответы, которые безопасно переиспользовать.',
  }),
  createCard({
    questionId: 1023,
    title: 'Node, serverless и edge',
    category: 'Nitro Deployment',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Node, serverless и edge — разные runtime-модели для серверного кода. Node даёт классический долгоживущий сервер, serverless запускает функции по запросу, edge выполняет код ближе к пользователю. Nitro умеет собираться под разные targets.',
    whenToUse:
      'Node часто выбирают для предсказуемого server runtime и совместимости с Node API. Serverless удобен для масштабирования по событиям, но имеет cold starts и ограничения состояния. Edge полезен для latency-sensitive задач, но обычно ограничивает доступные API.',
    howItWorks:
      'Nitro preset формирует output под выбранную среду. Код Server API должен учитывать, есть ли файловая система, как работает storage, какой доступен network/runtime API и как кешируются ответы. Нельзя проектировать endpoint без учёта деплоя.',
    whyImportant:
      'На Senior-уровне deployment target является архитектурным фактором. Он влияет на latency, стоимость, cold start, наблюдаемость и ограничения библиотек. Это не финальная кнопка после разработки, а часть дизайна.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  nitro: {
    preset: process.env.NITRO_PRESET ?? 'node-server',
  },
})`,
    },
    commonMistake:
      'Ошибка — писать endpoint с зависимостью от Node-only API, а затем пытаться запустить его на edge runtime.',
    remember: 'Runtime target влияет на архитектуру Server API.',
  }),
  createCard({
    questionId: 1024,
    title: 'Nitro storage',
    category: 'Nitro Storage',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Nitro storage — абстракция server-side хранения. Она позволяет работать с key-value storage через единый API и подбирать драйвер под deployment. Это удобно для cache, небольших runtime-данных и интеграций.',
    whenToUse:
      'Storage стоит рассмотреть для server-side cache, feature flags, временных данных и адаптируемого хранения между runtimes. Для основной транзакционной модели лучше использовать полноценную базу данных. Нужно понимать durability и driver limitations.',
    howItWorks:
      'useStorage возвращает storage instance, где можно читать и писать значения по ключам. Конкретный driver зависит от конфигурации Nitro. В serverless/edge окружениях поведение storage может отличаться от локального Node.',
    whyImportant:
      'На интервью storage проверяет понимание runtime abstractions. Важно не путать его с localStorage браузера и не использовать как замену базе данных без анализа требований.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/cache/popular.get.ts',
      code: `export default defineEventHandler(async () => {
  const storage = useStorage('cache')
  const cached = await storage.getItem('popular-products')

  if (cached) {
    return cached
  }

  const products = await fetchPopularProducts()
  await storage.setItem('popular-products', products)
  return products
})`,
    },
    commonMistake:
      'Ошибка — считать Nitro storage полноценной relational database. Для транзакций, связей и строгой консистентности нужен другой слой.',
    remember: 'Nitro storage — server-side abstraction, а не browser localStorage.',
  }),
  createCard({
    questionId: 1025,
    title: 'HTTP статус ошибок',
    category: 'Errors',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'HTTP status code сообщает клиенту результат запроса на уровне протокола. Ошибочный сценарий с 200 OK вводит клиентов и мониторинг в заблуждение. Server API должен возвращать честные статусы.',
    whenToUse:
      '401 нужен для отсутствующей/неверной авторизации, 403 — для запрета доступа, 404 — для отсутствующего ресурса, 400 — для неверного ввода. 500 оставляют для внутренних ошибок. Body может дополнять статус, но не заменять его.',
    howItWorks:
      'В Nuxt можно использовать createError или setResponseStatus. Клиентские fetch-обёртки и observability инструменты смотрят на status. Правильный status упрощает обработку ошибок и retry rules.',
    whyImportant:
      'На Middle+/Senior уровне API contract должен быть совместим с HTTP. Ответ { ok: false } со статусом 200 выглядит просто, но ломает ecosystem-инструменты.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/admin/stats.get.ts',
      code: `export default defineEventHandler(async (event) => {
  const user = await requireUser(event)

  if (user.role !== 'admin') {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  return getAdminStats()
})`,
    },
    commonMistake:
      'Ошибка — кодировать статус только в JSON-поле. HTTP already has a status mechanism, and clients expect it.',
    remember: 'Статус ответа — часть API-контракта, а не декоративная деталь.',
  }),
  createCard({
    questionId: 1026,
    title: 'Граница frontend/backend',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Граница frontend/backend определяет, где живёт бизнес-логика, данные, безопасность и интеграции. Nuxt Server API может быть BFF или умеренным backend-слоем, но не обязан заменять всю backend-систему. Решение зависит от масштаба и владения доменом.',
    whenToUse:
      'Server API хорошо подходит для adapter logic, proxy, auth glue, aggregation и frontend-specific endpoints. Сложная доменная логика, транзакции, права доступа на уровне организации и интеграции с несколькими системами часто требуют отдельного backend. Важно не смешивать зоны ответственности.',
    howItWorks:
      'Frontend вызывает Nuxt API, Nuxt API может обратиться к backend/domain layer, а backend владеет источником истины. В маленьких продуктах часть логики может жить в Nuxt, но границы должны быть осознанными. С ростом системы границы уточняются.',
    whyImportant:
      'Senior-интервью часто проверяет способность не превращать удобный инструмент в архитектурный монолит. Nuxt Server API силён, но его роль должна быть объяснена в контексте команды, данных и деплоя.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/orders/[id].get.ts',
      code: `export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const orderId = getRouterParam(event, 'id')

  return fetchOrderSummary({
    orderId: String(orderId),
    userId: user.id,
  })
})`,
    },
    commonMistake:
      'Ошибка — складывать всю доменную модель в Nuxt endpoint, потому что так быстрее на старте. Позже это усложняет масштабирование и ownership.',
    remember: 'Server API может быть BFF, но граница backend-домена должна быть осознанной.',
  }),
  createCard({
    questionId: 1027,
    title: 'Authorization header',
    category: 'Authorization',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Authorization header передаёт credentials для доступа к защищённому ресурсу. В Server API его часто читают через getHeader(event, "authorization"). Сервер должен проверить token до обращения к приватным данным.',
    whenToUse:
      'Bearer token в header подходит для API-клиентов, mobile apps и некоторых frontend/backend сценариев. Для browser sessions часто используют httpOnly cookies. Выбор механизма зависит от threat model и требований продукта.',
    howItWorks:
      'Endpoint читает header, проверяет формат Bearer, валидирует token и получает пользователя или claims. Только после этого выполняется бизнес-действие. При ошибке возвращается 401 или 403.',
    whyImportant:
      'На интервью важно не переносить auth-check на клиент. Клиентская проверка улучшает UX, но безопасность должна обеспечиваться сервером.',
    codeExample: {
      language: 'ts',
      filename: 'server/utils/require-user.ts',
      code: `export const requireUser = async (event: H3Event) => {
  const authorization = getHeader(event, 'authorization')

  if (!authorization?.startsWith('Bearer ')) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  return verifyAccessToken(authorization.slice(7))
}`,
    },
    commonMistake:
      'Ошибка — возвращать приватные данные, если клиентская страница уже скрыла кнопку. UI-состояние не является серверной авторизацией.',
    remember: 'Authorization нужно проверять на сервере до доступа к данным.',
  }),
  createCard({
    questionId: 1028,
    title: 'Контролируемые HTTP-ошибки',
    category: 'Errors',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Контролируемая HTTP-ошибка — ожидаемый failure mode, выраженный через statusCode и безопасное сообщение. createError позволяет описать такую ошибку явно. Это отличается от непредвиденной runtime exception.',
    whenToUse:
      'Контролируемые ошибки используют для invalid input, unauthorized, forbidden, not found, conflict и rate limit. Они помогают клиенту понять, как реагировать. Внутренние ошибки лучше не раскрывать клиенту в деталях.',
    howItWorks:
      'Handler бросает createError с statusCode. Nitro превращает её в response. Клиент получает статус, а сервер может логировать дополнительные детали отдельно.',
    whyImportant:
      'Хорошая error model делает API предсказуемым. На Senior-уровне важно разделять user-facing errors, operational errors и programming errors.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/profile.get.ts',
      code: `export default defineEventHandler(async (event) => {
  const user = await getOptionalUser(event)

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Login required' })
  }

  return user
})`,
    },
    commonMistake:
      'Ошибка — ловить любую ошибку и возвращать 200 с полем error. Это скрывает реальное состояние запроса.',
    remember: 'createError нужен для ожидаемых HTTP failure modes.',
  }),
  createCard({
    questionId: 1029,
    title: 'Private runtimeConfig',
    category: 'Security',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Private runtimeConfig — конфигурация, доступная серверному runtime, но не клиентскому bundle. Она нужна для API keys, service URLs, signing secrets и других чувствительных параметров. В Server API это основной механизм безопасного чтения environment values.',
    whenToUse:
      'Её используют при вызове внешних API, проверке webhook signatures, работе с платёжными провайдерами и internal services. Если значение нужно в браузере, оно должно быть не секретным и лежать в public. Граница должна быть явной.',
    howItWorks:
      'Значения объявляются в runtimeConfig и могут наполняться из environment variables. Server API вызывает useRuntimeConfig(event) и получает private fields. Клиентский код не должен иметь доступ к этим полям.',
    whyImportant:
      'Security boundary между сервером и клиентом — фундамент Server API. На Senior-интервью важно уметь объяснить, почему secret в public config равен утечке.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/payments/create.post.ts',
      code: `export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  return $fetch(\`\${config.paymentsApiUrl}/charges\`, {
    method: 'POST',
    headers: {
      authorization: \`Bearer \${config.paymentsSecret}\`,
    },
    body: await readBody(event),
  })
})`,
    },
    commonMistake:
      'Ошибка — хранить secret в public runtimeConfig или отдавать его endpoint-ом клиенту для удобства интеграции.',
    remember: 'Private runtimeConfig позволяет Server API использовать секреты без раскрытия браузеру.',
  }),
  createCard({
    questionId: 1030,
    title: 'Безопасный BFF proxy',
    category: 'BFF Architecture',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Безопасный BFF proxy — endpoint, который не просто пересылает запрос, а контролирует вход, доступ, внешний вызов и форму ответа. Он защищает internal contract от прямого exposure. Такой proxy является частью security architecture.',
    whenToUse:
      'Его используют для внешних сервисов с секретами, legacy API, агрегации данных и стабилизации frontend contract. Он особенно полезен, когда backend возвращает больше данных, чем нужно UI. Прозрачный proxy без фильтрации опасен.',
    howItWorks:
      'Endpoint allowlist-ит параметры, проверяет пользователя, вызывает внешний сервис с private credentials и мапит ответ. Ошибки внешнего сервиса нормализуются. Клиент видит только стабильную и безопасную модель.',
    whyImportant:
      'На Senior-уровне BFF proxy рассматривают как attack surface. Нужно думать о SSRF, header forwarding, leakage полей, rate limits и observability. Просто прокинуть всё дальше — недостаточно.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/billing/invoices.get.ts',
      code: `export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const config = useRuntimeConfig(event)

  const invoices = await $fetch<Invoice[]>(\`\${config.billingApiUrl}/invoices\`, {
    query: { customerId: user.billingCustomerId },
    headers: { authorization: \`Bearer \${config.billingApiToken}\` },
  })

  return invoices.map((invoice) => ({
    id: invoice.id,
    amount: invoice.amount,
    status: invoice.status,
  }))
})`,
    },
    commonMistake:
      'Ошибка — forward-ить все headers и query клиента во внешний API. Это расширяет attack surface и усложняет аудит.',
    remember: 'BFF proxy должен быть контролируемой границей, а не открытым туннелем.',
  }),
  createCard({
    questionId: 1031,
    title: 'Production error handling',
    category: 'Errors',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Production error handling — стратегия, которая разделяет пользовательские ошибки, операционные сбои и баги. Клиент получает безопасное сообщение и корректный статус. Сервер сохраняет подробности для диагностики.',
    whenToUse:
      'Такая стратегия нужна для всех публичных и внутренних endpoints. Особенно важны интеграции с внешними сервисами, платежи, авторизация и CRUD mutations. Ошибки должны быть наблюдаемыми, но не раскрывать секреты.',
    howItWorks:
      'Endpoint возвращает createError для ожидаемых ошибок, логирует unexpected errors с request id и не отдаёт stack trace клиенту. Error mapping может превращать ошибки внешних сервисов в стабильные статусы. Monitoring получает достаточно контекста.',
    whyImportant:
      'На Senior-интервью error handling связывают с безопасностью и эксплуатацией. Хороший API помогает быстро диагностировать инцидент и не раскрывает внутренности злоумышленнику.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/reports.post.ts',
      code: `export default defineEventHandler(async (event) => {
  try {
    return await createReport(await readBody(event))
  } catch (error) {
    console.error('report:create failed', {
      requestId: getHeader(event, 'x-request-id'),
      error,
    })

    throw createError({ statusCode: 502, statusMessage: 'Report service unavailable' })
  }
})`,
    },
    commonMistake:
      'Ошибка — отдавать клиенту raw error.message или stack trace внешней библиотеки. Это может раскрыть внутренние детали системы.',
    remember: 'Клиенту — безопасный статус и сообщение, серверу — подробный лог.',
  }),
  createCard({
    questionId: 1032,
    title: 'Deployment target как архитектурный фактор',
    category: 'Nitro Deployment',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Deployment target определяет, как Server API будет запускаться: долгоживущий Node process, serverless function, edge runtime или platform-specific preset. Это влияет на доступные API, cold start, latency, storage и observability.',
    whenToUse:
      'Думать о target нужно до принятия решений о state, cache, libraries и integrations. Edge может быть хорош для latency, но не для Node-only зависимостей. Serverless удобен для масштабирования, но требует учитывать cold starts и stateless design.',
    howItWorks:
      'Nitro собирает output под выбранную платформу. Runtime может ограничивать файловую систему, TCP-соединения, время выполнения или доступные Node modules. Server API должен быть совместим с этими ограничениями.',
    whyImportant:
      'Senior-разработчик не отделяет код от эксплуатации. Deployment target влияет на архитектуру так же сильно, как framework API. Ошибочный target может привести к нестабильности или дорогой инфраструктуре.',
    codeExample: {
      language: 'bash',
      filename: 'deployment-notes.sh',
      code: `# Before choosing a Nitro target, verify:
# - Node API compatibility
# - cold start tolerance
# - storage driver
# - cache strategy
# - observability support`,
    },
    commonMistake:
      'Ошибка — проектировать endpoint как stateful Node service, а затем деплоить его как stateless serverless functions.',
    remember: 'Nitro target нужно учитывать при проектировании Server API, а не после него.',
  }),
  createCard({
    questionId: 1033,
    title: 'Кеширование персональных данных',
    category: 'Nitro Caching',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Кеширование персональных данных — один из самых рискованных сценариев API caching. Endpoint вроде /api/me зависит от пользователя, cookie или authorization header. Общий кеш может перепутать пользователей.',
    whenToUse:
      'Персональные ответы обычно не кешируют публично. Если кеш нужен, он должен быть user-specific, с правильным ключом, TTL и invalidation. Иногда безопаснее отказаться от кеша и оптимизировать backend-запрос.',
    howItWorks:
      'Кеш должен учитывать identity: user id, session, tenant, permissions и freshness. routeRules без учёта пользователя может сохранить первый ответ и отдать его следующему запросу. Это становится утечкой данных.',
    whyImportant:
      'На Senior-интервью caching обсуждают вместе с privacy. Производительность не может быть важнее безопасности. Нужно уметь распознавать endpoints, которые нельзя кешировать общим способом.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  routeRules: {
    '/api/catalog/**': { cache: { maxAge: 120 } },
    // Avoid public shared cache for user-specific routes like /api/me.
  },
})`,
    },
    commonMistake:
      'Ошибка — добавить cache rule на /api/me или /api/account ради скорости. Это может раскрыть профиль одного пользователя другому.',
    remember: 'Персональные API-ответы нельзя кешировать как общий публичный ресурс.',
  }),
  createCard({
    questionId: 1034,
    title: 'Консистентность CRUD операций',
    category: 'Practice',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Консистентность CRUD операций означает, что связанные изменения данных не оставляют систему в противоречивом состоянии. В Server API это важно для заказов, платежей, бонусов, инвентаря и других multi-step workflows. Одна HTTP-команда может скрывать несколько действий.',
    whenToUse:
      'О консистентности нужно думать, когда endpoint выполняет больше одного изменения или вызывает несколько внешних сервисов. Требуются транзакции, idempotency keys, outbox pattern, compensating actions или явная стратегия retries. Выбор зависит от домена.',
    howItWorks:
      'Endpoint должен валидировать команду, проверить права, выполнить изменения в контролируемом порядке и обработать частичные сбои. Если база поддерживает транзакции, их стоит использовать для связанных записей. Для внешних сервисов нужны компенсации или idempotency.',
    whyImportant:
      'На Senior-уровне mutation endpoint — это не просто readBody плюс save. Нужно понимать отказоустойчивость и границы транзакций. Иначе Server API создаёт трудно диагностируемые расхождения данных.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/orders.post.ts',
      code: `export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const body = await readBody<CreateOrderBody>(event)
  const idempotencyKey = getHeader(event, 'idempotency-key')

  if (!idempotencyKey) {
    throw createError({ statusCode: 400, statusMessage: 'Missing idempotency key' })
  }

  return createOrderCommand({ userId: user.id, body, idempotencyKey })
})`,
    },
    commonMistake:
      'Ошибка — выполнить несколько изменений подряд без idempotency и стратегии отката. Повтор запроса может создать дубли или частично применённое состояние.',
    remember: 'Mutation endpoints требуют стратегии консистентности, а не только сохранения body.',
  }),
  createCard({
    questionId: 1035,
    title: 'Зрелый подход к Server API',
    category: 'Architecture',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Зрелый подход к Server API рассматривает endpoint как контролируемую server boundary. Он валидирует вход, проверяет доступ, защищает секреты, возвращает корректные статусы, логирует ошибки и учитывает Nitro runtime. Это engineering discipline, а не просто удобная папка.',
    whenToUse:
      'Такой подход нужен для всех production endpoints, особенно связанных с auth, внешними API, payments, CRUD и персональными данными. Даже небольшой endpoint должен иметь понятный контракт. Чем выше риск, тем строже требования.',
    howItWorks:
      'Handler остаётся тонким: получает request, вызывает validation/auth/service, мапит ответ и ошибки. Private runtimeConfig хранит секреты, createError описывает failure modes, routeRules применяются осторожно, deployment target учитывается заранее.',
    whyImportant:
      'На Senior-интервью ожидают системное мышление. Нужно связать Nuxt Server API, Nitro, security, BFF, caching и deployment в одну картину. Это показывает готовность проектировать, а не только писать handlers.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/secure-action.post.ts',
      code: `export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const body = await readValidatedActionBody(event)

  try {
    const result = await executeAction({ user, body })
    setResponseStatus(event, 201)
    return result
  } catch (error) {
    return mapDomainErrorToHttpError(error)
  }
})`,
    },
    commonMistake:
      'Ошибка — писать endpoints как набор быстрых скриптов без контракта, статусов, валидации и observability. Такой код быстро становится опасным.',
    remember: 'Production Server API — это безопасность, контракт, runtime и эксплуатация одновременно.',
  }),
]
