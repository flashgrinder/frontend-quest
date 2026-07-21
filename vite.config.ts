import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/frontend-quest/',
  build: {
    chunkSizeWarningLimit: 2200,
  },
  plugins: [vue(), tailwindcss()],
})
