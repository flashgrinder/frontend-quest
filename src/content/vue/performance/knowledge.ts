import type { ContentKnowledgeCard } from '../../../types/content'
import type { CodeExample, InterviewLevel, KnowledgeRarity } from '../../../types/knowledge'

interface PerformanceCardInput {
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
  `Какие задачи решает ${title} в теме ${category} (Vue / Nuxt Performance)?`,
  `Какие ограничения ${title} важно учитывать в контексте Vue / Nuxt Performance?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

const createCard = (input: PerformanceCardInput): ContentKnowledgeCard => ({
  id: `performance-${input.questionId}`,
  moduleId: 'performance',
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
    questionId: 1201,
    title: 'Почему Vue быстрый',
    category: 'Performance Basics',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Производительность Vue 3 строится на комбинации реактивности, компилятора и runtime-оптимизаций. Vue отслеживает реактивные зависимости, группирует обновления и применяет DOM-изменения точечно. Компилятор добавляет подсказки, чтобы runtime не делал лишнюю работу.',
    whenToUse:
      'Это знание нужно при анализе render performance, выборе оптимизаций и объяснении поведения Vue на интервью. Оно помогает не воспринимать Virtual DOM как единственный источник скорости. Реальная производительность зависит от структуры данных, шаблонов, списков, bundle и работы браузера.',
    howItWorks:
      'Когда реактивное состояние меняется, Vue планирует обновление зависимых компонентов. Compiler hints вроде Patch Flags помогают понять, какие части template динамические. Scheduler объединяет несколько изменений в один flush.',
    whyImportant:
      'Если понимать внутреннюю модель Vue, легче отличать настоящую проблему от мифа. Например, не нужно вручную оптимизировать каждый маленький компонент, но большие списки или нестабильные key действительно могут быть bottleneck.',
    codeExample: {
      language: 'vue',
      filename: 'CounterPanel.vue',
      code: `<script setup lang="ts">
const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>

<template>
  <button @click="count += 1">{{ count }}</button>
  <output>{{ doubled }}</output>
</template>`,
    },
    commonMistake:
      'Ошибка — думать, что Vue всегда сам исправит любую неэффективную архитектуру. Framework быстрый, но плохие key, огромные DOM-списки и лишние зависимости всё равно стоят дорого.',
    remember: 'Vue быстрый благодаря связке реактивности, компилятора, scheduler и точечного patching.',
  },
  {
    questionId: 1202,
    title: 'Virtual DOM',
    category: 'Performance Basics',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Virtual DOM — JavaScript-представление UI, с которым Vue работает перед изменением настоящего DOM. Оно помогает описывать интерфейс декларативно и применять обновления контролируемо. В Vue 3 Virtual DOM дополняется compile-time оптимизациями.',
    whenToUse:
      'Понимание Virtual DOM полезно при обсуждении render performance и key в списках. Оно не означает, что каждый render дешёвый. Большие деревья, нестабильные ключи и тяжёлые компоненты всё равно нужно проектировать аккуратно.',
    howItWorks:
      'Vue создаёт vnode tree, сравнивает новое состояние с предыдущим и patch-ит реальные DOM-узлы. Compiler hints помогают пропускать статические части. Чем стабильнее структура и key, тем дешевле сопоставление.',
    whyImportant:
      'На интервью часто ждут не лозунг про "быстрее DOM", а объяснение trade-off. Virtual DOM упрощает модель обновления, но не отменяет измерений и архитектурных решений.',
    codeExample: {
      language: 'vue',
      filename: 'UserList.vue',
      code: `<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>`,
    },
    commonMistake:
      'Ошибка — считать Virtual DOM магией, которая делает любые 50 000 строк в DOM дешёвыми. Количество реальных DOM-узлов всё ещё важно.',
    remember: 'Virtual DOM помогает управлять обновлениями, но не заменяет хорошую структуру UI.',
  },
  {
    questionId: 1203,
    title: 'v-if vs v-show',
    category: 'Rendering',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'v-if создаёт и уничтожает subtree по условию, а v-show оставляет элемент в DOM и переключает CSS display. Это разные performance-профили. Выбор зависит от частоты переключения и стоимости initial render.',
    whenToUse:
      'v-if хорошо подходит для редкого показа и дорогого начального рендера, который не нужен сразу. v-show полезен для частого переключения видимости, когда DOM лучше сохранить. Для модалок, dropdown и tabs важно учитывать реальный UX.',
    howItWorks:
      'При v-if Vue монтирует или размонтирует компонент, его watchers и DOM. При v-show компонент остаётся живым, а display меняется. Поэтому v-show платит initial cost, но экономит repeated mount/unmount.',
    whyImportant:
      'На интервью это базовый вопрос, но зрелый ответ всегда говорит "зависит". Нельзя сказать, что v-if или v-show всегда быстрее.',
    codeExample: {
      language: 'vue',
      filename: 'ModalPanel.vue',
      code: `<template>
  <!-- Frequent toggle: keeps subtree mounted -->
  <ModalDialog v-show="isOpen" />

  <!-- Rare toggle: avoids initial render -->
  <HeavyReport v-if="showReport" />
</template>`,
    },
    commonMistake:
      'Ошибка — использовать v-if для UI, который переключается десятки раз, и затем удивляться частым mount/unmount costs.',
    remember: 'v-if экономит initial render, v-show экономит частые переключения.',
  },
  {
    questionId: 1204,
    title: 'Стабильный key',
    category: 'Rendering',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'key помогает Vue сопоставлять элементы списка между обновлениями. Стабильный key должен отражать идентичность элемента, а не его текущую позицию. Это важно для корректности и производительности.',
    whenToUse:
      'Стабильный key нужен для списков с сортировкой, фильтрацией, удалением, вставкой, формами и локальным состоянием в строках. Index допустим только для действительно статичных списков без reorder и состояния. В production-коде чаще нужен id из данных.',
    howItWorks:
      'Во время patching Vue использует key, чтобы понять, какой vnode соответствует какому DOM-узлу. Если key меняется или основан на index, Vue может переиспользовать неправильный узел. Это приводит к багам input и лишним DOM-операциям.',
    whyImportant:
      'На интервью key часто проверяет понимание diffing. Это не просто способ убрать warning, а часть корректности render model.',
    codeExample: {
      language: 'vue',
      filename: 'TodoList.vue',
      code: `<template>
  <!-- Bad: index changes when items are sorted or removed -->
  <TodoRow v-for="(todo, index) in todos" :key="index" :todo="todo" />

