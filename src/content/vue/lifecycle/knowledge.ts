import type { ContentKnowledgeCard } from '../../../types/content'

const createInterviewQuestions = (title: string, category: string): string[] => [
  `Какие задачи решает ${title} в теме ${category} (Lifecycle hooks)?`,
  `Какие ограничения ${title} важно учитывать в контексте Lifecycle hooks?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

export const lifecycleKnowledgeCards: ContentKnowledgeCard[] = [
  {
    id: 'knowledge-lifecycle-q601',
    moduleId: 'lifecycle',
    questionId: 601,
    title: 'Жизненный цикл компонента',
    category: 'Lifecycle',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Жизненный цикл компонента — последовательность этапов, через которые проходит экземпляр Vue-компонента. Компонент создаётся, монтируется в DOM, обновляется при изменении реактивных данных и удаляется. Для отдельных сценариев есть hooks, которые позволяют выполнить код в нужный момент.',
    whenToUse:
      'Lifecycle hooks нужны для side effects: работы с DOM, подписок, timers, интеграции с внешними библиотеками и cleanup. Они не должны заменять computed для производных значений или обычные функции для пользовательских действий. Чем меньше случайной логики в hooks, тем проще компонент.',
    howItWorks:
      'В Composition API hooks регистрируются функциями вроде onMounted и onUnmounted внутри setup-контекста. Vue вызовет зарегистрированные callbacks на соответствующем этапе. Hooks должны быть синхронно зарегистрированы во время setup.',
    whyImportant:
      'На интервью lifecycle проверяет понимание момента доступности DOM, порядка обновлений и очистки ресурсов. Это практическая тема: ошибки здесь часто приводят к утечкам памяти, race conditions и нестабильному UI.',
    codeExample: {
      language: 'vue',
      filename: 'LifecycleSample.vue',
      code: `<script setup lang="ts">
onMounted(() => {
  lifecycleState.value = 'mounted'
})

onUnmounted(() => {
  lifecycleState.value = 'removed'
})
</script>`,
    },
    commonMistake:
      'Ошибка — складывать всю логику компонента в lifecycle hooks. Hooks должны обслуживать конкретные этапы жизни, а бизнес-логику лучше держать в функциях, composables или stores.',
    interviewQuestions: createInterviewQuestions("Жизненный цикл компонента", "Lifecycle"),
    remember:
      'Lifecycle hooks нужны для кода, привязанного к этапам жизни компонента.',
  },
  {
    id: 'knowledge-lifecycle-q602',
    moduleId: 'lifecycle',
    questionId: 602,
    title: 'setup и ранний этап компонента',
    category: 'Setup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'setup — точка входа Composition API. Она выполняется до монтирования компонента и подготавливает реактивное состояние, computed, watchers, функции и lifecycle hooks. В script setup этот этап представлен кодом верхнего уровня.',
    whenToUse:
      'setup используют для объявления состояния и зависимостей компонента. Там удобно вызывать composables и регистрировать hooks. Для прямой работы с DOM setup слишком ранний: template refs ещё не заполнены.',
    howItWorks:
      'Vue создаёт экземпляр компонента и выполняет setup. Значения, объявленные в script setup, доступны template. В обычном setup значения нужно вернуть, чтобы template мог их использовать.',
    whyImportant:
      'Понимание setup помогает не путать его с mounted. На интервью часто спрашивают, почему DOM недоступен в setup и почему lifecycle hooks регистрируются именно там.',
    codeExample: {
      language: 'vue',
      filename: 'CounterPanel.vue',
      code: `<script setup lang="ts">
const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>`,
    },
    commonMistake:
      'Ошибка — пытаться вызвать focus или измерить DOM прямо в setup. Для этого нужен onMounted или nextTick после обновления.',
    interviewQuestions: createInterviewQuestions("setup и ранний этап компонента", "Setup"),
    remember:
      'setup готовит логику компонента, но DOM на этом этапе ещё не доступен.',
  },
  {
    id: 'knowledge-lifecycle-q603',
    moduleId: 'lifecycle',
    questionId: 603,
    title: 'onBeforeMount',
    category: 'Mounting',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'onBeforeMount вызывается перед первым монтированием компонента в DOM. Render уже подготовлен, но реальные DOM-элементы ещё не вставлены. Поэтому hook редко нужен в обычном коде.',
    whenToUse:
      'onBeforeMount можно использовать для редких подготовительных side effects перед вставкой DOM. Для чтения DOM или template refs он не подходит. В большинстве случаев setup или onMounted выражают намерение яснее.',
    howItWorks:
      'Callback регистрируется внутри setup. Vue вызывает его перед mount-фазой. После этого происходит вставка DOM и затем вызывается onMounted.',
    whyImportant:
      'На интервью важно знать, что before mount не означает доступность DOM. Это помогает правильно выбрать hook для интеграций и измерений.',
    codeExample: {
      language: 'ts',
      filename: 'before-mount.ts',
      code: `onBeforeMount(() => {
  mountStatus.value = 'pending'
})`,
    },
    commonMistake:
      'Ошибка — читать template ref в onBeforeMount. Значение ref ещё будет null или начальным значением.',
    interviewQuestions: createInterviewQuestions("onBeforeMount", "Mounting"),
    remember:
      'onBeforeMount вызывается до появления DOM-элементов компонента.',
  },
  {
    id: 'knowledge-lifecycle-q604',
    moduleId: 'lifecycle',
    questionId: 604,
    title: 'onMounted',
    category: 'Mounting',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'onMounted вызывается после того, как компонент вставлен в DOM. На этом этапе доступны template refs, DOM-измерения и client-only интеграции. Это один из самых часто используемых lifecycle hooks.',
    whenToUse:
      'onMounted подходит для focus, измерения размеров, подключения DOM-библиотек, стартовой client-only логики и внешних listeners. Для чистых вычислений лучше computed. Для загрузки данных нужно учитывать loading, errors и SSR.',
    howItWorks:
      'Vue завершает первый render и mount, затем вызывает callback onMounted. Если внутри меняется state, это приведёт к новому обновлению. Для DOM после следующего изменения state может понадобиться nextTick.',
    whyImportant:
      'На интервью onMounted связывают с доступностью DOM. Хороший ответ должен упоминать, что hook не выполняется на сервере в SSR-сценарии.',
    codeExample: {
      language: 'vue',
      filename: 'AutoFocusInput.vue',
      code: `<script setup lang="ts">
const inputEl = ref<HTMLInputElement | null>(null)

onMounted(() => {
  inputEl.value?.focus()
})
</script>

<template><input ref="inputEl" /></template>`,
    },
    commonMistake:
      'Ошибка — помещать в onMounted любую инициализацию без причины. Если код не зависит от DOM или client-only API, его можно выполнить в setup или composable.',
    interviewQuestions: createInterviewQuestions("onMounted", "Mounting"),
    remember:
      'onMounted — безопасный момент для работы с DOM после первого mount.',
  },
  {
    id: 'knowledge-lifecycle-q605',
    moduleId: 'lifecycle',
    questionId: 605,
    title: 'onBeforeUpdate',
    category: 'Updates',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'onBeforeUpdate вызывается перед обновлением DOM, когда reactive state уже изменился. Старый DOM ещё находится на странице. Hook нужен редко, но полезен для чтения состояния DOM перед patch.',
    whenToUse:
      'onBeforeUpdate используют, если нужно сохранить scroll position, измерить старый DOM или подготовиться к изменению. Для вычислений на основе state лучше computed. Для реакции на конкретный источник чаще понятнее watch.',
    howItWorks:
      'После изменения реактивных зависимостей Vue планирует DOM update. Перед patch он вызывает onBeforeUpdate. Затем DOM обновляется, после чего доступен onUpdated.',
    whyImportant:
      'Этот hook помогает понять update cycle. На интервью важно различать состояние данных и состояние DOM: данные уже новые, DOM ещё старый.',
    codeExample: {
      language: 'ts',
      filename: 'before-update.ts',
      code: `onBeforeUpdate(() => {
  previousHeight.value = panelEl.value?.offsetHeight ?? 0
})`,
    },
    commonMistake:
      'Ошибка — пытаться использовать onBeforeUpdate как универсальный watcher. Если нужно следить за конкретным значением, watch будет точнее.',
    interviewQuestions: createInterviewQuestions("onBeforeUpdate", "Updates"),
    remember:
      'onBeforeUpdate видит момент перед patch DOM.',
  },
  {
    id: 'knowledge-lifecycle-q606',
    moduleId: 'lifecycle',
    questionId: 606,
    title: 'onUpdated',
    category: 'Updates',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'onUpdated вызывается после обновления DOM компонента. Он подходит для чтения уже обновлённого DOM. При этом hook может вызываться часто, если компонент часто обновляется.',
    whenToUse:
      'onUpdated применяют для редких DOM-синхронизаций после render. Если нужно выполнить эффект при изменении конкретного значения, обычно лучше watch. Для чтения DOM после одного изменения state часто достаточно await nextTick.',
    howItWorks:
      'Vue применяет patch к DOM и затем вызывает onUpdated. Если внутри hook изменить reactive state без условия, это запустит новое обновление. Поэтому любые изменения state должны быть строго контролируемыми.',
    whyImportant:
      'На интервью часто проверяют знание циклов обновления. Главная мысль: onUpdated не должен становиться местом для бесконтрольной мутации state.',
    codeExample: {
      language: 'ts',
      filename: 'updated.ts',
      code: `onUpdated(() => {
  updateStatus.value = 'updated'
})`,
    },
    commonMistake:
      'Ошибка — менять state внутри onUpdated на каждом вызове. Это может привести к бесконечному циклу обновлений.',
    interviewQuestions: createInterviewQuestions("onUpdated", "Updates"),
    remember:
      'onUpdated вызывается после DOM patch и требует осторожности с изменением state.',
  },
  {
    id: 'knowledge-lifecycle-q607',
    moduleId: 'lifecycle',
    questionId: 607,
    title: 'onBeforeUnmount',
    category: 'Unmounting',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'onBeforeUnmount вызывается прямо перед удалением компонента. Экземпляр компонента ещё активен, а reactive state и refs ещё доступны. Это последний момент перед фактическим teardown.',
    whenToUse:
      'Hook полезен для подготовки к удалению: остановки процессов, сохранения финального состояния или синхронных проверок. Для обычного cleanup часто достаточно onUnmounted. Выбор зависит от того, нужен ли ещё активный экземпляр.',
    howItWorks:
      'Vue начинает удалять компонент из дерева и вызывает onBeforeUnmount. После этого дочерние эффекты и DOM будут очищены. Затем вызывается onUnmounted.',
    whyImportant:
      'На интервью важно отличать before unmount и unmounted. Первый момент происходит до удаления, второй — после.',
    codeExample: {
      language: 'ts',
      filename: 'before-unmount.ts',
      code: `onBeforeUnmount(() => {
  saveDraft()
})`,
    },
    commonMistake:
      'Ошибка — рассчитывать, что onBeforeUnmount сработает при деактивации KeepAlive. Для KeepAlive нужен onDeactivated.',
    interviewQuestions: createInterviewQuestions("onBeforeUnmount", "Unmounting"),
    remember:
      'onBeforeUnmount вызывается перед удалением активного экземпляра компонента.',
  },
  {
    id: 'knowledge-lifecycle-q608',
    moduleId: 'lifecycle',
    questionId: 608,
    title: 'onUnmounted и cleanup',
    category: 'Unmounting',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'onUnmounted вызывается после размонтирования компонента. Это основной hook для очистки внешних ресурсов: listeners, intervals, subscriptions, observers и instances сторонних библиотек. Он предотвращает утечки памяти.',
    whenToUse:
      'onUnmounted нужен каждый раз, когда компонент создал ресурс, который Vue не очищает автоматически. Если ресурс живёт только внутри Vue reactive graph, Vue часто справится сам. Но браузерные API и внешние подписки требуют явного cleanup.',
    howItWorks:
      'При удалении компонента Vue останавливает его reactive effects и вызывает cleanup callbacks. Код внутри onUnmounted должен убрать внешние связи, чтобы они не обращались к устаревшему состоянию.',
    whyImportant:
      'На интервью cleanup — один из главных практических маркеров опыта. Компонент должен освобождать то, что создал.',
    codeExample: {
      language: 'ts',
      filename: 'cleanup.ts',
      code: `const timerId = window.setInterval(refresh, 1000)

onUnmounted(() => {
  window.clearInterval(timerId)
})`,
    },
    commonMistake:
      'Ошибка — думать, что Vue автоматически очищает все browser APIs. setInterval, WebSocket и event listeners нужно закрывать явно.',
    interviewQuestions: createInterviewQuestions("onUnmounted и cleanup", "Unmounting"),
    remember:
      'onUnmounted — место для очистки ресурсов, созданных компонентом.',
  },
  {
    id: 'knowledge-lifecycle-q609',
    moduleId: 'lifecycle',
    questionId: 609,
    title: 'onActivated',
    category: 'KeepAlive',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'onActivated вызывается, когда компонент, кешированный через KeepAlive, снова становится активным. Экземпляр не создаётся заново, а возвращается из кеша. Локальное состояние при этом сохраняется.',
    whenToUse:
      'onActivated полезен для возобновления timers, обновления данных, восстановления focus или продолжения подписок. Он нужен только для компонентов внутри KeepAlive. Для обычного первого mount используется onMounted.',
    howItWorks:
      'KeepAlive сохраняет экземпляр при скрытии. Когда компонент снова отображается, Vue вызывает onActivated. Этот hook может вызываться несколько раз в течение жизни одного экземпляра.',
    whyImportant:
      'На интервью важно понимать, что KeepAlive меняет привычную модель mount/unmount. Компонент может исчезнуть визуально, но не быть удалённым.',
    codeExample: {
      language: 'ts',
      filename: 'activated.ts',
      code: `onActivated(() => {
  resumePolling()
})`,
    },
    commonMistake:
      'Ошибка — ожидать, что onMounted будет вызываться при каждом возвращении кешированного компонента. Для этого есть onActivated.',
    interviewQuestions: createInterviewQuestions("onActivated", "KeepAlive"),
    remember:
      'onActivated срабатывает при возвращении KeepAlive-компонента из кеша.',
  },
  {
    id: 'knowledge-lifecycle-q610',
    moduleId: 'lifecycle',
    questionId: 610,
    title: 'onDeactivated',
    category: 'KeepAlive',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'onDeactivated вызывается, когда KeepAlive-компонент перестаёт быть активным, но не уничтожается. Его state сохраняется, а DOM может быть перемещён или скрыт. Это не то же самое, что unmount.',
    whenToUse:
      'Hook нужен, чтобы поставить на паузу polling, timers, media playback, observers или listeners, которые не должны работать в скрытом состоянии. Если ресурс должен жить даже в фоне, cleanup может быть не нужен.',
    howItWorks:
      'При переключении активного компонента KeepAlive деактивирует старый экземпляр. Vue вызывает onDeactivated, но не уничтожает reactive state. При возврате будет onActivated.',
    whyImportant:
      'Это важная тема для производительности. Кешированный компонент может продолжать выполнять работу, если её не поставить на паузу.',
    codeExample: {
      language: 'ts',
      filename: 'deactivated.ts',
      code: `onDeactivated(() => {
  pausePolling()
})`,
    },
    commonMistake:
      'Ошибка — очищать ресурс только в onUnmounted, хотя компонент скрывается через KeepAlive и не размонтируется.',
    interviewQuestions: createInterviewQuestions("onDeactivated", "KeepAlive"),
    remember:
      'onDeactivated нужен для паузы работы кешированного компонента.',
  },
  {
    id: 'knowledge-lifecycle-q611',
    moduleId: 'lifecycle',
    questionId: 611,
    title: 'onErrorCaptured',
    category: 'Errors',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'onErrorCaptured перехватывает ошибки из дочернего component tree. Он позволяет записать ошибку, показать fallback UI или остановить дальнейшее распространение. Это локальный error boundary механизм Vue.',
    whenToUse:
      'Hook используют вокруг зон, где ошибка не должна ломать весь экран: виджеты, async panels, динамические блоки. Он не заменяет глобальное логирование и не должен скрывать ошибки без следа. Ошибка должна быть обработана осознанно.',
    howItWorks:
      'Callback получает error, instance и info. Если вернуть false, ошибка не будет распространяться дальше. Если не вернуть false, она продолжит путь к глобальному обработчику.',
    whyImportant:
      'На интервью важно понимать границы error handling. Хороший ответ включает fallback UI, логирование и осторожность с подавлением ошибок.',
    codeExample: {
      language: 'ts',
      filename: 'error-boundary.ts',
      code: `onErrorCaptured((error) => {
  reportError(error)
  hasError.value = true
  return false
})`,
    },
    commonMistake:
      'Ошибка — перехватывать ошибку и ничего с ней не делать. Это скрывает проблему и усложняет диагностику.',
    interviewQuestions: createInterviewQuestions("onErrorCaptured", "Errors"),
    remember:
      'onErrorCaptured помогает локально обработать ошибки дочерних компонентов.',
  },
  {
    id: 'knowledge-lifecycle-q612',
    moduleId: 'lifecycle',
    questionId: 612,
    title: 'created и mounted в Vue 2',
    category: 'Migration',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'В Vue 2 created выполнялся после создания экземпляра, но до монтирования DOM. mounted выполнялся после вставки DOM. В Vue 3 Composition API похожая модель выражается через setup и onMounted.',
    whenToUse:
      'При миграции created-логику часто переносят в setup, если она не зависит от DOM. DOM-зависимую логику переносят в onMounted. Важно не переносить всё механически в один hook.',
    howItWorks:
      'setup выполняется раньше mount и подготавливает реактивные значения. onMounted вызывается после первого DOM mount. Это разделяет подготовку данных и side effects, связанные с DOM.',
    whyImportant:
      'На интервью сравнение Vue 2 и Vue 3 показывает понимание миграции. Хороший ответ объясняет не только названия hooks, но и доступность DOM.',
    codeExample: {
      language: 'ts',
      filename: 'migration.ts',
      code: `const state = reactive({ ready: false })

onMounted(() => {
  state.ready = true
})`,
    },
    commonMistake:
      'Ошибка — переносить created-код, который не зависит от DOM, в onMounted. Это может задержать инициализацию без причины.',
    interviewQuestions: createInterviewQuestions("created и mounted в Vue 2", "Migration"),
    remember:
      'created ближе к setup, mounted ближе к onMounted.',
  },
  {
    id: 'knowledge-lifecycle-q613',
    moduleId: 'lifecycle',
    questionId: 613,
    title: 'Cleanup подписок',
    category: 'Cleanup',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Cleanup подписок — остановка внешних listeners или subscriptions, созданных компонентом. Это может быть WebSocket, event emitter, observable, storage listener или пользовательская подписка. Без cleanup callback может жить дольше компонента.',
    whenToUse:
      'Cleanup нужен всегда, когда подписка не управляется Vue автоматически. Если API возвращает функцию unsubscribe, её стоит вызвать в onUnmounted. Для подписок внутри watcher используют cleanup callback watcher.',
    howItWorks:
      'Компонент создаёт подписку и сохраняет функцию отмены. При unmount вызывается unsubscribe. Так callback перестаёт обращаться к состоянию удалённого компонента.',
    whyImportant:
      'Утечки подписок часто трудно найти. На интервью эта тема показывает практическую дисциплину управления ресурсами.',
    codeExample: {
      language: 'ts',
      filename: 'subscription-cleanup.ts',
      code: `const unsubscribe = source.subscribe((value) => {
  current.value = value
})

onUnmounted(() => {
  unsubscribe()
})`,
    },
    commonMistake:
      'Ошибка — подписаться в onMounted и забыть unsubscribe. При повторном mount callbacks начнут накапливаться.',
    interviewQuestions: createInterviewQuestions("Cleanup подписок", "Cleanup"),
    remember:
      'Каждая внешняя подписка должна иметь понятный путь очистки.',
  },
  {
    id: 'knowledge-lifecycle-q614',
    moduleId: 'lifecycle',
    questionId: 614,
    title: 'Таймеры и lifecycle',
    category: 'Cleanup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Таймеры — внешние browser APIs, которые продолжают работать независимо от Vue-компонента. setInterval и setTimeout не очищаются Vue автоматически. Их нужно останавливать, если компонент больше не должен получать callback.',
    whenToUse:
      'Таймеры применяют для polling, delayed UI, debounce-like эффектов и анимационных сценариев. Если таймер создаётся компонентом, cleanup обычно делается в onUnmounted. В KeepAlive иногда нужна пауза в onDeactivated.',
    howItWorks:
      'setInterval возвращает id. Этот id сохраняют в переменной и передают в clearInterval. Для setTimeout используется clearTimeout.',
    whyImportant:
      'На интервью таймеры — простой пример ресурса, которым Vue не владеет. Неправильная очистка приводит к дублированным запросам и утечкам.',
    codeExample: {
      language: 'ts',
      filename: 'timer-cleanup.ts',
      code: `const intervalId = window.setInterval(() => {
  tick.value += 1
}, 1000)

onUnmounted(() => window.clearInterval(intervalId))`,
    },
    commonMistake:
      'Ошибка — создавать interval при каждом mount без clearInterval. Через несколько переходов callback будет выполняться несколько раз.',
    interviewQuestions: createInterviewQuestions("Таймеры и lifecycle", "Cleanup"),
    remember:
      'Таймер, созданный компонентом, должен быть остановлен компонентом.',
  },
  {
    id: 'knowledge-lifecycle-q615',
    moduleId: 'lifecycle',
    questionId: 615,
    title: 'addEventListener и removeEventListener',
    category: 'Cleanup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'addEventListener добавляет внешний listener к DOM, window или document. Такой listener не исчезает автоматически из-за удаления Vue-компонента. Его нужно удалить через removeEventListener с той же функцией.',
    whenToUse:
      'Глобальные listeners нужны для resize, scroll, keydown, click outside и интеграций. Их стоит добавлять в onMounted, если нужен browser API, и удалять в onUnmounted. Для template events лучше использовать обычные Vue handlers.',
    howItWorks:
      'Handler сохраняют в переменной или объявляют именованной функцией. removeEventListener получает тот же target, event name и handler. Anonymous callback нельзя удалить, если ссылка потеряна.',
    whyImportant:
      'Это частая ошибка в production-коде. На интервью важно упомянуть одинаковую ссылку на handler и cleanup.',
    codeExample: {
      language: 'ts',
      filename: 'window-listener.ts',
      code: `const onResize = () => {
  width.value = window.innerWidth
}

onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))`,
    },
    commonMistake:
      'Ошибка — добавлять listener через anonymous function и пытаться удалить другой anonymous function. Это не удалит исходный listener.',
    interviewQuestions: createInterviewQuestions("addEventListener и removeEventListener", "Cleanup"),
    remember:
      'removeEventListener требует ту же ссылку на handler.',
  },
  {
    id: 'knowledge-lifecycle-q616',
    moduleId: 'lifecycle',
    questionId: 616,
    title: 'Работа с DOM',
    category: 'DOM',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Работа с DOM во Vue нужна для задач, которые нельзя удобно выразить декларативно: focus, измерения, scroll, integration с внешней библиотекой. Обычно она выполняется через template refs. DOM-зависимый код должен учитывать момент mount.',
    whenToUse:
      'Используй DOM-доступ точечно. Для классов, условий и текста лучше декларативный template. Если нужно измерить элемент, дождись onMounted или nextTick после обновления state.',
    howItWorks:
      'Template ref связывает переменную ref с DOM-элементом. После mount Vue записывает элемент в ref. При unmount значение очищается.',
    whyImportant:
      'На интервью важно показать баланс: Vue декларативный, но иногда DOM API нужен. Главное — использовать его в правильный момент lifecycle.',
    codeExample: {
      language: 'vue',
      filename: 'MeasureBox.vue',
      code: `<script setup lang="ts">
