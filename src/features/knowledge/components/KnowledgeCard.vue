<script setup lang="ts">
import { computed } from 'vue'
import { CodeBlock } from '../../../components/code'
import { BaseBadge, BaseCard } from '../../../components/ui'
import type { KnowledgeCard } from '../../../types/knowledge'

interface Props {
  card: KnowledgeCard
}

const props = defineProps<Props>()

const rarityVariant = computed(() => {
  const variants: Record<KnowledgeCard['rarity'], 'primary' | 'success' | 'warning' | 'danger'> = {
    common: 'primary',
    rare: 'success',
    epic: 'warning',
    legendary: 'danger',
  }

  return variants[props.card.rarity]
})

const rarityClasses = computed(() => {
  const classes: Record<KnowledgeCard['rarity'], string> = {
    common: 'border-[rgba(0,255,177,0.48)] shadow-[0_0_22px_rgba(0,255,177,0.18)]',
    rare: 'border-[rgba(93,255,79,0.58)] shadow-[0_0_24px_rgba(93,255,79,0.2)]',
    epic: 'border-[rgba(255,216,77,0.62)] shadow-[0_0_26px_rgba(255,216,77,0.2)]',
    legendary: 'border-[rgba(229,0,255,0.68)] shadow-[0_0_30px_rgba(229,0,255,0.26)]',
  }

  return classes[props.card.rarity]
})
</script>

<template>
  <BaseCard class="knowledge-card grid gap-6 p-5 md:p-6" :class="rarityClasses">
    <header class="grid gap-4">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <BaseBadge variant="warning">Knowledge Unlocked</BaseBadge>
        <div class="flex flex-wrap gap-2">
          <BaseBadge :variant="rarityVariant">{{ card.rarity }}</BaseBadge>
          <BaseBadge variant="neutral">{{ card.interviewLevel }}</BaseBadge>
          <BaseBadge variant="primary">{{ card.readingTime }}</BaseBadge>
        </div>
      </div>

      <div>
        <p class="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">{{ card.category }}</p>
        <h4 class="pixel-title mt-3 text-2xl text-white">{{ card.title }}</h4>
      </div>
    </header>

    <div class="grid gap-5">
      <section class="knowledge-section">
        <h5>Что это</h5>
        <p>{{ card.whatIsIt }}</p>
      </section>

      <section class="knowledge-section">
        <h5>Когда использовать</h5>
        <p>{{ card.whenToUse }}</p>
      </section>

      <section class="knowledge-section">
        <h5>Как работает</h5>
        <p>{{ card.howItWorks }}</p>
      </section>

      <section class="knowledge-section">
        <h5>Почему это важно</h5>
        <p>{{ card.whyImportant }}</p>
      </section>

      <section v-if="card.codeExample" class="grid gap-3">
        <h5 class="font-mono text-sm font-black uppercase tracking-[0.12em] text-[var(--color-neon-green)]">Пример кода</h5>
        <CodeBlock
          :language="card.codeExample.language"
          :filename="card.codeExample.filename"
          :code="card.codeExample.code"
        />
      </section>

      <section class="knowledge-section border-[rgba(255,77,126,0.42)]">
        <h5 class="text-[var(--color-danger)]">Типичная ошибка</h5>
        <p>{{ card.commonMistake }}</p>
      </section>

      <section class="knowledge-section">
        <h5>Что спрашивают на интервью</h5>
        <ul class="grid gap-2">
          <li v-for="question in card.interviewQuestions" :key="question">{{ question }}</li>
        </ul>
      </section>

      <section class="knowledge-section border-[rgba(255,216,77,0.48)] bg-[rgba(255,216,77,0.05)]">
        <h5 class="text-[var(--color-warning)]">Что нужно запомнить</h5>
        <p>{{ card.remember }}</p>
      </section>
    </div>
  </BaseCard>
</template>

<style scoped>
.knowledge-card {
  font-family: var(--font-readable);
}

.knowledge-section {
  display: grid;
  gap: 0.75rem;
  min-width: 0;
  border: 1px solid rgba(0, 255, 177, 0.22);
  background: rgba(0, 0, 0, 0.28);
  padding: 1rem;
}

.knowledge-section h5 {
  color: var(--color-neon-green);
  font-family: var(--font-arcade);
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  line-height: 1.35;
  text-transform: uppercase;
}

.knowledge-section p,
.knowledge-section li {
  color: rgb(226 232 240);
  font-size: 1rem;
  line-height: 1.9;
}

.knowledge-section ul {
  padding-left: 1.15rem;
  list-style: square;
}
</style>