  <!-- Better: stable identity -->
  <TodoRow v-for="todo in todos" :key="todo.id" :todo="todo" />
</template>`,
    },
    commonMistake:
      'Ошибка — использовать Math.random или index как универсальный key. Это ломает сопоставление и может сбрасывать состояние.',
    remember: 'key должен быть стабильной идентичностью элемента.',
  },
  {
    questionId: 1205,
    title: 'Computed caching',
    category: 'Reactivity',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'computed кеширует производное значение до изменения реактивных зависимостей. Это делает его эффективным для фильтрации, сортировки, форматирования и вычисления derived state. Метод в template такого кеша не имеет.',
    whenToUse:
      'computed стоит использовать для значений, которые выводятся в UI и зависят от reactive state. Если операция дорогая и результат нужен несколько раз, computed особенно полезен. Для побочных эффектов computed использовать нельзя.',
    howItWorks:
      'Vue отслеживает reactive reads внутри computed getter. Пока зависимости не изменились, повторное чтение возвращает cached value. При изменении зависимости computed инвалидируется и пересчитается при следующем чтении.',
    whyImportant:
      'Computed caching помогает убрать лишние пересчёты на render path. Но оно не решает все проблемы: если зависимость меняется слишком часто или вычисление очень тяжёлое, нужны дополнительные меры.',
    codeExample: {
      language: 'vue',
      filename: 'FilteredProducts.vue',
      code: `<script setup lang="ts">
const query = ref('')
const products = ref<Product[]>([])

const visibleProducts = computed(() =>
  products.value.filter((product) =>
    product.title.toLowerCase().includes(query.value.toLowerCase())
  )
)
</script>`,
    },
    commonMistake:
      'Ошибка — вызывать expensiveFilter(products) прямо в template несколько раз. Метод будет выполняться чаще, чем ожидается.',
    remember: 'computed кеширует derived state по реактивным зависимостям.',
  },
  {
    questionId: 1206,
    title: 'Scheduler и batching',
    category: 'Reactivity',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Scheduler Vue управляет очередью обновлений. Когда несколько reactive changes происходят подряд, Vue группирует их и обновляет DOM не после каждой строки, а в одном flush. Это называется batching updates.',
    whenToUse:
      'Понимание scheduler нужно при измерении DOM, работе с nextTick и отладке "почему DOM ещё не обновился". Оно также помогает не писать ручные micro-optimizations там, где Vue уже группирует изменения. Для DOM-измерений нужно дождаться flush.',
    howItWorks:
      'Изменения reactive state ставят component update job в очередь. Дубликаты в очереди схлопываются. После текущего синхронного кода Vue применяет обновления, а nextTick позволяет дождаться этого момента.',
    whyImportant:
      'На интервью это показывает понимание runtime, а не только template-синтаксиса. Многие bugs с DOM-измерениями связаны именно с async update queue.',
    codeExample: {
      language: 'vue',
      filename: 'ResizeAfterUpdate.vue',
      code: `<script setup lang="ts">
const expanded = ref(false)
const panel = ref<HTMLElement | null>(null)

const openAndMeasure = async () => {
  expanded.value = true
  await nextTick()
  measuredHeight.value = panel.value?.offsetHeight ?? 0
}
</script>`,
    },
    commonMistake:
      'Ошибка — изменить состояние и сразу читать DOM, ожидая уже обновленную разметку. DOM обновится после flush.',
    remember: 'Vue группирует updates, а nextTick ждёт применение DOM-изменений.',
  },
  {
    questionId: 1207,
    title: 'nextTick',
    category: 'Rendering',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'nextTick — API Vue для ожидания завершения очереди DOM-обновлений. Он не ускоряет рендер, а даёт точку, после которой можно читать актуальную DOM-разметку. Это полезно при измерениях и imperative integrations.',
    whenToUse:
      'nextTick используют после изменения состояния, если нужно измерить элемент, проскроллить к новому блоку или синхронизироваться с DOM-библиотекой. Его не нужно добавлять после каждого ref change. Избыточный nextTick усложняет код.',
    howItWorks:
      'Vue планирует update асинхронно. nextTick возвращает promise, который выполняется после flush очереди. Тогда DOM уже отражает последние reactive changes.',
    whyImportant:
      'На интервью важно объяснить, что nextTick связан с scheduler. Это не sleep и не workaround для любой проблемы.',
    codeExample: {
      language: 'vue',
      filename: 'ScrollToNewItem.vue',
      code: `<script setup lang="ts">
const items = ref<string[]>([])
const list = ref<HTMLElement | null>(null)

const addItem = async () => {
  items.value.push('New item')
  await nextTick()
  list.value?.lastElementChild?.scrollIntoView()
}
</script>`,
    },
    commonMistake:
      'Ошибка — использовать setTimeout вместо nextTick для ожидания Vue DOM update. Это менее точно и хуже читается.',
    remember: 'nextTick нужен для действий после DOM update flush.',
  },
  {
    questionId: 1208,
    title: 'watch vs watchEffect',
    category: 'Reactivity',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'watch отслеживает явно указанные источники, а watchEffect автоматически собирает зависимости из тела эффекта. watchEffect удобен, но может случайно захватить лишние reactive reads. Для performance-sensitive эффектов явный watch часто безопаснее.',
    whenToUse:
      'watchEffect подходит для простых реактивных эффектов, где зависимости очевидны и небольшие. watch лучше использовать для запросов, autosave, expensive effects и ситуаций, где важен контроль источников. Чем тяжелее эффект, тем важнее явность.',
    howItWorks:
      'watchEffect выполняется и запоминает всё reactive state, прочитанное во время выполнения. При изменении любого из этих значений эффект перезапускается. watch реагирует только на переданные source.',
    whyImportant:
      'Лишние зависимости приводят к лишним запросам, пересчётам и render cascades. На интервью нужно показать, что удобство API имеет цену.',
    codeExample: {
      language: 'ts',
      filename: 'useSearch.ts',
      code: `// Bad: can accidentally track extra reads inside runSearch.
watchEffect(() => {
  runSearch(query.value, filters.value)
})

// Better: explicit dependencies for expensive effect.
watch([query, filters], ([nextQuery, nextFilters]) => {
  runSearch(nextQuery, nextFilters)
})`,
    },
    commonMistake:
      'Ошибка — использовать watchEffect для тяжёлого запроса и читать внутри много состояния. Эффект начинает срабатывать чаще, чем нужно.',
    remember: 'Для дорогих эффектов предпочитай явные зависимости.',
  },
  {
    questionId: 1209,
    title: 'Patch Flags',
    category: 'Compiler Optimizations',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Patch Flags — подсказки, которые Vue compiler добавляет к vnode, чтобы runtime знал, какие части узла динамические. Это снижает работу при обновлении. Runtime не обязан заново анализировать весь template.',
    whenToUse:
      'Разработчик обычно не пишет Patch Flags вручную, но понимание помогает объяснить производительность Vue 3. Оно полезно при сравнении runtime-only подхода и compiler-informed rendering. Также помогает не бояться обычных декларативных templates.',
    howItWorks:
      'Compiler видит, где динамический text, class, props или events, и помечает vnode. Во время patch Vue использует эти флаги, чтобы обновить только нужные части. Статические части пропускаются или hoisted.',
    whyImportant:
      'На Middle+/Senior интервью это показывает знание современных оптимизаций Vue. Virtual DOM во Vue 3 не "слепой", он получает информацию от компилятора.',
    codeExample: {
      language: 'vue',
      filename: 'StatusBadge.vue',
      code: `<template>
  <span class="badge" :class="status">
    {{ label }}
  </span>
</template>`,
    },
    commonMistake:
      'Ошибка — объяснять Vue performance только через Virtual DOM и забывать про compiler hints. Это неполная картина Vue 3.',
    remember: 'Patch Flags помогают runtime обновлять только динамические части.',
  },
  {
    questionId: 1210,
    title: 'Block Tree',
    category: 'Compiler Optimizations',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Block Tree — оптимизация Vue 3, которая группирует динамические узлы и помогает runtime быстрее проходить update path. Она работает вместе с Patch Flags и static hoisting. Цель — меньше обходить статические части дерева.',
    whenToUse:
      'Это знание нужно для глубокого интервью и понимания, почему templates Vue могут быть эффективными. Разработчик обычно не управляет Block Tree напрямую. Но архитектура компонентов всё равно влияет на размер update path.',
    howItWorks:
      'Compiler выделяет блоки, содержащие динамические children. Runtime обновляет список динамических nodes, а не всё дерево целиком. Так Vue сохраняет декларативность и уменьшает стоимость patching.',
    whyImportant:
      'Block Tree показывает, что Vue 3 heavily compiler-informed. Это важно для Senior-разговора о том, почему framework performance нельзя свести к одному Virtual DOM diff.',
    codeExample: {
      language: 'vue',
      filename: 'UserCard.vue',
      code: `<template>
  <article>
    <h2>{{ user.name }}</h2>
    <p class="static-copy">Account profile</p>
    <UserStatus :status="user.status" />
  </article>
</template>`,
    },
    commonMistake:
      'Ошибка — пытаться вручную оптимизировать каждый статический текст. Vue compiler уже hoist-ит и помечает многое автоматически.',
    remember: 'Block Tree сокращает обход динамических частей при обновлении.',
  },
  {
    questionId: 1211,
    title: 'shallowRef и markRaw',
    category: 'Reactivity',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'shallowRef отслеживает замену значения, но не делает внутренние поля глубоко реактивными. markRaw исключает объект из реактивного преобразования. Эти инструменты полезны для больших объектов и экземпляров сторонних библиотек.',
    whenToUse:
      'Используй shallowRef для chart/editor/map instances, больших immutable snapshots и objects, где важна только замена ссылки. markRaw подходит для class instances и SDK objects. Не стоит применять их к данным, которые UI должен глубоко отслеживать.',
    howItWorks:
      'Обычный reactive/ref может обернуть вложенные объекты proxy. shallowRef оставляет вложенность как есть, а reactive tracking происходит на уровне value. markRaw помечает объект как исключённый из реактивности.',
    whyImportant:
      'Глубокая реактивность удобна, но не бесплатна. На больших объектах и SDK instances она может создать лишний tracking и неожиданные проблемы совместимости.',
    codeExample: {
      language: 'vue',
      filename: 'ChartWrapper.vue',
      code: `<script setup lang="ts">
const chart = shallowRef<Chart | null>(null)

onMounted(() => {
  chart.value = markRaw(createChart('#chart'))
})
</script>`,
    },
    commonMistake:
      'Ошибка — класть экземпляр charting/editor SDK в reactive и затем отслеживать его внутренности без необходимости.',
    remember: 'Не всё состояние должно быть глубоко реактивным.',
  },
  {
    questionId: 1212,
    title: 'Виртуализация списков',
    category: 'Large Lists',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Виртуализация списков — техника, при которой рендерятся только видимые элементы большого списка и небольшой overscan. Это радикально уменьшает количество DOM-узлов. Она особенно полезна для таблиц, логов, каталогов и activity feeds.',
    whenToUse:
      'Виртуализацию стоит применять при тысячах строк, сложных row components или плохом scroll performance. Для маленьких списков она может быть избыточной. Также нужно учитывать variable height, accessibility и keyboard navigation.',
    howItWorks:
      'Контейнер имитирует полную высоту списка, но в DOM находятся только элементы в видимой области. При scroll окно элементов меняется. Это снижает DOM memory, layout и paint cost.',
    whyImportant:
      'Большие списки — один из самых частых frontend bottleneck. На интервью важно предложить не микроправку, а изменение объёма DOM-работы.',
    codeExample: {
      language: 'vue',
      filename: 'VirtualUsers.vue',
      code: `<template>
  <!-- Bad: renders every row -->
  <UserRow v-for="user in users" :key="user.id" :user="user" />

