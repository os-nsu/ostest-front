import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@UI': fileURLToPath(new URL('./src/UI', import.meta.url)),
      '@public': fileURLToPath(new URL('./public', import.meta.url)),
    },
  }
})