const boxEl = ref<HTMLElement | null>(null)

onMounted(() => {
  height.value = boxEl.value?.getBoundingClientRect().height ?? 0
})
</script>`,
    },
    commonMistake:
      'Ошибка — читать DOM в setup. На этом этапе элемент ещё не существует.',
    interviewQuestions: createInterviewQuestions("Работа с DOM", "DOM"),
    remember:
      'DOM доступен после mount, а после изменения state иногда нужен nextTick.',
  },
  {
    id: 'knowledge-lifecycle-q617',
    moduleId: 'lifecycle',
    questionId: 617,
    title: 'Template refs',
    category: 'DOM',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Template ref — ссылка на DOM-элемент или дочерний компонент из template. В Composition API её обычно создают как ref(null). До mount значение обычно null.',
    whenToUse:
      'Template refs нужны для focus, измерений, scroll, canvas, media elements и imperative API дочернего компонента. Для обычной передачи данных лучше props и emits. Ref не должен становиться обходным путём вокруг component API.',
    howItWorks:
      'В template ставят `ref="inputEl"`, а в script создают переменную с таким именем. Vue заполнит её после mount. При использовании TypeScript указывают тип элемента и null.',
    whyImportant:
      'На интервью template refs часто связывают с lifecycle. Знание null до mount помогает избежать runtime-ошибок.',
    codeExample: {
      language: 'vue',
      filename: 'InputRef.vue',
      code: `<script setup lang="ts">
