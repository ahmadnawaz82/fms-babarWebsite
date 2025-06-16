import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // ✅ Ensures relative paths so index.html, JS, CSS load properly on cPanel
  build: {
    outDir: 'dist', // ✅ Ensures output goes into dist/ folder (used in .cpanel.yml)
  },
  plugins: [react(), tailwindcss()],
})
