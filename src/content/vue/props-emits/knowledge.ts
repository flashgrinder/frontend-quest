import type { ContentKnowledgeCard } from '../../../types/content'

const createInterviewQuestions = (title: string, category: string): string[] => [
  `Какие задачи решает ${title} в теме ${category} (Props / emits)?`,
  `Какие ограничения ${title} важно учитывать в контексте Props / emits?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

export const propsEmitsKnowledgeCards: ContentKnowledgeCard[] = [
  {
    id: 'knowledge-props-emits-q401',
    moduleId: 'props-emits',
    questionId: 401,
    title: 'Props как входной контракт',
    category: 'Props',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Props — входные параметры компонента. Они описывают данные, которые родитель передаёт дочернему компоненту. Через props формируется публичный контракт: какие значения компонент ожидает и как использует их для отображения.',
    whenToUse:
      'Props используют для данных и настроек: label, value, disabled, items, variant, size. Если нужно передать произвольную разметку, slot часто подходит лучше. Если нужно сообщить об изменении наружу, нужны emits.',
    howItWorks:
      'Родитель передаёт prop в template, а дочерний компонент объявляет его через defineProps. При изменении значения в родителе дочерний компонент получает обновление. Внутри дочернего компонента prop считается входным readonly-значением.',
    whyImportant:
      'Props помогают делать компоненты предсказуемыми. На интервью важно объяснить, что prop — это не локальное состояние, а внешний контракт. Такое понимание снижает количество ошибок с синхронизацией данных.',
    codeExample: {
      language: 'vue',
      filename: 'UserName.vue',
      code: `<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <span>{{ name }}</span>
</template>`,
    },
    commonMistake:
      'Ошибка — складывать в props всё подряд, включая данные, которые компонент должен вычислять сам. Props должны описывать внешний API, а не внутренние временные переменные.',
    interviewQuestions: createInterviewQuestions("Props как входной контракт", "Props"),
    remember:
      'Props передают данные сверху вниз и задают входной контракт компонента.',
  },
  {
    id: 'knowledge-props-emits-q402',
    moduleId: 'props-emits',
    questionId: 402,
    title: 'Однонаправленный поток данных',
    category: 'Data Flow',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Однонаправленный поток данных означает, что значение идёт от родителя к дочернему компоненту через props. Если дочерний компонент хочет изменить значение, он отправляет событие. Источник истины остаётся в одном месте.',
    whenToUse:
      'Этот паттерн используется почти во всех связях родитель-дочерний компонент. Он подходит для кнопок, форм, списков, модалок и управляемых UI-элементов. Для глобального состояния можно выбрать store, но локальные связи часто проще через props и emits.',
    howItWorks:
      'Родитель хранит state и передаёт его вниз. Дочерний компонент отображает значение и отправляет событие вроде select или update:modelValue. Родитель обрабатывает событие и обновляет state.',
    whyImportant:
      'Предсказуемый поток данных упрощает debugging. На интервью эта тема часто является основой для объяснения props, emits и v-model. Если направление данных понятно, компонентные связи легче масштабировать.',
    codeExample: {
      language: 'vue',
      filename: 'ParentView.vue',
      code: `<ChildCard
  :selected-id="selectedId"
  @select="selectedId = $event"
/>`,
    },
    commonMistake:
      'Ошибка — позволять дочернему компоненту менять объект родителя напрямую. Источник изменения становится неочевидным, а компонентная граница размывается.',
    interviewQuestions: createInterviewQuestions("Однонаправленный поток данных", "Data Flow"),
    remember:
      'Данные идут вниз через props, события идут вверх через emits.',
  },
  {
    id: 'knowledge-props-emits-q403',
    moduleId: 'props-emits',
    questionId: 403,
    title: 'Почему нельзя мутировать props',
    category: 'Props',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Мутация props — попытка изменить входное значение внутри дочернего компонента. Это нарушает идею, что родитель владеет переданным состоянием. Vue предупреждает о таких изменениях, потому что они делают поток данных непредсказуемым.',
    whenToUse:
      'Прямую мутацию props использовать не стоит. Для редактирования создают локальный draft, а затем отправляют результат событием. Для controlled-компонентов отправляют update-событие без локального владения значением.',
    howItWorks:
      'Родитель передаёт значение в prop. Если дочерний компонент меняет prop, следующее обновление родителя может перезаписать это изменение. Правильный путь — emit события с новым значением или запросом действия.',
    whyImportant:
      'На интервью важно объяснить не только запрет, но и причину: источник истины должен быть один. Это помогает избежать рассинхронизации UI, циклов обновления и скрытых побочных эффектов.',
    codeExample: {
      language: 'vue',
      filename: 'EditableTitle.vue',
      code: `<script setup lang="ts">
const props = defineProps<{ title: string }>()
const emit = defineEmits<{ 'update:title': [value: string] }>()

const rename = (value: string) => emit('update:title', value)
</script>`,
    },
    commonMistake:
      'Ошибка — писать `props.title = value`. Вместо этого нужно отправить событие или работать с локальной копией, если требуется черновик.',
    interviewQuestions: createInterviewQuestions("Почему нельзя мутировать props", "Props"),
    remember:
      'Prop принадлежит родителю; дочерний компонент сообщает об изменении событием.',
  },
  {
    id: 'knowledge-props-emits-q404',
    moduleId: 'props-emits',
    questionId: 404,
    title: 'defineProps',
    category: 'Script Setup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'defineProps — compiler macro для объявления props в `<script setup>`. Он задаёт входной API компонента и позволяет TypeScript проверить использование props. Макрос обрабатывается компилятором Vue и не требует импорта.',
    whenToUse:
      'defineProps используется в компонентах, которые принимают данные от родителя. Через generic-тип удобно описывать контракт на TypeScript. Для defaults можно добавить withDefaults или возможности актуального компилятора Vue.',
    howItWorks:
      'Компилятор преобразует defineProps в props-описание компонента. Возвращённое значение можно сохранить в переменную `props`, если нужно читать поля в script. В template props доступны напрямую.',
    whyImportant:
      'defineProps — базовая часть современного Vue 3. На интервью важно понимать, что это не обычная runtime-функция, а compile-time механизм с ограничениями верхнего уровня.',
    codeExample: {
      language: 'vue',
      filename: 'BaseBadge.vue',
      code: `<script setup lang="ts">
defineProps<{
  label: string
  tone?: 'neutral' | 'success' | 'danger'
}>()
</script>`,
    },
    commonMistake:
      'Ошибка — вызывать defineProps внутри условия или функции. Макрос должен находиться на верхнем уровне script setup.',
    interviewQuestions: createInterviewQuestions("defineProps", "Script Setup"),
    remember:
      'defineProps объявляет входные данные компонента в script setup.',
  },
  {
    id: 'knowledge-props-emits-q405',
    moduleId: 'props-emits',
    questionId: 405,
    title: 'Типизация props',
    category: 'TypeScript',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Типизация props описывает форму входных данных компонента. Она помогает TypeScript проверять вызовы компонента, автодополнение и внутреннее использование значений. Для Vue 3 часто используют интерфейс и defineProps<Props>().',
    whenToUse:
      'Типизировать props стоит всегда, когда компонент принимает данные. Это особенно важно для переиспользуемых компонентов и компонентов дизайн-системы. Опциональность, union-типы и readonly-модели должны быть отражены в типах.',
    howItWorks:
      'Интерфейс описывает поля и их типы. defineProps<Props>() связывает этот интерфейс с компонентом. TypeScript подсказывает, какие props обязательны и какие значения допустимы.',
    whyImportant:
      'Типы props — документация и защита от ошибок одновременно. На интервью это показывает понимание компонентного контракта и поддержки кода в команде.',
    codeExample: {
      language: 'vue',
      filename: 'UserAvatar.vue',
      code: `<script setup lang="ts">
interface Props {
  src: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
}

defineProps<Props>()
</script>`,
    },
    commonMistake:
      'Ошибка — использовать слишком широкие типы вроде string там, где нужен union допустимых значений. Чем точнее тип, тем меньше неожиданных состояний.',
    interviewQuestions: createInterviewQuestions("Типизация props", "TypeScript"),
    remember:
      'Props нужно воспринимать как типизированный публичный API компонента.',
  },
  {
    id: 'knowledge-props-emits-q406',
    moduleId: 'props-emits',
    questionId: 406,
    title: 'Default values для props',
    category: 'Props',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Default value — значение prop по умолчанию, если родитель его не передал. Это снижает количество обязательной настройки компонента и делает поведение стабильнее. Defaults должны быть понятной частью API.',
    whenToUse:
      'Defaults полезны для variant, size, disabled, placeholder, initial count и других параметров с естественным базовым значением. Их не стоит использовать, чтобы скрывать обязательные бизнес-данные. Required prop лучше оставить обязательным.',
    howItWorks:
      'В typed props часто используют withDefaults. В runtime props можно задать default в описании prop. Для объектов и массивов в runtime-подходе default должен возвращаться фабрикой.',
    whyImportant:
      'На интервью важно показать разницу между optional prop и required prop. Default может упростить использование компонента, но неправильный default скрывает ошибки интеграции.',
    codeExample: {
      language: 'vue',
      filename: 'BaseButton.vue',
      code: `<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  size: 'md',
})
</script>`,
    },
    commonMistake:
      'Ошибка — задавать default для значения, без которого компонент теряет смысл. В таких случаях лучше сделать prop обязательным.',
    interviewQuestions: createInterviewQuestions("Default values для props", "Props"),
    remember:
      'Default value должен описывать безопасное и ожидаемое поведение по умолчанию.',
  },
  {
    id: 'knowledge-props-emits-q407',
    moduleId: 'props-emits',
    questionId: 407,
    title: 'Required props',
    category: 'Props',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'Required prop — обязательное входное значение компонента. Без него компонент не может корректно выполнить свою ответственность. В TypeScript это обычно поле без `?` в интерфейсе props.',
    whenToUse:
      'Required props подходят для данных, без которых компонент не имеет смысла: id, value, label, item, src. Если значение может быть не передано и есть безопасный fallback, prop можно сделать optional. Контракт должен быть честным.',
    howItWorks:
      'TypeScript предупреждает, если обязательный prop не передан при использовании компонента. Runtime-описание Vue также может предупреждать в dev mode. Это помогает ловить ошибки интеграции раньше.',
    whyImportant:
      'Обязательность props — часть компонентного API. На интервью важно объяснить, что required не про визуальный стиль, а про корректность данных и ожидания компонента.',
    codeExample: {
      language: 'vue',
      filename: 'ProductCard.vue',
      code: `<script setup lang="ts">
