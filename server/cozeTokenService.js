import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const DEFAULT_BOT_ID = '7699128420429725701'
const DEFAULT_API_BASE = 'https://api.coze.com'

/**
 * Đọc trực tiếp tệp .env từ phía Server (Node.js) mỗi khi có yêu cầu cấp Token
 * để người dùng khi vừa điền COZE_API_TOKEN vào .env không cần khởi động lại máy chủ.
 */
export function loadServerEnv(rootDir = process.cwd()) {
  const envPath = path.resolve(rootDir, '.env')
  const parsed = {}

  if (fs.existsSync(envPath)) {
    const raw = fs.readFileSync(envPath, 'utf-8')
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eqIdx = trimmed.indexOf('=')
      if (eqIdx === -1) continue
      const key = trimmed.slice(0, eqIdx).trim()
      let val = trimmed.slice(eqIdx + 1).trim()
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1)
      }
      parsed[key] = val
    }
  }

  return {
    COZE_BOT_ID: parsed.COZE_BOT_ID || process.env.COZE_BOT_ID || DEFAULT_BOT_ID,
    COZE_API_BASE_URL:
      parsed.COZE_API_BASE_URL || process.env.COZE_API_BASE_URL || DEFAULT_API_BASE,
    COZE_API_TOKEN: parsed.COZE_API_TOKEN || process.env.COZE_API_TOKEN || '',
    COZE_OAUTH_CLIENT_ID:
      parsed.COZE_OAUTH_CLIENT_ID || process.env.COZE_OAUTH_CLIENT_ID || '',
    COZE_OAUTH_PUBLIC_KEY_ID:
      parsed.COZE_OAUTH_PUBLIC_KEY_ID || process.env.COZE_OAUTH_PUBLIC_KEY_ID || '',
    COZE_OAUTH_PRIVATE_KEY:
      parsed.COZE_OAUTH_PRIVATE_KEY || process.env.COZE_OAUTH_PRIVATE_KEY || ''
  }
}

/**
 * Ký JWT RS256 và đổi lấy OAuth Access Token ngắn hạn từ Coze API
 * (Phương thức bảo mật cao nhất cho môi trường Production).
 */
