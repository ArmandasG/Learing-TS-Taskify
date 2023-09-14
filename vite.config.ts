import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import checker from 'vite-plugin-checker'
export default defineConfig({
  plugins: [react(), checker({
    // e.g. use TypeScript check
    typescript: true,
  }),], 
})
