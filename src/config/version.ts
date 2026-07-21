export const APP_VERSION = {
  major: 0,
  minor: 3,
  patch: 1,
  stage: 'alpha',
  build: 6,
} as const

const formatStage = (stage: string): string => `${stage.charAt(0).toUpperCase()}${stage.slice(1)}`

export const APP_VERSION_LABEL = `v${APP_VERSION.major}.${APP_VERSION.minor}.${APP_VERSION.patch} ${formatStage(APP_VERSION.stage)}`
export const APP_RELEASE_LABEL = `Release ${APP_VERSION_LABEL}`
export const APP_BUILD_LABEL = String(APP_VERSION.build).padStart(4, '0')

export const BUILD_INFO = {
  version: APP_VERSION_LABEL,
  build: APP_BUILD_LABEL,
  commit: import.meta.env.VITE_COMMIT_SHA ?? 'local',
  builtAt: import.meta.env.VITE_BUILD_TIME ?? 'unknown',
} as const
