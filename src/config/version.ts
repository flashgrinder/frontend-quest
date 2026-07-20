export const APP_VERSION = {
  major: 0,
  minor: 2,
  patch: 2,
  stage: 'alpha',
  build: 2,
} as const

const formatStage = (stage: string): string => `${stage.charAt(0).toUpperCase()}${stage.slice(1)}`

export const APP_VERSION_LABEL = `v${APP_VERSION.major}.${APP_VERSION.minor}.${APP_VERSION.patch} ${formatStage(APP_VERSION.stage)}`
export const APP_RELEASE_LABEL = `Release ${APP_VERSION_LABEL}`
export const APP_BUILD_LABEL = String(APP_VERSION.build).padStart(4, '0')
