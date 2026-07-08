import type { MapNodeStatus } from './world'

export interface Location {
  id: string
  worldId: string
  title: string
  description: string
  order: number
  missionIds: string[]
  status: MapNodeStatus
  accentColor: string
  icon: string
}
