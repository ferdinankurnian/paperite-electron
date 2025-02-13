// vite.config.ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'; // Import path

const absolutePathToDb = path.resolve(__dirname, 'notes.db'); // Ganti 'notes.db' dengan path yang benar

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    watch: {
      ignored: ['**/electron/**', absolutePathToDb] // Gunakan path absolut
    }
  },
  base: './',
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