defineProps<{
  id: string
  title: string
  price: number
}>()
</script>`,
    },
    commonMistake:
      'Ошибка — делать обязательные данные optional и затем писать много проверок в template. Это размывает контракт и переносит ошибку на runtime.',
    interviewQuestions: createInterviewQuestions("Required props", "Props"),
    remember:
      'Required prop означает, что компонент ожидает значение как часть своего контракта.',
  },
  {
    id: 'knowledge-props-emits-q408',
    moduleId: 'props-emits',
    questionId: 408,
    title: 'Boolean props',
    category: 'Props',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Boolean prop — prop для флагов состояния: disabled, loading, selected, open. В template наличие boolean-атрибута без значения часто означает true. Для динамики используют binding через двоеточие.',
    whenToUse:
      'Boolean props хорошо подходят для простых включателей поведения или состояния. Если флагов становится много и они конфликтуют, лучше подумать о variant или state prop. Набор boolean props может быстро усложнить API.',
    howItWorks:
      'Родитель может написать `<BaseButton disabled />` или `<BaseButton :disabled="isSaving" />`. Дочерний компонент объявляет `disabled?: boolean`. Vue корректно обрабатывает boolean casting по правилам props.',
    whyImportant:
      'Boolean props часто встречаются в UI-компонентах. На интервью стоит упомянуть, что удобство короткой записи не отменяет необходимости проектировать понятные состояния.',
    codeExample: {
      language: 'vue',
      filename: 'BaseButton.vue',
      code: `<script setup lang="ts">
