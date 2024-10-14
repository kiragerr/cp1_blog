import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer()],
    },
  },
  resolve: {
    alias: [{
      find: '@',
      replacement: resolve(__dirname, './src'),
    }],
  },
})
