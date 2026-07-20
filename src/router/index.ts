import { createRouter, createWebHistory } from 'vue-router'
import AchievementsView from '../views/AchievementsView.vue'
import CharacterCreationView from '../views/CharacterCreationView.vue'
import LevelView from '../views/LevelView.vue'
import LocationView from '../views/LocationView.vue'
import MapView from '../views/MapView.vue'
import ProfileView from '../views/ProfileView.vue'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'map',
      component: MapView,
    },
    {
      path: '/level/:levelId',
      name: 'level',
      component: LevelView,
    },
    {
      path: '/location/:locationId',
      name: 'location',
      component: LocationView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: AchievementsView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
    {
      path: '/character-creation',
      name: 'character-creation',
      component: CharacterCreationView,
    },
  ],
})

if (typeof window !== 'undefined') {
  const redirectRoute = window.sessionStorage.getItem('frontend-quest:redirect')

  if (redirectRoute) {
    window.sessionStorage.removeItem('frontend-quest:redirect')
    void router.replace(redirectRoute)
  }
}

export default router