const inputEl = ref<HTMLInputElement | null>(null)
</script>

<template>
  <input ref="inputEl" />
</template>`,
    },
    commonMistake:
      'Ошибка — писать `inputEl.value.focus()` без проверки null. Безопаснее использовать optional chaining или проверку.',
    interviewQuestions: createInterviewQuestions("Template refs", "DOM"),
    remember:
      'Template ref появляется после mount и может быть null.',
  },
  {
    id: 'knowledge-lifecycle-q618',
    moduleId: 'lifecycle',
    questionId: 618,
    title: 'nextTick',
    category: 'Updates',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'nextTick позволяет дождаться, когда Vue применит запланированные DOM-обновления после изменения reactive state. Vue батчит updates асинхронно, поэтому DOM не всегда меняется сразу после присваивания.',
    whenToUse:
      'nextTick нужен, когда после изменения state требуется прочитать новый DOM, измерить элемент или поставить focus на условно отрендеренный input. Для логики, не зависящей от DOM, nextTick не нужен.',
    howItWorks:
      'После изменения reactive значения Vue ставит DOM update в очередь. `await nextTick()` ждёт завершения этой очереди. После этого DOM соответствует текущему state.',
    whyImportant:
      'На интервью nextTick проверяет понимание асинхронного render cycle. Это помогает объяснить, почему DOM не обновляется мгновенно после изменения ref.',
    codeExample: {
      language: 'ts',
      filename: 'next-tick-focus.ts',
      code: `isEditing.value = true
