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

  getTrackById(trackId: string): AudioTrack | undefined {
    return this.tracks.find((track) => track.id === trackId)
  }

  rememberTrack(trackId: string): void {
    this.previousTrackId = trackId
  }

  getRandomTrack(): AudioTrack | undefined {
    if (this.tracks.length <= 1) {
      const onlyTrack = this.tracks[0]

      if (onlyTrack) {
        this.previousTrackId = onlyTrack.id
      }

      return onlyTrack
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
