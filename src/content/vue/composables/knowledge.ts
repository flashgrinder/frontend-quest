import type { ContentKnowledgeCard } from '../../../types/content'

const createInterviewQuestions = (title: string, category: string): string[] => [
  `Какие задачи решает ${title} в теме ${category} (Composables)?`,
  `Какие ограничения ${title} важно учитывать в контексте Composables?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

export const composablesKnowledgeCards: ContentKnowledgeCard[] = [
  {
    id: 'knowledge-composables-q701',
    moduleId: 'composables',
    questionId: 701,
    title: 'Composable во Vue',
    category: 'Composables',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Composable — функция, которая инкапсулирует переиспользуемую логику Composition API. Она может содержать ref, reactive, computed, watch, lifecycle hooks и обычные методы. В отличие от компонента, composable не отвечает за template.',
    whenToUse:
      'Composable используют, когда один и тот же сценарий нужен в нескольких компонентах или когда компонент стал перегружен логикой. Хорошие кандидаты — работа с window size, localStorage, fetch, timers, forms и UI-state. Для короткой локальной логики новый файл может быть лишним.',
    howItWorks:
      'Composable вызывается внутри setup или другого composable. Он создаёт или принимает reactive sources и возвращает публичный API. Каждый вызов может создавать новый state или возвращать shared state, если state объявлен вне функции.',
    whyImportant:
      'Composables — главный инструмент переиспользования логики во Vue 3. На интервью важно объяснить не только синтаксис, но и границы ответственности: логика отдельно, UI отдельно.',
    codeExample: {
      language: 'ts',
      filename: 'useCounter.ts',
      code: `export const useCounter = () => {
  const count = ref(0)
  const increment = () => { count.value += 1 }

  return { count, increment }
}`,
    },
    commonMistake:
      'Ошибка — называть composable любую функцию. Если функция не использует reactive state, lifecycle или Vue-контекст, возможно это обычный util.',
    interviewQuestions: createInterviewQuestions("Composable во Vue", "Composables"),
    remember:
      'Composable переиспользует логику Composition API, а не разметку.',
  },
  {
    id: 'knowledge-composables-q702',
    moduleId: 'composables',
    questionId: 702,
    title: 'Зачем выносить логику',
    category: 'Architecture',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Вынос логики в composable — способ уменьшить размер компонента и выделить самостоятельный сценарий. Компонент остаётся ближе к UI, а composable отвечает за состояние и операции. Это улучшает читаемость и повторное использование.',
    whenToUse:
      'Вынос полезен при повторении логики, большом setup, сложных side effects или необходимости тестировать сценарий отдельно. Если логика встречается один раз, но сильно шумит в компоненте, composable тоже может быть оправдан. Если логика короткая и очевидная, лучше не усложнять.',
    howItWorks:
      'Связанное состояние, computed, watchers и методы переносят в функцию. Компонент вызывает эту функцию и получает готовый API. Потребитель не должен знать внутренние детали реализации.',
    whyImportant:
      'На интервью этот вопрос показывает архитектурное мышление. Сильный ответ говорит о связности, ответственности и тестируемости, а не только о сокращении количества строк.',
    codeExample: {
      language: 'vue',
      filename: 'UserSearch.vue',
      code: `<script setup lang="ts">
const { query, results, search } = useUserSearch()
</script>`,
    },
    commonMistake:
      'Ошибка — выносить каждое значение в отдельный composable. Слишком мелкие абстракции заставляют читать больше файлов без пользы.',
    interviewQuestions: createInterviewQuestions("Зачем выносить логику", "Architecture"),
    remember:
      'Composable должен уменьшать реальную сложность, а не просто перемещать код.',
  },
  {
    id: 'knowledge-composables-q703',
    moduleId: 'composables',
    questionId: 703,
    title: 'Naming convention useSomething',
    category: 'Naming',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'Префикс use — соглашение для функций, которые используют Composition API. Он помогает быстро отличать composables от обычных utility-функций. Например, useWindowSize, useFetch, useForm.',
    whenToUse:
      'Префикс уместен, если функция работает с reactive state, lifecycle, watchers или composable-контекстом. Для чистой функции форматирования имени use обычно не нужен. Имена должны отражать сценарий, а не внутреннюю реализацию.',
    howItWorks:
      'Vue compiler не требует префикс use. Это договорённость команды и экосистемы. Редакторы, документация и разработчики легче распознают composables по такому имени.',
    whyImportant:
      'На интервью это показывает знание conventions. Соглашения не обязательны технически, но сильно помогают масштабировать кодовую базу.',
    codeExample: {
      language: 'ts',
      filename: 'naming.ts',
      code: `const { width, height } = useWindowSize()
const formatted = formatCurrency(price)`,
    },
    commonMistake:
      'Ошибка — использовать use для любой функции. Это размывает смысл соглашения и усложняет навигацию по коду.',
    interviewQuestions: createInterviewQuestions("Naming convention useSomething", "Naming"),
    remember:
      'useSomething сигнализирует о composable, а не является требованием компилятора.',
  },
  {
    id: 'knowledge-composables-q704',
    moduleId: 'composables',
    questionId: 704,
    title: 'ref и reactive внутри composable',
    category: 'Reactivity',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Composable может создавать reactive state так же, как компонент. ref подходит для отдельных значений, reactive — для связанных объектов. Важно понимать, где именно создаётся state: внутри функции или на уровне модуля.',
    whenToUse:
      'ref удобно использовать для loading, error, selectedId, query, isOpen. reactive подходит для формы или набора связанных полей. Если состояние должно быть независимым для каждого вызова, создавай его внутри composable.',
    howItWorks:
      'При вызове composable выполняется тело функции и создаются refs. Эти refs возвращаются потребителю. Если ref объявлен вне функции, он создаётся один раз при импорте модуля и становится shared state.',
    whyImportant:
      'На интервью важно объяснить difference между factory state и singleton state. Многие bugs composables связаны именно с неожиданно общим состоянием.',
    codeExample: {
      language: 'ts',
      filename: 'useFormState.ts',
      code: `export const useFormState = () => {
  const form = reactive({ email: '', password: '' })
  const isValid = computed(() => form.email.includes('@'))

  return { form, isValid }
}`,
    },
    commonMistake:
      'Ошибка — создавать state вне функции, когда каждому компоненту нужен независимый экземпляр.',
    interviewQuestions: createInterviewQuestions("ref и reactive внутри composable", "Reactivity"),
    remember:
      'Место объявления reactive state определяет, будет он локальным для вызова или общим.',
  },
  {
    id: 'knowledge-composables-q705',
    moduleId: 'composables',
    questionId: 705,
    title: 'Return API composable',
    category: 'API Design',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Return API composable — набор значений и методов, которые получает потребитель. Обычно это refs, computed и функции действий. Возвращать стоит только то, что является частью публичного контракта.',
    whenToUse:
      'Если компоненту нужно читать состояние, верни state или readonly state. Если компонент должен менять состояние, верни методы команд: open, close, reset, execute. Не стоит возвращать внутренние временные refs без необходимости.',
    howItWorks:
      'Composable формирует объект результата. Потребитель деструктурирует его в setup. Имена возвращаемых полей становятся API, поэтому они должны быть стабильными и понятными.',
    whyImportant:
      'Хороший return API делает composable простым для использования и тестирования. На интервью это связано с проектированием маленьких typed interfaces.',
    codeExample: {
      language: 'ts',
      filename: 'useDisclosure.ts',
      code: `export const useDisclosure = () => {
  const isOpen = ref(false)
  const open = () => { isOpen.value = true }
  const close = () => { isOpen.value = false }

  return { isOpen, open, close }
}`,
    },
    commonMistake:
      'Ошибка — возвращать всё внутреннее состояние. Это раскрывает реализацию и усложняет будущий рефакторинг.',
    interviewQuestions: createInterviewQuestions("Return API composable", "API Design"),
    remember:
      'Return API должен быть минимальным, понятным и стабильным.',
  },
  {
    id: 'knowledge-composables-q706',
    moduleId: 'composables',
    questionId: 706,
    title: 'Singleton state и factory state',
    category: 'State',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Singleton state создаётся один раз и разделяется между всеми вызовами composable. Factory state создаётся внутри функции и поэтому новый для каждого вызова. Оба подхода корректны, если выбраны осознанно.',
    whenToUse:
      'Factory state подходит для форм, dropdown, modal, counters и локальных UI-сценариев. Singleton state подходит для легковесного shared состояния: viewport, theme, online status. Для сложного глобального состояния часто лучше Pinia.',
    howItWorks:
      'Top-level ref создаётся при импорте модуля. Ref внутри функции создаётся при каждом вызове composable. Это обычное поведение JavaScript-модулей, а не особая магия Vue.',
    whyImportant:
      'На интервью этот вопрос часто выявляет практический опыт. Неожиданно общий state может привести к тому, что разные компоненты будут влиять друг на друга.',
    codeExample: {
      language: 'ts',
      filename: 'state-scope.ts',
      code: `const sharedCount = ref(0)

export const useSharedCounter = () => ({ sharedCount })

export const useLocalCounter = () => {
  const count = ref(0)
  return { count }
}`,
    },
    commonMistake:
      'Ошибка — объявить состояние на уровне модуля ради удобства и случайно сделать его общим для всех потребителей.',
    interviewQuestions: createInterviewQuestions("Singleton state и factory state", "State"),
    remember:
      'State вне composable function является shared state.',
  },
  {
    id: 'knowledge-composables-q707',
    moduleId: 'composables',
    questionId: 707,
    title: 'Shared composables',
    category: 'State',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Shared composable — composable, который намеренно возвращает общее состояние. Он может быть проще store, если сценарий маленький и не требует devtools, actions history или сложной бизнес-логики. Важно явно понимать, что state общий.',
    whenToUse:
      'Shared composables подходят для viewport, media query, theme flag, online status и простых глобальных флагов. Если состояние имеет сложные mutations, persistence, связи между сущностями или важно для многих экранов, Pinia обычно лучше.',
    howItWorks:
      'State объявляется на уровне модуля, а composable возвращает ссылки на него. Все потребители получают одну и ту же reactive ссылку. Изменение в одном месте видно в другом.',
    whyImportant:
      'На интервью важно показать, что shared composable — осознанный architecture choice, а не случайный side effect.',
    codeExample: {
      language: 'ts',
      filename: 'useThemeMode.ts',
      code: `const theme = ref<'light' | 'dark'>('dark')

export const useThemeMode = () => {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggleTheme }
}`,
    },
    commonMistake:
      'Ошибка — использовать shared composable для состояния, которое должно быть независимым в каждом компоненте.',
    interviewQuestions: createInterviewQuestions("Shared composables", "State"),
    remember:
      'Shared composable разделяет state между всеми потребителями.',
  },
  {
    id: 'knowledge-composables-q708',
    moduleId: 'composables',
    questionId: 708,
    title: 'Cleanup внутри composable',
    category: 'Cleanup',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Cleanup внутри composable — очистка ресурсов, которые composable создал сам. Это listeners, timers, observers, subscriptions и async effects. Хороший composable не перекладывает знание своих внутренних ресурсов на потребителя.',
    whenToUse:
      'Cleanup нужен каждый раз, когда composable работает с внешним API, который не управляется Vue автоматически. Если composable добавляет window listener, он должен удалить его. Если запускает interval, он должен остановить его.',
    howItWorks:
      'Composable регистрирует onUnmounted, onScopeDispose или watcher cleanup. Когда компонент или effect scope уничтожается, cleanup выполняется. Так ресурсы не переживают своего владельца.',
    whyImportant:
      'На интервью cleanup показывает практический уровень. Переиспользуемая функция без cleanup может создавать утечки в каждом компоненте, где её вызвали.',
    codeExample: {
      language: 'ts',
      filename: 'useInterval.ts',
      code: `export const useInterval = (callback: () => void, delay: number) => {
  const id = window.setInterval(callback, delay)
  onUnmounted(() => window.clearInterval(id))
}`,
    },
    commonMistake:
      'Ошибка — добавить listener в composable и не удалить его. При повторном mount обработчики будут накапливаться.',
    interviewQuestions: createInterviewQuestions("Cleanup внутри composable", "Cleanup"),
    remember:
      'Composable должен очищать ресурсы, которыми владеет.',
  },
  {
    id: 'knowledge-composables-q709',
    moduleId: 'composables',
    questionId: 709,
    title: 'Lifecycle hooks внутри composable',
    category: 'Lifecycle',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Lifecycle hooks можно регистрировать внутри composable, если функция вызывается во время setup компонента. Такие hooks привязываются к текущему компонентному экземпляру. Это позволяет инкапсулировать mount/unmount логику.',
    whenToUse:
      'onMounted внутри composable нужен для client-only APIs, DOM, window/document и внешних библиотек. onUnmounted нужен для cleanup. Если composable должен работать вне компонентов, стоит рассмотреть effectScope или явные start/stop методы.',
    howItWorks:
      'Vue хранит текущий component instance во время setup. Когда composable вызывает hook, Vue регистрирует callback на этот instance. Вызов hook вне setup-контекста приведёт к предупреждению или некорректному поведению.',
    whyImportant:
      'На интервью важно объяснить, почему composable с lifecycle должен вызываться в setup. Это помогает избежать скрытых ошибок при вызове функций в произвольных местах.',
    codeExample: {
      language: 'ts',
      filename: 'useMountedFlag.ts',
      code: `export const useMountedFlag = () => {
  const isMounted = ref(false)
  onMounted(() => { isMounted.value = true })
  onUnmounted(() => { isMounted.value = false })

  return { isMounted }
}`,
    },
    commonMistake:
      'Ошибка — вызывать composable с lifecycle hook из обычного event callback после setup. Hook должен регистрироваться синхронно во время setup.',
    interviewQuestions: createInterviewQuestions("Lifecycle hooks внутри composable", "Lifecycle"),
    remember:
      'Lifecycle в composable привязан к компоненту, который вызвал composable в setup.',
  },
  {
    id: 'knowledge-composables-q710',
    moduleId: 'composables',
    questionId: 710,
    title: 'watch и watchEffect внутри composable',
    category: 'Watchers',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'watch и watchEffect внутри composable позволяют реагировать на reactive sources и выполнять side effects. Это полезно для синхронизации, запросов, persistence и интеграций. Они должны иметь понятный источник и cleanup при необходимости.',
    whenToUse:
      'watch подходит, когда нужно следить за конкретным источником и получать old value. watchEffect удобен, когда зависимости естественно читаются в теле эффекта. Для чистого derived state лучше computed.',
    howItWorks:
      'Watcher создаётся в effect scope текущего компонента. При unmount он останавливается автоматически. Если watcher создаёт async effect или listener, внутри callback нужен cleanup.',
    whyImportant:
      'На интервью это показывает понимание side effects. Watchers внутри composables могут быть мощными, но скрытые watchers усложняют debugging, если API плохо спроектирован.',
    codeExample: {
      language: 'ts',
      filename: 'useSyncedStorage.ts',
      code: `export const useSyncedStorage = (key: string, value: Ref<string>) => {
  watch(value, (nextValue) => {
    localStorage.setItem(key, nextValue)
  })
}`,
    },
    commonMistake:
      'Ошибка — создавать watcher без cleanup для async effects. Старые операции могут перезаписать новые результаты.',
    interviewQuestions: createInterviewQuestions("watch и watchEffect внутри composable", "Watchers"),
    remember:
      'watch в composable должен иметь ясный side effect и понятный lifecycle.',
  },
  {
    id: 'knowledge-composables-q711',
    moduleId: 'composables',
    questionId: 711,
    title: 'Dependency injection через аргументы',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Dependency injection через аргументы означает, что composable получает зависимости параметрами. Это может быть fetcher, storage adapter, clock function, logger или external API. Такой подход уменьшает скрытую связность.',
    whenToUse:
      'DI полезен, когда composable должен быть тестируемым, SSR-safe или независимым от конкретной реализации. Например, вместо прямого localStorage можно принять Storage-like объект. Для простых сценариев прямой импорт может быть нормальным.',
    howItWorks:
      'Composable принимает options object или отдельные параметры. В production передаются реальные зависимости, в тестах — fake или mock. API становится явным: видно, от чего функция зависит.',
    whyImportant:
      'На интервью DI показывает архитектурную зрелость. Это помогает писать код, который проще тестировать и переносить между средами.',
    codeExample: {
      language: 'ts',
      filename: 'useRemoteData.ts',
      code: `type Fetcher<T> = () => Promise<T>

