import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Defining which port, the project will run on when we execute
  // npm run preview

  // host: true will expose the project in public addresses.
  preview: {
    host: true,
    port: 3000
  }
})
