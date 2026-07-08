import type { ContentKnowledgeCard } from '../../../types/content'

const createInterviewQuestions = (title: string, category: string): string[] => [
  `Какие задачи решает ${title} в теме ${category} (Nuxt Core)?`,
  `Какие ограничения ${title} важно учитывать в контексте Nuxt Core?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

export const nuxtCoreKnowledgeCards: ContentKnowledgeCard[] = [
  {
    id: 'nuxt-core-901',
    moduleId: 'nuxt-core',
    questionId: 901,
    title: 'Что такое Nuxt',
    category: 'Nuxt Basics',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Nuxt — фреймворк поверх Vue, который добавляет структуру проекта, файловую маршрутизацию, конфигурацию и production-инструменты. Он не заменяет Vue, а расширяет его соглашениями и готовыми решениями. Базовое понимание Nuxt начинается с того, какие задачи он снимает с разработчика.',
    whenToUse:
      'Nuxt используют, когда приложению нужны страницы, единая архитектура, маршруты, layouts и понятный workflow разработки. Он особенно полезен для долгоживущих продуктов, контентных сайтов и командной разработки. Для одного маленького виджета слой Nuxt может быть избыточным.',
    howItWorks:
      'Nuxt читает специальные папки и файлы, например pages, layouts, components и nuxt.config.ts. На основе conventions он собирает маршруты, подключает компоненты, применяет конфигурацию и запускает dev/build-процессы. Разработчик пишет Vue-код, а Nuxt организует инфраструктуру вокруг него.',
    whyImportant:
      'На интервью важно показать, что Nuxt — не магия и не UI-библиотека. Это архитектурный слой, который стандартизирует приложение на Vue. Такое объяснение помогает дальше обсуждать routing, конфигурацию и деплой без путаницы.',
    codeExample: {
      language: 'vue',
      filename: 'app.vue',
      code: `<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>`,
    },
    commonMistake:
      'Типичная ошибка — считать Nuxt заменой Vue или набором готовых компонентов. Правильнее воспринимать его как framework shell вокруг Vue-приложения.',
    interviewQuestions: createInterviewQuestions("Что такое Nuxt", "Nuxt Basics"),
    remember: 'Nuxt расширяет Vue conventions, routing, конфигурацией и production workflow.',
  },
  {
    id: 'nuxt-core-902',
    moduleId: 'nuxt-core',
    questionId: 902,
    title: 'Зачем появился Nuxt',
    category: 'Nuxt Basics',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Nuxt появился как ответ на повторяющиеся инфраструктурные задачи во Vue-приложениях. Вручную настраивать router, структуру страниц, layouts, сборку и conventions можно, но это быстро становится дорогим для команды. Nuxt предлагает готовую основу.',
    whenToUse:
      'Фреймворк полезен, когда проекту нужна стандартизированная архитектура, а не набор разрозненных решений. Он снижает количество решений, которые команда вынуждена принимать заново. Особенно это важно, когда проект растёт и к нему подключаются новые разработчики.',
    howItWorks:
      'Nuxt связывает Vue, Vite, файловую структуру и собственные conventions в единый workflow. Страницы появляются из pages, оболочки — из layouts, настройки — из nuxt.config.ts. В результате базовая инфраструктура становится частью фреймворка.',
    whyImportant:
      'На собеседовании вопрос о причине появления Nuxt проверяет понимание trade-off между свободой и convention-based архитектурой. Сильный ответ объясняет не только удобство, но и снижение хаоса в масштабируемом проекте.',
    codeExample: {
      language: 'bash',
      filename: 'terminal',
      code: `npx nuxi@latest init my-nuxt-app
cd my-nuxt-app
npm install
npm run dev`,
    },
    commonMistake:
      'Ошибка — выбирать Nuxt только потому, что он популярный. Выбор должен быть связан с маршрутизацией, структурой, lifecycle проекта и требованиями команды.',
    interviewQuestions: createInterviewQuestions("Зачем появился Nuxt", "Nuxt Basics"),
    remember: 'Nuxt ценен там, где conventions и инфраструктура экономят больше, чем стоят.',
  },
  {
    id: 'nuxt-core-903',
    moduleId: 'nuxt-core',
    questionId: 903,
    title: 'Vue SPA и Nuxt',
    category: 'Architecture Choice',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Vue SPA — это приложение на Vue, где архитектура обычно собирается вручную: router, store, структура папок и build-настройки выбираются командой. Nuxt добавляет opinionated-слой поверх Vue и предлагает готовые conventions. Оба подхода могут быть правильными.',
    whenToUse:
      'Vue SPA подходит для интерфейсов, где нужна максимальная гибкость и небольшой инфраструктурный слой. Nuxt лучше подходит, когда маршруты, страницы, layouts и конфигурация становятся центральной частью проекта. Решение зависит от масштаба и требований.',
    howItWorks:
      'В SPA разработчик явно подключает маршрутизатор и решает структуру проекта. В Nuxt route map формируется по pages, компоненты и composables могут auto-imported, а конфигурация централизуется. Nuxt не убирает Vue API, а задаёт способ организации.',
    whyImportant:
      'На интервью часто проверяют не знание лозунгов, а способность объяснить trade-off. Важно не говорить, что один подход всегда лучше другого. Зрелый ответ связывает выбор с поддержкой, командой и требованиями.',
    codeExample: {
      language: 'vue',
      filename: 'pages/profile.vue',
      code: `<template>
  <section>
    <h1>Профиль</h1>
  </section>
</template>`,
    },
    commonMistake:
      'Ошибка — утверждать, что Nuxt нужен для любого Vue-кода. Иногда простой Vue SPA проще, быстрее и дешевле в поддержке.',
    interviewQuestions: createInterviewQuestions("Vue SPA и Nuxt", "Architecture Choice"),
    remember: 'Nuxt отличается от Vue SPA прежде всего архитектурными conventions и готовой инфраструктурой.',
  },
  {
    id: 'nuxt-core-904',
    moduleId: 'nuxt-core',
    questionId: 904,
    title: 'Когда использовать Nuxt',
    category: 'Architecture Choice',
    rarity: 'rare',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Выбор Nuxt — архитектурное решение, а не просто выбор инструмента. Он означает, что проект принимает conventions фреймворка: pages, layouts, plugins, middleware, config и CLI workflow. Это даёт устойчивую структуру.',
    whenToUse:
      'Nuxt уместен для сайтов и приложений с несколькими страницами, общей оболочкой, повторяемыми маршрутизированными сценариями и долгим сроком поддержки. Он полезен, когда команда хочет снизить количество индивидуальных инфраструктурных решений. Чем больше проект, тем важнее предсказуемость.',
    howItWorks:
      'Фреймворк создаёт route map из файлов, подключает layouts, обрабатывает настройки и предоставляет стандартные команды. Разработчик сосредотачивается на страницах и доменной логике. Инфраструктурные решения становятся частью платформы.',
    whyImportant:
      'На практике неправильный выбор фреймворка дорого стоит. Если Nuxt выбран по делу, он ускоряет разработку и делает кодовую базу понятнее. Если выбран без причин, появляется лишняя сложность.',
    codeExample: {
      language: 'bash',
      filename: 'structure.txt',
      code: `pages/
  index.vue
  products/
    index.vue
    [id].vue
layouts/
  default.vue`,
    },
    commonMistake:
      'Ошибка — выбирать Nuxt ради модного названия, не связывая решение с маршрутизацией, командой и долгосрочной поддержкой.',
    interviewQuestions: createInterviewQuestions("Когда использовать Nuxt", "Architecture Choice"),
    remember: 'Nuxt стоит выбирать, когда его conventions реально упрощают архитектуру.',
  },
  {
    id: 'nuxt-core-905',
    moduleId: 'nuxt-core',
    questionId: 905,
    title: 'Когда Nuxt не нужен',
    category: 'Architecture Choice',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Nuxt может быть избыточным, если задача мала и не требует его архитектурного слоя. Фреймворк добавляет структуру, команды, conventions и свои правила организации. Это полезно не всегда.',
    whenToUse:
      'От Nuxt можно отказаться для маленького виджета, экспериментального прототипа без маршрутов или страницы, где достаточно обычного Vue. Также стоит быть осторожнее, если команда не готова следовать conventions. Простое решение иногда лучше сложного.',
    howItWorks:
      'Даже минимальный Nuxt-проект имеет framework lifecycle: app.vue, конфигурацию, CLI и внутреннюю структуру. Если эти возможности не используются, они становятся overhead. Vue напрямую может закрыть задачу меньшим количеством слоёв.',
    whyImportant:
      'На интервью ценится способность сказать, когда инструмент не нужен. Это показывает инженерную зрелость и понимание стоимости абстракций. Nuxt силён, но не обязан быть ответом на любую задачу.',
    codeExample: {
      language: 'vue',
      filename: 'SmallWidget.vue',
      code: `<script setup lang="ts">
const label = 'Небольшой Vue-виджет'
</script>

<template>
  <button>{{ label }}</button>
</template>`,
    },
    commonMistake:
      'Ошибка — считать, что более мощный фреймворк всегда делает решение лучше. Избыточная архитектура замедляет разработку и усложняет поддержку.',
    interviewQuestions: createInterviewQuestions("Когда Nuxt не нужен", "Architecture Choice"),
    remember: 'Nuxt не нужен, если его маршрутизация, структура и workflow не дают ощутимой пользы.',
  },
  {
    id: 'nuxt-core-906',
    moduleId: 'nuxt-core',
    questionId: 906,
    title: 'app.vue',
    category: 'Project Structure',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'app.vue — корневой компонент Nuxt-приложения. Он задаёт верхнюю оболочку интерфейса и обычно содержит NuxtLayout и NuxtPage. Через него удобно подключить глобальный shell, но не стоит превращать его в большой контейнер всей логики.',
    whenToUse:
      'app.vue используют для структуры самого верхнего уровня: layout wrapper, глобальные providers, общие элементы вокруг страницы. Для конкретных экранов лучше использовать pages, а для повторяемой оболочки — layouts. Это сохраняет корневой компонент лёгким.',
    howItWorks:
      'Nuxt монтирует app.vue как entry UI. NuxtPage отвечает за отображение текущей страницы, а NuxtLayout позволяет применить layout. Если app.vue отсутствует в некоторых шаблонах, Nuxt может использовать дефолтную оболочку, но явный файл делает структуру понятной.',
    whyImportant:
      'Понимание app.vue помогает не смешивать корневой shell и page-level код. На интервью это часто показывает, насколько разработчик понимает Nuxt lifecycle на уровне UI. Хороший app.vue обычно небольшой.',
    codeExample: {
      language: 'vue',
      filename: 'app.vue',
      code: `<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>`,
    },
    commonMistake:
      'Ошибка — складывать в app.vue логику всех страниц, модальные сценарии и доменные запросы. Такой файл быстро превращается в монолит.',
    interviewQuestions: createInterviewQuestions("app.vue", "Project Structure"),
    remember: 'app.vue — корневая оболочка, а не место для всей логики приложения.',
  },
  {
    id: 'nuxt-core-907',
    moduleId: 'nuxt-core',
    questionId: 907,
    title: 'pages и index.vue',
    category: 'Project Structure',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Папка pages создаёт маршруты по структуре файлов. Файл index.vue означает корень текущей директории. Поэтому pages/index.vue соответствует маршруту /.',
    whenToUse:
      'pages используют для route-level экранов: главная страница, профиль, каталог, карточка сущности. Если файл не должен становиться маршрутом, ему лучше быть компонентом или composable. Это разделение делает route map очевидной.',
    howItWorks:
      'Nuxt сканирует pages и строит маршруты из имён файлов и папок. index.vue превращается в путь текущего уровня, вложенные папки создают вложенные URL. Динамические сегменты описываются отдельными conventions.',
    whyImportant:
      'Файловая маршрутизация — одна из базовых причин использовать Nuxt. На интервью важно быстро объяснить, почему / появляется из pages/index.vue. Это демонстрирует знание conventions.',
    codeExample: {
      language: 'vue',
      filename: 'pages/index.vue',
      code: `<template>
  <main>
    <h1>Главная страница</h1>
  </main>
</template>`,
    },
    commonMistake:
      'Ошибка — ожидать путь /index. В Nuxt index.vue всегда означает индексный маршрут текущей папки.',
    interviewQuestions: createInterviewQuestions("pages и index.vue", "Project Structure"),
    remember: 'pages/index.vue создаёт маршрут /.',
  },
  {
    id: 'nuxt-core-908',
    moduleId: 'nuxt-core',
    questionId: 908,
    title: 'Файловая маршрутизация pages',
    category: 'Routing Conventions',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Файловая маршрутизация — convention, при которой URL строится из дерева файлов в pages. Разработчику не нужно вручную описывать каждый маршрут в router-конфиге. Структура проекта становится картой URL.',
    whenToUse:
      'Эта convention используется для всех обычных страниц Nuxt. Она удобна, когда URL должен быть читаемым и связанным со структурой экранов. Для повторяемых частей интерфейса нужно использовать components, а не pages.',
    howItWorks:
      'Файл pages/profile/settings.vue создаёт маршрут /profile/settings. Папки становятся сегментами URL, а файлы задают конкретные страницы. Благодаря этому route map можно понять без открытия отдельного router-файла.',
    whyImportant:
      'На практике файловая маршрутизация снижает boilerplate и повышает discoverability. На интервью это нужно объяснять как архитектурное соглашение, а не просто удобство генерации URL.',
    codeExample: {
      language: 'bash',
      filename: 'pages-tree.txt',
      code: `pages/
  index.vue              -> /
  profile/
    settings.vue         -> /profile/settings`,
    },
    commonMistake:
      'Ошибка — помещать в pages вспомогательные компоненты, которые не должны быть страницами. Это создаёт лишние маршруты и путает структуру.',
    interviewQuestions: createInterviewQuestions("Файловая маршрутизация pages", "Routing Conventions"),
    remember: 'В pages должны лежать route-level экраны, а не любые Vue-компоненты.',
  },
  {
    id: 'nuxt-core-909',
    moduleId: 'nuxt-core',
    questionId: 909,
    title: 'layouts',
    category: 'Project Structure',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Layouts — это переиспользуемые оболочки страниц. Они помогают вынести общий каркас: header, sidebar, footer, контейнеры и навигацию. Страница остаётся сфокусированной на своём содержимом.',
    whenToUse:
      'Layout нужен, когда несколько страниц разделяют одинаковую структуру. Например, публичные страницы могут использовать default layout, а личный кабинет — dashboard layout. Это снижает дублирование и делает композицию понятнее.',
    howItWorks:
      'Файл layouts/default.vue может оборачивать NuxtPage через slot. Страница выбирает layout через definePageMeta или использует default по умолчанию. Nuxt соединяет страницу и layout во время рендера.',
    whyImportant:
      'Layouts — один из ключевых инструментов декомпозиции Nuxt UI. На интервью важно отличать layout от страницы и компонента. Layout описывает оболочку, а не бизнес-сценарий.',
    codeExample: {
      language: 'vue',
      filename: 'layouts/default.vue',
      code: `<template>
  <div>
    <AppHeader />
    <slot />
  </div>
</template>`,
    },
    commonMistake:
      'Ошибка — копировать одинаковые header и navigation в каждую страницу. Это приводит к дублированию и сложным изменениям дизайна.',
    interviewQuestions: createInterviewQuestions("layouts", "Project Structure"),
    remember: 'Layout отвечает за повторяемую оболочку страниц.',
  },
  {
    id: 'nuxt-core-910',
    moduleId: 'nuxt-core',
    questionId: 910,
    title: 'components и auto import',
    category: 'Project Structure',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Папка components хранит переиспользуемые Vue-компоненты. Nuxt может автоматически импортировать их в шаблоны, поэтому обычный компонент не требует ручной глобальной регистрации. Это ускоряет разработку и уменьшает boilerplate.',
    whenToUse:
      'components подходит для UI-частей, которые используются внутри страниц, layouts или других компонентов. Если файл представляет отдельный URL, он должен быть в pages. Если файл хранит Composition API-логику, ему лучше быть в composables.',
    howItWorks:
      'Nuxt сканирует components и генерирует импорты. Компонент AppHeader.vue можно использовать как <AppHeader /> без явного import в каждом файле. При этом важно сохранять понятные имена, чтобы auto import не скрывал смысл.',
    whyImportant:
      'Auto import повышает скорость, но требует дисциплины. На интервью стоит упомянуть, что удобство не отменяет архитектурных границ между components, pages и composables.',
    codeExample: {
      language: 'vue',
      filename: 'components/AppHeader.vue',
      code: `<template>
  <header>
    <NuxtLink to="/">Home</NuxtLink>
  </header>
</template>`,
    },
    commonMistake:
      'Ошибка — дополнительно регистрировать обычные компоненты через plugin без причины. Это дублирует встроенную возможность Nuxt.',
    interviewQuestions: createInterviewQuestions("components и auto import", "Project Structure"),
    remember: 'components хранит UI-компоненты, которые Nuxt может auto-imported.',
  },
  {
    id: 'nuxt-core-911',
    moduleId: 'nuxt-core',
    questionId: 911,
    title: 'composables',
    category: 'Project Structure',
    rarity: 'rare',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Папка composables хранит переиспользуемую Composition API-логику. В Nuxt функции вида useSomething могут автоматически импортироваться. Это помогает отделить состояние и поведение от конкретного компонента.',
    whenToUse:
      'Composable стоит создавать, когда логика используется в нескольких местах или слишком утяжеляет компонент. Например, работа с фильтрами, локальным состоянием, форматированием или браузерным API. UI при этом остаётся в компонентах.',
    howItWorks:
      'Файл composables/useCounter.ts экспортирует функцию, которую можно вызвать в компоненте или странице. Nuxt обнаруживает composable и делает его доступным без ручного import. Возвращать можно refs, computed и методы.',
    whyImportant:
      'Composables — важная часть масштабирования Nuxt-кода. На интервью важно объяснить, что composable не является store и не обязан быть singleton. Он просто инкапсулирует переиспользуемую логику.',
    codeExample: {
      language: 'ts',
      filename: 'composables/useCartState.ts',
      code: `type CartItem = {
  id: string
  title: string
}

export const useCartState = () => {
  const items = ref<CartItem[]>([])

  const addItem = (item: CartItem) => {
    items.value.push(item)
  }

  return { items, addItem }
}`,
    },
    commonMistake:
      'Ошибка — хранить composable внутри конкретного компонента, а затем копировать его в другие места. Лучше вынести общую логику сразу.',
    interviewQuestions: createInterviewQuestions("composables", "Project Structure"),
    remember: 'composables отделяют переиспользуемую Composition API-логику от UI.',
  },
  {
    id: 'nuxt-core-912',
    moduleId: 'nuxt-core',
    questionId: 912,
    title: 'assets и public',
    category: 'Project Structure',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'assets и public хранят статические ресурсы, но работают по-разному. assets проходит через сборщик, поэтому файлы можно импортировать и оптимизировать. public отдаётся как статическая директория по прямому URL.',
    whenToUse:
      'assets используют для изображений, стилей и ресурсов, которые участвуют в build pipeline. public подходит для файлов, которые должны быть доступны напрямую без обработки: favicon, robots.txt, статический документ. Выбор влияет на кеширование и путь доступа.',
    howItWorks:
      'Файл из assets импортируется в компонент и проходит через Vite. Файл из public доступен от корня сайта, например /robots.txt. Эти сценарии не стоит смешивать без причины.',
    whyImportant:
      'На интервью вопрос assets vs public проверяет практическое понимание сборки. Неверное размещение ресурсов часто приводит к сломанным путям и неожиданным 404.',
    codeExample: {
      language: 'vue',
      filename: 'components/LogoImage.vue',
      code: `<script setup lang="ts">
import logoUrl from '~/assets/logo.svg'
</script>

<template>
  <img :src="logoUrl" alt="Logo" />
</template>`,
    },
    commonMistake:
      'Ошибка — класть все изображения в public только потому, что так проще написать путь. Если ресурс импортируется в код, assets обычно подходит лучше.',
    interviewQuestions: createInterviewQuestions("assets и public", "Project Structure"),
    remember: 'assets обрабатывается сборщиком, public отдаётся напрямую.',
  },
  {
    id: 'nuxt-core-913',
    moduleId: 'nuxt-core',
    questionId: 913,
    title: 'middleware',
    category: 'Project Structure',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Route middleware в Nuxt описывает логику, которая выполняется при навигации к странице. Его часто применяют для проверок доступа, редиректов и предварительных условий перехода. Это не компонент и не CSS-слой.',
    whenToUse:
      'Middleware используют, когда решение должно приниматься до отображения страницы. Например, пользователь не должен попасть на закрытую страницу без нужного состояния авторизации. Простую UI-логику лучше не переносить в middleware.',
    howItWorks:
      'Файл middleware/auth.ts экспортирует defineNuxtRouteMiddleware. Страница подключает его через definePageMeta или middleware может быть глобальным при правильном именовании. Внутри можно вернуть navigateTo для перенаправления.',
    whyImportant:
      'Middleware формирует границу доступа и навигационную политику. На интервью важно не смешивать его с бизнес-логикой страницы: middleware отвечает за переход, а не за весь сценарий экрана.',
    codeExample: {
      language: 'ts',
      filename: 'middleware/auth.ts',
      code: `export default defineNuxtRouteMiddleware(() => {
  const isLoggedIn = useState('isLoggedIn', () => false)

  if (!isLoggedIn.value) {
    return navigateTo('/login')
  }
})`,
    },
    commonMistake:
      'Ошибка — выполнять в middleware тяжёлые UI-операции или хранить там всю логику авторизации. Middleware должен оставаться навигационным слоем.',
    interviewQuestions: createInterviewQuestions("middleware", "Project Structure"),
    remember: 'middleware отвечает за проверки и решения во время навигации.',
  },
  {
    id: 'nuxt-core-914',
    moduleId: 'nuxt-core',
    questionId: 914,
    title: 'plugins',
    category: 'Project Structure',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Plugins в Nuxt используются для одноразовой инициализации библиотек, провайдеров и общих интеграций. Они помогают подключить внешние инструменты в framework lifecycle. Плагин не должен становиться местом для всей бизнес-логики.',
    whenToUse:
      'Plugin уместен для настройки библиотеки дат, аналитики, UI-провайдера или общего клиента. Если код относится к одному компоненту, plugin будет лишним. Если код повторяется в нескольких местах как логика, возможно, нужен composable.',
    howItWorks:
      'Файл plugins/dayjs.ts автоматически подхватывается Nuxt. Внутри можно настроить библиотеку и вернуть provide, если нужно сделать значение доступным через Nuxt app. Важно учитывать среду выполнения при работе с browser-only API.',
    whyImportant:
      'Plugins часто становятся источником скрытых зависимостей. На интервью важно объяснить, когда plugin оправдан и почему его не стоит использовать как глобальную свалку.',
    codeExample: {
      language: 'ts',
      filename: 'plugins/dayjs.ts',
      code: `import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

export default defineNuxtPlugin(() => {
  dayjs.extend(localizedFormat)

  return {
    provide: { dayjs },
  }
})`,
    },
    commonMistake:
      'Ошибка — добавлять plugin для каждого маленького helper. Это создаёт глобальные зависимости и усложняет тестирование.',
    interviewQuestions: createInterviewQuestions("plugins", "Project Structure"),
    remember: 'plugins нужны для интеграций и одноразовой настройки, а не для любой логики.',
  },
  {
    id: 'nuxt-core-915',
    moduleId: 'nuxt-core',
    questionId: 915,
    title: 'nuxt.config.ts',
    category: 'Configuration',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'nuxt.config.ts — центральный файл конфигурации Nuxt. В нём описывают modules, css, runtimeConfig, aliases, app-настройки и другие параметры фреймворка. Он не должен содержать page-level логику.',
    whenToUse:
      'Этот файл меняют, когда нужно настроить поведение приложения на уровне Nuxt. Например, подключить глобальные стили, настроить публичные runtime-переменные или добавить модуль. Компонентный код должен оставаться в компонентах и страницах.',
    howItWorks:
      'Nuxt читает конфиг при запуске dev-сервера и сборке. defineNuxtConfig помогает типизировать настройки. Многие решения в конфиге влияют на весь проект, поэтому изменения должны быть осознанными.',
    whyImportant:
      'На интервью nuxt.config.ts часто проверяет понимание границ ответственности. Хороший ответ отделяет конфигурацию фреймворка от данных пользователя, UI-состояния и содержимого страниц.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  css: ['~/assets/styles/main.css'],
  runtimeConfig: {
    public: {
      apiBaseUrl: '/api',
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — хранить в nuxt.config.ts данные страниц, тексты интерфейса или результат запросов. Конфиг должен оставаться конфигом.',
    interviewQuestions: createInterviewQuestions("nuxt.config.ts", "Configuration"),
    remember: 'nuxt.config.ts управляет настройками Nuxt на уровне приложения.',
  },
  {
    id: 'nuxt-core-916',
    moduleId: 'nuxt-core',
    questionId: 916,
    title: 'runtimeConfig',
    category: 'Configuration',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'runtimeConfig хранит значения конфигурации, которые могут зависеть от окружения. В Nuxt важно различать публичную часть public и приватные значения. Клиентский код должен видеть только то, что явно помещено в public.',
    whenToUse:
      'runtimeConfig используют для URL API, feature flags, ключей окружения и параметров, которые меняются между environments. Публичные значения можно читать на клиенте. Секреты нельзя раскрывать через public.',
    howItWorks:
      'Конфигурация объявляется в nuxt.config.ts и читается через useRuntimeConfig. Значения могут подставляться из переменных окружения. Nuxt разделяет доступные клиенту и приватные значения.',
    whyImportant:
      'runtimeConfig связан с безопасностью и деплоем. На интервью сильный ответ обязательно упоминает public/private границу и риск утечки секретов.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBaseUrl: 'https://api.example.com',
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — складывать секреты в public ради удобного доступа. Всё внутри public следует считать доступным клиентскому коду.',
    interviewQuestions: createInterviewQuestions("runtimeConfig", "Configuration"),
    remember: 'В runtimeConfig публичное должно быть явно публичным, а секреты не должны попадать в public.',
  },
  {
    id: 'nuxt-core-917',
    moduleId: 'nuxt-core',
    questionId: 917,
    title: 'app.config.ts',
    category: 'Configuration',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'app.config.ts описывает конфигурацию приложения, которую удобно использовать в UI и runtime-логике. Он отличается от runtimeConfig тем, что не предназначен для секретов окружения. Обычно там живут публичные настройки интерфейса.',
    whenToUse:
      'app.config.ts подходит для theme tokens, названий, настроек отображения и публичных параметров поведения. Если значение зависит от окружения или связано с секретами, лучше смотреть в сторону runtimeConfig. Границы между этими файлами должны быть понятны команде.',
    howItWorks:
      'Конфигурация объявляется через defineAppConfig и читается через useAppConfig. Значения доступны как часть конфигурации приложения. Это удобно для UI-настроек, которые не являются переменными окружения.',
    whyImportant:
      'На интервью вопрос app.config.ts vs runtimeConfig проверяет понимание конфигурационных слоёв. Сильный ответ объясняет назначение, а не просто перечисляет файлы.',
    codeExample: {
      language: 'ts',
      filename: 'app.config.ts',
      code: `export default defineAppConfig({
  ui: {
    primaryColor: '#00FFB1',
    compactHeader: false,
  },
})`,
    },
    commonMistake:
      'Ошибка — хранить секреты или environment-specific токены в app.config.ts. Для таких значений нужен runtimeConfig с правильной границей доступа.',
    interviewQuestions: createInterviewQuestions("app.config.ts", "Configuration"),
    remember: 'app.config.ts удобен для публичной конфигурации приложения, runtimeConfig — для runtime и environment settings.',
  },
  {
    id: 'nuxt-core-918',
    moduleId: 'nuxt-core',
    questionId: 918,
    title: 'Auto imports',
    category: 'Developer Experience',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Auto imports — механизм Nuxt, который автоматически делает доступными компоненты, composables и часть framework utilities. Он уменьшает количество повторяющихся import-строк. При этом зависимости всё равно должны оставаться понятными.',
    whenToUse:
      'Auto imports хорошо подходят для стандартных Nuxt-сущностей и часто используемых composables. В сложных местах явный import иногда делает код читабельнее. В больших командах правила auto imports лучше согласовывать.',
    howItWorks:
      'Nuxt сканирует определённые папки и генерирует типы и импорты. Разработчик может вызвать useCounter или использовать AppHeader без ручного import, если сущность находится в ожидаемом месте. IDE получает подсказки через сгенерированные типы.',
    whyImportant:
      'Auto imports улучшают developer experience, но могут скрывать происхождение кода. На интервью важно показать баланс: использовать удобство, но не терять прозрачность архитектуры.',
    codeExample: {
      language: 'vue',
      filename: 'pages/counter.vue',
      code: `<script setup lang="ts">
const { count, increment } = useCounter()
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>`,
    },
    commonMistake:
      'Ошибка — создавать много похожих auto-imported функций с неясными именами. Через несколько месяцев источник зависимости становится трудно найти.',
    interviewQuestions: createInterviewQuestions("Auto imports", "Developer Experience"),
    remember: 'Auto imports экономят boilerplate, но требуют понятного нейминга и границ.',
  },
  {
    id: 'nuxt-core-919',
    moduleId: 'nuxt-core',
    questionId: 919,
    title: 'Aliases',
    category: 'Architecture',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Aliases — короткие пути импорта от корня проекта или специальных директорий. В Nuxt часто используют ~/ или @/ для обращения к файлам без длинных относительных путей. Это делает импорты устойчивее к перемещению файлов.',
    whenToUse:
      'Aliases полезны, когда файл импортирует код из другой части проекта. Они особенно помогают в глубоких структурах, где ../../ быстро становится нечитаемым. Для соседнего файла относительный импорт всё ещё может быть нормальным.',
    howItWorks:
      'Nuxt и TypeScript понимают настроенные aliases и преобразуют их в реальные пути. Импорт ~/components/AppHeader.vue читается как путь от корня исходников. Это упрощает refactoring и code review.',
    whyImportant:
      'На интервью aliases показывают умение поддерживать большую кодовую базу. Важно понимать, что alias не делает код глобальным и не заменяет архитектуру папок.',
    codeExample: {
      language: 'ts',
      filename: 'example.ts',
      code: `import AppHeader from '~/components/AppHeader.vue'
import { formatPrice } from '~/utils/formatPrice'`,
    },
    commonMistake:
      'Ошибка — думать, что alias скрывает архитектурные проблемы. Если папки плохо организованы, короткий путь не сделает систему понятной.',
    interviewQuestions: createInterviewQuestions("Aliases", "Architecture"),
    remember: 'Aliases улучшают читаемость импортов, но не заменяют хорошую структуру.',
  },
  {
    id: 'nuxt-core-920',
    moduleId: 'nuxt-core',
    questionId: 920,
    title: 'Conventions Nuxt',
    category: 'Architecture',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Conventions Nuxt — это набор ожидаемых файлов и папок, которые фреймворк понимает без ручной настройки. pages создаёт маршруты, layouts задаёт оболочки, plugins подключает интеграции, composables хранит переиспользуемую логику. Эти conventions являются частью архитектуры.',
    whenToUse:
      'Следовать conventions стоит по умолчанию. Отклоняться от них имеет смысл только при понятной причине: доменная структура, монорепозиторий, сложная команда или особые требования. Любое отклонение нужно документировать.',
    howItWorks:
      'Nuxt сканирует файловую структуру и применяет поведение на основе имён папок и файлов. Это снижает количество конфигурации и делает кодовую базу знакомой для разработчиков, которые уже работали с Nuxt. Соглашения работают как общий язык команды.',
    whyImportant:
      'На интервью понимание conventions показывает, что разработчик умеет работать с framework-way, а не пытается каждый раз строить собственный фреймворк поверх фреймворка. Это критично для поддержки.',
    codeExample: {
      language: 'bash',
      filename: 'nuxt-conventions.txt',
      code: `app.vue
pages/
layouts/
components/
composables/
plugins/
middleware/
nuxt.config.ts`,
    },
    commonMistake:
      'Ошибка — переименовывать стандартные папки и дублировать поведение Nuxt без реальной причины. Это ломает ожидаемость проекта.',
    interviewQuestions: createInterviewQuestions("Conventions Nuxt", "Architecture"),
    remember: 'Conventions Nuxt — это архитектурный контракт между фреймворком и командой.',
  },
  {
    id: 'nuxt-core-921',
    moduleId: 'nuxt-core',
    questionId: 921,
    title: 'CLI workflow',
    category: 'CLI',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'CLI workflow Nuxt включает команды для создания проекта, разработки, сборки, просмотра production-результата и статической генерации. Каждая команда отвечает за отдельный этап жизненного цикла. Понимание команд помогает правильно проверять изменения.',
    whenToUse:
      'dev используют во время разработки, build — для production-сборки, preview — для локальной проверки build-результата, generate — для статической генерации. create-nuxt нужен только на старте проекта. Смешивание команд приводит к ложной уверенности в качестве сборки.',
    howItWorks:
      'Package scripts обычно оборачивают команды Nuxt. Dev-сервер быстрый и удобный, но не равен production. Build создаёт артефакт, preview позволяет посмотреть его ближе к реальному deployment-сценарию.',
    whyImportant:
      'На интервью CLI-вопросы проверяют практический опыт. Разработчик должен понимать, почему dev недостаточно для финальной проверки и чем preview отличается от разработки.',
    codeExample: {
      language: 'json',
      filename: 'package.json',
      code: `{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "preview": "nuxt preview",
    "generate": "nuxt generate"
  }
}`,
    },
    commonMistake:
      'Ошибка — проверять только dev-сервер и считать, что production-сборка точно работает. Build и preview должны быть частью проверки перед релизом.',
    interviewQuestions: createInterviewQuestions("CLI workflow", "CLI"),
    remember: 'dev, build, preview и generate отвечают за разные этапы workflow.',
  },
  {
    id: 'nuxt-core-922',
    moduleId: 'nuxt-core',
    questionId: 922,
    title: 'create-nuxt',
    category: 'CLI',
    rarity: 'common',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'create-nuxt — стартовый инструмент для создания нового Nuxt-проекта. Он подготавливает базовую структуру, package setup и начальные файлы. После этого проект развивается через обычные команды package manager.',
    whenToUse:
      'create-nuxt используют только при инициализации новой кодовой базы или прототипа. Для существующего проекта нужны dev, build, preview или generate. Повторный запуск create-nuxt внутри рабочей кодовой базы обычно не нужен.',
    howItWorks:
      'Команда создаёт директорию проекта и предлагает базовые настройки. После установки зависимостей можно запускать dev-сервер. Дальше разработка происходит через Nuxt conventions и package scripts.',
    whyImportant:
      'На интервью это простой вопрос, но он отделяет команду старта проекта от команд жизненного цикла. Ошибка в этом месте часто показывает отсутствие практики.',
    codeExample: {
      language: 'bash',
      filename: 'terminal',
      code: `npx nuxi@latest init nuxt-training