  <!-- Better: render only visible rows with a virtual list component -->
  <VirtualList :items="users" :item-height="48">
    <template #default="{ item }">
      <UserRow :user="item" />
    </template>
  </VirtualList>
</template>`,
    },
    commonMistake:
      'Ошибка — пытаться ускорить 20 000 DOM-строк через computed, когда главная проблема в количестве DOM-узлов.',
    remember: 'Для огромных списков уменьшай DOM, а не только пересчёты.',
  },
  {
    questionId: 1213,
    title: 'Нестабильный key',
    category: 'Rendering',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Нестабильный key заставляет Vue считать элемент новым при каждом render. Math.random, Date.now или изменяемые значения ломают reuse. Это приводит к лишним mount/unmount, потере состояния и ухудшению performance.',
    whenToUse:
      'Key должен быть стабильным всегда, когда элемент участвует в diffing: списки, dynamic components, forms, transitions. Иногда key намеренно меняют, чтобы сбросить компонент, но это должно быть осознанным действием.',
    howItWorks:
      'Vue использует key как идентификатор vnode. Если key каждый раз другой, старый vnode невозможно сопоставить с новым. Runtime уничтожает старый subtree и создаёт новый.',
    whyImportant:
      'Это одновременно performance и correctness issue. На интервью важно объяснить, почему случайный key не "помогает Vue обновиться", а мешает reuse.',
    codeExample: {
      language: 'vue',
      filename: 'BadKeys.vue',
      code: `<template>
  <!-- Bad -->
  <ProductCard v-for="product in products" :key="Math.random()" :product="product" />

