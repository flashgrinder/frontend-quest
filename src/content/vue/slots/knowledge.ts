import type { ContentKnowledgeCard } from '../../../types/content'

const createInterviewQuestions = (title: string, category: string): string[] => [
  `Какие задачи решает ${title} в теме ${category} (Slots)?`,
  `Какие ограничения ${title} важно учитывать в контексте Slots?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

export const slotsKnowledgeCards: ContentKnowledgeCard[] = [
  {
    id: 'knowledge-slots-q501',
    moduleId: 'slots',
    questionId: 501,
    title: 'Slot во Vue',
    category: 'Slots',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Slot — точка расширения компонента, куда родитель передаёт разметку. Компонент задаёт оболочку и место вставки, а потребитель решает, что именно отрисовать. Это делает UI-компоненты гибкими без большого количества props.',
    whenToUse:
      'Slots используют, когда компоненту нужен произвольный контент: текст с форматированием, иконки, кнопки, вложенные компоненты. Если передаётся простое значение или настройка, prop обычно понятнее. Хороший API часто сочетает props для данных и slots для разметки.',
    howItWorks:
      'Дочерний компонент размещает `<slot />` в template. Родитель помещает контент между открывающим и закрывающим тегом компонента. Vue отрендерит этот контент в месте slot.',
    whyImportant:
      'Slots — основа композиции во Vue. На интервью важно объяснить разницу между передачей данных и передачей разметки. Это помогает проектировать карточки, модалки, layout и компоненты библиотек.',
    codeExample: {
      language: 'vue',
      filename: 'BasePanel.vue',
      code: `<template>
  <section class="panel">
    <slot />
  </section>
</template>`,
    },
    commonMistake:
      'Ошибка — передавать HTML строкой через prop вместо slot. Это хуже для безопасности, типизации и композиции компонентов.',
    interviewQuestions: createInterviewQuestions("Slot во Vue", "Slots"),
    remember:
      'Slot передаёт разметку от родителя в заранее заданное место дочернего компонента.',
  },
  {
    id: 'knowledge-slots-q502',
    moduleId: 'slots',
    questionId: 502,
    title: 'Default slot',
    category: 'Slots',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'Default slot — слот без имени. Он принимает основной контент компонента. Чаще всего именно default slot используется в карточках, панелях, кнопках-обёртках и layout-компонентах.',
    whenToUse:
      'Default slot подходит, когда у компонента есть одна основная область содержимого. Если областей несколько, лучше добавить named slots. Если компонент принимает только короткую строку, prop label может быть проще.',
    howItWorks:
      'В дочернем компоненте пишут `<slot />`. В родителе контент передают между тегами компонента. Если контента нет, slot остаётся пустым или показывает fallback.',
    whyImportant:
      'Default slot — самый простой способ понять композицию Vue-компонентов. Он показывает, как компонент может владеть оболочкой, но не владеть конкретным контентом.',
    codeExample: {
      language: 'vue',
      filename: 'BaseCard.vue',
      code: `<template>
  <article class="card">
    <slot />
  </article>
</template>`,
    },
    commonMistake:
      'Ошибка — создавать prop content для большого фрагмента разметки. Default slot читабельнее и лучше поддерживает вложенные компоненты.',
    interviewQuestions: createInterviewQuestions("Default slot", "Slots"),
    remember:
      'Default slot — основная безымянная область контента.',
  },
  {
    id: 'knowledge-slots-q503',
    moduleId: 'slots',
    questionId: 503,
    title: 'Named slots',
    category: 'Slots',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Named slots — именованные области для разных частей контента. Они позволяют компоненту явно разделить header, default, footer, actions или empty state. Это делает API компонента понятным для потребителя.',
    whenToUse:
      'Named slots полезны в модалках, карточках, таблицах, layout и form-field компонентах. Их стоит применять, когда есть несколько независимых областей разметки. Для одной области достаточно default slot.',
    howItWorks:
      'Дочерний компонент объявляет `<slot name="header" />`. Родитель передаёт контент через `<template #header>`. Default slot остаётся областью без имени.',
    whyImportant:
      'Named slots помогают проектировать компоненты с несколькими точками расширения. На интервью важно показать, что это лучше, чем десятки props для каждого куска HTML.',
    codeExample: {
      language: 'vue',
      filename: 'DashboardLayout.vue',
      code: `<template>
  <aside><slot name="sidebar" /></aside>
  <section><slot name="content" /></section>
  <footer><slot name="actions" /></footer>
</template>`,
    },
    commonMistake:
      'Ошибка — давать slots имена по внутренним деталям компонента. Лучше использовать смысловые имена областей: header, footer, actions.',
    interviewQuestions: createInterviewQuestions("Named slots", "Slots"),
    remember:
      'Named slots разделяют несколько областей контента в компоненте.',
  },
  {
    id: 'knowledge-slots-q504',
    moduleId: 'slots',
    questionId: 504,
    title: 'Scoped slots',
    category: 'Scoped Slots',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Scoped slot — слот, которому дочерний компонент передаёт данные через slot props. Родитель получает эти данные и решает, как их отрисовать. Это позволяет отделить логику от визуального представления.',
    whenToUse:
      'Scoped slots применяют в таблицах, списках, autocomplete, dropdown и headless-компонентах. Они хороши, когда компонент управляет данными или состоянием, но внешний код должен контролировать разметку. Для простого статичного контента scoped slot не нужен.',
    howItWorks:
      'Дочерний компонент пишет `<slot :item="item" />`. Родитель принимает данные через `#default="{ item }"`. Slot props доступны только внутри соответствующего slot template.',
    whyImportant:
      'Scoped slots часто проверяют на интервью, потому что они показывают понимание data flow и инкапсуляции. Это ключевой паттерн для гибких UI-компонентов.',
    codeExample: {
      language: 'vue',
      filename: 'DataList.vue',
      code: `<template>
  <slot v-for="item in items" :item="item" :key="item.id" />
</template>`,
    },
    commonMistake:
      'Ошибка — передавать через slot props слишком много внутреннего state. Публичный контекст должен быть минимальным и стабильным.',
    interviewQuestions: createInterviewQuestions("Scoped slots", "Scoped Slots"),
    remember:
      'Scoped slot передаёт данные из дочернего компонента в разметку родителя.',
  },
  {
    id: 'knowledge-slots-q505',
    moduleId: 'slots',
    questionId: 505,
    title: 'Fallback content',
    category: 'Slots',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'Fallback content — содержимое slot по умолчанию. Оно отображается, если родитель не передал контент. Это делает компонент устойчивее и уменьшает обязательную настройку.',
    whenToUse:
      'Fallback полезен для пустых состояний, стандартных подписей, дефолтных иконок и базовых CTA. Он не должен скрывать отсутствие критически важных данных. Если контент обязателен, это лучше явно документировать.',
    howItWorks:
      'Разметку fallback помещают внутрь тега `<slot>`. Vue покажет её только при отсутствии переданного slot-контента. Для named slots fallback задаётся тем же способом.',
    whyImportant:
      'Fallback улучшает UX и API компонентов. На интервью стоит объяснить, что компонент может иметь безопасное поведение по умолчанию без дополнительных props.',
    codeExample: {
      language: 'vue',
      filename: 'EmptyState.vue',
      code: `<template>
  <slot name="empty">
    <p>Список пока пуст</p>
  </slot>
</template>`,
    },
    commonMistake:
      'Ошибка — делать fallback слишком специфичным. Переиспользуемый компонент должен иметь нейтральное значение по умолчанию.',
    interviewQuestions: createInterviewQuestions("Fallback content", "Slots"),
    remember:
      'Fallback отображается, когда slot-контент не передан.',
  },
  {
    id: 'knowledge-slots-q506',
    moduleId: 'slots',
    questionId: 506,
    title: 'Slot props',
    category: 'Scoped Slots',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Slot props — данные, которые дочерний компонент передаёт в slot. Они позволяют родителю кастомизировать рендер на основе внутреннего контекста дочернего компонента. Это не обычные component props, а параметры slot-функции.',
    whenToUse:
      'Slot props полезны в renderless/headless сценариях, таблицах, списках и сложных виджетах. Их стоит использовать, когда родителю нужны данные для кастомного отображения. Для передачи обычных входных параметров компоненту подходят props.',
    howItWorks:
      'Дочерний компонент передаёт данные как атрибуты slot: `<slot :row="row" :index="index" />`. Родитель принимает их через destructuring в slot template. Значения доступны только внутри этого template.',
    whyImportant:
      'Slot props дают гибкость без раскрытия всей внутренней реализации. На интервью важно уметь объяснить, что именно становится публичным API.',
    codeExample: {
      language: 'vue',
      filename: 'OptionProvider.vue',
      code: `<template>
  <slot :selected="selected" :select="select" />
</template>`,
    },
    commonMistake:
      'Ошибка — мутировать переданный объект из slot props без явного API. Лучше передать callback или emit событие.',
    interviewQuestions: createInterviewQuestions("Slot props", "Scoped Slots"),
    remember:
      'Slot props — публичный контекст scoped slot.',
  },
  {
    id: 'knowledge-slots-q507',
    moduleId: 'slots',
    questionId: 507,
    title: 'useSlots',
    category: 'Composition API',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'useSlots — Composition API функция для доступа к slots внутри setup-кода. Она возвращает объект slot-функций. Это полезно, когда script должен знать, передан ли slot, или нужно пробросить slots дальше.',
    whenToUse:
      'useSlots применяют для условной обёртки, wrapper-компонентов, аналитики структуры или slot forwarding. Если slot используется только в template, useSlots не нужен. Чем меньше логики вокруг slots, тем проще компонент.',
    howItWorks:
      'В setup вызывают `const slots = useSlots()`. Наличие slot можно проверить через `slots.header`. При вызове slot-функции возвращаются VNodes, поэтому использовать её нужно аккуратно.',
    whyImportant:
      'useSlots показывает, что slots — это не магический HTML, а функции рендера. На интервью это помогает объяснить производительность и условный UI.',
    codeExample: {
      language: 'vue',
      filename: 'PanelShell.vue',
      code: `<script setup lang="ts">
const slots = useSlots()
const hasHeader = computed(() => Boolean(slots.header))
</script>`,
    },
    commonMistake:
      'Ошибка — вызывать slot-функции в неподходящем месте и усложнять рендер. Часто достаточно проверки наличия slot или обычного template.',
    interviewQuestions: createInterviewQuestions("useSlots", "Composition API"),
    remember:
      'useSlots нужен, когда slots должны участвовать в setup-логике.',
  },
  {
    id: 'knowledge-slots-q508',
    moduleId: 'slots',
    questionId: 508,
    title: 'Динамические имена слотов',
    category: 'Named Slots',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Динамические имена слотов позволяют выбрать имя slot через выражение. Это полезно, когда API строится по конфигурации, например в таблицах или layout-генераторах. Синтаксис похож на динамические аргументы директив.',
    whenToUse:
      'Их используют редко, когда набор slot-областей зависит от данных или схемы. В обычных компонентах статические named slots читаются лучше. Динамика оправдана, если она снижает дублирование в сложном API.',
    howItWorks:
      'Родитель может написать `<template #[slotName]>`. Vue вычислит имя slot и передаст контент в соответствующую область. Имя должно быть предсказуемым и задокументированным.',
    whyImportant:
      'На интервью динамические slots показывают знание продвинутого template-синтаксиса. Но важнее объяснить, когда они оправданы, а когда усложняют API.',
    codeExample: {
      language: 'vue',
      filename: 'DynamicSlotConsumer.vue',
      code: `<template>
  <DataTable>
    <template #[columnSlot]="{ row }">
      {{ row.name }}
    </template>
  </DataTable>
</template>`,
    },
    commonMistake:
      'Ошибка — использовать динамические имена там, где достаточно обычного named slot. Это делает template сложнее без пользы.',
    interviewQuestions: createInterviewQuestions("Динамические имена слотов", "Named Slots"),
    remember:
      'Динамический slot name выбирает область slot через выражение.',
  },
  {
    id: 'knowledge-slots-q509',
    moduleId: 'slots',
    questionId: 509,
    title: 'Slot forwarding',
    category: 'Wrapper Components',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Slot forwarding — проброс slots через компонент-обёртку во внутренний компонент. Он сохраняет точки расширения, даже если между потребителем и базовым компонентом появляется wrapper. Это частая задача в UI-библиотеках.',
    whenToUse:
      'Forwarding нужен, когда wrapper добавляет стили, логику или интеграцию, но не должен ограничивать кастомизацию внутреннего компонента. Если wrapper намеренно скрывает часть API, пробрасывать все slots не обязательно. Важно явно выбрать контракт.',
    howItWorks:
      'Wrapper получает slots от родителя и передаёт их дальше через template. Для scoped slots нужно сохранить slot props, чтобы потребитель получил тот же контекст. Иногда используют динамический перебор slots.',
    whyImportant:
      'Slot forwarding помогает строить расширяемые компоненты без потери возможностей. На интервью это хороший пример проектирования обёрток и публичного API.',
    codeExample: {
      language: 'vue',
      filename: 'TableWrapper.vue',
      code: `<template>
  <BaseTable>
    <template #cell="slotProps">
      <slot name="cell" v-bind="slotProps" />
    </template>
  </BaseTable>
</template>`,
    },
    commonMistake:
      'Ошибка — забыть пробросить slot props. В результате потребитель получает область, но теряет данные для кастомного рендера.',
    interviewQuestions: createInterviewQuestions("Slot forwarding", "Wrapper Components"),
    remember:
      'Slot forwarding сохраняет slot API при создании wrapper-компонента.',
  },
  {
    id: 'knowledge-slots-q510',
    moduleId: 'slots',
    questionId: 510,
    title: 'Layout components и slots',
    category: 'Architecture',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Layout-компонент задаёт структуру страницы или блока, но не обязан знать конкретное содержимое. Slots позволяют передать контент внутрь этой структуры. Такой компонент отвечает за расположение, отступы и области.',
    whenToUse:
      'Slots подходят для AppShell, PageLayout, ModalLayout, SplitPane, SidebarLayout и подобных компонентов. Props могут задавать настройки layout, например compact или variant. Контент лучше передавать через slots.',
    howItWorks:
      'Layout-компонент объявляет один или несколько slots. Родитель заполняет эти области страницами, панелями или действиями. Внутренняя структура остаётся централизованной.',
    whyImportant:
      'На интервью layout через slots показывает понимание композиции. Это чище, чем передавать весь контент строками или делать layout зависящим от конкретной страницы.',
    codeExample: {
      language: 'vue',
      filename: 'PageLayout.vue',
      code: `<template>
  <aside><slot name="sidebar" /></aside>
  <main><slot /></main>
</template>`,
    },
    commonMistake:
      'Ошибка — закладывать в layout знания о конкретной странице. Layout должен быть рамкой, а не владельцем бизнес-содержимого.',
    interviewQuestions: createInterviewQuestions("Layout components и slots", "Architecture"),
    remember:
      'Layout-компонент задаёт структуру, slots передают содержимое.',
  },
  {
    id: 'knowledge-slots-q511',
    moduleId: 'slots',
    questionId: 511,
    title: 'Renderless components',
    category: 'Renderless',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Renderless component инкапсулирует поведение, но почти не навязывает разметку. Он передаёт состояние и методы через scoped slot. Родитель получает полный контроль над визуальным представлением.',
    whenToUse:
      'Renderless-подход полезен для логики выбора, раскрытия, drag-and-drop, autocomplete и сложных интерактивных паттернов. Он оправдан, когда одно поведение нужно с разными UI. Для простого компонента такой подход может быть лишним.',
    howItWorks:
      'Компонент хранит state и actions, затем вызывает slot с нужным контекстом. Потребитель принимает slot props и строит HTML. Иногда composable может быть более простым вариантом, чем renderless component.',
    whyImportant:
      'На интервью renderless components показывают архитектурную гибкость. Важно уметь сравнить их с composables и headless components.',
    codeExample: {
      language: 'vue',
      filename: 'ToggleProvider.vue',
      code: `<template>
  <slot :open="open" :toggle="toggle" />
</template>`,
    },
    commonMistake:
      'Ошибка — использовать renderless component там, где обычный composable проще. Нужно выбирать форму переиспользования по задаче.',
    interviewQuestions: createInterviewQuestions("Renderless components", "Renderless"),
    remember:
      'Renderless component отдаёт поведение через scoped slot, не навязывая UI.',
  },
  {
    id: 'knowledge-slots-q512',
    moduleId: 'slots',
    questionId: 512,
    title: 'Headless components',
    category: 'Headless UI',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Headless component предоставляет поведение, state и accessibility-контракты без жёсткого визуального стиля. Он оставляет внешний вид потребителю. Slots часто используются как механизм передачи контекста наружу.',
    whenToUse:
      'Headless-подход полезен для dropdown, dialog, tabs, listbox и combobox, когда дизайн должен быть полностью кастомным. Он сложнее обычного UI-компонента и требует хорошей документации. Для простых визуальных блоков headless может быть избыточным.',
    howItWorks:
      'Компонент управляет состоянием, keyboard interaction и aria-атрибутами. Через slots или composables он отдаёт props и методы для рендера. Потребитель собирает нужную разметку.',
    whyImportant:
      'На интервью headless тема показывает понимание separation of concerns. Важно помнить, что headless не означает отсутствие ответственности: accessibility и state management остаются внутри.',
    codeExample: {
      language: 'vue',
      filename: 'HeadlessDropdown.vue',
      code: `<template>
  <slot :open="open" :toggle="toggle" :close="close" />
</template>`,
    },
    commonMistake:
      'Ошибка — отдавать headless API без типизации и документации. Потребитель должен понимать, какие slot props доступны и как ими пользоваться.',
    interviewQuestions: createInterviewQuestions("Headless components", "Headless UI"),
    remember:
      'Headless component отделяет поведение от визуального оформления.',
  },
  {
    id: 'knowledge-slots-q513',
    moduleId: 'slots',
    questionId: 513,
    title: 'Slots и props',
    category: 'Component API',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Props передают данные и настройки, slots передают разметку. Это два разных инструмента компонентного API. Хороший компонент выбирает каждый инструмент по смыслу, а не заменяет одним всё остальное.',
    whenToUse:
      'Props подходят для value, disabled, size, variant, item и других структурированных данных. Slots подходят для произвольного HTML, вложенных компонентов и кастомного рендера. Scoped slots помогают передать данные для кастомной разметки.',
    howItWorks:
      'Props объявляются через defineProps и читаются компонентом. Slots объявляются в template через `<slot>`. В родителе props передаются атрибутами, а slots — содержимым компонента или template-блоками.',
    whyImportant:
      'На интервью вопрос slots vs props проверяет способность проектировать API. Неправильный выбор ведёт к HTML-строкам в props или неоправданно сложным slot-контрактам.',
    codeExample: {
      language: 'vue',
      filename: 'CardTitle.vue',
      code: `<BaseCard title="Профиль">
  <UserDetails />
</BaseCard>`,
    },
    commonMistake:
      'Ошибка — передавать простые настройки через slots. Для boolean и enum значений typed props читаются лучше.',
    interviewQuestions: createInterviewQuestions("Slots и props", "Component API"),
    remember:
      'Props — данные, slots — разметка.',
  },
  {
    id: 'knowledge-slots-q514',
    moduleId: 'slots',
    questionId: 514,
    title: 'Когда slots лучше props',
    category: 'Component API',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Slots лучше props, когда нужно передать не значение, а структуру интерфейса. Это может быть форматированный текст, кнопка, иконка, ссылка или целый вложенный компонент. Slot сохраняет декларативную композицию.',
    whenToUse:
      'Используй slot для rich content, action areas, custom cells, empty states и layout областей. Prop лучше оставить для данных и настроек. Если компонент должен передать данные наружу для рендера, используется scoped slot.',
    howItWorks:
      'Родитель передаёт Vue-разметку, а дочерний компонент вставляет её в slot. В отличие от HTML-строки, разметка остаётся частью Vue template и может содержать компоненты, директивы и bindings.',
    whyImportant:
      'На интервью это показывает понимание безопасности и поддержки. Slots избегают небезопасного HTML и большого числа props под частные визуальные случаи.',
    codeExample: {
      language: 'vue',
      filename: 'AlertBox.vue',
      code: `<AlertBox>
  Пароль устарел. <RouterLink to="/settings">Обновить</RouterLink>
</AlertBox>`,
    },
    commonMistake:
      'Ошибка — создавать prop вроде footerButtonText, footerButtonIcon и footerButtonHandler вместо одного actions slot.',
    interviewQuestions: createInterviewQuestions("Когда slots лучше props", "Component API"),
    remember:
      'Slot выбирают, когда потребитель должен передать UI-фрагмент.',
  },
  {
    id: 'knowledge-slots-q515',
    moduleId: 'slots',
    questionId: 515,
    title: 'Scoped slots и инкапсуляция',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Scoped slots помогают сохранить инкапсуляцию, потому что компонент сам выбирает, какой контекст отдать наружу. Потребитель получает только публичные slot props. Внутренние refs, watchers и приватный state остаются скрытыми.',
    whenToUse:
      'Этот подход нужен, когда внешний код должен кастомизировать отображение, но не управлять всей внутренней логикой. Таблица может отдать row и column, dropdown — open и select, listbox — option и active. Контракт должен быть минимальным.',
    howItWorks:
      'Дочерний компонент передаёт в slot ограниченный набор данных и функций. Родитель рендерит UI, но вызывает только предоставленный API. Так сохраняется контроль над инвариантами компонента.',
    whyImportant:
      'На интервью это показывает зрелое понимание API-дизайна. Инкапсуляция не означает отсутствие расширяемости; она означает управляемую расширяемость.',
    codeExample: {
      language: 'vue',
      filename: 'SelectableList.vue',
      code: `<slot
  :item="item"
  :selected="item.id === selectedId"
  :select="() => select(item.id)"
/>`,
    },
    commonMistake:
      'Ошибка — отдавать наружу весь внутренний объект состояния. Потребитель начинает зависеть от деталей реализации.',
    interviewQuestions: createInterviewQuestions("Scoped slots и инкапсуляция", "Architecture"),
    remember:
      'Scoped slot должен раскрывать только стабильный публичный контекст.',
  },
  {
    id: 'knowledge-slots-q516',
    moduleId: 'slots',
    questionId: 516,
    title: 'Типизация slots',
    category: 'TypeScript',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Типизация slots описывает имена slots и структуру slot props. Она улучшает автодополнение и помогает потребителю понять контракт компонента. Для script setup используется defineSlots.',
    whenToUse:
      'Типизировать slots особенно важно в reusable компонентах, UI-kit и таблицах со scoped slots. Если slot props сложные, типы становятся частью документации. Для простого default slot типизация может быть менее критичной.',
    howItWorks:
      'defineSlots принимает generic-описание функций slots. Параметр функции описывает slot props, а возвращаемое значение обычно не используется явно. TypeScript помогает проверить доступные props в template.',
    whyImportant:
      'На интервью типизация slots показывает продвинутую работу с Vue и TypeScript. Это снижает риск ошибок в component library.',
    codeExample: {
      language: 'vue',
      filename: 'DataTable.vue',
      code: `<script setup lang="ts">
defineSlots<{
  cell(props: { value: string; rowId: string }): unknown
}>()
</script>`,
    },
    commonMistake:
      'Ошибка — оставлять slot props неописанными в сложном компоненте. Потребителю приходится угадывать структуру данных.',
    interviewQuestions: createInterviewQuestions("Типизация slots", "TypeScript"),
    remember:
      'Типизированные slots делают slot API явным и безопасным.',
  },
  {
    id: 'knowledge-slots-q517',
    moduleId: 'slots',
    questionId: 517,
    title: 'defineSlots',
    category: 'Script Setup',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'defineSlots — compiler macro для типизации slots в `<script setup>`. Он не создаёт slots на runtime, а описывает их форму для TypeScript. Это часть публичного API компонента.',
    whenToUse:
      'defineSlots используют, когда компонент предоставляет named или scoped slots и важно описать их контракт. В таблицах, renderless-компонентах и библиотеках это особенно полезно. Для простых компонентов можно ограничиться документацией.',
    howItWorks:
      'Макрос вызывается на верхнем уровне script setup. В generic-типе описываются функции slots. Имена функций соответствуют именам slots, а параметры — slot props.',
    whyImportant:
      'На интервью важно понимать, что defineSlots похож по природе на defineProps и defineEmits: это compile-time API. Он улучшает DX, но не заменяет проектирование понятного slot-контракта.',
    codeExample: {
      language: 'vue',
      filename: 'UserList.vue',
      code: `<script setup lang="ts">
defineSlots<{
  default(props: { user: { id: string; name: string } }): unknown
  empty(): unknown
}>()
</script>`,
    },
    commonMistake:
      'Ошибка — ожидать runtime validation от defineSlots. Он помогает TypeScript, но не проверяет внешний HTML во время выполнения.',
    interviewQuestions: createInterviewQuestions("defineSlots", "Script Setup"),
    remember:
      'defineSlots типизирует slot API в script setup.',
  },
  {
    id: 'knowledge-slots-q518',
    moduleId: 'slots',
    questionId: 518,
    title: 'Ошибки передачи данных через slots',
    category: 'Anti-patterns',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Ошибка передачи данных через slots возникает, когда slots начинают использовать как замену props или store. Slot предназначен для разметки и кастомного рендера, а не для всего обмена данными. Это может сделать API трудно читаемым.',
    whenToUse:
      'Если нужно передать конфигурацию, значение или флаг, используй prop. Если нужно передать HTML или кастомный renderer, используй slot. Если данные нужны многим независимым областям, возможно нужен store или provide/inject.',
    howItWorks:
      'Slot-контент компилируется в родительском scope, но вставляется в дочерний компонент. Из-за этого легко спутать владельца данных. Нужно явно понимать, кто хранит state и кто только рендерит.',
    whyImportant:
      'На интервью эта тема показывает способность выбирать правильный канал коммуникации. Slots мощные, но не должны превращаться в скрытый data bus.',
    codeExample: {
      language: 'vue',
      filename: 'BadApiExample.vue',
      code: `<!-- Лучше prop: :disabled="isDisabled" -->
<BaseButton>
  {{ isDisabled }}
</BaseButton>`,
    },
    commonMistake:
      'Ошибка — передавать обычные boolean и id через slot-контент. Это ухудшает типизацию и ясность API.',
    interviewQuestions: createInterviewQuestions("Ошибки передачи данных через slots", "Anti-patterns"),
    remember:
      'Slots не заменяют props для обычных данных.',
  },
  {
    id: 'knowledge-slots-q519',
    moduleId: 'slots',
    questionId: 519,
    title: 'Производительность slots',
    category: 'Performance',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Slots обычно безопасны с точки зрения производительности, но slot-контент всё равно участвует в рендере. Если slot содержит тяжёлые вычисления, большие списки или много компонентов, это влияет на обновления. Проблема чаще в содержимом, а не в самом механизме slots.',
    whenToUse:
      'Оптимизация нужна в больших таблицах, списках, виртуализированных интерфейсах и часто обновляемых scoped slots. Для обычных карточек и модалок думать о micro-optimization не нужно. Сначала измеряют, потом оптимизируют.',
    howItWorks:
      'Slots представлены функциями, которые возвращают VNodes. При обновлениях Vue вызывает нужные slot-функции и патчит результат. Стабильные props, key и упрощение slot-контента помогают снизить лишнюю работу.',
    whyImportant:
      'На интервью важно избегать мифов вроде "slots всегда медленные". Зрелый ответ говорит о конкретном контексте: размер дерева, частота обновлений, тяжесть содержимого.',
    codeExample: {
      language: 'vue',
      filename: 'LargeTable.vue',
      code: `<DataTable :rows="rows">
  <template #cell="{ value }">
    <CellValue :value="value" />
  </template>
</DataTable>`,
    },
    commonMistake:
      'Ошибка — выполнять тяжёлые вычисления прямо в slot template для каждой строки таблицы. Лучше подготовить данные заранее или использовать computed.',
    interviewQuestions: createInterviewQuestions("Производительность slots", "Performance"),
    remember:
      'Производительность зависит от slot-контента и частоты обновлений.',
  },
  {
    id: 'knowledge-slots-q520',
    moduleId: 'slots',
    questionId: 520,
    title: 'Slots в компонентных библиотеках',
    category: 'Component Libraries',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'В компонентных библиотеках slots являются точками расширения. Они позволяют потребителю менять части UI без форка компонента. Хороший slot API должен быть стабильным, типизированным и задокументированным.',
    whenToUse:
      'Slots нужны в таблицах, карточках, модалках, dropdown, form fields и layout-компонентах. Они особенно полезны, когда библиотека не может заранее знать весь будущий контент. Props при этом остаются для структурированных настроек.',
    howItWorks:
      'Компонент библиотеки объявляет named и scoped slots. Потребитель передаёт разметку и получает slot props, если нужны данные. Документация должна описывать имена slots и структуру props.',
    whyImportant:
      'На интервью это показывает мышление на уровне API продукта. Компонентная библиотека живёт дольше одного экрана, поэтому публичные slots нельзя менять хаотично.',
    codeExample: {
      language: 'vue',
      filename: 'BaseSelect.vue',
      code: `<slot name="option" :option="option">
  {{ option.label }}
</slot>`,
    },
    commonMistake:
      'Ошибка — добавлять slots без ясного сценария. Лишние точки расширения усложняют API так же, как лишние props.',
    interviewQuestions: createInterviewQuestions("Slots в компонентных библиотеках", "Component Libraries"),
    remember:
      'Slots в библиотеке — это публичный API, а не внутренняя деталь.',
  },
  {
    id: 'knowledge-slots-q521',
    moduleId: 'slots',
    questionId: 521,
    title: 'Slots в таблицах',
    category: 'Tables',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Таблицы часто используют scoped slots для кастомного рендера ячеек, строк, заголовков и пустых состояний. Таблица управляет данными и структурой, а потребитель управляет отображением конкретных областей. Это баланс между готовым компонентом и гибкостью.',
    whenToUse:
      'Scoped slots полезны, когда нужно отрисовать статус, действия, форматированную дату, ссылку или сложную ячейку. Если все ячейки простые, достаточно columns config. Чем сложнее slot API, тем важнее типизация.',
    howItWorks:
      'Компонент таблицы передаёт в slot row, column, value и index. Потребитель принимает эти данные и возвращает разметку. Для разных колонок часто используют named slots вроде `cell.status` или динамические slot names.',
    whyImportant:
      'На интервью таблицы — классический пример scoped slots. Хороший ответ показывает, как не смешивать data management и кастомную визуализацию.',
    codeExample: {
      language: 'vue',
      filename: 'UsersTable.vue',
      code: `<DataTable :rows="users">
  <template #cell.status="{ value }">
    <StatusBadge :status="value" />
  </template>
</DataTable>`,
    },
    commonMistake:
      'Ошибка — передавать HTML-строку в конфигурации колонки. Scoped slot безопаснее, типизируемее и лучше работает с компонентами.',
    interviewQuestions: createInterviewQuestions("Slots в таблицах", "Tables"),
    remember:
      'Scoped slots дают таблице кастомный рендер без потери структуры.',
  },
  {
    id: 'knowledge-slots-q522',
    moduleId: 'slots',
    questionId: 522,
    title: 'Slots в модалках',
    category: 'Modals',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Модалка обычно имеет несколько областей: заголовок, содержимое и действия. Named slots позволяют явно передать каждую область. Это делает модалку универсальной без множества props под каждую кнопку.',
    whenToUse:
      'Slots подходят, когда действия или содержимое модалки различаются между сценариями. Prop title может быть удобен для простого заголовка, но header slot лучше для сложной разметки. Footer/actions slot нужен для кастомных кнопок.',
    howItWorks:
      'Компонент модалки размещает slots в нужных областях. Родитель передаёт `#header`, default content и `#footer` или `#actions`. Поведение открытия лучше управлять через props/events или v-model.',
    whyImportant:
      'На интервью модалка — понятный пример разделения layout и контента. Slots помогают избежать компонента с огромным числом props.',
    codeExample: {
      language: 'vue',
      filename: 'ConfirmModalUsage.vue',
      code: `<BaseModal>
  <template #header>Удалить запись?</template>
  Это действие нельзя отменить.
  <template #footer><button>Удалить</button></template>
</BaseModal>`,
    },
    commonMistake:
      'Ошибка — делать отдельный prop для текста каждой кнопки и каждого элемента footer. Actions slot обычно гибче.',
    interviewQuestions: createInterviewQuestions("Slots в модалках", "Modals"),
    remember:
      'В модалках slots естественно разделяют header, body и actions.',
  },
  {
    id: 'knowledge-slots-q523',
    moduleId: 'slots',
    questionId: 523,
    title: 'Slots в карточках',
    category: 'Cards',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Карточка — контейнерный компонент, который часто получает контент через slots. Она задаёт рамку, отступы и визуальный стиль, но не обязана знать всё содержимое. Named slots могут выделить header, media и actions.',
    whenToUse:
      'Slots в карточках нужны для dashboard widgets, product cards, profile cards и информационных панелей. Если карточка всегда отображает одну строгую сущность, props могут быть достаточны. Для универсальной карточки slots гибче.',
    howItWorks:
      'BaseCard объявляет default slot для основного контента. Дополнительные области можно сделать через named slots. Props остаются для состояний вроде interactive, disabled или variant.',
    whyImportant:
      'На интервью карточка помогает объяснить slots vs props. Контейнерный UI почти всегда выигрывает от slots, потому что содержимое меняется чаще оболочки.',
    codeExample: {
      language: 'vue',
      filename: 'BaseCard.vue',
      code: `<template>
  <article class="card">
    <slot name="header" />
    <slot />
    <slot name="actions" />
  </article>
</template>`,
    },
    commonMistake:
      'Ошибка — делать универсальную карточку с props для всех возможных текстов, кнопок и иконок. Это быстро превращается в неподдерживаемый API.',
    interviewQuestions: createInterviewQuestions("Slots в карточках", "Cards"),
    remember:
      'Карточка задаёт оболочку, а slots передают содержимое.',
  },
  {
    id: 'knowledge-slots-q524',
    moduleId: 'slots',
    questionId: 524,
    title: 'Slots в формах',
    category: 'Forms',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'В form-компонентах slots помогают кастомизировать label, helper, error, prefix, suffix и actions. Это особенно полезно для field wrapper, где сама структура повторяется, а содержимое меняется. Slots делают форму гибкой без HTML-строк.',
    whenToUse:
      'Slots нужны, если helper text может содержать ссылку, error — список, а suffix — кнопку или иконку. Простые значения можно передавать props. Важно не сломать доступность: label и aria-связи должны оставаться корректными.',
    howItWorks:
      'Field-компонент задаёт структуру label/input/helper/error. Родитель передаёт конкретное содержимое через slots. Если slot не передан, можно использовать fallback или prop.',
    whyImportant:
      'Формы требуют гибкости и доступности. На интервью хороший ответ учитывает не только slots, но и то, куда попадёт label, id и aria-describedby.',
    codeExample: {
      language: 'vue',
      filename: 'BaseField.vue',
      code: `<template>
  <label><slot name="label" /></label>
  <slot />
  <p><slot name="helper" /></p>
</template>`,
    },
    commonMistake:
      'Ошибка — передать сложный helper через HTML-строку. Slot безопаснее и лучше работает с компонентами ссылок.',
    interviewQuestions: createInterviewQuestions("Slots в формах", "Forms"),
    remember:
      'В form-компонентах slots расширяют UI, но доступность должна оставаться явной.',
  },
  {
    id: 'knowledge-slots-q525',
    moduleId: 'slots',
    questionId: 525,
    title: 'Wrapper components и slots',
    category: 'Wrapper Components',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Wrapper-компонент оборачивает другой компонент, добавляя стиль, defaults, интеграцию или ограничения. Если внутренний компонент имеет slots, wrapper должен осознанно решить, какие slots пробросить наружу. Это часть публичного контракта wrapper.',
    whenToUse:
      'Проброс slots нужен, когда потребитель wrapper должен сохранить гибкость внутреннего компонента. Иногда wrapper намеренно скрывает часть API, чтобы упростить использование. Важно не потерять критичные области вроде option, cell или actions.',
    howItWorks:
      'Wrapper объявляет slot с тем же именем и передаёт slot props во внутренний компонент. Для нескольких slots можно использовать повторяющийся pattern. Нужно проверять, что типы и имена совпадают с обещанным API.',
    whyImportant:
      'На интервью это показывает понимание component composition. Обёртка не должна случайно ломать расширяемость компонента, который она использует.',
    codeExample: {
      language: 'vue',
      filename: 'AppSelect.vue',
      code: `<BaseSelect>
  <template #option="slotProps">
    <slot name="option" v-bind="slotProps" />
  </template>
</BaseSelect>`,
    },
    commonMistake:
      'Ошибка — пробросить slot без `v-bind="slotProps"`. Тогда внешний потребитель потеряет данные scoped slot.',
    interviewQuestions: createInterviewQuestions("Wrapper components и slots", "Wrapper Components"),
    remember:
      'Wrapper должен явно сохранять или ограничивать slot API.',
  },
  {
    id: 'knowledge-slots-q526',
    moduleId: 'slots',
    questionId: 526,
    title: 'Именование slots',
    category: 'Component API',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'Имена slots — часть публичного API компонента. Они должны описывать область или назначение контента. Хорошие имена помогают использовать компонент без чтения внутренней реализации.',
    whenToUse:
      'Используй имена header, footer, actions, item, cell, empty, icon, prefix, suffix, если они отражают реальные области. Не стоит называть slots по внутренним ref или CSS-классам. Имя должно пережить внутренний рефакторинг.',
    howItWorks:
      'Дочерний компонент объявляет slot name. Родитель использует `#name`. Переименование slot является breaking change для потребителей компонента.',
    whyImportant:
      'На интервью именование показывает внимание к API-дизайну. Slots, как props и emits, нуждаются в стабильной семантике.',
    codeExample: {
      language: 'vue',
      filename: 'SearchField.vue',
      code: `<template>
  <slot name="prefix" />
  <input />
  <slot name="suffix" />
</template>`,
    },
    commonMistake:
      'Ошибка — использовать случайные сокращения. Короткое имя не лучше, если оно хуже объясняет назначение.',
    interviewQuestions: createInterviewQuestions("Именование slots", "Component API"),
    remember:
      'Slot name должен описывать смысл области контента.',
  },
  {
    id: 'knowledge-slots-q527',
    moduleId: 'slots',
    questionId: 527,
    title: 'Мутации через scoped slots',
    category: 'Anti-patterns',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Мутация через scoped slot происходит, когда родитель меняет объект, полученный как slot prop. Это опасно, потому что slot выглядит как рендер API, но внезапно становится каналом изменения данных. Источник изменений становится менее очевидным.',
    whenToUse:
      'Если slot-контент должен инициировать изменение, лучше передать callback в slot props или отправить событие. Если данные должны быть readonly, стоит передавать подготовленное значение без mutable-ссылки. Для сложных сценариев нужен явный контракт.',
    howItWorks:
      'Slot props могут содержать ссылки на реальные объекты. Vue не делает глубокую копию. Если потребитель мутирует объект, он может изменить состояние владельца данных напрямую.',
    whyImportant:
      'На интервью это показывает понимание ссылок и инкапсуляции. Scoped slot не должен превращаться в неявный доступ к внутреннему state.',
    codeExample: {
      language: 'vue',
      filename: 'SafeRowSlot.vue',
      code: `<slot
  :row="readonlyRow"
  :update-row="updateRow"
/>`,
    },
    commonMistake:
      'Ошибка — считать slot props безопасной копией. Если передан объект, он остаётся ссылкой.',
    interviewQuestions: createInterviewQuestions("Мутации через scoped slots", "Anti-patterns"),
    remember:
      'Для изменений через scoped slot лучше отдавать явные callbacks, а не mutable state.',
  },
  {
    id: 'knowledge-slots-q528',
    moduleId: 'slots',
    questionId: 528,
    title: 'Деструктуризация slot props',
    category: 'Scoped Slots',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Деструктуризация slot props — синтаксис, позволяющий получить нужные поля из объекта slot props прямо в template. Например, `#default="{ item }"` берёт item из контекста default scoped slot.',
    whenToUse:
      'Этот синтаксис используют почти всегда, когда scoped slot передаёт несколько значений. Он делает template короче и понятнее. Если slot props сложные, стоит дать им хорошие имена и типы.',
    howItWorks:
      'Дочерний компонент передаёт объект props в slot-функцию. Родитель принимает объект и деструктурирует его в шаблоне. Это похоже на параметры функции в JavaScript.',
    whyImportant:
      'На интервью важно понимать, что slot props принадлежат slot-контексту, а не component props. Это снижает путаницу между двумя разными API.',
    codeExample: {
      language: 'vue',
      filename: 'UserListUsage.vue',
      code: `<UserList>
  <template #default="{ user, index }">
    {{ index + 1 }}. {{ user.name }}
  </template>
</UserList>`,
    },
    commonMistake:
      'Ошибка — ожидать, что item из slot props доступен за пределами template slot. Его область видимости ограничена slot-блоком.',
    interviewQuestions: createInterviewQuestions("Деструктуризация slot props", "Scoped Slots"),
    remember:
      'Slot props деструктурируются в области видимости конкретного slot template.',
  },
  {
    id: 'knowledge-slots-q529',
    moduleId: 'slots',
    questionId: 529,
    title: 'Когда slots ухудшают API',
    category: 'API Design',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Slots ухудшают API, если их используют не по назначению. Например, если через slot передают простые данные, которые должны быть typed props. Тогда компонент становится менее предсказуемым и хуже документируется.',
    whenToUse:
      'Slots стоит применять для разметки, областей UI и кастомного рендера. Props лучше для данных, настроек и controlled values. Если нужен и контекст, и кастомная разметка, подходит scoped slot.',
    howItWorks:
      'Плохой slot API заставляет потребителя угадывать, какой контент куда передавать и какие данные доступны. Хороший API имеет мало slots, понятные имена и стабильные slot props. Всё лишнее лучше оставить внутренней реализацией.',
    whyImportant:
      'На интервью важно показать не только знание slots, но и умение не злоупотреблять ими. Красивый API часто проще, чем максимально гибкий API.',
    codeExample: {
      language: 'vue',
      filename: 'ClearApi.vue',
      code: `<BaseButton :disabled="isSaving">
  Сохранить
</BaseButton>`,
    },
    commonMistake:
      'Ошибка — делать component API полностью slot-based, даже когда нужны обычные props. Это ухудшает типизацию и читаемость.',
    interviewQuestions: createInterviewQuestions("Когда slots ухудшают API", "API Design"),
    remember:
      'Slots нужны для UI-композиции, а не для замены всех каналов данных.',
  },
  {
    id: 'knowledge-slots-q530',
    moduleId: 'slots',
    questionId: 530,
    title: 'Документация scoped slots',
    category: 'Documentation',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Документация scoped slots описывает имена slots, структуру slot props и примеры использования. Scoped slot является публичным API, поэтому потребитель должен понимать доступный контекст. Без документации такой компонент трудно использовать правильно.',
    whenToUse:
      'Документировать slots нужно для компонентных библиотек, таблиц, headless-компонентов и сложных layout. Особенно важны примеры с реальными slot props. Простым default slots часто достаточно краткого описания.',
    howItWorks:
      'В документации указывают список slots, назначение каждого, типы slot props и fallback-поведение. Хорошо добавить короткие примеры template. Если используется defineSlots, типы могут служить дополнительной проверкой.',
    whyImportant:
      'На интервью документация slot API показывает продуктовый подход к frontend-разработке. Публичный компонент должен быть понятен без чтения исходников.',
    codeExample: {
      language: 'ts',
      filename: 'slot-docs.ts',
      code: `type CellSlotProps = {
  row: User
  value: string
  columnKey: string
}`,
    },
    commonMistake:
      'Ошибка — документировать только props и забывать slots. Для потребителя named и scoped slots так же важны, как props и emits.',
    interviewQuestions: createInterviewQuestions("Документация scoped slots", "Documentation"),
    remember:
      'Scoped slots нужно документировать как полноценную часть публичного API.',
  },
]