cd nuxt-training
npm install
npm run dev`,
    },
    commonMistake:
      'Ошибка — путать create-nuxt с командой запуска или сборки. Это scaffold-команда, а не runtime-инструмент.',
    interviewQuestions: createInterviewQuestions("create-nuxt", "CLI"),
    remember: 'create-nuxt создаёт проект, но не заменяет dev/build/preview workflow.',
  },
  {
    id: 'nuxt-core-923',
    moduleId: 'nuxt-core',
    questionId: 923,
    title: 'dev, build, preview, generate',
    category: 'CLI',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Команды Nuxt описывают разные режимы работы проекта. dev запускает среду разработки, build собирает production-артефакт, preview проверяет собранный результат, generate создаёт статический вариант там, где это подходит. Эти команды нельзя считать взаимозаменяемыми.',
    whenToUse:
      'dev нужен для ежедневной разработки. build запускают перед публикацией или CI-проверкой. preview используют для локального просмотра результата сборки. generate выбирают для сценариев статической генерации, если архитектура это поддерживает.',
    howItWorks:
      'Команды обычно вызываются через npm scripts. Каждая команда активирует свой pipeline Nuxt. Чем ближе команда к production, тем больше она помогает найти проблемы, которые не видны в dev.',
    whyImportant:
      'На интервью важно показать, что проверка приложения не заканчивается dev-сервером. Production-сборка может выявить ошибки импорта, окружения и конфигурации. Это практическая дисциплина.',
    codeExample: {
      language: 'bash',
      filename: 'terminal',
      code: `npm run dev
