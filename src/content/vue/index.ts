import { componentsKnowledgeCards } from './components/knowledge'
import { componentsMeta } from './components/meta'
import { componentsQuestions } from './components/questions'
import { composablesKnowledgeCards } from './composables/knowledge'
import { composablesMeta } from './composables/meta'
import { composablesQuestions } from './composables/questions'
import { compositionApiKnowledgeCards } from './composition-api/knowledge'
import { compositionApiMeta } from './composition-api/meta'
import { compositionApiQuestions } from './composition-api/questions'
import { lifecycleKnowledgeCards } from './lifecycle/knowledge'
import { lifecycleMeta } from './lifecycle/meta'
import { lifecycleQuestions } from './lifecycle/questions'
import { nuxtCoreKnowledgeCards } from './nuxt-core/knowledge'
import { nuxtCoreMeta } from './nuxt-core/meta'
import { nuxtCoreQuestions } from './nuxt-core/questions'
import { nuxtDataFetchingKnowledgeCards } from './nuxt-data-fetching/knowledge'
import { nuxtDataFetchingMeta } from './nuxt-data-fetching/meta'
import { nuxtDataFetchingQuestions } from './nuxt-data-fetching/questions'
import { piniaKnowledgeCards } from './pinia/knowledge'
import { piniaMeta } from './pinia/meta'
import { piniaQuestions } from './pinia/questions'
import { performanceKnowledgeCards } from './performance/knowledge'
import { performanceMeta } from './performance/meta'
import { performanceQuestions } from './performance/questions'
import { propsEmitsKnowledgeCards } from './props-emits/knowledge'
import { propsEmitsMeta } from './props-emits/meta'
import { propsEmitsQuestions } from './props-emits/questions'
import { reactivityKnowledgeCards } from './reactivity/knowledge'
import { reactivityMeta } from './reactivity/meta'
import { reactivityQuestions } from './reactivity/questions'
import { routerKnowledgeCards } from './router/knowledge'
import { routerMeta } from './router/meta'
import { routerQuestions } from './router/questions'
import { serverApiKnowledgeCards } from './server-api/knowledge'
import { serverApiMeta } from './server-api/meta'
import { serverApiQuestions } from './server-api/questions'
import { slotsKnowledgeCards } from './slots/knowledge'
import { slotsMeta } from './slots/meta'
import { slotsQuestions } from './slots/questions'
import { ssrHydrationKnowledgeCards } from './ssr-hydration/knowledge'
import { ssrHydrationMeta } from './ssr-hydration/meta'
import { ssrHydrationQuestions } from './ssr-hydration/questions'
import { vueBasicsKnowledgeCards } from './vue-basics/knowledge'
import { vueBasicsMeta } from './vue-basics/meta'
import { vueBasicsQuestions } from './vue-basics/questions'

export const vueModules = [
  vueBasicsMeta,
  reactivityMeta,
  compositionApiMeta,
  componentsMeta,
  propsEmitsMeta,
  slotsMeta,
  lifecycleMeta,
  composablesMeta,
  routerMeta,
  piniaMeta,
  nuxtCoreMeta,
  nuxtDataFetchingMeta,
  serverApiMeta,
  ssrHydrationMeta,
  performanceMeta,
]

export const vueQuestions = [
  ...vueBasicsQuestions,
  ...reactivityQuestions,
  ...compositionApiQuestions,
  ...componentsQuestions,
  ...propsEmitsQuestions,
  ...slotsQuestions,
  ...lifecycleQuestions,
  ...composablesQuestions,
  ...routerQuestions,
  ...piniaQuestions,
  ...nuxtCoreQuestions,
  ...nuxtDataFetchingQuestions,
  ...serverApiQuestions,
  ...ssrHydrationQuestions,
  ...performanceQuestions,
]

export const vueKnowledgeCards = [
  ...vueBasicsKnowledgeCards,
  ...reactivityKnowledgeCards,
  ...compositionApiKnowledgeCards,
  ...componentsKnowledgeCards,
  ...propsEmitsKnowledgeCards,
  ...slotsKnowledgeCards,
  ...lifecycleKnowledgeCards,
  ...composablesKnowledgeCards,
  ...routerKnowledgeCards,
  ...piniaKnowledgeCards,
  ...nuxtCoreKnowledgeCards,
  ...nuxtDataFetchingKnowledgeCards,
  ...serverApiKnowledgeCards,
  ...ssrHydrationKnowledgeCards,
  ...performanceKnowledgeCards,
]