await nextTick()
inputEl.value?.focus()`,
    },
    commonMistake:
      'Ошибка — использовать nextTick как универсальную задержку. Если код не зависит от обновлённого DOM, это лишняя сложность.',
    interviewQuestions: createInterviewQuestions("nextTick", "Updates"),
    remember:
      'nextTick ждёт применения DOM-обновлений Vue.',
  },
  {
    id: 'knowledge-lifecycle-q619',
    moduleId: 'lifecycle',
    questionId: 619,
    title: 'KeepAlive lifecycle',
    category: 'KeepAlive',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'KeepAlive меняет обычную модель lifecycle: компонент может скрываться без уничтожения. Его экземпляр и локальное состояние сохраняются в кеше. Для таких переходов используются onActivated и onDeactivated.',
    whenToUse:
      'KeepAlive полезен для вкладок, cached routes, мастеров и экранов, где важно сохранить локальное состояние. Lifecycle hooks нужны для паузы и возобновления внешних ресурсов. Не стоит кешировать всё подряд, потому что это потребляет память.',
    howItWorks:
      'При первом показе компонент монтируется. При скрытии он деактивируется, но не unmount. При повторном показе активируется. onUnmounted сработает только при удалении из кеша.',
    whyImportant:
      'На интервью важно объяснить, почему cleanup только в onUnmounted может быть недостаточным для KeepAlive. Скрытый компонент всё ещё может выполнять работу.',
    codeExample: {
      language: 'vue',
      filename: 'CachedPanel.vue',
      code: `<script setup lang="ts">
