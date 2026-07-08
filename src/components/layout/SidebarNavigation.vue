<script setup lang="ts">
import { nextTick } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

interface NavigationItem {
  label: string
  to: string
  icon: 'map' | 'profile' | 'achievements' | 'settings'
  tag: string
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Карта',
    to: '/',
    icon: 'map',
    tag: 'MAP',
  },
  {
    label: 'Профиль',
    to: '/profile',
    icon: 'profile',
    tag: 'USER',
  },
  {
    label: 'Достижения',
    to: '/achievements',
    icon: 'achievements',
    tag: 'ACH',
  },
  {
    label: 'Настройки',
    to: '/settings',
    icon: 'settings',
    tag: 'SYS',
  },
]

const route = useRoute()
const router = useRouter()

const requestMapScroll = (): void => {
  window.dispatchEvent(new CustomEvent('frontend-quest:scroll-map'))
}

const handleNavigation = async (item: NavigationItem, navigate: () => void): Promise<void> => {
  if (item.to !== '/') {
    navigate()
    return
  }

  if (route.path === '/') {
    requestMapScroll()
    return
  }

  await router.push('/')
  await nextTick()
  requestMapScroll()
}
</script>

<template>
  <section class="grid min-w-0 shrink-0 gap-2.5">
    <div class="flex shrink-0 items-center justify-between gap-3">
      <p class="font-mono text-xs font-black uppercase tracking-[0.2em] text-[var(--color-neon-pink)]">
        NAVIGATION
      </p>
    </div>

    <nav class="grid min-w-0 content-start gap-2.5 px-1 py-2" aria-label="Главная навигация">
      <RouterLink
        v-for="item in navigationItems"
        :key="item.to"
        :to="item.to"
        custom
        v-slot="{ href, isActive, navigate }"
      >
        <a
          :href="href"
          class="sidebar-nav-link group grid min-h-[56px] w-full min-w-0 grid-cols-[40px_minmax(0,1fr)_auto_20px] items-center gap-2.5 border-2 border-[rgba(0,255,177,0.3)] bg-black/70 px-3.5 py-3 font-mono text-[0.95rem] font-black uppercase tracking-[0.06em] text-[var(--color-text)] transition hover:translate-x-0.5 hover:scale-[1.005] hover:border-[var(--color-neon-green)] hover:bg-[rgba(0,255,177,0.1)] active:translate-x-0.5 active:translate-y-0.5"
          :class="isActive ? 'sidebar-nav-link--active border-[var(--color-neon-green)] bg-[rgba(0,255,177,0.14)] text-[var(--color-neon-green)]' : ''"
          @click.prevent="handleNavigation(item, navigate)"
        >
          <span
            class="grid size-8 place-items-center text-[var(--color-muted)] transition group-hover:text-[var(--color-neon-green)]"
            :class="isActive ? 'text-[var(--color-neon-green)]' : ''"
            aria-hidden="true"
          >
            <svg v-if="item.icon === 'map'" viewBox="0 0 24 24" class="size-6 fill-current">
              <path d="M4 5h5v14H4V5Zm6 2 4-2v14l-4 2V7Zm5-2h5v14h-5V5Z" />
            </svg>
            <svg v-else-if="item.icon === 'profile'" viewBox="0 0 24 24" class="size-6 fill-current">
              <path d="M8 5h8v6H8V5Zm-2 9h12v5H6v-5Zm2-11h8v2H8V3Zm0 8h8v2H8v-2Z" />
            </svg>
            <svg v-else-if="item.icon === 'achievements'" viewBox="0 0 24 24" class="size-6 fill-current">
              <path d="M9 4h6v3h4v4h-3v3h-3v3h3v3H8v-3h3v-3H8v-3H5V7h4V4Zm2 3v4h2V7h-2Z" />
            </svg>
            <svg v-else viewBox="0 0 24 24" class="size-6 fill-current">
              <path d="M10 4h4v3h3v3h3v4h-3v3h-3v3h-4v-3H7v-3H4v-4h3V7h3V4Zm1 6v4h2v-4h-2Z" />
            </svg>
          </span>
          <span class="min-w-0 truncate">{{ item.label }}</span>
          <span class="justify-self-end text-[0.68rem] text-[var(--color-muted)] transition group-hover:text-[var(--color-neon-pink)]" :class="isActive ? 'text-[var(--color-neon-pink)]' : ''">
            {{ item.tag }}
          </span>
          <span class="justify-self-end text-lg text-[var(--color-neon-green)] opacity-0 transition group-hover:opacity-100" :class="isActive ? 'opacity-100 animate-pulse' : ''">
            &gt;
          </span>
        </a>
      </RouterLink>
    </nav>
  </section>
</template>

<style scoped>
.sidebar-nav-link {
  position: relative;
  overflow: visible;
  box-shadow:
    inset 0 0 0 0 transparent,
    2px 2px 0 rgba(94, 0, 255, 0.32);
}

.sidebar-nav-link::before {
  position: absolute;
  top: 0.35rem;
  bottom: 0.35rem;
  left: 0.35rem;
  width: 3px;
  content: "";
  background: transparent;
  box-shadow: none;
  transition:
    background-color 160ms ease,
    box-shadow 160ms ease,
    opacity 160ms ease;
}

.sidebar-nav-link:hover {
  box-shadow:
    inset 3px 0 0 rgba(229, 0, 255, 0.7),
    3px 3px 0 rgba(229, 0, 255, 0.3),
    0 0 18px rgba(0, 255, 177, 0.22);
}

.sidebar-nav-link:hover::before,
.sidebar-nav-link--active::before {
  background: var(--color-neon-pink);
  box-shadow: 0 0 14px rgba(229, 0, 255, 0.72);
}

.sidebar-nav-link--active {
  box-shadow:
    inset 3px 0 0 var(--color-neon-pink),
    3px 3px 0 rgba(229, 0, 255, 0.42),
    0 0 24px rgba(0, 255, 177, 0.34);
}
</style>
