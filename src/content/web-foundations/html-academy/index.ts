import { documentGateKnowledgeCards } from './areas/document-gate/knowledge'
import { documentGateMissions } from './areas/document-gate/missions'
import { documentGateQuestions } from './areas/document-gate/questions'
import { semanticArchivesKnowledgeCards } from './areas/semantic-archives/knowledge'
import { semanticArchivesMissions } from './areas/semantic-archives/missions'
import { semanticArchivesQuestions } from './areas/semantic-archives/questions'
import { textHallKnowledgeCards } from './areas/text-hall/knowledge'
import { textHallMissions } from './areas/text-hall/missions'
import { textHallQuestions } from './areas/text-hall/questions'
import { mediaGalleryKnowledgeCards } from './areas/media-gallery/knowledge'
import { mediaGalleryMissions } from './areas/media-gallery/missions'
import { mediaGalleryQuestions } from './areas/media-gallery/questions'
import { navigationTempleKnowledgeCards } from './areas/navigation-temple/knowledge'
import { navigationTempleMissions } from './areas/navigation-temple/missions'
import { navigationTempleQuestions } from './areas/navigation-temple/questions'
import { tableChamberKnowledgeCards } from './areas/table-chamber/knowledge'
import { tableChamberMissions } from './areas/table-chamber/missions'
import { tableChamberQuestions } from './areas/table-chamber/questions'
import { formSanctuaryKnowledgeCards } from './areas/form-sanctuary/knowledge'
import { formSanctuaryMissions } from './areas/form-sanctuary/missions'
import { formSanctuaryQuestions } from './areas/form-sanctuary/questions'
import { accessibilityLibraryKnowledgeCards } from './areas/accessibility-library/knowledge'
import { accessibilityLibraryMissions } from './areas/accessibility-library/missions'
import { accessibilityLibraryQuestions } from './areas/accessibility-library/questions'
import { metadataObservatoryKnowledgeCards } from './areas/metadata-observatory/knowledge'
import { metadataObservatoryMissions } from './areas/metadata-observatory/missions'
import { metadataObservatoryQuestions } from './areas/metadata-observatory/questions'
import { finalHtmlTrialKnowledgeCards } from './areas/final-html-trial/knowledge'
import { finalHtmlTrialMissions } from './areas/final-html-trial/missions'
import { finalHtmlTrialQuestions } from './areas/final-html-trial/questions'
export { htmlAcademyMetadata } from './metadata'

export const htmlAcademyMissions = [
  ...documentGateMissions,
  ...semanticArchivesMissions,
  ...textHallMissions,
  ...mediaGalleryMissions,
  ...navigationTempleMissions,
  ...tableChamberMissions,
  ...formSanctuaryMissions,
  ...accessibilityLibraryMissions,
  ...metadataObservatoryMissions,
  ...finalHtmlTrialMissions,
]

export const htmlAcademyQuestions = [
  ...documentGateQuestions,
  ...semanticArchivesQuestions,
  ...textHallQuestions,
  ...mediaGalleryQuestions,
  ...navigationTempleQuestions,
  ...tableChamberQuestions,
  ...formSanctuaryQuestions,
  ...accessibilityLibraryQuestions,
  ...metadataObservatoryQuestions,
  ...finalHtmlTrialQuestions,
]

export const htmlAcademyKnowledgeCards = [
  ...documentGateKnowledgeCards,
  ...semanticArchivesKnowledgeCards,
  ...textHallKnowledgeCards,
  ...mediaGalleryKnowledgeCards,
  ...navigationTempleKnowledgeCards,
  ...tableChamberKnowledgeCards,
  ...formSanctuaryKnowledgeCards,
  ...accessibilityLibraryKnowledgeCards,
  ...metadataObservatoryKnowledgeCards,
  ...finalHtmlTrialKnowledgeCards,
]
