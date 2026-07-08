import type { UnlockedAchievement } from './achievement'

export interface Player {
  name: string
  rank: string
  level: number
  xp: number
  xpToNextLevel: number
  coins: number
  energy: number
  maxEnergy: number
  completedLevels: string[]
  unlockedLevels: string[]
  completedMissions: string[]
  unlockedMissions: string[]
  completedLocations: string[]
  unlockedLocations: string[]
  achievements: string[]
  unlockedAchievements: UnlockedAchievement[]
  openedKnowledgeCards: string[]
  copiedCodeExamples: number
  bestCorrectStreak: number
}