defineProps<{
  disabled?: boolean
  loading?: boolean
}>()
</script>`,
    },
    commonMistake:
      'Ошибка — создавать несколько противоречивых boolean props вроде primary, secondary и danger одновременно. В таких случаях variant обычно понятнее.',
    interviewQuestions: createInterviewQuestions("Boolean props", "Props"),
    remember:
      'Boolean props удобны для флагов, но их количество нужно контролировать.',
  },
  {
    id: 'knowledge-props-emits-q409',
    moduleId: 'props-emits',
    questionId: 409,
    title: 'Object и array props',
    category: 'Props',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Object и array props передают сложные структуры данных в компонент. Это могут быть элементы списка, настройки таблицы, объект пользователя или массив опций. Такие props требуют особенно ясной типизации.',
    whenToUse:
      'Их используют, когда компоненту нужна связанная структура, а не набор отдельных примитивов. Для списков лучше передавать массив typed items. Если компонент начинает менять объект, стоит пересмотреть ownership состояния.',
    howItWorks:
      'Родитель передаёт ссылку на объект или массив. Дочерний компонент читает данные, но не должен мутировать prop напрямую. Для defaults в runtime props нужен factory function, чтобы экземпляры не делили одну ссылку.',
    whyImportant:
      'На интервью важно понимать ссылочную природу объектов. Даже если prop readonly на верхнем уровне, вложенные мутации могут создать скрытые изменения состояния родителя.',
    codeExample: {
      language: 'vue',
      filename: 'UserList.vue',
      code: `<script setup lang="ts">
interface User {
  id: string
  name: string
}

defineProps<{ users: User[] }>()
</script>`,
    },
    commonMistake:
      'Ошибка — сортировать или изменять массив prop прямо внутри дочернего компонента. Лучше создать computed-копию или отправить событие родителю.',
    interviewQuestions: createInterviewQuestions("Object и array props", "Props"),
    remember:
      'Object и array props передаются по ссылке, поэтому мутации требуют осторожности.',
  },
  {
    id: 'knowledge-props-emits-q410',
    moduleId: 'props-emits',
    questionId: 410,
    title: 'Validator для props',
    category: 'Props',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Validator — runtime-проверка значения prop. Он помогает убедиться, что переданное значение входит в допустимый набор или соответствует бизнес-ограничению. Validator работает во время выполнения, а не только в TypeScript.',
    whenToUse:
      'Validator полезен для значений из внешних источников, runtime-ограничений и публичных библиотечных компонентов. Для обычных union-типов TypeScript часто достаточно на этапе разработки. Но TypeScript не проверяет данные, пришедшие в runtime.',
    howItWorks:
      'В runtime props можно указать функцию validator, которая возвращает boolean. Если значение не проходит проверку, Vue выдаёт предупреждение в dev mode. Логику validator стоит держать простой и быстрой.',
    whyImportant:
      'На интервью можно объяснить разницу TypeScript и runtime validation. Первый помогает разработчику, второй ловит реальные значения во время работы приложения.',
    codeExample: {
      language: 'ts',
      filename: 'button-props.ts',
      code: `const buttonProps = {
  variant: {
    type: String,
    validator: (value: string) => ['primary', 'ghost'].includes(value),
  },
}`,
    },
    commonMistake:
      'Ошибка — помещать в validator тяжёлую бизнес-логику или side effects. Validator должен проверять значение, а не менять состояние.',
    interviewQuestions: createInterviewQuestions("Validator для props", "Props"),
    remember:
      'Validator дополняет типы runtime-проверкой допустимых значений.',
  },
  {
    id: 'knowledge-props-emits-q411',
    moduleId: 'props-emits',
    questionId: 411,
    title: 'Деструктуризация props',
    category: 'Props Pitfalls',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Деструктуризация props — извлечение полей props в отдельные переменные. В некоторых сценариях это может потерять реактивную связь с исходным prop. Поведение зависит от версии Vue и возможностей компилятора.',
    whenToUse:
      'Если значение нужно передать как ref в composable, безопасно использовать toRef или toRefs. Если prop просто читается в computed, можно обращаться через props.field. Деструктурировать стоит только с пониманием последствий.',
    howItWorks:
      'defineProps возвращает reactive-like объект. Обычное извлечение может создать локальное значение, которое не обновляется при изменении prop. toRef создаёт связанную ссылку на конкретное свойство.',
    whyImportant:
      'Это частая практическая ловушка. На интервью она показывает, знаком ли разработчик с реальной реактивностью, а не только с синтаксисом defineProps.',
    codeExample: {
      language: 'vue',
      filename: 'UserPanel.vue',
      code: `<script setup lang="ts">