  <!-- Better -->
  <ProductCard v-for="product in products" :key="product.id" :product="product" />
</template>`,
    },
    commonMistake:
      'Ошибка — использовать random key, чтобы "исправить" странный render bug. Обычно это скрывает проблему и создаёт новую.',
    remember: 'Random key отключает нормальное переиспользование vnode.',
  },
  {
    questionId: 1214,
    title: 'v-once',
    category: 'Rendering',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'v-once рендерит элемент или компонент один раз и пропускает последующие обновления. Это полезно для действительно статического большого блока. Если данные должны меняться, v-once приведёт к устаревшему UI.',
    whenToUse:
      'v-once подходит для legal text, static markdown, декоративных статичных секций и контента, который не зависит от reactive state после mount. Его не стоит использовать на формах, интерактивных компонентах и данных пользователя.',
    howItWorks:
      'Vue помечает subtree как once-rendered и не patch-ит его при последующих обновлениях родителя. Это снижает update cost. Но ответственность за неизменность данных лежит на разработчике.',
    whyImportant:
      'Это простой, но опасный инструмент. На интервью важно сказать, что v-once оптимизирует только корректно статичное содержимое.',
    codeExample: {
      language: 'vue',
      filename: 'StaticLegalBlock.vue',
      code: `<template>
  <section v-once>
    <h2>Terms summary</h2>
    <p>This text is static for the lifetime of the component.</p>
  </section>
</template>`,
    },
    commonMistake:
      'Ошибка — добавить v-once к блоку, где отображается reactive user data. UI перестанет обновляться.',
    remember: 'v-once используй только для неизменяемого subtree.',
  },
  {
    questionId: 1215,
    title: 'v-memo',
    category: 'Rendering',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'v-memo позволяет пропустить обновление subtree, если заданные зависимости не изменились. Это точечный инструмент для оптимизации больших или дорогих фрагментов. Он требует понимания, какие зависимости действительно влияют на render.',
    whenToUse:
      'v-memo можно рассмотреть для больших списков с дорогими row components, когда большинство строк не меняется. Он полезен после профилирования. Не стоит добавлять v-memo везде: неверные зависимости могут привести к устаревшему UI.',
    howItWorks:
      'Vue сравнивает массив зависимостей v-memo. Если значения прежние, patch subtree пропускается. Если хотя бы одно изменилось, subtree обновляется.',
    whyImportant:
      'На Senior-интервью важно объяснить trade-off. v-memo может снизить render cost, но повышает когнитивную сложность и риск ошибки.',
    codeExample: {
      language: 'vue',
      filename: 'OrderRows.vue',
      code: `<template>
  <OrderRow
    v-for="order in orders"
    :key="order.id"
    v-memo="[order.status, order.total]"
    :order="order"
  />
</template>`,
    },
    commonMistake:
      'Ошибка — забыть зависимость, которая влияет на отображение. Тогда строка перестанет обновляться при нужном изменении.',
    remember: 'v-memo применяют точечно и только после понимания зависимостей.',
  },
  {
    questionId: 1216,
    title: 'defineAsyncComponent',
    category: 'Code Splitting',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'defineAsyncComponent позволяет загружать компонент асинхронно. В связке с dynamic import bundler может вынести компонент в отдельный chunk. Это снижает initial bundle, если компонент не нужен сразу.',
    whenToUse:
      'Async component подходит для модалок, графиков, редакторов, heavy widgets и редко используемых разделов. Его не стоит применять к маленьким критичным компонентам, если overhead загрузки хуже пользы. Нужно продумать loading и error states.',
    howItWorks:
      'Компонент описывается функцией загрузки. Когда он нужен, Vue загружает chunk, показывает fallback при необходимости и затем рендерит компонент. Nuxt и bundler помогают управлять чанками.',
    whyImportant:
      'Bundle size напрямую влияет на start performance и INP. На интервью важно объяснить, что lazy loading ускоряет старт ценой отложенной загрузки.',
    codeExample: {
      language: 'vue',
      filename: 'AnalyticsPanel.vue',
      code: `<script setup lang="ts">
const HeavyChart = defineAsyncComponent(() => import('./HeavyChart.vue'))
const showAnalytics = ref(false)
</script>

<template>
  <button @click="showAnalytics = true">Show analytics</button>
  <HeavyChart v-if="showAnalytics" />
</template>`,
    },
    commonMistake:
      'Ошибка — лениво грузить всё подряд, включая критичные above-the-fold компоненты. Это может ухудшить perceived performance.',
    remember: 'Async components хороши для тяжёлого кода, который не нужен сразу.',
  },
  {
    questionId: 1217,
    title: 'Дорогая фильтрация',
    category: 'Reactivity',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Дорогая фильтрация в template или методе может выполняться чаще, чем кажется. Если функция вызывается при render и не кешируется, она повторяет работу даже при изменениях, не связанных с фильтром. computed помогает кешировать результат.',
    whenToUse:
      'computed стоит использовать для фильтрации, сортировки и группировки, зависящих от reactive state. Если данных очень много, может понадобиться debounce, серверная фильтрация или worker. Начинать стоит с измерения.',
    howItWorks:
      'computed запоминает зависимости: список и query. Пока они не изменились, Vue возвращает cached result. Метод в template не имеет такого lifecycle cache.',
    whyImportant:
      'На code review дорогие вызовы в template — частый сигнал performance-риска. Это не всегда bottleneck, но для больших данных может стать заметным.',
    codeExample: {
      language: 'vue',
      filename: 'ProductSearch.vue',
      code: `<script setup lang="ts">
const query = ref('')
const products = ref<Product[]>([])

// Better than calling filterProducts(products, query) in template.
const filteredProducts = computed(() =>
  filterProducts(products.value, query.value)
)
</script>`,
    },
    commonMistake:
      'Ошибка — несколько раз вызывать одну и ту же expensive-функцию в template. Render становится дороже без необходимости.',
    remember: 'Дорогой derived state лучше кешировать через computed.',
  },
  {
    questionId: 1218,
    title: 'Computed invalidation',
    category: 'Reactivity',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Computed invalidation — момент, когда Vue помечает computed как устаревший из-за изменения зависимости. Само значение пересчитывается лениво при следующем чтении. Это отличает computed от eager-подходов.',
    whenToUse:
      'Понимание invalidation важно при оптимизации derived state. Если зависимость меняется часто, computed тоже будет часто инвалидироваться. Если вычисление очень дорогое, можно добавить debounce upstream или изменить структуру данных.',
    howItWorks:
      'Vue отслеживает reactive reads внутри computed getter. При записи в зависимость computed становится dirty. Следующее чтение вычисляет новое значение и кеширует его.',
    whyImportant:
      'На интервью важно объяснить не только "computed кешируется", но и когда кеш сбрасывается. Это помогает понимать реальные performance-границы.',
    codeExample: {
      language: 'ts',
      filename: 'computed-cache.ts',
      code: `const price = ref(100)
const quantity = ref(2)

const total = computed(() => price.value * quantity.value)

const firstRead = total.value // calculated
const secondRead = total.value // cached
quantity.value += 1
const afterChange = total.value // recalculated`,
    },
    commonMistake:
      'Ошибка — ожидать, что computed кеширует навсегда. Любая прочитанная reactive dependency может инвалидировать кеш.',
    remember: 'Computed кешируется до изменения своих реактивных зависимостей.',
  },
  {
    questionId: 1219,
    title: 'Преждевременная оптимизация',
    category: 'Architecture',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Преждевременная оптимизация — усложнение кода до доказательства реальной performance-проблемы. Она может ухудшить читаемость, увеличить количество edge cases и сделать систему менее гибкой. Оптимизация должна иметь цель и метрику.',
    whenToUse:
      'Сначала стоит писать простой корректный код, а затем измерять. Исключение — известные архитектурные решения с очевидным масштабом, например виртуализация для десятков тысяч строк. Даже тогда нужно сохранять читаемость.',
    howItWorks:
      'Команда добавляет кеши, memoization, lazy loading или сложную структуру заранее. Потом оказывается, что bottleneck был в network, изображениях или backend. Код стал сложнее, а пользователь быстрее не получил.',
    whyImportant:
      'На Senior-уровне ценится не максимальное количество оптимизаций, а правильный выбор момента и места. Performance — это инженерная экономика.',
    codeExample: {
      language: 'bash',
      filename: 'performance-flow.sh',
      code: `# 1. Build correct feature
# 2. Measure real bottleneck
# 3. Optimize the bottleneck
# 4. Measure again
# 5. Keep the code understandable`,
    },
    commonMistake:
      'Ошибка — добавлять v-memo, markRaw и custom caching в простой компонент без evidence. Такой код сложнее поддерживать.',
    remember: 'Оптимизируй измеренную проблему, а не тревогу.',
  },
  {
    questionId: 1220,
    title: 'Поиск bottleneck',
    category: 'Diagnostics',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Bottleneck — реальное узкое место, которое ограничивает пользовательскую скорость. Это может быть network, TTFB, JavaScript execution, render, layout, images, hydration или backend. Угадать bottleneck сложно, его нужно измерять.',
    whenToUse:
      'Диагностика нужна перед любой серьёзной оптимизацией. Vue DevTools помогает смотреть component updates, Performance panel — main thread, Lighthouse — lab-аудит, Web Vitals — пользовательские метрики. Инструмент выбирают по гипотезе.',
    howItWorks:
      'Сначала фиксируют симптом: плохой LCP, INP, CLS, долгий route transition. Затем профилируют и находят источник. После изменения метрику проверяют снова.',
    whyImportant:
      'Без диагностики легко оптимизировать Vue-компонент, когда проблема была в изображении или backend latency. На интервью это ключевой признак зрелости.',
    codeExample: {
      language: 'bash',
      filename: 'diagnostics-checklist.sh',
      code: `# If LCP is bad: inspect image, server timing, render blocking resources.
# If INP is bad: profile main thread and event handlers.
# If CLS is bad: inspect size reservations and late content.
# If TTFB is bad: inspect server and caching.`,
    },
    commonMistake:
      'Ошибка — начинать с любимой оптимизации вместо измерения. У каждого bottleneck свой класс решений.',
    remember: 'Performance начинается с диагностики.',
  },
  {
    questionId: 1221,
    title: 'Nuxt payload size',
    category: 'Nuxt Performance',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Nuxt payload содержит данные, передаваемые клиенту после SSR/SSG. Если payload слишком большой, браузер дольше загружает, парсит и гидратирует страницу. Это влияет на network, memory и JavaScript execution.',
    whenToUse:
      'Оптимизация payload нужна, когда useAsyncData/useFetch возвращают raw backend objects, большие списки или повторяющиеся данные. Нужно отправлять client-safe DTO, разбивать второстепенные данные и грузить детали по требованию.',
    howItWorks:
      'Сервер сериализует данные, а клиент восстанавливает их при hydration. Всё лишнее становится частью стартовой стоимости. Уменьшение payload часто улучшает TTI/INP и общий startup.',
    whyImportant:
      'На Nuxt-интервью payload связывает SSR, security и performance. Большой payload может уничтожить выгоду быстрого HTML.',
    codeExample: {
      language: 'ts',
      filename: 'server/api/products.get.ts',
      code: `// Bad: returns raw backend documents with internal fields.
const products = await loadRawProducts()

// Better: return only fields needed by UI.
return products.map((product) => ({
  id: product.id,
  title: product.title,
  price: product.price,
  image: product.image,
}))`,
    },
    commonMistake:
      'Ошибка — отдавать весь backend response в SSR payload, потому что UI всё равно использует только часть полей.',
    remember: 'Payload должен быть маленьким, безопасным и нужным UI.',
  },
  {
    questionId: 1222,
    title: 'markRaw для SDK',
    category: 'Reactivity',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'markRaw помечает объект так, чтобы Vue не делал его реактивным proxy. Это полезно для сложных экземпляров библиотек: Monaco, Mapbox, chart engines, editors. Такие объекты обычно имеют собственную внутреннюю модель.',
    whenToUse:
      'markRaw применяют, когда объект не должен участвовать в Vue reactivity. Если UI должен реагировать только на замену экземпляра, можно хранить его в shallowRef. Для plain state, который отображается в template, markRaw обычно не нужен.',
    howItWorks:
      'Vue пропускает raw object при reactive conversion. Это снижает лишний tracking и предотвращает конфликты с библиотекой. Состояние UI лучше хранить отдельно в refs/computed.',
    whyImportant:
      'Некоторые performance-проблемы происходят не от DOM, а от лишней реактивности вокруг больших объектов. На интервью важно знать, как ограничивать reactive boundary.',
    codeExample: {
      language: 'ts',
      filename: 'useEditor.ts',
      code: `const editor = shallowRef<Editor | null>(null)

export const mountEditor = (element: HTMLElement) => {
  editor.value = markRaw(createEditor(element))
}`,
    },
    commonMistake:
      'Ошибка — делать reactive(editorInstance) и затем удивляться лишним proxy, tracking и странному поведению SDK.',
    remember: 'Сторонние class instances часто лучше держать вне глубокой реактивности.',
  },
  {
    questionId: 1223,
    title: 'v-once update behavior',
    category: 'Rendering',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Блок с v-once не обновляется после первого render. Это делает его быстрым для статичного содержимого и опасным для dynamic state. Vue доверяет разработчику, что subtree действительно не должен меняться.',
    whenToUse:
      'Используй v-once для статичных секций, которые не зависят от пользователя, locale, темы или live data. Если содержимое может измениться, лучше не применять v-once. Для частично статичных блоков Vue compiler уже делает много оптимизаций сам.',
    howItWorks:
      'Первый render создаёт DOM, затем Vue пропускает patch для этой области. Reactive changes внутри не отражаются. Это уменьшает update work, но может сделать UI некорректным.',
    whyImportant:
      'На интервью важно назвать и пользу, и риск. v-once — не универсальный ускоритель, а контракт неизменяемости.',
    codeExample: {
      language: 'vue',
      filename: 'BadOnce.vue',
      code: `<template>
  <!-- Bad: user.name can change, but UI will not update -->
  <p v-once>{{ user.name }}</p>

  <!-- Better: keep dynamic data reactive -->
  <p>{{ user.name }}</p>
</template>`,
    },
    commonMistake:
      'Ошибка — добавлять v-once в попытке убрать лишние updates без проверки, что данные действительно статичны.',
    remember: 'v-once фиксирует первый render.',
  },
  {
    questionId: 1224,
    title: 'Deep watch cost',
    category: 'Reactivity',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Deep watch отслеживает вложенные изменения объекта, но может быть дорогим для больших структур. Он также часто запускает эффект слишком широко. Для autosave и сложных форм нужны ограничения.',
    whenToUse:
      'Deep watch можно использовать для небольших объектов или быстрых эффектов. Для больших форм лучше отслеживать конкретные поля, использовать debounce, dirty flags или explicit save. Иначе autosave может превратиться в источник нагрузки.',
    howItWorks:
      'Vue должен наблюдать вложенные зависимости и реагировать на изменения внутри объекта. Если объект большой, стоимость обхода и частота triggers растут. Побочный эффект вроде сетевого запроса усугубляет проблему.',
    whyImportant:
      'На production-формах deep watch часто создаёт скрытые performance и network-проблемы. На интервью важно предложить более узкие зависимости.',
    codeExample: {
      language: 'ts',
      filename: 'useAutosave.ts',
      code: `// Bad: every nested change can trigger expensive autosave.
watch(form, saveDraft, { deep: true })

// Better: watch explicit fields and debounce the effect.
watch([() => form.title, () => form.description], debounce(saveDraft, 500))`,
    },
    commonMistake:
      'Ошибка — ставить deep watch на весь form state без debounce и лимитов. Это создаёт много лишней работы.',
    remember: 'Deep watch должен быть последним, а не первым решением.',
  },
  {
    questionId: 1225,
    title: 'customRef и debounce',
    category: 'Reactivity',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'customRef позволяет контролировать, когда ref отслеживается и когда уведомляет подписчиков. Это удобно для debounced inputs, где UI не должен запускать дорогие пересчёты на каждый символ. Такой ref делает reactive trigger управляемым.',
    whenToUse:
      'customRef стоит рассмотреть для поиска, autosave, фильтров и сценариев, где частые изменения нужно сгладить. Для обычного состояния он избыточен. Иногда проще использовать debounce в обработчике события.',
    howItWorks:
      'customRef принимает factory с track и trigger. Можно обновлять внутреннее значение сразу, но вызывать trigger только после debounce timeout. Зависимые computed/watchers обновятся реже.',
    whyImportant:
      'INP и main-thread work часто ухудшаются из-за слишком частых реактивных обновлений. customRef помогает оптимизировать сам источник изменений.',
    codeExample: {
      language: 'ts',
      filename: 'useDebouncedRef.ts',
      code: `export const useDebouncedRef = (initialValue: string, delay = 300) => {
  let value = initialValue
  let timeout: ReturnType<typeof setTimeout>

  return customRef<string>((track, trigger) => ({
    get() {
      track()
      return value
    },
    set(nextValue) {
      value = nextValue
      clearTimeout(timeout)
      timeout = setTimeout(trigger, delay)
    },
  }))
}`,
    },
    commonMistake:
      'Ошибка — добавлять customRef в простые поля, где debounce не нужен. Это усложняет mental model без пользы.',
    remember: 'customRef полезен, когда нужно управлять частотой trigger.',
  },
  {
    questionId: 1226,
    title: 'Web Vitals',
    category: 'Diagnostics',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Web Vitals — набор пользовательских performance-метрик. LCP оценивает загрузку главного контента, CLS — стабильность layout, INP — отзывчивость взаимодействий. Они помогают говорить о скорости через пользовательский опыт.',
    whenToUse:
      'Web Vitals нужны при аудите production-страниц, регрессиях и prioritization performance work. Lighthouse даёт lab-сигналы, real user monitoring показывает реальные устройства и сети. Для Vue/Nuxt важно связывать метрики с конкретными bottlenecks.',
    howItWorks:
      'Браузер измеряет моменты отрисовки, layout shifts и задержку взаимодействий. Инструменты собирают эти значения и показывают проблемы. Каждая метрика имеет свой класс решений.',
    whyImportant:
      'Оптимизация без пользовательских метрик часто превращается в локальные улучшения без результата. На интервью Web Vitals показывают, что разработчик думает о пользователе, а не только о коде.',
    codeExample: {
      language: 'bash',
      filename: 'web-vitals-checklist.sh',
      code: `# LCP: optimize hero content, server timing, images.
# CLS: reserve space for media and dynamic blocks.
# INP: reduce long tasks and heavy event handlers.
# TTFB: inspect server rendering and caching.`,
    },
    commonMistake:
      'Ошибка — улучшать bundle size и считать performance решённой, хотя проблема была в CLS или TTFB.',
    remember: 'LCP, CLS и INP измеряют разные части пользовательского опыта.',
  },
  {
    questionId: 1227,
    title: 'Nuxt routeRules performance',
    category: 'Nuxt Performance',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'routeRules в Nuxt позволяют настраивать поведение маршрутов: кеширование, prerender, ISR-like правила, headers и другие platform hints. Для performance они важны, потому что могут снизить TTFB и нагрузку на сервер. Особенно это полезно для публичных страниц.',
    whenToUse:
      'routeRules стоит рассмотреть для каталогов, блогов, landing pages, документации и публичных API, которые можно кешировать. Для персональных данных правила должны быть осторожными. Нельзя кешировать всё подряд только ради скорости.',
    howItWorks:
      'Nuxt/Nitro применяет правила к route pattern. В зависимости от target и платформы route может быть prerendered, кеширован или обработан иначе. Это позволяет выбирать strategy per route.',
    whyImportant:
      'На Senior-уровне performance — это не только компонентный render. Серверная стратегия и caching часто дают больший эффект, чем микроправки Vue.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  routeRules: {
    '/catalog/**': { isr: 300 },
    '/docs/**': { prerender: true },
  },
})`,
    },
    commonMistake:
      'Ошибка — кешировать user-specific route как публичный ресурс. Performance не должен ломать приватность.',
    remember: 'routeRules помогают оптимизировать route-level performance в Nuxt.',
  },
  {
    questionId: 1228,
    title: 'Bundle optimization',
    category: 'Bundle',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Bundle optimization уменьшает количество JavaScript, который нужен пользователю на старте. Это включает dynamic import, lazy loading, tree shaking, удаление тяжёлых зависимостей и грамотные chunk boundaries. Меньше JS часто означает быстрее загрузку и лучше INP.',
    whenToUse:
      'Оптимизировать bundle нужно, если initial JS большой, route transition медленный или Lighthouse/Performance panel показывает долгий parse/execute. Тяжёлые SDK, charts, editors и admin-only features должны загружаться по требованию.',
    howItWorks:
      'Bundler строит dependency graph. Static imports часто попадают в текущий chunk, dynamic imports создают async boundary. Tree shaking удаляет неиспользуемые exports, если пакет и код позволяют это сделать.',
    whyImportant:
      'Vue-компонент может быть быстрым, но огромный bundle испортит старт. На интервью важно объяснить network + parse + execute cost, а не только размер gzip.',
    codeExample: {
      language: 'ts',
      filename: 'lazy-chart.ts',
      code: `// Bad: chart SDK is loaded with the main path.
