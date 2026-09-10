import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/SIH-internal/',
  server: {
    port: 5173,
    proxy: {
      '/functions/v1': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  }
})