const props = defineProps<{ userId: string }>()
const userId = toRef(props, 'userId')
</script>`,
    },
    commonMistake:
      'Ошибка — написать `const { userId } = defineProps<Props>()` и ожидать одинаковую реактивность во всех версиях и сценариях. Безопасный паттерн должен быть выбран осознанно.',
    interviewQuestions: createInterviewQuestions("Деструктуризация props", "Props Pitfalls"),
    remember:
      'При деструктуризации props важно не потерять реактивную связь.',
  },
  {
    id: 'knowledge-props-emits-q412',
    moduleId: 'props-emits',
    questionId: 412,
    title: 'toRefs для props',
    category: 'Props Pitfalls',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'toRefs превращает свойства реактивного объекта в связанные refs. Для props это полезно, когда отдельное свойство нужно передать в composable или деструктурировать без потери связи. Каждый ref остаётся связан с исходным props object.',
    whenToUse:
      'toRefs применяют, когда composable ожидает Ref или когда нужно сохранить реактивность после деструктуризации. Для одного поля часто достаточно toRef. Если prop читается только один раз в template, лишние refs не нужны.',
    howItWorks:
      'toRefs(props) возвращает объект, где каждое свойство является ref. Чтение `.value` берёт актуальное значение из исходного props object. При обновлении prop ref также отражает новое значение.',
    whyImportant:
      'На интервью это показывает понимание границ props и composables. Часто composable должен работать с Ref, а prop нужно передать без потери обновлений.',
    codeExample: {
      language: 'ts',
      filename: 'useUserFilter.ts',
      code: `const props = defineProps<{ query: string }>()
const { query } = toRefs(props)

useSearchQuery(query)`,
    },
    commonMistake:
      'Ошибка — применять toRefs ко всему подряд. Если достаточно props.value, дополнительные refs только увеличивают шум.',
    interviewQuestions: createInterviewQuestions("toRefs для props", "Props Pitfalls"),
    remember:
      'toRefs помогает сохранить реактивность props при передаче отдельных полей.',
  },
  {
    id: 'knowledge-props-emits-q413',
    moduleId: 'props-emits',
    questionId: 413,
    title: 'Computed на основе props',
    category: 'Derived State',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Computed на основе props — производное значение, вычисленное из входных данных компонента. Оно не хранит отдельную версию состояния, а выводится из актуальных props. Это помогает избежать дублирования state.',
    whenToUse:
      'Computed подходит для форматирования, фильтрации, проверки доступности действия или расчёта CSS-класса. Если нужно выполнить side effect при изменении prop, лучше watch. Если нужно изменить значение, нужен emit или локальный state.',
    howItWorks:
      'Computed отслеживает props, прочитанные внутри getter. Когда prop меняется, computed становится dirty и пересчитывается при следующем чтении. Getter должен оставаться чистым.',
    whyImportant:
      'На интервью важно отличать derived state от синхронизируемой копии. Computed уменьшает риск рассинхронизации, потому что не создаёт второй источник истины.',
    codeExample: {
      language: 'vue',
      filename: 'PriceLabel.vue',
      code: `<script setup lang="ts">
const props = defineProps<{ price: number }>()
const formattedPrice = computed(() => props.price.toFixed(2))
</script>`,
    },
    commonMistake:
      'Ошибка — менять другие reactive values внутри computed. Для побочных эффектов нужен watch, а computed должен возвращать значение.',
    interviewQuestions: createInterviewQuestions("Computed на основе props", "Derived State"),
    remember:
      'Computed от props должен быть чистым derived state.',
  },
  {
    id: 'knowledge-props-emits-q414',
    moduleId: 'props-emits',
    questionId: 414,
    title: 'Emits как выходной контракт',
    category: 'Emits',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Emits — события, которые компонент может отправить наружу. Если props описывают вход компонента, то emits описывают выходные сигналы. Это важная часть публичного API компонента.',
    whenToUse:
      'Emits используют для select, close, submit, remove, update и других действий. Они подходят для связи дочернего компонента с ближайшим родителем. Для состояния, разделяемого многими областями, может понадобиться store.',
    howItWorks:
      'Компонент объявляет события через defineEmits и вызывает emit при пользовательском действии или внутреннем событии. Родитель слушает событие и решает, что делать. Payload передаёт минимальный контекст.',
    whyImportant:
      'События делают поведение компонента явным. На интервью важно объяснить, что emit не меняет родителя сам по себе, а только отправляет сигнал.',
    codeExample: {
      language: 'vue',
      filename: 'CloseButton.vue',
      code: `<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <button @click="emit('close')">Close</button>
</template>`,
    },
    commonMistake:
      'Ошибка — скрывать важные изменения внутри компонента без события. Родитель теряет контроль над сценарием и источником состояния.',
    interviewQuestions: createInterviewQuestions("Emits как выходной контракт", "Emits"),
    remember:
      'Emits описывают, какие сигналы компонент отправляет наружу.',
  },
  {
    id: 'knowledge-props-emits-q415',
    moduleId: 'props-emits',
    questionId: 415,
    title: 'defineEmits',
    category: 'Script Setup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'defineEmits — compiler macro для объявления событий компонента в script setup. Он возвращает функцию emit. Через неё компонент отправляет события родителю.',
    whenToUse:
      'defineEmits нужен, когда компонент должен сообщать наружу о действиях пользователя или изменениях значения. Это может быть кнопка, форма, dropdown, modal или list item. Даже простые события лучше объявлять явно.',
    howItWorks:
      'Макрос принимает тип или runtime-описание событий. TypeScript может проверить имя события и payload. Родитель слушает событие через `@event-name` в template.',
    whyImportant:
      'defineEmits делает выходной API компонента понятным. На интервью стоит подчеркнуть, что это парный инструмент к defineProps: вход через props, выход через events.',
    codeExample: {
      language: 'vue',
      filename: 'OptionRow.vue',
      code: `<script setup lang="ts">
const emit = defineEmits<{ select: [id: string] }>()

