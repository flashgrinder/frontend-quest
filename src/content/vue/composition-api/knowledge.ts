import type { ContentKnowledgeCard } from '../../../types/content'

const createInterviewQuestions = (title: string, category: string): string[] => [
  `Какие задачи решает ${title} в теме ${category} (Composition API)?`,
  `Какие ограничения ${title} важно учитывать в контексте Composition API?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

export const compositionApiKnowledgeCards: ContentKnowledgeCard[] = [
  {
    id: 'knowledge-composition-api-q201',
    moduleId: 'composition-api',
    questionId: 201,
    title: 'Composition API',
    category: 'Composition API',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Composition API — набор функций Vue для описания логики компонента. К нему относятся ref, reactive, computed, watch, lifecycle hooks и другие API. Он позволяет собирать связанную логику в одном месте, а не распределять её по опциям.',
    whenToUse:
      'Composition API полезен в компонентах со сложной логикой, несколькими связанными сценариями или потребностью в переиспользовании поведения. Он хорошо работает с TypeScript и composables. Для очень простых компонентов важно не создавать лишних абстракций.',
    howItWorks:
      'Код выполняется внутри setup-контекста компонента. Реактивные значения и функции создаются в JavaScript-коде, а затем используются шаблоном. В `<script setup>` объявления верхнего уровня доступны template автоматически.',
    whyImportant:
      'Этот подход является базой современного Vue 3. На интервью важно объяснить не только синтаксис, но и цель: организация связанной логики и переиспользование. Это отличает зрелое понимание от простого знания ref и computed.',
    codeExample: {
      language: 'vue',
      filename: 'CounterPanel.vue',
      code: `<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>`,
    },
    commonMistake:
      'Ошибка — переносить код в Composition API механически, не улучшая структуру. Если логика остаётся хаотичной, новый синтаксис не помогает. Важно группировать код по смыслу и давать понятные имена.',
    interviewQuestions: createInterviewQuestions("Composition API", "Composition API"),
    remember:
      'Composition API — это способ организовать и переиспользовать логику компонента через функции.',
  },
  {
    id: 'knowledge-composition-api-q202',
    moduleId: 'composition-api',
    questionId: 202,
    title: 'Зачем появился Composition API',
    category: 'Composition API',
    rarity: 'rare',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Composition API появился, чтобы лучше работать с растущей логикой компонентов. В Options API код одной возможности может быть разбросан между data, computed, methods и watch. Composition API позволяет держать состояние, вычисления и эффекты одной возможности рядом.',
    whenToUse:
      'Он особенно полезен в больших компонентах, сложных формах, интеграциях и повторяемых сценариях. Также он помогает выносить поведение в composables. Если компонент короткий и очевидный, можно писать просто и не усложнять структуру.',
    howItWorks:
      'В setup создаются реактивные значения, computed, watchers и функции. Их можно группировать по фичам или выносить в отдельные composables. Так одна логическая возможность становится отдельным блоком кода.',
    whyImportant:
      'На интервью вопрос о мотивации показывает архитектурное мышление. Хороший ответ должен упомянуть масштабирование логики, переиспользование и TypeScript. Это лучше, чем ответ "новый синтаксис вместо старого".',
    codeExample: {
      language: 'ts',
      filename: 'useSearch.ts',
      code: `export const useSearch = () => {
  const query = ref('')
  const isEmpty = computed(() => query.value.trim() === '')

  return { query, isEmpty }
}`,
    },
    commonMistake:
      'Ошибка — считать Composition API обязательным усложнением. Его сила проявляется, когда есть связанная логика или переиспользование. Для маленького компонента лишний composable может ухудшить читаемость.',
    interviewQuestions: createInterviewQuestions("Зачем появился Composition API", "Composition API"),
    remember:
      'Composition API решает проблему организации и переиспользования логики в больших компонентах.',
  },
  {
    id: 'knowledge-composition-api-q203',
    moduleId: 'composition-api',
    questionId: 203,
    title: 'Composition API и Options API',
    category: 'Vue Architecture',
    rarity: 'rare',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Options API группирует код по типам опций: data, computed, methods, watch. Composition API группирует код по логическим задачам через функции. Оба подхода могут создавать рабочие Vue-компоненты.',
    whenToUse:
      'Composition API удобен для сложной и переиспользуемой логики. Options API может быть понятен в простых компонентах и старых кодовых базах. На практике важно следовать стилю команды и не смешивать подходы хаотично.',
    howItWorks:
      'В Options API Vue обрабатывает объект опций. В Composition API setup возвращает или раскрывает значения для шаблона. В script setup компилятор упрощает boilerplate и делает объявления доступными template.',
    whyImportant:
      'На интервью важно не демонизировать Options API. Зрелый ответ описывает trade-off: Composition API лучше масштабирует связанную логику и TypeScript, но требует дисциплины организации кода.',
    codeExample: {
      language: 'vue',
      filename: 'SetupStyle.vue',
      code: `<script setup lang="ts">
const label = 'Composition API'
</script>

<template>{{ label }}</template>`,
    },
    commonMistake:
      'Ошибка — смешивать Options API и Composition API без причины внутри одного компонента. Это усложняет поиск источников данных. Лучше выбрать один стиль для компонента и придерживаться его.',
    interviewQuestions: createInterviewQuestions("Composition API и Options API", "Vue Architecture"),
    remember:
      'Главное отличие — группировка по опциям против группировки по смыслу.',
  },
  {
    id: 'knowledge-composition-api-q204',
    moduleId: 'composition-api',
    questionId: 204,
    title: 'script setup',
    category: 'Script Setup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      '`<script setup>` — компиляторный синтаксис Vue SFC для более короткой записи setup-логики. Он убирает необходимость писать export default и вручную возвращать значения. Всё объявленное на верхнем уровне доступно шаблону.',
    whenToUse:
      'script setup используют в современных Vue 3 компонентах, особенно с TypeScript. Он удобен для props, emits, composables и локального состояния. В редких случаях обычный setup может быть нужен для совместимости или специфичной структуры.',
    howItWorks:
      'Компилятор преобразует script setup в обычный setup компонента. Макросы defineProps, defineEmits, defineExpose и defineModel обрабатываются на этапе компиляции. Их не нужно импортировать.',
    whyImportant:
      'script setup стал стандартным стилем Vue 3. На интервью важно объяснить, что это не runtime-фича, а compile-time синтаксис. Это помогает понимать ограничения макросов и доступность значений в template.',
    codeExample: {
      language: 'vue',
      filename: 'BadgeLabel.vue',
      code: `<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>{{ label }}</template>`,
    },
    commonMistake:
      'Ошибка — пытаться импортировать defineProps или вызывать макросы внутри условий. Макросы должны использоваться предсказуемо на верхнем уровне. Другая ошибка — думать, что код выполняется один раз на всё приложение.',
    interviewQuestions: createInterviewQuestions("script setup", "Script Setup"),
    remember:
      'script setup — короткий compile-time синтаксис для setup-логики компонента.',
  },
  {
    id: 'knowledge-composition-api-q205',
    moduleId: 'composition-api',
    questionId: 205,
    title: 'Обычная функция setup',
    category: 'Setup Function',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'setup() — функция компонента, в которой создаётся Composition API логика. Она вызывается перед созданием экземпляра компонента в привычном Options API смысле. Значения для шаблона нужно вернуть из setup.',
    whenToUse:
      'Обычный setup встречается в компонентах без script setup, в библиотеках или в старом коде Vue 3. Он полезен для понимания основы Composition API. В новых SFC часто выбирают script setup из-за меньшего boilerplate.',
    howItWorks:
      'setup принимает props и context. Внутри можно создать ref, reactive, computed и функции. Возвращённый объект становится доступен шаблону. Если значение не вернуть, template его не увидит.',
    whyImportant:
      'Понимание setup помогает не воспринимать script setup как магию. На интервью можно объяснить, что script setup компилируется в похожую setup-функцию. Это делает модель компонента яснее.',
    codeExample: {
      language: 'ts',
      filename: 'CounterComponent.ts',
      code: `export default {
  setup() {
    const count = ref(0)
    return { count }
  },
}`,
    },
    commonMistake:
      'Ошибка — объявить значение внутри setup и забыть вернуть его для шаблона. В script setup такой проблемы обычно нет. Также важно не обращаться к DOM до монтирования.',
    interviewQuestions: createInterviewQuestions("Обычная функция setup", "Setup Function"),
    remember:
      'В обычном setup значения для template должны быть возвращены явно.',
  },
  {
    id: 'knowledge-composition-api-q206',
    moduleId: 'composition-api',
    questionId: 206,
    title: 'ref в Composition API',
    category: 'Reactivity',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'ref создаёт реактивную ссылку на значение. В JavaScript-коде значение читается и меняется через `.value`. В шаблоне Vue обычно разворачивает ref автоматически.',
    whenToUse:
      'ref подходит для отдельных значений: счётчиков, строк, boolean-флагов, выбранного id, DOM-ссылок. Он часто используется внутри composables. Для объектной группы полей можно рассмотреть reactive.',
    howItWorks:
      'Vue отслеживает чтение и запись свойства `.value`. При изменении `.value` зависимые computed, watchers и render effect получают обновление. TypeScript обычно выводит тип ref из начального значения.',
    whyImportant:
      'ref — основной строительный блок Composition API. Без понимания `.value` сложно объяснить реактивность, v-model, computed и composables. На интервью это базовая, но очень важная тема.',
    codeExample: {
      language: 'ts',
      filename: 'counter.ts',
      code: `const count = ref(0)
count.value += 1`,
    },
    commonMistake:
      'Ошибка — писать `count += 1` вместо `count.value += 1` в script setup. Другая ошибка — думать, что `.value` нужен в любой интерполяции template.',
    interviewQuestions: createInterviewQuestions("ref в Composition API", "Reactivity"),
    remember:
      'ref хранит реактивное значение в `.value`.',
  },
  {
    id: 'knowledge-composition-api-q207',
    moduleId: 'composition-api',
    questionId: 207,
    title: 'reactive в Composition API',
    category: 'Reactivity',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'reactive создаёт Proxy для объекта и делает его свойства реактивными. Он удобен для связанного объектного состояния. В отличие от ref, доступ к полям идёт напрямую через `state.name`.',
    whenToUse:
      'reactive используют для форм, фильтров, настроек и других объектов с несколькими связанными полями. Для одного примитива обычно проще ref. Если объект нужно часто заменять целиком, ref с объектом может быть удобнее.',
    howItWorks:
      'Proxy перехватывает чтение и запись свойств. При чтении Vue собирает зависимости, при записи запускает обновления. Нужно быть осторожным с деструктуризацией, потому что связь с Proxy может потеряться.',
    whyImportant:
      'reactive помогает строить удобное объектное состояние. На интервью важно знать не только синтаксис, но и ограничения: Proxy, ссылки, toRef/toRefs. Это показывает практический опыт.',
    codeExample: {
      language: 'ts',
      filename: 'form-state.ts',
      code: `const form = reactive({
  email: '',
  password: '',
})`,
    },
    commonMistake:
      'Ошибка — деструктурировать reactive без toRefs и ожидать сохранения реактивности. Другая ошибка — использовать reactive для одиночного boolean, где ref был бы проще.',
    interviewQuestions: createInterviewQuestions("reactive в Composition API", "Reactivity"),
    remember:
      'reactive подходит для объектного состояния, но требует аккуратности с деструктуризацией.',
  },
  {
    id: 'knowledge-composition-api-q208',
    moduleId: 'composition-api',
    questionId: 208,
    title: 'computed в Composition API',
    category: 'Reactivity',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'computed создаёт кешируемое производное значение. Оно зависит от реактивных источников и пересчитывается только после их изменения. Getter computed должен быть чистым.',
    whenToUse:
      'computed используют для derived state: фильтрованные списки, проценты, подписи, флаги доступности. Если нужна реакция с побочным эффектом, лучше watch. Если нужна команда по клику, лучше функция.',
    howItWorks:
      'При первом чтении computed выполняет getter и запоминает зависимости. Пока они не меняются, возвращается кеш. После изменения зависимости computed становится dirty и пересчитывается при следующем чтении.',
    whyImportant:
      'computed помогает не дублировать состояние и не хранить вручную то, что можно вывести. На интервью это часто связывают с разницей между computed, methods и watch. Хороший ответ упоминает кеширование и чистоту.',
    codeExample: {
      language: 'ts',
      filename: 'progress.ts',
      code: `const percent = computed(() => Math.round(done.value / total.value * 100))`,
    },
    commonMistake:
      'Ошибка — делать запросы или менять state внутри computed. Это нарушает предсказуемость. Для side effects нужен watch или action.',
    interviewQuestions: createInterviewQuestions("computed в Composition API", "Reactivity"),
    remember:
      'computed — чистое кешируемое значение, зависящее от реактивных источников.',
  },
  {
    id: 'knowledge-composition-api-q209',
    moduleId: 'composition-api',
    questionId: 209,
    title: 'watch в Composition API',
    category: 'Watchers',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'watch наблюдает за реактивным источником и выполняет callback при изменении. Он подходит для побочных эффектов: запросов, синхронизации, сохранения, логирования. watch не является заменой computed.',
    whenToUse:
      'watch выбирают, когда изменение состояния должно вызвать внешнее действие. Например, обновить URL, выполнить запрос, сохранить настройки. Для отображаемого производного значения лучше computed.',
    howItWorks:
      'watch принимает источник и callback. Источником может быть ref, getter, reactive object или массив источников. Callback получает новое и старое значение, а опции позволяют настроить immediate, deep и flush.',
    whyImportant:
      'watch помогает разделять значения и эффекты. На интервью это показывает понимание side effects. Правильное использование watch предотвращает хаотичные цепочки обновлений.',
    codeExample: {
      language: 'ts',
      filename: 'watch-filter.ts',
      code: `watch(filter, (value) => {
  updateQueryParam(value)
})`,
    },
    commonMistake:
      'Ошибка — использовать watch для вычислений, которые лучше описать computed. Другая ошибка — запускать внутри watcher изменение того же источника без защиты от циклов.',
    interviewQuestions: createInterviewQuestions("watch в Composition API", "Watchers"),
    remember:
      'watch нужен для реакции на изменение, особенно для side effects.',
  },
  {
    id: 'knowledge-composition-api-q210',
    moduleId: 'composition-api',
    questionId: 210,
    title: 'watchEffect',
    category: 'Watchers',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'watchEffect запускает функцию и автоматически отслеживает реактивные значения, прочитанные внутри неё. Он выполняется сразу и затем повторяется при изменении зависимостей. Это более автоматический вариант реактивного эффекта.',
    whenToUse:
      'watchEffect удобен для простых эффектов, где зависимости понятны из тела функции. Если нужен oldValue или точный список источников, лучше watch. Чем больше callback, тем осторожнее стоит использовать автоматические зависимости.',
    howItWorks:
      'Во время выполнения callback Vue собирает все reactive/ref чтения. Они становятся зависимостями эффекта. При изменении любой зависимости callback планируется снова.',
    whyImportant:
      'watchEffect помогает понять dependency tracking на практике. На интервью важно сравнить его с watch и объяснить автоматический сбор зависимостей. Это middle-тема, где важны нюансы.',
    codeExample: {
      language: 'ts',
      filename: 'title-effect.ts',
      code: `watchEffect(() => {
  document.title = pageTitle.value
})`,
    },
    commonMistake:
      'Ошибка — случайно прочитать лишний ref внутри watchEffect и получить лишние запуски. Для сложной логики лучше явный watch.',
    interviewQuestions: createInterviewQuestions("watchEffect", "Watchers"),
    remember:
      'watchEffect сам собирает зависимости из тела callback.',
  },
  {
    id: 'knowledge-composition-api-q211',
    moduleId: 'composition-api',
    questionId: 211,
    title: 'Lifecycle hooks',
    category: 'Lifecycle',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Lifecycle hooks в Composition API представлены функциями вроде onMounted, onUnmounted, onUpdated. Они позволяют выполнить код на этапах жизни компонента. Hooks вызывают внутри setup-контекста.',
    whenToUse:
      'onMounted используют для DOM-зависимого кода, фокуса, измерений и интеграций, которым нужен уже созданный элемент. onUnmounted нужен для очистки подписок, timers и внешних ресурсов. Не стоит использовать lifecycle там, где достаточно реактивного шаблона.',
    howItWorks:
      'При вызове hook Vue регистрирует callback на текущий экземпляр компонента. Когда компонент достигает нужного этапа, callback выполняется. В script setup это выглядит как обычный вызов функции.',
    whyImportant:
      'Lifecycle hooks нужны для интеграции Vue с внешним миром. На интервью важно знать, когда DOM доступен, и почему cleanup важен. Это основа безопасных composables.',
    codeExample: {
      language: 'ts',
      filename: 'mounted.ts',
      code: `onMounted(() => {
  input.value?.focus()
})`,
    },
    commonMistake:
      'Ошибка — читать DOM до mounted. Другая ошибка — добавить listener в onMounted и забыть удалить его в onUnmounted.',
    interviewQuestions: createInterviewQuestions("Lifecycle hooks", "Lifecycle"),
    remember:
      'Lifecycle hooks в Composition API регистрируются функциями внутри setup.',
  },
  {
    id: 'knowledge-composition-api-q212',
    moduleId: 'composition-api',
    questionId: 212,
    title: 'Composables',
    category: 'Composables',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Composable — функция, которая инкапсулирует переиспользуемую Composition API логику. Обычно её имя начинается с `use`. Она может возвращать state, computed, функции и cleanup-логику.',
    whenToUse:
      'Composable стоит создавать для повторяющихся сценариев: работа с localStorage, запросы, media queries, таймеры, drag-and-drop, sound settings. Если логика используется один раз и короткая, её можно оставить в компоненте.',
    howItWorks:
      'Composable вызывается внутри setup и создаёт реактивные значения для конкретного вызова. Он может принимать параметры и возвращать публичный API. Если внутри есть внешние подписки, нужно организовать очистку.',
    whyImportant:
      'Composables — ключ к переиспользованию логики во Vue 3. На интервью важно объяснить отличие от компонента: composable не рендерит UI, а отдаёт поведение. Это архитектурная тема.',
    codeExample: {
      language: 'ts',
      filename: 'useToggle.ts',
      code: `export const useToggle = (initial = false) => {
  const value = ref(initial)
  const toggle = () => { value.value = !value.value }
  return { value, toggle }
}`,
    },
    commonMistake:
      'Ошибка — делать composable с неявной привязкой к конкретной странице. Хороший composable имеет явные параметры и понятный return. Также важно не забывать cleanup.',
    interviewQuestions: createInterviewQuestions("Composables", "Composables"),
    remember:
      'Composable переиспользует поведение, а не разметку.',
  },
  {
    id: 'knowledge-composition-api-q213',
    moduleId: 'composition-api',
    questionId: 213,
    title: 'Переиспользование логики',
    category: 'Composables',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Переиспользование логики в Composition API обычно строится через composables. Они позволяют вынести повторяемые reactive-сценарии из компонентов. Это уменьшает дублирование и упрощает тестирование.',
    whenToUse:
      'Выносить стоит повторяемую или сложную логику: загрузку данных, подписки, фильтрацию, синхронизацию состояния. Если код короткий и локальный, новая абстракция может быть лишней. Критерий — реальная польза для читаемости и поддержки.',
    howItWorks:
      'Composable возвращает ref, computed и функции. Каждый компонент вызывает его и получает свой экземпляр состояния, если состояние создано внутри функции. Общий singleton-state нужно проектировать отдельно и явно.',
    whyImportant:
      'На интервью важно объяснить, что Composition API не просто меняет синтаксис, а даёт модель переиспользования. Это заменяет многие mixins-паттерны и делает зависимости явнее. Такой ответ показывает архитектурное понимание.',
    codeExample: {
      language: 'ts',
      filename: 'useLoading.ts',
      code: `export const useLoading = () => {
  const isLoading = ref(false)
  return { isLoading }
}`,
    },
    commonMistake:
      'Ошибка — выносить в composable всё подряд. Это создаёт прыжки по файлам без выгоды. Хороший composable должен иметь понятное назначение и границы.',
    interviewQuestions: createInterviewQuestions("Переиспользование логики", "Composables"),
    remember:
      'Выносить стоит повторяемое поведение, а не любую строку setup-кода.',
  },
  {
    id: 'knowledge-composition-api-q214',
    moduleId: 'composition-api',
    questionId: 214,
    title: 'Организация кода в setup',
    category: 'Code Organization',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Composition API даёт свободу организации кода, поэтому порядок и группировка становятся ответственностью разработчика. Связанную логику стоит держать рядом. Несвязанные крупные блоки лучше разделять комментариями, функциями или composables.',
    whenToUse:
      'Организацию стоит пересматривать, когда setup становится длинным, в нём смешаны несколько фич или повторяются сценарии. Для простого компонента достаточно понятного порядка: props/emits, state, computed, handlers. Для сложного — группы по фичам.',
    howItWorks:
      'В script setup все объявления доступны template, поэтому технически можно писать в любом порядке. Но читателю нужен стабильный паттерн. Хорошее именование и декомпозиция важнее декоративной структуры.',
    whyImportant:
      'Свобода Composition API может стать минусом без дисциплины. На интервью это хороший trade-off: API мощный, но требует архитектурного мышления. Code review часто оценивает именно организацию setup.',
    codeExample: {
      language: 'ts',
      filename: 'setup-order.ts',
      code: `const props = defineProps<Props>()
const isOpen = ref(false)
const label = computed(() => props.title.trim())
const close = () => { isOpen.value = false }`,
    },
    commonMistake:
      'Ошибка — перемешать unrelated state, watchers и handlers так, что фичу трудно удалить или изменить. Другая ошибка — создать слишком много мелких composables без реального переиспользования.',
    interviewQuestions: createInterviewQuestions("Организация кода в setup", "Code Organization"),
    remember:
      'Composition API требует осознанной группировки логики по смыслу.',
  },
  {
    id: 'knowledge-composition-api-q215',
    moduleId: 'composition-api',
    questionId: 215,
    title: 'provide/inject',
    category: 'Dependency Injection',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'provide/inject — механизм передачи зависимости от предка к глубоко вложенным потомкам без props drilling. Provider объявляет значение, injector получает его ниже по дереву. Это полезно для контекста и сервисов UI.',
    whenToUse:
      'provide/inject уместен, когда данные нужны многим глубоким потомкам, а промежуточные компоненты их не используют. Примеры: theme, form context, tab group state, registry. Для прямой связи parent-child props обычно понятнее.',
    howItWorks:
      'Предок вызывает provide с ключом и значением. Потомок вызывает inject с тем же ключом. Значение может быть reactive, readonly или набором функций. Для TypeScript лучше использовать typed InjectionKey.',
    whyImportant:
      'Этот API помогает избегать props drilling, но может скрывать зависимости. На интервью важно назвать и пользу, и риск. Хорошая практика — явные ключи, ограниченный scope и понятный контракт.',
    codeExample: {
      language: 'ts',
      filename: 'form-context.ts',
      code: `const formKey = Symbol() as InjectionKey<FormContext>
provide(formKey, formContext)
const context = inject(formKey)`,
    },
    commonMistake:
      'Ошибка — использовать provide/inject вместо всех props. Это делает зависимости невидимыми. Для простых связей лучше оставить props и emits.',
    interviewQuestions: createInterviewQuestions("provide/inject", "Dependency Injection"),
    remember:
      'provide/inject полезен для глубокого контекста, но требует явного контракта.',
  },
  {
    id: 'knowledge-composition-api-q216',
    moduleId: 'composition-api',
    questionId: 216,
    title: 'Template refs',
    category: 'Template Refs',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Template ref — способ получить ссылку на DOM-элемент или компонент из шаблона. В Composition API для этого создают ref(null) и связывают его с атрибутом ref. Значение становится доступно после монтирования.',
    whenToUse:
      'Template refs нужны для фокуса, измерений, scrollIntoView, интеграции с внешними библиотеками. Их не стоит использовать для обычного изменения текста или классов, где достаточно реактивного состояния. DOM refs должны быть точечным инструментом.',
    howItWorks:
      'До монтирования значение ref обычно null. После рендера Vue присваивает DOM-элемент или публичный экземпляр компонента. При размонтировании ссылка очищается.',
    whyImportant:
      'Template refs показывают границу между декларативным Vue и прямым DOM API. На интервью важно знать, когда DOM доступен. Это связано с onMounted и nextTick.',
    codeExample: {
      language: 'vue',
      filename: 'FocusInput.vue',
      code: `<script setup lang="ts">
const input = ref<HTMLInputElement | null>(null)
onMounted(() => input.value?.focus())
</script>

<template><input ref="input" /></template>`,
    },
    commonMistake:
      'Ошибка — читать DOM ref сразу в setup до mounted. Другая ошибка — использовать DOM ref для того, что лучше выразить через binding.',
    interviewQuestions: createInterviewQuestions("Template refs", "Template Refs"),
    remember:
      'Template ref доступен после монтирования и нужен для точечной работы с DOM или компонентом.',
  },
  {
    id: 'knowledge-composition-api-q217',
    moduleId: 'composition-api',
    questionId: 217,
    title: 'defineProps',
    category: 'Script Setup Macros',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'defineProps — макрос script setup для объявления входных props компонента. Он задаёт публичный контракт данных от родителя к дочернему компоненту. Макрос обрабатывается компилятором.',
    whenToUse:
      'defineProps используют в каждом script setup компоненте, которому нужны данные от родителя. Props подходят для заголовков, настроек, статусов и объектов отображения. Для событий используется defineEmits.',
    howItWorks:
      'С TypeScript можно передать интерфейс в defineProps. Компилятор преобразует макрос в описание props компонента. Возвращённый объект props реактивен, но требует аккуратности при деструктуризации.',
    whyImportant:
      'Props — основа компонентного API. На интервью важно упомянуть типизацию и однонаправленный поток данных. defineProps делает этот контракт явным и проверяемым.',
    codeExample: {
      language: 'vue',
      filename: 'UserCard.vue',
      code: `<script setup lang="ts">
interface Props {
  name: string
}
defineProps<Props>()
</script>`,
    },
    commonMistake:
      'Ошибка — использовать неявный any или мутировать prop напрямую. Дочерний компонент должен читать props и отправлять события для изменений.',
    interviewQuestions: createInterviewQuestions("defineProps", "Script Setup Macros"),
    remember:
      'defineProps объявляет входной API компонента.',
  },
  {
    id: 'knowledge-composition-api-q218',
    moduleId: 'composition-api',
    questionId: 218,
    title: 'defineEmits',
    category: 'Script Setup Macros',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'defineEmits — макрос script setup для объявления событий компонента. Он возвращает функцию emit, через которую дочерний компонент сообщает родителю о действиях. Это часть паттерна props down, events up.',
    whenToUse:
      'defineEmits используют для событий выбора, отправки формы, закрытия модального окна, изменения значения. Событие должно описывать факт или намерение, а не скрыто менять родительский state напрямую. Для v-model есть update-события или defineModel.',
    howItWorks:
      'Типизированный defineEmits задаёт имена событий и payload. При вызове emit TypeScript проверяет аргументы. Родитель слушает событие через `@eventName`.',
    whyImportant:
      'События формируют явный контракт компонента наружу. На интервью важно показать понимание однонаправленного потока данных. Это снижает связанность дочернего компонента с родителем.',
    codeExample: {
      language: 'vue',
      filename: 'SelectButton.vue',
      code: `<script setup lang="ts">
const emit = defineEmits<{
  select: [id: string]
}>()
</script>`,
    },
    commonMistake:
      'Ошибка — мутировать parent state напрямую вместо emit. Другая ошибка — давать событиям неясные имена вроде `change` без payload-контракта.',
    interviewQuestions: createInterviewQuestions("defineEmits", "Script Setup Macros"),
    remember:
      'defineEmits объявляет события, которые компонент отправляет наружу.',
  },
  {
    id: 'knowledge-composition-api-q219',
    moduleId: 'composition-api',
    questionId: 219,
    title: 'defineExpose',
    category: 'Script Setup Macros',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'defineExpose явно открывает часть внутреннего API компонента родителю через template ref. В script setup компонент по умолчанию закрыт. Это помогает контролировать, что доступно снаружи.',
    whenToUse:
      'defineExpose используют редко: для императивных методов вроде focus, reset, open или validate. Если задачу можно решить props/events, лучше выбрать декларативный контракт. Expose подходит для управляемых компонентов и интеграций.',
    howItWorks:
      'В script setup вызывают defineExpose с объектом публичных значений. Родитель получает их через template ref на компонент. Всё, что не указано, остаётся приватным.',
    whyImportant:
      'defineExpose помогает сохранять границы компонента. На интервью важно сказать, что это escape hatch, а не основной способ общения компонентов. Он полезен для редких императивных API.',
    codeExample: {
      language: 'vue',
      filename: 'ModalDialog.vue',
      code: `<script setup lang="ts">
const open = () => {}
defineExpose({ open })
</script>`,
    },
    commonMistake:
      'Ошибка — expose-ить всё внутреннее состояние компонента. Это ломает инкапсуляцию. Лучше открыть минимальный стабильный API.',
    interviewQuestions: createInterviewQuestions("defineExpose", "Script Setup Macros"),
    remember:
      'defineExpose открывает наружу только явно выбранные методы и значения.',
  },
  {
    id: 'knowledge-composition-api-q220',
    moduleId: 'composition-api',
    questionId: 220,
    title: 'defineModel',
    category: 'Script Setup Macros',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'defineModel упрощает создание v-model API в компоненте. Он описывает модельное значение и update-событие более компактно. Это полезно для input-like компонентов.',
    whenToUse:
      'defineModel используют, когда компонент должен поддерживать двустороннюю привязку через v-model. Это поля ввода, переключатели, селекты и кастомные контролы. Если компонент только сообщает событие без значения, defineEmits может быть достаточно.',
    howItWorks:
      'Макрос создаёт ref-like модель, связанную с prop и update-событием. При изменении model value компонент отправляет обновление родителю. Тип модели можно описать через TypeScript.',
    whyImportant:
      'v-model в компонентах часто спрашивают на интервью. defineModel показывает современный способ описать этот контракт. Важно понимать, что под капотом остаётся идея prop + update event.',
    codeExample: {
      language: 'vue',
      filename: 'BaseInput.vue',
      code: `<script setup lang="ts">
const model = defineModel<string>()
</script>

<template><input v-model="model" /></template>`,
    },
    commonMistake:
      'Ошибка — использовать defineModel для любого события компонента. Он нужен именно для модельного значения. Для отдельных действий лучше defineEmits.',
    interviewQuestions: createInterviewQuestions("defineModel", "Script Setup Macros"),
    remember:
      'defineModel упрощает создание v-model контракта в компоненте.',
  },
  {
    id: 'knowledge-composition-api-q221',
    moduleId: 'composition-api',
    questionId: 221,
    title: 'useSlots',
    category: 'Slots',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '3 мин',
    whatIsIt:
      'useSlots даёт доступ к slots внутри setup-кода. Slots — способ передать разметку от родителя в компонент. Обычно slots используют в template, но иногда нужна проверка или прокидывание из script.',
    whenToUse:
      'useSlots нужен для wrapper-компонентов, условного отображения обёрток или передачи slots дальше. Если slot просто выводится в template, прямого `<slot />` обычно достаточно. Не стоит использовать useSlots без необходимости.',
    howItWorks:
      'useSlots возвращает объект функций slots. Наличие slot можно проверить по ключу. Вызов slot-функции возвращает VNode-структуру, поэтому с ним нужно работать аккуратно.',
    whyImportant:
      'На интервью slots показывают понимание композиции UI. useSlots — более продвинутый сценарий, где template-возможностей недостаточно. Важно не путать slots с props.',
    codeExample: {
      language: 'ts',
      filename: 'slots.ts',
      code: `const slots = useSlots()
const hasFooter = computed(() => Boolean(slots.footer))`,
    },
    commonMistake:
      'Ошибка — использовать useSlots там, где достаточно `<slot />`. Другая ошибка — считать slot обычной строкой, а не функцией, возвращающей VNodes.',
    interviewQuestions: createInterviewQuestions("useSlots", "Slots"),
    remember:
      'useSlots нужен для работы со slots внутри setup-кода.',
  },
  {
    id: 'knowledge-composition-api-q222',
    moduleId: 'composition-api',
    questionId: 222,
    title: 'useAttrs',
    category: 'Attrs',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '3 мин',
    whatIsIt:
      'useAttrs возвращает fallthrough attributes, которые переданы компоненту, но не объявлены как props. Это могут быть class, id, aria-атрибуты и обработчики. API полезен для wrapper-компонентов.',
    whenToUse:
      'useAttrs нужен, когда компонент должен управлять тем, куда именно попадут внешние атрибуты. Например, wrapper может передать attrs на внутренний button или input. Если стандартное fallthrough-поведение подходит, useAttrs не нужен.',
    howItWorks:
      'В setup useAttrs возвращает объект attrs. Его можно привязать через `v-bind="attrs"`. Нужно учитывать, что attrs не является props-контрактом и обычно не должен заменять явные props.',
    whyImportant:
      'useAttrs помогает делать гибкие базовые компоненты. На интервью это показывает понимание fallthrough attributes и границы props. Особенно важно для доступности и UI Kit.',
    codeExample: {
      language: 'vue',
      filename: 'BaseButton.vue',
      code: `<script setup lang="ts">
const attrs = useAttrs()
</script>

<template><button v-bind="attrs"><slot /></button></template>`,
    },
    commonMistake:
      'Ошибка — использовать attrs вместо typed props для важных данных. Атрибуты хороши для проброса HTML-атрибутов, но публичный API лучше типизировать props.',
    interviewQuestions: createInterviewQuestions("useAttrs", "Attrs"),
    remember:
      'useAttrs даёт доступ к не-props атрибутам, которые можно пробросить вручную.',
  },
  {
    id: 'knowledge-composition-api-q223',
    moduleId: 'composition-api',
    questionId: 223,
    title: 'Типизация props',
    category: 'TypeScript',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Типизация props задаёт контракт входных данных компонента. В script setup часто используют интерфейс и `defineProps<Props>()`. Это улучшает автодополнение, проверку и документацию компонента.',
    whenToUse:
      'Props нужно типизировать всегда, когда компонент принимает данные. Это особенно важно для переиспользуемых компонентов и публичных API. Для опциональных props стоит явно описывать `?` и значения по умолчанию.',
    howItWorks:
      'TypeScript проверяет использование props внутри компонента и в местах вызова, насколько это возможно. Vue compiler преобразует defineProps в runtime-описание, если это требуется. Для defaults можно использовать withDefaults.',
    whyImportant:
      'Типизированные props снижают количество runtime-ошибок. На интервью это связывают с maintainability и компонентным контрактом. Хороший ответ должен упоминать не только тип, но и смысл API.',
    codeExample: {
      language: 'vue',
      filename: 'UserAvatar.vue',
      code: `<script setup lang="ts">
interface Props {
  src: string
  alt?: string
}
withDefaults(defineProps<Props>(), {
  alt: 'Avatar',
})
</script>`,
    },
    commonMistake:
      'Ошибка — оставлять props неявными или типизировать слишком широко. Например, string лучше, чем неизвестная структура. Для сложных объектов стоит выделять понятные интерфейсы.',
    interviewQuestions: createInterviewQuestions("Типизация props", "TypeScript"),
    remember:
      'Props — публичный API компонента, поэтому его нужно типизировать явно.',
  },
  {
    id: 'knowledge-composition-api-q224',
    moduleId: 'composition-api',
    questionId: 224,
    title: 'Типизация emits',
    category: 'TypeScript',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Типизация emits задаёт имена событий и форму payload. Она помогает не ошибаться при вызове emit. В Vue 3 можно описывать события через объектную или tuple-форму типов.',
    whenToUse:
      'Типизировать emits стоит в любом компоненте, который отправляет события наружу. Это особенно важно для UI-компонентов, форм и сложных сценариев выбора. Явный payload делает компонент проще для использования.',
    howItWorks:
      'defineEmits возвращает функцию emit с типизированными перегрузками. TypeScript проверяет имя события и аргументы. Родитель получает более понятный контракт компонента.',
    whyImportant:
      'События без типов легко ломаются при переименовании или изменении payload. На интервью эта тема показывает зрелость работы с TypeScript во Vue. Типы events так же важны, как типы props.',
    codeExample: {
      language: 'vue',
      filename: 'OptionSelect.vue',
      code: `<script setup lang="ts">
const emit = defineEmits<{
  select: [id: string]
  clear: []
}>()
</script>`,
    },
    commonMistake:
      'Ошибка — отправлять разные формы payload под одним событием. Это делает компонент непредсказуемым. Лучше держать стабильный контракт и отдельные события для разных действий.',
    interviewQuestions: createInterviewQuestions("Типизация emits", "TypeScript"),
    remember:
      'Типизированный emit защищает имена событий и payload.',
  },
  {
    id: 'knowledge-composition-api-q225',
    moduleId: 'composition-api',
    questionId: 225,
    title: 'Деструктуризация props',
    category: 'Props Pitfalls',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Props реактивны, но обычная деструктуризация может потерять обновления в зависимости от версии Vue и контекста. Безопасный базовый подход — читать `props.name` или использовать toRef/toRefs. Важно понимать, где сохраняется реактивная связь.',
    whenToUse:
      'Если prop нужно передать в composable как ref, используют toRef. Если prop просто читается в template или computed, можно оставить объект props. Деструктурировать стоит только с пониманием реактивности и поведения компилятора.',
    howItWorks:
      'defineProps возвращает reactive-like объект props. При обычном извлечении значения можно получить локальную переменную, которая не обновится при изменении prop. toRef создаёт связанную ссылку на конкретное свойство.',
    whyImportant:
      'Это частая ошибка в Composition API. На интервью она проверяет практический опыт, а не знание списка API. Хороший ответ должен упомянуть риск и безопасные альтернативы.',
    codeExample: {
      language: 'ts',
      filename: 'props-to-ref.ts',
      code: `const props = defineProps<{ id: string }>()
const id = toRef(props, 'id')`,
    },
    commonMistake:
      'Ошибка — написать `const { id } = defineProps<Props>()` и ожидать одинаковое поведение во всех сценариях. Лучше явно понимать версию Vue и использовать безопасный паттерн.',
    interviewQuestions: createInterviewQuestions("Деструктуризация props", "Props Pitfalls"),
    remember:
      'С props-деструктуризацией нужна осторожность; toRef помогает сохранить связь.',
  },
  {
    id: 'knowledge-composition-api-q226',
    moduleId: 'composition-api',
    questionId: 226,
    title: 'Плюсы и минусы Composition API',
    category: 'Trade-offs',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Composition API даёт гибкую организацию логики, TypeScript-friendly код и composables. Но гибкость требует дисциплины. Без структуры setup может стать большим и хаотичным.',
    whenToUse:
      'Composition API особенно полезен для сложных компонентов, больших фич и переиспользуемой логики. Для простых компонентов он тоже нормален, но не должен превращаться в набор лишних абстракций. Важно выбирать уровень сложности под задачу.',
    howItWorks:
      'Код компонента собирается из функций: reactive state, computed, watchers, lifecycle hooks. Эти части можно группировать по смыслу или выносить. Именно разработчик отвечает за порядок и читаемость.',
    whyImportant:
      'На интервью сильный ответ включает trade-offs. Не стоит говорить, что Composition API всегда лучше во всём. Он мощнее для масштабирования логики, но может ухудшить код при небрежной организации.',
    codeExample: {
      language: 'ts',
      filename: 'feature-block.ts',
      code: `const { query, results, search } = useSearch()
const { isOpen, open, close } = useModal()`,
    },
    commonMistake:
      'Ошибка — создавать composable для каждой мелочи или держать весь setup одним длинным списком. Оба варианта ухудшают поддержку. Нужен баланс.',
    interviewQuestions: createInterviewQuestions("Плюсы и минусы Composition API", "Trade-offs"),
    remember:
      'Composition API силён гибкостью, но эта гибкость требует архитектурной дисциплины.',
  },
  {
    id: 'knowledge-composition-api-q227',
    moduleId: 'composition-api',
    questionId: 227,
    title: 'Не усложнять без причины',
    category: 'Best Practices',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'Composition API не требует выносить каждое значение в composable. Простая локальная логика может оставаться в компоненте. Хорошее решение минимально достаточное и понятное.',
    whenToUse:
      'Оставляй код в компоненте, если он короткий, локальный и не повторяется. Выносить стоит при росте сложности, повторении или необходимости тестировать отдельно. Архитектура должна помогать, а не добавлять шум.',
    howItWorks:
      'Компонент может содержать ref, computed и handlers напрямую. Когда связанный блок становится большим, его можно сгруппировать или вынести. Такой постепенный подход снижает риск overengineering.',
    whyImportant:
      'На интервью это показывает зрелость: разработчик умеет не только создавать абстракции, но и отказываться от них. Простота — часть качества кода. Особенно это важно для командной поддержки.',
    codeExample: {
      language: 'vue',
      filename: 'SimpleToggle.vue',
      code: `<script setup lang="ts">
const isOpen = ref(false)
const toggle = () => { isOpen.value = !isOpen.value }
</script>`,
    },
    commonMistake:
      'Ошибка — создавать useToggle, useLabel, useClick для одного маленького компонента без повторного использования. Это заставляет читать больше файлов без выгоды.',
    interviewQuestions: createInterviewQuestions("Не усложнять без причины", "Best Practices"),
    remember:
      'Не каждая локальная логика заслуживает отдельной абстракции.',
  },
  {
    id: 'knowledge-composition-api-q228',
    moduleId: 'composition-api',
    questionId: 228,
    title: 'Архитектура composable',
    category: 'Composables',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Хороший composable имеет явный вход, понятный выход и минимальные скрытые зависимости. Он инкапсулирует поведение, но не должен быть привязан к конкретной странице без необходимости. Контракт composable должен быть стабильным.',
    whenToUse:
      'Такой подход нужен для логики, которую планируется переиспользовать или тестировать отдельно. Composable может принимать ref, getter, options object или callback. Важно заранее подумать, кто владеет состоянием и кто его меняет.',
    howItWorks:
      'Composable вызывается внутри setup. Он создаёт или принимает реактивные источники, возвращает state и команды. Если есть внешние ресурсы, composable должен организовать cleanup через lifecycle или watch cleanup.',
    whyImportant:
      'Архитектура composables влияет на масштабируемость проекта. На интервью middle-уровня часто ждут понимания границ ответственности. Хороший composable похож на маленький typed API, а не на свалку функций.',
    codeExample: {
      language: 'ts',
      filename: 'usePagination.ts',
      code: `export const usePagination = (total: Ref<number>) => {
  const page = ref(1)
  const pages = computed(() => Math.ceil(total.value / 10))
  return { page, pages }
}`,
    },
    commonMistake:
      'Ошибка — внутри универсального composable напрямую обращаться к конкретным DOM-id или глобальным переменным страницы. Лучше передавать зависимости параметрами. Так код проще тестировать и переиспользовать.',
    interviewQuestions: createInterviewQuestions("Архитектура composable", "Composables"),
    remember:
      'Composable должен иметь явный контракт и минимальные скрытые зависимости.',
  },
  {
    id: 'knowledge-composition-api-q229',
    moduleId: 'composition-api',
    questionId: 229,
    title: 'Readonly provide contract',
    category: 'Dependency Injection',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'При provide/inject часто передают readonly-состояние и отдельные функции изменения. Это формирует контролируемый API для потомков. Потомок может читать state, но не мутирует его напрямую.',
    whenToUse:
      'Такой паттерн полезен для form context, tab group, dropdown group и других общих контекстов. Он снижает риск случайных мутаций из глубины дерева. Если связь простая, props и emits могут быть понятнее.',
    howItWorks:
      'Provider хранит внутреннее reactive/ref состояние. Наружу он отдаёт readonly-view и методы вроде select, open, close. Injected-потребитель вызывает методы, а не меняет state напрямую.',
    whyImportant:
      'Это показывает зрелый подход к dependency injection. На интервью важно объяснить не только как передать значение, но и как защитить инварианты. Такой паттерн делает контекст предсказуемым.',
    codeExample: {
      language: 'ts',
      filename: 'tabs-context.ts',
      code: `provide(tabsKey, {
  activeId: readonly(activeId),
  selectTab,
})`,
    },
    commonMistake:
      'Ошибка — отдавать глубоко вниз mutable state без функций управления. Потомки начинают менять данные из разных мест, и поведение становится трудно отследить.',
    interviewQuestions: createInterviewQuestions("Readonly provide contract", "Dependency Injection"),
    remember:
      'Через provide лучше отдавать не только данные, но и явный API изменения.',
  },
  {
    id: 'knowledge-composition-api-q230',
    moduleId: 'composition-api',
    questionId: 230,
    title: 'Cleanup в composables',
    category: 'Lifecycle',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Cleanup — очистка внешних ресурсов, созданных компонентом или composable. Это listeners, intervals, observers, subscriptions и async-операции. Без cleanup возможны утечки и обращения к устаревшему состоянию.',
    whenToUse:
      'Cleanup нужен каждый раз, когда код подписывается на внешний источник или создаёт долгоживущий ресурс. Window event listener, setInterval, ResizeObserver и WebSocket требуют продуманного завершения. Для обычного computed cleanup не нужен.',
    howItWorks:
      'В компонентном контексте используют onUnmounted. В watchers можно использовать cleanup callback. Composable должен сам регистрировать очистку, если он создаёт ресурс внутри себя.',
    whyImportant:
      'На интервью cleanup показывает практический опыт, особенно для composables. Реактивность не отменяет жизненный цикл внешних ресурсов. Хороший код освобождает то, что создал.',
    codeExample: {
      language: 'ts',
      filename: 'useWindowResize.ts',
      code: `const onResize = () => {}
window.addEventListener('resize', onResize)

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})`,
    },
    commonMistake:
      'Ошибка — добавить listener в composable и не удалить его. При повторном монтировании обработчики накопятся. Это может вызвать дублированные действия и утечки памяти.',
    interviewQuestions: createInterviewQuestions("Cleanup в composables", "Lifecycle"),
    remember:
      'Composable должен очищать внешние ресурсы, которые он создаёт.',
  },
]
