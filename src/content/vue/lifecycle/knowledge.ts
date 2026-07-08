import type { ContentKnowledgeCard } from '../../../types/content'

const createInterviewQuestions = (title: string, category: string): string[] => [
  `РљР°РєРёРµ Р·Р°РґР°С‡Рё СЂРµС€Р°РµС‚ ${title} РІ С‚РµРјРµ ${category} (Lifecycle hooks)?`,
  `РљР°РєРёРµ РѕРіСЂР°РЅРёС‡РµРЅРёСЏ ${title} РІР°Р¶РЅРѕ СѓС‡РёС‚С‹РІР°С‚СЊ РІ РєРѕРЅС‚РµРєСЃС‚Рµ Lifecycle hooks?`,
  `Р§РµРј ${title} РѕС‚Р»РёС‡Р°РµС‚СЃСЏ РѕС‚ РїРѕС…РѕР¶РёС… РІРѕР·РјРѕР¶РЅРѕСЃС‚РµР№ Рё РєРѕРіРґР° РІС‹Р±СЂР°С‚СЊ Р°Р»СЊС‚РµСЂРЅР°С‚РёРІСѓ?`,
  `РљР°РєСѓСЋ production-РѕС€РёР±РєСѓ РјРѕР¶РЅРѕ РїРѕР»СѓС‡РёС‚СЊ РїСЂРё РЅРµРІРµСЂРЅРѕРј РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРё ${title}?`,
]

