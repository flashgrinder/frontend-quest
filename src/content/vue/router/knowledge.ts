import type { ContentKnowledgeCard } from '../../../types/content'

const createInterviewQuestions = (title: string, category: string): string[] => [
  `Какие задачи решает ${title} в теме ${category} (Vue Router)?`,
  `Какие ограничения ${title} важно учитывать в контексте Vue Router?`,
  `Чем ${title} отличается от похожих возможностей и когда выбрать альтернативу?`,
  `Какую production-ошибку можно получить при неверном использовании ${title}?`,
]

export const routerKnowledgeCards: ContentKnowledgeCard[] = [
  {
    id: 'knowledge-router-q801',
    moduleId: 'router',
    questionId: 801,
    title: 'Vue Router',
    category: 'Router Basics',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Vue Router — официальная библиотека маршрутизации для Vue. Она сопоставляет URL с компонентами, поддерживает вложенные маршруты, guards, redirects, lazy loading и программную навигацию. В SPA router заменяет полную перезагрузку страницы внутренними переходами.',
    whenToUse:
      'Vue Router используют, когда приложению нужны несколько экранов, URL-навигация, deep links, history, guards или разделение страниц. Для одного виджета без маршрутов он может быть лишним. В больших приложениях router становится частью архитектурного каркаса.',
    howItWorks:
      'Разработчик описывает route records, создаёт router через createRouter и подключает его к Vue application. Router отслеживает URL, выбирает matched records и рендерит компоненты через RouterView. RouterLink создаёт внутренние ссылки.',
    whyImportant:
      'На интервью важно объяснить router как слой навигации, а не просто список URL. Зрелый ответ упоминает guards, history mode, lazy loading и связь маршрутов с layout.',
    codeExample: {
      language: 'ts',
      filename: 'router.ts',
      code: `const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/profile', component: ProfileView },
  ],
})`,
    },
    commonMistake:
      'Ошибка — смешивать маршрутизацию с бизнес-логикой страницы. Router должен решать навигацию и доступ, а не становиться хранилищем всего состояния.',
    interviewQuestions: createInterviewQuestions("Vue Router", "Router Basics"),
    remember:
      'Vue Router связывает URL, guards и route components в SPA.',
  },
  {
    id: 'knowledge-router-q802',
    moduleId: 'router',
    questionId: 802,
    title: 'Router history',
    category: 'History',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Router history определяет, как состояние маршрутизатора синхронизируется с URL браузера. В Vue Router чаще всего используют createWebHistory или createWebHashHistory. Выбор влияет на внешний вид URL и требования к серверу.',
    whenToUse:
      'createWebHistory подходит для clean URLs, если сервер настроен отдавать index.html для SPA routes. createWebHashHistory удобен на статическом хостинге без rewrite-настроек. Выбор нужно согласовывать с деплоем.',
    howItWorks:
      'Web history использует History API и обычные пути вроде /profile. Hash history хранит route после #, поэтому сервер обычно видит только базовый путь. Router абстрагирует детали и предоставляет одинаковый API навигации.',
    whyImportant:
      'На интервью history mode часто связывают с production 404 при прямом открытии URL. Понимание server fallback отличает поверхностное знание от практического.',
    codeExample: {
      language: 'ts',
      filename: 'history.ts',
      code: `const router = createRouter({
  history: createWebHistory(),
  routes,
})`,
    },
    commonMistake:
      'Ошибка — выбрать createWebHistory и не настроить server fallback. Прямой переход на вложенный URL может вернуть 404 от сервера.',
    interviewQuestions: createInterviewQuestions("Router history", "History"),
    remember:
      'History mode должен соответствовать возможностям production-сервера.',
  },
  {
    id: 'knowledge-router-q803',
    moduleId: 'router',
    questionId: 803,
    title: 'createRouter',
    category: 'Router Setup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'createRouter создаёт экземпляр Vue Router. Ему передают history strategy и массив routes. После создания router подключается к приложению через app.use(router).',
    whenToUse:
      'createRouter используется один раз при настройке приложения или тестовой среды. В модульной архитектуре routes могут собираться из нескольких файлов. Внутри компонентов обычно используют useRouter, а не создают новый router.',
    howItWorks:
      'Router instance хранит matcher, текущий route, navigation methods и guards. При изменении URL или вызове push он выполняет navigation pipeline и обновляет текущий route. RouterView реагирует на это изменение.',
    whyImportant:
      'На интервью полезно понимать разницу между созданием router и использованием router. createRouter — инфраструктурный setup, useRouter — runtime доступ в компоненте.',
    codeExample: {
      language: 'ts',
      filename: 'main.ts',
      code: `const app = createApp(App)
app.use(router)
app.mount('#app')`,
    },
    commonMistake:
      'Ошибка — создавать новый router instance внутри компонента. Компоненты должны использовать уже подключённый router.',
    interviewQuestions: createInterviewQuestions("createRouter", "Router Setup"),
    remember:
      'createRouter создаёт router instance для всего Vue-приложения.',
  },
  {
    id: 'knowledge-router-q804',
    moduleId: 'router',
    questionId: 804,
    title: 'createWebHistory и server fallback',
    category: 'History',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'createWebHistory использует HTML5 History API и clean URLs без hash. Браузер показывает пути вроде /settings/security. Сервер должен уметь отдавать SPA entry point для таких путей.',
    whenToUse:
      'Этот режим выбирают для production-приложений с нормальной настройкой сервера, CDN или хостинга. Он даёт красивые URL и хорошую совместимость с SEO-сценариями. Если сервер нельзя настроить, hash history может быть проще.',
    howItWorks:
      'При client-side переходах router меняет history state без reload. При прямом открытии URL запрос сначала получает сервер. Сервер должен вернуть index.html, после чего Vue Router восстановит нужный экран.',
    whyImportant:
      'Это частая production-ошибка. Приложение работает при кликах внутри SPA, но падает 404 при refresh на вложенном route.',
    codeExample: {
      language: 'bash',
      filename: 'nginx.conf',
      code: `location / {
  try_files $uri $uri/ /index.html;
}`,
    },
    commonMistake:
      'Ошибка — проверять routes только через внутренние переходы и не тестировать refresh/deep link на production-like сервере.',
    interviewQuestions: createInterviewQuestions("createWebHistory и server fallback", "History"),
    remember:
      'Web history требует server rewrite на index.html для SPA routes.',
  },
  {
    id: 'knowledge-router-q805',
    moduleId: 'router',
    questionId: 805,
    title: 'createWebHashHistory',
    category: 'History',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'createWebHashHistory хранит route в hash-части URL после #. Сервер не получает эту часть URL, поэтому обычно не нужна настройка fallback для вложенных routes. URL выглядит менее чисто, но деплой проще.',
    whenToUse:
      'Hash history полезен для статического хостинга, embedded widgets, GitHub Pages-like сценариев и окружений без настройки rewrite. Для публичных продуктов с контролем сервера чаще выбирают web history.',
    howItWorks:
      'Браузер остаётся на базовом path, а router читает fragment после #. Изменение hash не требует запроса нового HTML у сервера. Vue Router предоставляет тот же navigation API.',
    whyImportant:
      'На интервью важно не говорить, что hash history плохой всегда. Это trade-off между чистотой URL и простотой инфраструктуры.',
    codeExample: {
      language: 'ts',
      filename: 'router.ts',
      code: `const router = createRouter({
  history: createWebHashHistory(),
  routes,
})`,
    },
    commonMistake:
      'Ошибка — выбирать hash history только из привычки, хотя сервер поддерживает clean URL и web history.',
    interviewQuestions: createInterviewQuestions("createWebHashHistory", "History"),
    remember:
      'Hash history проще деплоить, но URL содержит #.',
  },
  {
    id: 'knowledge-router-q806',
    moduleId: 'router',
    questionId: 806,
    title: 'RouteRecord',
    category: 'Routes',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Route record — описание маршрута в конфигурации router. Он связывает path с component и может содержать name, children, redirect, alias, meta, props и другие параметры. Route records образуют дерево маршрутов.',
    whenToUse:
      'Route records описывают все экраны приложения и вложенные layout-сценарии. Их стоит держать читаемыми и типизированными. Для больших приложений routes часто группируют по доменным модулям.',
    howItWorks:
      'Router matcher сравнивает текущий URL с route records и строит matched chain. RouterView отображает component соответствующего record. Для nested routes matched chain содержит несколько records.',
    whyImportant:
      'Понимание route records помогает проектировать meta, breadcrumbs, layouts и guards. На интервью это база для всех более сложных тем Router.',
    codeExample: {
      language: 'ts',
      filename: 'routes.ts',
      code: `const userRoute: RouteRecordRaw = {
  path: '/users/:id',
  name: 'user-details',
  component: () => import('./UserDetails.vue'),
  meta: { requiresAuth: true },
}`,
    },
    commonMistake:
      'Ошибка — хранить runtime state в route meta. Meta должна описывать маршрут, а не текущее состояние экрана.',
    interviewQuestions: createInterviewQuestions("RouteRecord", "Routes"),
    remember:
      'Route record — декларативное описание маршрута и его поведения.',
  },
  {
    id: 'knowledge-router-q807',
    moduleId: 'router',
    questionId: 807,
    title: 'Nested routes',
    category: 'Nested Routes',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Nested routes позволяют маршрутам иметь родителя и children. Родительский route обычно рендерит layout, а дочерние routes отображаются внутри вложенного RouterView. Это удобно для разделов с общей оболочкой.',
    whenToUse:
      'Nested routes используют для dashboard, settings, profile, account, admin и других разделов с общим layout. Они помогают сохранить общий sidebar, header или tabs. Если страницы не имеют общей структуры, nesting может быть лишним.',
    howItWorks:
      'Родительский route содержит children. Когда URL совпадает с дочерним route, Vue Router рендерит родительский component в верхний RouterView, а child component — во вложенный RouterView внутри родителя.',
    whyImportant:
      'На интервью nested routes связывают с layouts и breadcrumbs. Это архитектурный механизм, а не просто синтаксис вложенного массива.',
    codeExample: {
      language: 'ts',
      filename: 'settings-routes.ts',
      code: `{
  path: '/settings',
  component: SettingsLayout,
  children: [
    { path: 'profile', component: ProfileSettings },
    { path: 'security', component: SecuritySettings },
  ],
}`,
    },
    commonMistake:
      'Ошибка — забыть RouterView в родительском layout. Тогда дочерний component не отобразится.',
    interviewQuestions: createInterviewQuestions("Nested routes", "Nested Routes"),
    remember:
      'Nested route требует RouterView в родительском component.',
  },
  {
    id: 'knowledge-router-q808',
    moduleId: 'router',
    questionId: 808,
    title: 'children и вложенный RouterView',
    category: 'Nested Routes',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'children — массив дочерних route records внутри родительского route. Они отображаются не сами по себе, а через вложенный RouterView. Родительский component становится контейнером для дочерних страниц.',
    whenToUse:
      'children подходят, когда у группы URL есть общая visual shell или общие guards/meta. Например, /admin/users и /admin/roles могут жить внутри AdminLayout. Это снижает дублирование layout.',
    howItWorks:
      'Child path без начального slash считается относительным к parent path. Родительский RouterView показывает parent component, а внутри него второй RouterView показывает child component.',
    whyImportant:
      'На интервью этот вопрос часто проверяет практическое понимание. Если child route не виден, чаще всего отсутствует вложенный RouterView.',
    codeExample: {
      language: 'vue',
      filename: 'SettingsLayout.vue',
      code: `<template>
  <SettingsNavigation />
  <RouterView />
</template>`,
    },
    commonMistake:
      'Ошибка — ставить slash в child path случайно и превращать его в абсолютный route там, где ожидался относительный.',
    interviewQuestions: createInterviewQuestions("children и вложенный RouterView", "Nested Routes"),
    remember:
      'children рендерятся через RouterView родительского component.',
  },
  {
    id: 'knowledge-router-q809',
    moduleId: 'router',
    questionId: 809,
    title: 'Dynamic routes',
    category: 'Dynamic Routes',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Dynamic route содержит параметры в path, например /users/:id. Такой маршрут подходит для страниц сущностей: пользователь, заказ, статья, проект. Значение параметра доступно через route.params.',
    whenToUse:
      'Dynamic routes используют, когда один component должен отображать разные сущности по URL. Если значение является фильтром или временной настройкой, query может быть лучше. Path params обычно описывают identity ресурса.',
    howItWorks:
      'Router matcher извлекает сегмент URL и записывает его в params. При переходе с /users/1 на /users/2 тот же component может быть переиспользован, поэтому нужно реагировать на изменение params.',
    whyImportant:
      'На интервью важно знать не только синтаксис :id, но и поведение переиспользования component instance при смене params.',
    codeExample: {
      language: 'ts',
      filename: 'user-route.ts',
      code: `{
  path: '/users/:id',
  name: 'user',
  component: () => import('./UserView.vue'),
}`,
    },
    commonMistake:
      'Ошибка — загрузить данные только в onMounted и не реагировать на изменение route.params.id при переходе между сущностями.',
    interviewQuestions: createInterviewQuestions("Dynamic routes", "Dynamic Routes"),
    remember:
      'Dynamic params описывают часть path и часто identity ресурса.',
  },
  {
    id: 'knowledge-router-q810',
    moduleId: 'router',
    questionId: 810,
    title: 'Params в programmatic navigation',
    category: 'Navigation',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Params в программной навигации подставляются в динамические сегменты route. Надёжнее всего использовать named routes, чтобы router знал, в какой path-шаблон нужно вставить params. Plain path без сегментов не использует params.',
    whenToUse:
      'Используй `{ name, params }`, когда переходишь к dynamic route. Для фильтров и сортировки используй query. Для готового полного URL можно передать path, но тогда params не подставятся автоматически.',
    howItWorks:
      'Router берёт route record по name и генерирует URL из path pattern. Если обязательный param отсутствует, навигация может быть некорректной. Если передан path, params игнорируются, потому что URL уже задан.',
    whyImportant:
      'Это частая ошибка на практике. На интервью она показывает понимание различия между route location by path и route location by name.',
    codeExample: {
      language: 'ts',
      filename: 'navigate-user.ts',
      code: `router.push({
  name: 'user',
  params: { id: '42' },
})`,
    },
    commonMistake:
      'Ошибка — писать `router.push({ path: "/users", params: { id } })` и ожидать URL /users/42.',
    interviewQuestions: createInterviewQuestions("Params в programmatic navigation", "Navigation"),
    remember:
      'Для params в navigation object обычно используй named route.',
  },
  {
    id: 'knowledge-router-q811',
    moduleId: 'router',
    questionId: 811,
    title: 'Query и params',
    category: 'URL State',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Params являются частью path, а query находится после знака вопроса. Params часто описывают identity ресурса, query — дополнительные параметры отображения: tab, page, sort, filter. Оба доступны через useRoute.',
    whenToUse:
      'Используй params для обязательных path-сегментов вроде userId. Используй query для необязательных настроек страницы, которые удобно шарить ссылкой. Не стоит хранить секреты ни в params, ни в query.',
    howItWorks:
      'Route /users/42?tab=posts даст params.id = 42 и query.tab = posts. Query значения обычно строки или массивы строк, поэтому их нужно парсить для чисел и boolean.',
    whyImportant:
      'На интервью важно объяснить semantics. Неправильный выбор приводит к неудобным URL и сложному состоянию страницы.',
    codeExample: {
      language: 'ts',
      filename: 'route-state.ts',
      code: `const route = useRoute()
const userId = computed(() => route.params.id)
const tab = computed(() => route.query.tab ?? 'overview')`,
    },
    commonMistake:
      'Ошибка — считать query number-значением без парсинга. Из URL значения приходят строками.',
    interviewQuestions: createInterviewQuestions("Query и params", "URL State"),
    remember:
      'Params — часть path, query — настройки после ?.',
  },
  {
    id: 'knowledge-router-q812',
    moduleId: 'router',
    questionId: 812,
    title: 'Named routes',
    category: 'Navigation',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Named route — маршрут с уникальным именем. Он позволяет навигировать не по строковому path, а по логическому имени. Это снижает дублирование URL в коде и упрощает рефакторинг.',
    whenToUse:
      'Named routes полезны для programmatic navigation, RouterLink to object и dynamic params. Они особенно важны в больших приложениях, где path может измениться. Имя должно быть стабильным и осмысленным.',
    howItWorks:
      'Route record получает поле name. При navigation object router находит record по name, подставляет params и генерирует href. Если name дублируется, поведение будет некорректным.',
    whyImportant:
      'На интервью named routes показывают понимание поддерживаемости маршрутизации. Строковые path по всему коду сложнее менять.',
    codeExample: {
      language: 'vue',
      filename: 'UserLink.vue',
      code: `<RouterLink :to="{ name: 'user', params: { id: user.id } }">
  Открыть профиль
</RouterLink>`,
    },
    commonMistake:
      'Ошибка — использовать разные строковые path во многих компонентах вместо named routes для важных переходов.',
    interviewQuestions: createInterviewQuestions("Named routes", "Navigation"),
    remember:
      'Named routes делают навигацию устойчивее к изменению URL.',
  },
  {
    id: 'knowledge-router-q813',
    moduleId: 'router',
    questionId: 813,
    title: 'Redirect',
    category: 'Redirects',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Redirect автоматически перенаправляет навигацию с одного route на другой. Он может быть строкой, route location object или функцией. Redirect меняет итоговый route, на который попадёт пользователь.',
    whenToUse:
      'Redirect используют для default child route, старых URL, canonical paths и навигации после устаревших страниц. Для альтернативного URL без смены смысла иногда подходит alias. Для auth redirect часто используют guards.',
    howItWorks:
      'Когда router сопоставляет route с redirect, он запускает новую навигацию к целевому location. Компонент redirect route обычно не рендерится. Guards могут участвовать в процессе.',
    whyImportant:
      'На интервью важно отличать redirect от alias. Redirect меняет цель навигации, alias позволяет открыть тот же record по другому path.',
    codeExample: {
      language: 'ts',
      filename: 'redirect.ts',
      code: `{
  path: '/settings',
  redirect: { name: 'settings-profile' },
}`,
    },
    commonMistake:
      'Ошибка — создавать redirect loop, когда route перенаправляет на себя или на маршрут, который снова вызывает то же правило.',
    interviewQuestions: createInterviewQuestions("Redirect", "Redirects"),
    remember:
      'Redirect меняет итоговую цель навигации.',
  },
  {
    id: 'knowledge-router-q814',
    moduleId: 'router',
    questionId: 814,
    title: 'Alias',
    category: 'Redirects',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Alias позволяет одному route record быть доступным по дополнительному path. В отличие от redirect, alias не обязан менять URL на canonical path. Пользователь остаётся на alias URL, но рендерится тот же route component.',
    whenToUse:
      'Alias полезен для совместимости старых URL, коротких альтернативных ссылок или локализованных путей. Если нужно явно перенаправить на новый canonical URL, лучше redirect.',
    howItWorks:
      'В route record указывают alias: string или массив строк. Router matcher воспринимает alias как дополнительный путь к тому же record. Meta и component остаются теми же.',
    whyImportant:
      'На интервью alias часто путают с redirect. Разница важна для SEO, analytics и ожидаемого URL в адресной строке.',
    codeExample: {
      language: 'ts',
      filename: 'alias.ts',
      code: `{
  path: '/profile',
  alias: ['/me', '/account'],
  component: ProfileView,
}`,
    },
    commonMistake:
      'Ошибка — использовать alias там, где нужно перенаправить пользователя на единственный canonical URL.',
    interviewQuestions: createInterviewQuestions("Alias", "Redirects"),
    remember:
      'Alias даёт дополнительный path к тому же route record без обязательного redirect.',
  },
  {
    id: 'knowledge-router-q815',
    moduleId: 'router',
    questionId: 815,
    title: 'Catch all routes и 404',
    category: 'Not Found',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Catch all route ловит URL, которые не совпали с другими route records. Во Vue Router 4 часто используют path `/:pathMatch(.*)*`. Такой маршрут обычно рендерит страницу 404.',
    whenToUse:
      'Catch all нужен почти каждому SPA, чтобы неизвестные URL имели понятный экран. Его размещают последним после всех специфичных routes. Для legacy URL иногда сначала добавляют redirects.',
    howItWorks:
      'Router проверяет routes по matcher rules. Если ни один обычный route не подходит, catch all совпадает с любым path. Component NotFound получает возможность показать сообщение и навигацию назад.',
    whyImportant:
      'На интервью важно знать порядок catch all route. Если поставить его раньше, он перехватит валидные маршруты.',
    codeExample: {
      language: 'ts',
      filename: 'not-found-route.ts',
      code: `{
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('./NotFoundView.vue'),
}`,
    },
    commonMistake:
      'Ошибка — разместить catch all route перед обычными routes. Это сломает доступ к остальным страницам.',
    interviewQuestions: createInterviewQuestions("Catch all routes и 404", "Not Found"),
    remember:
      'Catch all route обычно последний и показывает 404.',
  },
  {
    id: 'knowledge-router-q816',
    moduleId: 'router',
    questionId: 816,
    title: 'Navigation guards',
    category: 'Guards',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Navigation guards — hooks маршрутизации, которые выполняются во время перехода. Они могут разрешить навигацию, отменить её или вернуть redirect. Guards бывают глобальными, per-route и in-component.',
    whenToUse:
      'Guards используют для auth, ролей, unsaved changes, проверки feature flags, preloading и аналитики. Не стоит помещать в guards тяжёлую бизнес-логику без необходимости. Guard должен быть быстрым и предсказуемым.',
    howItWorks:
      'Router запускает navigation pipeline и вызывает guards в определённом порядке. Guard может вернуть false, route location или ничего. Async guards ожидаются перед завершением навигации.',
    whyImportant:
      'На интервью guards проверяют понимание навигационного pipeline. Ошибки в guards могут блокировать приложение или создавать redirect loops.',
    codeExample: {
      language: 'ts',
      filename: 'guards.ts',
      code: `router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    return { name: 'login' }
  }
})`,
    },
    commonMistake:
      'Ошибка — делать redirect на login даже когда пользователь уже находится на login route. Это создаёт loop.',
    interviewQuestions: createInterviewQuestions("Navigation guards", "Guards"),
    remember:
      'Guard должен явно и безопасно завершать навигацию.',
  },
  {
    id: 'knowledge-router-q817',
    moduleId: 'router',
    questionId: 817,
    title: 'beforeEach и auth guard',
    category: 'Guards',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'beforeEach — глобальный guard, который выполняется перед каждой навигацией. Auth guard часто использует beforeEach и route meta, чтобы проверить, требуется ли вход пользователя. Если доступа нет, возвращается redirect.',
    whenToUse:
      'Глобальный auth guard подходит для единых правил доступа ко многим страницам. Если проверка нужна только одному route, можно использовать per-route guard. Client-side guard улучшает UX, но не заменяет серверную проверку API.',
    howItWorks:
      'Route records помечаются meta.requiresAuth. Guard читает `to.meta` или `to.matched`, проверяет состояние пользователя и возвращает route location при необходимости. При успехе guard ничего не возвращает.',
    whyImportant:
      'На интервью важно упомянуть, что auth guard не является security boundary. Он предотвращает отображение UI, но сервер всё равно обязан проверять права.',
    codeExample: {
      language: 'ts',
      filename: 'auth-guard.ts',
      code: `router.beforeEach((to) => {
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})`,
    },
    commonMistake:
      'Ошибка — хранить секреты или токены в route meta. Meta должна хранить требования, а не чувствительные данные.',
    interviewQuestions: createInterviewQuestions("beforeEach и auth guard", "Guards"),
    remember:
      'Auth guard проверяет route requirements и состояние пользователя перед входом.',
  },
  {
    id: 'knowledge-router-q818',
    moduleId: 'router',
    questionId: 818,
    title: 'beforeResolve',
    category: 'Guards',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'beforeResolve — глобальный guard, который вызывается перед окончательным подтверждением навигации. К этому моменту async components и in-component guards уже разрешены. Это поздняя точка проверки.',
    whenToUse:
      'beforeResolve подходит для финальных проверок доступа, подтверждений или загрузки данных, которые должны произойти после разрешения компонентов. Для базового auth чаще достаточно beforeEach. Не стоит дублировать одну и ту же проверку во всех guards.',
    howItWorks:
      'Router выполняет earlier guards, разрешает route components, затем вызывает beforeResolve. Если guard возвращает redirect или false, навигация не подтверждается.',
    whyImportant:
      'На интервью важно знать не только beforeEach, но и место beforeResolve в pipeline. Это помогает проектировать сложную навигацию без лишних запросов.',
    codeExample: {
      language: 'ts',
      filename: 'before-resolve.ts',
      code: `router.beforeResolve(async (to) => {
  if (to.meta.requiresCamera) {
    await askForCameraPermission()
  }
})`,
    },
    commonMistake:
      'Ошибка — помещать одинаковую auth-проверку и в beforeEach, и в beforeResolve без причины.',
    interviewQuestions: createInterviewQuestions("beforeResolve", "Guards"),
    remember:
      'beforeResolve — поздний guard перед подтверждением навигации.',
  },
  {
    id: 'knowledge-router-q819',
    moduleId: 'router',
    questionId: 819,
    title: 'afterEach',
    category: 'Guards',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'afterEach — hook после завершения навигации. Он не отменяет и не перенаправляет переход. Его задача — side effects после факта перехода.',
    whenToUse:
      'afterEach подходит для analytics, logging, обновления document title или отправки page view. Для проверки доступа он не подходит, потому что навигация уже завершена. Для redirect нужны before guards.',
    howItWorks:
      'Router вызывает afterEach после подтверждения навигации. Callback получает to, from и failure. Возвращаемое значение не управляет навигацией.',
    whyImportant:
      'На интервью важно различать guards, влияющие на переход, и hooks для side effects. Это предотвращает неправильное размещение auth-логики.',
    codeExample: {
      language: 'ts',
      filename: 'analytics.ts',
      code: `router.afterEach((to) => {
  analytics.trackPageView(to.fullPath)
})`,
    },
    commonMistake:
      'Ошибка — пытаться блокировать доступ в afterEach. Для блокировки перехода уже слишком поздно.',
    interviewQuestions: createInterviewQuestions("afterEach", "Guards"),
    remember:
      'afterEach выполняет post-navigation side effects.',
  },
  {
    id: 'knowledge-router-q820',
    moduleId: 'router',
    questionId: 820,
    title: 'Route meta',
    category: 'Route Meta',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 мин',
    whatIsIt:
      'Route meta — объект дополнительных статичных данных route record. В meta часто хранят requiresAuth, roles, layout, title, breadcrumb label и feature flags. Это удобный способ описать требования маршрута рядом с маршрутом.',
    whenToUse:
      'Meta подходит для данных, которые описывают route, а не runtime state. Guards, layout resolver, breadcrumbs и document title могут читать meta. Для пользовательских данных и состояния страницы лучше stores, params или query.',
    howItWorks:
      'Meta задаётся в route record и доступна через route.meta. Для nested routes можно читать route.matched, чтобы собрать meta цепочку. TypeScript может расширять тип RouteMeta.',
    whyImportant:
      'На интервью route meta связывают с архитектурой приложения. Хороший meta-контракт снижает дублирование auth, titles и breadcrumbs.',
    codeExample: {
      language: 'ts',
      filename: 'route-meta.ts',
      code: `{
  path: '/admin',
  component: AdminView,
  meta: {
    requiresAuth: true,
    roles: ['admin'],
    title: 'Admin',
  },
}`,
    },
    commonMistake:
      'Ошибка — хранить в meta изменяемое состояние страницы. Meta должна быть декларативным описанием route.',
    interviewQuestions: createInterviewQuestions("Route meta", "Route Meta"),
    remember:
      'Route meta описывает route requirements и UI metadata.',
  },
  {
    id: 'knowledge-router-q821',
    moduleId: 'router',
    questionId: 821,
    title: 'Lazy loading route components',
    category: 'Performance',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Lazy loading route components — загрузка компонентов страниц по требованию через dynamic import. Это позволяет разделить bundle и не загружать весь код приложения на старте. Особенно полезно для крупных экранов.',
    whenToUse:
      'Lazy loading хорошо подходит для route-level components, admin sections, settings, reports и редко открываемых страниц. Для критичного первого экрана статический импорт может быть оправдан. Нужен баланс между initial load и количеством chunks.',
    howItWorks:
      'В route record component задаётся функцией, возвращающей import. Сборщик создаёт отдельный chunk. Router загрузит chunk при первом переходе на маршрут.',
    whyImportant:
      'На интервью это связывает router с performance. Хороший ответ упоминает code splitting, initial bundle и UX загрузки.',
    codeExample: {
      language: 'ts',
      filename: 'lazy-route.ts',
      code: `{
  path: '/reports',
  component: () => import('./views/ReportsView.vue'),
}`,
    },
    commonMistake:
      'Ошибка — лениво загружать слишком мелкие критичные компоненты без выигрыша. Это может увеличить количество запросов.',
    interviewQuestions: createInterviewQuestions("Lazy loading route components", "Performance"),
    remember:
      'Route-level lazy loading уменьшает стартовый bundle.',
  },
  {
    id: 'knowledge-router-q822',
    moduleId: 'router',
    questionId: 822,
    title: 'Dynamic imports в routes',
    category: 'Performance',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'Dynamic import — JavaScript-синтаксис `import()`, который возвращает Promise модуля. В routes он используется для lazy loading компонентов. Сборщик понимает такой import и создаёт отдельные chunks.',
    whenToUse:
      'Dynamic imports полезны для крупных route components и редко используемых sections. Если компонент нужен на первом экране, lazy loading может добавить лишнюю задержку. Важно смотреть на реальные bundle reports.',
    howItWorks:
      'Route component указывается как функция. Router вызовет её при необходимости. Пока chunk загружается, навигация ждёт разрешения async component; UX можно улучшать loading indicators или Suspense-like оболочками.',
    whyImportant:
      'На интервью важно объяснить не только "как", но и "зачем". Lazy loading — performance-инструмент, а не обязательный стиль импорта.',
    codeExample: {
      language: 'ts',
      filename: 'dynamic-import.ts',
      code: `const routes = [
  {
    path: '/billing',
    component: () => import('./BillingView.vue'),
  },
]`,
    },
    commonMistake:
      'Ошибка — статически импортировать все крупные страницы в router config и получить большой initial bundle.',
    interviewQuestions: createInterviewQuestions("Dynamic imports в routes", "Performance"),
    remember:
      'Dynamic import в route создаёт lazy-loaded chunk.',
  },
  {
    id: 'knowledge-router-q823',
    moduleId: 'router',
    questionId: 823,
    title: 'RouterLink',
    category: 'Router Components',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'RouterLink — компонент для внутренних ссылок Vue Router. Он генерирует href и выполняет navigation без полной перезагрузки страницы. Также он управляет active classes.',
    whenToUse:
      'RouterLink используют для навигации внутри SPA: меню, breadcrumbs, карточки-ссылки, tabs. Для внешних URL лучше обычный anchor. Для действий без изменения URL лучше button.',
    howItWorks:
      'RouterLink принимает prop to: строку или route location object. При клике он вызывает router navigation и предотвращает обычную перезагрузку для внутренних ссылок. Активность вычисляется по текущему route.',
    whyImportant:
      'На интервью важно различать RouterLink и обычный a. RouterLink сохраняет SPA-поведение и интегрируется с router state.',
    codeExample: {
      language: 'vue',
      filename: 'MainNav.vue',
      code: `<RouterLink :to="{ name: 'profile' }">
  Профиль
</RouterLink>`,
    },
    commonMistake:
      'Ошибка — использовать RouterLink для внешнего сайта. Для внешних ссылок нужен обычный a с href.',
    interviewQuestions: createInterviewQuestions("RouterLink", "Router Components"),
    remember:
      'RouterLink нужен для внутренних переходов без reload.',
  },
  {
    id: 'knowledge-router-q824',
    moduleId: 'router',
    questionId: 824,
    title: 'RouterView',
    category: 'Router Components',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'RouterView — компонент-выход, куда Vue Router рендерит component текущего matched route. В nested routes может быть несколько RouterView на разных уровнях layout. Это основная точка отображения route components.',
    whenToUse:
      'RouterView размещают в App shell, layout components и родительских route components. Он нужен там, где должен появиться экран маршрута. Для обычной композиции компонентов RouterView не требуется.',
    howItWorks:
      'RouterView читает текущий route context и выбирает component из matched record соответствующей глубины. В slot API можно получить Component и route для transitions или KeepAlive.',
    whyImportant:
      'На интервью RouterView помогает объяснить nested routes и page transitions. Без понимания RouterView сложно проектировать layout маршрутов.',
    codeExample: {
      language: 'vue',
      filename: 'App.vue',
      code: `<template>
  <AppShell>
    <RouterView />
  </AppShell>
</template>`,
    },
    commonMistake:
      'Ошибка — забыть вложенный RouterView в parent layout для children routes.',
    interviewQuestions: createInterviewQuestions("RouterView", "Router Components"),
    remember:
      'RouterView показывает component текущего matched route.',
  },
  {
    id: 'knowledge-router-q825',
    moduleId: 'router',
    questionId: 825,
    title: 'useRouter и useRoute',
    category: 'Composition API',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'useRouter возвращает router instance, а useRoute возвращает текущий reactive route object. Первый нужен для действий навигации, второй — для чтения params, query, meta, name и path.',
    whenToUse:
      'Используй useRouter для push, replace, back и работы с guards-like navigation methods. Используй useRoute для реакции на текущий URL. В компоненте часто нужны оба, но задачи у них разные.',
    howItWorks:
      'Vue Router предоставляет эти composables через injection. useRoute обновляется при навигации. При чтении params/query в computed компонент реагирует на изменения маршрута.',
    whyImportant:
      'Это базовый вопрос по Composition API с Router. Ошибка route.push вместо router.push встречается часто.',
    codeExample: {
      language: 'vue',
      filename: 'UserView.vue',
      code: `<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const goBack = () => router.back()
const userId = computed(() => route.params.id)
</script>`,
    },
    commonMistake:
      'Ошибка — использовать useRoute для навигации. Текущий route object не имеет методов push/replace.',
    interviewQuestions: createInterviewQuestions("useRouter и useRoute", "Composition API"),
    remember:
      'useRouter навигирует, useRoute читает текущий маршрут.',
  },
  {
    id: 'knowledge-router-q826',
    moduleId: 'router',
    questionId: 826,
    title: 'Programmatic navigation',
    category: 'Navigation',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      'Programmatic navigation — переход между маршрутами из JavaScript-кода. Она выполняется через router.push, router.replace, router.back и похожие методы. Это нужно после submit, выбора пункта или завершения действия.',
    whenToUse:
      'Программная навигация подходит для действий, где переход зависит от логики. Для обычных ссылок лучше RouterLink. Это сохраняет семантику навигации и доступность.',
    howItWorks:
      'router.push добавляет новую запись в history, router.replace заменяет текущую запись. В location object можно передать name, params, query и hash. Метод возвращает Promise результата навигации.',
    whyImportant:
      'На интервью важно знать difference между declarative RouterLink и imperative router.push. Это помогает выбирать правильный инструмент.',
    codeExample: {
      language: 'ts',
      filename: 'submit-navigation.ts',
      code: `const submit = async () => {
  const user = await createUser(form)
  await router.push({ name: 'user', params: { id: user.id } })
}`,
    },
    commonMistake:
      'Ошибка — использовать window.location для внутренних переходов SPA. Это вызывает полную перезагрузку страницы.',
    interviewQuestions: createInterviewQuestions("Programmatic navigation", "Navigation"),
    remember:
      'router.push нужен для навигации из кода без reload.',
  },
  {
    id: 'knowledge-router-q827',
    moduleId: 'router',
    questionId: 827,
    title: 'Active classes',
    category: 'RouterLink',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 мин',
    whatIsIt:
      'Active classes — CSS-классы, которые RouterLink добавляет, когда ссылка соответствует текущему route. По умолчанию это router-link-active и router-link-exact-active. Их можно настроить.',
    whenToUse:
      'Active classes нужны для navigation menu, tabs, breadcrumbs и sidebar. Они помогают пользователю понять текущий экран. Exact active полезен, когда parent route не должен подсвечиваться для каждого child.',
    howItWorks:
      'RouterLink сравнивает свой target route с текущим route. Если ссылка активна, добавляет классы. Можно использовать props activeClass и exactActiveClass или глобальные настройки router.',
    whyImportant:
      'На интервью active classes показывают знание RouterLink как полноценного компонента, а не просто ссылки.',
    codeExample: {
      language: 'vue',
      filename: 'NavLink.vue',
      code: `<RouterLink
  to="/settings"
  active-class="is-active"
>
  Настройки
</RouterLink>`,
    },
    commonMistake:
      'Ошибка — вручную сравнивать route.path для каждого пункта меню, хотя RouterLink уже умеет active state.',
    interviewQuestions: createInterviewQuestions("Active classes", "RouterLink"),
    remember:
      'RouterLink сам умеет подсвечивать активные ссылки.',
  },
  {
    id: 'knowledge-router-q828',
    moduleId: 'router',
    questionId: 828,
    title: 'scrollBehavior',
    category: 'UX',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 мин',
    whatIsIt:
      'scrollBehavior — функция router config для управления позицией прокрутки после навигации. Она может возвращать top position, savedPosition или scroll к anchor. Это важная часть UX навигации.',
    whenToUse:
      'scrollBehavior нужен, если при переходах страница должна открываться сверху, сохранять позицию назад/вперёд или переходить к hash-якорю. Для отдельных scrollable containers может понадобиться дополнительная логика в компонентах.',
    howItWorks:
      'Функция получает to, from и savedPosition. При browser back/forward savedPosition позволяет восстановить позицию. Возвращаемый объект описывает координаты или element target.',
    whyImportant:
      'На интервью scrollBehavior показывает внимание к UX. SPA без настройки scroll может оставлять пользователя в середине новой страницы.',
    codeExample: {
      language: 'ts',
      filename: 'scroll-behavior.ts',
      code: `const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})`,
    },
    commonMistake:
      'Ошибка — игнорировать savedPosition. Тогда кнопка Back может вести себя неожиданно для пользователя.',
    interviewQuestions: createInterviewQuestions("scrollBehavior", "UX"),
    remember:
      'scrollBehavior управляет прокруткой после route navigation.',
  },
  {
    id: 'knowledge-router-q829',
    moduleId: 'router',
    questionId: 829,
    title: 'Auth guard и границы безопасности',
    category: 'Security',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Auth guard — проверка доступа на уровне клиентской навигации. Он решает, показывать ли пользователю route UI, и может перенаправить на login. Но клиентский guard не является настоящей security boundary.',
    whenToUse:
      'Auth guard нужен для UX: не показывать защищённые экраны без сессии, сохранять redirect target, скрывать лишние transitions. Серверные API всё равно должны проверять токен, роль и права. Нельзя полагаться только на frontend.',
    howItWorks:
      'Route meta описывает требования доступа. Guard читает состояние auth и возвращает redirect при отсутствии доступа. API-запросы дополнительно проходят server-side authorization.',
    whyImportant:
      'На senior-интервью важно проговорить модель угроз. Любой клиентский код можно изменить, а реальная защита живёт на сервере.',
    codeExample: {
      language: 'ts',
      filename: 'secure-auth-guard.ts',
      code: `router.beforeEach((to) => {
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})`,
    },
    commonMistake:
      'Ошибка — считать, что скрытый route защищает данные. Если API отдаёт данные без проверки, guard не спасает.',
    interviewQuestions: createInterviewQuestions("Auth guard и границы безопасности", "Security"),
    remember:
      'Auth guard защищает UX, сервер защищает данные.',
  },
  {
    id: 'knowledge-router-q830',
    moduleId: 'router',
    questionId: 830,
    title: 'Role guard',
    category: 'Security',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Role guard проверяет, имеет ли пользователь роль или permission для маршрута. Требования обычно описывают в route meta. Сама проверка должна быть централизованной и хорошо типизированной.',
    whenToUse:
      'Role guard нужен для admin panels, paid features, moderation tools и разделов с разными уровнями доступа. Если доступ зависит от конкретной сущности, может потребоваться дополнительная серверная проверка. Meta подходит для route-level требований.',
    howItWorks:
      'Route meta хранит roles или permissions. Guard получает пользователя и вызывает функцию canAccess. Если доступа нет, возвращает redirect на forbidden или fallback route.',
    whyImportant:
      'Senior-уровень требует думать о расширяемости: роли, permissions, nested meta, inherited requirements и server-side authorization.',
    codeExample: {
      language: 'ts',
      filename: 'role-guard.ts',
      code: `router.beforeEach((to) => {
  const roles = to.meta.roles as string[] | undefined

  if (roles && !roles.some((role) => auth.roles.includes(role))) {
    return { name: 'forbidden' }
  }
})`,
    },
    commonMistake:
      'Ошибка — дублировать role checks по компонентам вместо единого route access layer.',
    interviewQuestions: createInterviewQuestions("Role guard", "Security"),
    remember:
      'Role guard должен иметь единый контракт требований доступа.',
  },
  {
    id: 'knowledge-router-q831',
    moduleId: 'router',
    questionId: 831,
    title: 'Breadcrumbs через route.matched',
    category: 'Navigation UI',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Breadcrumbs показывают путь пользователя в иерархии приложения. Vue Router удобно строит их через route.matched — цепочку matched route records. Labels обычно хранят в meta или вычисляют функцией.',
    whenToUse:
      'Breadcrumbs полезны в admin, nested sections, docs, каталогах и сложных настройках. Для плоского приложения они могут быть лишними. Если label зависит от данных сущности, нужна async-загрузка или fallback label.',
    howItWorks:
      'route.matched содержит parent и child records. Каждый record может иметь meta.breadcrumb. Компонент breadcrumbs фильтрует records и строит RouterLink для каждого уровня.',
    whyImportant:
      'На senior-интервью эта тема раскрывает архитектуру route meta. Хороший подход не парсит URL вручную, а использует структуру маршрутов.',
    codeExample: {
      language: 'ts',
      filename: 'breadcrumbs.ts',
      code: `const breadcrumbs = computed(() =>
  route.matched
    .filter((record) => record.meta.breadcrumb)
    .map((record) => ({
      label: record.meta.breadcrumb,
      path: record.path,
    })),
)`,
    },
    commonMistake:
      'Ошибка — строить breadcrumbs split-ом route.path. Такой подход ломается на dynamic params, aliases и nested layouts.',
    interviewQuestions: createInterviewQuestions("Breadcrumbs через route.matched", "Navigation UI"),
    remember:
      'Breadcrumbs лучше строить из route.matched и meta.',
  },
  {
    id: 'knowledge-router-q832',
    moduleId: 'router',
    questionId: 832,
    title: '404 page',
    category: 'Not Found',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 мин',
    whatIsIt:
      '404 page — экран для неизвестного route. В SPA он создаётся catch all route. Такой экран помогает пользователю вернуться к навигации и делает поведение неизвестных URL предсказуемым.',
    whenToUse:
      '404 нужна почти всегда, если приложение имеет маршруты. Она полезна для ошибочных ссылок, устаревших URL и ручного ввода адреса. Для legacy paths иногда добавляют redirect перед catch all.',
    howItWorks:
      'Catch all route размещается последним и рендерит NotFound component. В web history также нужен server fallback, чтобы сервер отдавал index.html, а не собственный 404 до запуска SPA.',
    whyImportant:
      'На интервью важно помнить две стороны 404: client-side catch all и server config. Без второго web history может не дать Vue Router обработать URL.',
    codeExample: {
      language: 'ts',
      filename: 'not-found.ts',
      code: `routes.push({
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: NotFoundView,
})`,
    },
    commonMistake:
      'Ошибка — поставить catch all route до остальных маршрутов. Он перехватит всё.',
    interviewQuestions: createInterviewQuestions("404 page", "Not Found"),
    remember:
      '404 route должен быть catch all и обычно последним.',
  },
  {
    id: 'knowledge-router-q833',
    moduleId: 'router',
    questionId: 833,
    title: 'Page transitions через RouterView',
    category: 'Transitions',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Page transitions — анимации между route components. Во Vue Router их обычно строят через slot API RouterView, чтобы получить текущий Component и route. Затем dynamic component оборачивают в Transition.',
    whenToUse:
      'Transitions полезны для улучшения восприятия навигации, но не должны замедлять пользователя. Для complex dashboards анимации должны быть осторожными. Если нужен кеш, добавляют KeepAlive и учитывают activated/deactivated lifecycle.',
    howItWorks:
      'RouterView v-slot передаёт Component. Его рендерят через `<component :is="Component" />` внутри Transition. Key по route.fullPath или route.name определяет, когда компонент пересоздаётся.',
    whyImportant:
      'На senior-интервью эта тема проверяет знание RouterView slot API, lifecycle и UX. Неправильный key может ломать состояние или не запускать transition.',
    codeExample: {
      language: 'vue',
      filename: 'PageOutlet.vue',
      code: `<RouterView v-slot="{ Component, route }">
  <Transition name="page" mode="out-in">
    <component :is="Component" :key="route.fullPath" />
  </Transition>
</RouterView>`,
    },
    commonMistake:
      'Ошибка — добавлять transition вокруг RouterLink вместо RouterView, ожидая анимацию страниц.',
    interviewQuestions: createInterviewQuestions("Page transitions через RouterView", "Transitions"),
    remember:
      'Page transitions строятся вокруг component из RouterView slot.',
  },
  {
    id: 'knowledge-router-q834',
    moduleId: 'router',
    questionId: 834,
    title: 'Redirect loops',
    category: 'Pitfalls',
    rarity: 'epic',
    interviewLevel: 'senior',
    readingTime: '5 мин',
    whatIsIt:
      'Redirect loop — ситуация, когда guard или redirect rule постоянно перенаправляет навигацию по кругу. Пользователь не может попасть ни на один экран, а router повторяет navigation pipeline. Часто это происходит в auth guards.',
    whenToUse:
      'Защита от loops нужна в любом guard, который возвращает redirect. Нужно исключать target route из условия, учитывать public routes и корректно обрабатывать состояние загрузки auth. Async auth initialization требует особого внимания.',
    howItWorks:
      'Guard получает to и возвращает redirect. Router начинает новую навигацию к target. Если новый route снова удовлетворяет условию redirect, цикл повторяется.',
    whyImportant:
      'На senior-интервью redirect loops — практическая тема. Она показывает, умеет ли разработчик проектировать guards как конечный автомат, а не набор if без выхода.',
    codeExample: {
      language: 'ts',
      filename: 'avoid-loop.ts',
      code: `router.beforeEach((to) => {
  if (to.name !== 'login' && to.meta.requiresAuth && !auth.isLoggedIn) {
    return { name: 'login' }
  }
})`,
    },
    commonMistake:
      'Ошибка — redirect на login без проверки, что текущий route уже не login.',
    interviewQuestions: createInterviewQuestions("Redirect loops", "Pitfalls"),
    remember:
      'Каждый redirect guard должен иметь очевидное условие выхода.',
  },
  {
    id: 'knowledge-router-q835',
    moduleId: 'router',
    questionId: 835,
    title: 'Архитектура маршрутизации',
    category: 'Architecture',
    rarity: 'legendary',
    interviewLevel: 'senior',
    readingTime: '6 мин',
    whatIsIt:
      'Архитектура маршрутизации — организация routes, meta, guards, layouts, breadcrumbs, redirects и lazy loading как единой системы. По мере роста приложения router становится инфраструктурой, а не просто массивом path. Нужен стабильный контракт.',
    whenToUse:
      'Архитектурный подход нужен в приложениях с auth, ролями, nested layouts, разными разделами, аналитикой и breadcrumbs. Для маленького приложения достаточно простого routes array. Рост требований лучше встречать заранее продуманной meta-моделью.',
    howItWorks:
      'Routes могут группироваться по модулям. Meta описывает layout, access, title и breadcrumb. Guards читают meta и вызывают централизованные access functions. UI навигации строится из route records или отдельной navigation config, связанной с route names.',
    whyImportant:
      'На senior-интервью важно показать системное мышление. Хаотичные guards и route meta быстро превращают router в источник багов. Хорошая архитектура делает доступ, breadcrumbs и layouts предсказуемыми.',
    codeExample: {
      language: 'ts',
      filename: 'route-contract.ts',
      code: `{
  path: '/admin/users',
  name: 'admin-users',
  component: () => import('./AdminUsersView.vue'),
  meta: {
    layout: 'admin',
    requiresAuth: true,
    roles: ['admin'],
    breadcrumb: 'Users',
  },
}`,
    },
    commonMistake:
      'Ошибка — размазать auth, titles, breadcrumbs и layout selection по разным компонентам без единого route contract.',
    interviewQuestions: createInterviewQuestions("Архитектура маршрутизации", "Architecture"),
    remember:
      'Большой router требует явного meta-контракта и централизованных правил навигации.',
  },
]