const select = () => emit('select', 'profile')
</script>`,
    },
    commonMistake:
      'Ошибка — отправлять событие, которое не объявлено в defineEmits. Это ухудшает поддержку и может скрыть опечатки.',
    interviewQuestions: createInterviewQuestions("defineEmits", "Script Setup"),
    remember:
      'defineEmits объявляет и типизирует события компонента.',
  },
  {
    id: 'knowledge-props-emits-q416',
    moduleId: 'props-emits',
    questionId: 416,
    title: 'Типизация emits',
    category: 'TypeScript',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Типизация emits описывает имена событий и payload каждого события. Это защищает от опечаток и неправильной формы данных. В Vue 3 удобно использовать tuple-style синтаксис для событий.',
    whenToUse:
      'Типизировать emits стоит для любого компонента, который отправляет события с payload. Особенно это важно для форм, таблиц, списков, модалок и UI-kit компонентов. Без типов контракт легко ломается при рефакторинге.',
    howItWorks:
      'defineEmits получает generic-описание событий. При вызове emit TypeScript проверяет имя события и аргументы. Если payload не соответствует типу, редактор и сборка сообщат об ошибке.',
    whyImportant:
      'Эта тема показывает зрелое использование TypeScript во Vue. На интервью хороший ответ связывает типизацию с поддерживаемостью component API, а не только с синтаксисом.',
    codeExample: {
      language: 'vue',
      filename: 'UserPicker.vue',
      code: `<script setup lang="ts">
const emit = defineEmits<{
  select: [userId: string]
  clear: []
}>()
</script>`,
    },
    commonMistake:
      'Ошибка — использовать один event с payload разных форм. Лучше разделить события или описать строгий discriminated union.',
    interviewQuestions: createInterviewQuestions("Типизация emits", "TypeScript"),
    remember:
      'Типизированный emit защищает имя события и форму payload.',
  },
  {
    id: 'knowledge-props-emits-q417',
    moduleId: 'props-emits',
    questionId: 417,
    title: 'Payload события',
    category: 'Emits',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Payload события — данные, которые компонент передаёт вместе с emit. Это может быть id, новое значение, объект формы или команда. Payload должен быть понятным и минимально достаточным.',
    whenToUse:
      'Payload нужен, когда родителю недостаточно знать сам факт события. Например, при выборе элемента нужен id, при вводе текста — новое значение, при submit — данные формы. Если контекст уже известен родителю, payload может быть пустым.',
    howItWorks:
      'Дочерний компонент вызывает emit с именем события и аргументами. Родитель получает эти аргументы в обработчике. TypeScript помогает зафиксировать форму payload.',
    whyImportant:
      'Хороший payload делает component API читаемым. На интервью важно объяснить, что перегруженный payload связывает компонент с лишними деталями, а слишком бедный заставляет родителя восстанавливать контекст.',
    codeExample: {
      language: 'vue',
      filename: 'TodoItem.vue',
      code: `<script setup lang="ts">
const props = defineProps<{ id: string }>()
const emit = defineEmits<{ remove: [id: string] }>()
</script>

<template>
  <button @click="emit('remove', props.id)">Remove</button>
</template>`,
    },
    commonMistake:
      'Ошибка — передавать весь большой объект, если родителю нужен только id. Это увеличивает связность и усложняет тестирование.',
    interviewQuestions: createInterviewQuestions("Payload события", "Emits"),
    remember:
      'Payload должен быть стабильным, понятным и минимально достаточным.',
  },
  {
    id: 'knowledge-props-emits-q418',
    moduleId: 'props-emits',
    questionId: 418,
    title: 'v-model на компоненте',
    category: 'v-model',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'v-model на компоненте — синтаксический сахар для controlled value. В Vue 3 стандартный канал использует prop `modelValue` и событие `update:modelValue`. Компонент получает значение и сообщает новое значение наружу.',
    whenToUse:
      'v-model подходит для input-like компонентов: text field, select, checkbox, switch, date picker. Он удобен, когда у компонента есть редактируемое значение. Для действий вроде submit или close лучше отдельные события.',
    howItWorks:
      'Родитель пишет `v-model="value"`. Vue передаёт value как modelValue и слушает update:modelValue. Дочерний компонент вызывает emit при изменении значения, а родитель обновляет state.',
    whyImportant:
      'На интервью важно объяснить, что v-model не ломает однонаправленный поток. Значение всё ещё приходит через prop, а изменение идёт через event.',
    codeExample: {
      language: 'vue',
      filename: 'BaseInput.vue',
      code: `<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <input :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>`,
    },
    commonMistake:
      'Ошибка — менять modelValue напрямую внутри компонента. Корректно отправлять update:modelValue.',
    interviewQuestions: createInterviewQuestions("v-model на компоненте", "v-model"),
    remember:
      'v-model на компоненте — это prop modelValue плюс event update:modelValue.',
  },
  {
    id: 'knowledge-props-emits-q419',
    moduleId: 'props-emits',
    questionId: 419,
    title: 'modelValue',
    category: 'v-model',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'modelValue — стандартное имя prop для default v-model в Vue 3. Оно содержит текущее значение, которым управляет родитель. Дочерний компонент читает modelValue и отображает его.',
    whenToUse:
      'modelValue используют для основного значения компонента формы или выбора. Если значений несколько, можно использовать аргументы v-model. Если prop не является редактируемым значением, лучше выбрать более смысловое имя.',
    howItWorks:
      'При `v-model="name"` Vue передаёт `:model-value="name"` и слушает `@update:model-value`. Внутри компонента prop называется modelValue. Изменение отправляется событием update:modelValue.',
    whyImportant:
      'Понимание modelValue помогает читать и проектировать компоненты форм. На интервью это базовый вопрос по Vue 3 component API.',
    codeExample: {
      language: 'vue',
      filename: 'ParentForm.vue',
      code: `<TextField v-model="email" />`,
    },
    commonMistake:
      'Ошибка — использовать modelValue для нескольких несвязанных значений сразу. Лучше разделить API через несколько v-model или отдельные props.',
    interviewQuestions: createInterviewQuestions("modelValue", "v-model"),
    remember:
      'modelValue хранит текущее значение default v-model.',
  },
  {
    id: 'knowledge-props-emits-q420',
    moduleId: 'props-emits',
    questionId: 420,
    title: 'update:modelValue',
    category: 'v-model',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'update:modelValue — стандартное событие для изменения default v-model. Оно сообщает родителю новое значение. Сам дочерний компонент не обязан владеть этим значением.',
    whenToUse:
      'Событие отправляют при пользовательском изменении: input, select, toggle, clear. Не стоит отправлять его на каждый render или просто при получении prop. Emit должен отражать намерение изменить значение.',
    howItWorks:
      'Компонент вызывает `emit("update:modelValue", nextValue)`. Родитель, использующий v-model, получает событие и обновляет своё состояние. После обновления новое значение снова приходит в компонент через prop.',
    whyImportant:
      'Эта механика объясняет, почему v-model остаётся совместимым с one-way data flow. На интервью стоит упомянуть, что событие — это запрос обновления, а не прямая мутация prop.',
    codeExample: {
      language: 'ts',
      filename: 'emit-update.ts',
      code: `const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