npm run build
npm run preview
npm run generate`,
    },
    commonMistake:
      'Ошибка — запускать preview до build и ожидать актуальный production-результат. Обычно сначала нужна сборка.',
    interviewQuestions: createInterviewQuestions("dev, build, preview, generate", "CLI"),
    remember: 'dev разрабатывает, build собирает, preview проверяет сборку, generate статически генерирует.',
  },
  {
    id: 'nuxt-core-924',
    moduleId: 'nuxt-core',
    questionId: 924,
    title: 'build и generate',
    category: 'CLI',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'build и generate относятся к разным deployment-сценариям. build создаёт production-сборку Nuxt, а generate используется для статической генерации страниц, когда такой режим подходит архитектуре. Эти команды нельзя слепо подменять друг другом.',
    whenToUse:
      'build подходит как базовая production-проверка. generate выбирают для статических сайтов или сценариев, где страницы могут быть заранее сгенерированы. Если приложение зависит от runtime-поведения, нужно внимательно оценить ограничения статической генерации.',
    howItWorks:
      'build запускает production pipeline и формирует артефакты. generate пытается создать статический output по маршрутам и настройкам. Разница влияет на deployment, кеширование и доступность динамических данных.',
    whyImportant:
      'На интервью этот вопрос показывает опыт деплоя, а не только знание команд. Важно объяснить, что правильная команда зависит от модели приложения и hosting-сценария.',
    codeExample: {
      language: 'bash',
      filename: 'terminal',
      code: `# production build
