import { vueKnowledgeCards, vueModules, vueQuestions } from './vue'
import { webFoundationsKnowledgeCards, webFoundationsModules, webFoundationsQuestions } from './web-foundations'

export const contentModules = [
  ...webFoundationsModules,
  ...vueModules,
]

export const contentQuestions = [
  ...webFoundationsQuestions,
  ...vueQuestions,
]

export const contentKnowledgeCards = [
  ...webFoundationsKnowledgeCards,
  ...vueKnowledgeCards,
]

export { vueKnowledgeCards, vueModules, vueQuestions } from './vue'
export { webFoundationsKnowledgeCards, webFoundationsModules, webFoundationsQuestions } from './web-foundations'