onActivated(() => resume())
onDeactivated(() => pause())
</script>`,
    },
    commonMistake:
      'Ошибка — оставлять polling активным в деактивированном компоненте, если данные не нужны в фоне.',
    interviewQuestions: createInterviewQuestions("KeepAlive lifecycle", "KeepAlive"),
    remember:
      'KeepAlive требует думать о deactivated/activated, а не только mount/unmount.',
  },
  {
    id: 'knowledge-lifecycle-q620',
    moduleId: 'lifecycle',
    questionId: 620,
    title: 'Async setup',
    category: 'Async',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Async setup — setup, который возвращает Promise. Он позволяет дождаться асинхронных данных до готовности компонента, но меняет поведение рендера. Обычно его используют вместе с Suspense или продуманным loading state.',
    whenToUse:
      'Async setup подходит для сценариев, где компонент не может корректно отрисоваться без начальных async данных. Для обычной загрузки после mount часто проще локальный loading state. Важно учитывать ошибки, отмену и SSR.',
    howItWorks:
      'Если setup асинхронный, Vue ожидает его результат для завершения setup. Suspense может показать fallback. Без продуманной оболочки пользователь может увидеть задержку или некорректное состояние.',
    whyImportant:
      'На интервью async setup показывает понимание асинхронности в lifecycle. Важно не использовать его механически для любого fetch.',
    codeExample: {
      language: 'vue',
      filename: 'AsyncProfile.vue',
      code: `<script setup lang="ts">
