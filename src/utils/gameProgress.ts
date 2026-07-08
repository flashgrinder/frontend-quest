import type { Level } from '../types/level'
import { normalizeLevelId } from '../data/levels'
import { getLocationMissions } from '../data/missions'

export const isLevelUnlocked = (levelId: string, unlockedLevels: string[]): boolean =>
  unlockedLevels.map(normalizeLevelId).includes(normalizeLevelId(levelId))

export const isLevelCompleted = (levelId: string, completedLevels: string[]): boolean =>
  completedLevels.map(normalizeLevelId).includes(normalizeLevelId(levelId))

export const getWorldLevels = (worldId: string, levels: Level[]): Level[] =>
  levels.filter((level) => level.worldId === worldId).sort((currentLevel, nextLevel) => currentLevel.order - nextLevel.order)

export const isMissionUnlocked = (missionId: string, unlockedMissions: string[]): boolean =>
  unlockedMissions.map(normalizeLevelId).includes(normalizeLevelId(missionId))

export const isMissionCompleted = (missionId: string, completedMissions: string[]): boolean =>
  completedMissions.map(normalizeLevelId).includes(normalizeLevelId(missionId))

export const isLocationUnlocked = (locationId: string, unlockedLocations: string[]): boolean =>
  unlockedLocations.includes(locationId)

export const isLocationCompleted = (locationId: string, completedLocations: string[]): boolean =>
  completedLocations.includes(locationId)

export const getLocationCompletedMissions = (locationId: string, completedMissions: string[]) =>
  getLocationMissions(locationId).filter((mission) => isMissionCompleted(mission.id, completedMissions))