npm run build

# static generation, if the app model supports it
npm run generate`,
    },
    commonMistake:
      'Ошибка — считать generate универсальной заменой build. Статическая генерация требует подходящей архитектуры.',
    interviewQuestions: createInterviewQuestions("build и generate", "CLI"),
    remember: 'build и generate выбирают по deployment-модели, а не по привычке.',
  },
  {
    id: 'nuxt-core-925',
    moduleId: 'nuxt-core',
    questionId: 925,
    title: 'Структура больших проектов',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Большой Nuxt-проект требует структуры, которая поддерживает рост. Базовые folders Nuxt остаются полезными, но вокруг них часто появляются feature или domain-модули. Главная цель — быстро понимать, где находится код и кому он принадлежит.',
    whenToUse:
      'Доменную организацию стоит вводить, когда страниц и сценариев становится много. Route-level файлы остаются в pages, общие UI-части — в components, логика — в composables или features. Важно не ломать Nuxt conventions, а дополнять их.',
    howItWorks:
      'Pages собирают экран и подключают нужные модули. Feature-папка может хранить компоненты, composables и utils конкретного сценария. Shared-слой должен быть небольшим и действительно общим.',
    whyImportant:
      'На Senior-уровне вопрос структуры становится критичным. Плохая структура делает добавление функций медленным, а code review — болезненным. Nuxt даёт основу, но масштабирование требует правил.',
    codeExample: {
      language: 'bash',
      filename: 'large-nuxt-structure.txt',
      code: `pages/
  products/[id].vue