const profile = await fetchProfile()
</script>`,
    },
    commonMistake:
      'Ошибка — делать setup async без обработки loading и error состояния. Пользовательский сценарий должен оставаться предсказуемым.',
    interviewQuestions: createInterviewQuestions("Async setup", "Async"),
    remember:
      'Async setup требует продуманного состояния загрузки или Suspense.',
  },
  {
    id: 'knowledge-lifecycle-q621',
    moduleId: 'lifecycle',
    questionId: 621,
    title: 'SSR и lifecycle hooks',
    category: 'SSR',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'SSR выполняет рендер компонента на сервере, где нет browser DOM. Поэтому DOM-зависимые lifecycle hooks вроде onMounted не выполняются на сервере. Код с window, document и layout measurements должен быть client-only.',
    whenToUse:
      'SSR-совместимость важна в Nuxt и server-rendered Vue-приложениях. DOM-интеграции размещают в onMounted или защищают проверкой среды. Загрузку данных для SSR обычно решают отдельными механизмами фреймворка.',
    howItWorks:
      'Сервер создаёт HTML без доступа к browser APIs. На клиенте происходит hydration, и после этого доступны client lifecycle hooks. Если setup напрямую обращается к window, серверный рендер может упасть.',
    whyImportant:
      'На интервью SSR и lifecycle показывают зрелость: код должен работать не только в браузерном SPA. Это особенно важно для Nuxt и SEO-sensitive приложений.',
    codeExample: {
      language: 'ts',
      filename: 'client-only.ts',
      code: `onMounted(() => {
  width.value = window.innerWidth
})`,
    },
    commonMistake:
      'Ошибка — обращаться к window в setup без проверки среды. В SSR такого объекта нет.',
    interviewQuestions: createInterviewQuestions("SSR и lifecycle hooks", "SSR"),
    remember:
      'DOM и browser APIs должны жить в client-only lifecycle коде.',
  },
  {
    id: 'knowledge-lifecycle-q622',
    moduleId: 'lifecycle',
    questionId: 622,
    title: 'Циклы обновлений',
    category: 'Pitfalls',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Цикл обновлений возникает, когда код после update снова меняет state, вызывая новый update. Особенно легко сделать это в onUpdated. Vue будет обновлять DOM снова и снова, если нет условия остановки.',
    whenToUse:
      'Если нужно реагировать на конкретное значение, лучше watch. Если нужно вычислить значение, лучше computed. onUpdated стоит оставлять для редких DOM-синхронизаций, где невозможно решить задачу декларативно.',
    howItWorks:
      'Reactive change запускает render и DOM patch. После patch вызывается onUpdated. Если hook меняет reactive state, цикл начинается заново.',
    whyImportant:
      'На интервью это один из главных lifecycle pitfalls. Хороший ответ объясняет, почему side effects должны быть ограничены и условны.',
    codeExample: {
      language: 'ts',
      filename: 'bad-updated.ts',
      code: `onUpdated(() => {
  // Опасно без условия: вызовет новое обновление.
  count.value += 1
})`,
    },
    commonMistake:
      'Ошибка — исправлять derived state внутри onUpdated. Для этого нужен computed или watch с чётким источником.',
    interviewQuestions: createInterviewQuestions("Циклы обновлений", "Pitfalls"),
    remember:
      'Не меняй state в onUpdated без строгого условия.',
  },
  {
    id: 'knowledge-lifecycle-q623',
    moduleId: 'lifecycle',
    questionId: 623,
    title: 'Lifecycle в composables',
    category: 'Composables',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Composable может регистрировать lifecycle hooks, если вызывается внутри setup-контекста. Это позволяет инкапсулировать не только state, но и cleanup внешних ресурсов. Такой composable становится безопаснее для повторного использования.',
    whenToUse:
      'Lifecycle внутри composable уместен для listeners, timers, observers, media queries, storage subscriptions и DOM-интеграций. Если composable не создаёт внешних ресурсов, hooks могут быть не нужны. Важно документировать ожидание вызова в setup.',
    howItWorks:
      'Composable вызывает onMounted, onUnmounted или другие hooks. Vue привязывает их к текущему компонентному экземпляру. При unmount компонента cleanup выполнится автоматически.',
    whyImportant:
      'На интервью это показывает зрелую архитектуру Composition API. Повторяемый lifecycle-сценарий лучше вынести вместе с cleanup, а не копировать по компонентам.',
    codeExample: {
      language: 'ts',
      filename: 'useWindowSize.ts',
      code: `export const useWindowSize = () => {
  const width = ref(0)
  const update = () => { width.value = window.innerWidth }

  onMounted(() => window.addEventListener('resize', update))
  onUnmounted(() => window.removeEventListener('resize', update))

  return { width }
}`,
    },
    commonMistake:
      'Ошибка — вынести listener в composable, но оставить cleanup в компоненте. Тогда легко забыть очистку при повторном использовании.',
    interviewQuestions: createInterviewQuestions("Lifecycle в composables", "Composables"),
    remember:
      'Composable, создающий ресурс, должен инкапсулировать cleanup.',
  },
  {
    id: 'knowledge-lifecycle-q624',
    moduleId: 'lifecycle',
    questionId: 624,
    title: 'Watcher cleanup',
    category: 'Watchers',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Watcher cleanup — функция очистки, которая выполняется перед следующим запуском watcher или при остановке эффекта. Она нужна для отмены устаревших async operations, listeners и временных ресурсов, созданных внутри watcher.',
    whenToUse:
      'Cleanup нужен, когда watcher запускает запрос, подписку, timeout или другой side effect, зависящий от текущего значения. Если значение быстро меняется, предыдущий эффект может устареть. Cleanup предотвращает race conditions.',
    howItWorks:
      'В callback watcher доступен механизм регистрации cleanup. Перед следующим запуском Vue вызовет cleanup предыдущего эффекта. Так можно отменить AbortController или отметить результат устаревшим.',
    whyImportant:
      'На интервью эта тема показывает понимание асинхронных гонок. Недостаточно просто вызвать fetch в watch; нужно учитывать, что ответы могут прийти не по порядку.',
    codeExample: {
      language: 'ts',
      filename: 'watch-cleanup.ts',
      code: `watch(query, async (value, _, onCleanup) => {
  const controller = new AbortController()
  onCleanup(() => controller.abort())

  results.value = await search(value, controller.signal)
})`,
    },
    commonMistake:
      'Ошибка — не отменять старый async effect. Медленный старый ответ может перезаписать новый результат.',
    interviewQuestions: createInterviewQuestions("Watcher cleanup", "Watchers"),
    remember:
      'Watcher cleanup защищает от устаревших side effects.',
  },
  {
    id: 'knowledge-lifecycle-q625',
    moduleId: 'lifecycle',
    questionId: 625,
    title: 'Загрузка данных в lifecycle',
    category: 'Data Fetching',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Загрузка данных в lifecycle — частый сценарий, но onMounted не всегда является единственным правильным местом. Нужно учитывать SSR, повторные заходы, loading, error, отмену запросов и кеширование. Сам hook не решает архитектуру данных.',
    whenToUse:
      'onMounted подходит для client-only загрузки, которая не нужна серверному HTML. Для SSR или route-level данных часто используют механизмы фреймворка. Для повторяемых запросов лучше composable с состояниями и cleanup.',
    howItWorks:
      'Компонент запускает async function, выставляет loading, обрабатывает error и сохраняет результат. Если компонент может исчезнуть до завершения запроса, нужна отмена или проверка актуальности.',
    whyImportant:
      'На интервью важно не отвечать "fetch всегда в mounted". Зрелый ответ обсуждает контекст: SPA, SSR, кеш, UX и ошибки.',
    codeExample: {
      language: 'ts',
      filename: 'load-on-mounted.ts',
      code: `onMounted(async () => {
  isLoading.value = true
  try {
    data.value = await loadData()
  } finally {
    isLoading.value = false
  }
})`,
    },
    commonMistake:
      'Ошибка — запускать запрос без обработки error и loading. Пользовательский интерфейс должен иметь понятные состояния.',
    interviewQuestions: createInterviewQuestions("Загрузка данных в lifecycle", "Data Fetching"),
    remember:
      'Data fetching в lifecycle требует архитектуры, а не только выбора hook.',
  },
  {
    id: 'knowledge-lifecycle-q626',
    moduleId: 'lifecycle',
    questionId: 626,
    title: 'Ownership ресурсов',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Ownership ресурсов означает, что код, который создаёт внешний ресурс, отвечает за его очистку. Ресурсом может быть listener, timer, observer, subscription, WebSocket или instance сторонней библиотеки. Это правило делает lifecycle-поведение предсказуемым.',
    whenToUse:
      'Принцип применим ко всем side effects. Если ресурс создаёт компонент, cleanup должен быть рядом в компоненте или composable. Если ресурс создаёт store или сервис, cleanup должен быть там.',
    howItWorks:
      'Создание и очистка размещаются рядом логически. Это может быть onMounted/onUnmounted, onActivated/onDeactivated или watcher cleanup. Такой код проще ревьюить и тестировать.',
    whyImportant:
      'На интервью ownership помогает объяснить не только конкретные hooks, но и инженерное мышление. Утечки часто появляются там, где непонятно, кто владеет ресурсом.',
    codeExample: {
      language: 'ts',
      filename: 'resource-owner.ts',
      code: `const observer = new ResizeObserver(updateSize)