export const useRemoteData = <T>(fetcher: Fetcher<T>) => {
  const data = ref<T | null>(null)
  const load = async () => { data.value = await fetcher() }

  return { data, load }
}`,
    },
    commonMistake:
      'Ошибка — зашить URL, fetcher и storage внутрь универсального composable без возможности настройки.',
    interviewQuestions: createInterviewQuestions("Dependency injection через аргументы", "Architecture"),
    remember:
      'Явные зависимости делают composable тестируемее и гибче.',
  },
  {
    id: 'knowledge-composables-q712',
    moduleId: 'composables',
    questionId: 712,
    title: 'Тестируемость composables',
    category: 'Testing',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Тестируемость composable зависит от явного API, контролируемых зависимостей и отсутствия лишней привязки к DOM. Хороший composable можно вызвать как функцию и проверить возвращаемые refs и методы. Если есть lifecycle, может понадобиться тестовый компонент или effect scope.',
    whenToUse:
      'Composable стоит тестировать отдельно, когда в нём есть бизнес-логика, async flow, watchers или сложное состояние. Простые wrappers без логики можно покрывать через компонентные тесты. Важно не тестировать внутренности, которые не являются контрактом.',
    howItWorks:
      'Тест вызывает composable, изменяет входные refs, вызывает методы и проверяет результат. Для async кода ожидают promise или nextTick. Для внешних API передают fake dependencies.',
    whyImportant:
      'На интервью тестируемость показывает, что вынос логики не просто косметический. Composable даёт практическую пользу, если его API легко проверить.',
    codeExample: {
      language: 'ts',
      filename: 'useCounter.test.ts',
      code: `const { count, increment } = useCounter()
