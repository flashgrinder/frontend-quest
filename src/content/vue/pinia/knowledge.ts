import type { ContentKnowledgeCard } from '../../../types/content'
import type { CodeExample, InterviewLevel, KnowledgeRarity } from '../../../types/knowledge'

interface PiniaCardInput {
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

const createCard = (input: PiniaCardInput): ContentKnowledgeCard => ({
  id: `pinia-${input.questionId}`,
  moduleId: 'pinia',
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
  interviewQuestions: input.interviewQuestions,
  remember: input.remember,
})

const createInterviewQuestions = (title: string, category: string): string[] => [
  `Какие задачи решает ${title} в теме ${category} (Pinia)?`,
  `Какие ограничения ${title} важно учитывать в контексте Pinia?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

export const piniaKnowledgeCards: ContentKnowledgeCard[] = [
  createCard({
    questionId: 1301,
    title: 'Назначение Pinia',
    category: 'State Management',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Pinia — официальная библиотека управления состоянием для Vue. Она создаёт stores с state, getters и actions, которые можно использовать в компонентах и composables. Store становится явным источником правды для разделяемых данных.',
    whenToUse:
      'Pinia нужна, когда состояние используется несколькими независимыми частями интерфейса, должно переживать навигацию или требует централизованных actions. Типичные примеры: пользователь, корзина, настройки, permissions, кеш загруженных сущностей. Локальные UI-флаги лучше оставлять в компоненте или composable.',
    howItWorks:
      'Store объявляется через defineStore и подключается после установки Pinia instance в Vue-приложение. Компоненты вызывают useStore и получают реактивный объект. Изменения state автоматически обновляют потребителей, а actions описывают сценарии изменения.',
    whyImportant:
      'Без управляемого state layer shared state быстро превращается в props drilling, event chains или случайные глобальные переменные. Pinia делает зависимости явными и хорошо интегрируется с Vue Devtools и TypeScript. На интервью важно показать критерии выбора, а не просто назвать библиотеку.',
    codeExample: {
      language: 'ts',
      filename: 'stores/user.ts',
      code: `export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    authenticated: false,
  }),
  actions: {
    login(name: string) {
      this.name = name
      this.authenticated = true
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — выносить в Pinia любой локальный ref. Глобальное состояние должно иметь причину: разделяемость, жизненный цикл или доменный контракт.',
    interviewQuestions: createInterviewQuestions("Назначение Pinia", "State Management"),
    remember: 'Pinia нужна для управляемого shared state, а не для каждого локального значения.',
  }),
  createCard({
    questionId: 1302,
    title: 'Pinia и Vuex',
    category: 'State Management',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Pinia — современная альтернатива Vuex для Vue 3. Она сохраняет идею централизованного store, но предлагает более простой API, лучшую TypeScript-инференцию и отсутствие обязательных mutations. Модель становится ближе к Composition API.',
    whenToUse:
      'Pinia выбирают для новых Vue 3 проектов и при миграции с Vuex, когда нужна более лёгкая модель store. Vuex может оставаться в legacy-коде, но для новой архитектуры Pinia обычно проще. Миграцию стоит делать постепенно, если store большой.',
    howItWorks:
      'В Pinia state меняется напрямую или через actions, а getters похожи на computed. Mutations из Vuex не нужны как отдельный слой. Store объявляется через defineStore и может быть option или setup store.',
    whyImportant:
      'Сравнение Pinia и Vuex часто проверяет не знание брендов, а понимание эволюции state management во Vue. Нужно уметь объяснить, почему mutations исчезли и как это влияет на DX. Также важно помнить, что простота API не отменяет архитектурную дисциплину.',
    codeExample: {
      language: 'ts',
      filename: 'stores/cart.ts',
      code: `export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] as CartItem[] }),
  getters: {
    total: (state) => state.items.reduce((sum, item) => sum + item.price, 0),
  },
  actions: {
    add(item: CartItem) {
      this.items.push(item)
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — переносить Vuex-паттерны механически и создавать лишний слой mutations вручную. В Pinia actions уже достаточно для явных сценариев.',
    interviewQuestions: [
      'Почему в Pinia нет обязательных mutations?',
      'Что упрощается в TypeScript по сравнению с Vuex?',
      'Какие риски остаются даже с более простым API?',
    ],
    remember: 'Pinia упрощает модель Vuex, но не отменяет правила хорошей архитектуры состояния.',
  }),
  createCard({
    questionId: 1303,
    title: 'createPinia',
    category: 'Setup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'createPinia создаёт экземпляр Pinia, который подключается к Vue-приложению как plugin. Этот экземпляр хранит registry stores, plugins и внутренний контекст. Без него useStore не получает корректную Pinia-интеграцию.',
    whenToUse:
      'createPinia вызывают на этапе bootstrap приложения. В обычном Vue-приложении его подключают рядом с router и другими plugins. В SSR важно создавать отдельный экземпляр на запрос, чтобы state пользователей не смешивался.',
    howItWorks:
      'Vue получает Pinia через app.use(pinia). После этого stores могут использовать inject-контекст Pinia и регистрироваться при вызове. Plugins Pinia добавляются на этот экземпляр до или во время инициализации.',
    whyImportant:
      'Правильная инициализация — база для stores, devtools, plugins и SSR. Ошибка на этом уровне приводит к странным проблемам, которые выглядят как сломанный store. На интервью это проверяет понимание Pinia как Vue plugin.',
    codeExample: {
      language: 'ts',
      filename: 'main.ts',
      code: `const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')`,
    },
    commonMistake:
      'Ошибка — создавать новый Pinia instance внутри компонента или action. Экземпляр должен быть частью bootstrap приложения.',
    interviewQuestions: [
      'Зачем Pinia подключается через app.use?',
      'Почему SSR требует отдельный Pinia instance на запрос?',
      'Где подключать Pinia plugins?',
    ],
    remember: 'createPinia создаёт plugin instance, а не отдельный store.',
  }),
  createCard({
    questionId: 1304,
    title: 'Store id',
    category: 'defineStore',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'Store id — уникальное имя store, передаваемое первым аргументом defineStore. Оно используется Pinia для регистрации, devtools, plugins и SSR serialization. Стабильный id помогает сохранять предсказуемую структуру состояния.',
    whenToUse:
      'Id нужен каждому store. Его стоит делать коротким, стабильным и доменным: user, cart, permissions, products. Переименование id в зрелом проекте может повлиять на persistence, devtools и миграцию сохранённого состояния.',
    howItWorks:
      'Pinia регистрирует store под этим id и связывает его с state tree. Plugins получают store.$id, а persisted state часто использует id как ключ. В SSR id помогает сопоставить серверное состояние с клиентским store.',
    whyImportant:
      'На интервью store id показывает понимание не только синтаксиса, но и инфраструктуры вокруг store. Нестабильные id усложняют отладку и persistence. Это маленькая деталь с большим влиянием на сопровождение.',
    codeExample: {
      language: 'ts',
      filename: 'stores/session.ts',
      code: `export const useSessionStore = defineStore('session', {
  state: () => ({
    userId: null as string | null,
  }),
})`,
    },
    commonMistake:
      'Ошибка — генерировать id динамически. Store id должен быть стабильным и предсказуемым.',
    interviewQuestions: [
      'Где используется store id?',
      'Почему id должен быть стабильным?',
      'Как store id связан с persisted state?',
    ],
    remember: 'Store id — часть публичной инфраструктуры store.',
  }),
  createCard({
    questionId: 1305,
    title: 'Option stores',
    category: 'Store Types',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Option store — формат defineStore с объектом, где явно разделены state, getters и actions. Он похож на классическую конфигурацию и хорошо читается в командах. Такой формат удобен для доменных stores с понятной структурой.',
    whenToUse:
      'Option store подходит для большинства stores, где нужны state, derived values и actions без сложной Composition API-логики внутри. Он хорошо воспринимается разработчиками, знакомыми с Vuex. Для composables, watchers и inject внутри store иногда удобнее setup store.',
    howItWorks:
      'state объявляется функцией, getters получают state или this, actions используют this для доступа к store. Pinia типизирует this и возвращает useStore composable. State можно менять напрямую или внутри actions.',
    whyImportant:
      'Option store помогает держать структуру store предсказуемой. На интервью важно объяснить разницу между state, getters и actions на уровне ответственности. Это база для разговоров о больших stores и типизации.',
    codeExample: {
      language: 'ts',
      filename: 'stores/products.ts',
      code: `export const useProductsStore = defineStore('products', {
  state: () => ({ items: [] as Product[] }),
  getters: {
    available: (state) => state.items.filter((item) => item.inStock),
  },
  actions: {
    setItems(items: Product[]) {
      this.items = items
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — выполнять side effects в getters. Для запросов и изменений состояния нужны actions.',
    interviewQuestions: createInterviewQuestions("Pinia и Vuex", "State Management"),
    remember: 'Option store явно разделяет state, getters и actions.',
  }),
  createCard({
    questionId: 1306,
    title: 'Setup stores',
    category: 'Store Types',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Setup store — defineStore в виде функции, которая возвращает refs, computed и методы. Он похож на composable, но получает store identity, devtools и Pinia plugins. Такой формат удобен, когда нужна Composition API-логика внутри store.',
    whenToUse:
      'Setup store полезен для сложной композиции reactive primitives, watchers, shared composables или зависимости от других stores. Его стоит выбирать осознанно, если option store становится неудобным. Для простой state/getters/actions структуры option store часто читается проще.',
    howItWorks:
      'Внутри setup store создаются ref/reactive/computed и функции. Всё, что возвращается, становится публичным API store. Невозвращённые значения остаются приватными для реализации.',
    whyImportant:
      'Setup store даёт гибкость, но требует дисциплины публичного API. На интервью важно не путать его с обычным composable: store имеет глобальную identity и управляемый lifecycle Pinia. Это влияет на SSR, devtools и persistence.',
    codeExample: {
      language: 'ts',
      filename: 'stores/sidebar.ts',
      code: `export const useSidebarStore = defineStore('sidebar', () => {
  const opened = ref(false)
  const toggle = () => {
    opened.value = !opened.value
  }

  return { opened, toggle }
})`,
    },
    commonMistake:
      'Ошибка — вернуть из setup store всё подряд. Публичным должен быть только API, который действительно нужен потребителям.',
    interviewQuestions: [
      'Чем setup store отличается от composable?',
      'Когда setup store лучше option store?',
      'Что произойдёт с невозвращёнными refs?',
    ],
    remember: 'Setup store сочетает Composition API и Pinia identity.',
  }),
  createCard({
    questionId: 1307,
    title: 'State factory',
    category: 'State',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'State factory — функция state, которая возвращает начальный объект состояния. Такой подход создаёт свежий state для экземпляра приложения. Это особенно важно в SSR и тестах.',
    whenToUse:
      'В option stores state всегда должен быть функцией. Это защищает от случайного разделения одного объекта между несколькими экземплярами. В setup store аналогичную роль выполняют refs, созданные внутри defineStore callback.',
    howItWorks:
      'Pinia вызывает state-функцию при создании store и получает объект начального состояния. $reset тоже опирается на эту функцию, чтобы восстановить начальные значения. Если state был бы общим объектом, данные могли бы протекать между контекстами.',
    whyImportant:
      'На интервью это связывает Pinia с SSR-безопасностью. Для клиентского SPA проблема может казаться невидимой, но на сервере общий объект state приводит к критичным утечкам данных между пользователями. Поэтому factory-подход является не формальностью, а защитой архитектуры.',
    codeExample: {
      language: 'ts',
      filename: 'stores/filters.ts',
      code: `export const useFiltersStore = defineStore('filters', {
  state: () => ({
    search: '',
    tags: [] as string[],
  }),
})`,
    },
    commonMistake:
      'Ошибка — выносить initial state как изменяемый объект и переиспользовать его напрямую.',
    interviewQuestions: [
      'Почему state в option store является функцией?',
      'Как state factory связан с SSR?',
      'Как $reset получает начальное состояние?',
    ],
    remember: 'State должен создаваться заново, а не разделяться как общий объект.',
  }),
  createCard({
    questionId: 1308,
    title: 'Getters',
    category: 'Derived State',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Getter в Pinia — производное значение на основе state или других getters. По смыслу он близок к computed: результат должен зависеть от реактивных источников и не иметь side effects. Getter помогает не хранить дублирующиеся вычисляемые данные в state.',
    whenToUse:
      'Getters подходят для фильтрации, подсчётов, derived flags, форматированных списков и агрегаций. Если вычисление дорогое и зависит от state, getter делает его централизованным. Если нужно изменить state или выполнить запрос, нужен action.',
    howItWorks:
      'Pinia делает getters реактивными и доступными как свойства store. Они обновляются при изменении зависимостей. В option store getter может быть стрелочной функцией от state или обычной функцией с this.',
    whyImportant:
      'Производные данные часто становятся источником рассинхронизации, если хранить их отдельно. Getter уменьшает количество ручных обновлений и делает правила вычисления видимыми. На интервью это проверяет понимание derived state.',
    codeExample: {
      language: 'ts',
      filename: 'stores/cart.ts',
      code: `export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] as CartItem[] }),
  getters: {
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price, 0),
  },
})`,
    },
    commonMistake:
      'Ошибка — менять state внутри getter. Getter должен вычислять, а не выполнять сценарий.',
    interviewQuestions: [
      'Чем getter похож на computed?',
      'Когда derived state не стоит хранить в state?',
      'Почему side effects в getter опасны?',
    ],
    remember: 'Getter вычисляет производное значение и не должен менять состояние.',
  }),
  createCard({
    questionId: 1309,
    title: 'Actions',
    category: 'Actions',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Action в Pinia — метод store для изменения состояния и выполнения сценариев. Actions могут быть синхронными или async, могут вызывать API и другие actions. Они делают намерение изменения state явным.',
    whenToUse:
      'Actions используют для login, загрузки данных, сохранения формы, optimistic update, reset сценариев и любых операций с side effects. Прямое присваивание state допустимо для простых случаев, но доменную логику лучше оформлять action. Это упрощает тестирование и review.',
    howItWorks:
      'В option store actions имеют доступ к this, где находятся state, getters и другие actions. В setup store action — обычная возвращаемая функция. Async action возвращает Promise, поэтому компонент может await-ить результат.',
    whyImportant:
      'Actions являются основным местом бизнес-сценариев в store. Если изменения разбросаны по компонентам и watchers, поведение становится труднее отследить. На интервью важно показать, где заканчивается UI и начинается state workflow.',
    codeExample: {
      language: 'ts',
      filename: 'stores/orders.ts',
      code: `export const useOrdersStore = defineStore('orders', {
  state: () => ({ items: [] as Order[], loading: false }),
  actions: {
    async loadOrders() {
      this.loading = true
      try {
        this.items = await fetchOrders()
      } finally {
        this.loading = false
      }
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — держать сложную mutation-логику в компонентах вместо action с понятным названием.',
    interviewQuestions: [
      'Что должно жить в actions?',
      'Можно ли actions делать async?',
      'Чем action отличается от getter?',
    ],
    remember: 'Action описывает сценарий изменения состояния или side effect.',
  }),
  createCard({
    questionId: 1310,
    title: 'storeToRefs',
    category: 'Usage',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'storeToRefs — helper Pinia для безопасной деструктуризации state и getters. Он превращает реактивные свойства store в refs, сохраняя связь с исходным store. Actions при этом обычно берутся напрямую из store.',
    whenToUse:
      'storeToRefs нужен, когда в компоненте хочется получить отдельные переменные из store и не потерять реактивность. Особенно часто это встречается в script setup. Если используется store.count напрямую, helper не обязателен.',
    howItWorks:
      'Pinia проходит по реактивным свойствам store и создаёт refs на каждое из них. Методы/actions не превращаются в refs. В template refs автоматически разворачиваются Vue, а в script нужен доступ через value.',
    whyImportant:
      'Обычная деструктуризация реактивного объекта остаётся частой ошибкой. Потеря реактивности выглядит как баг UI, хотя причина находится в способе чтения store. На интервью это проверяет практический опыт с Composition API.',
    codeExample: {
      language: 'vue',
      filename: 'CartSummary.vue',
      code: `<script setup lang="ts">
const cartStore = useCartStore()
const { items, totalPrice } = storeToRefs(cartStore)
const { add } = cartStore
</script>`,
    },
    commonMistake:
      'Ошибка — деструктурировать state через const { items } = cartStore и ждать, что реактивность всегда сохранится.',
    interviewQuestions: [
      'Зачем нужен storeToRefs?',
      'Почему actions не нужно оборачивать в refs?',
      'Когда можно читать store без деструктуризации?',
    ],
    remember: 'storeToRefs сохраняет реактивность state и getters при деструктуризации.',
  }),
  createCard({
    questionId: 1311,
    title: 'Композиция stores',
    category: 'Architecture',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Композиция stores — использование одного Pinia store внутри другого. Это позволяет строить сценарии поверх нескольких доменных областей. Важно, чтобы такие связи не превращались в скрытый граф циклических зависимостей.',
    whenToUse:
      'Связь stores уместна, когда action одного домена действительно зависит от состояния другого: например order store читает user id или permissions store проверяет доступ. Для произвольного доступа ко всему state лучше создать слой сервиса или явный orchestration composable.',
    howItWorks:
      'В action или getter можно вызвать другой useStore. Это создаёт зависимость между модулями. Если stores вызывают друг друга при инициализации, порядок загрузки может стать проблемой.',
    whyImportant:
      'На уровне Middle+/Senior вопрос композиции показывает архитектурное мышление. Pinia не запрещает связи, но не проектирует границы домена автоматически. Хорошая композиция делает flow понятным, плохая создаёт tight coupling.',
    codeExample: {
      language: 'ts',
      filename: 'stores/orders.ts',
      code: `export const useOrdersStore = defineStore('orders', {
  actions: {
    async loadMine() {
      const session = useSessionStore()
      this.items = await fetchOrdersByUser(session.userId)
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — импортировать stores друг в друга и запускать actions в момент создания store. Это создаёт риск циклической инициализации.',
    interviewQuestions: [
      'Можно ли использовать store внутри другого store?',
      'Как избежать циклических зависимостей?',
      'Когда лучше вынести orchestration в отдельный слой?',
    ],
    remember: 'Stores можно композиционировать, но направление зависимостей должно быть явным.',
  }),
  createCard({
    questionId: 1312,
    title: '$reset',
    category: 'State Lifecycle',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      '$reset — метод option store, который возвращает state к начальному состоянию. Он использует state factory, чтобы получить свежие значения. Это полезно для очистки данных после logout или смены контекста.',
    whenToUse:
      '$reset используют при logout, переключении аккаунта, закрытии wizard или сбросе transient state. Для setup store reset обычно реализуют вручную, потому что состояние описано refs. Важно сбрасывать не только данные, но и loading/error flags.',
    howItWorks:
      'Pinia вызывает state-функцию и заменяет текущий state начальным объектом. Подписчики и компоненты получают реактивное обновление. Если часть состояния persisted, нужно согласовать reset с очисткой storage.',
    whyImportant:
      'Сброс состояния — частая production-ошибка в приложениях с авторизацией. Если забыть очистить store, следующий пользователь может увидеть старые данные. На интервью это связывает state management с безопасностью и UX.',
    codeExample: {
      language: 'ts',
      filename: 'stores/session.ts',
      code: `export const useSessionStore = defineStore('session', {
  state: () => ({ token: null as string | null, user: null as User | null }),
  actions: {
    logout() {
      this.$reset()
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — очищать только token, но оставлять profile, permissions и cached private data.',
    interviewQuestions: [
      'Когда нужно сбрасывать store?',
      'Почему reset важен при logout?',
      'Как сбрасывать setup store?',
    ],
    remember: '$reset возвращает option store к начальному state.',
  }),
  createCard({
    questionId: 1313,
    title: '$patch',
    category: 'State Mutation',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      '$patch — API Pinia для группового изменения state. Он может принимать partial object или функцию, внутри которой выполняются несколько mutations. Это помогает сделать операцию более явной в devtools и подписках.',
    whenToUse:
      '$patch полезен для batch-изменений, применения server payload, сброса нескольких связанных полей или сложной mutation коллекции. Для одного простого присваивания прямое изменение state обычно нормально. Выбор зависит от читаемости операции.',
    howItWorks:
      'Object patch поверхностно применяет значения к state. Function patch даёт доступ к draft-like state и позволяет выполнить несколько изменений. Подписчики видят mutation как patch operation.',
    whyImportant:
      'В больших stores важно понимать не только что изменилось, но и какой сценарий это сделал. $patch помогает группировать изменения и улучшает observability. На интервью это показывает практический уровень работы с Pinia.',
    codeExample: {
      language: 'ts',
      filename: 'stores/profile.ts',
      code: `profileStore.$patch({
  name: 'Ada',
  status: 'ready',
})

profileStore.$patch((state) => {
  state.tags.push('mentor')
  state.updatedAt = new Date().toISOString()
})`,
    },
    commonMistake:
      'Ошибка — использовать $patch для всего подряд и ухудшать читаемость простых изменений.',
    interviewQuestions: [
      'Чем object patch отличается от function patch?',
      'Когда прямое присваивание лучше $patch?',
      'Как $patch виден в devtools?',
    ],
    remember: '$patch группирует связанные изменения state.',
  }),
  createCard({
    questionId: 1314,
    title: '$subscribe',
    category: 'Subscriptions',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      '$subscribe — подписка на изменения state конкретного store. Она получает mutation metadata и новое состояние. Часто используется для persistence, debug logging или синхронизации с внешним слоем.',
    whenToUse:
      '$subscribe подходит, когда нужно реагировать на любые изменения store централизованно. Например, сохранить настройки в storage или отправить техническое событие. Для бизнес-логики чаще лучше action, потому что он выражает намерение.',
    howItWorks:
      'Подписка регистрируется на store и вызывается после mutations. Она возвращает функцию отписки. Важно управлять lifecycle подписки, особенно если она создаётся внутри компонента.',
    whyImportant:
      'Подписки легко превратить в скрытую бизнес-логику, которую трудно отследить. На интервью стоит объяснить разницу между реакцией на изменение и явным сценарием action. $subscribe — инфраструктурный инструмент, а не замена архитектуры.',
    codeExample: {
      language: 'ts',
      filename: 'persistTheme.ts',
      code: `const settings = useSettingsStore()

settings.$subscribe((_mutation, state) => {
  localStorage.setItem('theme', state.theme)
})`,
    },
    commonMistake:
      'Ошибка — выполнять важные доменные действия только в $subscribe. Такой flow плохо читается на review.',
    interviewQuestions: [
      'Для чего нужен $subscribe?',
      'Чем подписка отличается от action?',
      'Почему важно отписываться?',
    ],
    remember: '$subscribe подходит для инфраструктурной реакции на изменение store.',
  }),
  createCard({
    questionId: 1315,
    title: '$onAction',
    category: 'Instrumentation',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      '$onAction — подписка на вызовы actions store. Она позволяет реагировать на старт, успешное завершение и ошибку action. Это удобно для instrumentation, analytics, audit и debug tooling.',
    whenToUse:
      '$onAction используют, когда важен lifecycle именно actions, а не любое изменение state. Например, нужно измерить длительность загрузки или залогировать падение action. Для UI-сценария внутри компонента обычно достаточно await action.',
    howItWorks:
      'Callback получает name, args, after и onError. after вызывается после успешного завершения, onError — при ошибке. Подписка возвращает cleanup-функцию.',
    whyImportant:
      'На production-уровне store часто должен быть наблюдаемым. $onAction помогает добавить observability без размазывания логов по каждому action. Но бизнес-логика не должна исчезать в instrumentation.',
    codeExample: {
      language: 'ts',
      filename: 'piniaActionLogger.ts',
      code: `ordersStore.$onAction(({ name, after, onError }) => {
  const startedAt = performance.now()

  after(() => console.info(name, performance.now() - startedAt))
  onError((error) => console.error(name, error))
})`,
    },
    commonMistake:
      'Ошибка — менять state внутри глобального action logger без явной причины. Instrumentation должен наблюдать, а не скрыто управлять доменом.',
    interviewQuestions: [
      'Чем $onAction отличается от $subscribe?',
      'Как логировать ошибки actions?',
      'Какие риски у скрытой instrumentation?',
    ],
    remember: '$onAction наблюдает lifecycle actions.',
  }),
  createCard({
    questionId: 1316,
    title: 'Pinia plugins',
    category: 'Plugins',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Pinia plugin — функция, которая расширяет stores при создании. Plugin может добавлять свойства, подписки, persistence, instrumentation или интеграцию с внешними сервисами. Это сквозной механизм для поведения, общего нескольким stores.',
    whenToUse:
      'Plugins уместны для повторяющейся инфраструктурной логики: persisted state, analytics, error reporting, dependency injection. Если поведение нужно одному store, проще оставить его внутри store. Plugin должен иметь понятный контракт и не скрывать бизнес-логику.',
    howItWorks:
      'Plugin регистрируется через pinia.use. Pinia вызывает его для каждого store и передаёт контекст: store, options, pinia, app. Возвращаемые свойства могут попасть в store API.',
    whyImportant:
      'Plugins позволяют масштабировать инфраструктурные задачи без копирования кода. Но они также создают скрытый слой поведения. На senior-интервью важно обсуждать observability, порядок подключения и SSR-безопасность.',
    codeExample: {
      language: 'ts',
      filename: 'piniaPersistPlugin.ts',
      code: `pinia.use(({ store }) => {
  const key = \`pinia:\${store.$id}\`
  const saved = localStorage.getItem(key)

  if (saved) store.$patch(JSON.parse(saved))
  store.$subscribe(() => localStorage.setItem(key, JSON.stringify(store.$state)))
})`,
    },
    commonMistake:
      'Ошибка — делать plugin, который магически меняет доменную логику stores. Plugin должен решать инфраструктурную задачу.',
    interviewQuestions: [
      'Как работает pinia.use?',
      'Какие задачи подходят для plugin?',
      'Какие SSR-риски есть у plugin?',
    ],
    remember: 'Pinia plugin расширяет stores сквозным инфраструктурным поведением.',
  }),
  createCard({
    questionId: 1317,
    title: 'Persistence и localStorage',
    category: 'Persistence',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Persistence — сохранение части store за пределами памяти JavaScript, например в localStorage. Это позволяет восстановить настройки или некритичный state после перезагрузки страницы. Но браузерное хранилище не является безопасным местом для секретов.',
    whenToUse:
      'localStorage подходит для темы, языка, состояния onboarding, черновиков и некритичных предпочтений. Для токенов, персональных данных и приватных backend-ответов нужны другие механизмы. Также важно учитывать миграцию схемы сохранённого state.',
    howItWorks:
      'Store читает сохранённые данные на клиенте и подписывается на изменения через $subscribe. При изменении state выбранная часть сериализуется в JSON. В SSR такое чтение должно выполняться только в браузере.',
    whyImportant:
      'Persistence часто выглядит простой задачей, но быстро упирается в security, миграции и рассинхронизацию. На интервью нужно показать осторожность: сохранять не всё, а только безопасную и нужную часть state. Это отличает production-подход от демо.',
    codeExample: {
      language: 'ts',
      filename: 'settingsPersistence.ts',
      code: `const settings = useSettingsStore()

settings.$subscribe((_mutation, state) => {
  localStorage.setItem('settings', JSON.stringify({
    theme: state.theme,
    density: state.density,
  }))
})`,
    },
    commonMistake:
      'Ошибка — сохранять весь store целиком, включая временные ошибки, loading flags и чувствительные данные.',
    interviewQuestions: [
      'Что можно сохранять в localStorage?',
      'Почему нельзя хранить секреты в localStorage?',
      'Как мигрировать persisted state?',
    ],
    remember: 'Persist только безопасную и действительно нужную часть store.',
  }),
  createCard({
    questionId: 1318,
    title: 'sessionStorage',
    category: 'Persistence',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'sessionStorage — браузерное хранилище, связанное с конкретной вкладкой и её сессией. В отличие от localStorage, данные не предназначены для долгого хранения после закрытия вкладки. Для Pinia это вариант временной persistence.',
    whenToUse:
      'sessionStorage подходит для временных фильтров, состояния multi-step формы, transient UI-сценариев и данных, которые не должны жить долго. Он не решает задачу безопасности секретов. Для долгоживущих предпочтений чаще выбирают localStorage или серверный профиль.',
    howItWorks:
      'Механика похожа на localStorage: данные сериализуются в JSON и восстанавливаются на клиенте. Отличие в lifecycle: вкладки имеют отдельные sessionStorage. Это может быть полезно, если разные вкладки должны иметь независимый контекст.',
    whyImportant:
      'Выбор storage влияет на UX и безопасность. На интервью важно уметь объяснить не только API, но и жизненный цикл данных. Неправильный storage приводит к неожиданному восстановлению или потере состояния.',
    codeExample: {
      language: 'ts',
      filename: 'wizardSession.ts',
      code: `wizardStore.$subscribe((_mutation, state) => {
  sessionStorage.setItem('checkout-step', String(state.step))
})`,
    },
    commonMistake:
      'Ошибка — ожидать, что sessionStorage синхронизируется между вкладками или устройствами.',
    interviewQuestions: [
      'Чем sessionStorage отличается от localStorage?',
      'Какие данные подходят для sessionStorage?',
      'Почему storage не равен secure storage?',
    ],
    remember: 'sessionStorage подходит для временного state в рамках вкладки.',
  }),
  createCard({
    questionId: 1319,
    title: 'SSR и browser API',
    category: 'SSR',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'SSR-ограничения Pinia связаны с тем, что store может создаваться на сервере. На сервере нет window, document, localStorage и sessionStorage. Поэтому browser API нельзя читать на верхнем уровне store без проверки окружения.',
    whenToUse:
      'SSR-safe подход нужен для Nuxt, server-rendered Vue и тестового окружения без DOM. Browser-only state лучше восстанавливать после hydration или в client-only plugin. Server-safe state должен быть сериализуемым и не зависеть от DOM.',
    howItWorks:
      'Store может быть создан при серверном render. Если во время создания выполняется localStorage.getItem, код падает. Безопасный вариант — проверка import.meta.client, onMounted в компоненте или plugin, который запускается только на клиенте.',
    whyImportant:
      'SSR-баги часто появляются только после деплоя или включения server rendering. На интервью Middle+/Senior уровня ожидается понимание окружений выполнения. State management не может игнорировать server/client boundary.',
    codeExample: {
      language: 'ts',
      filename: 'clientRestore.ts',
      code: `if (import.meta.client) {
  const saved = localStorage.getItem('settings')
  if (saved) settingsStore.$patch(JSON.parse(saved))
}`,
    },
    commonMistake:
      'Ошибка — читать localStorage при импорте файла store. Такой код ломает SSR и усложняет тестирование.',
    interviewQuestions: [
      'Почему localStorage недоступен при SSR?',
      'Где безопасно восстанавливать persisted state?',
      'Как отделить server-safe и client-only state?',
    ],
    remember: 'Browser API в store требуют client-only границы.',
  }),
  createCard({
    questionId: 1320,
    title: 'Hydration состояния',
    category: 'SSR',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Hydration состояния Pinia — перенос начального state, созданного на сервере, в клиентский store. Клиент должен продолжить работу с теми же данными, которые использовались для HTML. Несогласованность приводит к mismatch или повторным загрузкам.',
    whenToUse:
      'Это важно для SSR-страниц, где store содержит данные первого экрана, permissions или server-derived flags. State должен быть сериализуемым и безопасным для клиента. Секреты и server-only объекты нельзя отправлять в hydration payload.',
    howItWorks:
      'Сервер заполняет Pinia state, затем состояние сериализуется и встраивается в HTML/payload. На клиенте Pinia восстанавливает этот state до монтирования компонентов. После этого компоненты используют уже гидратированный store.',
    whyImportant:
      'Hydration связывает backend data loading, security и UX. Если state отличается между сервером и клиентом, пользователь видит скачки, повторные запросы или ошибки. На интервью это один из признаков зрелого понимания SSR.',
    codeExample: {
      language: 'ts',
      filename: 'serverPrefetch.ts',
      code: `const products = useProductsStore()

if (import.meta.server) {
  await products.loadFeatured()
}`,
    },
    commonMistake:
      'Ошибка — класть в hydrated state private token или объект с несериализуемыми полями.',
    interviewQuestions: [
      'Как Pinia state попадает с сервера на клиент?',
      'Почему hydrated state должен быть безопасным?',
      'Что вызывает hydration mismatch?',
    ],
    remember: 'Hydration требует одинакового и безопасного начального state.',
  }),
  createCard({
    questionId: 1321,
    title: 'runtimeConfig и store',
    category: 'Nuxt',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'runtimeConfig в Nuxt разделяет public и private configuration. Public values доступны клиенту, private values предназначены для server runtime. Pinia store в браузере не должен получать private config.',
    whenToUse:
      'В store можно хранить безопасные public settings, которые реально нужны UI. Private API keys, internal URLs и secrets должны использоваться в server routes, plugins server-side или backend layer. Store не является сейфом.',
    howItWorks:
      'Клиентский store сериализуется и доступен через devtools или JavaScript runtime. Если private config попал в store, он может оказаться у пользователя. Серверный код должен преобразовать private данные в безопасный публичный контракт.',
    whyImportant:
      'Security boundary часто ломается не в криптографии, а в неправильном переносе данных на клиент. На senior-интервью важно явно различать server config и client state. Pinia удобна, но не должна скрывать границы окружений.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/public-settings.get.ts',
      code: `export default defineEventHandler(() => {
  const config = useRuntimeConfig()

  return {
    supportEmail: config.public.supportEmail,
  }
})`,
    },
    commonMistake:
      'Ошибка — копировать весь runtimeConfig в Pinia store ради удобного доступа в компонентах.',
    interviewQuestions: [
      'Чем public runtimeConfig отличается от private?',
      'Почему store не должен хранить secrets?',
      'Где использовать private runtimeConfig?',
    ],
    remember: 'В клиентский store попадают только client-safe значения.',
  }),
  createCard({
    questionId: 1322,
    title: 'Store или composable',
    category: 'Architecture',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Выбор между Pinia store и composable — архитектурное решение о масштабе состояния. Composable переиспользует логику, а store задаёт управляемый shared state с identity. Эти инструменты дополняют друг друга.',
    whenToUse:
      'Composable лучше для локальной reusable logic: form helpers, window size, timers, temporary UI state. Store лучше для доменного состояния, общего между экранами, с actions, devtools и persistence. Если состояние не должно быть глобальным, store добавит лишнюю связанность.',
    howItWorks:
      'Composable может создавать новый state на каждый вызов или иметь shared module state. Pinia store обычно singleton в рамках Pinia instance и имеет явный id. Это меняет lifecycle, тестирование и семантику данных.',
    whyImportant:
      'На интервью часто ждут ответа с trade-offs. Зрелый разработчик не превращает всё в store и не заменяет весь state management composables. Правильный выбор уменьшает сложность кода.',
    codeExample: {
      language: 'ts',
      filename: 'useDialog.ts',
      code: `export const useDialog = () => {
  const opened = ref(false)
  const open = () => { opened.value = true }
  const close = () => { opened.value = false }

  return { opened, open, close }
}`,
    },
    commonMistake:
      'Ошибка — использовать Pinia для состояния, которое нужно одному компоненту и не имеет доменного значения.',
    interviewQuestions: [
      'Когда composable лучше store?',
      'Когда store лучше composable?',
      'Чем singleton composable опасен?',
    ],
    remember: 'Store — для shared/domain state, composable — для reusable logic.',
  }),
  createCard({
    questionId: 1323,
    title: 'Разделение ответственности',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Разделение ответственности в Pinia означает, что store отвечает за конкретный домен или сценарий состояния. Он не должен одновременно быть API-клиентом, UI-компонентом, роутером и хранилищем всех флагов. Чёткие границы делают store поддерживаемым.',
    whenToUse:
      'Доменный store уместен для user, cart, products, permissions или settings. UI-state можно держать отдельно, если он разделяемый, или локально, если он нужен одному компоненту. API-адаптеры часто лучше вынести в отдельные функции или services.',
    howItWorks:
      'Store вызывает actions и хранит state, но может делегировать fetch в API layer. Компоненты вызывают store API, а не знают внутренний способ загрузки. Такая структура уменьшает coupling между UI и источником данных.',
    whyImportant:
      'Большие stores часто ломаются из-за смешения ответственностей. На review сложно понять, где менять поведение и что затронет изменение. На senior-уровне важно проектировать stores как понятные доменные модули.',
    codeExample: {
      language: 'ts',
      filename: 'stores/products.ts',
      code: `export const useProductsStore = defineStore('products', {
  state: () => ({ items: [] as Product[] }),
  actions: {
    async load() {
      this.items = await productsApi.list()
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — складывать в один store данные пользователя, корзину, модалки, router flags и API helpers.',
    interviewQuestions: [
      'Как разделять stores по доменам?',
      'Что не должно жить в store?',
      'Где размещать API-клиент?',
    ],
    remember: 'Store должен иметь ясную доменную ответственность.',
  }),
  createCard({
    questionId: 1324,
    title: 'Нормализация состояния',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Нормализация state — хранение сущностей по id вместо копирования одних и тех же объектов в разные списки. Это уменьшает дублирование и упрощает обновления. Подход особенно полезен для больших списков и связей между сущностями.',
    whenToUse:
      'Нормализация нужна, когда один объект появляется в разных коллекциях, часто обновляется или связан с другими сущностями. Для маленького статичного массива она может быть лишней. Решение зависит от объёма данных и частоты изменений.',
    howItWorks:
      'State хранит byId и ids. Getters собирают нужные списки из id и объектов. Update одного объекта меняет одну запись, а все derived lists автоматически читают актуальные данные.',
    whyImportant:
      'Без нормализации легко получить рассинхронизацию: карточка товара обновилась в одном списке, но осталась старой в другом. На senior-интервью это показывает опыт проектирования client cache. Нормализация также помогает optimistic updates и granular rendering.',
    codeExample: {
      language: 'ts',
      filename: 'stores/entities.ts',
      code: `state: () => ({
  productsById: {} as Record<string, Product>,
  productIds: [] as string[],
}),
getters: {
  products: (state) => state.productIds.map((id) => state.productsById[id]),
}`,
    },
    commonMistake:
      'Ошибка — нормализовать всё подряд, даже маленькие локальные списки, где простая структура читается лучше.',
    interviewQuestions: [
      'Когда нужна нормализация client state?',
      'Какие плюсы у byId/allIds?',
      'Какие минусы у нормализации?',
    ],
    remember: 'Нормализация помогает сохранять консистентность связанных сущностей.',
  }),
  createCard({
    questionId: 1325,
    title: 'Производные данные',
    category: 'Derived State',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Производные данные — значения, которые можно вычислить из state. В Pinia для них чаще всего используют getters. Хранение производного значения в state создаёт риск рассинхронизации.',
    whenToUse:
      'Getter подходит для totalPrice, selectedItems, filteredProducts, isAuthenticated и других вычисляемых значений. В state стоит хранить только источник правды. Исключение возможно, если вычисление дорогое и имеет отдельную стратегию кеширования, но это требует явного решения.',
    howItWorks:
      'Getter читает state и возвращает результат. Vue отслеживает зависимости и обновляет потребителей при изменении исходных данных. Компоненты получают единый результат без ручной синхронизации.',
    whyImportant:
      'Рассинхронизация derived state — частая причина трудноуловимых UI-багов. На interview важно объяснить, почему total лучше вычислять из items. Это показывает понимание single source of truth.',
    codeExample: {
      language: 'ts',
      filename: 'stores/cart.ts',
      code: `getters: {
  totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
  hasDiscount: (state) => state.coupon !== null,
}`,
    },
    commonMistake:
      'Ошибка — обновлять derived state вручную в каждом action и забывать один из сценариев.',
    interviewQuestions: [
      'Что такое derived state?',
      'Почему totalPrice лучше сделать getter?',
      'Когда derived state можно кешировать отдельно?',
    ],
    remember: 'State хранит источник правды, getter вычисляет производные значения.',
  }),
  createCard({
    questionId: 1326,
    title: 'Optimistic updates',
    category: 'Async State',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Optimistic update — паттерн, при котором UI обновляется до подтверждения сервера. Он улучшает отзывчивость, но требует обработки ошибок и rollback. В Pinia такой сценарий удобно держать в action.',
    whenToUse:
      'Optimistic update уместен для лайков, toggles, reorder, добавления в избранное и других быстрых действий с высокой вероятностью успеха. Для критичных финансовых или необратимых операций лучше быть осторожнее. Нужно учитывать конфликты и повторные запросы.',
    howItWorks:
      'Action сохраняет предыдущий state, применяет локальное изменение, отправляет запрос и подтверждает результат. При ошибке action откатывает state или помечает конфликт. Pending state помогает заблокировать повторные клики или показать статус.',
    whyImportant:
      'Это проверяет способность проектировать UX и consistency одновременно. Простое изменение state без rollback выглядит быстрым, но ломается при ошибках сети. Senior-ответ должен включать failure path.',
    codeExample: {
      language: 'ts',
      filename: 'stores/favorites.ts',
      code: `async toggleFavorite(id: string) {
  const previous = new Set(this.favoriteIds)
  this.favoriteIds.toggle(id)

  try {
    await api.toggleFavorite(id)
  } catch (error) {
    this.favoriteIds = previous
    throw error
  }
}`,
    },
    commonMistake:
      'Ошибка — делать optimistic update без rollback и без визуального pending/error состояния.',
    interviewQuestions: [
      'Как реализовать optimistic update?',
      'Что делать при ошибке API?',
      'Когда optimistic update не подходит?',
    ],
    remember: 'Optimistic update всегда должен иметь failure strategy.',
  }),
  createCard({
    questionId: 1327,
    title: 'TypeScript в Pinia',
    category: 'TypeScript',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'TypeScript в Pinia помогает описать форму state, payload actions и доменные модели. Pinia хорошо выводит типы, но внешние API-ответы и сложные структуры всё равно требуют явных контрактов. Цель — не больше типов, а меньше неопределённости.',
    whenToUse:
      'Типы нужны для state entities, nullable values, action payloads, API DTO и возвращаемых значений. Inference можно использовать там, где она очевидна. Явные интерфейсы важны на границах системы и в больших stores.',
    howItWorks:
      'State можно типизировать через assertions или заранее объявленные interfaces. Actions получают typed параметры, getters выводят результат или описываются явно при необходимости. TypeScript помогает catch-ить ошибки ещё до runtime.',
    whyImportant:
      'State management без типов быстро становится источником runtime-багов. На senior-интервью важно объяснить, где inference помогает, а где нужен явный тип. Особенно это важно для server data и persistence migrations.',
    codeExample: {
      language: 'ts',
      filename: 'stores/user.ts',
      code: `interface UserState {
  profile: UserProfile | null
  permissions: string[]
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    profile: null,
    permissions: [],
  }),
})`,
    },
    commonMistake:
      'Ошибка — обходить сложные места через any. Это переносит проблему из compile-time в runtime.',
    interviewQuestions: [
      'Как типизировать state в Pinia?',
      'Когда достаточно inference?',
      'Почему any опасен в store?',
    ],
    remember: 'Типы в store фиксируют доменный контракт состояния.',
  }),
  createCard({
    questionId: 1328,
    title: 'Большие stores',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Большой store — не проблема сам по себе, если он описывает один связный домен. Проблема начинается, когда store смешивает unrelated domains, UI flags, API helpers и бизнес-сценарии. Такой store становится трудно тестировать и менять.',
    whenToUse:
      'Разделение нужно, когда внутри store появляются разные причины для изменений. Auth, cart, notifications и filters обычно имеют разные lifecycle и owners. Для тесно связанных частей можно оставить один store, чтобы не создавать искусственную фрагментацию.',
    howItWorks:
      'Stores разделяются по доменным границам и композиционируются через actions, services или orchestration composables. Shared entities можно нормализовать в отдельном store. UI-компоненты получают только нужный store API.',
    whyImportant:
      'Архитектура stores влияет на скорость разработки. Монолитный store создаёт merge conflicts, скрытые зависимости и сложные тесты. На senior-уровне важно уметь выбрать границу, а не просто дробить файлы.',
    codeExample: {
      language: 'bash',
      filename: 'store-boundaries.txt',
      code: `stores/
  session.ts
  cart.ts
  products.ts
  notifications.ts`,
    },
    commonMistake:
      'Ошибка — делить store только по размеру файла, не думая о доменных границах и зависимостях.',
    interviewQuestions: [
      'Когда store становится слишком большим?',
      'Как выбрать границы stores?',
      'Какие минусы у чрезмерной декомпозиции?',
    ],
    remember: 'Store делят по ответственности, а не только по количеству строк.',
  }),
  createCard({
    questionId: 1329,
    title: 'Lazy loading store',
    category: 'Performance',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Lazy loading store — отложенная загрузка кода store вместе с feature chunk. Pinia store регистрируется при импорте, поэтому code splitting маршрутов может отложить редкие stores. Это полезно для тяжёлых feature-модулей.',
    whenToUse:
      'Lazy loading оправдан для больших редко используемых разделов: admin, reports, editor, analytics. Core stores вроде session или settings обычно нужны сразу и не должны усложнять первый flow. Решение нужно подтверждать bundle-анализом.',
    howItWorks:
      'Store файл импортируется только внутри lazy route или динамического feature entry. Когда пользователь открывает раздел, chunk загружается и useStore создаёт store. Состояние после создания живёт как обычный Pinia store.',
    whyImportant:
      'Performance не сводится к одному большому bundle. Но lazy loading добавляет асинхронность и loading states. На senior-интервью важно объяснить trade-off между размером первого экрана и сложностью загрузки.',
    codeExample: {
      language: 'ts',
      filename: 'routes.ts',
      code: `const ReportsView = () => import('./views/ReportsView.vue')

// ReportsView imports useReportsStore only inside reports chunk.`,
    },
    commonMistake:
      'Ошибка — lazy-load core store, который нужен для первого render и блокирует базовую навигацию.',
    interviewQuestions: [
      'Когда lazy loading store полезен?',
      'Как route-level splitting влияет на stores?',
      'Какие риски у lazy loading state?',
    ],
    remember: 'Lazy loading store полезен для редких тяжёлых features, а не для core state.',
  }),
  createCard({
    questionId: 1330,
    title: 'Циклические зависимости',
    category: 'Architecture',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Циклическая зависимость stores возникает, когда store A зависит от store B, а store B зависит от store A. Особенно опасно, если actions вызываются при инициализации. Это может привести к частично созданным модулям и неочевидным side effects.',
    whenToUse:
      'Связи между stores допустимы, но должны иметь направление. Если два stores постоянно требуют друг друга, вероятно, граница домена выбрана плохо. Иногда нужен третий orchestration слой или перенос общей части в отдельный service.',
    howItWorks:
      'ES modules имеют порядок инициализации. При цикле один модуль может получить ещё не полностью готовый export другого. В Pinia это становится заметным, когда useStore вызывается слишком рано или action запускает ответную action.',
    whyImportant:
      'Такие баги редко очевидны в маленьких примерах, но болезненны в больших приложениях. На senior-интервью важно говорить о direction of dependencies. Хорошая архитектура делает flow данных предсказуемым.',
    codeExample: {
      language: 'ts',
      filename: 'checkoutFlow.ts',
      code: `export const checkout = async () => {
  const cart = useCartStore()
  const session = useSessionStore()

  await ordersApi.create({ userId: session.userId, items: cart.items })
}`,
    },
    commonMistake:
      'Ошибка — решать циклы ещё большим количеством взаимных imports. Лучше выделить orchestration или пересмотреть границы stores.',
    interviewQuestions: [
      'Почему циклические зависимости stores опасны?',
      'Как разорвать цикл между stores?',
      'Когда нужен orchestration слой?',
    ],
    remember: 'Зависимости stores должны иметь понятное направление.',
  }),
  createCard({
    questionId: 1331,
    title: 'Watchers против actions',
    category: 'Common Mistakes',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Изменение store через watchers в компонентах — частый анти-паттерн. Watcher реагирует на изменение, но плохо выражает бизнес-намерение. Action лучше описывает сценарий и делает flow тестируемым.',
    whenToUse:
      'Watcher уместен для локального side effect, например синхронизации с DOM или внешним composable. Доменное изменение store лучше держать в action. Если watcher нужен для store workflow, стоит проверить архитектуру.',
    howItWorks:
      'Компонент вызывает action, action меняет state и выполняет side effects. Такой flow можно вызвать из теста и увидеть в devtools. Watchers в разных компонентах создают скрытую сеть реакций.',
    whyImportant:
      'На production-коде скрытые watchers усложняют отладку: изменение одного поля неожиданно запускает сценарий в другом компоненте. На интервью это показывает понимание управляемости state. Явные actions почти всегда проще сопровождать.',
    codeExample: {
      language: 'ts',
      filename: 'stores/search.ts',
      code: `actions: {
  async applyQuery(query: string) {
    this.query = query
    this.results = await searchApi.find(query)
  },
}`,
    },
    commonMistake:
      'Ошибка — делать важное изменение store побочным эффектом watcher без имени сценария.',
    interviewQuestions: [
      'Когда watcher уместен?',
      'Почему actions лучше для доменной логики?',
      'Как скрытые watchers усложняют debugging?',
    ],
    remember: 'Бизнес-сценарии изменения store лучше выражать actions.',
  }),
  createCard({
    questionId: 1332,
    title: 'Прямые мутации state',
    category: 'Code Review',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Pinia допускает прямую мутацию state, но это не означает, что любой компонент должен менять любую вложенную структуру. Для сложных доменных изменений полезны явные actions. Они фиксируют правила, validation и side effects.',
    whenToUse:
      'Прямое присваивание нормально для простого UI-state или очевидного локального изменения. Action лучше для профиля, заказов, permissions, optimistic update и API-синхронизации. Чем больше правил вокруг изменения, тем важнее action.',
    howItWorks:
      'Компонент вызывает action с payload. Action валидирует данные, меняет state и при необходимости вызывает API. Это сохраняет контроль над инвариантами store.',
    whyImportant:
      'Глубокие прямые мутации из компонентов создают tight coupling между UI и структурой state. Любое изменение модели ломает компоненты. На review стоит искать места, где action сделал бы контракт устойчивее.',
    codeExample: {
      language: 'ts',
      filename: 'stores/profile.ts',
      code: `actions: {
  updateProfileName(name: string) {
    if (name.trim().length < 2) return
    this.profile.name = name.trim()
  },
}`,
    },
    commonMistake:
      'Ошибка — позволить форме напрямую менять глубокие поля доменной модели без validation и rollback.',
    interviewQuestions: [
      'Когда прямые мутации допустимы?',
      'Когда нужен action?',
      'Как защитить инварианты store?',
    ],
    remember: 'Прямая мутация допустима, но доменные правила лучше держать в actions.',
  }),
  createCard({
    questionId: 1333,
    title: 'Тестирование stores',
    category: 'Testing',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Тестирование Pinia store проверяет state transitions, getters и actions без необходимости рендерить компоненты. Store является удобной единицей для unit tests. Внешние API обычно мокают, чтобы тест был быстрым и стабильным.',
    whenToUse:
      'Тесты особенно полезны для сложных actions, optimistic updates, permission logic, derived getters и persistence migrations. Простые getters можно покрывать выборочно. Интеграционные тесты компонентов дополняют, но не заменяют store-тесты.',
    howItWorks:
      'В тесте создают Pinia instance, активируют его и вызывают useStore. Затем вызывают actions и проверяют state/getters. API-зависимости подменяют mock-функциями или service layer.',
    whyImportant:
      'Store концентрирует доменную логику, поэтому его тесты дают высокий эффект. На senior-интервью важно говорить о детерминированности, isolation и моках. Реальные сетевые запросы в unit tests делают тесты хрупкими.',
    codeExample: {
      language: 'ts',
      filename: 'cart.store.test.ts',
      code: `setActivePinia(createPinia())

const cart = useCartStore()
cart.add({ id: 'p1', price: 100 })

expect(cart.totalPrice).toBe(100)`,
    },
    commonMistake:
      'Ошибка — тестировать store только через клики в UI, пропуская отдельные state transitions.',
    interviewQuestions: [
      'Как тестировать Pinia store?',
      'Что мокать в action tests?',
      'Чем unit test store отличается от component test?',
    ],
    remember: 'Store можно тестировать как отдельную единицу доменной логики.',
  }),
  createCard({
    questionId: 1334,
    title: 'Кеш и invalidation',
    category: 'Server State',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Кеш в Pinia store — сохранение server-derived данных на клиенте. Он может ускорить UI, но требует стратегии актуальности. Без invalidation store быстро начинает показывать устаревшие данные.',
    whenToUse:
      'Кеш уместен для справочников, списков, профилей, permissions и данных, которые часто читаются. Для real-time данных может потребоваться polling, websocket или server-state библиотека. Нужно понимать, кто владеет истиной: сервер или клиент.',
    howItWorks:
      'Store хранит данные, timestamp, loading/error и стратегию refresh. Action решает, брать кеш или делать новый запрос. После mutations нужно инвалидировать связанные данные или обновить normalized entities.',
    whyImportant:
      'Server state — одна из самых сложных зон frontend-архитектуры. Pinia может хранить кеш, но не даёт стратегию invalidation автоматически. На senior-уровне важно обсуждать TTL, stale data, optimistic updates и error recovery.',
    codeExample: {
      language: 'ts',
      filename: 'stores/products.ts',
      code: `actions: {
  async loadIfStale() {
    if (Date.now() - this.loadedAt < 60_000) return
    this.items = await productsApi.list()
    this.loadedAt = Date.now()
  },
}`,
    },
    commonMistake:
      'Ошибка — положить server response в store и никогда не думать о его актуальности.',
    interviewQuestions: [
      'Как инвалидировать кеш в Pinia?',
      'Что такое stale data?',
      'Когда Pinia недостаточно для server state?',
    ],
    remember: 'Кеш без invalidation превращается в источник устаревших данных.',
  }),
  createCard({
    questionId: 1335,
    title: 'Trade-offs Pinia',
    category: 'Interview',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Trade-off Pinia — баланс между централизованным состоянием и локальной простотой. Store даёт общий контракт, devtools, actions и plugins. Но каждый глобальный store увеличивает связанность и должен быть оправдан.',
    whenToUse:
      'Pinia выбирают для shared/domain state, которое нужно нескольким экранам, имеет lifecycle и требует контролируемых изменений. Локальные формы, dropdowns и одноразовые UI-флаги лучше держать ближе к компоненту. Для server state иногда нужны отдельные cache/data fetching стратегии.',
    howItWorks:
      'Решение принимается по вопросам: кто владеет состоянием, сколько потребителей, каков lifecycle, нужна ли persistence, есть ли side effects. Если ответы указывают на разделяемый домен, store оправдан. Если значение локально и недолговечно, store добавит шум.',
    whyImportant:
      'Senior-ответ должен звучать как анализ, а не лозунг. Pinia — мощный инструмент, но плохая модель состояния ломает архитектуру даже с хорошей библиотекой. Правильный выбор улучшает UX, тестируемость и поддержку.',
    codeExample: {
      language: 'bash',
      filename: 'decision-checklist.txt',
      code: `Use Pinia when:
- state is shared
- lifecycle is longer than one component
- actions describe domain behavior
- devtools/persistence are useful`,
    },
    commonMistake:
      'Ошибка — объявлять store универсальным ответом на любую реактивность. Это приводит к глобальному состоянию без необходимости.',
    interviewQuestions: [
      'Как решить, нужен ли Pinia store?',
      'Какие минусы у глобального состояния?',
      'Когда локальный state лучше?',
    ],
    remember: 'Pinia выбирают по масштабу и ответственности состояния.',
  }),
]