const toggle = () => emit('update:modelValue', !props.modelValue)`,
    },
    commonMistake:
      'Ошибка — emitить то же значение без проверки в watcher. Это может привести к лишним обновлениям или циклам синхронизации.',
    interviewQuestions: createInterviewQuestions("update:modelValue", "v-model"),
    remember:
      'update:modelValue сообщает родителю новое значение для v-model.',
  },
  {
    id: 'knowledge-props-emits-q421',
    moduleId: 'props-emits',
    questionId: 421,
    title: 'Несколько v-model',
    category: 'v-model',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Несколько v-model позволяют компоненту управлять несколькими независимыми значениями. Для этого используются аргументы v-model, например v-model:first-name и v-model:last-name. Каждый канал имеет свой prop и update-событие.',
    whenToUse:
      'Такой подход подходит для составных form-компонентов: диапазон дат, full name input, coordinates picker. Если значения тесно связаны, иногда лучше один объектный modelValue. Выбор зависит от API и удобства родителя.',
    howItWorks:
      '`v-model:title` соответствует prop `title` и событию `update:title`. Компонент объявляет соответствующие props и emits. Родитель получает независимую синхронизацию каждого значения.',
    whyImportant:
      'На интервью несколько v-model показывают знание более продвинутого component API. Важно уметь выбрать между несколькими каналами и одним объектным значением.',
    codeExample: {
      language: 'vue',
      filename: 'NameEditor.vue',
      code: `<NameEditor
  v-model:first-name="firstName"
  v-model:last-name="lastName"
/>`,
    },
    commonMistake:
      'Ошибка — смешивать несколько значений в одну строку ради одного v-model. Это усложняет парсинг и создаёт хрупкий API.',
    interviewQuestions: createInterviewQuestions("Несколько v-model", "v-model"),
    remember:
      'Аргументы v-model создают отдельные каналы синхронизации значений.',
  },
  {
    id: 'knowledge-props-emits-q422',
    moduleId: 'props-emits',
    questionId: 422,
    title: 'defineModel',
    category: 'Script Setup',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'defineModel — macro, который упрощает объявление v-model в компоненте. Он сокращает boilerplate вокруг prop и update-события. В результате код controlled-компонента становится компактнее.',
    whenToUse:
      'defineModel удобно использовать в компонентах форм и контролах, где v-model является основным API. Для простых событий вроде close или submit defineEmits остаётся понятнее. Перед применением важно учитывать версию Vue.',
    howItWorks:
      'defineModel возвращает ref-like значение, связанное с v-model. Запись в него приводит к отправке update-события. Можно задавать имя модели и опции, если нужен не default modelValue.',
    whyImportant:
      'На интервью defineModel показывает знание современного Vue. При этом важно объяснить, что механизм не отменяет props/events, а делает их описание короче.',
    codeExample: {
      language: 'vue',
      filename: 'SearchField.vue',
      code: `<script setup lang="ts">
const query = defineModel<string>({ default: '' })
</script>

<template>
  <input v-model="query" />
</template>`,
    },
    commonMistake:
      'Ошибка — считать defineModel отдельным хранилищем состояния. Это удобный API для связи с родительским v-model.',
    interviewQuestions: createInterviewQuestions("defineModel", "Script Setup"),
    remember:
      'defineModel сокращает boilerplate для v-model, но концептуально остаётся props/events контрактом.',
  },
  {
    id: 'knowledge-props-emits-q423',
    moduleId: 'props-emits',
    questionId: 423,
    title: 'Controlled components',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Controlled component — компонент, где важное значение хранится снаружи. Компонент получает value или modelValue через prop и отправляет события для изменения. Родитель остаётся источником истины.',
    whenToUse:
      'Controlled-подход хорош для форм, фильтров, таблиц, выбора элементов и компонентов дизайн-системы. Он полезен, когда родитель должен валидировать, сохранять или синхронизировать значение. Для полностью локального UI может хватить uncontrolled-подхода.',
    howItWorks:
      'Компонент отображает prop и не меняет его напрямую. При действии пользователя он отправляет update-событие. Родитель обновляет state, и новое значение снова передаётся вниз.',
    whyImportant:
      'Controlled-подход делает поток данных прозрачным. На интервью это помогает обсудить v-model, однонаправленный data flow и ошибки с локальной копией props.',
    codeExample: {
      language: 'vue',
      filename: 'ToggleSwitch.vue',
      code: `<script setup lang="ts">
const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
</script>

<template>
  <button @click="emit('update:modelValue', !props.modelValue)">
    {{ props.modelValue ? 'On' : 'Off' }}
  </button>