export const lifecycleKnowledgeCards: ContentKnowledgeCard[] = [
  {
    id: 'knowledge-lifecycle-q601',
    moduleId: 'lifecycle',
    questionId: 601,
    title: 'Р–РёР·РЅРµРЅРЅС‹Р№ С†РёРєР» РєРѕРјРїРѕРЅРµРЅС‚Р°',
    category: 'Lifecycle',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'Р–РёР·РЅРµРЅРЅС‹Р№ С†РёРєР» РєРѕРјРїРѕРЅРµРЅС‚Р° вЂ” РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚СЊ СЌС‚Р°РїРѕРІ, С‡РµСЂРµР· РєРѕС‚РѕСЂС‹Рµ РїСЂРѕС…РѕРґРёС‚ СЌРєР·РµРјРїР»СЏСЂ Vue-РєРѕРјРїРѕРЅРµРЅС‚Р°. РљРѕРјРїРѕРЅРµРЅС‚ СЃРѕР·РґР°С‘С‚СЃСЏ, РјРѕРЅС‚РёСЂСѓРµС‚СЃСЏ РІ DOM, РѕР±РЅРѕРІР»СЏРµС‚СЃСЏ РїСЂРё РёР·РјРµРЅРµРЅРёРё СЂРµР°РєС‚РёРІРЅС‹С… РґР°РЅРЅС‹С… Рё СѓРґР°Р»СЏРµС‚СЃСЏ. Р”Р»СЏ РѕС‚РґРµР»СЊРЅС‹С… СЃС†РµРЅР°СЂРёРµРІ РµСЃС‚СЊ hooks, РєРѕС‚РѕСЂС‹Рµ РїРѕР·РІРѕР»СЏСЋС‚ РІС‹РїРѕР»РЅРёС‚СЊ РєРѕРґ РІ РЅСѓР¶РЅС‹Р№ РјРѕРјРµРЅС‚.',
    whenToUse:
      'Lifecycle hooks РЅСѓР¶РЅС‹ РґР»СЏ side effects: СЂР°Р±РѕС‚С‹ СЃ DOM, РїРѕРґРїРёСЃРѕРє, timers, РёРЅС‚РµРіСЂР°С†РёРё СЃ РІРЅРµС€РЅРёРјРё Р±РёР±Р»РёРѕС‚РµРєР°РјРё Рё cleanup. РћРЅРё РЅРµ РґРѕР»Р¶РЅС‹ Р·Р°РјРµРЅСЏС‚СЊ computed РґР»СЏ РїСЂРѕРёР·РІРѕРґРЅС‹С… Р·РЅР°С‡РµРЅРёР№ РёР»Рё РѕР±С‹С‡РЅС‹Рµ С„СѓРЅРєС†РёРё РґР»СЏ РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёС… РґРµР№СЃС‚РІРёР№. Р§РµРј РјРµРЅСЊС€Рµ СЃР»СѓС‡Р°Р№РЅРѕР№ Р»РѕРіРёРєРё РІ hooks, С‚РµРј РїСЂРѕС‰Рµ РєРѕРјРїРѕРЅРµРЅС‚.',
    howItWorks:
      'Р’ Composition API hooks СЂРµРіРёСЃС‚СЂРёСЂСѓСЋС‚СЃСЏ С„СѓРЅРєС†РёСЏРјРё РІСЂРѕРґРµ onMounted Рё onUnmounted РІРЅСѓС‚СЂРё setup-РєРѕРЅС‚РµРєСЃС‚Р°. Vue РІС‹Р·РѕРІРµС‚ Р·Р°СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°РЅРЅС‹Рµ callbacks РЅР° СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰РµРј СЌС‚Р°РїРµ. Hooks РґРѕР»Р¶РЅС‹ Р±С‹С‚СЊ СЃРёРЅС…СЂРѕРЅРЅРѕ Р·Р°СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°РЅС‹ РІРѕ РІСЂРµРјСЏ setup.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ lifecycle РїСЂРѕРІРµСЂСЏРµС‚ РїРѕРЅРёРјР°РЅРёРµ РјРѕРјРµРЅС‚Р° РґРѕСЃС‚СѓРїРЅРѕСЃС‚Рё DOM, РїРѕСЂСЏРґРєР° РѕР±РЅРѕРІР»РµРЅРёР№ Рё РѕС‡РёСЃС‚РєРё СЂРµСЃСѓСЂСЃРѕРІ. Р­С‚Рѕ РїСЂР°РєС‚РёС‡РµСЃРєР°СЏ С‚РµРјР°: РѕС€РёР±РєРё Р·РґРµСЃСЊ С‡Р°СЃС‚Рѕ РїСЂРёРІРѕРґСЏС‚ Рє СѓС‚РµС‡РєР°Рј РїР°РјСЏС‚Рё, race conditions Рё РЅРµСЃС‚Р°Р±РёР»СЊРЅРѕРјСѓ UI.',
    codeExample: {
      language: 'vue',
      filename: 'LifecycleSample.vue',
      code: `<script setup lang="ts">
onMounted(() => {
  lifecycleState.value = 'mounted'
})

onUnmounted(() => {
  lifecycleState.value = 'removed'
})
</script>`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” СЃРєР»Р°РґС‹РІР°С‚СЊ РІСЃСЋ Р»РѕРіРёРєСѓ РєРѕРјРїРѕРЅРµРЅС‚Р° РІ lifecycle hooks. Hooks РґРѕР»Р¶РЅС‹ РѕР±СЃР»СѓР¶РёРІР°С‚СЊ РєРѕРЅРєСЂРµС‚РЅС‹Рµ СЌС‚Р°РїС‹ Р¶РёР·РЅРё, Р° Р±РёР·РЅРµСЃ-Р»РѕРіРёРєСѓ Р»СѓС‡С€Рµ РґРµСЂР¶Р°С‚СЊ РІ С„СѓРЅРєС†РёСЏС…, composables РёР»Рё stores.',
    interviewQuestions: createInterviewQuestions("Р–РёР·РЅРµРЅРЅС‹Р№ С†РёРєР» РєРѕРјРїРѕРЅРµРЅС‚Р°", "Lifecycle"),
    remember:
      'Lifecycle hooks РЅСѓР¶РЅС‹ РґР»СЏ РєРѕРґР°, РїСЂРёРІСЏР·Р°РЅРЅРѕРіРѕ Рє СЌС‚Р°РїР°Рј Р¶РёР·РЅРё РєРѕРјРїРѕРЅРµРЅС‚Р°.',
  },
  {
    id: 'knowledge-lifecycle-q602',
    moduleId: 'lifecycle',
    questionId: 602,
    title: 'setup Рё СЂР°РЅРЅРёР№ СЌС‚Р°Рї РєРѕРјРїРѕРЅРµРЅС‚Р°',
    category: 'Setup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'setup вЂ” С‚РѕС‡РєР° РІС…РѕРґР° Composition API. РћРЅР° РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ РґРѕ РјРѕРЅС‚РёСЂРѕРІР°РЅРёСЏ РєРѕРјРїРѕРЅРµРЅС‚Р° Рё РїРѕРґРіРѕС‚Р°РІР»РёРІР°РµС‚ СЂРµР°РєС‚РёРІРЅРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ, computed, watchers, С„СѓРЅРєС†РёРё Рё lifecycle hooks. Р’ script setup СЌС‚РѕС‚ СЌС‚Р°Рї РїСЂРµРґСЃС‚Р°РІР»РµРЅ РєРѕРґРѕРј РІРµСЂС…РЅРµРіРѕ СѓСЂРѕРІРЅСЏ.',
    whenToUse:
      'setup РёСЃРїРѕР»СЊР·СѓСЋС‚ РґР»СЏ РѕР±СЉСЏРІР»РµРЅРёСЏ СЃРѕСЃС‚РѕСЏРЅРёСЏ Рё Р·Р°РІРёСЃРёРјРѕСЃС‚РµР№ РєРѕРјРїРѕРЅРµРЅС‚Р°. РўР°Рј СѓРґРѕР±РЅРѕ РІС‹Р·С‹РІР°С‚СЊ composables Рё СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°С‚СЊ hooks. Р”Р»СЏ РїСЂСЏРјРѕР№ СЂР°Р±РѕС‚С‹ СЃ DOM setup СЃР»РёС€РєРѕРј СЂР°РЅРЅРёР№: template refs РµС‰С‘ РЅРµ Р·Р°РїРѕР»РЅРµРЅС‹.',
    howItWorks:
      'Vue СЃРѕР·РґР°С‘С‚ СЌРєР·РµРјРїР»СЏСЂ РєРѕРјРїРѕРЅРµРЅС‚Р° Рё РІС‹РїРѕР»РЅСЏРµС‚ setup. Р—РЅР°С‡РµРЅРёСЏ, РѕР±СЉСЏРІР»РµРЅРЅС‹Рµ РІ script setup, РґРѕСЃС‚СѓРїРЅС‹ template. Р’ РѕР±С‹С‡РЅРѕРј setup Р·РЅР°С‡РµРЅРёСЏ РЅСѓР¶РЅРѕ РІРµСЂРЅСѓС‚СЊ, С‡С‚РѕР±С‹ template РјРѕРі РёС… РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ.',
    whyImportant:
      'РџРѕРЅРёРјР°РЅРёРµ setup РїРѕРјРѕРіР°РµС‚ РЅРµ РїСѓС‚Р°С‚СЊ РµРіРѕ СЃ mounted. РќР° РёРЅС‚РµСЂРІСЊСЋ С‡Р°СЃС‚Рѕ СЃРїСЂР°С€РёРІР°СЋС‚, РїРѕС‡РµРјСѓ DOM РЅРµРґРѕСЃС‚СѓРїРµРЅ РІ setup Рё РїРѕС‡РµРјСѓ lifecycle hooks СЂРµРіРёСЃС‚СЂРёСЂСѓСЋС‚СЃСЏ РёРјРµРЅРЅРѕ С‚Р°Рј.',
    codeExample: {
      language: 'vue',
      filename: 'CounterPanel.vue',
      code: `<script setup lang="ts">
const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РїС‹С‚Р°С‚СЊСЃСЏ РІС‹Р·РІР°С‚СЊ focus РёР»Рё РёР·РјРµСЂРёС‚СЊ DOM РїСЂСЏРјРѕ РІ setup. Р”Р»СЏ СЌС‚РѕРіРѕ РЅСѓР¶РµРЅ onMounted РёР»Рё nextTick РїРѕСЃР»Рµ РѕР±РЅРѕРІР»РµРЅРёСЏ.',
    interviewQuestions: createInterviewQuestions("setup Рё СЂР°РЅРЅРёР№ СЌС‚Р°Рї РєРѕРјРїРѕРЅРµРЅС‚Р°", "Setup"),
    remember:
      'setup РіРѕС‚РѕРІРёС‚ Р»РѕРіРёРєСѓ РєРѕРјРїРѕРЅРµРЅС‚Р°, РЅРѕ DOM РЅР° СЌС‚РѕРј СЌС‚Р°РїРµ РµС‰С‘ РЅРµ РґРѕСЃС‚СѓРїРµРЅ.',
  },
  {
    id: 'knowledge-lifecycle-q603',
    moduleId: 'lifecycle',
    questionId: 603,
    title: 'onBeforeMount',
    category: 'Mounting',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 РјРёРЅ',
    whatIsIt:
      'onBeforeMount РІС‹Р·С‹РІР°РµС‚СЃСЏ РїРµСЂРµРґ РїРµСЂРІС‹Рј РјРѕРЅС‚РёСЂРѕРІР°РЅРёРµРј РєРѕРјРїРѕРЅРµРЅС‚Р° РІ DOM. Render СѓР¶Рµ РїРѕРґРіРѕС‚РѕРІР»РµРЅ, РЅРѕ СЂРµР°Р»СЊРЅС‹Рµ DOM-СЌР»РµРјРµРЅС‚С‹ РµС‰С‘ РЅРµ РІСЃС‚Р°РІР»РµРЅС‹. РџРѕСЌС‚РѕРјСѓ hook СЂРµРґРєРѕ РЅСѓР¶РµРЅ РІ РѕР±С‹С‡РЅРѕРј РєРѕРґРµ.',
    whenToUse:
      'onBeforeMount РјРѕР¶РЅРѕ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РґР»СЏ СЂРµРґРєРёС… РїРѕРґРіРѕС‚РѕРІРёС‚РµР»СЊРЅС‹С… side effects РїРµСЂРµРґ РІСЃС‚Р°РІРєРѕР№ DOM. Р”Р»СЏ С‡С‚РµРЅРёСЏ DOM РёР»Рё template refs РѕРЅ РЅРµ РїРѕРґС…РѕРґРёС‚. Р’ Р±РѕР»СЊС€РёРЅСЃС‚РІРµ СЃР»СѓС‡Р°РµРІ setup РёР»Рё onMounted РІС‹СЂР°Р¶Р°СЋС‚ РЅР°РјРµСЂРµРЅРёРµ СЏСЃРЅРµРµ.',
    howItWorks:
      'Callback СЂРµРіРёСЃС‚СЂРёСЂСѓРµС‚СЃСЏ РІРЅСѓС‚СЂРё setup. Vue РІС‹Р·С‹РІР°РµС‚ РµРіРѕ РїРµСЂРµРґ mount-С„Р°Р·РѕР№. РџРѕСЃР»Рµ СЌС‚РѕРіРѕ РїСЂРѕРёСЃС…РѕРґРёС‚ РІСЃС‚Р°РІРєР° DOM Рё Р·Р°С‚РµРј РІС‹Р·С‹РІР°РµС‚СЃСЏ onMounted.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ РІР°Р¶РЅРѕ Р·РЅР°С‚СЊ, С‡С‚Рѕ before mount РЅРµ РѕР·РЅР°С‡Р°РµС‚ РґРѕСЃС‚СѓРїРЅРѕСЃС‚СЊ DOM. Р­С‚Рѕ РїРѕРјРѕРіР°РµС‚ РїСЂР°РІРёР»СЊРЅРѕ РІС‹Р±СЂР°С‚СЊ hook РґР»СЏ РёРЅС‚РµРіСЂР°С†РёР№ Рё РёР·РјРµСЂРµРЅРёР№.',
    codeExample: {
      language: 'ts',
      filename: 'before-mount.ts',
      code: `onBeforeMount(() => {
  mountStatus.value = 'pending'
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” С‡РёС‚Р°С‚СЊ template ref РІ onBeforeMount. Р—РЅР°С‡РµРЅРёРµ ref РµС‰С‘ Р±СѓРґРµС‚ null РёР»Рё РЅР°С‡Р°Р»СЊРЅС‹Рј Р·РЅР°С‡РµРЅРёРµРј.',
    interviewQuestions: createInterviewQuestions("onBeforeMount", "Mounting"),
    remember:
      'onBeforeMount РІС‹Р·С‹РІР°РµС‚СЃСЏ РґРѕ РїРѕСЏРІР»РµРЅРёСЏ DOM-СЌР»РµРјРµРЅС‚РѕРІ РєРѕРјРїРѕРЅРµРЅС‚Р°.',
  },
  {
    id: 'knowledge-lifecycle-q604',
    moduleId: 'lifecycle',
    questionId: 604,
    title: 'onMounted',
    category: 'Mounting',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'onMounted РІС‹Р·С‹РІР°РµС‚СЃСЏ РїРѕСЃР»Рµ С‚РѕРіРѕ, РєР°Рє РєРѕРјРїРѕРЅРµРЅС‚ РІСЃС‚Р°РІР»РµРЅ РІ DOM. РќР° СЌС‚РѕРј СЌС‚Р°РїРµ РґРѕСЃС‚СѓРїРЅС‹ template refs, DOM-РёР·РјРµСЂРµРЅРёСЏ Рё client-only РёРЅС‚РµРіСЂР°С†РёРё. Р­С‚Рѕ РѕРґРёРЅ РёР· СЃР°РјС‹С… С‡Р°СЃС‚Рѕ РёСЃРїРѕР»СЊР·СѓРµРјС‹С… lifecycle hooks.',
    whenToUse:
      'onMounted РїРѕРґС…РѕРґРёС‚ РґР»СЏ focus, РёР·РјРµСЂРµРЅРёСЏ СЂР°Р·РјРµСЂРѕРІ, РїРѕРґРєР»СЋС‡РµРЅРёСЏ DOM-Р±РёР±Р»РёРѕС‚РµРє, СЃС‚Р°СЂС‚РѕРІРѕР№ client-only Р»РѕРіРёРєРё Рё РІРЅРµС€РЅРёС… listeners. Р”Р»СЏ С‡РёСЃС‚С‹С… РІС‹С‡РёСЃР»РµРЅРёР№ Р»СѓС‡С€Рµ computed. Р”Р»СЏ Р·Р°РіСЂСѓР·РєРё РґР°РЅРЅС‹С… РЅСѓР¶РЅРѕ СѓС‡РёС‚С‹РІР°С‚СЊ loading, errors Рё SSR.',
    howItWorks:
      'Vue Р·Р°РІРµСЂС€Р°РµС‚ РїРµСЂРІС‹Р№ render Рё mount, Р·Р°С‚РµРј РІС‹Р·С‹РІР°РµС‚ callback onMounted. Р•СЃР»Рё РІРЅСѓС‚СЂРё РјРµРЅСЏРµС‚СЃСЏ state, СЌС‚Рѕ РїСЂРёРІРµРґС‘С‚ Рє РЅРѕРІРѕРјСѓ РѕР±РЅРѕРІР»РµРЅРёСЋ. Р”Р»СЏ DOM РїРѕСЃР»Рµ СЃР»РµРґСѓСЋС‰РµРіРѕ РёР·РјРµРЅРµРЅРёСЏ state РјРѕР¶РµС‚ РїРѕРЅР°РґРѕР±РёС‚СЊСЃСЏ nextTick.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ onMounted СЃРІСЏР·С‹РІР°СЋС‚ СЃ РґРѕСЃС‚СѓРїРЅРѕСЃС‚СЊСЋ DOM. РҐРѕСЂРѕС€РёР№ РѕС‚РІРµС‚ РґРѕР»Р¶РµРЅ СѓРїРѕРјРёРЅР°С‚СЊ, С‡С‚Рѕ hook РЅРµ РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ РЅР° СЃРµСЂРІРµСЂРµ РІ SSR-СЃС†РµРЅР°СЂРёРё.',
    codeExample: {
      language: 'vue',
      filename: 'AutoFocusInput.vue',
      code: `<script setup lang="ts">
const inputEl = ref<HTMLInputElement | null>(null)

onMounted(() => {
  inputEl.value?.focus()
})
</script>

<template><input ref="inputEl" /></template>`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РїРѕРјРµС‰Р°С‚СЊ РІ onMounted Р»СЋР±СѓСЋ РёРЅРёС†РёР°Р»РёР·Р°С†РёСЋ Р±РµР· РїСЂРёС‡РёРЅС‹. Р•СЃР»Рё РєРѕРґ РЅРµ Р·Р°РІРёСЃРёС‚ РѕС‚ DOM РёР»Рё client-only API, РµРіРѕ РјРѕР¶РЅРѕ РІС‹РїРѕР»РЅРёС‚СЊ РІ setup РёР»Рё composable.',
    interviewQuestions: createInterviewQuestions("onMounted", "Mounting"),
    remember:
      'onMounted вЂ” Р±РµР·РѕРїР°СЃРЅС‹Р№ РјРѕРјРµРЅС‚ РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ DOM РїРѕСЃР»Рµ РїРµСЂРІРѕРіРѕ mount.',
  },
  {
    id: 'knowledge-lifecycle-q605',
    moduleId: 'lifecycle',
    questionId: 605,
    title: 'onBeforeUpdate',
    category: 'Updates',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'onBeforeUpdate РІС‹Р·С‹РІР°РµС‚СЃСЏ РїРµСЂРµРґ РѕР±РЅРѕРІР»РµРЅРёРµРј DOM, РєРѕРіРґР° reactive state СѓР¶Рµ РёР·РјРµРЅРёР»СЃСЏ. РЎС‚Р°СЂС‹Р№ DOM РµС‰С‘ РЅР°С…РѕРґРёС‚СЃСЏ РЅР° СЃС‚СЂР°РЅРёС†Рµ. Hook РЅСѓР¶РµРЅ СЂРµРґРєРѕ, РЅРѕ РїРѕР»РµР·РµРЅ РґР»СЏ С‡С‚РµРЅРёСЏ СЃРѕСЃС‚РѕСЏРЅРёСЏ DOM РїРµСЂРµРґ patch.',
    whenToUse:
      'onBeforeUpdate РёСЃРїРѕР»СЊР·СѓСЋС‚, РµСЃР»Рё РЅСѓР¶РЅРѕ СЃРѕС…СЂР°РЅРёС‚СЊ scroll position, РёР·РјРµСЂРёС‚СЊ СЃС‚Р°СЂС‹Р№ DOM РёР»Рё РїРѕРґРіРѕС‚РѕРІРёС‚СЊСЃСЏ Рє РёР·РјРµРЅРµРЅРёСЋ. Р”Р»СЏ РІС‹С‡РёСЃР»РµРЅРёР№ РЅР° РѕСЃРЅРѕРІРµ state Р»СѓС‡С€Рµ computed. Р”Р»СЏ СЂРµР°РєС†РёРё РЅР° РєРѕРЅРєСЂРµС‚РЅС‹Р№ РёСЃС‚РѕС‡РЅРёРє С‡Р°С‰Рµ РїРѕРЅСЏС‚РЅРµРµ watch.',
    howItWorks:
      'РџРѕСЃР»Рµ РёР·РјРµРЅРµРЅРёСЏ СЂРµР°РєС‚РёРІРЅС‹С… Р·Р°РІРёСЃРёРјРѕСЃС‚РµР№ Vue РїР»Р°РЅРёСЂСѓРµС‚ DOM update. РџРµСЂРµРґ patch РѕРЅ РІС‹Р·С‹РІР°РµС‚ onBeforeUpdate. Р—Р°С‚РµРј DOM РѕР±РЅРѕРІР»СЏРµС‚СЃСЏ, РїРѕСЃР»Рµ С‡РµРіРѕ РґРѕСЃС‚СѓРїРµРЅ onUpdated.',
    whyImportant:
      'Р­С‚РѕС‚ hook РїРѕРјРѕРіР°РµС‚ РїРѕРЅСЏС‚СЊ update cycle. РќР° РёРЅС‚РµСЂРІСЊСЋ РІР°Р¶РЅРѕ СЂР°Р·Р»РёС‡Р°С‚СЊ СЃРѕСЃС‚РѕСЏРЅРёРµ РґР°РЅРЅС‹С… Рё СЃРѕСЃС‚РѕСЏРЅРёРµ DOM: РґР°РЅРЅС‹Рµ СѓР¶Рµ РЅРѕРІС‹Рµ, DOM РµС‰С‘ СЃС‚Р°СЂС‹Р№.',
    codeExample: {
      language: 'ts',
      filename: 'before-update.ts',
      code: `onBeforeUpdate(() => {
  previousHeight.value = panelEl.value?.offsetHeight ?? 0
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РїС‹С‚Р°С‚СЊСЃСЏ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ onBeforeUpdate РєР°Рє СѓРЅРёРІРµСЂСЃР°Р»СЊРЅС‹Р№ watcher. Р•СЃР»Рё РЅСѓР¶РЅРѕ СЃР»РµРґРёС‚СЊ Р·Р° РєРѕРЅРєСЂРµС‚РЅС‹Рј Р·РЅР°С‡РµРЅРёРµРј, watch Р±СѓРґРµС‚ С‚РѕС‡РЅРµРµ.',
    interviewQuestions: createInterviewQuestions("onBeforeUpdate", "Updates"),
    remember:
      'onBeforeUpdate РІРёРґРёС‚ РјРѕРјРµРЅС‚ РїРµСЂРµРґ patch DOM.',
  },
  {
    id: 'knowledge-lifecycle-q606',
    moduleId: 'lifecycle',
    questionId: 606,
    title: 'onUpdated',
    category: 'Updates',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'onUpdated РІС‹Р·С‹РІР°РµС‚СЃСЏ РїРѕСЃР»Рµ РѕР±РЅРѕРІР»РµРЅРёСЏ DOM РєРѕРјРїРѕРЅРµРЅС‚Р°. РћРЅ РїРѕРґС…РѕРґРёС‚ РґР»СЏ С‡С‚РµРЅРёСЏ СѓР¶Рµ РѕР±РЅРѕРІР»С‘РЅРЅРѕРіРѕ DOM. РџСЂРё СЌС‚РѕРј hook РјРѕР¶РµС‚ РІС‹Р·С‹РІР°С‚СЊСЃСЏ С‡Р°СЃС‚Рѕ, РµСЃР»Рё РєРѕРјРїРѕРЅРµРЅС‚ С‡Р°СЃС‚Рѕ РѕР±РЅРѕРІР»СЏРµС‚СЃСЏ.',
    whenToUse:
      'onUpdated РїСЂРёРјРµРЅСЏСЋС‚ РґР»СЏ СЂРµРґРєРёС… DOM-СЃРёРЅС…СЂРѕРЅРёР·Р°С†РёР№ РїРѕСЃР»Рµ render. Р•СЃР»Рё РЅСѓР¶РЅРѕ РІС‹РїРѕР»РЅРёС‚СЊ СЌС„С„РµРєС‚ РїСЂРё РёР·РјРµРЅРµРЅРёРё РєРѕРЅРєСЂРµС‚РЅРѕРіРѕ Р·РЅР°С‡РµРЅРёСЏ, РѕР±С‹С‡РЅРѕ Р»СѓС‡С€Рµ watch. Р”Р»СЏ С‡С‚РµРЅРёСЏ DOM РїРѕСЃР»Рµ РѕРґРЅРѕРіРѕ РёР·РјРµРЅРµРЅРёСЏ state С‡Р°СЃС‚Рѕ РґРѕСЃС‚Р°С‚РѕС‡РЅРѕ await nextTick.',
    howItWorks:
      'Vue РїСЂРёРјРµРЅСЏРµС‚ patch Рє DOM Рё Р·Р°С‚РµРј РІС‹Р·С‹РІР°РµС‚ onUpdated. Р•СЃР»Рё РІРЅСѓС‚СЂРё hook РёР·РјРµРЅРёС‚СЊ reactive state Р±РµР· СѓСЃР»РѕРІРёСЏ, СЌС‚Рѕ Р·Р°РїСѓСЃС‚РёС‚ РЅРѕРІРѕРµ РѕР±РЅРѕРІР»РµРЅРёРµ. РџРѕСЌС‚РѕРјСѓ Р»СЋР±С‹Рµ РёР·РјРµРЅРµРЅРёСЏ state РґРѕР»Р¶РЅС‹ Р±С‹С‚СЊ СЃС‚СЂРѕРіРѕ РєРѕРЅС‚СЂРѕР»РёСЂСѓРµРјС‹РјРё.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ С‡Р°СЃС‚Рѕ РїСЂРѕРІРµСЂСЏСЋС‚ Р·РЅР°РЅРёРµ С†РёРєР»РѕРІ РѕР±РЅРѕРІР»РµРЅРёСЏ. Р“Р»Р°РІРЅР°СЏ РјС‹СЃР»СЊ: onUpdated РЅРµ РґРѕР»Р¶РµРЅ СЃС‚Р°РЅРѕРІРёС‚СЊСЃСЏ РјРµСЃС‚РѕРј РґР»СЏ Р±РµСЃРєРѕРЅС‚СЂРѕР»СЊРЅРѕР№ РјСѓС‚Р°С†РёРё state.',
    codeExample: {
      language: 'ts',
      filename: 'updated.ts',
      code: `onUpdated(() => {
  updateStatus.value = 'updated'
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РјРµРЅСЏС‚СЊ state РІРЅСѓС‚СЂРё onUpdated РЅР° РєР°Р¶РґРѕРј РІС‹Р·РѕРІРµ. Р­С‚Рѕ РјРѕР¶РµС‚ РїСЂРёРІРµСЃС‚Рё Рє Р±РµСЃРєРѕРЅРµС‡РЅРѕРјСѓ С†РёРєР»Сѓ РѕР±РЅРѕРІР»РµРЅРёР№.',
    interviewQuestions: createInterviewQuestions("onUpdated", "Updates"),
    remember:
      'onUpdated РІС‹Р·С‹РІР°РµС‚СЃСЏ РїРѕСЃР»Рµ DOM patch Рё С‚СЂРµР±СѓРµС‚ РѕСЃС‚РѕСЂРѕР¶РЅРѕСЃС‚Рё СЃ РёР·РјРµРЅРµРЅРёРµРј state.',
  },
  {
    id: 'knowledge-lifecycle-q607',
    moduleId: 'lifecycle',
    questionId: 607,
    title: 'onBeforeUnmount',
    category: 'Unmounting',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '3 РјРёРЅ',
    whatIsIt:
      'onBeforeUnmount РІС‹Р·С‹РІР°РµС‚СЃСЏ РїСЂСЏРјРѕ РїРµСЂРµРґ СѓРґР°Р»РµРЅРёРµРј РєРѕРјРїРѕРЅРµРЅС‚Р°. Р­РєР·РµРјРїР»СЏСЂ РєРѕРјРїРѕРЅРµРЅС‚Р° РµС‰С‘ Р°РєС‚РёРІРµРЅ, Р° reactive state Рё refs РµС‰С‘ РґРѕСЃС‚СѓРїРЅС‹. Р­С‚Рѕ РїРѕСЃР»РµРґРЅРёР№ РјРѕРјРµРЅС‚ РїРµСЂРµРґ С„Р°РєС‚РёС‡РµСЃРєРёРј teardown.',
    whenToUse:
      'Hook РїРѕР»РµР·РµРЅ РґР»СЏ РїРѕРґРіРѕС‚РѕРІРєРё Рє СѓРґР°Р»РµРЅРёСЋ: РѕСЃС‚Р°РЅРѕРІРєРё РїСЂРѕС†РµСЃСЃРѕРІ, СЃРѕС…СЂР°РЅРµРЅРёСЏ С„РёРЅР°Р»СЊРЅРѕРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ РёР»Рё СЃРёРЅС…СЂРѕРЅРЅС‹С… РїСЂРѕРІРµСЂРѕРє. Р”Р»СЏ РѕР±С‹С‡РЅРѕРіРѕ cleanup С‡Р°СЃС‚Рѕ РґРѕСЃС‚Р°С‚РѕС‡РЅРѕ onUnmounted. Р’С‹Р±РѕСЂ Р·Р°РІРёСЃРёС‚ РѕС‚ С‚РѕРіРѕ, РЅСѓР¶РµРЅ Р»Рё РµС‰С‘ Р°РєС‚РёРІРЅС‹Р№ СЌРєР·РµРјРїР»СЏСЂ.',
    howItWorks:
      'Vue РЅР°С‡РёРЅР°РµС‚ СѓРґР°Р»СЏС‚СЊ РєРѕРјРїРѕРЅРµРЅС‚ РёР· РґРµСЂРµРІР° Рё РІС‹Р·С‹РІР°РµС‚ onBeforeUnmount. РџРѕСЃР»Рµ СЌС‚РѕРіРѕ РґРѕС‡РµСЂРЅРёРµ СЌС„С„РµРєС‚С‹ Рё DOM Р±СѓРґСѓС‚ РѕС‡РёС‰РµРЅС‹. Р—Р°С‚РµРј РІС‹Р·С‹РІР°РµС‚СЃСЏ onUnmounted.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ РІР°Р¶РЅРѕ РѕС‚Р»РёС‡Р°С‚СЊ before unmount Рё unmounted. РџРµСЂРІС‹Р№ РјРѕРјРµРЅС‚ РїСЂРѕРёСЃС…РѕРґРёС‚ РґРѕ СѓРґР°Р»РµРЅРёСЏ, РІС‚РѕСЂРѕР№ вЂ” РїРѕСЃР»Рµ.',
    codeExample: {
      language: 'ts',
      filename: 'before-unmount.ts',
      code: `onBeforeUnmount(() => {
  saveDraft()
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” СЂР°СЃСЃС‡РёС‚С‹РІР°С‚СЊ, С‡С‚Рѕ onBeforeUnmount СЃСЂР°Р±РѕС‚Р°РµС‚ РїСЂРё РґРµР°РєС‚РёРІР°С†РёРё KeepAlive. Р”Р»СЏ KeepAlive РЅСѓР¶РµРЅ onDeactivated.',
    interviewQuestions: createInterviewQuestions("onBeforeUnmount", "Unmounting"),
    remember:
      'onBeforeUnmount РІС‹Р·С‹РІР°РµС‚СЃСЏ РїРµСЂРµРґ СѓРґР°Р»РµРЅРёРµРј Р°РєС‚РёРІРЅРѕРіРѕ СЌРєР·РµРјРїР»СЏСЂР° РєРѕРјРїРѕРЅРµРЅС‚Р°.',
  },
  {
    id: 'knowledge-lifecycle-q608',
    moduleId: 'lifecycle',
    questionId: 608,
    title: 'onUnmounted Рё cleanup',
    category: 'Unmounting',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'onUnmounted РІС‹Р·С‹РІР°РµС‚СЃСЏ РїРѕСЃР»Рµ СЂР°Р·РјРѕРЅС‚РёСЂРѕРІР°РЅРёСЏ РєРѕРјРїРѕРЅРµРЅС‚Р°. Р­С‚Рѕ РѕСЃРЅРѕРІРЅРѕР№ hook РґР»СЏ РѕС‡РёСЃС‚РєРё РІРЅРµС€РЅРёС… СЂРµСЃСѓСЂСЃРѕРІ: listeners, intervals, subscriptions, observers Рё instances СЃС‚РѕСЂРѕРЅРЅРёС… Р±РёР±Р»РёРѕС‚РµРє. РћРЅ РїСЂРµРґРѕС‚РІСЂР°С‰Р°РµС‚ СѓС‚РµС‡РєРё РїР°РјСЏС‚Рё.',
    whenToUse:
      'onUnmounted РЅСѓР¶РµРЅ РєР°Р¶РґС‹Р№ СЂР°Р·, РєРѕРіРґР° РєРѕРјРїРѕРЅРµРЅС‚ СЃРѕР·РґР°Р» СЂРµСЃСѓСЂСЃ, РєРѕС‚РѕСЂС‹Р№ Vue РЅРµ РѕС‡РёС‰Р°РµС‚ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё. Р•СЃР»Рё СЂРµСЃСѓСЂСЃ Р¶РёРІС‘С‚ С‚РѕР»СЊРєРѕ РІРЅСѓС‚СЂРё Vue reactive graph, Vue С‡Р°СЃС‚Рѕ СЃРїСЂР°РІРёС‚СЃСЏ СЃР°Рј. РќРѕ Р±СЂР°СѓР·РµСЂРЅС‹Рµ API Рё РІРЅРµС€РЅРёРµ РїРѕРґРїРёСЃРєРё С‚СЂРµР±СѓСЋС‚ СЏРІРЅРѕРіРѕ cleanup.',
    howItWorks:
      'РџСЂРё СѓРґР°Р»РµРЅРёРё РєРѕРјРїРѕРЅРµРЅС‚Р° Vue РѕСЃС‚Р°РЅР°РІР»РёРІР°РµС‚ РµРіРѕ reactive effects Рё РІС‹Р·С‹РІР°РµС‚ cleanup callbacks. РљРѕРґ РІРЅСѓС‚СЂРё onUnmounted РґРѕР»Р¶РµРЅ СѓР±СЂР°С‚СЊ РІРЅРµС€РЅРёРµ СЃРІСЏР·Рё, С‡С‚РѕР±С‹ РѕРЅРё РЅРµ РѕР±СЂР°С‰Р°Р»РёСЃСЊ Рє СѓСЃС‚Р°СЂРµРІС€РµРјСѓ СЃРѕСЃС‚РѕСЏРЅРёСЋ.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ cleanup вЂ” РѕРґРёРЅ РёР· РіР»Р°РІРЅС‹С… РїСЂР°РєС‚РёС‡РµСЃРєРёС… РјР°СЂРєРµСЂРѕРІ РѕРїС‹С‚Р°. РљРѕРјРїРѕРЅРµРЅС‚ РґРѕР»Р¶РµРЅ РѕСЃРІРѕР±РѕР¶РґР°С‚СЊ С‚Рѕ, С‡С‚Рѕ СЃРѕР·РґР°Р».',
    codeExample: {
      language: 'ts',
      filename: 'cleanup.ts',
      code: `const timerId = window.setInterval(refresh, 1000)

onUnmounted(() => {
  window.clearInterval(timerId)
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РґСѓРјР°С‚СЊ, С‡С‚Рѕ Vue Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РѕС‡РёС‰Р°РµС‚ РІСЃРµ browser APIs. setInterval, WebSocket Рё event listeners РЅСѓР¶РЅРѕ Р·Р°РєСЂС‹РІР°С‚СЊ СЏРІРЅРѕ.',
    interviewQuestions: createInterviewQuestions("onUnmounted Рё cleanup", "Unmounting"),
    remember:
      'onUnmounted вЂ” РјРµСЃС‚Рѕ РґР»СЏ РѕС‡РёСЃС‚РєРё СЂРµСЃСѓСЂСЃРѕРІ, СЃРѕР·РґР°РЅРЅС‹С… РєРѕРјРїРѕРЅРµРЅС‚РѕРј.',
  },
  {
    id: 'knowledge-lifecycle-q609',
    moduleId: 'lifecycle',
    questionId: 609,
    title: 'onActivated',
    category: 'KeepAlive',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'onActivated РІС‹Р·С‹РІР°РµС‚СЃСЏ, РєРѕРіРґР° РєРѕРјРїРѕРЅРµРЅС‚, РєРµС€РёСЂРѕРІР°РЅРЅС‹Р№ С‡РµСЂРµР· KeepAlive, СЃРЅРѕРІР° СЃС‚Р°РЅРѕРІРёС‚СЃСЏ Р°РєС‚РёРІРЅС‹Рј. Р­РєР·РµРјРїР»СЏСЂ РЅРµ СЃРѕР·РґР°С‘С‚СЃСЏ Р·Р°РЅРѕРІРѕ, Р° РІРѕР·РІСЂР°С‰Р°РµС‚СЃСЏ РёР· РєРµС€Р°. Р›РѕРєР°Р»СЊРЅРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ РїСЂРё СЌС‚РѕРј СЃРѕС…СЂР°РЅСЏРµС‚СЃСЏ.',
    whenToUse:
      'onActivated РїРѕР»РµР·РµРЅ РґР»СЏ РІРѕР·РѕР±РЅРѕРІР»РµРЅРёСЏ timers, РѕР±РЅРѕРІР»РµРЅРёСЏ РґР°РЅРЅС‹С…, РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ focus РёР»Рё РїСЂРѕРґРѕР»Р¶РµРЅРёСЏ РїРѕРґРїРёСЃРѕРє. РћРЅ РЅСѓР¶РµРЅ С‚РѕР»СЊРєРѕ РґР»СЏ РєРѕРјРїРѕРЅРµРЅС‚РѕРІ РІРЅСѓС‚СЂРё KeepAlive. Р”Р»СЏ РѕР±С‹С‡РЅРѕРіРѕ РїРµСЂРІРѕРіРѕ mount РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ onMounted.',
    howItWorks:
      'KeepAlive СЃРѕС…СЂР°РЅСЏРµС‚ СЌРєР·РµРјРїР»СЏСЂ РїСЂРё СЃРєСЂС‹С‚РёРё. РљРѕРіРґР° РєРѕРјРїРѕРЅРµРЅС‚ СЃРЅРѕРІР° РѕС‚РѕР±СЂР°Р¶Р°РµС‚СЃСЏ, Vue РІС‹Р·С‹РІР°РµС‚ onActivated. Р­С‚РѕС‚ hook РјРѕР¶РµС‚ РІС‹Р·С‹РІР°С‚СЊСЃСЏ РЅРµСЃРєРѕР»СЊРєРѕ СЂР°Р· РІ С‚РµС‡РµРЅРёРµ Р¶РёР·РЅРё РѕРґРЅРѕРіРѕ СЌРєР·РµРјРїР»СЏСЂР°.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ РІР°Р¶РЅРѕ РїРѕРЅРёРјР°С‚СЊ, С‡С‚Рѕ KeepAlive РјРµРЅСЏРµС‚ РїСЂРёРІС‹С‡РЅСѓСЋ РјРѕРґРµР»СЊ mount/unmount. РљРѕРјРїРѕРЅРµРЅС‚ РјРѕР¶РµС‚ РёСЃС‡РµР·РЅСѓС‚СЊ РІРёР·СѓР°Р»СЊРЅРѕ, РЅРѕ РЅРµ Р±С‹С‚СЊ СѓРґР°Р»С‘РЅРЅС‹Рј.',
    codeExample: {
      language: 'ts',
      filename: 'activated.ts',
      code: `onActivated(() => {
  resumePolling()
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РѕР¶РёРґР°С‚СЊ, С‡С‚Рѕ onMounted Р±СѓРґРµС‚ РІС‹Р·С‹РІР°С‚СЊСЃСЏ РїСЂРё РєР°Р¶РґРѕРј РІРѕР·РІСЂР°С‰РµРЅРёРё РєРµС€РёСЂРѕРІР°РЅРЅРѕРіРѕ РєРѕРјРїРѕРЅРµРЅС‚Р°. Р”Р»СЏ СЌС‚РѕРіРѕ РµСЃС‚СЊ onActivated.',
    interviewQuestions: createInterviewQuestions("onActivated", "KeepAlive"),
    remember:
      'onActivated СЃСЂР°Р±Р°С‚С‹РІР°РµС‚ РїСЂРё РІРѕР·РІСЂР°С‰РµРЅРёРё KeepAlive-РєРѕРјРїРѕРЅРµРЅС‚Р° РёР· РєРµС€Р°.',
  },
  {
    id: 'knowledge-lifecycle-q610',
    moduleId: 'lifecycle',
    questionId: 610,
    title: 'onDeactivated',
    category: 'KeepAlive',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'onDeactivated РІС‹Р·С‹РІР°РµС‚СЃСЏ, РєРѕРіРґР° KeepAlive-РєРѕРјРїРѕРЅРµРЅС‚ РїРµСЂРµСЃС‚Р°С‘С‚ Р±С‹С‚СЊ Р°РєС‚РёРІРЅС‹Рј, РЅРѕ РЅРµ СѓРЅРёС‡С‚РѕР¶Р°РµС‚СЃСЏ. Р•РіРѕ state СЃРѕС…СЂР°РЅСЏРµС‚СЃСЏ, Р° DOM РјРѕР¶РµС‚ Р±С‹С‚СЊ РїРµСЂРµРјРµС‰С‘РЅ РёР»Рё СЃРєСЂС‹С‚. Р­С‚Рѕ РЅРµ С‚Рѕ Р¶Рµ СЃР°РјРѕРµ, С‡С‚Рѕ unmount.',
    whenToUse:
      'Hook РЅСѓР¶РµРЅ, С‡С‚РѕР±С‹ РїРѕСЃС‚Р°РІРёС‚СЊ РЅР° РїР°СѓР·Сѓ polling, timers, media playback, observers РёР»Рё listeners, РєРѕС‚РѕСЂС‹Рµ РЅРµ РґРѕР»Р¶РЅС‹ СЂР°Р±РѕС‚Р°С‚СЊ РІ СЃРєСЂС‹С‚РѕРј СЃРѕСЃС‚РѕСЏРЅРёРё. Р•СЃР»Рё СЂРµСЃСѓСЂСЃ РґРѕР»Р¶РµРЅ Р¶РёС‚СЊ РґР°Р¶Рµ РІ С„РѕРЅРµ, cleanup РјРѕР¶РµС‚ Р±С‹С‚СЊ РЅРµ РЅСѓР¶РµРЅ.',
    howItWorks:
      'РџСЂРё РїРµСЂРµРєР»СЋС‡РµРЅРёРё Р°РєС‚РёРІРЅРѕРіРѕ РєРѕРјРїРѕРЅРµРЅС‚Р° KeepAlive РґРµР°РєС‚РёРІРёСЂСѓРµС‚ СЃС‚Р°СЂС‹Р№ СЌРєР·РµРјРїР»СЏСЂ. Vue РІС‹Р·С‹РІР°РµС‚ onDeactivated, РЅРѕ РЅРµ СѓРЅРёС‡С‚РѕР¶Р°РµС‚ reactive state. РџСЂРё РІРѕР·РІСЂР°С‚Рµ Р±СѓРґРµС‚ onActivated.',
    whyImportant:
      'Р­С‚Рѕ РІР°Р¶РЅР°СЏ С‚РµРјР° РґР»СЏ РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЊРЅРѕСЃС‚Рё. РљРµС€РёСЂРѕРІР°РЅРЅС‹Р№ РєРѕРјРїРѕРЅРµРЅС‚ РјРѕР¶РµС‚ РїСЂРѕРґРѕР»Р¶Р°С‚СЊ РІС‹РїРѕР»РЅСЏС‚СЊ СЂР°Р±РѕС‚Сѓ, РµСЃР»Рё РµС‘ РЅРµ РїРѕСЃС‚Р°РІРёС‚СЊ РЅР° РїР°СѓР·Сѓ.',
    codeExample: {
      language: 'ts',
      filename: 'deactivated.ts',
      code: `onDeactivated(() => {
  pausePolling()
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РѕС‡РёС‰Р°С‚СЊ СЂРµСЃСѓСЂСЃ С‚РѕР»СЊРєРѕ РІ onUnmounted, С…РѕС‚СЏ РєРѕРјРїРѕРЅРµРЅС‚ СЃРєСЂС‹РІР°РµС‚СЃСЏ С‡РµСЂРµР· KeepAlive Рё РЅРµ СЂР°Р·РјРѕРЅС‚РёСЂСѓРµС‚СЃСЏ.',
    interviewQuestions: createInterviewQuestions("onDeactivated", "KeepAlive"),
    remember:
      'onDeactivated РЅСѓР¶РµРЅ РґР»СЏ РїР°СѓР·С‹ СЂР°Р±РѕС‚С‹ РєРµС€РёСЂРѕРІР°РЅРЅРѕРіРѕ РєРѕРјРїРѕРЅРµРЅС‚Р°.',
  },
  {
    id: 'knowledge-lifecycle-q611',
    moduleId: 'lifecycle',
    questionId: 611,
    title: 'onErrorCaptured',
    category: 'Errors',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'onErrorCaptured РїРµСЂРµС…РІР°С‚С‹РІР°РµС‚ РѕС€РёР±РєРё РёР· РґРѕС‡РµСЂРЅРµРіРѕ component tree. РћРЅ РїРѕР·РІРѕР»СЏРµС‚ Р·Р°РїРёСЃР°С‚СЊ РѕС€РёР±РєСѓ, РїРѕРєР°Р·Р°С‚СЊ fallback UI РёР»Рё РѕСЃС‚Р°РЅРѕРІРёС‚СЊ РґР°Р»СЊРЅРµР№С€РµРµ СЂР°СЃРїСЂРѕСЃС‚СЂР°РЅРµРЅРёРµ. Р­С‚Рѕ Р»РѕРєР°Р»СЊРЅС‹Р№ error boundary РјРµС…Р°РЅРёР·Рј Vue.',
    whenToUse:
      'Hook РёСЃРїРѕР»СЊР·СѓСЋС‚ РІРѕРєСЂСѓРі Р·РѕРЅ, РіРґРµ РѕС€РёР±РєР° РЅРµ РґРѕР»Р¶РЅР° Р»РѕРјР°С‚СЊ РІРµСЃСЊ СЌРєСЂР°РЅ: РІРёРґР¶РµС‚С‹, async panels, РґРёРЅР°РјРёС‡РµСЃРєРёРµ Р±Р»РѕРєРё. РћРЅ РЅРµ Р·Р°РјРµРЅСЏРµС‚ РіР»РѕР±Р°Р»СЊРЅРѕРµ Р»РѕРіРёСЂРѕРІР°РЅРёРµ Рё РЅРµ РґРѕР»Р¶РµРЅ СЃРєСЂС‹РІР°С‚СЊ РѕС€РёР±РєРё Р±РµР· СЃР»РµРґР°. РћС€РёР±РєР° РґРѕР»Р¶РЅР° Р±С‹С‚СЊ РѕР±СЂР°Р±РѕС‚Р°РЅР° РѕСЃРѕР·РЅР°РЅРЅРѕ.',
    howItWorks:
      'Callback РїРѕР»СѓС‡Р°РµС‚ error, instance Рё info. Р•СЃР»Рё РІРµСЂРЅСѓС‚СЊ false, РѕС€РёР±РєР° РЅРµ Р±СѓРґРµС‚ СЂР°СЃРїСЂРѕСЃС‚СЂР°РЅСЏС‚СЊСЃСЏ РґР°Р»СЊС€Рµ. Р•СЃР»Рё РЅРµ РІРµСЂРЅСѓС‚СЊ false, РѕРЅР° РїСЂРѕРґРѕР»Р¶РёС‚ РїСѓС‚СЊ Рє РіР»РѕР±Р°Р»СЊРЅРѕРјСѓ РѕР±СЂР°Р±РѕС‚С‡РёРєСѓ.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ РІР°Р¶РЅРѕ РїРѕРЅРёРјР°С‚СЊ РіСЂР°РЅРёС†С‹ error handling. РҐРѕСЂРѕС€РёР№ РѕС‚РІРµС‚ РІРєР»СЋС‡Р°РµС‚ fallback UI, Р»РѕРіРёСЂРѕРІР°РЅРёРµ Рё РѕСЃС‚РѕСЂРѕР¶РЅРѕСЃС‚СЊ СЃ РїРѕРґР°РІР»РµРЅРёРµРј РѕС€РёР±РѕРє.',
    codeExample: {
      language: 'ts',
      filename: 'error-boundary.ts',
      code: `onErrorCaptured((error) => {
  reportError(error)
  hasError.value = true
  return false
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РїРµСЂРµС…РІР°С‚С‹РІР°С‚СЊ РѕС€РёР±РєСѓ Рё РЅРёС‡РµРіРѕ СЃ РЅРµР№ РЅРµ РґРµР»Р°С‚СЊ. Р­С‚Рѕ СЃРєСЂС‹РІР°РµС‚ РїСЂРѕР±Р»РµРјСѓ Рё СѓСЃР»РѕР¶РЅСЏРµС‚ РґРёР°РіРЅРѕСЃС‚РёРєСѓ.',
    interviewQuestions: createInterviewQuestions("onErrorCaptured", "Errors"),
    remember:
      'onErrorCaptured РїРѕРјРѕРіР°РµС‚ Р»РѕРєР°Р»СЊРЅРѕ РѕР±СЂР°Р±РѕС‚Р°С‚СЊ РѕС€РёР±РєРё РґРѕС‡РµСЂРЅРёС… РєРѕРјРїРѕРЅРµРЅС‚РѕРІ.',
  },
  {
    id: 'knowledge-lifecycle-q612',
    moduleId: 'lifecycle',
    questionId: 612,
    title: 'created Рё mounted РІ Vue 2',
    category: 'Migration',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'Р’ Vue 2 created РІС‹РїРѕР»РЅСЏР»СЃСЏ РїРѕСЃР»Рµ СЃРѕР·РґР°РЅРёСЏ СЌРєР·РµРјРїР»СЏСЂР°, РЅРѕ РґРѕ РјРѕРЅС‚РёСЂРѕРІР°РЅРёСЏ DOM. mounted РІС‹РїРѕР»РЅСЏР»СЃСЏ РїРѕСЃР»Рµ РІСЃС‚Р°РІРєРё DOM. Р’ Vue 3 Composition API РїРѕС…РѕР¶Р°СЏ РјРѕРґРµР»СЊ РІС‹СЂР°Р¶Р°РµС‚СЃСЏ С‡РµСЂРµР· setup Рё onMounted.',
    whenToUse:
      'РџСЂРё РјРёРіСЂР°С†РёРё created-Р»РѕРіРёРєСѓ С‡Р°СЃС‚Рѕ РїРµСЂРµРЅРѕСЃСЏС‚ РІ setup, РµСЃР»Рё РѕРЅР° РЅРµ Р·Р°РІРёСЃРёС‚ РѕС‚ DOM. DOM-Р·Р°РІРёСЃРёРјСѓСЋ Р»РѕРіРёРєСѓ РїРµСЂРµРЅРѕСЃСЏС‚ РІ onMounted. Р’Р°Р¶РЅРѕ РЅРµ РїРµСЂРµРЅРѕСЃРёС‚СЊ РІСЃС‘ РјРµС…Р°РЅРёС‡РµСЃРєРё РІ РѕРґРёРЅ hook.',
    howItWorks:
      'setup РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ СЂР°РЅСЊС€Рµ mount Рё РїРѕРґРіРѕС‚Р°РІР»РёРІР°РµС‚ СЂРµР°РєС‚РёРІРЅС‹Рµ Р·РЅР°С‡РµРЅРёСЏ. onMounted РІС‹Р·С‹РІР°РµС‚СЃСЏ РїРѕСЃР»Рµ РїРµСЂРІРѕРіРѕ DOM mount. Р­С‚Рѕ СЂР°Р·РґРµР»СЏРµС‚ РїРѕРґРіРѕС‚РѕРІРєСѓ РґР°РЅРЅС‹С… Рё side effects, СЃРІСЏР·Р°РЅРЅС‹Рµ СЃ DOM.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ СЃСЂР°РІРЅРµРЅРёРµ Vue 2 Рё Vue 3 РїРѕРєР°Р·С‹РІР°РµС‚ РїРѕРЅРёРјР°РЅРёРµ РјРёРіСЂР°С†РёРё. РҐРѕСЂРѕС€РёР№ РѕС‚РІРµС‚ РѕР±СЉСЏСЃРЅСЏРµС‚ РЅРµ С‚РѕР»СЊРєРѕ РЅР°Р·РІР°РЅРёСЏ hooks, РЅРѕ Рё РґРѕСЃС‚СѓРїРЅРѕСЃС‚СЊ DOM.',
    codeExample: {
      language: 'ts',
      filename: 'migration.ts',
      code: `const state = reactive({ ready: false })

onMounted(() => {
  state.ready = true
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РїРµСЂРµРЅРѕСЃРёС‚СЊ created-РєРѕРґ, РєРѕС‚РѕСЂС‹Р№ РЅРµ Р·Р°РІРёСЃРёС‚ РѕС‚ DOM, РІ onMounted. Р­С‚Рѕ РјРѕР¶РµС‚ Р·Р°РґРµСЂР¶Р°С‚СЊ РёРЅРёС†РёР°Р»РёР·Р°С†РёСЋ Р±РµР· РїСЂРёС‡РёРЅС‹.',
    interviewQuestions: createInterviewQuestions("created Рё mounted РІ Vue 2", "Migration"),
    remember:
      'created Р±Р»РёР¶Рµ Рє setup, mounted Р±Р»РёР¶Рµ Рє onMounted.',
  },
  {
    id: 'knowledge-lifecycle-q613',
    moduleId: 'lifecycle',
    questionId: 613,
    title: 'Cleanup РїРѕРґРїРёСЃРѕРє',
    category: 'Cleanup',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'Cleanup РїРѕРґРїРёСЃРѕРє вЂ” РѕСЃС‚Р°РЅРѕРІРєР° РІРЅРµС€РЅРёС… listeners РёР»Рё subscriptions, СЃРѕР·РґР°РЅРЅС‹С… РєРѕРјРїРѕРЅРµРЅС‚РѕРј. Р­С‚Рѕ РјРѕР¶РµС‚ Р±С‹С‚СЊ WebSocket, event emitter, observable, storage listener РёР»Рё РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєР°СЏ РїРѕРґРїРёСЃРєР°. Р‘РµР· cleanup callback РјРѕР¶РµС‚ Р¶РёС‚СЊ РґРѕР»СЊС€Рµ РєРѕРјРїРѕРЅРµРЅС‚Р°.',
    whenToUse:
      'Cleanup РЅСѓР¶РµРЅ РІСЃРµРіРґР°, РєРѕРіРґР° РїРѕРґРїРёСЃРєР° РЅРµ СѓРїСЂР°РІР»СЏРµС‚СЃСЏ Vue Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё. Р•СЃР»Рё API РІРѕР·РІСЂР°С‰Р°РµС‚ С„СѓРЅРєС†РёСЋ unsubscribe, РµС‘ СЃС‚РѕРёС‚ РІС‹Р·РІР°С‚СЊ РІ onUnmounted. Р”Р»СЏ РїРѕРґРїРёСЃРѕРє РІРЅСѓС‚СЂРё watcher РёСЃРїРѕР»СЊР·СѓСЋС‚ cleanup callback watcher.',
    howItWorks:
      'РљРѕРјРїРѕРЅРµРЅС‚ СЃРѕР·РґР°С‘С‚ РїРѕРґРїРёСЃРєСѓ Рё СЃРѕС…СЂР°РЅСЏРµС‚ С„СѓРЅРєС†РёСЋ РѕС‚РјРµРЅС‹. РџСЂРё unmount РІС‹Р·С‹РІР°РµС‚СЃСЏ unsubscribe. РўР°Рє callback РїРµСЂРµСЃС‚Р°С‘С‚ РѕР±СЂР°С‰Р°С‚СЊСЃСЏ Рє СЃРѕСЃС‚РѕСЏРЅРёСЋ СѓРґР°Р»С‘РЅРЅРѕРіРѕ РєРѕРјРїРѕРЅРµРЅС‚Р°.',
    whyImportant:
      'РЈС‚РµС‡РєРё РїРѕРґРїРёСЃРѕРє С‡Р°СЃС‚Рѕ С‚СЂСѓРґРЅРѕ РЅР°Р№С‚Рё. РќР° РёРЅС‚РµСЂРІСЊСЋ СЌС‚Р° С‚РµРјР° РїРѕРєР°Р·С‹РІР°РµС‚ РїСЂР°РєС‚РёС‡РµСЃРєСѓСЋ РґРёСЃС†РёРїР»РёРЅСѓ СѓРїСЂР°РІР»РµРЅРёСЏ СЂРµСЃСѓСЂСЃР°РјРё.',
    codeExample: {
      language: 'ts',
      filename: 'subscription-cleanup.ts',
      code: `const unsubscribe = source.subscribe((value) => {
  current.value = value
})

onUnmounted(() => {
  unsubscribe()
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РїРѕРґРїРёСЃР°С‚СЊСЃСЏ РІ onMounted Рё Р·Р°Р±С‹С‚СЊ unsubscribe. РџСЂРё РїРѕРІС‚РѕСЂРЅРѕРј mount callbacks РЅР°С‡РЅСѓС‚ РЅР°РєР°РїР»РёРІР°С‚СЊСЃСЏ.',
    interviewQuestions: createInterviewQuestions("Cleanup РїРѕРґРїРёСЃРѕРє", "Cleanup"),
    remember:
      'РљР°Р¶РґР°СЏ РІРЅРµС€РЅСЏСЏ РїРѕРґРїРёСЃРєР° РґРѕР»Р¶РЅР° РёРјРµС‚СЊ РїРѕРЅСЏС‚РЅС‹Р№ РїСѓС‚СЊ РѕС‡РёСЃС‚РєРё.',
  },
  {
    id: 'knowledge-lifecycle-q614',
    moduleId: 'lifecycle',
    questionId: 614,
    title: 'РўР°Р№РјРµСЂС‹ Рё lifecycle',
    category: 'Cleanup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'РўР°Р№РјРµСЂС‹ вЂ” РІРЅРµС€РЅРёРµ browser APIs, РєРѕС‚РѕСЂС‹Рµ РїСЂРѕРґРѕР»Р¶Р°СЋС‚ СЂР°Р±РѕС‚Р°С‚СЊ РЅРµР·Р°РІРёСЃРёРјРѕ РѕС‚ Vue-РєРѕРјРїРѕРЅРµРЅС‚Р°. setInterval Рё setTimeout РЅРµ РѕС‡РёС‰Р°СЋС‚СЃСЏ Vue Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё. РС… РЅСѓР¶РЅРѕ РѕСЃС‚Р°РЅР°РІР»РёРІР°С‚СЊ, РµСЃР»Рё РєРѕРјРїРѕРЅРµРЅС‚ Р±РѕР»СЊС€Рµ РЅРµ РґРѕР»Р¶РµРЅ РїРѕР»СѓС‡Р°С‚СЊ callback.',
    whenToUse:
      'РўР°Р№РјРµСЂС‹ РїСЂРёРјРµРЅСЏСЋС‚ РґР»СЏ polling, delayed UI, debounce-like СЌС„С„РµРєС‚РѕРІ Рё Р°РЅРёРјР°С†РёРѕРЅРЅС‹С… СЃС†РµРЅР°СЂРёРµРІ. Р•СЃР»Рё С‚Р°Р№РјРµСЂ СЃРѕР·РґР°С‘С‚СЃСЏ РєРѕРјРїРѕРЅРµРЅС‚РѕРј, cleanup РѕР±С‹С‡РЅРѕ РґРµР»Р°РµС‚СЃСЏ РІ onUnmounted. Р’ KeepAlive РёРЅРѕРіРґР° РЅСѓР¶РЅР° РїР°СѓР·Р° РІ onDeactivated.',
    howItWorks:
      'setInterval РІРѕР·РІСЂР°С‰Р°РµС‚ id. Р­С‚РѕС‚ id СЃРѕС…СЂР°РЅСЏСЋС‚ РІ РїРµСЂРµРјРµРЅРЅРѕР№ Рё РїРµСЂРµРґР°СЋС‚ РІ clearInterval. Р”Р»СЏ setTimeout РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ clearTimeout.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ С‚Р°Р№РјРµСЂС‹ вЂ” РїСЂРѕСЃС‚РѕР№ РїСЂРёРјРµСЂ СЂРµСЃСѓСЂСЃР°, РєРѕС‚РѕСЂС‹Рј Vue РЅРµ РІР»Р°РґРµРµС‚. РќРµРїСЂР°РІРёР»СЊРЅР°СЏ РѕС‡РёСЃС‚РєР° РїСЂРёРІРѕРґРёС‚ Рє РґСѓР±Р»РёСЂРѕРІР°РЅРЅС‹Рј Р·Р°РїСЂРѕСЃР°Рј Рё СѓС‚РµС‡РєР°Рј.',
    codeExample: {
      language: 'ts',
      filename: 'timer-cleanup.ts',
      code: `const intervalId = window.setInterval(() => {
  tick.value += 1
}, 1000)

onUnmounted(() => window.clearInterval(intervalId))`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” СЃРѕР·РґР°РІР°С‚СЊ interval РїСЂРё РєР°Р¶РґРѕРј mount Р±РµР· clearInterval. Р§РµСЂРµР· РЅРµСЃРєРѕР»СЊРєРѕ РїРµСЂРµС…РѕРґРѕРІ callback Р±СѓРґРµС‚ РІС‹РїРѕР»РЅСЏС‚СЊСЃСЏ РЅРµСЃРєРѕР»СЊРєРѕ СЂР°Р·.',
    interviewQuestions: createInterviewQuestions("РўР°Р№РјРµСЂС‹ Рё lifecycle", "Cleanup"),
    remember:
      'РўР°Р№РјРµСЂ, СЃРѕР·РґР°РЅРЅС‹Р№ РєРѕРјРїРѕРЅРµРЅС‚РѕРј, РґРѕР»Р¶РµРЅ Р±С‹С‚СЊ РѕСЃС‚Р°РЅРѕРІР»РµРЅ РєРѕРјРїРѕРЅРµРЅС‚РѕРј.',
  },
  {
    id: 'knowledge-lifecycle-q615',
    moduleId: 'lifecycle',
    questionId: 615,
    title: 'addEventListener Рё removeEventListener',
    category: 'Cleanup',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'addEventListener РґРѕР±Р°РІР»СЏРµС‚ РІРЅРµС€РЅРёР№ listener Рє DOM, window РёР»Рё document. РўР°РєРѕР№ listener РЅРµ РёСЃС‡РµР·Р°РµС‚ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РёР·-Р·Р° СѓРґР°Р»РµРЅРёСЏ Vue-РєРѕРјРїРѕРЅРµРЅС‚Р°. Р•РіРѕ РЅСѓР¶РЅРѕ СѓРґР°Р»РёС‚СЊ С‡РµСЂРµР· removeEventListener СЃ С‚РѕР№ Р¶Рµ С„СѓРЅРєС†РёРµР№.',
    whenToUse:
      'Р“Р»РѕР±Р°Р»СЊРЅС‹Рµ listeners РЅСѓР¶РЅС‹ РґР»СЏ resize, scroll, keydown, click outside Рё РёРЅС‚РµРіСЂР°С†РёР№. РС… СЃС‚РѕРёС‚ РґРѕР±Р°РІР»СЏС‚СЊ РІ onMounted, РµСЃР»Рё РЅСѓР¶РµРЅ browser API, Рё СѓРґР°Р»СЏС‚СЊ РІ onUnmounted. Р”Р»СЏ template events Р»СѓС‡С€Рµ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РѕР±С‹С‡РЅС‹Рµ Vue handlers.',
    howItWorks:
      'Handler СЃРѕС…СЂР°РЅСЏСЋС‚ РІ РїРµСЂРµРјРµРЅРЅРѕР№ РёР»Рё РѕР±СЉСЏРІР»СЏСЋС‚ РёРјРµРЅРѕРІР°РЅРЅРѕР№ С„СѓРЅРєС†РёРµР№. removeEventListener РїРѕР»СѓС‡Р°РµС‚ С‚РѕС‚ Р¶Рµ target, event name Рё handler. Anonymous callback РЅРµР»СЊР·СЏ СѓРґР°Р»РёС‚СЊ, РµСЃР»Рё СЃСЃС‹Р»РєР° РїРѕС‚РµСЂСЏРЅР°.',
    whyImportant:
      'Р­С‚Рѕ С‡Р°СЃС‚Р°СЏ РѕС€РёР±РєР° РІ production-РєРѕРґРµ. РќР° РёРЅС‚РµСЂРІСЊСЋ РІР°Р¶РЅРѕ СѓРїРѕРјСЏРЅСѓС‚СЊ РѕРґРёРЅР°РєРѕРІСѓСЋ СЃСЃС‹Р»РєСѓ РЅР° handler Рё cleanup.',
    codeExample: {
      language: 'ts',
      filename: 'window-listener.ts',
      code: `const onResize = () => {
  width.value = window.innerWidth
}

onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РґРѕР±Р°РІР»СЏС‚СЊ listener С‡РµСЂРµР· anonymous function Рё РїС‹С‚Р°С‚СЊСЃСЏ СѓРґР°Р»РёС‚СЊ РґСЂСѓРіРѕР№ anonymous function. Р­С‚Рѕ РЅРµ СѓРґР°Р»РёС‚ РёСЃС…РѕРґРЅС‹Р№ listener.',
    interviewQuestions: createInterviewQuestions("addEventListener Рё removeEventListener", "Cleanup"),
    remember:
      'removeEventListener С‚СЂРµР±СѓРµС‚ С‚Сѓ Р¶Рµ СЃСЃС‹Р»РєСѓ РЅР° handler.',
  },
  {
    id: 'knowledge-lifecycle-q616',
    moduleId: 'lifecycle',
    questionId: 616,
    title: 'Р Р°Р±РѕС‚Р° СЃ DOM',
    category: 'DOM',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'Р Р°Р±РѕС‚Р° СЃ DOM РІРѕ Vue РЅСѓР¶РЅР° РґР»СЏ Р·Р°РґР°С‡, РєРѕС‚РѕСЂС‹Рµ РЅРµР»СЊР·СЏ СѓРґРѕР±РЅРѕ РІС‹СЂР°Р·РёС‚СЊ РґРµРєР»Р°СЂР°С‚РёРІРЅРѕ: focus, РёР·РјРµСЂРµРЅРёСЏ, scroll, integration СЃ РІРЅРµС€РЅРµР№ Р±РёР±Р»РёРѕС‚РµРєРѕР№. РћР±С‹С‡РЅРѕ РѕРЅР° РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ С‡РµСЂРµР· template refs. DOM-Р·Р°РІРёСЃРёРјС‹Р№ РєРѕРґ РґРѕР»Р¶РµРЅ СѓС‡РёС‚С‹РІР°С‚СЊ РјРѕРјРµРЅС‚ mount.',
    whenToUse:
      'РСЃРїРѕР»СЊР·СѓР№ DOM-РґРѕСЃС‚СѓРї С‚РѕС‡РµС‡РЅРѕ. Р”Р»СЏ РєР»Р°СЃСЃРѕРІ, СѓСЃР»РѕРІРёР№ Рё С‚РµРєСЃС‚Р° Р»СѓС‡С€Рµ РґРµРєР»Р°СЂР°С‚РёРІРЅС‹Р№ template. Р•СЃР»Рё РЅСѓР¶РЅРѕ РёР·РјРµСЂРёС‚СЊ СЌР»РµРјРµРЅС‚, РґРѕР¶РґРёСЃСЊ onMounted РёР»Рё nextTick РїРѕСЃР»Рµ РѕР±РЅРѕРІР»РµРЅРёСЏ state.',
    howItWorks:
      'Template ref СЃРІСЏР·С‹РІР°РµС‚ РїРµСЂРµРјРµРЅРЅСѓСЋ ref СЃ DOM-СЌР»РµРјРµРЅС‚РѕРј. РџРѕСЃР»Рµ mount Vue Р·Р°РїРёСЃС‹РІР°РµС‚ СЌР»РµРјРµРЅС‚ РІ ref. РџСЂРё unmount Р·РЅР°С‡РµРЅРёРµ РѕС‡РёС‰Р°РµС‚СЃСЏ.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ РІР°Р¶РЅРѕ РїРѕРєР°Р·Р°С‚СЊ Р±Р°Р»Р°РЅСЃ: Vue РґРµРєР»Р°СЂР°С‚РёРІРЅС‹Р№, РЅРѕ РёРЅРѕРіРґР° DOM API РЅСѓР¶РµРЅ. Р“Р»Р°РІРЅРѕРµ вЂ” РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РµРіРѕ РІ РїСЂР°РІРёР»СЊРЅС‹Р№ РјРѕРјРµРЅС‚ lifecycle.',
    codeExample: {
      language: 'vue',
      filename: 'MeasureBox.vue',
      code: `<script setup lang="ts">
const boxEl = ref<HTMLElement | null>(null)

onMounted(() => {
  height.value = boxEl.value?.getBoundingClientRect().height ?? 0
})
</script>`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” С‡РёС‚Р°С‚СЊ DOM РІ setup. РќР° СЌС‚РѕРј СЌС‚Р°РїРµ СЌР»РµРјРµРЅС‚ РµС‰С‘ РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚.',
    interviewQuestions: createInterviewQuestions("Р Р°Р±РѕС‚Р° СЃ DOM", "DOM"),
    remember:
      'DOM РґРѕСЃС‚СѓРїРµРЅ РїРѕСЃР»Рµ mount, Р° РїРѕСЃР»Рµ РёР·РјРµРЅРµРЅРёСЏ state РёРЅРѕРіРґР° РЅСѓР¶РµРЅ nextTick.',
  },
  {
    id: 'knowledge-lifecycle-q617',
    moduleId: 'lifecycle',
    questionId: 617,
    title: 'Template refs',
    category: 'DOM',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'Template ref вЂ” СЃСЃС‹Р»РєР° РЅР° DOM-СЌР»РµРјРµРЅС‚ РёР»Рё РґРѕС‡РµСЂРЅРёР№ РєРѕРјРїРѕРЅРµРЅС‚ РёР· template. Р’ Composition API РµС‘ РѕР±С‹С‡РЅРѕ СЃРѕР·РґР°СЋС‚ РєР°Рє ref(null). Р”Рѕ mount Р·РЅР°С‡РµРЅРёРµ РѕР±С‹С‡РЅРѕ null.',
    whenToUse:
      'Template refs РЅСѓР¶РЅС‹ РґР»СЏ focus, РёР·РјРµСЂРµРЅРёР№, scroll, canvas, media elements Рё imperative API РґРѕС‡РµСЂРЅРµРіРѕ РєРѕРјРїРѕРЅРµРЅС‚Р°. Р”Р»СЏ РѕР±С‹С‡РЅРѕР№ РїРµСЂРµРґР°С‡Рё РґР°РЅРЅС‹С… Р»СѓС‡С€Рµ props Рё emits. Ref РЅРµ РґРѕР»Р¶РµРЅ СЃС‚Р°РЅРѕРІРёС‚СЊСЃСЏ РѕР±С…РѕРґРЅС‹Рј РїСѓС‚С‘Рј РІРѕРєСЂСѓРі component API.',
    howItWorks:
      'Р’ template СЃС‚Р°РІСЏС‚ `ref="inputEl"`, Р° РІ script СЃРѕР·РґР°СЋС‚ РїРµСЂРµРјРµРЅРЅСѓСЋ СЃ С‚Р°РєРёРј РёРјРµРЅРµРј. Vue Р·Р°РїРѕР»РЅРёС‚ РµС‘ РїРѕСЃР»Рµ mount. РџСЂРё РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРё TypeScript СѓРєР°Р·С‹РІР°СЋС‚ С‚РёРї СЌР»РµРјРµРЅС‚Р° Рё null.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ template refs С‡Р°СЃС‚Рѕ СЃРІСЏР·С‹РІР°СЋС‚ СЃ lifecycle. Р—РЅР°РЅРёРµ null РґРѕ mount РїРѕРјРѕРіР°РµС‚ РёР·Р±РµР¶Р°С‚СЊ runtime-РѕС€РёР±РѕРє.',
    codeExample: {
      language: 'vue',
      filename: 'InputRef.vue',
      code: `<script setup lang="ts">
const inputEl = ref<HTMLInputElement | null>(null)
</script>

<template>
  <input ref="inputEl" />
</template>`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РїРёСЃР°С‚СЊ `inputEl.value.focus()` Р±РµР· РїСЂРѕРІРµСЂРєРё null. Р‘РµР·РѕРїР°СЃРЅРµРµ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ optional chaining РёР»Рё РїСЂРѕРІРµСЂРєСѓ.',
    interviewQuestions: createInterviewQuestions("Template refs", "DOM"),
    remember:
      'Template ref РїРѕСЏРІР»СЏРµС‚СЃСЏ РїРѕСЃР»Рµ mount Рё РјРѕР¶РµС‚ Р±С‹С‚СЊ null.',
  },
  {
    id: 'knowledge-lifecycle-q618',
    moduleId: 'lifecycle',
    questionId: 618,
    title: 'nextTick',
    category: 'Updates',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'nextTick РїРѕР·РІРѕР»СЏРµС‚ РґРѕР¶РґР°С‚СЊСЃСЏ, РєРѕРіРґР° Vue РїСЂРёРјРµРЅРёС‚ Р·Р°РїР»Р°РЅРёСЂРѕРІР°РЅРЅС‹Рµ DOM-РѕР±РЅРѕРІР»РµРЅРёСЏ РїРѕСЃР»Рµ РёР·РјРµРЅРµРЅРёСЏ reactive state. Vue Р±Р°С‚С‡РёС‚ updates Р°СЃРёРЅС…СЂРѕРЅРЅРѕ, РїРѕСЌС‚РѕРјСѓ DOM РЅРµ РІСЃРµРіРґР° РјРµРЅСЏРµС‚СЃСЏ СЃСЂР°Р·Сѓ РїРѕСЃР»Рµ РїСЂРёСЃРІР°РёРІР°РЅРёСЏ.',
    whenToUse:
      'nextTick РЅСѓР¶РµРЅ, РєРѕРіРґР° РїРѕСЃР»Рµ РёР·РјРµРЅРµРЅРёСЏ state С‚СЂРµР±СѓРµС‚СЃСЏ РїСЂРѕС‡РёС‚Р°С‚СЊ РЅРѕРІС‹Р№ DOM, РёР·РјРµСЂРёС‚СЊ СЌР»РµРјРµРЅС‚ РёР»Рё РїРѕСЃС‚Р°РІРёС‚СЊ focus РЅР° СѓСЃР»РѕРІРЅРѕ РѕС‚СЂРµРЅРґРµСЂРµРЅРЅС‹Р№ input. Р”Р»СЏ Р»РѕРіРёРєРё, РЅРµ Р·Р°РІРёСЃСЏС‰РµР№ РѕС‚ DOM, nextTick РЅРµ РЅСѓР¶РµРЅ.',
    howItWorks:
      'РџРѕСЃР»Рµ РёР·РјРµРЅРµРЅРёСЏ reactive Р·РЅР°С‡РµРЅРёСЏ Vue СЃС‚Р°РІРёС‚ DOM update РІ РѕС‡РµСЂРµРґСЊ. `await nextTick()` Р¶РґС‘С‚ Р·Р°РІРµСЂС€РµРЅРёСЏ СЌС‚РѕР№ РѕС‡РµСЂРµРґРё. РџРѕСЃР»Рµ СЌС‚РѕРіРѕ DOM СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ С‚РµРєСѓС‰РµРјСѓ state.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ nextTick РїСЂРѕРІРµСЂСЏРµС‚ РїРѕРЅРёРјР°РЅРёРµ Р°СЃРёРЅС…СЂРѕРЅРЅРѕРіРѕ render cycle. Р­С‚Рѕ РїРѕРјРѕРіР°РµС‚ РѕР±СЉСЏСЃРЅРёС‚СЊ, РїРѕС‡РµРјСѓ DOM РЅРµ РѕР±РЅРѕРІР»СЏРµС‚СЃСЏ РјРіРЅРѕРІРµРЅРЅРѕ РїРѕСЃР»Рµ РёР·РјРµРЅРµРЅРёСЏ ref.',
    codeExample: {
      language: 'ts',
      filename: 'next-tick-focus.ts',
      code: `isEditing.value = true
await nextTick()
inputEl.value?.focus()`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ nextTick РєР°Рє СѓРЅРёРІРµСЂСЃР°Р»СЊРЅСѓСЋ Р·Р°РґРµСЂР¶РєСѓ. Р•СЃР»Рё РєРѕРґ РЅРµ Р·Р°РІРёСЃРёС‚ РѕС‚ РѕР±РЅРѕРІР»С‘РЅРЅРѕРіРѕ DOM, СЌС‚Рѕ Р»РёС€РЅСЏСЏ СЃР»РѕР¶РЅРѕСЃС‚СЊ.',
    interviewQuestions: createInterviewQuestions("nextTick", "Updates"),
    remember:
      'nextTick Р¶РґС‘С‚ РїСЂРёРјРµРЅРµРЅРёСЏ DOM-РѕР±РЅРѕРІР»РµРЅРёР№ Vue.',
  },
  {
    id: 'knowledge-lifecycle-q619',
    moduleId: 'lifecycle',
    questionId: 619,
    title: 'KeepAlive lifecycle',
    category: 'KeepAlive',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'KeepAlive РјРµРЅСЏРµС‚ РѕР±С‹С‡РЅСѓСЋ РјРѕРґРµР»СЊ lifecycle: РєРѕРјРїРѕРЅРµРЅС‚ РјРѕР¶РµС‚ СЃРєСЂС‹РІР°С‚СЊСЃСЏ Р±РµР· СѓРЅРёС‡С‚РѕР¶РµРЅРёСЏ. Р•РіРѕ СЌРєР·РµРјРїР»СЏСЂ Рё Р»РѕРєР°Р»СЊРЅРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ СЃРѕС…СЂР°РЅСЏСЋС‚СЃСЏ РІ РєРµС€Рµ. Р”Р»СЏ С‚Р°РєРёС… РїРµСЂРµС…РѕРґРѕРІ РёСЃРїРѕР»СЊР·СѓСЋС‚СЃСЏ onActivated Рё onDeactivated.',
    whenToUse:
      'KeepAlive РїРѕР»РµР·РµРЅ РґР»СЏ РІРєР»Р°РґРѕРє, cached routes, РјР°СЃС‚РµСЂРѕРІ Рё СЌРєСЂР°РЅРѕРІ, РіРґРµ РІР°Р¶РЅРѕ СЃРѕС…СЂР°РЅРёС‚СЊ Р»РѕРєР°Р»СЊРЅРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ. Lifecycle hooks РЅСѓР¶РЅС‹ РґР»СЏ РїР°СѓР·С‹ Рё РІРѕР·РѕР±РЅРѕРІР»РµРЅРёСЏ РІРЅРµС€РЅРёС… СЂРµСЃСѓСЂСЃРѕРІ. РќРµ СЃС‚РѕРёС‚ РєРµС€РёСЂРѕРІР°С‚СЊ РІСЃС‘ РїРѕРґСЂСЏРґ, РїРѕС‚РѕРјСѓ С‡С‚Рѕ СЌС‚Рѕ РїРѕС‚СЂРµР±Р»СЏРµС‚ РїР°РјСЏС‚СЊ.',
    howItWorks:
      'РџСЂРё РїРµСЂРІРѕРј РїРѕРєР°Р·Рµ РєРѕРјРїРѕРЅРµРЅС‚ РјРѕРЅС‚РёСЂСѓРµС‚СЃСЏ. РџСЂРё СЃРєСЂС‹С‚РёРё РѕРЅ РґРµР°РєС‚РёРІРёСЂСѓРµС‚СЃСЏ, РЅРѕ РЅРµ unmount. РџСЂРё РїРѕРІС‚РѕСЂРЅРѕРј РїРѕРєР°Р·Рµ Р°РєС‚РёРІРёСЂСѓРµС‚СЃСЏ. onUnmounted СЃСЂР°Р±РѕС‚Р°РµС‚ С‚РѕР»СЊРєРѕ РїСЂРё СѓРґР°Р»РµРЅРёРё РёР· РєРµС€Р°.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ РІР°Р¶РЅРѕ РѕР±СЉСЏСЃРЅРёС‚СЊ, РїРѕС‡РµРјСѓ cleanup С‚РѕР»СЊРєРѕ РІ onUnmounted РјРѕР¶РµС‚ Р±С‹С‚СЊ РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅС‹Рј РґР»СЏ KeepAlive. РЎРєСЂС‹С‚С‹Р№ РєРѕРјРїРѕРЅРµРЅС‚ РІСЃС‘ РµС‰С‘ РјРѕР¶РµС‚ РІС‹РїРѕР»РЅСЏС‚СЊ СЂР°Р±РѕС‚Сѓ.',
    codeExample: {
      language: 'vue',
      filename: 'CachedPanel.vue',
      code: `<script setup lang="ts">
onActivated(() => resume())
onDeactivated(() => pause())
</script>`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РѕСЃС‚Р°РІР»СЏС‚СЊ polling Р°РєС‚РёРІРЅС‹Рј РІ РґРµР°РєС‚РёРІРёСЂРѕРІР°РЅРЅРѕРј РєРѕРјРїРѕРЅРµРЅС‚Рµ, РµСЃР»Рё РґР°РЅРЅС‹Рµ РЅРµ РЅСѓР¶РЅС‹ РІ С„РѕРЅРµ.',
    interviewQuestions: createInterviewQuestions("KeepAlive lifecycle", "KeepAlive"),
    remember:
      'KeepAlive С‚СЂРµР±СѓРµС‚ РґСѓРјР°С‚СЊ Рѕ deactivated/activated, Р° РЅРµ С‚РѕР»СЊРєРѕ mount/unmount.',
  },
  {
    id: 'knowledge-lifecycle-q620',
    moduleId: 'lifecycle',
    questionId: 620,
    title: 'Async setup',
    category: 'Async',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 РјРёРЅ',
    whatIsIt:
      'Async setup вЂ” setup, РєРѕС‚РѕСЂС‹Р№ РІРѕР·РІСЂР°С‰Р°РµС‚ Promise. РћРЅ РїРѕР·РІРѕР»СЏРµС‚ РґРѕР¶РґР°С‚СЊСЃСЏ Р°СЃРёРЅС…СЂРѕРЅРЅС‹С… РґР°РЅРЅС‹С… РґРѕ РіРѕС‚РѕРІРЅРѕСЃС‚Рё РєРѕРјРїРѕРЅРµРЅС‚Р°, РЅРѕ РјРµРЅСЏРµС‚ РїРѕРІРµРґРµРЅРёРµ СЂРµРЅРґРµСЂР°. РћР±С‹С‡РЅРѕ РµРіРѕ РёСЃРїРѕР»СЊР·СѓСЋС‚ РІРјРµСЃС‚Рµ СЃ Suspense РёР»Рё РїСЂРѕРґСѓРјР°РЅРЅС‹Рј loading state.',
    whenToUse:
      'Async setup РїРѕРґС…РѕРґРёС‚ РґР»СЏ СЃС†РµРЅР°СЂРёРµРІ, РіРґРµ РєРѕРјРїРѕРЅРµРЅС‚ РЅРµ РјРѕР¶РµС‚ РєРѕСЂСЂРµРєС‚РЅРѕ РѕС‚СЂРёСЃРѕРІР°С‚СЊСЃСЏ Р±РµР· РЅР°С‡Р°Р»СЊРЅС‹С… async РґР°РЅРЅС‹С…. Р”Р»СЏ РѕР±С‹С‡РЅРѕР№ Р·Р°РіСЂСѓР·РєРё РїРѕСЃР»Рµ mount С‡Р°СЃС‚Рѕ РїСЂРѕС‰Рµ Р»РѕРєР°Р»СЊРЅС‹Р№ loading state. Р’Р°Р¶РЅРѕ СѓС‡РёС‚С‹РІР°С‚СЊ РѕС€РёР±РєРё, РѕС‚РјРµРЅСѓ Рё SSR.',
    howItWorks:
      'Р•СЃР»Рё setup Р°СЃРёРЅС…СЂРѕРЅРЅС‹Р№, Vue РѕР¶РёРґР°РµС‚ РµРіРѕ СЂРµР·СѓР»СЊС‚Р°С‚ РґР»СЏ Р·Р°РІРµСЂС€РµРЅРёСЏ setup. Suspense РјРѕР¶РµС‚ РїРѕРєР°Р·Р°С‚СЊ fallback. Р‘РµР· РїСЂРѕРґСѓРјР°РЅРЅРѕР№ РѕР±РѕР»РѕС‡РєРё РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ РјРѕР¶РµС‚ СѓРІРёРґРµС‚СЊ Р·Р°РґРµСЂР¶РєСѓ РёР»Рё РЅРµРєРѕСЂСЂРµРєС‚РЅРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ async setup РїРѕРєР°Р·С‹РІР°РµС‚ РїРѕРЅРёРјР°РЅРёРµ Р°СЃРёРЅС…СЂРѕРЅРЅРѕСЃС‚Рё РІ lifecycle. Р’Р°Р¶РЅРѕ РЅРµ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РµРіРѕ РјРµС…Р°РЅРёС‡РµСЃРєРё РґР»СЏ Р»СЋР±РѕРіРѕ fetch.',
    codeExample: {
      language: 'vue',
      filename: 'AsyncProfile.vue',
      code: `<script setup lang="ts">
const profile = await fetchProfile()
</script>`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РґРµР»Р°С‚СЊ setup async Р±РµР· РѕР±СЂР°Р±РѕС‚РєРё loading Рё error СЃРѕСЃС‚РѕСЏРЅРёСЏ. РџРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёР№ СЃС†РµРЅР°СЂРёР№ РґРѕР»Р¶РµРЅ РѕСЃС‚Р°РІР°С‚СЊСЃСЏ РїСЂРµРґСЃРєР°Р·СѓРµРјС‹Рј.',
    interviewQuestions: createInterviewQuestions("Async setup", "Async"),
    remember:
      'Async setup С‚СЂРµР±СѓРµС‚ РїСЂРѕРґСѓРјР°РЅРЅРѕРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ Р·Р°РіСЂСѓР·РєРё РёР»Рё Suspense.',
  },
  {
    id: 'knowledge-lifecycle-q621',
    moduleId: 'lifecycle',
    questionId: 621,
    title: 'SSR Рё lifecycle hooks',
    category: 'SSR',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 РјРёРЅ',
    whatIsIt:
      'SSR РІС‹РїРѕР»РЅСЏРµС‚ СЂРµРЅРґРµСЂ РєРѕРјРїРѕРЅРµРЅС‚Р° РЅР° СЃРµСЂРІРµСЂРµ, РіРґРµ РЅРµС‚ browser DOM. РџРѕСЌС‚РѕРјСѓ DOM-Р·Р°РІРёСЃРёРјС‹Рµ lifecycle hooks РІСЂРѕРґРµ onMounted РЅРµ РІС‹РїРѕР»РЅСЏСЋС‚СЃСЏ РЅР° СЃРµСЂРІРµСЂРµ. РљРѕРґ СЃ window, document Рё layout measurements РґРѕР»Р¶РµРЅ Р±С‹С‚СЊ client-only.',
    whenToUse:
      'SSR-СЃРѕРІРјРµСЃС‚РёРјРѕСЃС‚СЊ РІР°Р¶РЅР° РІ Nuxt Рё server-rendered Vue-РїСЂРёР»РѕР¶РµРЅРёСЏС…. DOM-РёРЅС‚РµРіСЂР°С†РёРё СЂР°Р·РјРµС‰Р°СЋС‚ РІ onMounted РёР»Рё Р·Р°С‰РёС‰Р°СЋС‚ РїСЂРѕРІРµСЂРєРѕР№ СЃСЂРµРґС‹. Р—Р°РіСЂСѓР·РєСѓ РґР°РЅРЅС‹С… РґР»СЏ SSR РѕР±С‹С‡РЅРѕ СЂРµС€Р°СЋС‚ РѕС‚РґРµР»СЊРЅС‹РјРё РјРµС…Р°РЅРёР·РјР°РјРё С„СЂРµР№РјРІРѕСЂРєР°.',
    howItWorks:
      'РЎРµСЂРІРµСЂ СЃРѕР·РґР°С‘С‚ HTML Р±РµР· РґРѕСЃС‚СѓРїР° Рє browser APIs. РќР° РєР»РёРµРЅС‚Рµ РїСЂРѕРёСЃС…РѕРґРёС‚ hydration, Рё РїРѕСЃР»Рµ СЌС‚РѕРіРѕ РґРѕСЃС‚СѓРїРЅС‹ client lifecycle hooks. Р•СЃР»Рё setup РЅР°РїСЂСЏРјСѓСЋ РѕР±СЂР°С‰Р°РµС‚СЃСЏ Рє window, СЃРµСЂРІРµСЂРЅС‹Р№ СЂРµРЅРґРµСЂ РјРѕР¶РµС‚ СѓРїР°СЃС‚СЊ.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ SSR Рё lifecycle РїРѕРєР°Р·С‹РІР°СЋС‚ Р·СЂРµР»РѕСЃС‚СЊ: РєРѕРґ РґРѕР»Р¶РµРЅ СЂР°Р±РѕС‚Р°С‚СЊ РЅРµ С‚РѕР»СЊРєРѕ РІ Р±СЂР°СѓР·РµСЂРЅРѕРј SPA. Р­С‚Рѕ РѕСЃРѕР±РµРЅРЅРѕ РІР°Р¶РЅРѕ РґР»СЏ Nuxt Рё SEO-sensitive РїСЂРёР»РѕР¶РµРЅРёР№.',
    codeExample: {
      language: 'ts',
      filename: 'client-only.ts',
      code: `onMounted(() => {
  width.value = window.innerWidth
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РѕР±СЂР°С‰Р°С‚СЊСЃСЏ Рє window РІ setup Р±РµР· РїСЂРѕРІРµСЂРєРё СЃСЂРµРґС‹. Р’ SSR С‚Р°РєРѕРіРѕ РѕР±СЉРµРєС‚Р° РЅРµС‚.',
    interviewQuestions: createInterviewQuestions("SSR Рё lifecycle hooks", "SSR"),
    remember:
      'DOM Рё browser APIs РґРѕР»Р¶РЅС‹ Р¶РёС‚СЊ РІ client-only lifecycle РєРѕРґРµ.',
  },
  {
    id: 'knowledge-lifecycle-q622',
    moduleId: 'lifecycle',
    questionId: 622,
    title: 'Р¦РёРєР»С‹ РѕР±РЅРѕРІР»РµРЅРёР№',
    category: 'Pitfalls',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'Р¦РёРєР» РѕР±РЅРѕРІР»РµРЅРёР№ РІРѕР·РЅРёРєР°РµС‚, РєРѕРіРґР° РєРѕРґ РїРѕСЃР»Рµ update СЃРЅРѕРІР° РјРµРЅСЏРµС‚ state, РІС‹Р·С‹РІР°СЏ РЅРѕРІС‹Р№ update. РћСЃРѕР±РµРЅРЅРѕ Р»РµРіРєРѕ СЃРґРµР»Р°С‚СЊ СЌС‚Рѕ РІ onUpdated. Vue Р±СѓРґРµС‚ РѕР±РЅРѕРІР»СЏС‚СЊ DOM СЃРЅРѕРІР° Рё СЃРЅРѕРІР°, РµСЃР»Рё РЅРµС‚ СѓСЃР»РѕРІРёСЏ РѕСЃС‚Р°РЅРѕРІРєРё.',
    whenToUse:
      'Р•СЃР»Рё РЅСѓР¶РЅРѕ СЂРµР°РіРёСЂРѕРІР°С‚СЊ РЅР° РєРѕРЅРєСЂРµС‚РЅРѕРµ Р·РЅР°С‡РµРЅРёРµ, Р»СѓС‡С€Рµ watch. Р•СЃР»Рё РЅСѓР¶РЅРѕ РІС‹С‡РёСЃР»РёС‚СЊ Р·РЅР°С‡РµРЅРёРµ, Р»СѓС‡С€Рµ computed. onUpdated СЃС‚РѕРёС‚ РѕСЃС‚Р°РІР»СЏС‚СЊ РґР»СЏ СЂРµРґРєРёС… DOM-СЃРёРЅС…СЂРѕРЅРёР·Р°С†РёР№, РіРґРµ РЅРµРІРѕР·РјРѕР¶РЅРѕ СЂРµС€РёС‚СЊ Р·Р°РґР°С‡Сѓ РґРµРєР»Р°СЂР°С‚РёРІРЅРѕ.',
    howItWorks:
      'Reactive change Р·Р°РїСѓСЃРєР°РµС‚ render Рё DOM patch. РџРѕСЃР»Рµ patch РІС‹Р·С‹РІР°РµС‚СЃСЏ onUpdated. Р•СЃР»Рё hook РјРµРЅСЏРµС‚ reactive state, С†РёРєР» РЅР°С‡РёРЅР°РµС‚СЃСЏ Р·Р°РЅРѕРІРѕ.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ СЌС‚Рѕ РѕРґРёРЅ РёР· РіР»Р°РІРЅС‹С… lifecycle pitfalls. РҐРѕСЂРѕС€РёР№ РѕС‚РІРµС‚ РѕР±СЉСЏСЃРЅСЏРµС‚, РїРѕС‡РµРјСѓ side effects РґРѕР»Р¶РЅС‹ Р±С‹С‚СЊ РѕРіСЂР°РЅРёС‡РµРЅС‹ Рё СѓСЃР»РѕРІРЅС‹.',
    codeExample: {
      language: 'ts',
      filename: 'bad-updated.ts',
      code: `onUpdated(() => {
  // РћРїР°СЃРЅРѕ Р±РµР· СѓСЃР»РѕРІРёСЏ: РІС‹Р·РѕРІРµС‚ РЅРѕРІРѕРµ РѕР±РЅРѕРІР»РµРЅРёРµ.
  count.value += 1
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РёСЃРїСЂР°РІР»СЏС‚СЊ derived state РІРЅСѓС‚СЂРё onUpdated. Р”Р»СЏ СЌС‚РѕРіРѕ РЅСѓР¶РµРЅ computed РёР»Рё watch СЃ С‡С‘С‚РєРёРј РёСЃС‚РѕС‡РЅРёРєРѕРј.',
    interviewQuestions: createInterviewQuestions("Р¦РёРєР»С‹ РѕР±РЅРѕРІР»РµРЅРёР№", "Pitfalls"),
    remember:
      'РќРµ РјРµРЅСЏР№ state РІ onUpdated Р±РµР· СЃС‚СЂРѕРіРѕРіРѕ СѓСЃР»РѕРІРёСЏ.',
  },
  {
    id: 'knowledge-lifecycle-q623',
    moduleId: 'lifecycle',
    questionId: 623,
    title: 'Lifecycle РІ composables',
    category: 'Composables',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'Composable РјРѕР¶РµС‚ СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°С‚СЊ lifecycle hooks, РµСЃР»Рё РІС‹Р·С‹РІР°РµС‚СЃСЏ РІРЅСѓС‚СЂРё setup-РєРѕРЅС‚РµРєСЃС‚Р°. Р­С‚Рѕ РїРѕР·РІРѕР»СЏРµС‚ РёРЅРєР°РїСЃСѓР»РёСЂРѕРІР°С‚СЊ РЅРµ С‚РѕР»СЊРєРѕ state, РЅРѕ Рё cleanup РІРЅРµС€РЅРёС… СЂРµСЃСѓСЂСЃРѕРІ. РўР°РєРѕР№ composable СЃС‚Р°РЅРѕРІРёС‚СЃСЏ Р±РµР·РѕРїР°СЃРЅРµРµ РґР»СЏ РїРѕРІС‚РѕСЂРЅРѕРіРѕ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ.',
    whenToUse:
      'Lifecycle РІРЅСѓС‚СЂРё composable СѓРјРµСЃС‚РµРЅ РґР»СЏ listeners, timers, observers, media queries, storage subscriptions Рё DOM-РёРЅС‚РµРіСЂР°С†РёР№. Р•СЃР»Рё composable РЅРµ СЃРѕР·РґР°С‘С‚ РІРЅРµС€РЅРёС… СЂРµСЃСѓСЂСЃРѕРІ, hooks РјРѕРіСѓС‚ Р±С‹С‚СЊ РЅРµ РЅСѓР¶РЅС‹. Р’Р°Р¶РЅРѕ РґРѕРєСѓРјРµРЅС‚РёСЂРѕРІР°С‚СЊ РѕР¶РёРґР°РЅРёРµ РІС‹Р·РѕРІР° РІ setup.',
    howItWorks:
      'Composable РІС‹Р·С‹РІР°РµС‚ onMounted, onUnmounted РёР»Рё РґСЂСѓРіРёРµ hooks. Vue РїСЂРёРІСЏР·С‹РІР°РµС‚ РёС… Рє С‚РµРєСѓС‰РµРјСѓ РєРѕРјРїРѕРЅРµРЅС‚РЅРѕРјСѓ СЌРєР·РµРјРїР»СЏСЂСѓ. РџСЂРё unmount РєРѕРјРїРѕРЅРµРЅС‚Р° cleanup РІС‹РїРѕР»РЅРёС‚СЃСЏ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ СЌС‚Рѕ РїРѕРєР°Р·С‹РІР°РµС‚ Р·СЂРµР»СѓСЋ Р°СЂС…РёС‚РµРєС‚СѓСЂСѓ Composition API. РџРѕРІС‚РѕСЂСЏРµРјС‹Р№ lifecycle-СЃС†РµРЅР°СЂРёР№ Р»СѓС‡С€Рµ РІС‹РЅРµСЃС‚Рё РІРјРµСЃС‚Рµ СЃ cleanup, Р° РЅРµ РєРѕРїРёСЂРѕРІР°С‚СЊ РїРѕ РєРѕРјРїРѕРЅРµРЅС‚Р°Рј.',
    codeExample: {
      language: 'ts',
      filename: 'useWindowSize.ts',
      code: `export const useWindowSize = () => {
  const width = ref(0)
  const update = () => { width.value = window.innerWidth }

  onMounted(() => window.addEventListener('resize', update))
  onUnmounted(() => window.removeEventListener('resize', update))

  return { width }
}`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РІС‹РЅРµСЃС‚Рё listener РІ composable, РЅРѕ РѕСЃС‚Р°РІРёС‚СЊ cleanup РІ РєРѕРјРїРѕРЅРµРЅС‚Рµ. РўРѕРіРґР° Р»РµРіРєРѕ Р·Р°Р±С‹С‚СЊ РѕС‡РёСЃС‚РєСѓ РїСЂРё РїРѕРІС‚РѕСЂРЅРѕРј РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРё.',
    interviewQuestions: createInterviewQuestions("Lifecycle РІ composables", "Composables"),
    remember:
      'Composable, СЃРѕР·РґР°СЋС‰РёР№ СЂРµСЃСѓСЂСЃ, РґРѕР»Р¶РµРЅ РёРЅРєР°РїСЃСѓР»РёСЂРѕРІР°С‚СЊ cleanup.',
  },
  {
    id: 'knowledge-lifecycle-q624',
    moduleId: 'lifecycle',
    questionId: 624,
    title: 'Watcher cleanup',
    category: 'Watchers',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 РјРёРЅ',
    whatIsIt:
      'Watcher cleanup вЂ” С„СѓРЅРєС†РёСЏ РѕС‡РёСЃС‚РєРё, РєРѕС‚РѕСЂР°СЏ РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ РїРµСЂРµРґ СЃР»РµРґСѓСЋС‰РёРј Р·Р°РїСѓСЃРєРѕРј watcher РёР»Рё РїСЂРё РѕСЃС‚Р°РЅРѕРІРєРµ СЌС„С„РµРєС‚Р°. РћРЅР° РЅСѓР¶РЅР° РґР»СЏ РѕС‚РјРµРЅС‹ СѓСЃС‚Р°СЂРµРІС€РёС… async operations, listeners Рё РІСЂРµРјРµРЅРЅС‹С… СЂРµСЃСѓСЂСЃРѕРІ, СЃРѕР·РґР°РЅРЅС‹С… РІРЅСѓС‚СЂРё watcher.',
    whenToUse:
      'Cleanup РЅСѓР¶РµРЅ, РєРѕРіРґР° watcher Р·Р°РїСѓСЃРєР°РµС‚ Р·Р°РїСЂРѕСЃ, РїРѕРґРїРёСЃРєСѓ, timeout РёР»Рё РґСЂСѓРіРѕР№ side effect, Р·Р°РІРёСЃСЏС‰РёР№ РѕС‚ С‚РµРєСѓС‰РµРіРѕ Р·РЅР°С‡РµРЅРёСЏ. Р•СЃР»Рё Р·РЅР°С‡РµРЅРёРµ Р±С‹СЃС‚СЂРѕ РјРµРЅСЏРµС‚СЃСЏ, РїСЂРµРґС‹РґСѓС‰РёР№ СЌС„С„РµРєС‚ РјРѕР¶РµС‚ СѓСЃС‚Р°СЂРµС‚СЊ. Cleanup РїСЂРµРґРѕС‚РІСЂР°С‰Р°РµС‚ race conditions.',
    howItWorks:
      'Р’ callback watcher РґРѕСЃС‚СѓРїРµРЅ РјРµС…Р°РЅРёР·Рј СЂРµРіРёСЃС‚СЂР°С†РёРё cleanup. РџРµСЂРµРґ СЃР»РµРґСѓСЋС‰РёРј Р·Р°РїСѓСЃРєРѕРј Vue РІС‹Р·РѕРІРµС‚ cleanup РїСЂРµРґС‹РґСѓС‰РµРіРѕ СЌС„С„РµРєС‚Р°. РўР°Рє РјРѕР¶РЅРѕ РѕС‚РјРµРЅРёС‚СЊ AbortController РёР»Рё РѕС‚РјРµС‚РёС‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚ СѓСЃС‚Р°СЂРµРІС€РёРј.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ СЌС‚Р° С‚РµРјР° РїРѕРєР°Р·С‹РІР°РµС‚ РїРѕРЅРёРјР°РЅРёРµ Р°СЃРёРЅС…СЂРѕРЅРЅС‹С… РіРѕРЅРѕРє. РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂРѕСЃС‚Рѕ РІС‹Р·РІР°С‚СЊ fetch РІ watch; РЅСѓР¶РЅРѕ СѓС‡РёС‚С‹РІР°С‚СЊ, С‡С‚Рѕ РѕС‚РІРµС‚С‹ РјРѕРіСѓС‚ РїСЂРёР№С‚Рё РЅРµ РїРѕ РїРѕСЂСЏРґРєСѓ.',
    codeExample: {
      language: 'ts',
      filename: 'watch-cleanup.ts',
      code: `watch(query, async (value, _, onCleanup) => {
  const controller = new AbortController()
  onCleanup(() => controller.abort())

  results.value = await search(value, controller.signal)
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РЅРµ РѕС‚РјРµРЅСЏС‚СЊ СЃС‚Р°СЂС‹Р№ async effect. РњРµРґР»РµРЅРЅС‹Р№ СЃС‚Р°СЂС‹Р№ РѕС‚РІРµС‚ РјРѕР¶РµС‚ РїРµСЂРµР·Р°РїРёСЃР°С‚СЊ РЅРѕРІС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚.',
    interviewQuestions: createInterviewQuestions("Watcher cleanup", "Watchers"),
    remember:
      'Watcher cleanup Р·Р°С‰РёС‰Р°РµС‚ РѕС‚ СѓСЃС‚Р°СЂРµРІС€РёС… side effects.',
  },
  {
    id: 'knowledge-lifecycle-q625',
    moduleId: 'lifecycle',
    questionId: 625,
    title: 'Р—Р°РіСЂСѓР·РєР° РґР°РЅРЅС‹С… РІ lifecycle',
    category: 'Data Fetching',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 РјРёРЅ',
    whatIsIt:
      'Р—Р°РіСЂСѓР·РєР° РґР°РЅРЅС‹С… РІ lifecycle вЂ” С‡Р°СЃС‚С‹Р№ СЃС†РµРЅР°СЂРёР№, РЅРѕ onMounted РЅРµ РІСЃРµРіРґР° СЏРІР»СЏРµС‚СЃСЏ РµРґРёРЅСЃС‚РІРµРЅРЅС‹Рј РїСЂР°РІРёР»СЊРЅС‹Рј РјРµСЃС‚РѕРј. РќСѓР¶РЅРѕ СѓС‡РёС‚С‹РІР°С‚СЊ SSR, РїРѕРІС‚РѕСЂРЅС‹Рµ Р·Р°С…РѕРґС‹, loading, error, РѕС‚РјРµРЅСѓ Р·Р°РїСЂРѕСЃРѕРІ Рё РєРµС€РёСЂРѕРІР°РЅРёРµ. РЎР°Рј hook РЅРµ СЂРµС€Р°РµС‚ Р°СЂС…РёС‚РµРєС‚СѓСЂСѓ РґР°РЅРЅС‹С….',
    whenToUse:
      'onMounted РїРѕРґС…РѕРґРёС‚ РґР»СЏ client-only Р·Р°РіСЂСѓР·РєРё, РєРѕС‚РѕСЂР°СЏ РЅРµ РЅСѓР¶РЅР° СЃРµСЂРІРµСЂРЅРѕРјСѓ HTML. Р”Р»СЏ SSR РёР»Рё route-level РґР°РЅРЅС‹С… С‡Р°СЃС‚Рѕ РёСЃРїРѕР»СЊР·СѓСЋС‚ РјРµС…Р°РЅРёР·РјС‹ С„СЂРµР№РјРІРѕСЂРєР°. Р”Р»СЏ РїРѕРІС‚РѕСЂСЏРµРјС‹С… Р·Р°РїСЂРѕСЃРѕРІ Р»СѓС‡С€Рµ composable СЃ СЃРѕСЃС‚РѕСЏРЅРёСЏРјРё Рё cleanup.',
    howItWorks:
      'РљРѕРјРїРѕРЅРµРЅС‚ Р·Р°РїСѓСЃРєР°РµС‚ async function, РІС‹СЃС‚Р°РІР»СЏРµС‚ loading, РѕР±СЂР°Р±Р°С‚С‹РІР°РµС‚ error Рё СЃРѕС…СЂР°РЅСЏРµС‚ СЂРµР·СѓР»СЊС‚Р°С‚. Р•СЃР»Рё РєРѕРјРїРѕРЅРµРЅС‚ РјРѕР¶РµС‚ РёСЃС‡РµР·РЅСѓС‚СЊ РґРѕ Р·Р°РІРµСЂС€РµРЅРёСЏ Р·Р°РїСЂРѕСЃР°, РЅСѓР¶РЅР° РѕС‚РјРµРЅР° РёР»Рё РїСЂРѕРІРµСЂРєР° Р°РєС‚СѓР°Р»СЊРЅРѕСЃС‚Рё.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ РІР°Р¶РЅРѕ РЅРµ РѕС‚РІРµС‡Р°С‚СЊ "fetch РІСЃРµРіРґР° РІ mounted". Р—СЂРµР»С‹Р№ РѕС‚РІРµС‚ РѕР±СЃСѓР¶РґР°РµС‚ РєРѕРЅС‚РµРєСЃС‚: SPA, SSR, РєРµС€, UX Рё РѕС€РёР±РєРё.',
    codeExample: {
      language: 'ts',
      filename: 'load-on-mounted.ts',
      code: `onMounted(async () => {
  isLoading.value = true
  try {
    data.value = await loadData()
  } finally {
    isLoading.value = false
  }
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” Р·Р°РїСѓСЃРєР°С‚СЊ Р·Р°РїСЂРѕСЃ Р±РµР· РѕР±СЂР°Р±РѕС‚РєРё error Рё loading. РџРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёР№ РёРЅС‚РµСЂС„РµР№СЃ РґРѕР»Р¶РµРЅ РёРјРµС‚СЊ РїРѕРЅСЏС‚РЅС‹Рµ СЃРѕСЃС‚РѕСЏРЅРёСЏ.',
    interviewQuestions: createInterviewQuestions("Р—Р°РіСЂСѓР·РєР° РґР°РЅРЅС‹С… РІ lifecycle", "Data Fetching"),
    remember:
      'Data fetching РІ lifecycle С‚СЂРµР±СѓРµС‚ Р°СЂС…РёС‚РµРєС‚СѓСЂС‹, Р° РЅРµ С‚РѕР»СЊРєРѕ РІС‹Р±РѕСЂР° hook.',
  },
  {
    id: 'knowledge-lifecycle-q626',
    moduleId: 'lifecycle',
    questionId: 626,
    title: 'Ownership СЂРµСЃСѓСЂСЃРѕРІ',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'Ownership СЂРµСЃСѓСЂСЃРѕРІ РѕР·РЅР°С‡Р°РµС‚, С‡С‚Рѕ РєРѕРґ, РєРѕС‚РѕСЂС‹Р№ СЃРѕР·РґР°С‘С‚ РІРЅРµС€РЅРёР№ СЂРµСЃСѓСЂСЃ, РѕС‚РІРµС‡Р°РµС‚ Р·Р° РµРіРѕ РѕС‡РёСЃС‚РєСѓ. Р РµСЃСѓСЂСЃРѕРј РјРѕР¶РµС‚ Р±С‹С‚СЊ listener, timer, observer, subscription, WebSocket РёР»Рё instance СЃС‚РѕСЂРѕРЅРЅРµР№ Р±РёР±Р»РёРѕС‚РµРєРё. Р­С‚Рѕ РїСЂР°РІРёР»Рѕ РґРµР»Р°РµС‚ lifecycle-РїРѕРІРµРґРµРЅРёРµ РїСЂРµРґСЃРєР°Р·СѓРµРјС‹Рј.',
    whenToUse:
      'РџСЂРёРЅС†РёРї РїСЂРёРјРµРЅРёРј РєРѕ РІСЃРµРј side effects. Р•СЃР»Рё СЂРµСЃСѓСЂСЃ СЃРѕР·РґР°С‘С‚ РєРѕРјРїРѕРЅРµРЅС‚, cleanup РґРѕР»Р¶РµРЅ Р±С‹С‚СЊ СЂСЏРґРѕРј РІ РєРѕРјРїРѕРЅРµРЅС‚Рµ РёР»Рё composable. Р•СЃР»Рё СЂРµСЃСѓСЂСЃ СЃРѕР·РґР°С‘С‚ store РёР»Рё СЃРµСЂРІРёСЃ, cleanup РґРѕР»Р¶РµРЅ Р±С‹С‚СЊ С‚Р°Рј.',
    howItWorks:
      'РЎРѕР·РґР°РЅРёРµ Рё РѕС‡РёСЃС‚РєР° СЂР°Р·РјРµС‰Р°СЋС‚СЃСЏ СЂСЏРґРѕРј Р»РѕРіРёС‡РµСЃРєРё. Р­С‚Рѕ РјРѕР¶РµС‚ Р±С‹С‚СЊ onMounted/onUnmounted, onActivated/onDeactivated РёР»Рё watcher cleanup. РўР°РєРѕР№ РєРѕРґ РїСЂРѕС‰Рµ СЂРµРІСЊСЋРёС‚СЊ Рё С‚РµСЃС‚РёСЂРѕРІР°С‚СЊ.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ ownership РїРѕРјРѕРіР°РµС‚ РѕР±СЉСЏСЃРЅРёС‚СЊ РЅРµ С‚РѕР»СЊРєРѕ РєРѕРЅРєСЂРµС‚РЅС‹Рµ hooks, РЅРѕ Рё РёРЅР¶РµРЅРµСЂРЅРѕРµ РјС‹С€Р»РµРЅРёРµ. РЈС‚РµС‡РєРё С‡Р°СЃС‚Рѕ РїРѕСЏРІР»СЏСЋС‚СЃСЏ С‚Р°Рј, РіРґРµ РЅРµРїРѕРЅСЏС‚РЅРѕ, РєС‚Рѕ РІР»Р°РґРµРµС‚ СЂРµСЃСѓСЂСЃРѕРј.',
    codeExample: {
      language: 'ts',
      filename: 'resource-owner.ts',
      code: `const observer = new ResizeObserver(updateSize)
observer.observe(element)

onUnmounted(() => observer.disconnect())`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” СЃРѕР·РґР°РІР°С‚СЊ СЂРµСЃСѓСЂСЃ РІ composable, Р° РѕС‡РёС‰Р°С‚СЊ РІ СЃР»СѓС‡Р°Р№РЅРѕРј РєРѕРјРїРѕРЅРµРЅС‚Рµ. РўР°РєРѕР№ РєРѕРЅС‚СЂР°РєС‚ Р»РµРіРєРѕ РЅР°СЂСѓС€РёС‚СЊ.',
    interviewQuestions: createInterviewQuestions("Ownership СЂРµСЃСѓСЂСЃРѕРІ", "Architecture"),
    remember:
      'РљС‚Рѕ СЃРѕР·РґР°Р» СЂРµСЃСѓСЂСЃ, С‚РѕС‚ РґРѕР»Р¶РµРЅ РѕСЂРіР°РЅРёР·РѕРІР°С‚СЊ РµРіРѕ cleanup.',
  },
  {
    id: 'knowledge-lifecycle-q627',
    moduleId: 'lifecycle',
    questionId: 627,
    title: 'РРЅС‚РµРіСЂР°С†РёСЏ DOM-Р±РёР±Р»РёРѕС‚РµРє',
    category: 'DOM',
    rarity: 'rare',
    interviewLevel: 'middle',
    readingTime: '5 РјРёРЅ',
    whatIsIt:
      'РРЅС‚РµРіСЂР°С†РёСЏ DOM-Р±РёР±Р»РёРѕС‚РµРєРё вЂ” РїРѕРґРєР»СЋС‡РµРЅРёРµ РІРЅРµС€РЅРµРіРѕ РєРѕРґР°, РєРѕС‚РѕСЂРѕРјСѓ РЅСѓР¶РµРЅ СЂРµР°Р»СЊРЅС‹Р№ DOM-СЌР»РµРјРµРЅС‚. Р­С‚Рѕ РјРѕРіСѓС‚ Р±С‹С‚СЊ charts, editors, maps, sliders РёР»Рё canvas-Р±РёР±Р»РёРѕС‚РµРєРё. Vue РґРѕР»Р¶РµРЅ РѕС‚РґР°С‚СЊ СЌР»РµРјРµРЅС‚ С‡РµСЂРµР· template ref РїРѕСЃР»Рµ mount.',
    whenToUse:
      'РўР°РєСѓСЋ РёРЅС‚РµРіСЂР°С†РёСЋ РґРµР»Р°СЋС‚, РєРѕРіРґР° Р±РёР±Р»РёРѕС‚РµРєР° РЅРµ РёРјРµРµС‚ native Vue-РѕР±С‘СЂС‚РєРё РёР»Рё РЅСѓР¶РµРЅ РЅРёР·РєРѕСѓСЂРѕРІРЅРµРІС‹Р№ РєРѕРЅС‚СЂРѕР»СЊ. РРЅРёС†РёР°Р»РёР·Р°С†РёСЋ РІС‹РїРѕР»РЅСЏСЋС‚ РІ onMounted, РѕР±РЅРѕРІР»РµРЅРёСЏ СЃРёРЅС…СЂРѕРЅРёР·РёСЂСѓСЋС‚ С‡РµСЂРµР· watch, cleanup РґРµР»Р°СЋС‚ РІ onUnmounted.',
    howItWorks:
      'РљРѕРјРїРѕРЅРµРЅС‚ РїРѕР»СѓС‡Р°РµС‚ DOM ref, СЃРѕР·РґР°С‘С‚ instance Р±РёР±Р»РёРѕС‚РµРєРё Рё СЃРѕС…СЂР°РЅСЏРµС‚ СЃСЃС‹Р»РєСѓ. РџСЂРё РёР·РјРµРЅРµРЅРёРё props РјРѕР¶РЅРѕ РІС‹Р·РІР°С‚СЊ update API Р±РёР±Р»РёРѕС‚РµРєРё. РџСЂРё unmount РЅСѓР¶РЅРѕ РІС‹Р·РІР°С‚СЊ destroy/dispose/remove.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ СЌС‚Рѕ РїСЂР°РєС‚РёС‡РµСЃРєРёР№ СЃС†РµРЅР°СЂРёР№, РіРґРµ lifecycle РґРµР№СЃС‚РІРёС‚РµР»СЊРЅРѕ РЅСѓР¶РµРЅ. Р’Р°Р¶РЅРѕ РїРѕРєР°Р·Р°С‚СЊ РїРѕР»РЅС‹Р№ С†РёРєР»: init, update, destroy.',
    codeExample: {
      language: 'ts',
      filename: 'chart-integration.ts',
      code: `let chart: Chart | null = null

onMounted(() => {
  chart = new Chart(canvasEl.value!)
})

onUnmounted(() => {
  chart?.destroy()
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РёРЅРёС†РёР°Р»РёР·РёСЂРѕРІР°С‚СЊ DOM-Р±РёР±Р»РёРѕС‚РµРєСѓ РІ setup. Р­Р»РµРјРµРЅС‚ РµС‰С‘ РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚, Рё Р±РёР±Р»РёРѕС‚РµРєР° РїРѕР»СѓС‡РёС‚ null.',
    interviewQuestions: createInterviewQuestions("РРЅС‚РµРіСЂР°С†РёСЏ DOM-Р±РёР±Р»РёРѕС‚РµРє", "DOM"),
    remember:
      'DOM-Р±РёР±Р»РёРѕС‚РµРєР° С‚СЂРµР±СѓРµС‚ mount РґР»СЏ init Рё unmount РґР»СЏ destroy.',
  },
  {
    id: 'knowledge-lifecycle-q628',
    moduleId: 'lifecycle',
    questionId: 628,
    title: 'Side effects Рё computed',
    category: 'Best Practices',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'Side effect вЂ” РґРµР№СЃС‚РІРёРµ, РєРѕС‚РѕСЂРѕРµ РІР»РёСЏРµС‚ РЅР° РІРЅРµС€РЅРёР№ РјРёСЂ РёР»Рё СЃРѕСЃС‚РѕСЏРЅРёРµ РІРЅРµ С‡РёСЃС‚РѕРіРѕ РІС‹С‡РёСЃР»РµРЅРёСЏ. Р­С‚Рѕ Р·Р°РїСЂРѕСЃС‹, Р·Р°РїРёСЃРё РІ storage, DOM-РѕРїРµСЂР°С†РёРё, timers Рё emits. Computed РґРѕР»Р¶РµРЅ РѕСЃС‚Р°РІР°С‚СЊСЃСЏ С‡РёСЃС‚С‹Рј derived value.',
    whenToUse:
      'Side effects СЂР°Р·РјРµС‰Р°СЋС‚ РІ lifecycle hooks, watch РёР»Рё СЏРІРЅС‹С… event handlers. Computed РёСЃРїРѕР»СЊР·СѓСЋС‚ РґР»СЏ РїСЂРѕРёР·РІРѕРґРЅС‹С… Р·РЅР°С‡РµРЅРёР№. Р•СЃР»Рё СЌС„С„РµРєС‚ Р·Р°РІРёСЃРёС‚ РѕС‚ РёР·РјРµРЅРµРЅРёСЏ РєРѕРЅРєСЂРµС‚РЅРѕРіРѕ source, watch РѕР±С‹С‡РЅРѕ С‚РѕС‡РЅРµРµ lifecycle hook.',
    howItWorks:
      'Computed РєРµС€РёСЂСѓРµС‚ СЂРµР·СѓР»СЊС‚Р°С‚ getter РїРѕ Р·Р°РІРёСЃРёРјРѕСЃС‚СЏРј. Р•СЃР»Рё getter РјРµРЅСЏРµС‚ state РёР»Рё Р·Р°РїСѓСЃРєР°РµС‚ РІРЅРµС€РЅРёРµ РґРµР№СЃС‚РІРёСЏ, РєРµС€РёСЂРѕРІР°РЅРёРµ Рё РїРѕСЂСЏРґРѕРє РІС‹РїРѕР»РЅРµРЅРёСЏ СЃС‚Р°РЅРѕРІСЏС‚СЃСЏ РЅРµРїСЂРµРґСЃРєР°Р·СѓРµРјС‹РјРё. Watch СЏРІРЅРѕ РјРѕРґРµР»РёСЂСѓРµС‚ side effect.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ СЌС‚Рѕ РїРѕРєР°Р·С‹РІР°РµС‚ РїРѕРЅРёРјР°РЅРёРµ СЂРµР°РєС‚РёРІРЅРѕР№ РјРѕРґРµР»Рё. Р§РёСЃС‚С‹Рµ computed Р»РµРіС‡Рµ С‚РµСЃС‚РёСЂРѕРІР°С‚СЊ Рё Р±РµР·РѕРїР°СЃРЅРµРµ С‡РёС‚Р°С‚СЊ.',
    codeExample: {
      language: 'ts',
      filename: 'watch-side-effect.ts',
      code: `watch(isOpen, (value) => {
  document.body.classList.toggle('modal-open', value)
})`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РґРµР»Р°С‚СЊ HTTP-Р·Р°РїСЂРѕСЃ РІРЅСѓС‚СЂРё computed. Р—Р°РїСЂРѕСЃ СЏРІР»СЏРµС‚СЃСЏ side effect Рё РґРѕР»Р¶РµРЅ Р±С‹С‚СЊ РІС‹РЅРµСЃРµРЅ.',
    interviewQuestions: createInterviewQuestions("Side effects Рё computed", "Best Practices"),
    remember:
      'Computed РІС‹С‡РёСЃР»СЏРµС‚, watch Рё lifecycle РІС‹РїРѕР»РЅСЏСЋС‚ side effects.',
  },
  {
    id: 'knowledge-lifecycle-q629',
    moduleId: 'lifecycle',
    questionId: 629,
    title: 'РџРѕСЂСЏРґРѕРє РїРµСЂРІРѕРіРѕ render',
    category: 'Lifecycle',
    rarity: 'common',
    interviewLevel: 'junior',
    readingTime: '4 РјРёРЅ',
    whatIsIt:
      'РџРµСЂРІС‹Р№ client-side render РїСЂРѕС…РѕРґРёС‚ С‡РµСЂРµР· РїРѕРґРіРѕС‚РѕРІРєСѓ setup, before mount, РІСЃС‚Р°РІРєСѓ DOM Рё mounted. РќР° СЂР°РЅРЅРёС… СЌС‚Р°РїР°С… DOM РµС‰С‘ РЅРµРґРѕСЃС‚СѓРїРµРЅ. РџРѕСЃР»Рµ mounted РјРѕР¶РЅРѕ СЂР°Р±РѕС‚Р°С‚СЊ СЃ template refs.',
    whenToUse:
      'Р—РЅР°РЅРёРµ РїРѕСЂСЏРґРєР° РЅСѓР¶РЅРѕ РґР»СЏ РІС‹Р±РѕСЂР° РїСЂР°РІРёР»СЊРЅРѕРіРѕ РјРµСЃС‚Р° РєРѕРґР°. State Рё computed СЃРѕР·РґР°СЋС‚ РІ setup, DOM-РёРЅС‚РµРіСЂР°С†РёРё вЂ” РІ onMounted, cleanup вЂ” РІ onUnmounted. Р”Р»СЏ РѕР±РЅРѕРІР»РµРЅРёР№ РёСЃРїРѕР»СЊР·СѓСЋС‚СЃСЏ update hooks РёР»Рё watch.',
    howItWorks:
      'Vue СЃРѕР·РґР°С‘С‚ РєРѕРјРїРѕРЅРµРЅС‚, РІС‹РїРѕР»РЅСЏРµС‚ setup, РїРѕРґРіРѕС‚Р°РІР»РёРІР°РµС‚ render, РјРѕРЅС‚РёСЂСѓРµС‚ DOM Рё РІС‹Р·С‹РІР°РµС‚ mounted hooks. Р”Р°Р»СЊС€Рµ reactive changes Р·Р°РїСѓСЃРєР°СЋС‚ update cycle. РџСЂРё СѓРґР°Р»РµРЅРёРё СЃСЂР°Р±Р°С‚С‹РІР°РµС‚ unmount cycle.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ РїРѕСЂСЏРґРѕРє lifecycle РїРѕРјРѕРіР°РµС‚ РѕС‚РІРµС‚РёС‚СЊ РЅР° РІРѕРїСЂРѕСЃС‹ Рѕ DOM, refs, async Рё cleanup. Р­С‚Рѕ РјРµРЅС‚Р°Р»СЊРЅР°СЏ РјРѕРґРµР»СЊ, Р° РЅРµ РїСЂРѕСЃС‚Рѕ СЃРїРёСЃРѕРє hooks.',
    codeExample: {
      language: 'ts',
      filename: 'mount-order.ts',
      code: `const steps: string[] = ['setup']
onBeforeMount(() => steps.push('before mount'))
onMounted(() => steps.push('mounted'))`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РѕР¶РёРґР°С‚СЊ, С‡С‚Рѕ onMounted РІС‹РїРѕР»РЅРёС‚СЃСЏ РґРѕ setup. setup РІСЃРµРіРґР° РіРѕС‚РѕРІРёС‚ РєРѕРјРїРѕРЅРµРЅС‚ СЂР°РЅСЊС€Рµ mounted.',
    interviewQuestions: createInterviewQuestions("РџРѕСЂСЏРґРѕРє РїРµСЂРІРѕРіРѕ render", "Lifecycle"),
    remember:
      'РЎРЅР°С‡Р°Р»Р° setup, Р·Р°С‚РµРј mount-РїРѕРґРіРѕС‚РѕРІРєР°, Р·Р°С‚РµРј DOM, Р·Р°С‚РµРј onMounted.',
  },
  {
    id: 'knowledge-lifecycle-q630',
    moduleId: 'lifecycle',
    questionId: 630,
    title: 'РђСЂС…РёС‚РµРєС‚СѓСЂР° lifecycle effects',
    category: 'Architecture',
    rarity: 'epic',
    interviewLevel: 'middle',
    readingTime: '5 РјРёРЅ',
    whatIsIt:
      'РђСЂС…РёС‚РµРєС‚СѓСЂР° lifecycle effects вЂ” СЃРїРѕСЃРѕР± РѕСЂРіР°РЅРёР·РѕРІР°С‚СЊ side effects С‚Р°Рє, С‡С‚РѕР±С‹ РєРѕРјРїРѕРЅРµРЅС‚ РѕСЃС‚Р°РІР°Р»СЃСЏ С‡РёС‚Р°РµРјС‹Рј. РќРµСЃРІСЏР·Р°РЅРЅС‹Рµ listeners, timers, fetches Рё DOM-РёРЅС‚РµРіСЂР°С†РёРё РЅРµ РґРѕР»Р¶РЅС‹ Р»РµР¶Р°С‚СЊ РѕРґРЅРѕР№ Р±РѕР»СЊС€РѕР№ РєСѓС‡РµР№. РС… Р»СѓС‡С€Рµ РіСЂСѓРїРїРёСЂРѕРІР°С‚СЊ РїРѕ РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚Рё.',
    whenToUse:
      'Р•СЃР»Рё РєРѕРјРїРѕРЅРµРЅС‚ СЃРѕРґРµСЂР¶РёС‚ РЅРµСЃРєРѕР»СЊРєРѕ РЅРµР·Р°РІРёСЃРёРјС‹С… lifecycle-СЃС†РµРЅР°СЂРёРµРІ, СЃС‚РѕРёС‚ РІС‹РґРµР»РёС‚СЊ composables: useWindowSize, usePolling, useFocusTrap, useChart. Р•СЃР»Рё СЌС„С„РµРєС‚ СѓРЅРёРєР°Р»РµРЅ Рё РєРѕСЂРѕС‚РєРёР№, РѕРЅ РјРѕР¶РµС‚ РѕСЃС‚Р°С‚СЊСЃСЏ РІ РєРѕРјРїРѕРЅРµРЅС‚Рµ. Р‘Р°Р»Р°РЅСЃ РІР°Р¶РЅРµРµ РјРµС…Р°РЅРёС‡РµСЃРєРѕР№ РґРµРєРѕРјРїРѕР·РёС†РёРё.',
    howItWorks:
      'РљР°Р¶РґС‹Р№ composable РёРЅРєР°РїСЃСѓР»РёСЂСѓРµС‚ state, Р·Р°РїСѓСЃРє СЌС„С„РµРєС‚Р° Рё cleanup. РљРѕРјРїРѕРЅРµРЅС‚ РІС‹Р·С‹РІР°РµС‚ composables Рё СЃРѕР±РёСЂР°РµС‚ UI. РўР°РєРѕР№ РїРѕРґС…РѕРґ СѓРїСЂРѕС‰Р°РµС‚ С‚РµСЃС‚РёСЂРѕРІР°РЅРёРµ Рё РїРѕРІС‚РѕСЂРЅРѕРµ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ.',
    whyImportant:
      'РќР° РёРЅС‚РµСЂРІСЊСЋ СЌС‚Рѕ РїРѕРєР°Р·С‹РІР°РµС‚ senior-level РјС‹С€Р»РµРЅРёРµ. Р—РЅР°РЅРёРµ hooks РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ; РЅСѓР¶РЅРѕ СѓРјРµС‚СЊ РЅРµ РїСЂРµРІСЂР°С‚РёС‚СЊ РєРѕРјРїРѕРЅРµРЅС‚ РІ РЅР°Р±РѕСЂ РЅРµСЃРІСЏР·Р°РЅРЅС‹С… side effects.',
    codeExample: {
      language: 'ts',
      filename: 'component-effects.ts',
      code: `const { width } = useWindowSize()
const { start, stop } = usePolling(loadData)
const { focusFirst } = useFocusTrap(dialogEl)`,
    },
    commonMistake:
      'РћС€РёР±РєР° вЂ” РѕР±СЉРµРґРёРЅСЏС‚СЊ РІСЃСЋ lifecycle-Р»РѕРіРёРєСѓ РІ РѕРґРёРЅ РѕРіСЂРѕРјРЅС‹Р№ onMounted Рё РѕРґРёРЅ РѕРіСЂРѕРјРЅС‹Р№ onUnmounted. РЎРІСЏР·Рё РјРµР¶РґСѓ СЂРµСЃСѓСЂСЃР°РјРё СЃС‚Р°РЅРѕРІСЏС‚СЃСЏ РЅРµРѕС‡РµРІРёРґРЅС‹РјРё.',
    interviewQuestions: createInterviewQuestions("РђСЂС…РёС‚РµРєС‚СѓСЂР° lifecycle effects", "Architecture"),
    remember:
      'Lifecycle effects РЅСѓР¶РЅРѕ РіСЂСѓРїРїРёСЂРѕРІР°С‚СЊ РїРѕ РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚Рё Рё РІС‹РЅРѕСЃРёС‚СЊ РїРѕРІС‚РѕСЂСЏРµРјС‹Рµ СЃС†РµРЅР°СЂРёРё.',
  },
]
