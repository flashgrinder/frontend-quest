import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import { defineStore } from 'pinia'
import { achievements } from '../data/achievements'
import { getNextLevelId, normalizeLevelId } from '../data/levels'
import {
  getFirstMissionId,
  getMissionById,
  getMissionLocation,
  getNextLocation,
  getNextMissionInLocation,
  isLocationCompletedByMissions,
} from '../data/missions'
import type { Achievement, AchievementEvent, AchievementProgress, UnlockedAchievement } from '../types/achievement'
import type { LevelId, LocationId, MissionId } from '../types/game'
import type { Player } from '../types/player'

const STORAGE_KEY = 'frontend-quest:player'
const SETTINGS_STORAGE_KEY = 'frontend-quest:settings:sound-enabled'
const XP_LEVEL_STEP = 50
const MIGRATED_ACHIEVEMENT_DATE = '1970-01-01T00:00:00.000Z'
const legacyAchievementIdMap: Record<string, string> = {
  'first-step': 'first-mission',
  'training-run': 'repeat-practice',
}

const createDefaultPlayer = (): Player => ({
  name: 'Георгий',
  rank: 'Junior Adventurer',
  level: 1,
  xp: 0,
  xpToNextLevel: 100,
  coins: 50,
  energy: 10,
  maxEnergy: 10,
  completedLevels: [],
  unlockedLevels: ['html-document-gate-basics', 'vue-basics'],
  completedMissions: [],
  unlockedMissions: ['html-document-gate-basics', 'vue-basics'],
  completedLocations: [],
  unlockedLocations: ['html-academy', 'vue-city'],
  achievements: [],
  unlockedAchievements: [],
  openedKnowledgeCards: [],
  copiedCodeExamples: 0,
  bestCorrectStreak: 0,
})

const normalizePositiveAmount = (amount: number): number => Math.max(0, Math.floor(amount))

const addUniqueItem = (items: string[], item: string): void => {
  if (!items.includes(item)) {
    items.push(item)
  }
}

const normalizeProgressList = (items: string[]): string[] => [...new Set(items.map(normalizeLevelId))]

const normalizeLocationList = (items: string[]): string[] => [...new Set(items)]

const normalizeUnlockedAchievements = (achievementIds: string[], unlockedItems: UnlockedAchievement[]): UnlockedAchievement[] => {
  const currentAchievementIds = achievements.map((achievement) => achievement.id)
  const unlockedById = new Map<string, UnlockedAchievement>()

  unlockedItems.forEach((item) => {
    if (currentAchievementIds.includes(item.id)) {
      unlockedById.set(item.id, item)
    }
  })

  achievementIds.forEach((achievementId) => {
    const mappedAchievementId = legacyAchievementIdMap[achievementId] ?? achievementId

    if (currentAchievementIds.includes(mappedAchievementId) && !unlockedById.has(mappedAchievementId)) {
      unlockedById.set(mappedAchievementId, {
        id: mappedAchievementId,
        unlockedAt: MIGRATED_ACHIEVEMENT_DATE,
      })
    }
  })

  return [...unlockedById.values()]
}

