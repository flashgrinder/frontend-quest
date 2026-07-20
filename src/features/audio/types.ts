export type OscillatorWave = OscillatorType

export interface ToneStep {
  frequency: number
  duration: number
  type?: OscillatorWave
  gain?: number
}

export interface AudioTrack {
  id: string
  title: string
  src: string
}
