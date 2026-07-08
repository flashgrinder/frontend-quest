import type { ContentKnowledgeCard } from '../../../types/content'

const createInterviewQuestions = (title: string, category: string): string[] => [
  `Какие задачи решает ${title} в теме ${category} (Vue Components)?`,
  `Какие ограничения ${title} важно учитывать в контексте Vue Components?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

export const componentsKnowledgeCards: ContentKnowledgeCard[] = [
  {
    id: 'knowledge-components-q301',
    moduleId: 'components',
    questionId: 301,
    title: 'Компонент во Vue',
    category: 'Components',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Компонент — это самостоятельная часть интерфейса со своим контрактом, разметкой и поведением. Он может быть маленьким элементом вроде кнопки или крупной секцией страницы. Хороший компонент имеет понятную ответственность и предсказуемый API.',
    whenToUse:
      'Компоненты используют, когда часть интерфейса нужно переиспользовать, изолировать или сделать проще для понимания. Даже если компонент используется один раз, его можно выделить ради читаемости большой страницы. Важно не дробить интерфейс без причины.',
    howItWorks:
      'Vue создаёт экземпляр компонента, связывает его props, состояние, computed, события и template. Родитель передаёт данные через props и получает сигналы через emits. Компоненты складываются в дерево, где данные обычно идут сверху вниз.',
    whyImportant:
      'Компонентная модель — основа Vue. На интервью важно показать понимание границ ответственности: что компонент принимает, что отображает и какие события отправляет. Это помогает проектировать поддерживаемый UI.',
    codeExample: {
      language: 'vue',
      filename: 'StatusBadge.vue',
      code: `<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="badge">{{ label }}</span>
</template>`,
    },
    commonMistake:
      'Ошибка — создавать компонент, который одновременно загружает данные, форматирует бизнес-логику, управляет модалками и рисует сложный UI. Такой компонент трудно тестировать и переиспользовать.',
    interviewQuestions: createInterviewQuestions("Компонент во Vue", "Components"),
    remember:
      'Компонент должен иметь одну понятную ответственность и явный контракт.',
  },
  {
    id: 'knowledge-components-q302',
    moduleId: 'components',
    questionId: 302,
    title: 'Single File Component',
    category: 'SFC',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Single File Component — это .vue-файл, который обычно содержит template, script и style одного компонента. Такой формат собирает связанные части UI рядом. Он делает компонент удобным для чтения, сборки и анализа инструментами.',
    whenToUse:
      'SFC является стандартным форматом для Vue-приложений. Его используют для страниц, layout-компонентов, UI-компонентов и feature-компонентов. Исключения встречаются в render-функциях, библиотеках или очень специфичных сценариях.',
    howItWorks:
      'Сборщик и Vue compiler обрабатывают блоки SFC отдельно. Template компилируется в render-функцию, script становится логикой компонента, style может быть scoped или глобальным. TypeScript и CSS-препроцессоры подключаются через атрибуты блоков.',
    whyImportant:
      'SFC показывает, как Vue организует код компонента на практике. На интервью полезно объяснить, что это не просто удобный файл, а формат, который понимается компилятором и tooling.',
    codeExample: {
      language: 'vue',
      filename: 'UserCard.vue',
      code: `<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <article>{{ name }}</article>
</template>`,
    },
    commonMistake:
      'Ошибка — складывать в один SFC слишком много независимых блоков. Формат не отменяет декомпозицию: если ответственность выросла, часть UI лучше вынести.',
    interviewQuestions: createInterviewQuestions("Single File Component", "SFC"),
    remember:
      'SFC объединяет разметку, логику и стили одного компонента в понятной границе.',
  },
  {
    id: 'knowledge-components-q303',
    moduleId: 'components',
    questionId: 303,
    title: 'template, script и style',
    category: 'SFC',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Блоки template, script и style разделяют зоны ответственности компонента. Template описывает UI декларативно, script содержит данные и логику, style отвечает за визуальное оформление. Такое разделение помогает читать компонент сверху вниз.',
    whenToUse:
      'Эта структура подходит для большинства Vue-компонентов. script setup удобен для Composition API, template — для декларативного HTML, style scoped — для локальных стилей. Длинную бизнес-логику всё равно лучше выносить в composables или utils.',
    howItWorks:
      'Template видит значения, объявленные в script setup. Стили могут быть scoped, тогда Vue добавит атрибуты для ограничения области действия. Компилятор объединяет блоки в итоговый компонент.',
    whyImportant:
      'На интервью эта тема проверяет понимание SFC как архитектурной единицы. Разработчик должен понимать, где держать логику, где отображение, а где стили. Это снижает риск смешивания обязанностей.',
    codeExample: {
      language: 'vue',
      filename: 'PanelTitle.vue',
      code: `<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <h2 class="title">{{ title }}</h2>
</template>

<style scoped>
.title { font-weight: 700; }
</style>`,
    },
    commonMistake:
      'Ошибка — переносить сложные вычисления прямо в template. Template должен оставаться читаемым, а сложные выражения лучше заменить computed или функцией.',
    interviewQuestions: createInterviewQuestions("template, script и style", "SFC"),
    remember:
      'Template — отображение, script — логика, style — внешний вид.',
  },
  {
    id: 'knowledge-components-q304',
    moduleId: 'components',
    questionId: 304,
    title: 'Локальная и глобальная регистрация',
    category: 'Registration',
    rarity: 'rare',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Регистрация компонента определяет, где компонент доступен для использования. В script setup импортированный компонент автоматически доступен template. Глобальная регистрация делает компонент доступным без локального импорта.',
    whenToUse:
      'Локальная регистрация предпочтительна для большинства feature-компонентов, потому что зависимости видны в файле. Глобальная регистрация уместна для базовых UI-компонентов или компонентов, которые реально используются очень широко. Избыточная глобальность усложняет поиск зависимостей.',
    howItWorks:
      'При локальном использовании компонент импортируется в текущий файл. При глобальной регистрации компонент добавляют в приложение через app.component. В обоих случаях Vue должен знать компонент до рендера template.',
    whyImportant:
      'Выбор регистрации влияет на поддержку кода. На интервью важно показать понимание trade-off: удобство глобального доступа против явности локальных импортов. В больших кодовых базах явность часто выигрывает.',
    codeExample: {
      language: 'ts',
      filename: 'main.ts',
      code: `app.component('BaseButton', BaseButton)`,
    },
    commonMistake:
      'Ошибка — регистрировать глобально всё подряд. Это создаёт неявные зависимости и повышает риск конфликтов имён. Локальный импорт обычно проще отследить.',
    interviewQuestions: createInterviewQuestions("Локальная и глобальная регистрация", "Registration"),
    remember:
      'Глобально стоит регистрировать только действительно общие компоненты.',
  },
  {
    id: 'knowledge-components-q305',
    moduleId: 'components',
    questionId: 305,
    title: 'Props',
    category: 'Component API',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Props — входные параметры компонента. Они задают данные, которые родитель передаёт дочернему компоненту. Через props формируется значительная часть публичного API компонента.',
    whenToUse:
      'Props используют для данных, которые должны управляться родителем или приходить извне. Это могут быть value, label, disabled, items, selectedId и другие параметры. Если нужно передать разметку, иногда лучше slot.',
    howItWorks:
      'Родитель передаёт prop через атрибут компонента. Дочерний компонент объявляет prop через defineProps и читает его как readonly-вход. При изменении значения в родителе дочерний компонент получает обновление.',
    whyImportant:
      'Props поддерживают однонаправленный поток данных. На интервью важно объяснить, почему дочерний компонент не должен напрямую менять входные данные. Это делает состояние более предсказуемым.',
    codeExample: {
      language: 'vue',
      filename: 'BaseLabel.vue',
      code: `<script setup lang="ts">
defineProps<{ text: string; muted?: boolean }>()
</script>`,
    },
    commonMistake:
      'Ошибка — воспринимать props как локальный state и менять их напрямую. Если значение должно меняться внутри, нужно локальное состояние или событие родителю.',
    interviewQuestions: createInterviewQuestions("Props", "Component API"),
    remember:
      'Props — входной readonly-контракт компонента.',
  },
  {
    id: 'knowledge-components-q306',
    moduleId: 'components',
    questionId: 306,
    title: 'Emits',
    category: 'Component API',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Emits описывают события, которые компонент может отправлять наружу. Они нужны для связи дочернего компонента с родителем. Хорошее имя события отражает действие или изменение, которое произошло.',
    whenToUse:
      'Emits используют при кликах, выборе значения, отправке формы, закрытии модалки или изменении v-model. Если компонент сообщает о намерении изменить состояние, событие обычно лучше прямой мутации. Для глобальных сценариев могут подойти stores, но не для каждой локальной связи.',
    howItWorks:
      'В script setup defineEmits возвращает функцию emit. Компонент вызывает emit с именем события и payload, а родитель слушает событие через @event. TypeScript может проверять имена событий и payload.',
    whyImportant:
      'Emits помогают держать однонаправленный поток данных. На интервью важно объяснить пару props down, events up. Это базовый паттерн проектирования Vue-компонентов.',
    codeExample: {
      language: 'vue',
      filename: 'ConfirmButton.vue',
      code: `<script setup lang="ts">
const emit = defineEmits<{ confirm: [] }>()
</script>

<template>
  <button @click="emit('confirm')">OK</button>
</template>`,
    },
    commonMistake:
      'Ошибка — отправлять неописанные события или разные типы payload под одним именем. Это делает компонентный API нестабильным.',
    interviewQuestions: createInterviewQuestions("Emits", "Component API"),
    remember:
      'Emits — способ сообщить родителю о событии без прямого изменения его состояния.',
  },
  {
    id: 'knowledge-components-q307',
    moduleId: 'components',
    questionId: 307,
    title: 'События компонентов',
    category: 'Events',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'События компонентов — механизм коммуникации снизу вверх. Дочерний компонент не управляет родительским state напрямую, а сообщает о действии. Родитель решает, как обработать событие.',
    whenToUse:
      'События подходят для выбора пункта, закрытия окна, сохранения формы или изменения значения. Они особенно хороши для dumb-компонентов, которые не знают источника данных. Если связь становится сложной и глобальной, стоит рассмотреть store или composable.',
    howItWorks:
      'Дочерний компонент вызывает emit. Родитель подписывается через @select, @close или другое имя события. Payload должен быть минимальным и понятным: id, значение, объект команды или данные формы.',
    whyImportant:
      'Этот паттерн делает поток данных отслеживаемым. На интервью можно объяснить, что событие — не команда напрямую изменить родителя, а сигнал о произошедшем действии.',
    codeExample: {
      language: 'vue',
      filename: 'OptionItem.vue',
      code: `<script setup lang="ts">
const props = defineProps<{ id: string }>()
const emit = defineEmits<{ select: [id: string] }>()
</script>

<template>
  <button @click="emit('select', props.id)">Select</button>
</template>`,
    },
    commonMistake:
      'Ошибка — мутировать объект, пришедший через prop, вместо отправки события. Это делает источник изменения неочевидным и может нарушить реактивные ожидания.',
    interviewQuestions: createInterviewQuestions("События компонентов", "Events"),
    remember:
      'События компонентов помогают сохранять направление данных: props вниз, events вверх.',
  },
  {
    id: 'knowledge-components-q308',
    moduleId: 'components',
    questionId: 308,
    title: 'Slots',
    category: 'Slots',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Slot — точка расширения компонента, куда родитель может передать разметку. Это делает компонент гибким без множества props для каждого варианта контента. Slot особенно полезен для layout и UI-компонентов.',
    whenToUse:
      'Slots используют, когда нужно передать произвольный контент: текст, кнопки, иконки, форматированную разметку или другие компоненты. Если значение простое и структурированное, prop может быть лучше. Выбор зависит от того, данные передаются или разметка.',
    howItWorks:
      'Дочерний компонент размещает `<slot />` в template. Родитель помещает контент между тегами компонента. Если контент не передан, можно показать fallback.',
    whyImportant:
      'Slots помогают строить переиспользуемые оболочки без жёсткой привязки к конкретному содержимому. На интервью важно уметь сравнить props и slots как разные формы компонентного API.',
    codeExample: {
      language: 'vue',
      filename: 'BaseCard.vue',
      code: `<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="card">
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>`,
    },
    commonMistake:
      'Ошибка — заменять slots большим числом props вроде titleHtml, footerHtml и iconHtml. Если нужен произвольный контент, slot обычно чище.',
    interviewQuestions: createInterviewQuestions("Slots", "Slots"),
    remember:
      'Slot передаёт разметку, а prop передаёт данные.',
  },
  {
    id: 'knowledge-components-q309',
    moduleId: 'components',
    questionId: 309,
    title: 'Named slots',
    category: 'Slots',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Named slots — именованные области контента внутри компонента. Они позволяют разделить header, default, footer или другие зоны. Родитель явно указывает, какой контент в какую область передать.',
    whenToUse:
      'Named slots полезны для карточек, модалок, таблиц, layout-компонентов и сложных панелей. Их стоит использовать, когда у компонента есть несколько независимых областей контента. Для одной области достаточно default slot.',
    howItWorks:
      'В дочернем компоненте объявляют `<slot name="header" />`. В родителе используют `<template #header>`. Default slot остаётся областью без имени.',
    whyImportant:
      'Named slots делают API компонента выразительным. На интервью можно объяснить, что они помогают управлять структурой без жёсткого набора props для каждой части UI.',
    codeExample: {
      language: 'vue',
      filename: 'ModalFrame.vue',
      code: `<template>
  <header><slot name="header" /></header>
  <main><slot /></main>
  <footer><slot name="footer" /></footer>
</template>`,
    },
    commonMistake:
      'Ошибка — использовать named slots для данных, которые проще передать prop. Slots нужны для разметки, а не для замены всех параметров компонента.',
    interviewQuestions: createInterviewQuestions("Named slots", "Slots"),
    remember:
      'Named slots разделяют несколько областей произвольного контента.',
  },
  {
    id: 'knowledge-components-q310',
    moduleId: 'components',
    questionId: 310,
    title: 'Scoped slots',
    category: 'Slots',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Scoped slot — slot, которому дочерний компонент передаёт данные через slot props. Родитель управляет отображением, но получает контекст от дочернего компонента. Это мощный паттерн для headless-компонентов.',
    whenToUse:
      'Scoped slots используют, когда компонент должен управлять логикой, но позволять родителю контролировать разметку. Примеры: списки, таблицы, autocomplete, dropdown, form field wrappers. Если родителю не нужны внутренние данные, обычный slot проще.',
    howItWorks:
      'Дочерний компонент передаёт значения в `<slot :item="item" />`. Родитель получает их через `#default="{ item }"` или именованный slot. Slot props доступны только внутри соответствующего template.',
    whyImportant:
      'Scoped slots показывают понимание разделения логики и отображения. На интервью это часто связывают с headless UI и переиспользуемыми компонентами. Важно не превращать slot props в слишком сложный скрытый API.',
    codeExample: {
      language: 'vue',
      filename: 'DataList.vue',
      code: `<template>
  <slot v-for="item in items" :item="item" />
</template>`,
    },
    commonMistake:
      'Ошибка — передавать через scoped slot слишком много несвязанных данных. API становится трудным для понимания. Лучше отдавать минимальный контекст.',
    interviewQuestions: createInterviewQuestions("Scoped slots", "Slots"),
    remember:
      'Scoped slot передаёт данные из дочернего компонента в разметку родителя.',
  },
  {
    id: 'knowledge-components-q311',
    moduleId: 'components',
    questionId: 311,
    title: 'Attrs и fallthrough attributes',
    category: 'Attrs',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Attrs — атрибуты, которые переданы компоненту, но не объявлены как props. Fallthrough attributes могут автоматически попасть на корневой элемент. К ним часто относятся class, id, aria-* и data-*.',
    whenToUse:
      'Понимание attrs важно для wrapper-компонентов и компонентов дизайн-системы. Они позволяют пробрасывать HTML-атрибуты на внутреннюю кнопку, input или ссылку. Для важных данных лучше объявлять typed props.',
    howItWorks:
      'Vue собирает не-props атрибуты в attrs. Если у компонента один корневой элемент, они могут примениться автоматически. При сложной структуре можно использовать useAttrs и v-bind.',
    whyImportant:
      'Attrs влияют на доступность и удобство переиспользования. На интервью важно объяснить, почему aria-атрибуты и class должны попадать на правильный DOM-элемент.',
    codeExample: {
      language: 'vue',
      filename: 'BaseInput.vue',
      code: `<script setup lang="ts">
const attrs = useAttrs()
</script>

<template>
  <input v-bind="attrs" />
</template>`,
    },
    commonMistake:
      'Ошибка — забыть пробросить attrs в wrapper-компоненте. Тогда class, id или aria-label могут оказаться не там или пропасть.',
    interviewQuestions: createInterviewQuestions("Attrs и fallthrough attributes", "Attrs"),
    remember:
      'Attrs помогают wrapper-компонентам не терять стандартные HTML-атрибуты.',
  },
  {
    id: 'knowledge-components-q312',
    moduleId: 'components',
    questionId: 312,
    title: 'Ручное управление attrs',
    category: 'Attrs',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Ручное управление attrs означает, что компонент сам решает, куда попадут не-props атрибуты. Это особенно важно, когда корневой элемент не является главным интерактивным элементом. defineOptions может отключить автоматическое наследование через inheritAttrs.',
    whenToUse:
      'Такой подход нужен для кнопок-обёрток, input wrappers, field components и компонентов с несколькими корневыми зонами. Атрибуты доступности должны попадать на элемент, с которым взаимодействует пользователь. Без ручного контроля они могут оказаться на декоративной оболочке.',
    howItWorks:
      'Компонент вызывает useAttrs и передаёт attrs через v-bind на нужный элемент. Если автоматический fallthrough мешает, задают inheritAttrs: false. В script setup это можно сделать через defineOptions.',
    whyImportant:
      'Это тема на стыке Vue и доступности. На интервью хороший ответ показывает, что разработчик думает не только о синтаксисе, но и о DOM-результате.',
    codeExample: {
      language: 'vue',
      filename: 'FieldShell.vue',
      code: `<script setup lang="ts">
defineOptions({ inheritAttrs: false })
const attrs = useAttrs()
</script>

<template>
  <label>
    <input v-bind="attrs" />
  </label>
</template>`,
    },
    commonMistake:
      'Ошибка — оставить aria-label на внешнем div вместо input. Визуально всё может работать, но доступность будет хуже.',
    interviewQuestions: createInterviewQuestions("Ручное управление attrs", "Attrs"),
    remember:
      'Attrs должны попадать на тот DOM-элемент, которому они действительно предназначены.',
  },
  {
    id: 'knowledge-components-q313',
    moduleId: 'components',
    questionId: 313,
    title: 'Dynamic components',
    category: 'Dynamic Components',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Dynamic component позволяет выбрать, какой компонент отрендерить, во время выполнения. Для этого используется `<component :is="...">`. Паттерн удобен для вкладок, переключаемых режимов и модульных областей UI.',
    whenToUse:
      'Dynamic components полезны, когда несколько компонентов занимают одну и ту же область интерфейса. Они делают код чище, чем длинная цепочка условной разметки. Если вариантов мало и разметка простая, обычный v-if тоже может быть нормальным.',
    howItWorks:
      'В `:is` передают компонент, имя зарегистрированного компонента или другой допустимый target. При изменении значения Vue размонтирует старый компонент и монтирует новый, если не используется KeepAlive.',
    whyImportant:
      'На интервью dynamic components часто обсуждаются вместе с KeepAlive и code splitting. Это показывает понимание жизненного цикла компонентов при переключении UI.',
    codeExample: {
      language: 'vue',
      filename: 'ModePanel.vue',
      code: `<script setup lang="ts">
const current = shallowRef(EditPanel)
</script>

<template>
  <component :is="current" />
</template>`,
    },
    commonMistake:
      'Ошибка — использовать dynamic component без понимания, что локальное состояние может сбрасываться при переключении. Если состояние нужно сохранить, стоит рассмотреть KeepAlive.',
    interviewQuestions: createInterviewQuestions("Dynamic components", "Dynamic Components"),
    remember:
      'Dynamic component выбирает компонент для рендера во время выполнения.',
  },
  {
    id: 'knowledge-components-q314',
    moduleId: 'components',
    questionId: 314,
    title: 'KeepAlive',
    category: 'Dynamic Components',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'KeepAlive — встроенный компонент Vue для кэширования экземпляров компонентов. Он сохраняет локальное состояние при переключении. Чаще всего применяется с dynamic components или router-view.',
    whenToUse:
      'KeepAlive полезен для вкладок, мастеров, фильтров и страниц, где пользователь ожидает сохранения введённых данных. Его не стоит применять ко всему подряд, потому что кэш занимает память. Нужно понимать, какие компоненты действительно стоит сохранять.',
    howItWorks:
      'Когда компонент внутри KeepAlive исчезает из активной области, Vue не уничтожает его полностью, а деактивирует. При возврате компонент активируется с прежним состоянием. Для этого существуют hooks onActivated и onDeactivated.',
    whyImportant:
      'Тема показывает понимание lifecycle за пределами простого mounted/unmounted. На интервью важно объяснить trade-off между удобством пользователя и потреблением памяти.',
    codeExample: {
      language: 'vue',
      filename: 'TabsHost.vue',
      code: `<template>
  <KeepAlive>
    <component :is="activeTab" />
  </KeepAlive>
</template>`,
    },
    commonMistake:
      'Ошибка — ожидать unmounted при каждом скрытии компонента внутри KeepAlive. Вместо этого срабатывают activated/deactivated сценарии.',
    interviewQuestions: createInterviewQuestions("KeepAlive", "Dynamic Components"),
    remember:
      'KeepAlive сохраняет экземпляр компонента между переключениями.',
  },
  {
    id: 'knowledge-components-q315',
    moduleId: 'components',
    questionId: 315,
    title: 'Async components',
    category: 'Performance',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Async component — компонент, который загружается по требованию. Vue поддерживает defineAsyncComponent для lazy loading. Это помогает не включать тяжёлый код в начальный bundle.',
    whenToUse:
      'Асинхронные компоненты полезны для модалок, тяжёлых редакторов, графиков, редко открываемых панелей и route-level экранов. Их стоит применять там, где есть реальный выигрыш по загрузке. Для маленьких часто используемых компонентов lazy loading может быть лишним.',
    howItWorks:
      'defineAsyncComponent принимает loader, который обычно возвращает dynamic import. Сборщик создаёт отдельный chunk. Vue загрузит компонент, когда он понадобится для рендера.',
    whyImportant:
      'На интервью async components связывают с производительностью и code splitting. Важно понимать, что это улучшает initial load, но добавляет состояние загрузки и возможные ошибки загрузки.',
    codeExample: {
      language: 'ts',
      filename: 'async-panel.ts',
      code: `const HeavyChart = defineAsyncComponent(() => import('./HeavyChart.vue'))`,
    },
    commonMistake:
      'Ошибка — лениво загружать слишком мелкие компоненты без причины. Это может увеличить количество запросов и усложнить UX без заметной пользы.',
    interviewQuestions: createInterviewQuestions("Async components", "Performance"),
    remember:
      'Async components нужны для осознанного code splitting.',
  },
  {
    id: 'knowledge-components-q316',
    moduleId: 'components',
    questionId: 316,
    title: 'Template refs',
    category: 'Refs',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Template ref — ссылка на DOM-элемент или дочерний компонент из template. В Composition API её обычно создают через ref(null). Она становится доступной после монтирования.',
    whenToUse:
      'Template refs нужны для focus, измерений DOM, интеграции с внешними библиотеками или вызова явно открытого метода дочернего компонента. Их не стоит использовать для обычного обмена данными, где лучше props и events.',
    howItWorks:
      'В template ставят `ref="inputEl"`, а в script создают `const inputEl = ref<HTMLInputElement | null>(null)`. После mounted Vue заполняет ссылку. Для компонентов на script setup публичный API задаётся через defineExpose.',
    whyImportant:
      'Refs — мост к императивному DOM. На интервью важно понимать, что Vue остаётся декларативным, а refs применяются точечно там, где декларативного API недостаточно.',
    codeExample: {
      language: 'vue',
      filename: 'AutoFocusInput.vue',
      code: `<script setup lang="ts">
const inputEl = ref<HTMLInputElement | null>(null)
onMounted(() => inputEl.value?.focus())
</script>

<template><input ref="inputEl" /></template>`,
    },
    commonMistake:
      'Ошибка — читать template ref до mounted. В этот момент DOM ещё не готов, и значение будет null.',
    interviewQuestions: createInterviewQuestions("Template refs", "Refs"),
    remember:
      'Template ref доступен после монтирования и нужен для точечных императивных сценариев.',
  },
  {
    id: 'knowledge-components-q317',
    moduleId: 'components',
    questionId: 317,
    title: 'v-model на компоненте',
    category: 'Component API',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'v-model на компоненте — соглашение для двустороннего API. Значение приходит через prop, а изменение отправляется событием update. В новых версиях Vue defineModel упрощает этот шаблон.',
    whenToUse:
      'v-model подходит для input-like компонентов: поля, select, переключатели, custom controls. Он удобен, когда компонент представляет редактируемое значение. Для обычных действий лучше явные события вроде submit или close.',
    howItWorks:
      'Классический вариант использует prop modelValue и emit update:modelValue. Родитель хранит источник истины, а дочерний компонент сообщает новое значение. defineModel может сгенерировать этот контракт короче.',
    whyImportant:
      'Эта тема часто встречается на интервью по Vue-компонентам. Важно объяснить, что v-model не означает прямую мутацию prop. Это синтаксический сахар над props и events.',
    codeExample: {
      language: 'vue',
      filename: 'TextField.vue',
      code: `<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>`,
    },
    commonMistake:
      'Ошибка — менять modelValue напрямую внутри компонента. Правильный путь — отправить update:modelValue и дать родителю обновить значение.',
    interviewQuestions: createInterviewQuestions("v-model на компоненте", "Component API"),
    remember:
      'v-model на компоненте — это value prop плюс update event.',
  },
  {
    id: 'knowledge-components-q318',
    moduleId: 'components',
    questionId: 318,
    title: 'defineProps',
    category: 'Script Setup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'defineProps — compiler macro для объявления props в script setup. Он задаёт входной контракт компонента. Макрос не нужно импортировать, потому что его обрабатывает Vue compiler.',
    whenToUse:
      'defineProps используют во всех script setup компонентах, которые принимают данные от родителя. С TypeScript часто передают generic-интерфейс. Если нужны значения по умолчанию, применяют withDefaults или reactive props destructure в поддерживаемых версиях.',
    howItWorks:
      'Компилятор извлекает описание props и делает их доступными внутри setup-кода и template. TypeScript проверяет использование props. Runtime-проверки зависят от способа объявления.',
    whyImportant:
      'defineProps — базовый инструмент компонентного API во Vue 3. На интервью важно понимать, что это не обычная runtime-функция, а макрос с compile-time ограничениями.',
    codeExample: {
      language: 'vue',
      filename: 'BaseAvatar.vue',
      code: `<script setup lang="ts">
interface Props {
  src: string
  alt?: string
}

defineProps<Props>()
</script>`,
    },
    commonMistake:
      'Ошибка — пытаться вызвать defineProps внутри условия или функции. Макрос должен быть на верхнем уровне script setup.',
    interviewQuestions: createInterviewQuestions("defineProps", "Script Setup"),
    remember:
      'defineProps объявляет входные данные компонента в script setup.',
  },
  {
    id: 'knowledge-components-q319',
    moduleId: 'components',
    questionId: 319,
    title: 'defineEmits',
    category: 'Script Setup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'defineEmits — compiler macro для объявления событий компонента. Он возвращает функцию emit, через которую компонент отправляет события. С TypeScript можно типизировать имена событий и payload.',
    whenToUse:
      'defineEmits нужен, когда компонент сообщает наружу о клике, выборе, изменении значения, закрытии или другом действии. Он делает API компонента явным. Без объявления событий поддерживать компонент сложнее.',
    howItWorks:
      'Компонент вызывает emit с именем события. Родитель слушает событие через @event. TypeScript может проверить, что событие существует и payload передан в правильной форме.',
    whyImportant:
      'Типизированные emits сильно уменьшают количество ошибок в компонентных API. На интервью это хороший пример практичной связки Vue и TypeScript.',
    codeExample: {
      language: 'vue',
      filename: 'TabButton.vue',
      code: `<script setup lang="ts">
const emit = defineEmits<{ activate: [id: string] }>()
</script>`,
    },
    commonMistake:
      'Ошибка — отправлять события с разными payload в разных местах. Лучше держать стабильный контракт и менять его осознанно.',
    interviewQuestions: createInterviewQuestions("defineEmits", "Script Setup"),
    remember:
      'defineEmits делает события компонента явной частью API.',
  },
  {
    id: 'knowledge-components-q320',
    moduleId: 'components',
    questionId: 320,
    title: 'defineExpose',
    category: 'Script Setup',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'defineExpose задаёт публичный API компонента для доступа через template ref. В script setup локальные переменные не раскрываются родителю автоматически. Это делает публичную поверхность компонента контролируемой.',
    whenToUse:
      'defineExpose применяют редко: для focus-методов, reset-методов, imperative API компонентов формы или интеграций. Для обычной передачи данных лучше props, emits и slots. Чем меньше imperative API, тем проще компонент поддерживать.',
    howItWorks:
      'Дочерний компонент вызывает defineExpose с объектом методов или значений. Родитель получает component ref и может вызвать раскрытый метод после mounted. Нераскрытые локальные значения остаются приватными.',
    whyImportant:
      'Эта тема проверяет понимание инкапсуляции компонента. На интервью важно сказать, что defineExpose — не способ обойти нормальный data flow, а точечный инструмент для публичного imperative API.',
    codeExample: {
      language: 'vue',
      filename: 'SearchInput.vue',
      code: `<script setup lang="ts">
const inputEl = ref<HTMLInputElement | null>(null)
const focus = () => inputEl.value?.focus()
defineExpose({ focus })
</script>`,
    },
    commonMistake:
      'Ошибка — раскрывать наружу всё состояние компонента. Это ломает инкапсуляцию и привязывает родителя к внутренним деталям.',
    interviewQuestions: createInterviewQuestions("defineExpose", "Script Setup"),
    remember:
      'defineExpose открывает только выбранную часть API дочернего компонента.',
  },
  {
    id: 'knowledge-components-q321',
    moduleId: 'components',
    questionId: 321,
    title: 'defineOptions',
    category: 'Script Setup',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'defineOptions — macro для объявления опций компонента внутри script setup. Он позволяет указать name, inheritAttrs и другие поддерживаемые опции без отдельного script блока. Это сохраняет компонент в одном стиле.',
    whenToUse:
      'defineOptions полезен, когда компоненту нужно имя для devtools или нужно отключить автоматическое наследование attrs. Он не нужен каждому компоненту. Если специальных опций нет, script setup может оставаться без defineOptions.',
    howItWorks:
      'Компилятор переносит объект defineOptions в опции компонента. Значения должны быть статически понятными. Макрос не является runtime API и не заменяет defineProps или defineEmits.',
    whyImportant:
      'На интервью defineOptions показывает знание современных возможностей script setup. Важнее понимать сценарии применения, чем просто помнить название макроса.',
    codeExample: {
      language: 'vue',
      filename: 'BaseButton.vue',
      code: `<script setup lang="ts">
defineOptions({
  name: 'BaseButton',
  inheritAttrs: false,
})
</script>`,
    },
    commonMistake:
      'Ошибка — использовать defineOptions для данных, которые должны быть props. Опции компонента и публичный API компонента решают разные задачи.',
    interviewQuestions: createInterviewQuestions("defineOptions", "Script Setup"),
    remember:
      'defineOptions задаёт component options внутри script setup.',
  },
  {
    id: 'knowledge-components-q322',
    moduleId: 'components',
    questionId: 322,
    title: 'Компонентная декомпозиция',
    category: 'Architecture',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Компонентная декомпозиция — разделение интерфейса на меньшие части с понятными ответственностями. Это не механическое дробление по количеству строк. Хорошая декомпозиция отражает реальные границы UI и поведения.',
    whenToUse:
      'Декомпозиция нужна, когда компонент трудно читать, тестировать или менять. Повторяющийся UI, независимые секции и сложные сценарии часто заслуживают отдельных компонентов. Если новая часть не имеет самостоятельного смысла, выделение может быть лишним.',
    howItWorks:
      'Большой компонент разбивают на контейнеры, presentational-компоненты и маленькие UI-части. Данные передаются через props, действия через emits, контент через slots. Логику можно выносить в composables.',
    whyImportant:
      'На интервью декомпозиция показывает архитектурную зрелость. Хороший разработчик объясняет не только как разбить компонент, но и почему выбранная граница будет удобна для изменений.',
    codeExample: {
      language: 'vue',
      filename: 'ProfilePage.vue',
      code: `<template>
  <ProfileHeader :user="user" />
  <ProfileStats :stats="stats" />
  <ProfileActions @save="save" />
</template>`,
    },
    commonMistake:
      'Ошибка — дробить каждый div в отдельный компонент. Это увеличивает навигацию по файлам и не даёт архитектурной пользы.',
    interviewQuestions: createInterviewQuestions("Компонентная декомпозиция", "Architecture"),
    remember:
      'Декомпозиция должна следовать ответственности, а не только размеру файла.',
  },
  {
    id: 'knowledge-components-q323',
    moduleId: 'components',
    questionId: 323,
    title: 'Dumb и smart components',
    category: 'Architecture',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Dumb-компоненты отвечают в основном за отображение и получают данные через props. Smart-компоненты координируют состояние, загрузку данных, stores, composables и сценарии. Это условное разделение, а не встроенная возможность Vue.',
    whenToUse:
      'Разделение полезно, когда UI-компоненты хочется переиспользовать независимо от источника данных. Smart-компонент может подготовить данные и передать их вниз. Dumb-компонент остаётся простым и легко тестируется.',
    howItWorks:
      'Container или smart-компонент получает данные и handlers. Presentational или dumb-компонент отображает props и отправляет events. Такая схема снижает связность между визуальным слоем и источниками данных.',
    whyImportant:
      'На интервью это помогает обсудить масштабирование UI. Важно не превращать терминологию в догму: маленький компонент может быть смешанным, если так проще и понятнее.',
    codeExample: {
      language: 'vue',
      filename: 'UserListContainer.vue',
      code: `<template>
  <UserList :users="users" @select="selectUser" />
</template>`,
    },
    commonMistake:
      'Ошибка — заставлять каждый компонент строго быть только dumb или smart. Архитектурные паттерны должны помогать, а не усложнять простые случаи.',
    interviewQuestions: createInterviewQuestions("Dumb и smart components", "Architecture"),
    remember:
      'Dumb отображает, smart координирует данные и сценарии.',
  },
  {
    id: 'knowledge-components-q324',
    moduleId: 'components',
    questionId: 324,
    title: 'Controlled и uncontrolled components',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Controlled component получает значение извне и сообщает изменения наружу. Uncontrolled component хранит важное состояние внутри себя. Оба подхода допустимы, но решают разные задачи.',
    whenToUse:
      'Controlled-подход хорош для форм, фильтров и компонентов, где родитель должен знать актуальное значение. Uncontrolled-подход удобен для автономных UI-деталей, например локального раскрытия секции. Иногда компонент поддерживает оба режима.',
    howItWorks:
      'Controlled-компонент принимает value/modelValue и отправляет update event. Uncontrolled-компонент создаёт локальный ref и управляет им сам. Гибридный API требует аккуратного определения источника истины.',
    whyImportant:
      'Тема показывает зрелое понимание компонентного дизайна. На интервью важно объяснить, где должен жить state и кто отвечает за изменение. Ошибка в выборе подхода часто приводит к рассинхронизации UI.',
    codeExample: {
      language: 'vue',
      filename: 'ControlledSwitch.vue',
      code: `<script setup lang="ts">
defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
</script>`,
    },
    commonMistake:
      'Ошибка — одновременно менять локальное состояние и внешний modelValue без чёткого правила синхронизации. Это создаёт две конкурирующие версии истины.',
    interviewQuestions: createInterviewQuestions("Controlled и uncontrolled components", "Architecture"),
    remember:
      'Controlled-компонент получает state извне, uncontrolled хранит его внутри.',
  },
  {
    id: 'knowledge-components-q325',
    moduleId: 'components',
    questionId: 325,
    title: 'Мутация props',
    category: 'Anti-patterns',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Мутация props — изменение входных данных прямо внутри дочернего компонента. Во Vue props рассматриваются как readonly-связь от родителя к ребёнку. Изменение должно происходить через родителя или локальную копию.',
    whenToUse:
      'Напрямую мутировать props не стоит. Если нужно редактировать форму, можно создать локальный state на основе prop и отправить результат событием. Если значение controlled, компонент отправляет update event.',
    howItWorks:
      'Родитель передаёт prop, а дочерний компонент читает его. При изменении в родителе prop обновляется. Если дочерний компонент пытается изменить prop напрямую, Vue предупреждает и архитектура становится непредсказуемой.',
    whyImportant:
      'Это один из самых частых вопросов по Vue. На интервью важно объяснить не только запрет, но и правильную альтернативу: emit, локальная копия или v-model контракт.',
    codeExample: {
      language: 'vue',
      filename: 'EditableTitle.vue',
      code: `<script setup lang="ts">
const props = defineProps<{ title: string }>()
const emit = defineEmits<{ 'update:title': [value: string] }>()
</script>`,
    },
    commonMistake:
      'Ошибка — писать `props.title = newTitle`. Это ломает направление данных. Лучше отправить событие и позволить родителю обновить значение.',
    interviewQuestions: createInterviewQuestions("Мутация props", "Anti-patterns"),
    remember:
      'Props читаются в дочернем компоненте, а изменения идут через события или локальный state.',
  },
  {
    id: 'knowledge-components-q326',
    moduleId: 'components',
    questionId: 326,
    title: 'key для компонентов',
    category: 'Rendering',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'key — подсказка Vue для сопоставления VNode и экземпляров компонентов при обновлении. Особенно важен в списках и при намеренном пересоздании компонента. Стабильный key помогает сохранить корректное состояние.',
    whenToUse:
      'key обязателен для v-for с компонентами и полезен там, где нужно контролировать identity элемента. Иногда key меняют специально, чтобы сбросить состояние компонента. Для статичной одиночной разметки key обычно не нужен.',
    howItWorks:
      'Во время patch Vue сравнивает старое и новое дерево. key помогает понять, какой элемент был перемещён, обновлён или удалён. Нестабильный key вроде index может привести к неправильному сохранению локального состояния.',
    whyImportant:
      'На интервью key связывают с virtual DOM и локальным состоянием компонентов. Хороший ответ объясняет, почему index плох для изменяемых списков, особенно с input и stateful components.',
    codeExample: {
      language: 'vue',
      filename: 'TodoList.vue',
      code: `<template>
  <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
</template>`,
    },
    commonMistake:
      'Ошибка — использовать index как key в списке, где элементы добавляются, удаляются или сортируются. Это может смешать состояние между строками.',
    interviewQuestions: createInterviewQuestions("key для компонентов", "Rendering"),
    remember:
      'key должен отражать стабильную identity элемента или компонента.',
  },
  {
    id: 'knowledge-components-q327',
    moduleId: 'components',
    questionId: 327,
    title: 'Переиспользование компонентов',
    category: 'Component API',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Переиспользуемый компонент имеет понятную ответственность и стабильный API. Он не зависит от конкретного родителя и не прячет важные зависимости внутри. Его можно использовать в нескольких местах без переписывания.',
    whenToUse:
      'Переиспользование оправдано, когда UI-паттерн повторяется или должен быть единообразным. Базовые кнопки, карточки, поля, бейджи и layout-элементы часто становятся shared components. Уникальные feature-части не всегда стоит делать слишком универсальными.',
    howItWorks:
      'Компонент принимает данные через props, сообщает действия через emits и расширяется через slots. Внутри он скрывает детали реализации, но не скрывает важное поведение. Типы помогают закрепить контракт.',
    whyImportant:
      'Плохой reusable component быстро превращается в набор десятков флагов. На интервью важно объяснить баланс: достаточно гибкости, но без превращения компонента в конструктор всего на свете.',
    codeExample: {
      language: 'vue',
      filename: 'BaseCard.vue',
      code: `<template>
  <section class="card">
    <slot />
  </section>
</template>`,
    },
    commonMistake:
      'Ошибка — добавлять prop под каждый частный случай. Иногда лучше сделать slot, отдельный компонент или оставить feature-реализацию локальной.',
    interviewQuestions: createInterviewQuestions("Переиспользование компонентов", "Component API"),
    remember:
      'Переиспользуемость строится на ясной ответственности и стабильном API.',
  },
  {
    id: 'knowledge-components-q328',
    moduleId: 'components',
    questionId: 328,
    title: 'Fallback content в slots',
    category: 'Slots',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'Fallback content — содержимое slot по умолчанию. Оно отображается, если родитель не передал контент. Это делает компонент устойчивее и уменьшает обязательную настройку.',
    whenToUse:
      'Fallback полезен для пустых состояний, стандартных подписей, базовых иконок и дефолтных действий. Он не должен скрывать критически важное отсутствие данных. Если контент обязателен, лучше явно описать это в API и документации.',
    howItWorks:
      'Внутри `<slot>` размещают fallback-разметку. Vue отрендерит её только при отсутствии соответствующего slot-контента от родителя. Для named slot fallback задаётся аналогично.',
    whyImportant:
      'Fallback улучшает UX компонентов и снижает количество boilerplate. На интервью это показывает понимание не только передачи slot, но и поведения по умолчанию.',
    codeExample: {
      language: 'vue',
      filename: 'EmptyState.vue',
      code: `<template>
  <slot>Нет данных для отображения</slot>
</template>`,
    },
    commonMistake:
      'Ошибка — делать fallback слишком специфичным. Переиспользуемый компонент должен иметь нейтральное поведение по умолчанию.',
    interviewQuestions: createInterviewQuestions("Fallback content в slots", "Slots"),
    remember:
      'Fallback показывается, когда slot-контент не передан.',
  },
  {
    id: 'knowledge-components-q329',
    moduleId: 'components',
    questionId: 329,
    title: 'Props или slots',
    category: 'Component API',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Props и slots решают разные задачи в API компонента. Props передают данные и настройки. Slots передают разметку и позволяют родителю контролировать отображение части компонента.',
    whenToUse:
      'Prop подходит для label, value, disabled, size, variant и других структурированных параметров. Slot подходит для произвольного контента: кнопок, rich text, иконок, кастомной строки таблицы. Если компонент должен управлять логикой, но дать родителю рендер, поможет scoped slot.',
    howItWorks:
      'Props объявляются через defineProps и читаются внутри компонента. Slots объявляются в template через `<slot>`. Оба механизма можно сочетать: prop задаёт состояние, slot задаёт визуальное содержимое.',
    whyImportant:
      'На интервью этот выбор показывает понимание компонентного дизайна. Неправильный выбор приводит либо к слишком жёсткому компоненту, либо к слишком размытым границам.',
    codeExample: {
      language: 'vue',
      filename: 'CardShell.vue',
      code: `<template>
  <article>
    <h3>{{ title }}</h3>
    <slot />
  </article>
</template>`,
    },
    commonMistake:
      'Ошибка — передавать HTML-строки через prop вместо slot. Это хуже для безопасности, читаемости и композиции.',
    interviewQuestions: createInterviewQuestions("Props или slots", "Component API"),
    remember:
      'Props передают данные, slots передают разметку.',
  },
  {
    id: 'knowledge-components-q330',
    moduleId: 'components',
    questionId: 330,
    title: 'Границы компонентного API',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Граница компонентного API определяет, что компонент обещает внешнему коду. В неё входят props, emits, slots, exposed methods и attrs-поведение. Хороший API описывает смысл компонента, а не внутренние детали одного места использования.',
    whenToUse:
      'Думать о границах API нужно при создании переиспользуемых компонентов, компонентов дизайн-системы и крупных feature-блоков. Даже локальный компонент выигрывает от понятного контракта. Чем больше потребителей, тем важнее стабильность API.',
    howItWorks:
      'Компонент скрывает внутреннюю реализацию и предоставляет ограниченный набор точек взаимодействия. Родитель не должен знать внутренние refs, DOM-структуру и частные имена переменных. Изменения внутри не должны ломать потребителей, если публичный API сохранён.',
    whyImportant:
      'На интервью это отделяет знание синтаксиса от инженерного проектирования. Хороший компонент можно менять внутри без каскада правок по всему приложению. Это основа масштабируемого frontend-кода.',
    codeExample: {
      language: 'ts',
      filename: 'component-api.ts',
      code: `interface ButtonProps {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}`,
    },
    commonMistake:
      'Ошибка — добавлять props, которые повторяют внутренние переменные родителя или конкретный layout. Такой компонент становится одноразовым, хотя выглядит переиспользуемым.',
    interviewQuestions: createInterviewQuestions("Границы компонентного API", "Architecture"),
    remember:
      'Публичный API компонента должен выражать его ответственность, а не внутренности потребителя.',
  },
]
