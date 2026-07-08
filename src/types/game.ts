export type LevelId = string
export type MissionId = string
export type LocationId = string
export type AchievementId = string

export interface LevelCompletionReward {
  xp: number
  coins: number
}

export interface GameProgress {
  completedLevels: LevelId[]
  unlockedLevels: LevelId[]
  completedMissions: MissionId[]
  unlockedMissions: MissionId[]
  completedLocations: LocationId[]
  unlockedLocations: LocationId[]
  achievements: AchievementId[]
}