increment()

expect(count.value).toBe(1)`,
    },
    commonMistake:
      'Ошибка — делать composable зависящим от реального window, date, network и storage без возможности подмены.',
    interviewQuestions: createInterviewQuestions("Тестируемость composables", "Testing"),
    remember:
      'Composable проще тестировать, когда его входы и выходы явные.',
  },
  {
    id: 'knowledge-composables-q713',
    moduleId: 'composables',
    questionId: 713,
    title: 'SSR-safe composables',
    category: 'SSR',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'SSR-safe composable корректно работает в среде без browser APIs. На сервере нет window, document, localStorage и layout measurements. Код должен либо не обращаться к ним, либо делать это только на клиенте.',
    whenToUse:
      'SSR-safety нужна в Nuxt и server-rendered Vue-приложениях. Особенно важно проверять composables для localStorage, media queries, window size, scroll и DOM-интеграций. Даже если код работает в SPA, он может упасть при SSR.',
    howItWorks:
      'Client-only код помещают в onMounted или оборачивают проверкой среды. Начальное состояние должно быть безопасным для сервера. После hydration состояние можно уточнить на клиенте.',
    whyImportant:
      'На интервью SSR-safe composables показывают понимание среды выполнения. Это важный навык для production Vue/Nuxt приложений.',
    codeExample: {
      language: 'ts',
      filename: 'useClientWidth.ts',
      code: `export const useClientWidth = () => {
  const width = ref(0)

  onMounted(() => {
    width.value = window.innerWidth
  })

  return { width }
}`,
    },
    commonMistake:
      'Ошибка — читать window на верхнем уровне модуля. Такой код выполняется при импорте и ломает SSR.',
    interviewQuestions: createInterviewQuestions("SSR-safe composables", "SSR"),
    remember:
      'Browser APIs должны быть защищены от выполнения на сервере.',
  },
  {
    id: 'knowledge-composables-q714',
    moduleId: 'composables',
    questionId: 714,
    title: 'Composable для localStorage',
    category: 'Persistence',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Composable для localStorage связывает reactive state с браузерным хранилищем. Он читает начальное значение и сохраняет изменения. Такой подход удобен для пользовательских настроек, draft state и небольших persistent flags.',
    whenToUse:
      'localStorage подходит для небольших данных, которые не являются секретами. Не стоит хранить чувствительные токены или большие структуры без необходимости. Для SSR нужен безопасный fallback, потому что localStorage есть только в браузере.',
    howItWorks:
      'Composable создаёт ref, при client-side инициализации читает значение по ключу, затем через watch записывает изменения. Для объектов нужна сериализация JSON и обработка ошибок parse/stringify.',
    whyImportant:
      'На интервью важно учитывать не только happy path. localStorage может быть недоступен, JSON может быть повреждён, а SSR не имеет browser storage.',
    codeExample: {
      language: 'ts',
      filename: 'useLocalStorageValue.ts',
      code: `export const useLocalStorageValue = (key: string, initialValue: string) => {
  const value = ref(initialValue)

  onMounted(() => {
    value.value = localStorage.getItem(key) ?? initialValue
  })

  watch(value, (nextValue) => localStorage.setItem(key, nextValue))

  return { value }
}`,
    },
    commonMistake:
      'Ошибка — читать localStorage в SSR без проверки client-среды. В серверной среде такого API нет.',
    interviewQuestions: createInterviewQuestions("Composable для localStorage", "Persistence"),
    remember:
      'localStorage composable должен учитывать client-only среду и ошибки сериализации.',
  },
  {
    id: 'knowledge-composables-q715',
    moduleId: 'composables',
    questionId: 715,
    title: 'window/document в composables',
    category: 'Browser APIs',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'window и document — browser APIs, которые недоступны на сервере и появляются только в браузере. Composable, который работает с ними, должен явно учитывать среду. Это особенно важно для resize, scroll, focus, selection и DOM measurements.',
    whenToUse:
      'Обращение к window/document оправдано для browser-specific логики. Если задача решается декларативным Vue template, прямой DOM лучше не использовать. Client-only код обычно размещают в onMounted.',
    howItWorks:
      'Код внутри onMounted выполнится только на клиенте после монтирования. Если нужно значение до mount, нужно безопасное initial state. Listeners обязательно очищаются при unmount.',
    whyImportant:
      'На интервью этот вопрос часто связывают с SSR и memory leaks. Сильный ответ упоминает оба риска: отсутствие API на сервере и cleanup listeners.',
    codeExample: {
      language: 'ts',
      filename: 'useWindowScroll.ts',
      code: `export const useWindowScroll = () => {
  const y = ref(0)
  const update = () => { y.value = window.scrollY }

  onMounted(() => window.addEventListener('scroll', update))
  onUnmounted(() => window.removeEventListener('scroll', update))

  return { y }
}`,
    },
    commonMistake:
      'Ошибка — выполнять `const width = window.innerWidth` на верхнем уровне файла composable.',
    interviewQuestions: createInterviewQuestions("window/document в composables", "Browser APIs"),
    remember:
      'Browser APIs требуют client-only выполнения и cleanup.',
  },
  {
    id: 'knowledge-composables-q716',
    moduleId: 'composables',
    questionId: 716,
    title: 'Async composables',
    category: 'Async',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Async composable инкапсулирует асинхронный сценарий: запрос данных, выполнение команды или подписку на удалённый источник. Он должен отдавать UI понятные состояния, а не только скрытый Promise. Часто это data, loading, error и execute.',
    whenToUse:
      'Async composables полезны для fetch, search, autosave, upload, polling и remote validation. Они особенно ценны, если один async pattern повторяется в нескольких компонентах. Для одноразового простого запроса отдельный composable может быть лишним.',
    howItWorks:
      'Composable создаёт refs для data/loading/error и функцию execute. При запуске loading становится true, ошибки очищаются или обновляются, результат записывается в data. Для race conditions используют AbortController или request id.',
    whyImportant:
      'На интервью важно показать, что async — это не только await. Нужно моделировать промежуточные состояния, ошибки, отмену и повторный запуск.',
    codeExample: {
      language: 'ts',
      filename: 'useAsyncData.ts',
      code: `export const useAsyncData = <T>(loader: () => Promise<T>) => {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)

  const execute = async () => {
    loading.value = true
    error.value = null
    try {
      data.value = await loader()
    } catch (caught) {
      error.value = caught instanceof Error ? caught : new Error('Unknown error')
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, execute }
}`,
    },
    commonMistake:
      'Ошибка — возвращать только Promise и заставлять каждый компонент заново придумывать loading и error.',
    interviewQuestions: createInterviewQuestions("Async composables", "Async"),
    remember:
      'Async composable должен явно моделировать состояние операции.',
  },
  {
    id: 'knowledge-composables-q717',
    moduleId: 'composables',
    questionId: 717,
    title: 'Обработка ошибок',
    category: 'Async',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Обработка ошибок в composable — часть его публичного контракта. Ошибка может храниться в reactive error, пробрасываться наружу или передаваться в callback. Главное — не скрывать её молча.',
    whenToUse:
      'Reactive error подходит для UI, который должен показать сообщение. Throw подходит, если потребитель сам управляет try/catch. Callback может быть полезен для логирования или toast-уведомлений.',
    howItWorks:
      'Async function внутри composable оборачивается в try/catch. Caught value нормализуется к Error или доменному типу ошибки. После успешного запроса error обычно очищается.',
    whyImportant:
      'На интервью обработка ошибок показывает production-мышление. Без error state компонент не знает, что показывать пользователю и как повторить операцию.',
    codeExample: {
      language: 'ts',
      filename: 'error-state.ts',
      code: `try {
  data.value = await load()
} catch (caught) {
  error.value = caught instanceof Error ? caught : new Error('Request failed')
}`,
    },
    commonMistake:
      'Ошибка — catch без действий. Такая ошибка исчезает из UI и логов, но сценарий остаётся сломанным.',
    interviewQuestions: createInterviewQuestions("Обработка ошибок", "Async"),
    remember:
      'Ошибка должна быть видимой частью контракта composable.',
  },
  {
    id: 'knowledge-composables-q718',
    moduleId: 'composables',
    questionId: 718,
    title: 'loading/error/data pattern',
    category: 'Async',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'loading/error/data pattern — модель состояния асинхронной операции. loading показывает выполнение, error хранит ошибку, data хранит результат. Такой набор помогает компоненту отрисовать все состояния UI.',
    whenToUse:
      'Паттерн нужен для запросов, поиска, загрузки профиля, submit forms, upload и других async действий. Если операция мгновенная и не влияет на UI, полный набор может быть избыточным. Для важных сценариев он почти всегда полезен.',
    howItWorks:
      'Перед запуском loading становится true, error очищается. При успехе обновляется data, при ошибке — error. В finally loading возвращается в false.',
    whyImportant:
      'На интервью этот паттерн показывает умение проектировать UX вокруг async-кода. Пользователь должен понимать, что происходит, а не видеть пустой экран.',
    codeExample: {
      language: 'ts',
      filename: 'async-state.ts',
      code: `const data = ref<User | null>(null)
