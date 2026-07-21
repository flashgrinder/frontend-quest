import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const htmlAcademyAreasRoot = join('src', 'content', 'web-foundations', 'html-academy', 'areas')
const expected = {
  areas: 10,
  missions: 32,
  questions: 180,
  knowledgeCards: 80,
}

const collectFiles = (directory, predicate, files = []) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name)

    if (entry.isDirectory()) {
      collectFiles(fullPath, predicate, files)
      continue
    }

    if (entry.isFile() && predicate(entry.name)) {
      files.push(fullPath)
    }
  }

  return files
}

const readFiles = (name) =>
  collectFiles(htmlAcademyAreasRoot, (filename) => filename === name)
    .map((file) => readFileSync(file, 'utf8'))
    .join('\n')

const htmlAcademyContentFiles = [
  join('src', 'content', 'web-foundations', 'html-academy', 'metadata.ts'),
  ...collectFiles(htmlAcademyAreasRoot, (filename) => ['missions.ts', 'questions.ts', 'knowledge.ts'].includes(filename)),
]

const findEncodingDamage = () =>
  htmlAcademyContentFiles.flatMap((file) => {
    const text = readFileSync(file, 'utf8')
    const issues = []
    const questionRun = text.match(/\?{3,}/)
    const replacementSymbol = text.match(/\uFFFD/)

    if (questionRun?.index !== undefined) {
      issues.push({
        file,
        type: 'question-mark mojibake',
        fragment: text.slice(Math.max(0, questionRun.index - 30), questionRun.index + 60).replace(/\s+/g, ' '),
      })
    }

    if (replacementSymbol?.index !== undefined) {
      issues.push({
        file,
        type: 'replacement character',
        fragment: text.slice(Math.max(0, replacementSymbol.index - 30), replacementSymbol.index + 60).replace(/\s+/g, ' '),
      })
    }

    return issues
  })

const getMatches = (text, pattern) => [...text.matchAll(pattern)].map((match) => match[1])
const countBy = (items) =>
  items.reduce((accumulator, item) => {
    accumulator[item] = (accumulator[item] ?? 0) + 1

    return accumulator
  }, {})
const getDuplicates = (items) => [...new Set(items.filter((item, index) => items.indexOf(item) !== index))]

const missionText = readFiles('missions.ts')
const questionText = readFiles('questions.ts')
const knowledgeText = readFiles('knowledge.ts')

const areaCount = readdirSync(htmlAcademyAreasRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory()).length
const missionIds = getMatches(missionText, /"id":\s*"([^"]+)"/g)
const questionIds = getMatches(questionText, /"id":\s*(\d+)/g)
const knowledgeIds = getMatches(knowledgeText, /"id":\s*"([^"]+)"/g)
const questions = getMatches(questionText, /"question":\s*"([^"]+)"/g)
const correctAnswers = getMatches(questionText, /"correctAnswer":\s*"([a-d])"/g)
const difficulties = getMatches(questionText, /"difficulty":\s*"([^"]+)"/g)
const types = getMatches(questionText, /"type":\s*"([^"]+)"/g)

const report = {
  areas: areaCount,
  missions: missionIds.length,
  questions: questionIds.length,
  knowledgeCards: knowledgeIds.length,
  duplicateMissionIds: getDuplicates(missionIds).length,
  duplicateQuestionIds: getDuplicates(questionIds).length,
  duplicateKnowledgeIds: getDuplicates(knowledgeIds).length,
  duplicateQuestions: getDuplicates(questions).length,
  correctDistribution: countBy(correctAnswers),
  difficultyDistribution: countBy(difficulties),
  typeDistribution: countBy(types),
}

const problems = []
const encodingDamage = findEncodingDamage()

Object.entries(expected).forEach(([key, value]) => {
  if (report[key] !== value) {
    problems.push(`Expected ${key}=${value}, received ${report[key]}`)
  }
})

if (report.duplicateMissionIds > 0) problems.push(`Duplicate mission ids: ${report.duplicateMissionIds}`)
if (report.duplicateQuestionIds > 0) problems.push(`Duplicate question ids: ${report.duplicateQuestionIds}`)
if (report.duplicateKnowledgeIds > 0) problems.push(`Duplicate knowledge ids: ${report.duplicateKnowledgeIds}`)
if (report.duplicateQuestions > 0) problems.push(`Duplicate question texts: ${report.duplicateQuestions}`)
if (encodingDamage.length > 0) {
  problems.push(
    `Suspicious encoding damage found: ${encodingDamage
      .slice(0, 5)
      .map((issue) => `${issue.file} (${issue.type}: "${issue.fragment}")`)
      .join('; ')}`,
  )
}

const expectedCorrectAnswers = expected.questions / 4
const hasBalancedCorrectAnswers = ['a', 'b', 'c', 'd'].every(
  (answerId) => report.correctDistribution[answerId] === expectedCorrectAnswers,
)

if (!hasBalancedCorrectAnswers) {
  problems.push(`Correct answers are not balanced: ${JSON.stringify(report.correctDistribution)}`)
}

if (problems.length > 0) {
  console.error('Content check failed.')
  problems.forEach((problem) => console.error(`- ${problem}`))
  console.error(JSON.stringify(report, null, 2))
  process.exit(1)
}

console.log('Content check passed.')
console.log(JSON.stringify(report, null, 2))
