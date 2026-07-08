import type { MapNodeStatus } from './world'

export interface Mission {
  id: string
  locationId: string
  contentModuleId: string
  title: string
  description: string
  order: number
  xpReward: number
  coinReward: number
  status: MapNodeStatus
}