const error = ref<Error | null>(null)
const loading = ref(false)`,
    },
    commonMistake:
      'Ошибка — хранить только data и не моделировать loading/error. Тогда UI не может различить пустое состояние, загрузку и ошибку.',
    interviewQuestions: createInterviewQuestions("loading/error/data pattern", "Async"),
    remember:
      'Async UI требует явных состояний loading, error и data.',
  },
  {
    id: 'knowledge-composables-q719',
    moduleId: 'composables',
    questionId: 719,
    title: 'Composable и компонент',
    category: 'Separation of Concerns',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Composable — функция для логики, компонент — единица UI. Компонент может использовать composable, чтобы получить state и методы, а затем отрисовать template. Composable сам по себе не имеет template.',
    whenToUse:
      'Если нужно переиспользовать поведение, подходит composable. Если нужно переиспользовать визуальный фрагмент, нужен компонент. Часто они работают вместе: composable управляет логикой, компонент отображает.',
    howItWorks:
      'Composable возвращает JavaScript API. Компонент вызывает его в script setup и использует результат в template. Таким образом логика отделяется от разметки.',
    whyImportant:
      'На интервью важно не путать переиспользование логики и переиспользование UI. Это помогает выбирать правильную форму абстракции.',
    codeExample: {
      language: 'vue',
      filename: 'SearchPanel.vue',
      code: `<script setup lang="ts">
