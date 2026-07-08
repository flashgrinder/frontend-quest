<script setup lang="ts">
import HeroTerminalContent from './HeroTerminalContent.vue'
import HeroTerminalFooter from './HeroTerminalFooter.vue'
import HeroTerminalFrame from './HeroTerminalFrame.vue'
import SidebarAchievements from './SidebarAchievements.vue'
import SidebarHeader from './SidebarHeader.vue'
import SidebarNavigation from './SidebarNavigation.vue'
import SidebarProfile from './SidebarProfile.vue'
import SidebarStats from './SidebarStats.vue'
import SidebarXp from './SidebarXp.vue'
</script>

<template>
  <aside class="h-screen min-h-0 min-w-0 overflow-visible lg:sticky lg:top-5 lg:h-[calc(100vh-2.5rem)]">
    <HeroTerminalFrame>
      <template #header>
        <SidebarHeader />
      </template>

      <HeroTerminalContent>
        <SidebarProfile />
        <SidebarNavigation />
        <SidebarXp />
        <SidebarStats />
        <SidebarAchievements />
      </HeroTerminalContent>

      <template #footer>
        <HeroTerminalFooter />
      </template>
    </HeroTerminalFrame>
  </aside>
</template>
