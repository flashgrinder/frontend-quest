import type { ContentAnswer, ContentQuestion, QuestionDifficulty, QuestionType } from '../../../types/content'

type AnswerId = 'a' | 'b' | 'c' | 'd'

interface QuestionSeed {
  id: number
  type: QuestionType
  difficulty: QuestionDifficulty
  tags: string[]
  question: string
  correct: string
  distractors: [string, string, string]
  explanation: string
  knowledgeId: string
}

const answerIds: AnswerId[] = ['a', 'b', 'c', 'd']

const createAnswers = (seed: QuestionSeed, correctAnswer: AnswerId): ContentAnswer[] => {
  let distractorIndex = 0

  return answerIds.map((id) => {
    if (id === correctAnswer) {
      return { id, text: seed.correct }
    }

    const text = seed.distractors[distractorIndex]
    distractorIndex += 1

    return { id, text }
  })
}

const createQuestion = (seed: QuestionSeed, index: number): ContentQuestion => {
  const correctAnswer = answerIds[index % answerIds.length]

  return {
    id: seed.id,
    moduleId: 'nuxt-data-fetching',
    type: seed.type,
    difficulty: seed.difficulty,
    tags: seed.tags,
    question: seed.question,
    answers: createAnswers(seed, correctAnswer),
    correctAnswer,
    explanation: seed.explanation,
    knowledgeId: seed.knowledgeId,
  }
}