</template>`,
    },
    commonMistake:
      'Ошибка — хранить локальную копию controlled value и менять её независимо от prop. Так появляются две версии истины.',
    interviewQuestions: createInterviewQuestions("Controlled components", "Architecture"),
    remember:
      'В controlled-компоненте родитель владеет значением, компонент отправляет запросы изменения.',
  },
  {
    id: 'knowledge-props-emits-q424',
    moduleId: 'props-emits',
    questionId: 424,
    title: 'События родитель-дочерний компонент',
    category: 'Communication',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Связь родитель-дочерний компонент строится на props и events. Родитель передаёт данные вниз, дочерний компонент сообщает о действиях вверх. Это базовая модель коммуникации во Vue.',
    whenToUse:
      'Такой подход подходит для ближайших компонентов: элемент списка и список, поле и форма, кнопка и панель. Он прост, явен и хорошо читается в template. Для удалённых компонентов или общего состояния может понадобиться другой механизм.',
    howItWorks:
      'Дочерний компонент объявляет событие через defineEmits и вызывает emit. Родитель слушает событие через `@remove`, `@select` или другое имя. Payload помогает понять, к какому элементу относится действие.',
    whyImportant:
      'На интервью важно уметь объяснить, почему не стоит сразу использовать глобальные решения для локальной связи. Props/events часто дают самый простой и поддерживаемый вариант.',
    codeExample: {
      language: 'vue',
      filename: 'ParentList.vue',
      code: `<TodoItem
  v-for="todo in todos"
  :key="todo.id"
  :todo="todo"
  @remove="removeTodo"
/>`,
    },
    commonMistake:
      'Ошибка — заставлять дочерний компонент знать структуру родительского массива. Достаточно отправить id или команду, а родитель сам изменит данные.',
    interviewQuestions: createInterviewQuestions("События родитель-дочерний компонент", "Communication"),
    remember:
      'Для ближайшей связи родителя и ребёнка props/events обычно достаточно.',
  },
  {
    id: 'knowledge-props-emits-q425',
    moduleId: 'props-emits',
    questionId: 425,
    title: 'Event bus как анти-паттерн',
    category: 'Architecture',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Event bus — общий канал событий, через который независимые части интерфейса могут обмениваться сообщениями. В маленьких сценариях он выглядит удобным, но часто создаёт скрытые связи. Получатель и отправитель события становятся неочевидными.',
    whenToUse:
      'В современном Vue event bus стоит применять крайне осторожно. Для локальной связи лучше props/events, для глубокой зависимости provide/inject, для разделяемого состояния Pinia. Event bus может быть оправдан только как очень ограниченный infrastructure-паттерн с явной документацией.',
    howItWorks:
      'Один участок кода публикует событие в общий канал, другой подписывается. Между ними нет видимого отношения в дереве компонентов. При росте приложения становится сложно понять, кто изменил состояние.',
    whyImportant:
      'На интервью ответ про event bus показывает архитектурную зрелость. Важно не просто сказать, что он плохой, а объяснить проблему неявных зависимостей и debugging.',
    codeExample: {
      language: 'ts',
      filename: 'event-bus-risk.ts',
      code: `// Сложно отследить, кто слушает это событие.
eventBus.emit('user:selected', userId)`,
    },
    commonMistake:
      'Ошибка — использовать event bus для обычной связи родителя и ребёнка. Это скрывает простой компонентный контракт.',
    interviewQuestions: createInterviewQuestions("Event bus как анти-паттерн", "Architecture"),
    remember:
      'Event bus опасен неявными связями; сначала стоит рассмотреть props/events, provide/inject или store.',
  },
  {
    id: 'knowledge-props-emits-q426',
    moduleId: 'props-emits',
    questionId: 426,
    title: 'Когда Pinia лучше цепочки emits',
    category: 'State Management',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Pinia — глобальный store для состояния, которое нужно нескольким независимым частям интерфейса. Цепочка emits — передача события вверх через несколько уровней компонентов. Длинная цепочка может стать хрупкой и шумной.',
    whenToUse:
      'Pinia стоит рассмотреть, когда состояние разделяется между удалёнными ветками дерева, переживает переходы экранов или требует централизованных actions. Для одного дочернего события ближайшему родителю store обычно избыточен. Важен масштаб связи.',
    howItWorks:
      'Store хранит state и actions в отдельном слое. Компоненты читают состояние и вызывают actions напрямую через store. Это убирает необходимость прокидывать одно событие через промежуточные компоненты, которые не используют его сами.',
    whyImportant:
      'На интервью важно показать баланс: props/events для локальной связи, Pinia для разделяемого состояния. Перенос всего в store так же вреден, как и бесконечная цепочка emits.',
    codeExample: {
      language: 'ts',
      filename: 'selection-store.ts',
      code: `export const useSelectionStore = defineStore('selection', () => {
  const selectedId = ref<string | null>(null)
  const select = (id: string) => { selectedId.value = id }

  return { selectedId, select }
})`,
    },
    commonMistake:
      'Ошибка — использовать Pinia для каждого локального клика. Это делает простой UI глобальным без необходимости.',
    interviewQuestions: createInterviewQuestions("Когда Pinia лучше цепочки emits", "State Management"),
    remember:
      'Pinia уместна, когда состояние действительно разделяемое, а не просто локальное событие.',
  },
  {
    id: 'knowledge-props-emits-q427',
    moduleId: 'props-emits',
    questionId: 427,
    title: 'Ошибки синхронизации state',
    category: 'State Sync',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Ошибка синхронизации появляется, когда одно значение хранится сразу в нескольких местах. Например, prop копируется в локальный ref, затем оба значения меняются независимо. UI начинает показывать устаревшее или противоречивое состояние.',
    whenToUse:
      'Локальная копия prop уместна для draft-сценариев: редактирование формы до сохранения или временное состояние модалки. Для controlled value лучше не создавать вторую версию истины. Нужно заранее выбрать ownership состояния.',
    howItWorks:
      'Prop обновляется родителем, локальный ref обновляется дочерним компонентом. Если синхронизация через watch неполная, значения расходятся. Если watchers обновляют друг друга без условий, возможны циклы.',
    whyImportant:
      'На интервью эта тема показывает практический опыт. Хороший ответ объясняет, что проблема не в watch сам по себе, а в неясном источнике истины.',
    codeExample: {
      language: 'ts',
      filename: 'draft-state.ts',
      code: `const props = defineProps<{ initialName: string }>()
