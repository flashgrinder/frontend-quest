export type AchievementCategory = 'progress' | 'skill' | 'learning'

export type AchievementConditionType =
  | 'firstMissionCompleted'
  | 'locationCompleted'
  | 'perfectMission'
  | 'correctStreak'
  | 'noMistakes'
  | 'seniorQuestionCorrect'
  | 'knowledgeCardsOpened'
  | 'repeatCompletedMission'
  | 'codeExampleCopied'

export type AchievementRarity = 'common' | 'rare' | 'epic' | 'legendary'

export interface Achievement {
  id: string
  title: string
  description: string
  category: AchievementCategory
  conditionType: AchievementConditionType
  target: number | string
  rewardXp: number
  rewardCoins: number
  icon: string
  rarity: AchievementRarity
  unlockedAt?: string
}

export interface UnlockedAchievement {
  id: string
  unlockedAt: string
}

export interface AchievementProgress {
  current: number
  target: number
}

export type AchievementEvent =
  | {
      type: 'missionCompleted'
      missionId: string
      locationId?: string
      correctAnswers: number
      wrongAnswers: number
      totalQuestions: number
      maxCorrectStreak: number
      wasCompleted: boolean
    }
  | {
      type: 'questionAnswered'
      isCorrect: boolean
      questionDifficulty: string
      currentStreak: number
    }
  | {
      type: 'knowledgeCardOpened'
      knowledgeCardId: string
    }
  | {
      type: 'codeExampleCopied'
    }