observer.observe(element)

onUnmounted(() => observer.disconnect())`,
    },
    commonMistake:
      'Ошибка — создавать ресурс в composable, а очищать в случайном компоненте. Такой контракт легко нарушить.',
    interviewQuestions: createInterviewQuestions("Ownership ресурсов", "Architecture"),
    remember:
      'Кто создал ресурс, тот должен организовать его cleanup.',
  },
  {
    id: 'knowledge-lifecycle-q627',
    moduleId: 'lifecycle',
    questionId: 627,
    title: 'Интеграция DOM-библиотек',
    category: 'DOM',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Интеграция DOM-библиотеки — подключение внешнего кода, которому нужен реальный DOM-элемент. Это могут быть charts, editors, maps, sliders или canvas-библиотеки. Vue должен отдать элемент через template ref после mount.',
    whenToUse:
      'Такую интеграцию делают, когда библиотека не имеет native Vue-обёртки или нужен низкоуровневый контроль. Инициализацию выполняют в onMounted, обновления синхронизируют через watch, cleanup делают в onUnmounted.',
    howItWorks:
      'Компонент получает DOM ref, создаёт instance библиотеки и сохраняет ссылку. При изменении props можно вызвать update API библиотеки. При unmount нужно вызвать destroy/dispose/remove.',
    whyImportant:
      'На интервью это практический сценарий, где lifecycle действительно нужен. Важно показать полный цикл: init, update, destroy.',
    codeExample: {
      language: 'ts',
      filename: 'chart-integration.ts',
      code: `let chart: Chart | null = null