const draftName = ref(props.initialName)

const reset = () => {
  draftName.value = props.initialName
}`,
    },
    commonMistake:
      'Ошибка — копировать каждый prop в локальный ref без причины. Чаще computed или прямое чтение prop проще и безопаснее.',
    interviewQuestions: createInterviewQuestions("Ошибки синхронизации state", "State Sync"),
    remember:
      'Для одного значения должен быть понятный источник истины.',
  },
  {
    id: 'knowledge-props-emits-q428',
    moduleId: 'props-emits',
    questionId: 428,
    title: 'Циклы update-событий',
    category: 'State Sync',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Цикл update-событий возникает, когда watcher или computed-like логика отправляет update в ответ на prop, а родитель снова меняет prop. Без проверки значения это может привести к лишним рендерам или бесконечной синхронизации.',
    whenToUse:
      'Watchers для синхронизации стоит применять осторожно. Они нужны для нормализации внешних значений, интеграции с API или draft-сценариев. Для обычного derived state лучше computed, а для controlled input — прямой emit при пользовательском действии.',
    howItWorks:
      'Компонент получает prop, watcher срабатывает и emitит update. Родитель обновляет state и передаёт prop обратно. Если значение не сравнивается, цепочка повторяется даже без реального изменения.',
    whyImportant:
      'На интервью это помогает обсудить разницу между реакцией на пользовательское действие и автоматической синхронизацией. Зрелый компонент не emitит изменения без причины.',
    codeExample: {
      language: 'ts',
      filename: 'safe-sync.ts',
      code: `watch(
  () => props.modelValue,
  (value) => {
    if (value.trim() !== value) {
      emit('update:modelValue', value.trim())
    }
  },
)`,
    },
    commonMistake:
      'Ошибка — watcher без условия, который всегда отправляет update того же значения. Это создаёт шум и может привести к циклу.',
    interviewQuestions: createInterviewQuestions("Циклы update-событий", "State Sync"),
    remember:
      'Emit должен происходить при реальном намерении изменить значение, а не на каждый входящий prop.',
  },
  {
    id: 'knowledge-props-emits-q429',
    moduleId: 'props-emits',
    questionId: 429,
    title: 'Именование events',
    category: 'Component API',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Имена events описывают действия или запросы изменения, которые компонент отправляет наружу. Хорошие имена читаются как часть публичного API. Они должны быть стабильными и понятными родителю.',
    whenToUse:
      'Для действий подходят имена select, close, submit, remove, confirm. Для v-model используют update:value или update:modelValue. Если событие описывает внутреннюю деталь реализации, имя стоит пересмотреть.',
    howItWorks:
      'Компонент объявляет событие в defineEmits, а родитель слушает его в template. Имя события должно соответствовать тому, что произошло с точки зрения потребителя компонента. Payload дополняет имя нужным контекстом.',
    whyImportant:
      'На интервью именование events показывает внимание к API-дизайну. Плохое имя заставляет читать внутренний код компонента, чтобы понять, что делает событие.',
    codeExample: {
      language: 'vue',
      filename: 'DialogActions.vue',
      code: `<script setup lang="ts">
const emit = defineEmits<{
  confirm: []
  cancel: []
}>()
</script>`,
    },
    commonMistake:
      'Ошибка — называть событие по внутреннему методу, например handleClickDone. Событие должно описывать смысл для родителя.',
    interviewQuestions: createInterviewQuestions("Именование events", "Component API"),
    remember:
      'Event name должен описывать действие или изменение на языке API компонента.',
  },
  {
    id: 'knowledge-props-emits-q430',
    moduleId: 'props-emits',
    questionId: 430,
    title: 'Границы props/emits API',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Граница props/emits API определяет, как внешний код взаимодействует с компонентом. Props задают входные параметры, emits задают выходные события. Если граница разрастается без контроля, компонент становится трудным для использования.',
    whenToUse:
      'Оценивать границы API нужно при создании переиспользуемых компонентов, сложных форм и UI-kit элементов. Если появляется много props и events под частные случаи, стоит подумать о декомпозиции, slots или новом компоненте. Иногда проблема не в API, а в слишком широкой ответственности.',
    howItWorks:
      'Компонент должен скрывать внутреннюю реализацию и открывать только нужные точки взаимодействия. Родитель не должен знать внутренние refs, DOM-структуру или частные флаги. Изменение внутреннего кода не должно ломать внешний контракт.',
    whyImportant:
      'На интервью это отделяет знание синтаксиса от инженерного проектирования. Хороший Vue-разработчик умеет проектировать component API, который выдерживает рост требований.',
    codeExample: {
      language: 'ts',
      filename: 'select-api.ts',
      code: `interface SelectProps {
  modelValue: string | null
  options: Array<{ id: string; label: string }>
  disabled?: boolean
}`,
    },
    commonMistake:
      'Ошибка — добавлять новый prop на каждый визуальный частный случай. Иногда slot, composition или отдельный компонент дают более чистую модель.',
    interviewQuestions: createInterviewQuestions("Границы props/emits API", "Architecture"),
    remember:
      'Props/emits API должен выражать ответственность компонента, а не все внутренние детали потребителей.',
  },
]
