import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({

}) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'view': path.resolve(__dirname, 'src/view'),
        'comp': path.resolve(__dirname, 'src/components'),
        'api': path.resolve(__dirname, 'src/api'),
        'router': path.resolve(__dirname, 'src/router'),
      }
    },
    plugins: [
      vue(),
    ],
  };
});