export const useGameStore = defineStore('game', () => {
  const player = useLocalStorage<Player>(STORAGE_KEY, createDefaultPlayer(), {
    mergeDefaults: true,
  })
  const soundEnabled = useLocalStorage<boolean>(SETTINGS_STORAGE_KEY, true)

  player.value.completedLevels = normalizeProgressList(player.value.completedLevels)
  player.value.unlockedLevels = normalizeProgressList(player.value.unlockedLevels)
  player.value.completedMissions = normalizeProgressList([
    ...(player.value.completedMissions ?? []),
    ...player.value.completedLevels,
  ])
  player.value.unlockedMissions = normalizeProgressList([
    ...(player.value.unlockedMissions ?? []),
    ...player.value.unlockedLevels,
  ])
  player.value.completedLocations = normalizeLocationList(player.value.completedLocations ?? [])
  player.value.unlockedLocations = normalizeLocationList(player.value.unlockedLocations ?? [])
  player.value.unlockedAchievements = normalizeUnlockedAchievements(
    player.value.achievements ?? [],
    player.value.unlockedAchievements ?? [],
  )
  player.value.achievements = player.value.unlockedAchievements.map((achievement) => achievement.id)
  player.value.openedKnowledgeCards = [...new Set(player.value.openedKnowledgeCards ?? [])]
  player.value.copiedCodeExamples = normalizePositiveAmount(player.value.copiedCodeExamples ?? 0)
  player.value.bestCorrectStreak = normalizePositiveAmount(player.value.bestCorrectStreak ?? 0)

  addUniqueItem(player.value.unlockedLevels, 'vue-basics')
  addUniqueItem(player.value.unlockedMissions, 'vue-basics')
  addUniqueItem(player.value.unlockedLevels, 'html-document-gate-basics')
  addUniqueItem(player.value.unlockedMissions, 'html-document-gate-basics')
  addUniqueItem(player.value.unlockedLocations, 'html-academy')
  addUniqueItem(player.value.unlockedLocations, 'vue-city')

  player.value.completedLevels = normalizeProgressList([...player.value.completedLevels, ...player.value.completedMissions])
  player.value.unlockedLevels = normalizeProgressList([...player.value.unlockedLevels, ...player.value.unlockedMissions])

  player.value.unlockedMissions.forEach((missionId) => {
    const locationId = getMissionLocation(missionId)

    if (locationId) {
      addUniqueItem(player.value.unlockedLocations, locationId)
    }
  })

  player.value.completedMissions.forEach((missionId) => {
    const locationId = getMissionLocation(missionId)

    if (locationId && isLocationCompletedByMissions(locationId, player.value.completedMissions)) {
      addUniqueItem(player.value.completedLocations, locationId)
    }
  })

  const xpProgressPercent = computed(() => {
    if (player.value.xpToNextLevel <= 0) {
      return 0
    }

    const progress = (player.value.xp / player.value.xpToNextLevel) * 100

    return Math.min(100, Math.max(0, progress))
  })

  const addXp = (amount: number): void => {
    player.value.xp += normalizePositiveAmount(amount)

    while (player.value.xp >= player.value.xpToNextLevel) {
      player.value.xp -= player.value.xpToNextLevel
      player.value.level += 1
      player.value.xpToNextLevel += XP_LEVEL_STEP
    }
  }

  const addCoins = (amount: number): void => {
    player.value.coins += normalizePositiveAmount(amount)
  }

  const spendEnergy = (amount: number): void => {
    const energyCost = normalizePositiveAmount(amount)

    player.value.energy = Math.max(0, player.value.energy - energyCost)
  }

  const restoreEnergy = (amount: number): void => {
    const energyAmount = normalizePositiveAmount(amount)

    player.value.energy = Math.min(player.value.maxEnergy, player.value.energy + energyAmount)
  }

  const unlockLevel = (levelId: LevelId): void => {
    const normalizedLevelId = normalizeLevelId(levelId)

    addUniqueItem(player.value.unlockedLevels, normalizedLevelId)
    addUniqueItem(player.value.unlockedMissions, normalizedLevelId)

    const locationId = getMissionLocation(normalizedLevelId)

    if (locationId) {
      unlockLocation(locationId)
    }
  }

  const unlockMission = (missionId: MissionId): void => {
    unlockLevel(missionId)
  }

  const unlockLocation = (locationId: LocationId): void => {
    addUniqueItem(player.value.unlockedLocations, locationId)

    const firstMissionId = getFirstMissionId(locationId)

    if (firstMissionId) {
      addUniqueItem(player.value.unlockedLevels, firstMissionId)
      addUniqueItem(player.value.unlockedMissions, firstMissionId)
    }
  }

  const completeLevel = (levelId: LevelId, xpReward: number, coinReward: number): void => {
    const normalizedLevelId = normalizeLevelId(levelId)

    if (player.value.completedMissions.includes(normalizedLevelId)) {
      return
    }

    player.value.completedLevels.push(normalizedLevelId)
    player.value.completedMissions.push(normalizedLevelId)
    addXp(xpReward)
    addCoins(coinReward)

    const mission = getMissionById(normalizedLevelId)
    const nextMission = getNextMissionInLocation(normalizedLevelId)

    if (nextMission) {
      unlockMission(nextMission.id)
      return
    }

    if (!mission) {
      const nextLevelId = getNextLevelId(normalizedLevelId)

      if (nextLevelId) {
        unlockLevel(nextLevelId)
      }

      return
    }

    if (isLocationCompletedByMissions(mission.locationId, player.value.completedMissions)) {
      addUniqueItem(player.value.completedLocations, mission.locationId)

      const nextLocationId = getNextLocation(mission.locationId)

      if (nextLocationId) {
        unlockLocation(nextLocationId)
      }
    }
  }

  const completeMission = (missionId: MissionId, xpReward: number, coinReward: number): void => {
    completeLevel(missionId, xpReward, coinReward)
  }

  const unlockAchievement = (achievementId: string): Achievement | undefined => {
    if (player.value.unlockedAchievements.some((item) => item.id === achievementId)) {
      return undefined
    }

    const achievement = achievements.find((item) => item.id === achievementId)

    if (!achievement) {
      return undefined
    }

    const unlockedAt = new Date().toISOString()

    player.value.unlockedAchievements.push({
      id: achievement.id,
      unlockedAt,
    })
    addUniqueItem(player.value.achievements, achievement.id)
    addXp(achievement.rewardXp)
    addCoins(achievement.rewardCoins)

    return {
      ...achievement,
      unlockedAt,
    }
  }

  const unlockAchievements = (achievementIds: string[]): Achievement[] =>
    achievementIds
      .map((achievementId) => unlockAchievement(achievementId))
      .filter((achievement): achievement is Achievement => Boolean(achievement))

  const getAchievementProgress = (achievement: Achievement): AchievementProgress => {
    const target = typeof achievement.target === 'number' ? achievement.target : 1
    const isUnlocked = player.value.unlockedAchievements.some((item) => item.id === achievement.id)

    if (isUnlocked) {
      return {
        current: target,
        target,
      }
    }

    if (achievement.conditionType === 'knowledgeCardsOpened') {
      return {
        current: Math.min(player.value.openedKnowledgeCards.length, target),
        target,
      }
    }

    if (achievement.conditionType === 'correctStreak') {
      return {
        current: Math.min(player.value.bestCorrectStreak, target),
        target,
      }
    }

    if (achievement.conditionType === 'firstMissionCompleted') {
      return {
        current: Math.min(player.value.completedMissions.length, target),
        target,
      }
    }

    if (achievement.conditionType === 'codeExampleCopied') {
      return {
        current: Math.min(player.value.copiedCodeExamples, target),
        target,
      }
    }

    if (achievement.conditionType === 'locationCompleted' && typeof achievement.target === 'string') {
      return {
        current: player.value.completedLocations.includes(achievement.target) ? 1 : 0,
        target: 1,
      }
    }

    return {
      current: 0,
      target,
    }
  }

  const checkAchievements = (event: AchievementEvent): Achievement[] => {
    const achievementIdsToUnlock: string[] = []

    if (event.type === 'questionAnswered') {
      if (event.isCorrect) {
        player.value.bestCorrectStreak = Math.max(player.value.bestCorrectStreak, event.currentStreak)

        if (event.currentStreak >= 10) {
          achievementIdsToUnlock.push('clean-streak')
        }

        if (event.questionDifficulty === 'hard' || event.questionDifficulty === 'Senior') {
          achievementIdsToUnlock.push('senior-mindset')
        }
      }
    }

    if (event.type === 'knowledgeCardOpened') {
      addUniqueItem(player.value.openedKnowledgeCards, event.knowledgeCardId)

      if (player.value.openedKnowledgeCards.length >= 25) {
        achievementIdsToUnlock.push('knowledge-collector')
      }

      if (player.value.openedKnowledgeCards.length >= 100) {
        achievementIdsToUnlock.push('deep-learner')
      }
    }

    if (event.type === 'codeExampleCopied') {
      player.value.copiedCodeExamples += 1
      achievementIdsToUnlock.push('code-reader')
    }

    if (event.type === 'missionCompleted') {
      if (player.value.completedMissions.length >= 1) {
        achievementIdsToUnlock.push('first-mission')
      }

      if (event.totalQuestions > 0 && event.correctAnswers === event.totalQuestions) {
        achievementIdsToUnlock.push('perfect-run')
      }

      if (event.totalQuestions > 0 && event.wrongAnswers === 0) {
        achievementIdsToUnlock.push('no-mistakes')
      }

      if (event.maxCorrectStreak >= 10) {
        player.value.bestCorrectStreak = Math.max(player.value.bestCorrectStreak, event.maxCorrectStreak)
        achievementIdsToUnlock.push('clean-streak')
      }

      if (event.wasCompleted) {
        achievementIdsToUnlock.push('repeat-practice')
      }

      achievements
        .filter((achievement) => achievement.conditionType === 'locationCompleted' && typeof achievement.target === 'string')
        .forEach((achievement) => {
          if (typeof achievement.target === 'string' && player.value.completedLocations.includes(achievement.target)) {
            achievementIdsToUnlock.push(achievement.id)
          }
        })
    }

    return unlockAchievements([...new Set(achievementIdsToUnlock)])
  }

  const resetProgress = (): void => {
    player.value = createDefaultPlayer()
  }

  const setSoundEnabled = (value: boolean): void => {
    soundEnabled.value = value
  }

  const toggleSound = (): void => {
    soundEnabled.value = !soundEnabled.value
  }

  return {
    player,
    soundEnabled,
    xpProgressPercent,
    addXp,
    addCoins,
    spendEnergy,
    restoreEnergy,
    completeLevel,
    completeMission,
    unlockAchievement,
    checkAchievements,
    getAchievementProgress,
    unlockLevel,
    unlockMission,
    unlockLocation,
    resetProgress,
    setSoundEnabled,
    toggleSound,
  }
})
