import { contentModules, webFoundationsModules } from '../content'
import type { Mission } from '../types/mission'
import { locations } from './locations'

const moduleIdsByLocationId: Record<string, string[]> = {
  'html-academy': webFoundationsModules.map((module) => module.id),
  'vue-city': [
    'vue-basics',
    'reactivity',
    'composition-api',
    'components',
    'props-emits',
    'slots',
    'lifecycle',
    'composables',
  ],
  'router-mountains': ['router'],
  'pinia-village': ['pinia'],
  'nuxt-space': ['nuxt-core', 'nuxt-data-fetching', 'server-api', 'ssr-hydration', 'performance'],
}

const locationIdByModuleId = Object.fromEntries(
  Object.entries(moduleIdsByLocationId).flatMap(([locationId, moduleIds]) =>
    moduleIds.map((moduleId) => [moduleId, locationId]),
  ),
)

export const missions: Mission[] = [...contentModules]
  .filter((module) => locationIdByModuleId[module.id])
  .sort((currentModule, nextModule) => currentModule.order - nextModule.order)
  .map((module) => {
    const locationId = locationIdByModuleId[module.id]
    const locationMissionIds = moduleIdsByLocationId[locationId]
    const missionOrder = locationMissionIds.indexOf(module.id) + 1

    return {
      id: module.id,
      locationId,
      contentModuleId: module.id,
      title: module.title,
      description: module.description,
      order: missionOrder,
      xpReward: module.xpReward,
      coinReward: module.coinReward,
      status: module.id === 'vue-basics' ? 'current' : 'locked',
    }
  })

export const getLocationMissions = (locationId: string): Mission[] =>
  missions
    .filter((mission) => mission.locationId === locationId)
    .sort((currentMission, nextMission) => currentMission.order - nextMission.order)

export const getMissionById = (missionId: string): Mission | undefined =>
  missions.find((mission) => mission.id === missionId || mission.contentModuleId === missionId)

export const getMissionLocation = (missionId: string): string | undefined => getMissionById(missionId)?.locationId

export const getNextMissionInLocation = (missionId: string): Mission | undefined => {
  const mission = getMissionById(missionId)

  if (!mission) {
    return undefined
  }

  const locationMissions = getLocationMissions(mission.locationId)
  const currentMissionIndex = locationMissions.findIndex((item) => item.id === mission.id)

  return currentMissionIndex >= 0 ? locationMissions[currentMissionIndex + 1] : undefined
}

export const getNextLocation = (locationId: string): string | undefined => {
  const location = locations.find((item) => item.id === locationId)

  if (!location) {
    return undefined
  }

  const worldLocations = locations
    .filter((item) => item.worldId === location.worldId)
    .sort((currentLocation, nextLocation) => currentLocation.order - nextLocation.order)
  const currentLocationIndex = worldLocations.findIndex((item) => item.id === locationId)

  return currentLocationIndex >= 0 ? worldLocations[currentLocationIndex + 1]?.id : undefined
}

export const isLocationCompletedByMissions = (locationId: string, completedMissionIds: string[]): boolean => {
  const locationMissionIds = getLocationMissions(locationId).map((mission) => mission.id)

  return locationMissionIds.length > 0 && locationMissionIds.every((missionId) => completedMissionIds.includes(missionId))
}

export const getFirstMissionId = (locationId: string): string | undefined => getLocationMissions(locationId)[0]?.id