const questionSeeds: QuestionSeed[] = [
  {
    id: 1501,
    type: 'Theory',
    difficulty: 'Junior',
    tags: ['useFetch', 'basics', 'ssr'],
    question: 'Для чего в Nuxt 3 чаще всего используют useFetch?',
    correct: 'Для SSR-aware HTTP-запроса с интеграцией в payload, pending/error/data и автоматическим ключом.',
    distractors: [
      'Для ручного изменения HTML после hydration.',
      'Для создания server/api endpoint из компонента.',
      'Для регистрации Pinia store при загрузке страницы.',
    ],
    explanation:
      'useFetch — высокоуровневый composable для HTTP-запросов в Nuxt. Он интегрирован с SSR и payload, поэтому данные могут быть получены до HTML и переиспользованы на клиенте. Остальные варианты описывают DOM-манипуляцию, Server API и Pinia, а не data fetching composable.',
    knowledgeId: 'nuxt-data-fetching-1501',
  },
  {
    id: 1502,
    type: 'Theory',
    difficulty: 'Junior',
    tags: ['useAsyncData', 'basics', 'data'],
    question: 'Когда useAsyncData обычно подходит лучше, чем useFetch?',
    correct: 'Когда данные получаются не простым URL-запросом, а через произвольную async-функцию или несколько источников.',
    distractors: [
      'Когда нужен простой HTTP-запрос по URL без дополнительной async-логики.',
      'Когда данные должны загружаться только после mount и не участвовать в SSR.',
      'Когда результат не должен иметь key, cache и refresh-механику Nuxt.',
    ],
    explanation:
      'useAsyncData принимает async handler и подходит для произвольной логики: repository call, агрегация нескольких запросов, вычисление server-side данных. useFetch удобнее для типичного HTTP-запроса по URL. Client-only загрузка, отсутствие key/cache и простые URL-запросы не являются главным преимуществом useAsyncData.',
    knowledgeId: 'nuxt-data-fetching-1502',
  },
  {
    id: 1503,
    type: 'CodeOutput',
    difficulty: 'Junior',
    tags: ['$fetch', 'server-api', 'client'],
    question: 'Что делает $fetch("/api/profile") в Nuxt?',
    correct: 'Выполняет HTTP-запрос и возвращает Promise с данными, но сам по себе не создаёт SSR payload state.',
    distractors: [
      'Создаёт useFetch key и автоматически сериализует результат в payload.',
      'Регистрирует route middleware для /api/profile.',
      'Создаёт компонент ProfilePage.vue.',
    ],
    explanation:
      '$fetch — низкоуровневый fetch wrapper Nuxt/ofetch. Он полезен внутри actions, server routes и handlers, но не даёт reactive pending/data/error и payload-кэш как useFetch/useAsyncData. Поэтому для page-level SSR data обычно выбирают composables Nuxt.',
    knowledgeId: 'nuxt-data-fetching-1503',
  },
  {
    id: 1504,
    type: 'Theory',
    difficulty: 'JuniorPlus',
    tags: ['lazy', 'useLazyFetch', 'useLazyAsyncData'],
    question: 'Что означает lazy-подход в useLazyFetch или useLazyAsyncData?',
    correct: 'Навигация не блокируется ожиданием данных, а UI должен обработать pending-состояние.',
    distractors: [
      'Запрос навсегда отключается.',
      'Данные всегда берутся только из localStorage.',
      'Nuxt перестаёт выполнять hydration.',
    ],
    explanation:
      'Lazy data fetching позволяет странице продолжить навигацию без ожидания завершения запроса. Это улучшает UX для второстепенных данных, но требует fallback или skeleton. Отключение запроса, localStorage и отказ от hydration не являются смыслом lazy.',
    knowledgeId: 'nuxt-data-fetching-1504',
  },
  {
    id: 1505,
    type: 'CodeOutput',
    difficulty: 'JuniorPlus',
    tags: ['server:false', 'csr', 'browser'],
    question: 'Что меняет опция server: false в useFetch?',
    correct: 'Запрос не выполняется на сервере и стартует только на клиенте.',
    distractors: [
      'Запрос выполняется только в server/api и никогда в компоненте.',
      'Данные автоматически становятся private runtimeConfig.',
      'Nuxt удаляет error handling для этого запроса.',
    ],
    explanation:
      'server: false переводит запрос в client-only режим. Это полезно для browser-specific данных или некритичных данных, которые не нужны в HTML. Опция не делает данные private, не переносит код в server/api и не отключает обработку ошибок.',
    knowledgeId: 'nuxt-data-fetching-1505',
  },
  {
    id: 1506,
    type: 'FindBug',
    difficulty: 'JuniorPlus',
    tags: ['double-request', '$fetch', 'useFetch'],
    question: 'Почему page делает двойной запрос, если в setup вызвать await $fetch("/api/products"), а затем тот же запрос в onMounted?',
    correct: 'Первый запрос выполняется при setup/SSR, второй запускается на клиенте после mounted.',
    distractors: [
      'Потому что Nuxt всегда дублирует все POST-запросы.',
      'Потому что useRouter автоматически повторяет $fetch.',
      'Потому что TypeScript компилирует Promise два раза.',
    ],
    explanation:
      'Двойной запрос часто появляется из-за смешения SSR-загрузки и клиентского onMounted-fetch. Если данные нужны для страницы, лучше использовать useFetch/useAsyncData и позволить Nuxt переиспользовать payload. Router и TypeScript не создают повторный HTTP-запрос сами по себе.',
    knowledgeId: 'nuxt-data-fetching-1506',
  },
  {
    id: 1507,
    type: 'BestPractice',
    difficulty: 'JuniorPlus',
    tags: ['key', 'cache', 'useAsyncData'],
    question: 'Каким должен быть key в useAsyncData для данных пользователя по id?',
    correct: 'Стабильным и зависящим от id, например `user-${id}`.',
    distractors: [
      'Случайным через Math.random(), чтобы избежать кэша.',
      'Одинаковым для всех пользователей, например `user`.',
      'Пустой строкой, чтобы Nuxt сам угадал сущность.',
    ],
    explanation:
      'Key идентифицирует данные в payload/cache. Если разные id используют один key, можно получить конфликт данных; если key случайный, кэш и dedupe теряют смысл. Хороший key стабилен и содержит параметры, влияющие на результат.',
    knowledgeId: 'nuxt-data-fetching-1507',
  },
  {
    id: 1508,
    type: 'Scenario',
    difficulty: 'JuniorPlus',
    tags: ['watch', 'query', 'refresh'],
    question: 'Фильтр category меняется, и список должен перезагрузиться. Какой подход уместен в useFetch?',
    correct: 'Передать reactive category в query/watch, чтобы Nuxt обновлял запрос при изменении зависимости.',
    distractors: [
      'Создать бесконечный setInterval для refresh.',
      'Вызывать location.reload после каждого изменения.',
      'Хранить category только в DOM dataset.',
    ],
    explanation:
      'useFetch умеет следить за реактивными зависимостями и обновлять запрос. Это лучше полной перезагрузки страницы или ручного интервала. DOM dataset не является источником состояния для Nuxt data fetching.',
    knowledgeId: 'nuxt-data-fetching-1508',
  },
  {
    id: 1509,
    type: 'CodeReview',
    difficulty: 'Middle',
    tags: ['dedupe', 'concurrency', 'requests'],
    question: 'На review видно несколько одинаковых refresh подряд. Что проверить в первую очередь?',
    correct: 'Настройки dedupe, watch-зависимости и причину повторных запусков одного запроса.',
    distractors: [
      'Цвет кнопки загрузки.',
      'Наличие scoped CSS у страницы.',
      'Количество slots в layout.',
    ],
    explanation:
      'Повторные refresh часто связаны с нестабильными зависимостями, несколькими источниками обновления или отсутствием dedupe-стратегии. Визуальные стили и slots не объясняют сетевое дублирование. На review нужно искать причину лишних HTTP-запросов.',
    knowledgeId: 'nuxt-data-fetching-1509',
  },
  {
    id: 1510,
    type: 'Architecture',
    difficulty: 'Middle',
    tags: ['repository-pattern', 'api-layer', 'architecture'],
    question: 'Зачем вводить repository layer поверх $fetch в Nuxt?',
    correct: 'Чтобы централизовать API-контракты, преобразование DTO, error handling и повторное использование запросов.',
    distractors: [
      'Чтобы запретить useFetch во всех страницах без исключений.',
      'Чтобы перенести CSS в server/api.',
      'Чтобы каждый запрос обязательно стал client-only.',
    ],
    explanation:
      'Repository layer помогает не размазывать URL, DTO mapping и обработку ошибок по компонентам. Он не запрещает Nuxt composables, а даёт им более чистый источник данных. CSS и client-only режим не являются архитектурной целью repository pattern.',
    knowledgeId: 'nuxt-data-fetching-1510',
  },
  {
    id: 1511,
    type: 'Interview',
    difficulty: 'Middle',
    tags: ['useFetch', 'useAsyncData', 'decision'],
    question: 'Как коротко объяснить выбор между useFetch и useAsyncData?',
    correct: 'useFetch удобен для HTTP по URL, useAsyncData — для произвольного async handler и агрегации.',
    distractors: [
      'useAsyncData нужен только для CSS.',
      'useFetch всегда запрещён при SSR.',
      'Оба composable работают только после onMounted.',
    ],
    explanation:
      'Оба composable SSR-aware, но решают разные уровни задач. useFetch — удобная обёртка для HTTP-запроса, useAsyncData — универсальный механизм для async-данных. Утверждения про CSS, запрет SSR и mounted-only неверны.',
    knowledgeId: 'nuxt-data-fetching-1511',
  },
  {
    id: 1512,
    type: 'Scenario',
    difficulty: 'Middle',
    tags: ['useLazyFetch', 'secondary-data', 'ux'],
    question: 'Ниже первого экрана есть блок рекомендаций. Что выбрать, чтобы не блокировать навигацию?',
    correct: 'useLazyFetch или useFetch с lazy: true и понятным pending UI.',
    distractors: [
      'await useFetch без lazy для всех второстепенных блоков.',
      'Синхронный XMLHttpRequest.',
      'Удаление pending-состояния из UI.',
    ],
    explanation:
      'Второстепенные данные не всегда должны блокировать route navigation. Lazy-загрузка позволяет быстрее показать основной контент, но UI должен обработать загрузку. Синхронные запросы и отсутствие pending ухудшают UX.',
    knowledgeId: 'nuxt-data-fetching-1512',
  },
  {
    id: 1513,
    type: 'CodeReview',
    difficulty: 'Middle',
    tags: ['wrong-key', 'cache-conflict'],
    question: 'Два useAsyncData с разными запросами используют key "data". Что может пойти не так?',
    correct: 'Кэш и payload могут связать разные данные с одним ключом и вернуть неверный результат.',
    distractors: [
      'Nuxt автоматически создаст два независимых ключа.',
      'TypeScript запретит строку "data".',
      'Запросы всегда станут POST.',
    ],
    explanation:
      'Одинаковый key для разных данных создаёт конфликт идентичности. Nuxt не знает, что под одной строкой скрываются разные запросы. Нужно выбирать key, который отражает сущность и параметры данных.',
    knowledgeId: 'nuxt-data-fetching-1513',
  },
  {
    id: 1514,
    type: 'Architecture',
    difficulty: 'Middle',
    tags: ['server-api', 'direct-request', 'bff'],
    question: 'Когда Server API лучше прямого запроса из useFetch к внешнему backend?',
    correct: 'Когда нужно скрыть секреты, адаптировать контракт, объединить данные или централизовать безопасность.',
    distractors: [
      'Когда нужно поменять цвет кнопки.',
      'Когда запрос полностью публичный и статичный.',
      'Когда нужно запретить SSR.',
    ],
    explanation:
      'Server API полезен как BFF boundary: он скрывает credentials, нормализует ответ, обрабатывает ошибки и может объединять несколько backend-источников. Для полностью публичного простого API прямой useFetch может быть достаточно. CSS и запрет SSR не являются причиной Server API.',
    knowledgeId: 'nuxt-data-fetching-1514',
  },
  {
    id: 1515,
    type: 'FindBug',
    difficulty: 'Middle',
    tags: ['infinite-refresh', 'watch', 'reactivity'],
    question: 'Почему useFetch может попасть в бесконечный refresh?',
    correct: 'watch-зависимость меняется внутри результата или handler изменяет источник, за которым сам наблюдает.',
    distractors: [
      'Потому что все GET-запросы в Nuxt бесконечны.',
      'Потому что key всегда должен быть пустым.',
      'Потому что pending нельзя показывать в template.',
    ],
    explanation:
      'Бесконечный refresh возникает из реактивного цикла: запрос меняет состояние, которое снова запускает запрос. Это архитектурная ошибка зависимостей. GET-метод, пустой key и pending UI не объясняют цикл.',
    knowledgeId: 'nuxt-data-fetching-1515',
  },
  {
    id: 1516,
    type: 'BestPractice',
    difficulty: 'Middle',
    tags: ['refresh', 'manual-reload'],
    question: 'Когда стоит использовать refresh(), возвращаемый useFetch/useAsyncData?',
    correct: 'Когда нужно явно повторить тот же запрос, например после пользовательского действия или изменения server state.',
    distractors: [
      'В каждом render, чтобы данные были свежими.',
      'Только для изменения CSS-переменных.',
      'Чтобы удалить key из payload навсегда.',
    ],
    explanation:
      'refresh вручную повторяет текущий запрос с теми же настройками. Он полезен после mutation или по кнопке обновления, но не должен вызываться в каждом render. CSS и удаление key не являются назначением refresh.',
    knowledgeId: 'nuxt-data-fetching-1516',
  },
  {
    id: 1517,
    type: 'CodeOutput',
    difficulty: 'Middle',
    tags: ['refreshNuxtData', 'global-refresh'],
    question: 'Что делает refreshNuxtData("products")?',
    correct: 'Инициирует обновление данных Nuxt, связанных с key "products".',
    distractors: [
      'Удаляет компонент ProductsView из DOM.',
      'Создаёт новый route с именем products.',
      'Превращает useFetch в обычный $fetch без состояния.',
    ],
    explanation:
      'refreshNuxtData позволяет обновить Nuxt data по ключу или все данные, если key не передан. Это удобно после mutation, когда нужно инвалидировать связанные async data. DOM, routes и превращение composable в $fetch здесь ни при чём.',
    knowledgeId: 'nuxt-data-fetching-1517',
  },
  {
    id: 1518,
    type: 'BestPractice',
    difficulty: 'Middle',
    tags: ['payload', 'security', 'performance'],
    question: 'Что важно помнить о payload при SSR data fetching?',
    correct: 'Payload уходит клиенту, поэтому данные должны быть безопасными и не слишком большими.',
    distractors: [
      'Payload виден только TypeScript-компилятору.',
      'Payload автоматически шифрует любые секреты.',
      'Payload существует только для CSS-файлов.',
    ],
    explanation:
      'Nuxt payload переносит SSR-данные на клиент для hydration. Всё, что туда попало, нужно считать доступным браузеру, а большой payload ухудшает загрузку и parsing. TypeScript, шифрование и CSS не описывают реальную роль payload.',
    knowledgeId: 'nuxt-data-fetching-1518',
  },
  {
    id: 1519,
    type: 'Scenario',
    difficulty: 'Middle',
    tags: ['clearNuxtData', 'logout', 'cache'],
    question: 'После logout нужно очистить user-specific async data. Что может помочь?',
    correct: 'clearNuxtData для соответствующих ключей плюс сброс client state.',
    distractors: [
      'Оставить payload как есть, потому что logout сам очистит кэш.',
      'Изменить только цвет кнопки logout.',
      'Заменить все запросы на setTimeout.',
    ],
    explanation:
      'После logout важно удалить пользовательские данные из client cache и state. clearNuxtData помогает очистить Nuxt async data по ключам, но часто нужен и сброс store. UI-стили и таймеры не решают проблему приватных данных.',
    knowledgeId: 'nuxt-data-fetching-1519',
  },
  {
    id: 1520,
    type: 'Interview',
    difficulty: 'MiddlePlus',
    tags: ['createError', 'showError', 'errors'],
    question: 'Чем отличаются createError и showError в Nuxt-контексте?',
    correct: 'createError создаёт ошибку, которую можно бросить, а showError программно показывает error state.',
    distractors: [
      'Оба метода нужны только для CSS validation.',
      'showError выполняет HTTP-запрос быстрее useFetch.',
      'createError удаляет payload и route history.',
    ],
    explanation:
      'createError используют для создания Nuxt/H3 ошибки с statusCode и сообщением; её можно throw-нуть в server или page context. showError устанавливает глобальное error state на клиенте/в Nuxt app. Эти API не связаны с ускорением запросов или CSS.',
    knowledgeId: 'nuxt-data-fetching-1520',
  },
  {
    id: 1521,
    type: 'CodeReview',
    difficulty: 'MiddlePlus',
    tags: ['http-errors', 'status', 'error-handling'],
    question: 'На review useFetch игнорирует error.value и всегда показывает пустой список. Что не так?',
    correct: 'HTTP-ошибка маскируется как успешное пустое состояние, пользователь и мониторинг теряют сигнал о проблеме.',
    distractors: [
      'Пустой список всегда лучше ошибки.',
      'Nuxt запрещает показывать error state.',
      'useFetch не возвращает error.',
    ],
    explanation:
      'Ошибка запроса должна иметь отдельное состояние: retry, message, fallback или status page. Если заменить любую ошибку пустым списком, UI вводит пользователя в заблуждение. useFetch возвращает error, и Nuxt не запрещает его обрабатывать.',
    knowledgeId: 'nuxt-data-fetching-1521',
  },
  {
    id: 1522,
    type: 'Architecture',
    difficulty: 'MiddlePlus',
    tags: ['error-boundaries', 'nuxt-error', 'ux'],
    question: 'Зачем продумывать error boundary для data fetching?',
    correct: 'Чтобы сбой данных не ломал весь интерфейс и имел понятный UX recovery.',
    distractors: [
      'Чтобы отключить HTTP status codes.',
      'Чтобы скрыть все ошибки от логирования.',
      'Чтобы useFetch выполнялся только в CSS.',
    ],
    explanation:
      'Data fetching ошибки должны иметь границы влияния: иногда падает вся page, иногда только виджет. Error boundary и fallback помогают сохранить управляемый UX. Отключение статусов, скрытие логов и CSS не решают recovery.',
    knowledgeId: 'nuxt-data-fetching-1522',
  },
  {
    id: 1523,
    type: 'BestPractice',
    difficulty: 'MiddlePlus',
    tags: ['parallel', 'performance', 'Promise.all'],
    question: 'Как уменьшить waterfall requests, если два SSR-запроса независимы?',
    correct: 'Запустить их параллельно, например через Promise.all внутри useAsyncData или двумя независимыми awaited composables.',
    distractors: [
      'Всегда делать второй запрос только после mounted.',
      'Добавить случайную задержку между запросами.',
      'Перенести оба результата в CSS variables.',
    ],
    explanation:
      'Если запросы независимы, последовательное ожидание создаёт waterfall и увеличивает TTFB. Параллельный запуск сокращает суммарное время ожидания. mounted, задержки и CSS не улучшают серверную загрузку данных.',
    knowledgeId: 'nuxt-data-fetching-1523',
  },
  {
    id: 1524,
    type: 'Scenario',
    difficulty: 'MiddlePlus',
    tags: ['waterfall', 'dependent-requests', 'performance'],
    question: 'Когда waterfall requests всё же оправдан?',
    correct: 'Когда второй запрос действительно зависит от результата первого, например нужен id из первого ответа.',
    distractors: [
      'Когда запросы независимы и оба нужны сразу.',
      'Когда нужно искусственно замедлить FCP.',
      'Когда useFetch возвращает pending.',
    ],
    explanation:
      'Waterfall вреден для независимых запросов, но неизбежен при реальной зависимости данных. Если второй endpoint требует id из первого ответа, запросы нельзя полностью распараллелить. Pending сам по себе не является причиной waterfall.',
    knowledgeId: 'nuxt-data-fetching-1524',
  },
  {
    id: 1525,
    type: 'Interview',
    difficulty: 'MiddlePlus',
    tags: ['prefetch', 'navigation', 'performance'],
    question: 'Что важно учитывать при prefetch данных перед переходом?',
    correct: 'Вероятность перехода, размер данных, сеть пользователя и риск загрузить ненужные ресурсы.',
    distractors: [
      'Prefetch всегда бесплатен и не требует стратегии.',
      'Prefetch нужен только для картинок.',
      'Prefetch отключает hydration.',
    ],
    explanation:
      'Prefetch может ускорить следующий экран, но расходует network, cache и CPU. Хорошая стратегия учитывает вероятность действия пользователя и стоимость данных. Он не бесплатен, не ограничен картинками и не отключает hydration.',
    knowledgeId: 'nuxt-data-fetching-1525',
  },
  {
    id: 1526,
    type: 'CodeOutput',
    difficulty: 'MiddlePlus',
    tags: ['immediate:false', 'execute', 'manual'],
    question: 'Что означает immediate: false в useFetch?',
    correct: 'Запрос не стартует сразу; его нужно запустить вручную через execute/refresh.',
    distractors: [
      'Запрос выполнится два раза на сервере.',
      'Nuxt удалит key из payload.',
      'error.value станет недоступен.',
    ],
    explanation:
      'immediate: false полезен, когда запрос должен стартовать после действия пользователя или готовности параметров. Composable всё ещё возвращает data/pending/error и методы запуска. Опция не удаляет key и не ломает error state.',
    knowledgeId: 'nuxt-data-fetching-1526',
  },
  {
    id: 1527,
    type: 'Architecture',
    difficulty: 'Senior',
    tags: ['composables', 'repository', 'reuse'],
    question: 'Какую роль может играть composable поверх useFetch?',
    correct: 'Скрывать детали endpoint, типы, transform, error mapping и возвращать понятный API для UI.',
    distractors: [
      'Заменять все server routes CSS-файлами.',
      'Хранить секреты клиента в payload.',
      'Запрещать SSR для всех запросов.',
    ],
    explanation:
      'Composable поверх useFetch помогает переиспользовать контракт данных и не размазывать параметры запроса по страницам. Он может быть частью repository или feature API. Секреты, CSS и тотальный запрет SSR не являются его назначением.',
    knowledgeId: 'nuxt-data-fetching-1527',
  },
  {
    id: 1528,
    type: 'CodeReview',
    difficulty: 'Senior',
    tags: ['$fetch', 'ssr', 'payload'],
    question: 'На SSR-странице данные загружаются через await $fetch в setup. Что стоит обсудить?',
    correct: 'Нужен ли useAsyncData/useFetch, чтобы результат попал в payload и не запрашивался повторно на клиенте.',
    distractors: [
      'Нужно ли заменить HTTP на CSS import.',
      'Почему TypeScript не удалил запрос.',
      'Нужно ли всегда использовать server: false.',
    ],
    explanation:
      '$fetch сам по себе не создаёт Nuxt async data state. На SSR-странице это может привести к повторному запросу или отсутствию pending/error модели. useFetch/useAsyncData лучше подходят для page-level data с payload.',
    knowledgeId: 'nuxt-data-fetching-1528',
  },
  {
    id: 1529,
    type: 'FindBug',
    difficulty: 'Senior',
    tags: ['hydration-mismatch', 'random', 'date'],
    question: 'Почему Date.now() внутри useAsyncData handler может вызвать проблемы?',
    correct: 'Если значение влияет на SSR-разметку и отличается на клиенте, возможен mismatch или нестабильный payload.',
    distractors: [
      'Date.now() запрещён TypeScript в Nuxt.',
      'useAsyncData не умеет возвращать числа.',
      'Nuxt всегда заменяет дату на CSS-переменную.',
    ],
    explanation:
      'SSR требует детерминированности данных, которые участвуют в HTML. Время, random и browser-specific значения могут отличаться между сервером и клиентом. TypeScript и CSS не решают эту проблему.',
    knowledgeId: 'nuxt-data-fetching-1529',
  },
  {
    id: 1530,
    type: 'Scenario',
    difficulty: 'Senior',
    tags: ['lazy:true', 'critical-data', 'ux'],
    question: 'Для hero-контента, важного для SEO и LCP, предлагают lazy: true. Что ответить?',
    correct: 'Критичные данные первого экрана обычно не стоит делать lazy, если они нужны для HTML и SEO.',
    distractors: [
      'lazy: true всегда ускоряет SEO.',
      'Нужно заменить hero-контент на пустой div.',
      'Следует перенести весь fetch в setInterval.',
    ],
    explanation:
      'lazy улучшает навигацию для второстепенных данных, но критичный first-screen контент часто должен быть в SSR HTML. Иначе страница может получить хуже SEO, LCP и perceived completeness. Оптимизация должна учитывать важность данных.',
    knowledgeId: 'nuxt-data-fetching-1530',
  },
  {
    id: 1531,
    type: 'Interview',
    difficulty: 'Senior',
    tags: ['dedupe', 'concurrency', 'senior'],
    question: 'Что проверяет вопрос про dedupe в Nuxt data fetching?',
    correct: 'Понимание конкурентных одинаковых запросов и стратегии cancel/defer для повторного запуска.',
    distractors: [
      'Знание CSS specificity.',
      'Способность отключить TypeScript.',
      'Умение создать Pinia getter.',
    ],
    explanation:
      'dedupe связан с конкурентными запросами одного key: нужно решить, отменять предыдущий или не запускать новый. Это влияет на нагрузку, consistency и UX. CSS, TypeScript и Pinia getter не описывают проблему HTTP-дедупликации.',
    knowledgeId: 'nuxt-data-fetching-1531',
  },
  {
    id: 1532,
    type: 'Architecture',
    difficulty: 'Senior',
    tags: ['invalidation', 'cache', 'mutation'],
    question: 'После POST /api/products список products должен обновиться. Что важно спроектировать?',
    correct: 'Инвалидацию связанных ключей данных через refreshNuxtData/clearNuxtData или локальное обновление кэша.',
    distractors: [
      'Только новый цвет success toast.',
      'Удаление всех server routes.',
      'Запрет query parameters.',
    ],
    explanation:
      'После mutation cached list может стать устаревшим. Нужно решить, обновлять ли список повторным запросом, локально применить изменение или очистить кэш. UI toast полезен, но не решает consistency данных.',
    knowledgeId: 'nuxt-data-fetching-1532',
  },
  {
    id: 1533,
    type: 'CodeReview',
    difficulty: 'Senior',
    tags: ['watch', 'unnecessary-fetch', 'reactivity'],
    question: 'В компоненте watch(search, () => refresh()) хотя search уже передан в query useFetch. Что сказать на review?',
    correct: 'Вероятно, refresh дублирует встроенное reactive обновление и может создавать лишние запросы.',
    distractors: [
      'Такой watch обязателен для всех query parameters.',
      'Нужно добавить ещё один watch на pending.',
      'useFetch не умеет следить за query.',
    ],
    explanation:
      'Если reactive значение уже участвует в useFetch query/watch, дополнительный watch может создать дублирование. Нужно проверить зависимости и оставить один источник обновления. Больше watchers обычно не делают data flow понятнее.',
    knowledgeId: 'nuxt-data-fetching-1533',
  },
  {
    id: 1534,
    type: 'FindBug',
    difficulty: 'Senior',
    tags: ['client-server', 'cookies', 'headers'],
    question: 'Почему одинаковый $fetch может давать разные результаты на сервере и клиенте?',
    correct: 'Разные окружения имеют разные cookies, headers, baseURL и доступ к runtime context.',
    distractors: [
      'Потому что JavaScript на сервере не поддерживает Promise.',
      'Потому что клиент всегда использует PHP.',
      'Потому что useFetch отключает HTTP headers.',
    ],
    explanation:
      'Server-side запрос выполняется в контексте Nitro/Node/edge и может иметь server headers, private runtimeConfig или другой baseURL. Client-side запрос идёт из браузера с его cookies и CORS-ограничениями. Это важно учитывать при проектировании API layer.',
    knowledgeId: 'nuxt-data-fetching-1534',
  },
  {
    id: 1535,
    type: 'Interview',
    difficulty: 'Senior',
    tags: ['senior', 'tradeoffs', 'architecture'],
    question: 'Какой senior-подход к Nuxt data fetching наиболее зрелый?',
    correct: 'Выбирать механизм по критичности данных, SSR-ценности, кэшированию, безопасности и UX, а не использовать один API всегда.',
    distractors: [
      'Всегда использовать только $fetch на всех страницах.',
      'Всегда ставить lazy: true для любых данных.',
      'Всегда отключать SSR через server: false.',
    ],
    explanation:
      'Зрелый подход учитывает trade-offs: useFetch, useAsyncData, $fetch, Server API, lazy, cache и error strategy решают разные задачи. Универсальное правило для всех запросов приводит к лишним запросам, плохому SEO или утечкам данных. Senior-ответ должен начинаться с требований данных.',
    knowledgeId: 'nuxt-data-fetching-1535',
  },
]

export const nuxtDataFetchingQuestions: ContentQuestion[] = questionSeeds.map(createQuestion)
