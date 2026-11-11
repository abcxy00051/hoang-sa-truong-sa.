export const COZE_SDK_URL =
  'https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/oversea/index.js'

export const DEFAULT_COZE_BOT_ID = '7699128420429725701'
export const CHATBOT_TITLE = 'Trợ lý AI Biển Đảo Việt Nam'

const DEVICE_USER_ID_KEY = 'biendao_coze_device_uid_v2'
const PRIVATE_CONV_STORAGE_KEY = 'biendao_coze_private_conv_v2'
const ISOLATION_MIGRATION_KEY = 'biendao_coze_isolation_migrated_v2'

let sdkLoadingPromise = null
let isolatorInstalled = false

/**
 * Tạo và lưu trữ mã định danh thiết bị riêng biệt trên trình duyệt của từng người dùng.
 * Đảm bảo mỗi máy tính / điện thoại có một định danh độc lập, không dùng chung ID cố định.
 */
export function getOrCreateDeviceUserId() {
  if (typeof window === 'undefined') return 'thpt-device-server'
  try {
    const existing = window.localStorage.getItem(DEVICE_USER_ID_KEY)
    if (existing && existing.trim().length > 6) {
      return existing.trim()
    }
    const randomPart =
      typeof window.crypto?.randomUUID === 'function'
        ? window.crypto.randomUUID().replace(/-/g, '').slice(0, 16)
        : `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`
    const created = `bd-user-${randomPart}`
    window.localStorage.setItem(DEVICE_USER_ID_KEY, created)
    return created
  } catch {
    return `bd-user-${Date.now().toString(36)}`
  }
}

/**
 * Đọc thông tin phiên hội thoại Coze riêng của thiết bị hiện tại từ localStorage.
 */
export function getPrivateCozeConversation(botId = DEFAULT_COZE_BOT_ID) {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(PRIVATE_CONV_STORAGE_KEY)
    if (!raw) return null
    const map = JSON.parse(raw)
    const key = String(botId || DEFAULT_COZE_BOT_ID)
    const entry = map?.[key]
    if (entry && typeof entry.conversationId === 'string' && entry.conversationId.trim()) {
      return entry
    }
    return null
  } catch {
    return null
  }
}

/**
 * Lưu thông tin phiên hội thoại Coze riêng của thiết bị hiện tại vào localStorage.
 */
export function savePrivateCozeConversation(
  botId = DEFAULT_COZE_BOT_ID,
  conversationId,
  sectionId,
  createdAt
) {
  if (typeof window === 'undefined' || !conversationId) return null
  try {
    const raw = window.localStorage.getItem(PRIVATE_CONV_STORAGE_KEY)
    const map = raw ? JSON.parse(raw) : {}
    const key = String(botId || DEFAULT_COZE_BOT_ID)
    const normalizedConvId = String(conversationId).trim()
    const normalizedSectionId = sectionId
      ? String(sectionId).trim()
      : map?.[key]?.sectionId || normalizedConvId

    const entry = {
      conversationId: normalizedConvId,
      sectionId: normalizedSectionId,
      botId: key,
      deviceUserId: getOrCreateDeviceUserId(),
      createdAt: createdAt || map?.[key]?.createdAt || Math.floor(Date.now() / 1000),
      updatedAt: Date.now()
    }

    map[key] = entry
    window.localStorage.setItem(PRIVATE_CONV_STORAGE_KEY, JSON.stringify(map))
    window.dispatchEvent(
      new CustomEvent('coze-private-session-updated', { detail: entry })
    )
    return entry
  } catch {
    return null
  }
}

/**
 * Xóa phiên hội thoại Coze trên thiết bị hiện tại để khởi tạo cuộc trò chuyện mới hoàn toàn.
 */