const { query, results } = useSearch()
</script>

<template>
  <SearchResults :items="results" />
</template>`,
    },
    commonMistake:
      'Ошибка — переносить markup concerns в composable. Разметка должна оставаться в компонентах.',
    interviewQuestions: createInterviewQuestions("Composable и компонент", "Separation of Concerns"),
    remember:
      'Composable переиспользует поведение, компонент переиспользует UI.',
  },
  {
    id: 'knowledge-composables-q720',
    moduleId: 'composables',
    questionId: 720,
    title: 'Composable и Pinia store',
    category: 'State Management',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Composable и Pinia store оба могут работать с reactive state, но решают разные задачи. Composable может быть локальной reusable logic, а store — централизованным управляемым состоянием приложения. Store имеет devtools, actions и явный глобальный контракт.',
    whenToUse:
      'Composable подходит для локальной логики, browser APIs, forms, fetch patterns и reusable behavior. Pinia подходит для состояния, которое важно многим экранам, требует централизованных mutations или persistence. Небольшой shared composable может заменить store только для простых случаев.',
    howItWorks:
      'Composable вызывается как функция и может создавать новый state на каждый вызов. Store создаётся через defineStore и обычно возвращает один store instance для приложения. Это разные уровни ответственности.',
    whyImportant:
      'На интервью важно не говорить, что composable всегда заменяет store. Хороший ответ выбирает инструмент по масштабу и ownership состояния.',
    codeExample: {
      language: 'ts',
      filename: 'state-choice.ts',
      code: `const { width } = useWindowSize()
