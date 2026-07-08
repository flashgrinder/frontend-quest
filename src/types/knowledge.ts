export type KnowledgeRarity = 'common' | 'rare' | 'epic' | 'legendary'

export type InterviewLevel = 'junior' | 'middle' | 'senior'

export type CodeExampleLanguage = 'vue' | 'ts' | 'js' | 'html' | 'css' | 'json' | 'bash' | 'php'

export interface CodeExample {
  language: CodeExampleLanguage
  filename?: string
  code: string
}

export interface KnowledgeCard {
  id: string
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
  codeExample?: CodeExample
  commonMistake: string
  interviewQuestions: string[]
  remember: string
}
