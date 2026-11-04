import { resolveCozeAuthPayload } from '../../server/cozeTokenService.js'

/**
 * Serverless API Endpoint (/api/coze/token) phục vụ triển khai Production (Vercel / Node.js).
 * Đọc cấu hình OAuth JWT hoặc COZE_API_TOKEN từ biến môi trường phía máy chủ.
 */
export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(JSON.stringify({ error: 'Method Not Allowed' }))
    return
  }

  try {
    const payload = await resolveCozeAuthPayload(process.cwd())
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
        error: err.message || 'Lỗi máy chủ khi khởi tạo xác thực Coze.'
      })
    )
  }
}
