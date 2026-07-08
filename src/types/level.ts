export type LevelDifficulty = 'beginner' | 'easy' | 'medium' | 'hard' | 'boss'

export interface Level {
  id: string
  worldId: string
  title: string
  description: string
  difficulty: LevelDifficulty
  xpReward: number
  coinReward: number
  order: number
  lockedByDefault: boolean
}
