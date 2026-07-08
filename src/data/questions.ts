import { vueQuestions } from '../content/vue'
import type { Question, QuestionDifficulty } from '../types/question'
import type { ContentQuestion, QuestionDifficulty as ContentQuestionDifficulty } from '../types/content'

const legacyDifficultyByContentDifficulty: Record<ContentQuestionDifficulty, QuestionDifficulty> = {
  Junior: 'beginner',
  JuniorPlus: 'easy',
  Middle: 'medium',
  MiddlePlus: 'medium',
  Senior: 'hard',
}

const toLegacyQuestion = (question: ContentQuestion): Question => ({
  id: question.id,
  levelId: question.moduleId,
  title: question.question,
  options: question.answers,
  correctOptionId: question.correctAnswer,
  explanation: question.explanation,
  difficulty: legacyDifficultyByContentDifficulty[question.difficulty],
})

export const questions: Question[] = vueQuestions.map(toLegacyQuestion)
