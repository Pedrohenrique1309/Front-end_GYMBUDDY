  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://gymbuddy-backend-c0d6cwevgbdfczhy.canadacentral-01.azurewebsites.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err)
          })
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('mandando requisições:', req.method, req.url);
          })
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('resposta:', proxyRes.statusCode, req.url);
          })
        },
      }
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
