import { readdirSync, readFileSync } from 'node:fs'
import { extname, join, relative } from 'node:path'

const rootDir = process.cwd()
const ignoredDirectories = new Set(['.git', 'dist', 'node_modules'])
const textExtensions = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.md',
  '.mjs',
  '.scss',
  '.ts',
  '.txt',
  '.vue',
])
const textFilenames = new Set(['.editorconfig'])
const utf8Decoder = new TextDecoder('utf-8', { fatal: true })

const mojibakePatterns = [
  '\uFFFD',
  '\u00D0',
  '\u00D1',
  '\u00C2',
  '\u00E2',
  '\u0420\u00B0',
  '\u0420\u00B1',
  '\u0420\u00B2',
  '\u0420\u00B3',
  '\u0420\u00B4',
  '\u0420\u00B5',
  '\u0420\u00B6',
  '\u0420\u00B7',
  '\u0420\u00B8',
  '\u0420\u00B9',
  '\u0420\u00BA',
  '\u0420\u00BB',
  '\u0420\u00BC',
  '\u0420\u00BD',
  '\u0420\u00BE',
  '\u0420\u00BF',
  '\u0420\u0401',
  '\u0420\u0404',
  '\u0420\u0405',
  '\u0420\u0406',
  '\u0420\u0407',
  '\u0420\u0408',
  '\u0420\u0409',
  '\u0420\u040A',
  '\u0420\u040B',
  '\u0420\u040C',
  '\u0420\u040E',
  '\u0420\u040F',
  '\u0420\u0451',
  '\u0420\u0452',
  '\u0420\u0453',
  '\u0420\u0454',
  '\u0420\u0455',
  '\u0420\u0456',
  '\u0420\u0457',
  '\u0420\u0458',
  '\u0420\u0459',
  '\u0420\u045A',
  '\u0420\u045B',
  '\u0420\u045C',
  '\u0420\u045E',
  '\u0420\u045F',
  '\u0421\u201A',
  '\u0421\u201C',
  '\u0421\u2026',
  '\u0421\u2020',
  '\u0421\u2021',
  '\u0421\u02C6',
  '\u0421\u2030',
  '\u0421\u040A',
  '\u0421\u040C',
  '\u0421\u040B',
  '\u0421\u040F',
  '\u0421\u0452',
  '\u0421\u0453',
  '\u0421\u0454',
  '\u0421\u0455',
  '\u0421\u0456',
  '\u0421\u0457',
  '\u0421\u0458',
  '\u0421\u0459',
  '\u0421\u045A',
  '\u0421\u045B',
  '\u0421\u045C',
  '\u0421\u045E',
  '\u0421\u045F',
  '\u0432\u0402',
  '\u0432\u040A',
  '\u0432\u040E',
  '\u0432\u20AC',
  '\u0432\u201E',
  '\u0432\u20AC\u2122',
  '\u0432\u20AC\u0153',
  '\u0432\u20AC\u009D',
  '\u0432\u20AC\u201C',
  '\u0432\u20AC\u201D',
]

const problems = []

const isTextFile = (filename) => textFilenames.has(filename) || textExtensions.has(extname(filename).toLowerCase())

const formatPath = (path) => relative(rootDir, path).replaceAll('\\', '/')

const createSnippet = (line, index) => {
  const start = Math.max(0, index - 36)
  const end = Math.min(line.length, index + 96)

  return line.slice(start, end)
}

const checkFile = (filePath) => {
  const buffer = readFileSync(filePath)
  const file = formatPath(filePath)

  if (buffer.length >= 3 && buffer[0] === 0xef && buffer[1] === 0xbb && buffer[2] === 0xbf) {
    problems.push({ file, reason: 'UTF-8 BOM', line: 1, snippet: 'File starts with BOM' })
  }

  let text = ''

  try {
    text = utf8Decoder.decode(buffer)
  } catch {
    problems.push({ file, reason: 'Invalid UTF-8', line: 1, snippet: 'File cannot be decoded as UTF-8' })
    return
  }

  const lines = text.split(/\r?\n/)

  lines.forEach((line, lineIndex) => {
    for (const pattern of mojibakePatterns) {
      const patternIndex = line.indexOf(pattern)

      if (patternIndex !== -1) {
        problems.push({
          file,
          reason: pattern === '\uFFFD' ? 'Replacement character' : 'Possible mojibake',
          line: lineIndex + 1,
          snippet: createSnippet(line, patternIndex),
        })
        break
      }
    }
  })
}

const walk = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        walk(join(directory, entry.name))
      }

      continue
    }

    if (entry.isFile() && isTextFile(entry.name)) {
      checkFile(join(directory, entry.name))
    }
  }
}

walk(rootDir)

if (problems.length > 0) {
  console.error(`Encoding check failed: ${problems.length} problem(s) found.`)

  for (const problem of problems) {
    console.error(`- ${problem.file}:${problem.line} ${problem.reason}`)
    console.error(`  ${problem.snippet}`)
  }

  process.exit(1)
}

console.log('Encoding check passed: all scanned text files are valid UTF-8 without BOM or mojibake markers.')
