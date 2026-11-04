export const COZE_SDK_URL =
  'https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/oversea/index.js'

export const DEFAULT_COZE_BOT_ID = '7699128420429725701'
export const CHATBOT_TITLE = 'Trợ lý AI Biển Đảo Việt Nam'

let sdkLoadingPromise = null

/**
 * Tải script Coze WebChat SDK v1.2.0-beta.6 (đảm bảo chỉ tải 1 lần duy nhất).
 */
export function loadCozeSdkScript() {
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
