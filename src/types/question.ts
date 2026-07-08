export type QuestionDifficulty = 'beginner' | 'easy' | 'medium' | 'hard'

export interface QuestionOption {
  id: string
  text: string
}

export interface Question {
  id: number
  levelId: string
  title: string
  options: QuestionOption[]
  correctOptionId: string
  explanation: string
  difficulty: QuestionDifficulty
}
