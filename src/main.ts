import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { BUILD_INFO } from './config/version'
import './assets/styles/main.css'

console.info('[Frontend Quest build]', BUILD_INFO)

createApp(App).use(createPinia()).use(router).mount('#app')
