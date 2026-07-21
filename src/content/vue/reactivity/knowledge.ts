import type { ContentKnowledgeCard } from '../../../types/content'

export const reactivityKnowledgeCards: ContentKnowledgeCard[] = [
  {
    id: 'knowledge-reactivity-q101',
    moduleId: 'reactivity',
    questionId: 101,
    title: 'Реактивность во Vue',
    category: 'Vue Reactivity',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Реактивность — механизм, который связывает данные с эффектами: рендером компонента, computed и watchers. Когда данные читаются, Vue запоминает зависимость. Когда данные меняются, связанные эффекты получают сигнал на обновление.',
    whenToUse:
      'Реактивность используется для состояния, которое влияет на интерфейс или производные значения. Это счётчики, формы, списки, статусы загрузки, фильтры и настройки UI. Не стоит делать реактивным всё подряд, особенно большие внешние объекты, которым не нужно обновлять шаблон.',
    howItWorks:
      'Vue использует ref-обёртки и Proxy-объекты. При чтении значения происходит dependency tracking, а при записи запускается trigger. Обновления группируются, поэтому DOM обычно меняется не сразу в той же строке кода.',
    whyImportant:
      'Понимание реактивности помогает объяснять, почему интерфейс обновляется без ручного DOM-кода. Это также снижает ошибки с ref, reactive, computed и watch. На интервью реактивность часто является центральной темой Vue.',
    codeExample: {
      language: 'vue',
      filename: 'ReactiveCounter.vue',
      code: `<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>`,
    },
    commonMistake:
      'Ошибка — считать реактивность магическим обновлением всего DOM. Vue обновляет эффекты, которые зависят от изменившихся данных. Другая ошибка — вручную менять DOM вместо изменения состояния.',
    interviewQuestions: [
      'Что такое реактивность во Vue?',
      'Как Vue понимает, что компонент нужно обновить?',
      'Чем реактивность отличается от ручного DOM-кода?',
    ],
    remember:
      'Реактивное состояние является источником правды, а Vue синхронизирует с ним интерфейс.',
  },
  {
    id: 'knowledge-reactivity-q102',
    moduleId: 'reactivity',
    questionId: 102,
    title: 'ref и template unwrapping',
    category: 'Ref',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'ref хранит значение в свойстве `.value`. В JavaScript-коде это свойство нужно читать и менять явно. В template Vue автоматически разворачивает ref, поэтому можно писать `{{ count }}`.',
    whenToUse:
      'ref удобен для отдельных значений: чисел, строк, boolean, выбранного id или состояния поля формы. Он хорошо подходит для локального состояния компонента и данных, которые передаются в composable. Для большого связанного объекта иногда удобнее reactive.',
    howItWorks:
      'ref создаёт объект-обёртку. Vue отслеживает чтение `.value` в реактивном контексте и запускает обновления при записи. Template unwrapping — синтаксическое удобство шаблона, а не поведение обычного JavaScript.',
    whyImportant:
      'Путаница между `count` и `count.value` — частая ошибка начинающих. На интервью важно объяснить, что шаблон и script имеют разные правила доступа. Это показывает понимание Composition API.',
    codeExample: {
      language: 'vue',
      filename: 'CountLabel.vue',
      code: `<script setup lang="ts">
import { ref } from 'vue'

const count = ref(2)
</script>

<template>
  <p>{{ count }}</p>
</template>`,
    },
    commonMistake:
      'Ошибка — забыть `.value` в script setup или, наоборот, писать его в шаблоне без необходимости. Ещё одна ошибка — думать, что ref нельзя хранить в объектах или передавать в функции.',
    interviewQuestions: [
      'Почему ref имеет `.value`?',
      'Почему в template `.value` обычно не пишут?',
      'Когда ref удобнее reactive?',
    ],
    remember:
      'В script ref читается через `.value`, в template чаще используется напрямую.',
  },
  {
    id: 'knowledge-reactivity-q103',
    moduleId: 'reactivity',
    questionId: 103,
    title: 'Когда выбирать ref',
    category: 'Ref',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'ref — универсальный способ создать реактивную ссылку на значение. Он работает с примитивами, объектами, массивами и DOM-ссылками. Для примитивов ref обычно является самым прямым выбором.',
    whenToUse:
      'ref выбирают для отдельных флагов, счётчиков, строк поиска, выбранных id и значений input. Он удобен, когда значение часто передают в composable. Также ref используют для DOM ref, когда нужно получить ссылку на элемент после рендера.',
    howItWorks:
      'Значение хранится в `.value`, а Vue отслеживает чтение и запись этого свойства. Если `.value` содержит объект, Vue может сделать его вложенное значение реактивным. Для поверхностной реактивности есть shallowRef.',
    whyImportant:
      'Правильный выбор ref делает состояние простым и типизируемым. На интервью часто спрашивают, почему ref нужен для примитивов. Ответ связан с тем, что примитив нельзя обернуть Proxy так же, как объект.',
    codeExample: {
      language: 'ts',
      filename: 'useToggle.ts',
      code: `import { ref } from 'vue'

const isOpen = ref(false)
isOpen.value = true`,
    },
    commonMistake:
      'Ошибка — создавать reactive-объект ради одного boolean-флага. Это работает менее прозрачно, чем ref. Другая ошибка — забывать `.value` при изменении в TypeScript-коде.',
    interviewQuestions: [
      'Почему ref часто используют для примитивов?',
      'Можно ли хранить объект в ref?',
      'Чем ref отличается от reactive?',
    ],
    remember:
      'Для одного значения обычно выбирай ref; для связанной объектной модели рассматривай reactive.',
  },
  {
    id: 'knowledge-reactivity-q104',
    moduleId: 'reactivity',
    questionId: 104,
    title: 'reactive и Proxy',
    category: 'Reactive',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'reactive создаёт реактивный Proxy для объекта. Proxy перехватывает чтение и запись свойств, чтобы Vue мог отслеживать зависимости. Это удобно для состояния, где несколько полей логически связаны.',
    whenToUse:
      'reactive подходит для форм, фильтров, настроек и других объектных структур. Он удобен, когда поля часто используются вместе. Для отдельных примитивов обычно проще ref.',
    howItWorks:
      'При чтении свойства Proxy вызывает механизм track, а при записи — trigger. Вложенные объекты обычно тоже становятся реактивными при доступе. Полученный Proxy не равен исходному объекту по ссылке.',
    whyImportant:
      'reactive помогает объяснить, как Vue 3 использует возможности JavaScript Proxy. На интервью важно упомянуть ограничения: нельзя бездумно деструктурировать свойства и заменять всю ссылку, если потребители держат старый Proxy.',
    codeExample: {
      language: 'ts',
      filename: 'profileState.ts',
      code: `import { reactive } from 'vue'

const profile = reactive({
  name: 'Анна',
  level: 2,
})

profile.level += 1`,
    },
    commonMistake:
      'Ошибка — ожидать, что обычная деструктуризация reactive-свойства сохранит связь. Для этого нужны toRef или toRefs. Ещё одна ошибка — сравнивать Proxy с исходным объектом как одинаковые ссылки.',
    interviewQuestions: [
      'Что возвращает reactive?',
      'Почему reactive использует Proxy?',
      'Какие ограничения есть у reactive?',
    ],
    remember:
      'reactive хорошо подходит для объектного состояния, но требует аккуратности с ссылками и деструктуризацией.',
  },
  {
    id: 'knowledge-reactivity-q105',
    moduleId: 'reactivity',
    questionId: 105,
    title: 'ref против reactive',
    category: 'Reactivity Choice',
    rarity: 'rare',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'ref и reactive решают похожую задачу, но имеют разную форму API. ref хранит значение в `.value`, reactive возвращает Proxy-объект. Выбор зависит от формы состояния и ожидаемых операций.',
    whenToUse:
      'ref удобен для одного значения или заменяемой ссылки. reactive удобен для группы связанных полей. Если объект нужно часто заменять целиком, ref с объектом может быть понятнее, чем reactive.',
    howItWorks:
      'ref отслеживает `.value`, а reactive отслеживает свойства Proxy. В template оба варианта читаются удобно, но в script setup правила отличаются. TypeScript часто делает ref более явным для примитивов.',
    whyImportant:
      'На интервью вопрос ref/reactive показывает практический опыт с Composition API. Хороший ответ не должен объявлять один вариант всегда лучшим. Важно объяснить критерии выбора и ограничения каждого API.',
    codeExample: {
      language: 'ts',
      filename: 'state-choice.ts',
      code: `import { reactive, ref } from 'vue'

const isOpen = ref(false)
const form = reactive({ email: '', password: '' })`,
    },
    commonMistake:
      'Ошибка — выбирать reactive для любого состояния, даже для одиночного флага. Другая ошибка — использовать ref с большим объектом и затем забывать про `.value` в коде.',
    interviewQuestions: [
      'Когда выбрать ref?',
      'Когда выбрать reactive?',
      'Что удобнее для заменяемого объекта?',
    ],
    remember:
      'Выбор зависит от формы состояния: отдельное значение — ref, связанный объект — reactive.',
  },
  {
    id: 'knowledge-reactivity-q106',
    moduleId: 'reactivity',
    questionId: 106,
    title: 'Деструктуризация reactive',
    category: 'Reactive Pitfalls',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Обычная деструктуризация reactive-объекта может потерять реактивную связь. При `const { count } = state` переменная получает текущее значение, а не связанный ref. Это особенно важно при передаче свойств в composables.',
    whenToUse:
      'Если нужно деструктурировать reactive-объект и сохранить связь, используют toRef или toRefs. Это часто встречается в composables, формах и возвращаемом state. Если значение нужно только один раз как снимок, обычная деструктуризация допустима.',
    howItWorks:
      'Реактивность reactive завязана на доступ к свойствам Proxy. Когда свойство извлекается в отдельную переменную, дальнейшее чтение уже не проходит через Proxy. toRef создаёт ref, который читает и пишет конкретное свойство исходного объекта.',
    whyImportant:
      'Потеря реактивности через деструктуризацию — частый реальный баг. На интервью это показывает понимание Proxy-модели, а не только синтаксиса. Правильный ответ обычно упоминает toRef и toRefs.',
    codeExample: {
      language: 'ts',
      filename: 'destructure.ts',
      code: `import { reactive, toRefs } from 'vue'

const state = reactive({ count: 0 })
const { count } = toRefs(state)`,
    },
    commonMistake:
      'Ошибка — деструктурировать reactive-состояние в начале setup и ожидать обновления шаблона. Без toRefs связь может потеряться. Ещё одна ошибка — использовать toRefs там, где нужен простой снимок значения.',
    interviewQuestions: [
      'Почему деструктуризация reactive опасна?',
      'Чем помогает toRefs?',
      'Когда обычная деструктуризация допустима?',
    ],
    remember:
      'Для сохранения реактивности свойств reactive используй toRef или toRefs.',
  },
  {
    id: 'knowledge-reactivity-q107',
    moduleId: 'reactivity',
    questionId: 107,
    title: 'shallowRef',
    category: 'Shallow Reactivity',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'shallowRef — ref, который отслеживает замену `.value`, но не делает вложенное значение глубоко реактивным. Это поверхностная реактивность для ссылок. Она полезна, когда важна именно замена объекта.',
    whenToUse:
      'shallowRef используют для больших структур, внешних объектов, class-инстансов, данных из сторонних библиотек или immutable-паттернов. Если вложенные поля должны обновлять UI при мутации, обычный ref или reactive будет проще. Для ручного сигнала после мутации есть triggerRef.',
    howItWorks:
      'Vue отслеживает только доступ к `.value`. Если `.value` заменить на новый объект, зависимые эффекты обновятся. Если изменить вложенное поле существующего объекта, shallowRef сам по себе не даст глубокого trigger.',
    whyImportant:
      'shallowRef помогает контролировать стоимость реактивности. На интервью это показывает понимание глубокой и поверхностной реактивности. Такой API полезен, когда глубокий Proxy может быть лишним.',
    codeExample: {
      language: 'ts',
      filename: 'external-state.ts',
      code: `import { shallowRef } from 'vue'

const chartInstance = shallowRef<object | null>(null)
chartInstance.value = createChart()`,
    },
    commonMistake:
      'Ошибка — ожидать обновления UI после мутации вложенного поля shallowRef. Для такого сценария нужна замена `.value`, triggerRef или другой тип состояния. Ещё одна ошибка — использовать shallowRef ради примитивов без причины.',
    interviewQuestions: [
      'Чем shallowRef отличается от ref?',
      'Когда полезна поверхностная реактивность?',
      'Что произойдёт при мутации вложенного поля?',
    ],
    remember:
      'shallowRef отслеживает замену `.value`, а не глубокие изменения внутри объекта.',
  },
  {
    id: 'knowledge-reactivity-q108',
    moduleId: 'reactivity',
    questionId: 108,
    title: 'shallowReactive',
    category: 'Shallow Reactivity',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'shallowReactive создаёт reactive Proxy только для верхнего уровня объекта. Вложенные объекты остаются обычными, если не были реактивными заранее. Это даёт контроль над глубиной реактивности.',
    whenToUse:
      'shallowReactive подходит для структур, где нужно отслеживать замену верхних полей, но не нужно проксировать глубокие данные. Его используют осторожно, когда обычный reactive слишком глубокий или дорогой. Для форм с вложенными полями чаще подходит обычный reactive.',
    howItWorks:
      'Операции чтения и записи верхних свойств отслеживаются. При доступе к вложенному объекту Vue не превращает его автоматически в reactive Proxy. Поэтому `state.options.theme = "dark"` может не дать ожидаемого обновления, если options обычный объект.',
    whyImportant:
      'Этот API помогает говорить о производительности и границах реактивности. На интервью важно подчеркнуть, что shallowReactive не является более сильной версией reactive. Это осознанное ограничение глубины.',
    codeExample: {
      language: 'ts',
      filename: 'shallow-state.ts',
      code: `import { shallowReactive } from 'vue'

const state = shallowReactive({
  config: { theme: 'dark' },
})`,
    },
    commonMistake:
      'Ошибка — использовать shallowReactive и ожидать глубокую реактивность вложенных полей. Такой код выглядит похожим на reactive, но ведёт себя иначе. В ревью важно проверять ожидания автора.',
    interviewQuestions: [
      'Что отслеживает shallowReactive?',
      'Чем он отличается от reactive?',
      'Когда shallowReactive может стать источником бага?',
    ],
    remember:
      'shallowReactive реактивен только на верхнем уровне объекта.',
  },
  {
    id: 'knowledge-reactivity-q109',
    moduleId: 'reactivity',
    questionId: 109,
    title: 'readonly',
    category: 'Readonly State',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'readonly создаёт реактивную обёртку, через которую нельзя записывать данные. Это полезно для защиты состояния от внешней мутации. При попытке записи Vue предупреждает в dev-режиме.',
    whenToUse:
      'readonly применяют в composables, когда наружу нужно отдать состояние только для чтения. Это помогает сохранить контроль над изменениями через функции API. Также readonly полезен для контрактов, где данные должны быть защищены от случайной записи.',
    howItWorks:
      'Vue создаёт Proxy, который пропускает чтение, но блокирует запись. Если исходное реактивное состояние меняется через разрешённый внутренний механизм, readonly-представление тоже отражает новое значение. readonly не делает данные вечными; он ограничивает конкретную обёртку.',
    whyImportant:
      'readonly помогает проектировать безопасные API. На интервью важно отличать защиту от записи через readonly от настоящей неизменяемости всей системы. Это практическая тема для composables и stores.',
    codeExample: {
      language: 'ts',
      filename: 'useCounter.ts',
      code: `import { readonly, ref } from 'vue'

const count = ref(0)
const publicCount = readonly(count)`,
    },
    commonMistake:
      'Ошибка — думать, что readonly копирует данные навсегда. Это read-only представление, а не независимый snapshot. Ещё одна ошибка — пытаться менять readonly-состояние снаружи вместо вызова публичной функции.',
    interviewQuestions: [
      'Для чего нужен readonly?',
      'Readonly копирует данные или создаёт обёртку?',
      'Как использовать readonly в composable?',
    ],
    remember:
      'readonly отдаёт состояние для чтения и защищает его от внешней записи.',
  },
  {
    id: 'knowledge-reactivity-q110',
    moduleId: 'reactivity',
    questionId: 110,
    title: 'computed и кеширование',
    category: 'Computed',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'computed — производное реактивное значение с кешированием. Оно зависит от ref, reactive или других computed. Результат пересчитывается только после изменения зависимостей.',
    whenToUse:
      'computed используют для форматирования, фильтрации, расчёта процентов, доступности кнопок и других derived values. Он подходит для чистой логики без side effects. Если нужно выполнить запрос или записать в хранилище, лучше watch или action.',
    howItWorks:
      'При первом чтении computed выполняет getter и собирает зависимости. Пока зависимости не изменились, повторное чтение возвращает кеш. После изменения зависимости computed помечается dirty и пересчитывается при следующем доступе.',
    whyImportant:
      'computed помогает не дублировать состояние и избегать рассинхронизации. На интервью часто проверяют отличие computed от methods и watch. Хороший ответ говорит про зависимости, кеш и чистоту getter.',
    codeExample: {
      language: 'ts',
      filename: 'total.ts',
      code: `import { computed, ref } from 'vue'

const price = ref(100)
const count = ref(2)
const total = computed(() => price.value * count.value)`,
    },
    commonMistake:
      'Ошибка — выполнять side effects внутри computed. Getter должен быть чистым и возвращать значение. Для асинхронных эффектов и синхронизации лучше использовать watch.',
    interviewQuestions: [
      'Когда computed пересчитывается?',
      'Чем computed отличается от method?',
      'Почему computed должен быть чистым?',
    ],
    remember:
      'computed — кешируемое производное значение по реактивным зависимостям.',
  },
  {
    id: 'knowledge-reactivity-q111',
    moduleId: 'reactivity',
    questionId: 111,
    title: 'watch для side effects',
    category: 'Watch',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'watch наблюдает за реактивным источником и запускает callback при изменении. Он предназначен для реакций на изменение, особенно побочных эффектов. В отличие от computed, watch не обязан возвращать значение для шаблона.',
    whenToUse:
      'watch подходит для запросов, синхронизации с URL или localStorage, debounce-сценариев и интеграции с внешними API. Если нужно просто вычислить значение, лучше computed. Если действие запускается напрямую пользователем, часто достаточно функции.',
    howItWorks:
      'watch получает источник: ref, getter, reactive object или массив источников. Callback получает новое и старое значение. Настройки вроде immediate, deep и flush уточняют поведение.',
    whyImportant:
      'watch часто используют неправильно как универсальную реакцию на всё. На интервью важно объяснить границу: computed для значения, watch для эффекта. Это помогает писать предсказуемую реактивную логику.',
    codeExample: {
      language: 'ts',
      filename: 'search-watch.ts',
      code: `import { ref, watch } from 'vue'

const query = ref('')

watch(query, (value) => {
  latestQuery.value = value
})`,
    },
    commonMistake:
      'Ошибка — обновлять в watch значение, за которым он же наблюдает, без защиты от циклов. Другая ошибка — использовать deep watch для больших объектов без необходимости.',
    interviewQuestions: [
      'Когда нужен watch?',
      'Чем watch отличается от computed?',
      'Что дают oldValue и newValue?',
    ],
    remember:
      'watch нужен для реакции на изменение и side effects.',
  },
  {
    id: 'knowledge-reactivity-q112',
    moduleId: 'reactivity',
    questionId: 112,
    title: 'watchEffect',
    category: 'Watch',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'watchEffect запускает функцию и автоматически отслеживает реактивные зависимости, прочитанные внутри неё. Он выполняется сразу при создании. При изменении любой собранной зависимости effect запускается снова.',
    whenToUse:
      'watchEffect удобен для быстрых реактивных эффектов, где зависимости очевидны из кода. Он подходит для прототипирования, синхронизации и простых эффектов без явного списка источников. Если важен контроль источника и oldValue, лучше watch.',
    howItWorks:
      'Во время выполнения callback Vue собирает прочитанные ref/reactive значения. Эти значения становятся зависимостями effect. Перед повторным запуском можно выполнять cleanup для отмены старой асинхронной операции.',
    whyImportant:
      'watchEffect показывает автоматическую сторону dependency tracking. На интервью важно сравнить его с watch: watch явный, watchEffect автоматический. Оба инструмента полезны, но применяются в разных ситуациях.',
    codeExample: {
      language: 'ts',
      filename: 'effect.ts',
      code: `import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect(() => {
  latestCount.value = count.value
})`,
    },
    commonMistake:
      'Ошибка — использовать watchEffect там, где нужно точно контролировать источник изменений. Автоматические зависимости могут стать неочевидными при росте callback. Для сложной логики watch обычно читается лучше.',
    interviewQuestions: [
      'Чем watchEffect отличается от watch?',
      'Когда watchEffect запускается первый раз?',
      'Как watchEffect собирает зависимости?',
    ],
    remember:
      'watchEffect сам собирает зависимости из выполняемой функции.',
  },
  {
    id: 'knowledge-reactivity-q113',
    moduleId: 'reactivity',
    questionId: 113,
    title: 'Dependency tracking',
    category: 'Reactivity Internals',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Dependency tracking — процесс запоминания связей между реактивными свойствами и эффектами. Когда effect читает значение, Vue записывает зависимость. Потом при изменении значения Vue знает, кого нужно обновить.',
    whenToUse:
      'Разработчик обычно не вызывает tracking вручную, но понимание механики помогает проектировать состояние. Это важно при отладке computed, watchEffect, render updates и странных случаев потери реактивности. Тема особенно полезна для middle-собеседований.',
    howItWorks:
      'Во время выполнения активного effect чтение reactive/ref вызывает track. Vue сохраняет связь "цель-ключ-эффект" во внутренней структуре. При записи trigger находит эффекты по этой связи и планирует выполнение.',
    whyImportant:
      'Dependency tracking объясняет, почему чтение значения внутри computed создаёт связь, а чтение вне реактивного контекста — нет. Это помогает понимать lost reactivity при деструктуризации. На интервью такой ответ показывает глубину.',
    codeExample: {
      language: 'ts',
      filename: 'tracking-model.ts',
      code: `const total = computed(() => price.value * count.value)
// price и count становятся зависимостями total`,
    },
    commonMistake:
      'Ошибка — думать, что Vue отслеживает любые переменные JavaScript. Отслеживаются только реактивные источники, прочитанные в реактивном контексте. Обычная локальная переменная не становится зависимостью автоматически.',
    interviewQuestions: [
      'Что такое dependency tracking?',
      'Когда Vue собирает зависимости?',
      'Почему computed знает, когда пересчитаться?',
    ],
    remember:
      'Vue обновляет эффекты благодаря связям, собранным при чтении реактивных данных.',
  },
  {
    id: 'knowledge-reactivity-q114',
    moduleId: 'reactivity',
    questionId: 114,
    title: 'trigger',
    category: 'Reactivity Internals',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'trigger — внутренняя реакция системы на изменение реактивного свойства. После записи Vue ищет эффекты, которые зависят от этого свойства. Затем эти эффекты выполняются или планируются scheduler-ом.',
    whenToUse:
      'В обычном коде trigger вручную не вызывают. �?сключение — специальные API вроде triggerRef для shallowRef. Понимание trigger нужно для объяснения того, почему изменение `.value` обновляет computed, watcher или компонент.',
    howItWorks:
      'Запись в ref или reactive property вызывает механизм trigger. Он находит зависимости, собранные через track, и уведомляет эффекты. Некоторые обновления выполняются не мгновенно, а попадают в очередь.',
    whyImportant:
      'Trigger помогает объяснить путь от изменения данных к обновлению интерфейса. Это снижает путаницу вокруг nextTick, batching и watcher flush. На интервью связка track/trigger звучит как зрелое понимание Vue.',
    codeExample: {
      language: 'ts',
      filename: 'trigger-example.ts',
      code: `const count = ref(0)
count.value++ // запись вызывает обновление зависимых эффектов`,
    },
    commonMistake:
      'Ошибка — ожидать немедленного DOM-обновления после trigger. Vue может сгруппировать обновления и применить их позже. Для ожидания DOM используют nextTick.',
    interviewQuestions: [
      'Что происходит при записи в ref?',
      'Что такое trigger?',
      'Почему DOM может обновиться не сразу?',
    ],
    remember:
      'trigger уведомляет эффекты после изменения реактивного значения.',
  },
  {
    id: 'knowledge-reactivity-q115',
    moduleId: 'reactivity',
    questionId: 115,
    title: 'Effect',
    category: 'Reactivity Internals',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Effect — функция, которая читает реактивные данные и может быть повторно выполнена. Рендер компонента, computed и watchers построены вокруг идеи эффектов. Effect связывает данные и реакцию на их изменение.',
    whenToUse:
      'Публичные API вроде computed, watch и watchEffect позволяют работать с эффектами без ручного управления внутренностями. Понимание effect полезно для отладки и разговоров про реактивное ядро. Ручное создание низкоуровневых эффектов в прикладном коде обычно не требуется.',
    howItWorks:
      'Во время выполнения effect становится активным. Если внутри читается ref или reactive property, Vue связывает это свойство с effect. При последующем trigger effect запускается снова или помечается для пересчёта.',
    whyImportant:
      'Effect объясняет, почему изменение state приводит к rerender компонента. На интервью это помогает перейти от поверхностного "Vue сам обновляет" к техническому описанию. Такой ответ показывает понимание реактивного графа.',
    codeExample: {
      language: 'ts',
      filename: 'watch-effect.ts',
      code: `watchEffect(() => {
  latestCount.value = count.value
})`,
    },
    commonMistake:
      'Ошибка — считать effect только watcher-ом. Рендер компонента тоже можно понимать как реактивный effect. Другая ошибка — забывать про cleanup для асинхронных эффектов.',
    interviewQuestions: [
      'Что такое effect?',
      'Как effect связан с render?',
      'Чем watchEffect похож на effect?',
    ],
    remember:
      'Effect — реакция, которая зависит от реактивных данных.',
  },
  {
    id: 'knowledge-reactivity-q116',
    moduleId: 'reactivity',
    questionId: 116,
    title: 'Proxy в Vue 3',
    category: 'Reactive',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Proxy — встроенный механизм JavaScript, который позволяет перехватывать операции с объектом. Vue 3 использует Proxy для reactive, readonly и похожих API. Это даёт возможность отслеживать чтение и запись свойств.',
    whenToUse:
      'Разработчик не создаёт Proxy вручную для обычного Vue state, а использует reactive или readonly. Понимание Proxy полезно при сравнении Vue 2 и Vue 3, а также при объяснении ограничений reactive. Для примитивов Proxy напрямую не подходит, поэтому есть ref.',
    howItWorks:
      'Proxy оборачивает исходный объект и получает traps вроде get и set. При get Vue может выполнить track, при set — trigger. Вложенные объекты могут лениво оборачиваться при доступе.',
    whyImportant:
      'Proxy объясняет, почему reactive возвращает не исходный объект, а реактивную обёртку. На интервью важно сказать, что сравнение ссылок и деструктуризация требуют внимания. Это основа понимания Vue 3 reactivity.',
    codeExample: {
      language: 'ts',
      filename: 'proxy-state.ts',
      code: `const raw = { count: 0 }
const state = reactive(raw)

const isSameReference = state === raw // false`,
    },
    commonMistake:
      'Ошибка — смешивать raw object и reactive Proxy как одну и ту же ссылку. Это может ломать сравнения и кеши. Лучше последовательно работать с реактивной версией.',
    interviewQuestions: [
      'Зачем Vue 3 использует Proxy?',
      'Почему reactive object не равен исходному объекту?',
      'Какие операции Proxy может перехватывать?',
    ],
    remember:
      'reactive во Vue 3 построен на Proxy, который перехватывает чтение и запись.',
  },
  {
    id: 'knowledge-reactivity-q117',
    moduleId: 'reactivity',
    questionId: 117,
    title: 'Ограничения reactive',
    category: 'Reactive Pitfalls',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'reactive хорошо работает с объектами, но имеет ограничения, связанные с Proxy и ссылками. Нельзя относиться к нему как к обычному заменяемому значению. Полная замена переменной может оставить старых потребителей привязанными к старому Proxy.',
    whenToUse:
      'reactive подходит для стабильной объектной формы, когда меняются свойства. Если состояние нужно часто заменять целиком, ref с объектом может быть безопаснее. Для внешних объектов иногда лучше shallowRef или markRaw.',
    howItWorks:
      'Потребители читают свойства конкретного Proxy. Если локальная переменная начинает ссылаться на новый reactive-объект, старые ссылки автоматически не переключаются. Поэтому сохранение одного Proxy и мутация его свойств часто предсказуемее.',
    whyImportant:
      'Ограничения reactive часто приводят к трудноуловимым багам. На интервью важно не только знать API, но и понимать ссылочную модель JavaScript. Это особенно важно при проектировании composables.',
    codeExample: {
      language: 'ts',
      filename: 'replace-state.ts',
      code: `let state = reactive({ count: 0 })
// Лучше менять state.count, а не незаметно заменять state для внешних потребителей.`,
    },
    commonMistake:
      'Ошибка — переassign-ить reactive state и ожидать, что все старые ссылки обновятся. Другая ошибка — деструктурировать свойства без toRefs. Оба случая выглядят невинно, но ломают реактивные связи.',
    interviewQuestions: [
      'Какие ограничения есть у reactive?',
      'Почему замена reactive-ссылки опасна?',
      'Когда ref с объектом лучше reactive?',
    ],
    remember:
      'reactive хорош для мутации свойств стабильного Proxy, но не для незаметной замены всей ссылки.',
  },
  {
    id: 'knowledge-reactivity-q118',
    moduleId: 'reactivity',
    questionId: 118,
    title: 'Реактивность массивов',
    category: 'Reactive Arrays',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Реактивный массив во Vue отслеживает операции чтения, записи и мутации. Методы вроде push, splice, pop и изменение элемента могут обновлять зависящий UI. Массив может быть внутри ref или reactive.',
    whenToUse:
      'Реактивные массивы используют для списков задач, результатов поиска, меню, таблиц и коллекций карточек. Если массив заменяется целиком, часто удобен ref. Если массив является свойством объекта формы или store, может подойти reactive.',
    howItWorks:
      'Vue отслеживает доступ к длине массива, индексам и методам мутации. При изменении массива запускаются эффекты, которые зависят от соответствующих операций. В шаблоне это часто связано с v-for.',
    whyImportant:
      'Списки встречаются почти в каждом интерфейсе. На интервью полезно знать, что Vue 3 хорошо отслеживает массивы через Proxy. Также важно помнить про стабильный key при рендере массива.',
    codeExample: {
      language: 'ts',
      filename: 'items.ts',
      code: `const items = ref<string[]>([])
items.value.push('Vue')`,
    },
    commonMistake:
      'Ошибка — думать, что после push нужно вручную вызывать обновление компонента. В нормальном реактивном состоянии Vue сделает это сам. Другая ошибка — использовать index как key для изменяемого списка.',
    interviewQuestions: [
      'Отслеживает ли Vue push в массив?',
      'Когда массив хранить в ref?',
      'Почему key важен для v-for?',
    ],
    remember:
      'Vue 3 умеет отслеживать реактивные массивы, но рендер списка всё равно требует стабильных key.',
  },
  {
    id: 'knowledge-reactivity-q119',
    moduleId: 'reactivity',
    questionId: 119,
    title: 'toRef',
    category: 'toRef / toRefs',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'toRef создаёт ref, связанный с конкретным свойством reactive-объекта. Чтение и запись такого ref обращаются к исходному свойству. Это способ передать одно поле без потери реактивности.',
    whenToUse:
      'toRef полезен, когда composable принимает ref, а источник — свойство reactive-объекта. Также он помогает при точечной передаче props или state. Если нужно преобразовать много свойств, удобнее toRefs.',
    howItWorks:
      'toRef не копирует значение. Он создаёт объект с `.value`, который проксирует доступ к `state[key]`. Поэтому изменение ref обновляет исходный объект, и наоборот.',
    whyImportant:
      'toRef решает проблему деструктуризации и передачи отдельных свойств. На интервью это показывает понимание связи между reactive и ref. Это практичный инструмент для composables.',
    codeExample: {
      language: 'ts',
      filename: 'name-ref.ts',
      code: `const state = reactive({ name: 'Анна' })
const name = toRef(state, 'name')

name.value = '�?рина'`,
    },
    commonMistake:
      'Ошибка — передать `state.name` как обычную строку и ожидать реактивности. Это будет снимок значения. toRef сохраняет связь с исходным свойством.',
    interviewQuestions: [
      'Для чего нужен toRef?',
      'toRef копирует значение или связывает его?',
      'Чем toRef отличается от ref(state.name)?',
    ],
    remember:
      'toRef связывает ref с одним свойством reactive-объекта.',
  },
  {
    id: 'knowledge-reactivity-q120',
    moduleId: 'reactivity',
    questionId: 120,
    title: 'toRefs',
    category: 'toRef / toRefs',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'toRefs преобразует свойства reactive-объекта в набор связанных ref. Это удобно для безопасной деструктуризации. Каждый ref остаётся связанным с соответствующим свойством исходного объекта.',
    whenToUse:
      'toRefs часто используют при возврате reactive state из composable. Это позволяет вызывающему коду деструктурировать результат без потери реактивности. Для одного свойства можно использовать toRef.',
    howItWorks:
      'Vue проходит по свойствам объекта и создаёт для каждого связанный ref. Чтение `.value` обращается к исходному объекту, запись тоже меняет исходное свойство. Новые свойства, добавленные позже, не появятся в уже созданном результате автоматически.',
    whyImportant:
      'toRefs помогает строить удобный API composables. На интервью это часто связано с вопросом о потере реактивности при деструктуризации. Понимание toRefs показывает, что разработчик умеет проектировать Composition API.',
    codeExample: {
      language: 'ts',
      filename: 'useForm.ts',
      code: `const form = reactive({ email: '', password: '' })
return {
  ...toRefs(form),
}`,
    },
    commonMistake:
      'Ошибка — использовать spread reactive-объекта без toRefs и ожидать реактивных свойств. Spread создаёт обычные значения. toRefs сохраняет связь, но добавляет `.value` в script-коде.',
    interviewQuestions: [
      'Когда использовать toRefs?',
      'Почему spread reactive опасен?',
      'Чем toRefs отличается от toRef?',
    ],
    remember:
      'toRefs нужен для деструктуризации reactive-объекта без потери реактивности.',
  },
  {
    id: 'knowledge-reactivity-q121',
    moduleId: 'reactivity',
    questionId: 121,
    title: 'markRaw',
    category: 'Reactivity Escape Hatches',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'markRaw помечает объект так, чтобы Vue не превращал его в reactive Proxy. Это escape hatch для объектов, которым не нужна реактивность. Он помогает избежать лишнего проксирования и конфликтов с внешними инстансами.',
    whenToUse:
      'markRaw используют для class-инстансов, объектов сторонних библиотек, больших immutable-структур и данных, которые не должны становиться Proxy. Его не стоит применять к обычному состоянию формы или UI без причины. Если нужна реактивная замена ссылки, можно рассмотреть shallowRef.',
    howItWorks:
      'Vue сохраняет специальную отметку на объекте. Когда такой объект попадает в reactive, он остаётся raw и не оборачивается Proxy. Вложенные решения нужно проектировать аккуратно, чтобы не получить неожиданные raw/reactive смеси.',
    whyImportant:
      'markRaw показывает, что реактивность не обязана покрывать всё. На интервью это хороший сигнал зрелости: иногда правильнее исключить объект из реактивной системы. Особенно это актуально для интеграции с графиками, редакторами и SDK.',
    codeExample: {
      language: 'ts',
      filename: 'raw-instance.ts',
      code: `import { markRaw } from 'vue'

const editor = markRaw(createEditor())`,
    },
    commonMistake:
      'Ошибка — использовать markRaw как способ исправить непонимание реактивности. Если UI должен обновляться от свойств объекта, markRaw помешает. Этот API нужен для осознанных исключений.',
    interviewQuestions: [
      'Для чего нужен markRaw?',
      'Когда не стоит проксировать объект?',
      'Чем markRaw отличается от shallowRef?',
    ],
    remember:
      'markRaw исключает объект из реактивного преобразования.',
  },
  {
    id: 'knowledge-reactivity-q122',
    moduleId: 'reactivity',
    questionId: 122,
    title: 'nextTick',
    category: 'DOM Update Timing',
    rarity: 'rare',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'nextTick позволяет дождаться, когда Vue применит DOM-обновления после изменения реактивного состояния. �?зменение state не всегда сразу отражается в DOM в той же строке кода. Vue группирует обновления для эффективности.',
    whenToUse:
      'nextTick нужен, когда после изменения состояния нужно измерить DOM, сфокусировать элемент или прокрутить к обновлённому блоку. Если код не зависит от фактического DOM, nextTick обычно не нужен. Для обычного рендера Vue сам управляет очередью.',
    howItWorks:
      'После изменения reactive/ref Vue планирует обновление. nextTick возвращает Promise, который резолвится после flush DOM-обновлений. Поэтому код после await nextTick видит уже обновлённую разметку.',
    whyImportant:
      'На интервью nextTick проверяет понимание асинхронности рендера. Это помогает объяснить, почему чтение DOM сразу после изменения state может дать старый результат. API особенно полезен в UI-сценариях с фокусом и измерениями.',
    codeExample: {
      language: 'ts',
      filename: 'focus-after-render.ts',
      code: `items.value.push('new')
await nextTick()
listElement.value?.scrollIntoView()`,
    },
    commonMistake:
      'Ошибка — ставить nextTick после каждого изменения состояния. Это засоряет код и может скрывать неправильную архитектуру. nextTick нужен только когда действительно требуется обновлённый DOM.',
    interviewQuestions: [
      'Зачем нужен nextTick?',
      'Почему DOM обновляется не сразу?',
      'Когда nextTick избыточен?',
    ],
    remember:
      'nextTick ждёт DOM после реактивного обновления.',
  },
  {
    id: 'knowledge-reactivity-q123',
    moduleId: 'reactivity',
    questionId: 123,
    title: 'Flush timing watcher',
    category: 'Watch',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Flush timing определяет, когда watcher callback выполняется относительно обновления компонента. В Vue доступны варианты вроде pre, post и sync. Это важно, если watcher читает DOM или должен сработать немедленно.',
    whenToUse:
      '`flush: "post"` полезен, когда callback должен видеть обновлённый DOM. `flush: "sync"` используют редко, когда нужна синхронная реакция. В большинстве случаев стандартное поведение достаточно.',
    howItWorks:
      'Vue планирует watcher callback в scheduler. Pre-watchers выполняются до DOM-обновления компонента, post — после, sync — сразу при trigger. Неправильный выбор момента может дать старые DOM-данные.',
    whyImportant:
      'Flush timing помогает решать тонкие UI-проблемы без хаотичных setTimeout. На интервью это тема ближе к middle, потому что требует понимания очереди обновлений. Хороший ответ связывает flush с DOM timing.',
    codeExample: {
      language: 'ts',
      filename: 'post-watch.ts',
      code: `watch(isOpen, () => {
  panel.value?.focus()
}, { flush: 'post' })`,
    },
    commonMistake:
      'Ошибка — использовать setTimeout для ожидания DOM вместо подходящего flush или nextTick. Другая ошибка — ставить sync без причины и ухудшать batching.',
    interviewQuestions: [
      'Что такое flush timing?',
      'Когда нужен flush post?',
      'Почему sync watcher стоит использовать осторожно?',
    ],
    remember:
      'Flush timing управляет моментом watcher callback относительно DOM-обновления.',
  },
  {
    id: 'knowledge-reactivity-q124',
    moduleId: 'reactivity',
    questionId: 124,
    title: 'Deep watch',
    category: 'Watch',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Deep watch позволяет реагировать на изменения вложенных свойств объекта. Без deep watcher может отследить изменение ссылки, но не каждую глубокую мутацию. Это полезно, но может быть дорогим.',
    whenToUse:
      'Deep watch применяют для вложенных настроек, сложных форм и структур, где нужно реагировать на любое глубокое изменение. Если можно наблюдать конкретное поле через getter, это часто лучше. Для больших объектов deep watch стоит использовать осторожно.',
    howItWorks:
      'Vue обходит вложенную структуру, чтобы собрать зависимости на глубоких свойствах. При изменении одного из них callback watcher срабатывает. Чем больше структура, тем выше стоимость обхода.',
    whyImportant:
      'Deep watch часто помогает быстро решить задачу, но может ухудшить производительность. На интервью важно сказать не только как включить deep, но и почему его не стоит включать автоматически. Это показывает инженерную осторожность.',
    codeExample: {
      language: 'ts',
      filename: 'deep-watch.ts',
      code: `watch(settings, () => {
  saveSettings(settings)
}, { deep: true })`,
    },
    commonMistake:
      'Ошибка — ставить deep watch на большой объект ради одного поля. Лучше наблюдать конкретное значение через getter. Ещё одна ошибка — ожидать, что deep watch бесплатно решает все вложенные сценарии.',
    interviewQuestions: [
      'Когда нужен deep watch?',
      'Почему deep watch может быть дорогим?',
      'Какая альтернатива deep watch для одного поля?',
    ],
    remember:
      'Deep watch отслеживает вложенные изменения, но требует осторожности с большими структурами.',
  },
  {
    id: 'knowledge-reactivity-q125',
    moduleId: 'reactivity',
    questionId: 125,
    title: 'Immediate watch',
    category: 'Watch',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '3 мин',
    whatIsIt:
      'Immediate watch запускает callback сразу при создании watcher. После этого watcher продолжает реагировать на изменения источника. Это удобно для сценариев начальной загрузки.',
    whenToUse:
      '`immediate: true` используют, когда логика должна выполниться для текущего значения без ожидания изменения. Например, загрузить данные по начальному route param или синхронизировать состояние при монтировании. Если начальный запуск не нужен, immediate лучше не включать.',
    howItWorks:
      'Vue создаёт watcher и сразу вызывает callback с текущим значением источника. Старое значение в таком первом вызове может быть undefined. Затем callback вызывается при последующих изменениях.',
    whyImportant:
      'Immediate watch помогает избежать дублирования логики: один callback обслуживает начальное состояние и изменения. На интервью важно отличать его от watchEffect, который тоже запускается сразу, но сам собирает зависимости.',
    codeExample: {
      language: 'ts',
      filename: 'immediate-watch.ts',
      code: `watch(userId, loadUser, {
  immediate: true,
})`,
    },
    commonMistake:
      'Ошибка — включать immediate и не учитывать первый запуск callback. Это может привести к лишнему запросу или записи. Нужно явно понимать, должен ли эффект выполниться при создании.',
    interviewQuestions: [
      'Что делает immediate watch?',
      'Чем immediate watch отличается от watchEffect?',
      'Когда первый запуск watcher полезен?',
    ],
    remember:
      'immediate запускает watcher сразу, а не только после первого изменения.',
  },
  {
    id: 'knowledge-reactivity-q126',
    moduleId: 'reactivity',
    questionId: 126,
    title: 'Мутация readonly',
    category: 'Readonly State',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '3 мин',
    whatIsIt:
      'Readonly-обёртка защищает данные от записи через публичный доступ. Попытка изменить readonly-значение считается ошибкой использования API. В dev-режиме Vue предупреждает об этом.',
    whenToUse:
      'Readonly полезен, когда нужно показать состояние, но запретить внешнюю мутацию. Это часто встречается в composables и публичных API. �?зменения должны идти через контролируемые функции.',
    howItWorks:
      'Proxy readonly перехватывает set-операцию и не позволяет выполнить запись через эту обёртку. При этом исходное состояние может изменяться из внутреннего разрешённого места. Читающие потребители увидят обновление.',
    whyImportant:
      'Readonly помогает проектировать безопасные контракты. На интервью важно не путать readonly с полной immutable-копией. Это защитный слой доступа, а не гарантия, что исходные данные никогда не изменятся.',
    codeExample: {
      language: 'ts',
      filename: 'readonly-api.ts',
      code: `const state = ref(0)
const publicState = readonly(state)
// publicState.value++ вызовет предупреждение`,
    },
    commonMistake:
      'Ошибка — пытаться менять readonly-состояние напрямую. Если нужны изменения, API должен предоставлять функцию вроде increment или setValue. Так сохраняется контроль над инвариантами.',
    interviewQuestions: [
      'Что произойдёт при записи в readonly?',
      'Readonly делает копию или обёртку?',
      'Как readonly помогает в composable?',
    ],
    remember:
      'Readonly защищает публичный доступ от записи, но внутренний источник может обновляться контролируемо.',
  },
  {
    id: 'knowledge-reactivity-q127',
    moduleId: 'reactivity',
    questionId: 127,
    title: 'Автоматические зависимости watchEffect',
    category: 'Watch',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'watchEffect автоматически собирает зависимости из callback. Если внутри читается ref, изменение этого ref запустит callback снова. Это отличается от watch, где источник обычно задаётся явно.',
    whenToUse:
      'watchEffect удобен, когда эффект зависит от нескольких значений и их список очевиден из тела функции. Он хорошо подходит для простых реакций и прототипирования. Для точного контроля и oldValue лучше watch.',
    howItWorks:
      'Во время выполнения callback Vue делает его активным эффектом. Все реактивные чтения внутри становятся зависимостями. При trigger любой из них планирует повторный запуск callback.',
    whyImportant:
      'Автоматический сбор зависимостей удобен, но может скрыть сложность. На интервью важно объяснить плюсы и риски. Чем больше callback, тем сложнее понять, что именно его перезапускает.',
    codeExample: {
      language: 'ts',
      filename: 'auto-effect.ts',
      code: `watchEffect(() => {
  document.title = title.value
})`,
    },
    commonMistake:
      'Ошибка — случайно прочитать лишний ref внутри watchEffect и получить ненужные перезапуски. Для сложных сценариев лучше явно указать источник через watch. Также нужно помнить про cleanup асинхронных операций.',
    interviewQuestions: [
      'Почему watchEffect перезапускается?',
      'Какие зависимости он отслеживает?',
      'Когда watch лучше watchEffect?',
    ],
    remember:
      'watchEffect перезапускается из-за реактивных значений, прочитанных внутри callback.',
  },
  {
    id: 'knowledge-reactivity-q128',
    moduleId: 'reactivity',
    questionId: 128,
    title: 'Внешние инстансы в реактивном state',
    category: 'Reactivity Escape Hatches',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Внешний class-инстанс не всегда нужно превращать в reactive Proxy. У таких объектов могут быть внутренние поля, методы, приватное состояние и ожидания библиотеки. Проксирование может быть лишним или вредным.',
    whenToUse:
      'Если объект создан сторонней библиотекой, стоит проверить, нужна ли глубокая реактивность. Часто достаточно shallowRef для хранения ссылки или markRaw для исключения из Proxy. UI можно обновлять отдельным реактивным состоянием.',
    howItWorks:
      'markRaw запрещает Vue проксировать объект. shallowRef отслеживает замену ссылки, но не вмешивается во внутренние поля. Так внешний объект остаётся под управлением своей библиотеки.',
    whyImportant:
      'Это важная тема code review. На интервью middle-уровня ожидается понимание, что реактивность имеет стоимость и границы. Не каждый объект должен становиться частью реактивного графа.',
    codeExample: {
      language: 'ts',
      filename: 'editor-instance.ts',
      code: `const editor = shallowRef<Editor | null>(null)
editor.value = markRaw(createEditor())`,
    },
    commonMistake:
      'Ошибка — класть сложный class-инстанс внутрь deep reactive state без проверки. Это может добавить лишний Proxy и неожиданные эффекты. Лучше явно обозначить границу между Vue state и внешней библиотекой.',
    interviewQuestions: [
      'Почему не каждый объект стоит делать reactive?',
      'Когда использовать markRaw?',
      'Чем shallowRef помогает с внешними инстансами?',
    ],
    remember:
      'Для внешних инстансов часто лучше хранить ссылку поверхностно или пометить объект raw.',
  },
  {
    id: 'knowledge-reactivity-q129',
    moduleId: 'reactivity',
    questionId: 129,
    title: 'Unwrap ref',
    category: 'Ref',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Unwrap ref — автоматическое разворачивание ref в некоторых контекстах Vue. Самый очевидный случай — template, где `{{ count }}` показывает `count.value`. В JavaScript-коде ref обычно остаётся объектом с `.value`.',
    whenToUse:
      'Этот механизм используется автоматически, когда пишется template или когда ref находится в некоторых reactive-контекстах. Разработчик должен понимать правила, чтобы не путаться между script и template. Для явного API composables лучше сохранять типы понятными.',
    howItWorks:
      'Template compiler генерирует код, который читает значение ref без ручного `.value`. В обычном TypeScript-коде такой компиляции нет, поэтому требуется `.value`. Некоторые вложенные случаи имеют нюансы, поэтому важно проверять типы.',
    whyImportant:
      'Unwrap ref часто вызывает вопросы на интервью и ошибки в коде. Понимание разницы между шаблоном и script помогает уверенно работать с Composition API. Это также объясняет, почему TypeScript подсвечивает неправильное обращение.',
    codeExample: {
      language: 'vue',
      filename: 'UnwrapExample.vue',
      code: `<script setup lang="ts">
const count = ref(1)
count.value++
</script>

<template>
  {{ count }}
</template>`,
    },
    commonMistake:
      'Ошибка — считать, что `.value` никогда не нужен. В script setup он нужен для большинства операций с ref. Обратная ошибка — думать, что template требует `.value` так же, как JavaScript.',
    interviewQuestions: [
      'Что такое ref unwrapping?',
      'Где нужен `.value`?',
      'Почему template ведёт себя иначе, чем script?',
    ],
    remember:
      'Unwrap ref упрощает template, но не отменяет `.value` в JavaScript-коде.',
  },
  {
    id: 'knowledge-reactivity-q130',
    moduleId: 'reactivity',
    questionId: 130,
    title: 'Стоимость deep watch',
    category: 'Watch Performance',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Deep watch отслеживает вложенные изменения объекта. Для этого Vue должен добраться до внутренних свойств и собрать зависимости. Чем больше структура, тем выше потенциальная стоимость.',
    whenToUse:
      'Deep watch оправдан, когда действительно нужно реагировать на любые вложенные изменения. Для одного конкретного поля лучше наблюдать getter. Для больших форм иногда полезнее разделить состояние или явно сохранять нужные части.',
    howItWorks:
      'Vue обходит объектную структуру и регистрирует зависимости на вложенных свойствах. При изменении глубокого свойства watcher срабатывает. В сложных структурах это может приводить к лишним вычислениям.',
    whyImportant:
      'Производительность watchers становится заметной на больших данных. На интервью важно показать, что deep watch — инструмент, а не настройка по умолчанию. Хороший инженер выбирает минимально достаточный источник наблюдения.',
    codeExample: {
      language: 'ts',
      filename: 'targeted-watch.ts',
      code: `watch(
  () => settings.theme,
  (theme) => applyTheme(theme),
)`,
    },
    commonMistake:
      'Ошибка — ставить `{ deep: true }` на весь объект, когда нужен один путь. Это усложняет отладку и может ухудшить производительность. Лучше наблюдать конкретный источник.',
    interviewQuestions: [
      'Почему deep watch может быть дорогим?',
      'Как заменить deep watch для одного поля?',
      'Когда deep watch действительно нужен?',
    ],
    remember:
      'Deep watch используй осознанно; чаще лучше наблюдать конкретный источник.',
  },
]
