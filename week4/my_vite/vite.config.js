import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({

}) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'views': path.resolve(__dirname, 'src/views'),
        'comps': path.resolve(__dirname, 'src/components'),
        'apis': path.resolve(__dirname, 'src/api'),
        'routers': path.resolve(__dirname, 'src/router'),
        'styles': path.resolve(__dirname, 'src/styles'),
        'plugins': path.resolve(__dirname, 'src/plugins'),
        'layouts': path.resolve(__dirname, 'src/layouts'),
      }
    },
    plugins: [
      vue(),
      viteMockServe({
        supportTs: false
      })
    ],
  };
});