import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  }, 
  resolve: {
    alias: {
      "@"           : resolve(__dirname, "./src"),
      "@components" : resolve(__dirname, "./src/components/"),
      "@layouts"    : resolve(__dirname, "./src/layouts/"),
      "@pages"      : resolve(__dirname, "./src/pages/"),
      "@redux"      : resolve(__dirname, "./src/redux/"),
      "@root"       : resolve(__dirname, "."),
      "@router"     : resolve(__dirname, "./src/router/"),
      "@assets"     : resolve(__dirname, "./src/assets/")
    },
  },
  plugins: [react()],
})
