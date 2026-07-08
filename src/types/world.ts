export type MapNodeStatus = 'locked' | 'unlocked' | 'current' | 'completed'

export interface World {
  id: string
  title: string
  description: string
  order: number
  locationIds: string[]
  status: MapNodeStatus
  accentColor: string
  icon: string
}
