import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom', // Use jsdom to simulate a browser environment
    globals: true,        // Optional, for automatically injecting test functions (like `describe`, `it`, etc.)
    setupFiles: './setupTests.js', // Optional, for any additional setup if needed
  },
})
