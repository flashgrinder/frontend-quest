import type { QuestionDifficulty } from '../types/content'
import type { Level, LevelDifficulty } from '../types/level'
import { missions, getNextMissionInLocation, getNextLocation, getFirstMissionId } from './missions'
import { vueModules } from '../content/vue'

const vueModuleIds = new Set(vueModules.map((module) => module.id))

export const legacyLevelIdByModuleId: Record<string, string> = {
  'vue-basics': 'vue-basics-1',
  reactivity: 'vue-basics-2',
  'composition-api': 'vue-basics-3',
  components: 'vue-basics-4',
  'props-emits': 'vue-basics-5',
  slots: 'vue-basics-6',
  lifecycle: 'vue-basics-7',
  composables: 'vue-basics-8',
  router: 'vue-basics-9',
  pinia: 'vue-basics-10',
  'nuxt-core': 'vue-basics-11',
  'nuxt-data-fetching': 'vue-basics-12',
  'server-api': 'vue-basics-13',
  'ssr-hydration': 'vue-basics-14',
  performance: 'vue-basics-15',
}

const moduleIdByLegacyLevelId = Object.fromEntries(
  Object.entries(legacyLevelIdByModuleId).map(([moduleId, legacyLevelId]) => [legacyLevelId, moduleId]),
)

const difficultyByContentDifficulty: Record<QuestionDifficulty, LevelDifficulty> = {
  Junior: 'beginner',
  JuniorPlus: 'easy',
  Middle: 'medium',
  MiddlePlus: 'hard',
  Senior: 'boss',
}

const moduleDifficultyById = Object.fromEntries(vueModules.map((module) => [module.id, module.difficulty]))

export const normalizeLevelId = (levelId: string): string => {
  const normalizedLevelId = moduleIdByLegacyLevelId[levelId] ?? levelId

  return vueModuleIds.has(normalizedLevelId) ? normalizedLevelId : levelId
}

export const levels: Level[] = [...missions]
  .sort((currentMission, nextMission) => currentMission.order - nextMission.order)
  .map((mission) => ({
    id: mission.id,
    worldId: mission.locationId,
    title: mission.title,
    description: mission.description,
    difficulty: difficultyByContentDifficulty[moduleDifficultyById[mission.contentModuleId] ?? 'Junior'],
    xpReward: mission.xpReward,
    coinReward: mission.coinReward,
    order: mission.order,
    lockedByDefault: mission.id !== 'vue-basics',
  }))

export const getNextLevelId = (levelId: string): string | undefined => {
  const normalizedLevelId = normalizeLevelId(levelId)
  const nextMission = getNextMissionInLocation(normalizedLevelId)

  if (nextMission) {
    return nextMission.id
  }

  const currentMission = missions.find((mission) => mission.id === normalizedLevelId)

  if (!currentMission) {
    return undefined
  }

  const nextLocationId = getNextLocation(currentMission.locationId)

  return nextLocationId ? getFirstMissionId(nextLocationId) : undefined
}
