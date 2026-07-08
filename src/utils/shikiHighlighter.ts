import type { CodeExampleLanguage } from '../types/knowledge'

export const SHIKI_THEME = 'synthwave-84'

const supportedLanguages = ['vue', 'ts', 'js', 'html', 'css', 'json', 'bash', 'php'] as const

type SupportedShikiLanguage = (typeof supportedLanguages)[number]
type SupportedShikiTheme = typeof SHIKI_THEME
type ShikiHighlighter = Awaited<ReturnType<ReturnType<typeof import('@shikijs/core').createBundledHighlighter<SupportedShikiLanguage, SupportedShikiTheme>>>>

let highlighterPromise: Promise<ShikiHighlighter> | undefined

const languageMap: Record<CodeExampleLanguage, SupportedShikiLanguage> = {
  vue: 'vue',
  ts: 'ts',
  js: 'js',
  html: 'html',
  css: 'css',
  json: 'json',
  bash: 'bash',
  php: 'php',
}

const getHighlighter = async (): Promise<ShikiHighlighter> => {
  if (!highlighterPromise) {
    highlighterPromise = Promise.all([
      import('@shikijs/core'),
      import('@shikijs/engine-javascript'),
    ])
      .then(([{ createBundledHighlighter }, { createJavaScriptRegexEngine }]) => {
        const createHighlighter = createBundledHighlighter<SupportedShikiLanguage, SupportedShikiTheme>({
          langs: {
            vue: () => import('@shikijs/langs/vue'),
            ts: () => import('@shikijs/langs/ts'),
            js: () => import('@shikijs/langs/js'),
            html: () => import('@shikijs/langs/html'),
            css: () => import('@shikijs/langs/css'),
            json: () => import('@shikijs/langs/json'),
            bash: () => import('@shikijs/langs/bash'),
            php: () => import('@shikijs/langs/php'),
          },
          themes: {
            [SHIKI_THEME]: () => import('@shikijs/themes/synthwave-84'),
          },
          engine: () => createJavaScriptRegexEngine(),
        })

        return createHighlighter({
          themes: [SHIKI_THEME],
          langs: [...supportedLanguages],
        })
      })
      .catch((error: unknown) => {
        highlighterPromise = undefined
        throw error
      })
  }

  return highlighterPromise
}

export const highlightCode = async (code: string, language: CodeExampleLanguage): Promise<string> => {
  const highlighter = await getHighlighter()

  return highlighter.codeToHtml(code, {
    lang: languageMap[language],
    theme: SHIKI_THEME,
  })
}