export function resetPrivateCozeConversation(botId = DEFAULT_COZE_BOT_ID) {
  if (typeof window === 'undefined') return
  try {
    const raw = window.localStorage.getItem(PRIVATE_CONV_STORAGE_KEY)
    if (raw) {
      const map = JSON.parse(raw)
      const key = String(botId || DEFAULT_COZE_BOT_ID)
      delete map[key]
      window.localStorage.setItem(PRIVATE_CONV_STORAGE_KEY, JSON.stringify(map))
    }

    // Dọn dẹp các khóa cache nội bộ của Coze SDK (nếu có) trên trình duyệt này
    const keysToClean = []
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const k = window.localStorage.key(i)
      if (k && (k.startsWith('coze_') || k.includes('chat_app_sdk'))) {
        keysToClean.push(k)
      }
    }
    keysToClean.forEach((k) => window.localStorage.removeItem(k))

    window.dispatchEvent(
      new CustomEvent('coze-private-session-updated', { detail: null })
    )
  } catch {
    // ignore storage errors
  }
}

function extractBotIdFromUrl(urlString, fallbackBotId = DEFAULT_COZE_BOT_ID) {
  try {
    const parsed = new URL(urlString, window.location.origin)
    return parsed.searchParams.get('bot_id') || fallbackBotId
  } catch {
    return fallbackBotId
  }
}

function isCozeListConversationsUrl(urlString) {
  if (!urlString || typeof urlString !== 'string') return false
  if (!urlString.includes('coze.com') && !urlString.includes('/v1/conversations')) {
    return false
  }
  try {
    const parsed = new URL(urlString, window.location.origin)
    return /\/v1\/conversations\/?$/.test(parsed.pathname)
  } catch {
    return (
      urlString.includes('/v1/conversations?') ||
      urlString.endsWith('/v1/conversations')
    )
  }
}

function isCozeCreateConversationUrl(urlString) {
  if (!urlString || typeof urlString !== 'string') return false
  return urlString.includes('/v1/conversation/create')
}

