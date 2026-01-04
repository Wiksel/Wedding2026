import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev// HMR Trigger 4
export default defineConfig({
  plugins: [react()],
})
// Trigger restart
