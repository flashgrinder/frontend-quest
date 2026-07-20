import type { AudioTrack } from './types'

export class Playlist {
  private previousTrackId: string | undefined
  private readonly tracks: AudioTrack[]

  constructor(tracks: AudioTrack[]) {
    this.tracks = tracks
  }

  get hasTracks(): boolean {
    return this.tracks.length > 0
  }

  getFirstTrack(): AudioTrack | undefined {
    return this.tracks[0]
  }

  getRandomTrack(): AudioTrack | undefined {
    if (this.tracks.length <= 1) {
      return this.tracks[0]
    }

    const candidates = this.tracks.filter((track) => track.id !== this.previousTrackId)
    const nextTrack = candidates[Math.floor(Math.random() * candidates.length)]

    this.previousTrackId = nextTrack.id

    return nextTrack
  }

  getNextTrack(currentTrackId?: string): AudioTrack | undefined {
    if (this.tracks.length === 0) {
      return undefined
    }

    const currentIndex = this.tracks.findIndex((track) => track.id === currentTrackId)
    const nextTrack = this.tracks[(currentIndex + 1) % this.tracks.length]

    this.previousTrackId = nextTrack.id

    return nextTrack
  }
}