const authStore = useAuthStore()`,
    },
    commonMistake:
      'Ошибка — хранить критичное глобальное состояние в случайном shared composable без явного store-контракта.',
    interviewQuestions: createInterviewQuestions("Composable и Pinia store", "State Management"),
    remember:
      'Composable — reusable logic, Pinia store — управляемое разделяемое состояние.',
  },
  {
    id: 'knowledge-composables-q721',
    moduleId: 'composables',
    questionId: 721,
    title: 'Скрытые зависимости',
    category: 'Anti-patterns',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Скрытая зависимость — то, от чего composable зависит, но чего не видно в его API. Это может быть window, localStorage, импортированный singleton, router, store или DOM selector. Чем больше скрытых зависимостей, тем сложнее тестирование и переиспользование.',
    whenToUse:
      'Некоторые imports нормальны, если composable явно доменный. Для универсальных composables лучше передавать зависимости параметрами. Особенно это важно для network, storage, time и browser APIs.',
    howItWorks:
      'Зависимость передаётся через аргумент или options object. В тесте её можно заменить. В production передаётся реальная реализация.',
    whyImportant:
      'На интервью эта тема показывает архитектурную дисциплину. Хороший composable должен быть понятным по сигнатуре и документации.',
    codeExample: {
      language: 'ts',
      filename: 'inject-clock.ts',
      code: `export const useNow = (getNow: () => Date = () => new Date()) => {
  const now = ref(getNow())
  return { now }
}`,
    },
    commonMistake:
      'Ошибка — внутри универсального composable напрямую читать конкретный store или DOM selector без параметров.',
    interviewQuestions: createInterviewQuestions("Скрытые зависимости", "Anti-patterns"),
    remember:
      'Скрытые зависимости уменьшают тестируемость и переносимость composable.',
  },
  {
    id: 'knowledge-composables-q722',
    moduleId: 'composables',
    questionId: 722,
    title: 'Размер return API',
    category: 'API Design',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Большой return API означает, что composable возвращает слишком много полей и команд. Это может говорить о слишком широкой ответственности. Потребитель вынужден разбираться в большом контракте, даже если использует малую часть.',
    whenToUse:
      'Если API растёт, стоит проверить, не смешаны ли несколько сценариев: form state, validation, persistence, submit, navigation. Иногда лучше разделить composable на несколько меньших функций. Иногда достаточно сгруппировать state и actions.',
    howItWorks:
      'Return API проектируется как публичный interface. Поля должны иметь понятные имена, стабильные типы и логические группы. Лишние внутренние refs лучше не раскрывать.',
    whyImportant:
      'На интервью это связано с maintainability. Composable должен быть удобным для потребителя, а не просто контейнером для всего кода.',
    codeExample: {
      language: 'ts',
      filename: 'grouped-api.ts',
      code: `return {
  state: readonly(state),
  actions: { submit, reset, validate },
}`,
    },
    commonMistake:
      'Ошибка — возвращать 20 unrelated refs из одной функции. Это обычно сигнал к декомпозиции.',
    interviewQuestions: createInterviewQuestions("Размер return API", "API Design"),
    remember:
      'Return API composable должен оставаться маленьким и связным.',
  },
  {
    id: 'knowledge-composables-q723',
    moduleId: 'composables',
    questionId: 723,
    title: 'Factory state для форм',
    category: 'State',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Factory state означает, что state создаётся при каждом вызове composable. Для форм это обычно правильное поведение: каждая форма получает собственный draft, ошибки и dirty-флаги. Компоненты не влияют друг на друга.',
    whenToUse:
      'Factory state нужен для независимых экземпляров: form, modal, dropdown, wizard, local selection. Если state должен быть общим, выбирают shared composable или store. Важно не путать эти сценарии.',
    howItWorks:
      'ref или reactive объявляются внутри функции. Каждый вызов функции создаёт новые reactive objects. При unmount компонента связанные effects будут остановлены.',
    whyImportant:
      'На интервью это помогает объяснить, почему место объявления state важно. Для форм случайный singleton state — болезненная ошибка.',
    codeExample: {
      language: 'ts',
      filename: 'useLoginForm.ts',
      code: `export const useLoginForm = () => {
  const form = reactive({ email: '', password: '' })
  const reset = () => {
    form.email = ''
    form.password = ''
  }

  return { form, reset }
}`,
    },
    commonMistake:
      'Ошибка — объявить form state вне composable и получить одну форму на все компоненты.',
    interviewQuestions: createInterviewQuestions("Factory state для форм", "State"),
    remember:
      'Для независимых экземпляров state создаётся внутри composable.',
  },
  {
    id: 'knowledge-composables-q724',
    moduleId: 'composables',
    questionId: 724,
    title: 'Top-level state',
    category: 'State',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Top-level state — reactive state, объявленный вне функции composable. Он создаётся один раз при импорте модуля и разделяется всеми потребителями. Это может быть намеренный shared state или случайная ошибка.',
    whenToUse:
      'Top-level state уместен для простого общего состояния, например online status или theme. Он не подходит для независимых компонентов, форм и локальных dropdowns. Для сложного shared state лучше рассмотреть Pinia.',
    howItWorks:
      'JavaScript-модуль кешируется после первого импорта. Поэтому top-level ref живёт как singleton. Все вызовы composable возвращают ссылку на тот же объект.',
    whyImportant:
      'На интервью это частый вопрос по composables. Он проверяет понимание JavaScript modules и Vue reactivity вместе.',
    codeExample: {
      language: 'ts',
      filename: 'useOnlineStatus.ts',
      code: `const isOnline = ref(true)