features/
  product/
    components/
    composables/
    utils/
components/
  ui/`,
    },
    commonMistake:
      'Ошибка — создать одну большую папку shared и складывать туда всё подряд. Через некоторое время shared превращается в неуправляемый монолит.',
    interviewQuestions: createInterviewQuestions("Структура больших проектов", "Architecture"),
    remember: 'Масштабируемая структура дополняет Nuxt conventions доменными границами.',
  },
  {
    id: 'nuxt-core-926',
    moduleId: 'nuxt-core',
    questionId: 926,
    title: 'Организация модулей',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Организация модулей — способ группировать код по смыслу, а не только по типу файла. В Nuxt важно сохранить совместимость с conventions и при этом не превращать pages в место всей логики. Feature-модули помогают отделять доменные сценарии.',
    whenToUse:
      'Модульная организация нужна, когда домен становится достаточно крупным: каталог, профиль, checkout, обучение, админка. Если сценарий маленький, отдельный модуль может быть лишним. Решение должно уменьшать сложность, а не увеличивать её.',
    howItWorks:
      'Страница в pages подключает компоненты и composables из feature-модуля. Модуль может экспортировать публичный API, чтобы внешние части проекта не лезли во внутренние файлы. Общие primitives остаются в components/ui или utils.',
    whyImportant:
      'На интервью архитектурные вопросы проверяют способность думать о росте кодовой базы. Хороший ответ показывает границы: route-level, feature-level и shared-level.',
    codeExample: {
      language: 'ts',
      filename: 'features/profile/index.ts',
      code: `export { default as ProfileSummary } from './components/ProfileSummary.vue'