import { createChart } from 'heavy-chart-sdk'

// Better: load only when chart is needed.
const loadChart = async () => {
  const { createChart } = await import('heavy-chart-sdk')
  return createChart
}`,
    },
    commonMistake:
      'Ошибка — импортировать тяжёлую библиотеку в app shell или layout, хотя она нужна на одной странице.',
    remember: 'Оптимизация bundle снижает network, parse и execute cost.',
  },
  {
    questionId: 1229,
    title: 'Bottleneck-driven architecture',
    category: 'Architecture',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Bottleneck-driven architecture означает, что оптимизации выбираются по реальному узкому месту. Для Vue/Nuxt это может быть рендер, реактивность, hydration, network, images, серверный TTFB или backend. Архитектура должна отвечать на измеренную проблему.',
    whenToUse:
      'Такой подход нужен при performance-аудите, росте продукта, появлении длинных списков, SSR-замедлениях и плохих Web Vitals. Он помогает не усложнять код там, где проблема находится в другом слое. Решение может быть как компонентным, так и инфраструктурным.',
    howItWorks:
      'Команда формулирует симптом, измеряет, строит гипотезу, оптимизирует и проверяет повторно. Если проблема в LCP-image, v-memo не поможет. Если проблема в 20 000 DOM nodes, routeRules тоже не решают core issue.',
    whyImportant:
      'Senior-разработчик должен видеть систему целиком. Performance — это не список трюков, а метод поиска и устранения ограничений.',
    codeExample: {
      language: 'bash',
      filename: 'bottleneck-map.sh',
      code: `# Symptom -> likely area
