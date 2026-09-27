import tailwindcss from '@tailwindcss/vite'
import { reactRouter } from '@react-router/dev/vite'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), svgr(), imagetools()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  // Nasłuch w sieci lokalnej: podgląd na telefonie pod adresem z logu „Network”.
  server: { host: true },
  preview: { host: true },
})
