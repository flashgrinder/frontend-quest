import type { AvatarPreset } from '../../types/profile'

const avatarModules = import.meta.glob<string>('/src/assets/avatars/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

const createAvatarTitle = (id: string): string => id.replaceAll('-', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())

export const avatarPresets: AvatarPreset[] = Object.entries(avatarModules)
  .sort(([currentPath], [nextPath]) => currentPath.localeCompare(nextPath))
  .map(([path, url]) => {
    const filename = path.split('/').at(-1) ?? 'avatar'
    const id = filename.replace(/\.png$/i, '')

    return {
      id,
      title: createAvatarTitle(id),
      url,
    }
  })

export const defaultAvatar = avatarPresets[0]

export const getAvatarById = (avatarId: string): AvatarPreset | undefined =>
  avatarPresets.find((avatar) => avatar.id === avatarId)