function isCozeClearConversationUrl(urlString) {
  if (!urlString || typeof urlString !== 'string') return false
  return /\/v1\/conversations\/[^/?#]+\/clear/.test(urlString)
}

function buildIsolatedConversationsResponseText(botId) {
  const saved = getPrivateCozeConversation(botId)
  const conversations = saved?.conversationId
    ? [
        {
          id: saved.conversationId,
          last_section_id: saved.sectionId || saved.conversationId,
          created_at: saved.createdAt || Math.floor(Date.now() / 1000)
        }
      ]
    : []

  return JSON.stringify({
    code: 0,
    msg: '',
    data: {
      has_more: false,
      conversations
    }
  })
}

function captureCreatedOrClearedConversation(urlString, requestBody, responseText) {
  if (!responseText || typeof responseText !== 'string') return
  try {
    const payload = JSON.parse(responseText)
    if (payload?.code !== 0 || !payload?.data) return

    let botId = extractBotIdFromUrl(urlString, '')
    if (!botId && typeof requestBody === 'string') {
      try {
        const parsedBody = JSON.parse(requestBody)
        if (parsedBody?.bot_id) {
          botId = String(parsedBody.bot_id)
        }
      } catch {
        // ignore non-JSON body
      }
    }
    if (!botId) {
      botId = DEFAULT_COZE_BOT_ID
    }

    if (isCozeCreateConversationUrl(urlString) && payload.data.id) {
      savePrivateCozeConversation(
        botId,
        payload.data.id,
        payload.data.last_section_id || payload.data.id,
        payload.data.created_at
      )
    } else if (isCozeClearConversationUrl(urlString) && payload.data.id) {
      const match = urlString.match(/\/v1\/conversations\/([^/?#]+)\/clear/)
      const convId = payload.data.conversation_id || match?.[1]
      const current = getPrivateCozeConversation(botId)
      const targetConvId = convId || current?.conversationId
      if (targetConvId) {
        savePrivateCozeConversation(
          botId,
          targetConvId,
          payload.data.id,
          current?.createdAt
        )
      }
    }
  } catch {
    // ignore parse errors
  }
}

/**
 * Cài đặt bộ cô lập phiên hội thoại Coze ở phía trình duyệt (Client-Side Session Isolator).
 *
 * Nguyên nhân gốc rễ:
 * Khi dùng chung COZE_API_TOKEN trên server, Coze WebChat SDK mặc định gọi
 * `GET https://api.coze.com/v1/conversations?bot_id=...&page_num=1&page_size=1`
 * và lấy cuộc hội thoại mới nhất của toàn hệ thống, khiến mọi người dùng nhìn thấy
 * chung lịch sử trò chuyện của nhau.
 *
 * Giải pháp:
 * - Chặn `GET /v1/conversations`: Chỉ trả về `conversationId` riêng đã lưu trong
 *   `localStorage` của chính trình duyệt/thiết bị đang sử dụng. Nếu thiết bị chưa có
 *   phiên riêng, trả về `conversations: []` để SDK tự động gọi `POST /v1/conversation/create`
 *   tạo một phiên hoàn toàn mới và độc lập cho thiết bị đó.
 * - Bắt kết quả `POST /v1/conversation/create` và `/v1/conversations/:id/clear`:
 *   Lưu `conversationId` và `sectionId` mới vào `localStorage` của riêng thiết bị này.
 */
export function installCozePrivateSessionIsolator() {
  if (typeof window === 'undefined' || isolatorInstalled) return
  isolatorInstalled = true

  // Dọn dẹp phiên dùng chung cũ một lần duy nhất khi nâng cấp lên cơ chế cô lập v2
  try {
    if (!window.localStorage.getItem(ISOLATION_MIGRATION_KEY)) {
      resetPrivateCozeConversation(DEFAULT_COZE_BOT_ID)
      window.localStorage.setItem(ISOLATION_MIGRATION_KEY, '1')
    }
  } catch {
    // ignore storage errors
  }

  // 1. Bọc XMLHttpRequest (Coze WebChat SDK sử dụng axios/XHR cho các API conversation)
  if (typeof window.XMLHttpRequest === 'function') {
    const OriginalXHR = window.XMLHttpRequest
    const originalOpen = OriginalXHR.prototype.open
    const originalSend = OriginalXHR.prototype.send

    OriginalXHR.prototype.open = function (method, url, ...rest) {
      this._cozeMethod = String(method || 'GET').toUpperCase()
      this._cozeUrl = String(url || '')

      if (
        this._cozeMethod === 'GET' &&
        isCozeListConversationsUrl(this._cozeUrl)
      ) {
        const botId = extractBotIdFromUrl(this._cozeUrl, DEFAULT_COZE_BOT_ID)
        try {
          Object.defineProperty(this, 'responseText', {
            configurable: true,
            get: () => buildIsolatedConversationsResponseText(botId)
          })
          Object.defineProperty(this, 'response', {
            configurable: true,
            get: () => {
              const text = buildIsolatedConversationsResponseText(botId)
              return this.responseType === 'json' ? JSON.parse(text) : text
            }
          })
        } catch {
          // ignore property definition errors
        }
      }

      return originalOpen.call(this, method, url, ...rest)
    }

    OriginalXHR.prototype.send = function (body) {
      this._cozeRequestBody = typeof body === 'string' ? body : null

      if (
        this._cozeMethod === 'POST' &&
        (isCozeCreateConversationUrl(this._cozeUrl) ||
          isCozeClearConversationUrl(this._cozeUrl))
      ) {
        let captured = false
        const tryCapture = () => {
          if (captured) return
          if (this.readyState === 4 && this.status >= 200 && this.status < 300) {
            captured = true
            const rawText =
              typeof this.responseText === 'string'
                ? this.responseText
                : typeof this.response === 'string'
                  ? this.response
                  : JSON.stringify(this.response || {})
            captureCreatedOrClearedConversation(
              this._cozeUrl,
              this._cozeRequestBody,
              rawText
            )
          }
        }

        this.addEventListener('readystatechange', tryCapture, true)
        this.addEventListener('load', tryCapture, true)
      }

      return originalSend.call(this, body)
    }
  }

  // 2. Bọc window.fetch (đảm bảo tương thích tuyệt đối nếu SDK gọi qua Fetch API)
  if (typeof window.fetch === 'function') {
    const originalFetch = window.fetch.bind(window)

    window.fetch = async function (input, init) {
      const urlString =
        typeof input === 'string'
          ? input
          : input instanceof URL
            ? input.toString()
            : input?.url || ''
      const method = String(
        init?.method || (typeof input === 'object' && input?.method) || 'GET'
      ).toUpperCase()

      if (method === 'GET' && isCozeListConversationsUrl(urlString)) {
        const botId = extractBotIdFromUrl(urlString, DEFAULT_COZE_BOT_ID)
        const isolatedJson = buildIsolatedConversationsResponseText(botId)
        return new Response(isolatedJson, {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' }
        })
      }

      const response = await originalFetch(input, init)

      if (
        method === 'POST' &&
        (isCozeCreateConversationUrl(urlString) ||
          isCozeClearConversationUrl(urlString))
      ) {
        try {
          const cloned = response.clone()
          const text = await cloned.text()
          const requestBody =
            typeof init?.body === 'string' ? init.body : null
          captureCreatedOrClearedConversation(urlString, requestBody, text)
        } catch {
          // ignore clone errors
        }
      }

      return response
    }
  }
}

/**
 * Tải script Coze WebChat SDK v1.2.0-beta.6 (đảm bảo chỉ tải 1 lần duy nhất)
 * và kích hoạt cơ chế cô lập lịch sử hội thoại riêng cho từng thiết bị người dùng.
 */
export function loadCozeSdkScript() {
  installCozePrivateSessionIsolator()

  if (typeof window !== 'undefined' && window.CozeWebSDK?.WebChatClient) {
    return Promise.resolve(window.CozeWebSDK)
  }

  if (sdkLoadingPromise) {
    return sdkLoadingPromise
  }

  sdkLoadingPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      `script[src="${COZE_SDK_URL}"]`
    )

    if (existingScript) {
      if (window.CozeWebSDK?.WebChatClient) {
        resolve(window.CozeWebSDK)
        return
      }
      const onLoad = () => {
        if (window.CozeWebSDK?.WebChatClient) {
          resolve(window.CozeWebSDK)
        } else {
          sdkLoadingPromise = null
          reject(
            new Error('CozeWebSDK đã tải nhưng không tìm thấy WebChatClient.')
          )
        }
      }
      const onError = () => {
        sdkLoadingPromise = null
        reject(new Error('Không thể tải Coze WebChat SDK từ CDN.'))
      }
      existingScript.addEventListener('load', onLoad, { once: true })
      existingScript.addEventListener('error', onError, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = COZE_SDK_URL
    script.async = true
    script.onload = () => {
      if (window.CozeWebSDK?.WebChatClient) {
        resolve(window.CozeWebSDK)
      } else {
        sdkLoadingPromise = null
        reject(new Error('Khởi tạo CozeWebSDK thất bại sau khi tải script.'))
      }
    }
    script.onerror = () => {
      sdkLoadingPromise = null
      reject(
        new Error(
          'Lỗi kết nối mạng khi tải Coze WebChat SDK (1.2.0-beta.6) từ sf-cdn.coze.com.'
        )
      )
    }
    document.body.appendChild(script)
  })

  return sdkLoadingPromise
}

/**
 * Gọi Backend API (/api/coze/token hoặc /api/coze-token) để lấy Token xác thực từ biến môi trường phía Server.
 * Tuyệt đối không lưu hoặc lộ Personal Access Token trong mã nguồn Frontend.
 */
export async function fetchCozeBackendToken() {
  const endpoints = ['/api/coze/token', '/api/coze-token']
  let lastError = null

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: { Accept: 'application/json' },
        cache: 'no-store'
      })

      if (response.ok) {
        return await response.json()
      }
      lastError = new Error(
        `Máy chủ xác thực (${endpoint}) trả về mã lỗi ${response.status}`
      )
    } catch (err) {
      lastError = err
    }
  }

  throw lastError || new Error('Không thể kết nối tới API xác thực Coze phía Server.')
}