export { useProfileForm } from './composables/useProfileForm'`,
    },
    commonMistake:
      'Ошибка — делать модуль ради каждой мелкой функции. Модули должны отражать реальные границы продукта или технического сценария.',
    interviewQuestions: createInterviewQuestions("Организация модулей", "Architecture"),
    remember: 'Feature-модули помогают масштабировать Nuxt без отказа от его conventions.',
  },
  {
    id: 'nuxt-core-927',
    moduleId: 'nuxt-core',
    questionId: 927,
    title: 'Best practices conventions',
    category: 'Best Practices',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Best practices Nuxt начинаются с уважения к conventions. Если фреймворк ожидает pages, layouts, plugins и composables, лучше использовать эти точки расширения. Самодельные параллельные системы должны иметь сильную причину.',
    whenToUse:
      'Стандартные conventions подходят для большинства проектов. Отклоняться можно при сложной доменной модели, legacy-интеграции или монорепозитории. Главное — документировать причину и не ломать ожидаемость для команды.',
    howItWorks:
      'Nuxt даёт предсказуемые места для типичных задач. Если файл находится там, где его ожидает фреймворк, он подключается проще и читается быстрее. Команда тратит меньше времени на поиск скрытой логики.',
    whyImportant:
      'На интервью зрелый ответ не сводится к списку папок. Нужно объяснить, что conventions — инструмент коммуникации в команде. Они делают проект понятным до чтения каждой строки кода.',
    codeExample: {
      language: 'bash',
      filename: 'rule-of-thumb.txt',
      code: `pages -> route screens
