import type { CodeExample, InterviewLevel, KnowledgeRarity } from './knowledge'

export interface ContentModuleMeta {
  id: string
  title: string
  description: string
  difficulty: QuestionDifficulty
  estimatedMinutes: number
  questionsCount: number
  xpReward: number
  coinReward: number
  color: string
  accentColor?: string
  icon: string
  order: number
}

export type QuestionType =
  | 'Theory'
  | 'CodeOutput'
  | 'FindBug'
  | 'BestPractice'
  | 'CodeReview'
  | 'Interview'
  | 'Architecture'
  | 'Scenario'

export type QuestionDifficulty = 'Junior' | 'JuniorPlus' | 'Middle' | 'MiddlePlus' | 'Senior'

export interface ContentAnswer {
  id: string
  text: string
}

export interface ContentQuestion {
  id: number
  moduleId: string
  type: QuestionType
  difficulty: QuestionDifficulty
  tags: string[]
  question: string
  answers: ContentAnswer[]
  correctAnswer: string
  explanation: string
  knowledgeId: string
}

export interface ContentKnowledgeCard {
  id: string
  moduleId: string
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