export const useOnlineStatus = () => {
  return { isOnline }
}`,
    },
    commonMistake:
      'Ошибка — не документировать shared behavior. Потребитель может ожидать независимый state.',
    interviewQuestions: createInterviewQuestions("Top-level state", "State"),
    remember:
      'Top-level ref в модуле является singleton state.',
  },
  {
    id: 'knowledge-composables-q725',
    moduleId: 'composables',
    questionId: 725,
    title: 'Readonly state и команды',
    category: 'Encapsulation',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Readonly state и команды — способ защитить инварианты composable. Потребитель читает состояние, но меняет его через явно предоставленные методы. Это особенно полезно для shared state и сложных сценариев.',
    whenToUse:
      'Такой подход нужен, когда прямые мутации могут сломать правила: selected item, connection state, modal stack, async status. Для простых локальных refs можно вернуть writable ref, если это не создаёт риска.',
    howItWorks:
      'Внутри composable хранится mutable ref. Наружу возвращается readonly(ref) и функции, которые меняют state контролируемо. Так API становится похож на маленький store без лишней инфраструктуры.',
    whyImportant:
      'На интервью это показывает понимание инкапсуляции. Composable может иметь внутренние правила, которые нельзя обходить прямой мутацией.',
    codeExample: {
      language: 'ts',
      filename: 'useSelection.ts',
      code: `export const useSelection = () => {
  const selectedId = ref<string | null>(null)
  const select = (id: string) => { selectedId.value = id }
  const clear = () => { selectedId.value = null }

  return { selectedId: readonly(selectedId), select, clear }
}`,
    },
    commonMistake:
      'Ошибка — отдавать наружу mutable shared ref и позволять любому потребителю менять state произвольно.',
    interviewQuestions: createInterviewQuestions("Readonly state и команды", "Encapsulation"),
    remember:
      'Readonly state плюс методы дают контролируемый API изменения.',
  },
  {
    id: 'knowledge-composables-q726',
    moduleId: 'composables',
    questionId: 726,
    title: 'Когда composable не нужен',
    category: 'Architecture',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Composable не нужен, если логика короткая, локальная и понятнее прямо в компоненте. Абстракция должна снижать сложность, а не создавать новую навигацию по файлам. Простота — часть хорошей архитектуры.',
    whenToUse:
      'Оставляй код в компоненте, если он относится только к этому компоненту и не мешает читать template/script. Выноси, когда появляется повторение, сложный side effect, отдельная ответственность или тестируемый сценарий.',
    howItWorks:
      'Решение о выносе принимается по связности логики. Если блок имеет своё состояние, действия и lifecycle, он хороший кандидат. Если это один ref и один toggle, иногда компонент справится сам.',
    whyImportant:
      'На интервью зрелый ответ не должен звучать как "всё выносить". Хороший инженер умеет выбирать уровень абстракции под задачу.',
    codeExample: {
      language: 'ts',
      filename: 'useDisclosure.ts',
      code: `export const useDisclosure = (initialValue = false) => {
  const isOpen = ref(initialValue)

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  return { isOpen, open, close }
}`,
    },
    commonMistake:
      'Ошибка — создавать useSomething для каждой мелочи. Это увеличивает количество файлов без выигрыша.',
    interviewQuestions: createInterviewQuestions("Когда composable не нужен", "Architecture"),
    remember:
      'Composable нужен, когда он реально уменьшает сложность или повторение.',
  },
  {
    id: 'knowledge-composables-q727',
    moduleId: 'composables',
    questionId: 727,
    title: 'Race conditions в async composables',
    category: 'Async',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Race condition возникает, когда несколько async операций завершаются в непредсказуемом порядке. В search composable старый медленный запрос может прийти позже нового и перезаписать актуальные результаты. Это типичная production-проблема.',
    whenToUse:
      'Защита нужна для поиска, фильтров, autocomplete, route-based fetching и любого сценария с быстрыми повторными запросами. Если операция запускается строго один раз, риск меньше. Но повторный execute всё равно стоит учитывать.',
    howItWorks:
      'Используют AbortController, request id или watcher cleanup. Перед записью результата проверяют, что запрос всё ещё актуален. При новом запросе старый отменяется или помечается устаревшим.',
    whyImportant:
      'На интервью это показывает опыт работы с реальным UI. Async composable должен быть устойчивым к быстрым действиям пользователя.',
    codeExample: {
      language: 'ts',
      filename: 'useSearch.ts',
      code: `let requestId = 0