layouts -> page shells
components -> reusable UI
composables -> reusable logic
plugins -> integrations`,
    },
    commonMistake:
      'Ошибка — переносить привычную структуру из другого фреймворка, игнорируя Nuxt-way. Это часто создаёт лишнюю сложность.',
    interviewQuestions: createInterviewQuestions("Best practices conventions", "Best Practices"),
    remember: 'Nuxt conventions — не ограничение ради ограничения, а общий язык проекта.',
  },
  {
    id: 'nuxt-core-928',
    moduleId: 'nuxt-core',
    questionId: 928,
    title: 'Anti-patterns Nuxt Core',
    category: 'Best Practices',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Anti-pattern в Nuxt Core — это решение, которое конфликтует с conventions и ухудшает поддержку без реальной выгоды. Частые примеры: толстые pages, глобальные plugins для любой логики, смешивание public/assets и ручная регистрация того, что Nuxt уже умеет.',
    whenToUse:
      'Этот список полезен на code review и при проектировании структуры. Если решение усложняет стандартный путь Nuxt, стоит спросить, какую проблему оно решает. Не каждое отклонение плохо, но каждое должно быть объяснимым.',
    howItWorks:
      'Anti-pattern обычно начинается незаметно: один helper в plugin, один компонент в pages, один общий shared без правил. Затем кодовая база теряет границы. Чем раньше команда фиксирует правила, тем дешевле поддержка.',
    whyImportant:
      'На интервью anti-patterns показывают практический опыт. Знать happy path недостаточно; нужно понимать, какие решения ломают проект через несколько месяцев.',
    codeExample: {
      language: 'bash',
      filename: 'anti-patterns.txt',
      code: `Avoid:
- huge pages with all logic
- plugins for small helpers
- duplicated layout markup
- public assets that should be imported`,
    },
    commonMistake:
      'Ошибка — исправлять каждую проблему новым глобальным слоем. Часто лучше вернуться к стандартной папке Nuxt и простой декомпозиции.',
    interviewQuestions: createInterviewQuestions("Anti-patterns Nuxt Core", "Best Practices"),
    remember: 'Anti-pattern чаще всего нарушает границы ответственности и conventions Nuxt.',
  },
  {
    id: 'nuxt-core-929',
    moduleId: 'nuxt-core',
    questionId: 929,
    title: 'Границы Nuxt Core',
    category: 'Architecture Boundaries',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Nuxt Core — фундаментальный слой: структура проекта, pages, layouts, plugins, middleware, конфигурация и CLI workflow. SSR, Nitro и Server API являются отдельными областями, которые строятся поверх этой базы. Смешивание всех тем сразу мешает понять ответственность каждого слоя.',
    whenToUse:
      'Такое разделение полезно при обучении, проектировании и интервью. Сначала нужно понимать, как устроен Nuxt-проект, где живут страницы и как работает конфигурация. После этого проще обсуждать rendering strategies и backend-возможности.',
    howItWorks:
      'Core-слой задаёт правила организации приложения. Более сложные механики используют эти правила, но не заменяют их. Например, даже при изучении серверных возможностей всё равно остаются pages, config, plugins и CLI.',
    whyImportant:
      'Senior-ответ должен отделять базовый framework shell от runtime-слоёв. Это помогает не объяснять любую проблему через SSR или Nitro. Чёткие границы делают архитектурное мышление сильнее.',
    codeExample: {
      language: 'bash',
      filename: 'nuxt-layers.txt',
      code: `Nuxt Core:
- structure
- pages and layouts
- config
- plugins and middleware
- CLI workflow

Separate modules:
- SSR
- Nitro
- Server API`,
    },
    commonMistake:
      'Ошибка — называть любую возможность Nuxt SSR или Nitro. У фреймворка есть core-слой, который нужно понимать отдельно.',
    interviewQuestions: createInterviewQuestions("Границы Nuxt Core", "Architecture Boundaries"),
    remember: 'Nuxt Core — база, на которой осмысленно изучать SSR, Nitro и Server API.',
  },
  {
    id: 'nuxt-core-930',
    moduleId: 'nuxt-core',
    questionId: 930,
    title: 'Тонкие pages',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Тонкая page — страница, которая отвечает за route-level композицию, а не хранит весь доменный сценарий. Она собирает layout-level данные, компоненты и feature-модули. Это снижает связность и упрощает тестирование.',
    whenToUse:
      'Подход особенно полезен в больших Nuxt-проектах. Если страница начинает содержать много бизнес-логики, форматирования, запросов и вложенных компонентов, часть кода лучше вынести. Page должна оставаться точкой сборки маршрута.',
    howItWorks:
      'pages/products/[id].vue может подключить ProductDetails из feature-модуля и передать route params. Доменная логика находится рядом с product-feature, а не размазана по route файлу. Layout остаётся отдельной оболочкой.',
    whyImportant:
      'На Senior-интервью часто обсуждают, как проект переживёт рост. Тонкие pages помогают сохранить route map читаемой и не превращают Nuxt conventions в монолит.',
    codeExample: {
      language: 'vue',
      filename: 'pages/products/[id].vue',
      code: `<script setup lang="ts">
import { ProductDetails } from '~/features/product'

const route = useRoute()
</script>

<template>
  <ProductDetails :product-id="String(route.params.id)" />