# High TTFB -> server, data fetching, cache
# High LCP -> hero resource, render blocking, server timing
# High INP -> long tasks, handlers, hydration
# High CLS -> layout reservation`,
    },
    commonMistake:
      'Ошибка — оптимизировать Vue rendering, когда bottleneck находится в server response или неоптимизированном изображении.',
    remember: 'Сначала найди bottleneck, потом выбирай инструмент.',
  },
  {
    questionId: 1230,
    title: 'Lazy hydration в Nuxt',
    category: 'Nuxt Performance',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Lazy hydration откладывает оживление интерактивности для компонентов, которые не нужны сразу. В Nuxt SSR может быстро показать HTML, но hydration всё равно требует JavaScript и CPU. Отложенная hydration снижает стартовую нагрузку.',
    whenToUse:
      'Подход полезен для блоков ниже первого экрана, отзывов, рекомендаций, чартов и виджетов, которые пользователь не трогает сразу. Критичные элементы покупки, навигации и форм лучше гидратировать сразу. UX должен определять границу.',
    howItWorks:
      'Компонент может стать интерактивным при попадании во viewport, idle, interaction или другом trigger. До этого он может быть статичным HTML или fallback. Реализация зависит от Nuxt/Vue tooling и выбранных компонентов.',
    whyImportant:
      'Hydration cost часто становится скрытой причиной плохого INP. На Senior-интервью важно говорить не только о SSR HTML, но и о цене оживления интерфейса.',
    codeExample: {
      language: 'vue',
      filename: 'ProductPage.vue',
      code: `<template>
  <ProductHero />
  <BuyBox />

  <!-- Less critical interactivity can be delayed. -->
  <ClientOnly>
    <RecommendationCarousel />
  </ClientOnly>
</template>`,
    },
    commonMistake:
      'Ошибка — гидратировать все heavy widgets сразу, включая те, которые находятся далеко ниже первого экрана.',
    remember: 'SSR показывает HTML, lazy hydration управляет стоимостью интерактивности.',
  },
  {
    questionId: 1231,
    title: 'INP и тяжёлые обработчики',
    category: 'Web Vitals',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'INP оценивает отзывчивость страницы на взаимодействия. Тяжёлые input handlers, синхронная фильтрация больших массивов и частые reactive updates могут ухудшить INP. Пользователь ощущает это как задержку после действия.',
    whenToUse:
      'Оптимизация INP нужна, когда ввод, клики или route transitions реагируют медленно. Нужно профилировать main thread, искать long tasks и сокращать работу в критическом path. Иногда помогает debounce, worker, виртуализация или серверная фильтрация.',
    howItWorks:
      'Браузер обрабатывает событие, выполняет JavaScript, обновляет layout/paint и показывает результат. Если обработчик блокирует main thread, следующий кадр задерживается. Vue updates тоже выполняются в этом контексте.',
    whyImportant:
      'INP — важная современная метрика UX. На Senior-уровне нужно уметь связать reactive design с main-thread cost.',
    codeExample: {
      language: 'vue',
      filename: 'SearchBox.vue',
      code: `<script setup lang="ts">
const query = useDebouncedRef('', 250)
const results = computed(() => searchIndex.value.find(query.value))
</script>

<template>
  <input v-model="query" />
  <SearchResults :items="results" />
</template>`,
    },
    commonMistake:
      'Ошибка — выполнять тяжёлый поиск по большому массиву синхронно на каждый символ без debounce или оптимизации структуры данных.',
    remember: 'Для хорошего INP сокращай main-thread работу во время взаимодействия.',
  },
  {
    questionId: 1232,
    title: 'CLS и размеры медиа',
    category: 'Web Vitals',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'CLS измеряет неожиданные сдвиги layout. Изображения, iframe, рекламные блоки и динамический контент без зарезервированного места часто создают высокий CLS. Vue-код может быть правильным, но UX будет дёргаться.',
    whenToUse:
      'Оптимизация CLS нужна для страниц с медиа, карточками, skeletons и динамически появляющимися блоками. Нужно задавать width/height, aspect-ratio, min-height и стабильные контейнеры. Это особенно важно для LCP-изображений и списков.',
    howItWorks:
      'Если браузер не знает размер ресурса до загрузки, он сначала раскладывает страницу без него, а потом двигает контент. Зарезервированное пространство предотвращает сдвиг. Это не Vue-специфичная, но очень важная frontend-задача.',
    whyImportant:
      'На интервью performance нельзя сводить только к JavaScript. Layout stability напрямую влияет на восприятие качества интерфейса.',
    codeExample: {
      language: 'vue',
      filename: 'ProductImage.vue',
      code: `<template>
  <!-- Better: browser can reserve space before image loads -->
  <img
    src="/product.jpg"
    alt="Product"
    width="800"
    height="600"
    loading="lazy"
  />
</template>`,
    },
    commonMistake:
      'Ошибка — грузить изображения без размеров и потом пытаться исправить CLS через Vue memoization.',
    remember: 'CLS исправляют стабильной геометрией, а не только оптимизацией JavaScript.',
  },
  {
    questionId: 1233,
    title: 'Dynamic import',
    category: 'Code Splitting',
    rarity: 'rare',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Dynamic import создаёт асинхронную границу загрузки JavaScript. Bundler может вынести код в отдельный chunk и загрузить его только при необходимости. Это один из основных инструментов code splitting.',
    whenToUse:
      'Dynamic import используют для тяжёлых библиотек, редких экранов, admin-only функций, редакторов и аналитики. Не стоит динамически грузить всё подряд: дополнительный network request тоже имеет цену. Критичный код должен быть доступен сразу.',
    howItWorks:
      'Вместо static import модуль загружается через import() во время выполнения. Bundler видит это и создаёт отдельный chunk. Когда пользователь запускает сценарий, chunk скачивается и выполняется.',
    whyImportant:
      'На Senior-интервью важно говорить не только о gzip size, но и о parse/execute cost. Dynamic import помогает уменьшить стартовую стоимость приложения.',
    codeExample: {
      language: 'ts',
      filename: 'exportCsv.ts',
      code: `export const exportCsv = async (rows: Row[]) => {
  const { unparse } = await import('papaparse')
  downloadFile(unparse(rows), 'report.csv')
}`,
    },
    commonMistake:
      'Ошибка — импортировать heavy export library в main bundle, хотя экспорт нужен малой части пользователей.',
    remember: 'Dynamic import загружает редкий тяжёлый код по требованию.',
  },
  {
    questionId: 1234,
    title: 'Prefetch trade-offs',
    category: 'Nuxt Performance',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Prefetch заранее загружает ресурсы, которые могут понадобиться позже. Это ускоряет будущую навигацию, но потребляет сеть, CPU, кеш и батарею. На слабых устройствах чрезмерный prefetch может ухудшить старт.',
    whenToUse:
      'Prefetch полезен для вероятных следующих маршрутов и важных chunks. Его нужно ограничивать на слабой сети, для тяжёлых маршрутов и при большом количестве ссылок. Nuxt даёт удобства, но стратегия всё равно нужна.',
    howItWorks:
      'Браузер загружает ресурс с более низким приоритетом или по эвристике. Если пользователь действительно переходит, ресурс уже в кеше. Если не переходит, ресурс был скачан зря.',
    whyImportant:
      'Performance — это распределение ограниченных ресурсов. На интервью важно понимать, что prefetch не бесплатный и может конкурировать с critical assets.',
    codeExample: {
      language: 'vue',
      filename: 'ProductLinks.vue',
      code: `<template>
  <!-- Prefetch only likely next actions, not every heavy route. -->
  <NuxtLink to="/checkout" prefetch>Checkout</NuxtLink>
  <NuxtLink to="/large-report" :prefetch="false">Large report</NuxtLink>
</template>`,
    },
    commonMistake:
      'Ошибка — prefetch-ить десятки тяжёлых страниц из большого меню сразу после загрузки.',
    remember: 'Prefetch ускоряет будущее, но может замедлить настоящее.',
  },
  {
    questionId: 1235,
    title: 'Tree shaking',
    category: 'Bundle',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Tree shaking — удаление неиспользуемого кода из bundle. Оно работает лучше с ES modules, точечными импортами и библиотеками без неожиданных side effects. Это помогает уменьшить JavaScript, который скачивает и выполняет пользователь.',
    whenToUse:
      'Tree shaking важен при выборе библиотек, импорте utility packages, icon sets и date libraries. Если пакет плохо tree-shakeable, стоит искать точечные entrypoints или альтернативу. Нужно проверять bundle analyzer, а не надеяться.',
    howItWorks:
      'Bundler анализирует dependency graph и удаляет exports, которые нигде не используются. Side effects могут помешать удалению, потому что bundler не может безопасно выбросить код. package.json sideEffects тоже влияет.',
    whyImportant:
      'Большой bundle ухудшает загрузку, parse и execute. На интервью tree shaking показывает понимание связки кода, bundler и runtime performance.',
    codeExample: {
      language: 'ts',
      filename: 'icons.ts',
      code: `// Bad: can pull too much depending on the package.
import * as Icons from 'icon-library'

// Better: import only what is needed.
import { SearchIcon, UserIcon } from 'icon-library'`,
    },
    commonMistake:
      'Ошибка — импортировать всю библиотеку ради одной функции или иконки и не проверять итоговый chunk.',
    remember: 'Tree shaking работает лучше с точечными ES module imports и без side effects.',
  },
  {
    questionId: 1236,
    title: 'KeepAlive trade-offs',
    category: 'Components',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'KeepAlive кеширует экземпляры компонентов, чтобы при повторном показе они не создавались заново. Это сохраняет состояние и ускоряет возврат. Но кешированные экземпляры занимают память и могут держать устаревшие данные.',
    whenToUse:
      'KeepAlive полезен для tabs, wizard steps, expensive dynamic components и страниц, где важно сохранить состояние. Его нужно ограничивать include/exclude/max и обновлять данные при activated. Не стоит кешировать всё приложение без контроля.',
    howItWorks:
      'Компонент не unmount-ится полностью, а переходит в deactivated state. При возвращении вызывается activated. Vue хранит instance и subtree, экономя повторный mount cost.',
    whyImportant:
      'Это хороший пример trade-off: скорость против памяти и свежести. На интервью важно назвать обе стороны.',
    codeExample: {
      language: 'vue',
      filename: 'TabbedReports.vue',
      code: `<template>
  <KeepAlive :max="3">
    <component :is="activeReportComponent" />
  </KeepAlive>
</template>`,
    },
    commonMistake:
      'Ошибка — кешировать тяжёлые компоненты без max и без стратегии обновления данных при возвращении.',
    remember: 'KeepAlive ускоряет повторный показ ценой памяти и freshness-рисков.',
  },
  {
    questionId: 1237,
    title: 'Suspense',
    category: 'Components',
    rarity: 'rare',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Suspense координирует async dependencies и fallback UI. Он помогает управлять состоянием загрузки для async components или setup. Это не магический ускоритель, но инструмент UX и orchestration.',
    whenToUse:
      'Suspense полезен, когда несколько async parts должны показать единый fallback или когда нужно контролировать, как появляется async UI. Для простых независимых loaders он может быть избыточным. Нужно учитывать SSR и UX.',
    howItWorks:
      'Suspense ждёт async dependencies в default slot и показывает fallback до готовности. Когда зависимости resolved, отображается основной контент. Это делает loading state декларативнее.',
    whyImportant:
      'На интервью Suspense важно объяснять как инструмент координации, а не как performance silver bullet. Он влияет на perceived performance и структуру async UI.',
    codeExample: {
      language: 'vue',
      filename: 'ReportShell.vue',
      code: `<template>
  <Suspense>
    <AsyncReport />

    <template #fallback>
      <ReportSkeleton />
    </template>
  </Suspense>
</template>`,
    },
    commonMistake:
      'Ошибка — ожидать, что Suspense сам уменьшит bundle или ускорит backend. Он управляет fallback, а не устраняет источник задержки.',
    remember: 'Suspense улучшает orchestration async UI и fallback states.',
  },
  {
    questionId: 1238,
    title: 'Teleport для overlays',
    category: 'Rendering',
    rarity: 'rare',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Teleport позволяет рендерить часть компонента в другое место DOM, например в body или overlay root. Это полезно для модалок, tooltip, dropdown и popover. Teleport помогает избежать проблем z-index, overflow и сложных контейнеров.',
    whenToUse:
      'Teleport стоит рассмотреть для overlays, которые визуально должны быть поверх всего интерфейса. Он особенно полезен внутри таблиц, scroll containers и компонентов с overflow hidden. Для обычной разметки он не нужен.',
    howItWorks:
      'Логически компонент остаётся частью Vue tree, но DOM-узлы переносятся в target. Состояние, props и events продолжают работать. Это разделяет логическую и DOM-позицию.',
    whyImportant:
      'Teleport не всегда про скорость, но он снижает layout и layering complexity. Меньше CSS-хаков часто означает более стабильный UI и меньше runtime-ошибок.',
    codeExample: {
      language: 'vue',
      filename: 'TooltipOverlay.vue',
      code: `<template>
  <button @mouseenter="open = true">Info</button>

  <Teleport to="body">
    <Tooltip v-if="open" />
  </Teleport>
</template>`,
    },
    commonMistake:
      'Ошибка — бороться с overflow и z-index внутри глубокой таблицы, хотя overlay логически должен жить в отдельном root.',
    remember: 'Teleport помогает overlays выйти из сложной DOM-иерархии.',
  },
  {
    questionId: 1239,
    title: 'Когда оптимизация вредна',
    category: 'Architecture',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Оптимизация вредна, когда она усложняет код, ухудшает UX или решает несуществующую проблему. Производительность — не единственная цель системы. Читаемость, корректность и скорость разработки тоже имеют цену.',
    whenToUse:
      'Этот принцип важен при добавлении memoization, кешей, lazy loading, custom refs и сложных abstractions. Если метрика не улучшается или UX становится хуже, оптимизация неудачна. Иногда проще удалить оптимизацию.',
    howItWorks:
      'Любая оптимизация меняет trade-off: память против скорости, свежесть против кеша, bundle split против дополнительного request, читаемость против микровыигрыша. Решение должно быть осознанным.',
    whyImportant:
      'Senior-разработчик отвечает не за максимальное количество трюков, а за устойчивую систему. Умение отказаться от оптимизации так же важно, как умение её сделать.',
    codeExample: {
      language: 'bash',
      filename: 'optimization-review.sh',
      code: `# Before merging optimization:
# - What metric improves?
# - How much does it improve?
# - What complexity was added?
# - What UX risk appeared?
# - Can it be simpler?`,
    },
    commonMistake:
      'Ошибка — оставлять сложный кеш, который почти не улучшил метрики, но сделал баги труднее.',
    remember: 'Оптимизация должна улучшать измеримый результат и не разрушать поддержку.',
  },
  {
    questionId: 1240,
    title: 'Зрелая performance-стратегия',
    category: 'Architecture',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Зрелая performance-стратегия — это процесс: измерить, найти bottleneck, выбрать точечное решение, проверить результат и сохранить читаемость. Она объединяет Vue reactivity, Nuxt rendering, bundle, Web Vitals, сервер и UX. Это системная работа.',
    whenToUse:
      'Такой подход нужен при финальном аудите, перед релизом, после роста данных, при плохих Web Vitals и перед сложными оптимизациями. Он помогает расставлять приоритеты. Не все проблемы нужно решать на уровне Vue-компонента.',
    howItWorks:
      'Сначала фиксируется метрика: LCP, CLS, INP, TTFB, bundle size или render time. Затем инструментами находится источник. После изменения проводится повторное измерение и review сложности.',
    whyImportant:
      'На Senior-интервью ожидают именно такой подход. Не список API, а способность связать проблему пользователя с техническим bottleneck и аккуратным решением.',
    codeExample: {
      language: 'bash',
      filename: 'performance-strategy.sh',
      code: `# Mature performance workflow:
# 1. Define user-facing symptom
# 2. Measure with the right tool
# 3. Identify the bottleneck
# 4. Apply focused optimization
# 5. Verify and document the trade-off`,
    },
    commonMistake:
      'Ошибка — оптимизировать всё подряд перед релизом без baseline и повторных измерений. Так легко добавить сложность без пользы.',
    remember: 'Performance — это измеряемый инженерный процесс, а не набор случайных трюков.',
  },
] satisfies PerformanceCardInput[]

export const performanceKnowledgeCards: ContentKnowledgeCard[] = cards.map(createCard)