const search = async (query: string) => {
  const currentRequest = ++requestId
  const result = await fetchResults(query)

  if (currentRequest === requestId) {
    results.value = result
  }
}`,
    },
    commonMistake:
      'Ошибка — записывать результат любого завершившегося запроса без проверки актуальности.',
    interviewQuestions: createInterviewQuestions("Race conditions в async composables", "Async"),
    remember:
      'Async composable должен защищаться от устаревших результатов.',
  },
  {
    id: 'knowledge-composables-q728',
    moduleId: 'composables',
    questionId: 728,
    title: 'Reactive параметры composable',
    category: 'Inputs',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Reactive параметры — refs, computed refs или getter-функции, которые composable принимает как вход. Они позволяют composable реагировать на изменения данных потребителя. Это делает API явным и гибким.',
    whenToUse:
      'Reactive input нужен для search query, selected id, filters, route params и external options. Если значение статичное, достаточно обычного параметра. Если composable должен отслеживать изменения, вход должен быть reactive.',
    howItWorks:
      'Composable принимает Ref или getter и читает его внутри computed/watch. При изменении источника выполняется нужная реакция. TypeScript-тип входа должен ясно показывать, что ожидается.',
    whyImportant:
      'На интервью это связывает composables с reactivity model. Хороший API не ищет данные в DOM или глобальных переменных, а принимает их явно.',
    codeExample: {
      language: 'ts',
      filename: 'useSearchQuery.ts',
      code: `export const useSearchQuery = (query: Ref<string>) => {
  watch(query, (nextQuery) => {
    search(nextQuery)
  })
}`,
    },
    commonMistake:
      'Ошибка — принимать обычную строку, а затем ожидать, что composable будет реагировать на её будущие изменения.',
    interviewQuestions: createInterviewQuestions("Reactive параметры composable", "Inputs"),
    remember:
      'Если composable должен реагировать на изменения, передавай reactive source.',
  },
  {
    id: 'knowledge-composables-q729',
    moduleId: 'composables',
    questionId: 729,
    title: 'Хороший composable API',
    category: 'API Design',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Хороший composable API имеет явный вход, понятный return object, ограниченную ответственность и предсказуемый cleanup. Он не заставляет потребителя знать внутренние детали. Его можно прочитать как маленький контракт.',
    whenToUse:
      'Такой подход нужен для любых composables, которые будут переиспользоваться. Чем шире аудитория функции, тем важнее стабильность API. Для локального composable требования могут быть проще, но ясность всё равно важна.',
    howItWorks:
      'Параметры описывают зависимости и настройки. Возвращаемые значения делятся на state, computed и actions. Cleanup либо инкапсулирован, либо явно документирован.',
    whyImportant:
      'На интервью это показывает инженерное мышление. Composable — не просто место для кода, а публичный API для других компонентов.',
    codeExample: {
      language: 'ts',
      filename: 'useDialog.ts',
      code: `const {
  isOpen,
  open,
  close,
  toggle,
} = useDialog({ initialOpen: false })`,
    },
    commonMistake:
      'Ошибка — делать API зависимым от конкретного компонента или страницы. Это убивает переиспользование.',
    interviewQuestions: createInterviewQuestions("Хороший composable API", "API Design"),
    remember:
      'Composable должен иметь маленький, явный и стабильный контракт.',
  },
  {
    id: 'knowledge-composables-q730',
    moduleId: 'composables',
    questionId: 730,
    title: 'Привязка к DOM и компонентам',
    category: 'Anti-patterns',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Привязка composable к конкретному DOM-селектору или странице делает его почти непереиспользуемым. Универсальный composable не должен знать, что существует `.profile-page .save-button`. Такие детали принадлежат компоненту.',
    whenToUse:
      'Если composable работает с DOM, лучше передать element ref, target или callback параметром. Если логика действительно относится только к одной странице, можно оставить её локальной. Универсальность не должна быть фальшивой.',
    howItWorks:
      'Компонент создаёт template ref и передаёт его в composable. Composable работает с этим ref после mount и очищает ресурсы при unmount. Так DOM-зависимость становится явной.',
    whyImportant:
      'На интервью это показывает умение проектировать границы. Скрытая привязка к DOM ломает тесты, SSR и повторное использование.',
    codeExample: {
      language: 'ts',
      filename: 'useFocusTrap.ts',
      code: `export const useFocusTrap = (target: Ref<HTMLElement | null>) => {
  onMounted(() => {
    target.value?.focus()
  })
}`,
    },
    commonMistake:
      'Ошибка — искать элементы через document.querySelector внутри универсального composable без параметров.',
    interviewQuestions: createInterviewQuestions("Привязка к DOM и компонентам", "Anti-patterns"),
    remember:
      'DOM-зависимость composable должна быть явной через параметры.',
  },
]