</template>`,
    },
    commonMistake:
      'Ошибка — считать pages удобным местом для всей логики, потому что файл уже связан с маршрутом. Это быстро делает страницы тяжёлыми.',
    interviewQuestions: createInterviewQuestions("Тонкие pages", "Architecture"),
    remember: 'Page должна собирать экран маршрута, а не владеть всей доменной логикой.',
  },
  {
    id: 'nuxt-core-931',
    moduleId: 'nuxt-core',
    questionId: 931,
    title: 'Безопасный runtimeConfig',
    category: 'Configuration',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Безопасный runtimeConfig — это дисциплина разделения публичных и приватных настроек. Всё, что находится в public, нужно считать доступным клиенту. Приватные значения не должны случайно попадать в UI-код.',
    whenToUse:
      'Эта тема важна при работе с API URLs, токенами, секретами и environment-specific настройками. Даже если значение кажется безобидным, нужно понимать, где оно будет доступно. Безопасность начинается с правильной границы.',
    howItWorks:
      'Nuxt позволяет объявить runtimeConfig с public-секцией. Код, который выполняется на клиенте, должен обращаться только к публичным значениям. Секреты и приватные ключи должны оставаться вне public.',
    whyImportant:
      'На Senior-уровне конфигурация рассматривается как часть security-модели. Утечка секрета через public config — архитектурная ошибка, а не мелкий баг. Хороший разработчик объясняет это заранее.',
    codeExample: {
      language: 'ts',
      filename: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  runtimeConfig: {
    paymentSecret: process.env.PAYMENT_SECRET,
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },
})`,
    },
    commonMistake:
      'Ошибка — добавлять секрет в public, чтобы быстрее прочитать его в компоненте. Это раскрывает значение клиентскому коду.',
    interviewQuestions: createInterviewQuestions("Безопасный runtimeConfig", "Configuration"),
    remember: 'public runtimeConfig не должен содержать секреты.',
  },
  {
    id: 'nuxt-core-932',
    moduleId: 'nuxt-core',
    questionId: 932,
    title: 'Выбор Nuxt для продукта',
    category: 'Architecture Choice',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Выбор Nuxt для продукта связан с долгосрочной стоимостью разработки. Фреймворк даёт route conventions, layouts, config, plugins и единый workflow. Это особенно ценно, когда продукт будет расти и поддерживаться командой.',
    whenToUse:
      'Nuxt хорошо подходит для продуктовых сайтов и приложений с несколькими разделами, разными страницами, общими оболочками и требованиями к поддержке. Если проект одноразовый или крайне маленький, trade-off может быть другим. Решение должно опираться на контекст.',
    howItWorks:
      'Команда получает стандартные точки расширения. Новые страницы добавляются через pages, общая оболочка через layouts, конфигурация через nuxt.config.ts. За счёт этого новые участники быстрее понимают проект.',
    whyImportant:
      'На интервью это проверяет способность выбирать инструмент по бизнес- и техническим ограничениям. Не достаточно сказать, что Nuxt удобный; нужно показать, какие риски он снижает.',
    codeExample: {
      language: 'bash',
      filename: 'decision-matrix.txt',
      code: `Choose Nuxt when:
- many pages
- shared layouts
- long-term support
- team conventions
- production workflow`,
    },
    commonMistake:
      'Ошибка — принимать решение только по личному предпочтению. Архитектурный выбор должен объясняться требованиями продукта.',
    interviewQuestions: createInterviewQuestions("Выбор Nuxt для продукта", "Architecture Choice"),
    remember: 'Nuxt выигрывает там, где conventions снижают долгосрочную стоимость поддержки.',
  },
  {
    id: 'nuxt-core-933',
    moduleId: 'nuxt-core',
    questionId: 933,
    title: 'Browser-only код в plugins',
    category: 'Plugins',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Некоторые библиотеки и API доступны только в браузере, например window, document или localStorage. В Nuxt plugin может выполняться в среде, где этих объектов нет. Поэтому browser-only код нужно изолировать.',
    whenToUse:
      'Проверка среды нужна при подключении аналитики, виджетов, localStorage-хелперов и библиотек, которые ожидают DOM. Если код точно нужен только клиенту, его нужно явно ограничить. Это предотвращает падения на этапе сборки или запуска.',
    howItWorks:
      'Можно использовать client-only подходы, проверку import.meta.client или соответствующее именование plugin-файла. Главное — не обращаться к window на верхнем уровне модуля без защиты. Инициализация должна происходить там, где среда доступна.',
    whyImportant:
      'Даже в базовом Nuxt Core важно понимать, что код может иметь разные среды выполнения. На Senior-интервью это часто всплывает как практическая ошибка интеграции сторонних библиотек.',
    codeExample: {
      language: 'ts',
      filename: 'plugins/analytics.client.ts',
      code: `export default defineNuxtPlugin(() => {
  window.addEventListener('load', () => {
    window.dispatchEvent(new CustomEvent('analytics-ready'))
  })
})`,
    },
    commonMistake:
      'Ошибка — обращаться к window на верхнем уровне plugin-файла. Такой код может выполниться раньше, чем доступна браузерная среда.',
    interviewQuestions: createInterviewQuestions("Browser-only код в plugins", "Plugins"),
    remember: 'Browser-only код в Nuxt нужно явно ограничивать клиентской средой.',
  },
  {
    id: 'nuxt-core-934',
    moduleId: 'nuxt-core',
    questionId: 934,
    title: 'Управление auto imports в команде',
    category: 'Architecture',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Auto imports в большой команде требуют правил. Если каждый создаёт похожие composables и компоненты без нейминга, удобство превращается в скрытую связанность. Управление auto imports — часть архитектурной гигиены.',
    whenToUse:
      'Правила особенно нужны в больших Nuxt-проектах, где много feature-команд и shared-кода. Нужно договориться, какие папки auto-imported, как называются composables и когда явный import предпочтительнее. Это снижает когнитивную нагрузку.',
    howItWorks:
      'Команда может разделять публичные composables и внутренние helpers, использовать index exports для feature-модулей и избегать конфликтующих имён. Auto import остаётся удобным, но его область становится управляемой. Документация помогает новым разработчикам.',
    whyImportant:
      'Senior-разработчик думает не только о скорости написания кода, но и о стоимости чтения. Auto imports без правил ухудшают code review и поиск зависимостей. С правилами они остаются сильным инструментом.',
    codeExample: {
      language: 'bash',
      filename: 'auto-import-rules.txt',
      code: `Rules:
- use clear useFeatureName naming
- avoid duplicate composable names
- keep private helpers inside feature folders
- prefer explicit imports when source clarity matters`,
    },
    commonMistake:
      'Ошибка — считать auto imports полностью бесплатными. Скрытые зависимости тоже имеют цену.',
    interviewQuestions: createInterviewQuestions("Управление auto imports в команде", "Architecture"),
    remember: 'Auto imports должны ускорять команду, а не скрывать архитектуру.',
  },
  {
    id: 'nuxt-core-935',
    moduleId: 'nuxt-core',
    questionId: 935,
    title: 'Nuxt Core как фундамент',
    category: 'Nuxt Basics',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Nuxt Core — база, на которой держатся следующие темы Nuxt-экосистемы. Без понимания структуры проекта, pages, layouts, plugins, middleware, runtimeConfig и CLI трудно осознанно разбирать более сложные механизмы. Фундамент определяет язык обсуждения.',
    whenToUse:
      'Эту модель полезно держать в голове при обучении, собеседовании и проектировании. Сначала стоит разобраться, где живёт код и как Nuxt принимает решения на основе файлов. Потом сложные темы становятся продолжением, а не хаотичным набором возможностей.',
    howItWorks:
      'Core-слой задаёт маршруты, оболочки, конфигурацию и workflow. Следующие слои используют эту структуру и добавляют свои возможности. Если foundation слабый, ошибки начинают выглядеть случайными.',
    whyImportant:
      'На Senior-интервью важно объяснять систему слоями. Nuxt Core — первый слой, который связывает Vue-код с framework conventions. Он помогает говорить о SSR, Nitro и Server API отдельно и точнее.',
    codeExample: {
      language: 'bash',
      filename: 'nuxt-core-foundation.txt',
      code: `Foundation:
1. app.vue
2. pages and layouts
3. components and composables
4. plugins and middleware
5. nuxt.config.ts and runtimeConfig
6. CLI workflow`,
    },
    commonMistake:
      'Ошибка — переходить к сложным возможностям, не понимая базовую структуру Nuxt. Это приводит к поверхностным решениям и путанице.',
    interviewQuestions: createInterviewQuestions("Nuxt Core как фундамент", "Nuxt Basics"),
    remember: 'Nuxt Core — фундамент для осознанного изучения следующих Nuxt-миссий.',
  },
]

