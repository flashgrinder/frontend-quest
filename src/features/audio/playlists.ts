import type { AudioTrack } from './types'

const musicModules = import.meta.glob<string>('/src/assets/audio/music/*.{mp3,ogg,wav}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const createTrackTitle = (path: string): string => {
  const filename = path.split('/').at(-1) ?? 'track'
  const nameWithoutExtension = filename.replace(/\.(mp3|ogg|wav)$/i, '')

  return nameWithoutExtension
    .split('-')
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ')
}

export const mainMusicPlaylist: AudioTrack[] = Object.entries(musicModules)
  .sort(([currentPath], [nextPath]) => currentPath.localeCompare(nextPath))
  .map(([path, src]) => {
    const filename = path.split('/').at(-1) ?? 'track'
    const id = filename.replace(/\.(mp3|ogg|wav)$/i, '')

    return {
      id,
      title: createTrackTitle(path),
      src,
    }
  })