async function mintOAuthJwtToken({
  clientId,
  publicKeyId,
  privateKeyPem,
  apiBaseUrl
}) {
  const now = Math.floor(Date.now() / 1000)
  const header = {
    alg: 'RS256',
    typ: 'JWT',
    kid: publicKeyId
  }
  const audience = new URL(apiBaseUrl).host
  const payload = {
    iss: clientId,
    aud: audience,
    iat: now,
    exp: now + 600,
    jti: crypto.randomUUID()
  }

  const base64UrlEncode = (obj) =>
    Buffer.from(JSON.stringify(obj)).toString('base64url')

  const unsignedToken = `${base64UrlEncode(header)}.${base64UrlEncode(payload)}`
  const normalizedPem = privateKeyPem.replace(/\\n/g, '\n')
  const signer = crypto.createSign('RSA-SHA256')
  signer.update(unsignedToken)
  signer.end()
  const signature = signer.sign(normalizedPem, 'base64url')
  const jwtAssertion = `${unsignedToken}.${signature}`

  const tokenEndpoint = `${apiBaseUrl.replace(/\/$/, '')}/api/permission/oauth2/token`
  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtAssertion}`
    },
    body: JSON.stringify({
      duration_seconds: 900,
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer'
    })
  })

  if (!response.ok) {
    const errText = await response.text()
    throw new Error(`Coze OAuth Token Error (${response.status}): ${errText}`)
  }

  const data = await response.json()
  return {
    token: data.access_token,
    expiresIn: data.expires_in || 900,
    authMode: 'oauth_jwt'
  }
}

/**
 * Cấp thông tin xác thực cho Coze WebChat SDK từ phía Backend.
 * Ưu tiên OAuth JWT ngắn hạn; nếu chưa cấu hình OAuth thì dùng COZE_API_TOKEN trong .env phía Server.
 */
export async function resolveCozeAuthPayload(rootDir = process.cwd()) {
  const env = loadServerEnv(rootDir)
  const botId = env.COZE_BOT_ID || DEFAULT_BOT_ID

  // 1. Ưu tiên OAuth JWT ngắn hạn nếu có đủ thông tin cấu hình
  if (
    env.COZE_OAUTH_CLIENT_ID &&
    env.COZE_OAUTH_PUBLIC_KEY_ID &&
    env.COZE_OAUTH_PRIVATE_KEY
  ) {
    const oauthResult = await mintOAuthJwtToken({
      clientId: env.COZE_OAUTH_CLIENT_ID,
      publicKeyId: env.COZE_OAUTH_PUBLIC_KEY_ID,
      privateKeyPem: env.COZE_OAUTH_PRIVATE_KEY,
      apiBaseUrl: env.COZE_API_BASE_URL
    })

    return {
      configured: true,
      botId,
      connectorId: '999',
      apiBaseUrl: env.COZE_API_BASE_URL,
      authMode: oauthResult.authMode,
      token: oauthResult.token,
      expiresIn: oauthResult.expiresIn
    }
  }

  // 2. Sử dụng COZE_API_TOKEN từ tệp .env phía Server (không lưu trong mã nguồn Frontend)
  if (
    env.COZE_API_TOKEN &&
    env.COZE_API_TOKEN !== 'your_api_key_here' &&
    env.COZE_API_TOKEN !== 'pat_xxx'
  ) {
    return {
      configured: true,
      botId,
      connectorId: '999',
      apiBaseUrl: env.COZE_API_BASE_URL,
      authMode: 'server_env_token',
      token: env.COZE_API_TOKEN,
      expiresIn: 3600
    }
  }

  // 3. Chưa cấu hình Token trong .env
  return {
    configured: false,
    botId,
    connectorId: '999',
    apiBaseUrl: env.COZE_API_BASE_URL,
    authMode: 'unconfigured',
    token: null,
    message:
      'Chưa tìm thấy COZE_API_TOKEN hoặc cấu hình OAuth JWT trong tệp .env phía Server.'
  }
}

/**
 * Kiểm tra an toàn kết nối tới Coze Bot qua kênh Web Chat SDK (connector_id=999).
 * Tuyệt đối không trả về hoặc ghi log giá trị COZE_API_TOKEN.
 */
export async function verifyCozeBotConnection(rootDir = process.cwd()) {
  const authPayload = await resolveCozeAuthPayload(rootDir)

  if (!authPayload.configured || !authPayload.token) {
    return {
      ok: false,
      configured: false,
      botId: authPayload.botId,
      connectorId: '999',
      code: -1,
      message: authPayload.message || 'Chưa cấu hình COZE_API_TOKEN trong .env.'
    }
  }

  const baseUrl = (authPayload.apiBaseUrl || DEFAULT_API_BASE).replace(/\/$/, '')
  const url = `${baseUrl}/v1/bot/get_online_info?bot_id=${encodeURIComponent(
    authPayload.botId
  )}&connector_id=999`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authPayload.token}`,
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    return {
      ok: response.ok && data.code === 0,
      configured: true,
      httpStatus: response.status,
      code: data.code,
      message: data.msg || 'Kết nối thành công tới Coze Web Chat SDK (connector_id=999).',
      botId: authPayload.botId,
      connectorId: '999',
      botName: data.data?.name || null,
      modelName: data.data?.model_info?.model_name || null
    }
  } catch (err) {
    return {
      ok: false,
      configured: true,
      httpStatus: 500,
      code: -1,
      message: err?.message || 'Lỗi kết nối mạng từ Server tới Coze API.',
      botId: authPayload.botId,
      connectorId: '999'
    }
  }
}
