import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {
  resolveCozeAuthPayload,
  verifyCozeBotConnection
} from './server/cozeTokenService.js'

/**
 * Plugin Backend Middleware tích hợp trực tiếp trong máy chủ Vite
 * cung cấp API bảo mật `/api/coze/token`, `/api/coze-token` và `/api/coze/verify` đọc từ tệp `.env` phía Server.
 * Nhờ đó Personal Access Token (PAT) hoặc khóa OAuth không bao giờ bị lộ trong bundle Frontend.
 */
function cozeBackendAuthPlugin() {
  const attachMiddleware = (middlewares) => {
    middlewares.use(async (req, res, next) => {
      const urlPath = (req.url || '').split('?')[0]
      const isTokenRoute =
        urlPath === '/api/coze/token' || urlPath === '/api/coze-token'
      const isVerifyRoute = urlPath === '/api/coze/verify'

      if (!isTokenRoute && !isVerifyRoute) {
        return next()
      }

      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Accept'
      )

      if (req.method === 'OPTIONS') {
        res.statusCode = 204
        res.end()
        return
      }

      if (req.method !== 'GET' && req.method !== 'POST') {
        res.statusCode = 405
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.end(JSON.stringify({ error: 'Method Not Allowed' }))
        return
      }

      try {
        const payload = isVerifyRoute
          ? await verifyCozeBotConnection(process.cwd())
          : await resolveCozeAuthPayload(process.cwd())

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate')
        res.end(JSON.stringify(payload))
      } catch (err) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.end(
          JSON.stringify({
            configured: false,
            error: err.message || 'Lỗi máy chủ khi cấp Token Coze.'
          })
        )
      }
    })
  }

  return {
    name: 'coze-backend-auth-middleware',
    configureServer(server) {
      attachMiddleware(server.middlewares)
    },
    configurePreviewServer(server) {
      attachMiddleware(server.middlewares)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cozeBackendAuthPlugin()],
  server: {
    port: 5173,
    open: false
  }
})