onMounted(() => {
  chart = new Chart(canvasEl.value!)
})

onUnmounted(() => {
  chart?.destroy()
})`,
    },
    commonMistake:
      'Ошибка — инициализировать DOM-библиотеку в setup. Элемент ещё не существует, и библиотека получит null.',
    interviewQuestions: createInterviewQuestions("Интеграция DOM-библиотек", "DOM"),
    remember:
      'DOM-библиотека требует mount для init и unmount для destroy.',
  },
  {
    id: 'knowledge-lifecycle-q628',
    moduleId: 'lifecycle',
    questionId: 628,
    title: 'Side effects и computed',
    category: 'Best Practices',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Side effect — действие, которое влияет на внешний мир или состояние вне чистого вычисления. Это запросы, записи в storage, DOM-операции, timers и emits. Computed должен оставаться чистым derived value.',
    whenToUse:
      'Side effects размещают в lifecycle hooks, watch или явных event handlers. Computed используют для производных значений. Если эффект зависит от изменения конкретного source, watch обычно точнее lifecycle hook.',
    howItWorks:
      'Computed кеширует результат getter по зависимостям. Если getter меняет state или запускает внешние действия, кеширование и порядок выполнения становятся непредсказуемыми. Watch явно моделирует side effect.',
    whyImportant:
      'На интервью это показывает понимание реактивной модели. Чистые computed легче тестировать и безопаснее читать.',
    codeExample: {
      language: 'ts',
      filename: 'watch-side-effect.ts',
      code: `watch(isOpen, (value) => {
  document.body.classList.toggle('modal-open', value)
})`,
    },
    commonMistake:
      'Ошибка — делать HTTP-запрос внутри computed. Запрос является side effect и должен быть вынесен.',
    interviewQuestions: createInterviewQuestions("Side effects и computed", "Best Practices"),
    remember:
      'Computed вычисляет, watch и lifecycle выполняют side effects.',
  },
  {
    id: 'knowledge-lifecycle-q629',
    moduleId: 'lifecycle',
    questionId: 629,
    title: 'Порядок первого render',
    category: 'Lifecycle',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Первый client-side render проходит через подготовку setup, before mount, вставку DOM и mounted. На ранних этапах DOM ещё недоступен. После mounted можно работать с template refs.',
    whenToUse:
      'Знание порядка нужно для выбора правильного места кода. State и computed создают в setup, DOM-интеграции — в onMounted, cleanup — в onUnmounted. Для обновлений используются update hooks или watch.',
    howItWorks:
      'Vue создаёт компонент, выполняет setup, подготавливает render, монтирует DOM и вызывает mounted hooks. Дальше reactive changes запускают update cycle. При удалении срабатывает unmount cycle.',
    whyImportant:
      'На интервью порядок lifecycle помогает ответить на вопросы о DOM, refs, async и cleanup. Это ментальная модель, а не просто список hooks.',
    codeExample: {
      language: 'ts',
      filename: 'mount-order.ts',
      code: `const steps: string[] = ['setup']
onBeforeMount(() => steps.push('before mount'))
onMounted(() => steps.push('mounted'))`,
    },
    commonMistake:
      'Ошибка — ожидать, что onMounted выполнится до setup. setup всегда готовит компонент раньше mounted.',
    interviewQuestions: createInterviewQuestions("Порядок первого render", "Lifecycle"),
    remember:
      'Сначала setup, затем mount-подготовка, затем DOM, затем onMounted.',
  },
  {
    id: 'knowledge-lifecycle-q630',
    moduleId: 'lifecycle',
    questionId: 630,
    title: 'Архитектура lifecycle effects',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Архитектура lifecycle effects — способ организовать side effects так, чтобы компонент оставался читаемым. Несвязанные listeners, timers, fetches и DOM-интеграции не должны лежать одной большой кучей. Их лучше группировать по ответственности.',
    whenToUse:
      'Если компонент содержит несколько независимых lifecycle-сценариев, стоит выделить composables: useWindowSize, usePolling, useFocusTrap, useChart. Если эффект уникален и короткий, он может остаться в компоненте. Баланс важнее механической декомпозиции.',
    howItWorks:
      'Каждый composable инкапсулирует state, запуск эффекта и cleanup. Компонент вызывает composables и собирает UI. Такой подход упрощает тестирование и повторное использование.',
    whyImportant:
      'На интервью это показывает senior-level мышление. Знание hooks недостаточно; нужно уметь не превратить компонент в набор несвязанных side effects.',
    codeExample: {
      language: 'ts',
      filename: 'component-effects.ts',
      code: `const { width } = useWindowSize()
const { start, stop } = usePolling(loadData)
const { focusFirst } = useFocusTrap(dialogEl)`,
    },
    commonMistake:
      'Ошибка — объединять всю lifecycle-логику в один огромный onMounted и один огромный onUnmounted. Связи между ресурсами становятся неочевидными.',
    interviewQuestions: createInterviewQuestions("Архитектура lifecycle effects", "Architecture"),
    remember:
      'Lifecycle effects нужно группировать по ответственности и выносить повторяемые сценарии.',
  },
]
