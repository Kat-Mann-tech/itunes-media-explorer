import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vite configuration
export default defineConfig({
  plugins: [react()],

  // Development server settings
  server: {
    proxy: {
      // Forward API requests to the backend server
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
})