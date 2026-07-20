import { Playlist } from './playlist'
import { PRIORITY_MUSIC_TRACK_ID, mainMusicPlaylist } from './playlists'
import { MusicPlayer } from './musicPlayer'
import type { AudioTrack } from './types'

const MUSIC_FADE_IN_MS = 900
const MUSIC_FADE_OUT_MS = 400
const USER_INTERACTION_EVENTS = ['click', 'pointerdown', 'touchstart', 'keydown'] as const

export class MusicManager {
  private readonly playlist = new Playlist(mainMusicPlaylist)
  private readonly player = new MusicPlayer()
  private enabled = true
  private volume = 1
  private started = false
  private isFadingIn = false
  private isWaitingForInteraction = false

  setEnabled(value: boolean): void {
    this.enabled = value

    if (value) {
      this.start()
      return
    }

    this.fadeOut()
  }

  setVolume(value: number): void {
    this.volume = Math.min(1, Math.max(0, value))

    if (this.enabled && this.started) {
      this.player.fadeTo(this.getTargetVolume(), MUSIC_FADE_IN_MS)
    }
  }

  start(): void {
    if (!this.enabled || this.volume <= 0 || !this.playlist.hasTracks) {
      return
    }

    if (!this.started) {
      const track = this.getInitialTrack()

      if (!track) {
        return
      }

      this.player.load(track)
      this.player.onEnded(() => this.playNextTrack())
      this.started = true
    }

    if (this.player.isPlaying) {
      return
    }

    void this.player.play().then((hasStarted) => {
      if (hasStarted) {
        this.removeInteractionListeners()
        this.fadeIn()
        return
      }

      this.waitForFirstInteraction()
    })
  }

  fadeIn(): void {
    if (this.isFadingIn || this.player.isPlaying === false) {
      return
    }

    this.isFadingIn = true
    this.player.fadeTo(this.getTargetVolume(), MUSIC_FADE_IN_MS)
    window.setTimeout(() => {
      this.isFadingIn = false
    }, MUSIC_FADE_IN_MS)
  }

  fadeOut(): void {
    this.isFadingIn = false
    this.player.fadeTo(0, MUSIC_FADE_OUT_MS, true)
  }

  crossFadeToNextTrack(): void {
    this.player.fadeTo(0, MUSIC_FADE_OUT_MS, true)
    window.setTimeout(() => {
      this.playNextTrack()
    }, MUSIC_FADE_OUT_MS)
  }

  private playNextTrack(): void {
    const nextTrack = this.playlist.getRandomTrack()

    if (!nextTrack) {
      return
    }

    this.player.load(nextTrack)
    this.player.onEnded(() => this.playNextTrack())
    void this.player.play().then((hasStarted) => {
      if (hasStarted) {
        this.fadeIn()
        return
      }

      this.waitForFirstInteraction()
    })
  }

  private waitForFirstInteraction(): void {
    if (this.isWaitingForInteraction || typeof window === 'undefined') {
      return
    }

    this.isWaitingForInteraction = true

    USER_INTERACTION_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, this.handleFirstInteraction, { once: true, passive: true })
    })
  }

  private removeInteractionListeners(): void {
    if (!this.isWaitingForInteraction || typeof window === 'undefined') {
      return
    }

    USER_INTERACTION_EVENTS.forEach((eventName) => {
      window.removeEventListener(eventName, this.handleFirstInteraction)
    })

    this.isWaitingForInteraction = false
  }

  private readonly handleFirstInteraction = (): void => {
    this.removeInteractionListeners()
    this.start()
  }

  private getInitialTrack(): AudioTrack | undefined {
    const priorityTrack = this.playlist.getTrackById(PRIORITY_MUSIC_TRACK_ID)

    if (priorityTrack) {
      this.playlist.rememberTrack(priorityTrack.id)
      return priorityTrack
    }

    return this.playlist.getRandomTrack()
  }

  private getTargetVolume(): number {
    return this.enabled ? Math.min(1, Math.max(0, this.volume)) : 0
  }
}
