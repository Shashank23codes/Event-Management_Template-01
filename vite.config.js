import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Event-Management_Template-01/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
