import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Sparkles,
  MessageSquare,
  X,
  Maximize2,
  Minimize2,
  RefreshCw,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  Copy,
  Check,
  Compass
} from 'lucide-react'
import {
  loadCozeSdkScript,
  fetchCozeBackendToken,
  DEFAULT_COZE_BOT_ID,
  CHATBOT_TITLE
} from '../utils/cozeSdk'

const QUICK_PROMPTS = [
  'Chứng cứ lịch sử khẳng định chủ quyền Việt Nam với Hoàng Sa - Trường Sa?',
  'Phân biệt lãnh hải và vùng đặc quyền kinh tế theo UNCLOS 1982?',
  'Vai trò của học sinh THPT trong bảo vệ chủ quyền biển đảo?'
]

export default function CozeFloatingChatbot({ activeRole = 'student' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [authStatus, setAuthStatus] = useState('idle') // 'idle' | 'checking' | 'ready' | 'unconfigured' | 'error'
  const [authMode, setAuthMode] = useState('')
  const [botId, setBotId] = useState(DEFAULT_COZE_BOT_ID)
  const [errorMessage, setErrorMessage] = useState('')
  const [copiedIdx, setCopiedIdx] = useState(null)
  const [reloadTick, setReloadTick] = useState(0)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  )

  const mountContainerRef = useRef(null)
  const webChatClientRef = useRef(null)
  const hasInitializedRef = useRef(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    const handleOpenEvent = () => {
      setIsOpen(true)
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('open-coze-floating-chat', handleOpenEvent)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('open-coze-floating-chat', handleOpenEvent)
    }
  }, [])

  const initFloatingCozeClient = useCallback(async () => {
    setAuthStatus('checking')
    setErrorMessage('')

    try {
      const CozeWebSDK = await loadCozeSdkScript()
      const authPayload = await fetchCozeBackendToken()

      if (authPayload.botId) {
        setBotId(authPayload.botId)
      }

      if (!authPayload.configured || !authPayload.token) {
        setAuthStatus('unconfigured')
        setAuthMode('unconfigured')
        hasInitializedRef.current = false
        return
      }

      setAuthMode(authPayload.authMode || 'server_env_token')

      if (webChatClientRef.current?.destroy) {
        try {
          webChatClientRef.current.destroy()
        } catch {
          // Bỏ qua lỗi dọn dẹp DOM của SDK cũ
        }
        webChatClientRef.current = null
      }

      const mountEl = mountContainerRef.current
      if (mountEl) {
        mountEl.innerHTML = ''
      }

      // Khởi tạo CozeWebSDK.WebChatClient ở chế độ Native React (isIframe: false)
      // Khắc phục triệt để lỗi 502 Bad Gateway (TLB) từ URL iframe cũ https://api.coze.com/open-platform/sdk/chatapp
      const client = new CozeWebSDK.WebChatClient({
        config: {
          bot_id: authPayload.botId || DEFAULT_COZE_BOT_ID,
          isIframe: false
        },
        componentProps: {
          title: CHATBOT_TITLE,
          layout: isMobile ? 'mobile' : 'pc',
          width: '100%'
        },
        auth: {
          type: 'token',
          token: authPayload.token,
          onRefreshToken: async function () {
            const refreshed = await fetchCozeBackendToken()
            return refreshed.token || ''
          }
        },
        userInfo: {
          id: activeRole === 'teacher' ? 'gv-thpt-floating' : 'hs-thpt-floating',
          url: '/assets/ecosystem/tro-ly-ai.svg',
          nickname:
            activeRole === 'teacher' ? 'Giáo viên THPT' : 'Học sinh THPT'
        },
        ui: {
          base: {
            icon: '/assets/ecosystem/tro-ly-ai.svg',
            layout: isMobile ? 'mobile' : 'pc',
            lang: 'en',
            zIndex: 1060
          },
          asstBtn: {
            isNeed: false
          },
          header: {
            isShow: false,
            isNeedClose: false
          },
          chatBot: {
            title: CHATBOT_TITLE,
            uploadable: true,
            width: '100%',
            el: mountEl || undefined
          },
          footer: {
            isShow: true,
            expressionText: 'Trợ lý AI Biển Đảo Việt Nam • Chạm tri thức, Vững chủ quyền'
          }
        },
        el: mountEl || undefined
      })

      webChatClientRef.current = client
      hasInitializedRef.current = true
      setAuthStatus('ready')

      if (typeof client.showChatBot === 'function') {
        try {
          client.showChatBot()
        } catch {
          // Một số phiên bản SDK tự động hiển thị khi truyền el
        }
      }
    } catch (err) {
      hasInitializedRef.current = false
      setAuthStatus('error')
      setErrorMessage(
        err?.message || 'Không thể khởi tạo khung chat Trợ lý AI Biển Đảo Việt Nam.'
      )
    }
  }, [activeRole, isMobile])

  // Khởi tạo khi người dùng mở khung chat lần đầu hoặc khi nhấn làm mới kết nối
  useEffect(() => {
    if (!isOpen) return
    if (!hasInitializedRef.current || reloadTick > 0) {
      initFloatingCozeClient()
    }
  }, [isOpen, reloadTick, initFloatingCozeClient])

  // Dọn dẹp khi unmount toàn bộ ứng dụng
  useEffect(() => {
    return () => {
      if (webChatClientRef.current?.destroy) {
        try {
          webChatClientRef.current.destroy()
        } catch {
          // Bỏ qua lỗi khi unmount
        }
        webChatClientRef.current = null
      }
    }
  }, [])

  const handleToggleChat = () => {
    setIsOpen((prev) => !prev)
  }

  const handleRefreshConnection = () => {
    hasInitializedRef.current = false
    setReloadTick((c) => c + 1)
  }

  const handleCopyPrompt = (text, idx) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text)
      setCopiedIdx(idx)
      setTimeout(() => setCopiedIdx(null), 2000)
    }
  }

  return (
    <div className="coze-floating-widget-root" aria-live="polite">
      {/* Khung cửa sổ chat Coze mở ra khi nhấn nút nổi */}
      <div
        className={`coze-floating-panel ${isOpen ? 'is-open' : 'is-closed'} ${
          isExpanded ? 'is-expanded' : ''
        }`}
        role="dialog"
        aria-label={CHATBOT_TITLE}
        aria-hidden={!isOpen}
      >
        {/* Header đồng bộ màu sắc Xanh Hải Quân & Vàng Ánh Kim của Website */}
        <div className="coze-floating-header">
          <div className="coze-floating-brand">
            <div className="coze-floating-avatar">
              <Compass size={20} className="coze-avatar-compass" />
              <span className="coze-online-dot" />
            </div>
            <div className="coze-floating-title-wrap">
              <h3 className="coze-floating-title">{CHATBOT_TITLE}</h3>
              <p className="coze-floating-subtitle">
                <ShieldCheck size={12} />
                <span>
                  {authStatus === 'ready'
                    ? authMode === 'oauth_jwt'
                      ? 'Trực tuyến • OAuth Token ngắn hạn'
                      : 'Trực tuyến • Bảo mật qua Server .env'
                    : 'Chạm tri thức • Vững chủ quyền'}
                </span>
              </p>
            </div>
          </div>

          <div className="coze-floating-controls">
            <button
              type="button"
              className="coze-ctrl-btn"
              onClick={handleRefreshConnection}
              title="Làm mới kết nối Coze AI"
              aria-label="Làm mới kết nối Coze AI"
            >
              <RefreshCw size={15} />
            </button>

            {!isMobile && (
              <button
                type="button"
                className="coze-ctrl-btn"
                onClick={() => setIsExpanded((prev) => !prev)}
                title={isExpanded ? 'Thu gọn khung chat' : 'Mở rộng khung chat'}
                aria-label={isExpanded ? 'Thu gọn khung chat' : 'Mở rộng khung chat'}
              >
                {isExpanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              </button>
            )}

            <button
              type="button"
              className="coze-ctrl-btn coze-close-btn"
              onClick={() => setIsOpen(false)}
              title="Đóng khung chat"
              aria-label="Đóng khung chat"
            >
              <X size={17} />
            </button>
          </div>
        </div>

        {/* Thanh gợi ý câu hỏi nhanh cho học sinh & giáo viên */}
        <div className="coze-floating-quick-bar">
          <span className="coze-quick-label">
            <Sparkles size={12} /> Gợi ý hỏi nhanh:
          </span>
          <div className="coze-quick-chips">
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                className="coze-quick-chip"
                onClick={() => handleCopyPrompt(prompt, idx)}
                title="Nhấn để sao chép câu hỏi và dán vào khung chat"
              >
                {copiedIdx === idx ? (
                  <>
                    <Check size={11} />
                    <span>Đã chép câu hỏi!</span>
                  </>
                ) : (
                  <>
                    <Copy size={11} />
                    <span>{prompt}</span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Nội dung chính: Trạng thái tải / hướng dẫn .env / khung chat Coze SDK */}
        <div className="coze-floating-body">
          {authStatus === 'checking' && (
            <div className="coze-floating-state">
              <RefreshCw size={28} className="coze-spin-icon" />
              <h4>Đang kết nối {CHATBOT_TITLE}...</h4>
              <p>
                Đang xác thực khóa bảo mật từ máy chủ (<code>/api/coze/token</code>)
                và khởi tạo Coze WebChat SDK.
              </p>
            </div>
          )}

          {authStatus === 'unconfigured' && (
            <div className="coze-floating-state is-guide">
              <div className="coze-floating-alert-pill">
                <AlertCircle size={15} />
                <span>Cấu hình bảo mật phía máy chủ (.env)</span>
              </div>
              <h4>Chờ cấp khóa xác thực cho {CHATBOT_TITLE}</h4>
              <p>
                Để đảm bảo an toàn (không đưa Personal Access Token vào mã
                Frontend hoặc GitHub), vui lòng cấu hình trong tệp{' '}
                <code>.env</code> tại thư mục gốc của dự án:
              </p>
              <ol className="coze-floating-steps">
                <li>
                  Mở tệp <code>.env</code> ở thư mục gốc dự án (đã được bảo vệ
                  trong <code>.gitignore</code>).
                </li>
                <li>
                  Điền <code>COZE_API_TOKEN=pat_...</code> hoặc bộ khóa{' '}
                  <code>COZE_OAUTH_*</code> cho Bot ID{' '}
                  <code>{botId}</code> rồi lưu tệp.
                </li>
                <li>
                  Nhấn nút <strong>"Kiểm tra &amp; Kết nối ngay"</strong> bên dưới.
                </li>
              </ol>
              <div className="coze-floating-state-actions">
                <button
                  type="button"
                  className="btn-primary-gold coze-Action-btn"
                  onClick={handleRefreshConnection}
                >
                  <RefreshCw size={15} />
                  <span>Kiểm tra &amp; Kết nối ngay</span>
                </button>
                <a
                  href="https://www.coze.com/open/oauth/pats"
                  target="_blank"
                  rel="noreferrer"
                  className="coze-floating-ext-link"
                >
                  <span>Lấy Token trên Coze</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          )}

          {authStatus === 'error' && (
            <div className="coze-floating-state is-error">
              <AlertCircle size={28} />
              <h4>Tạm thời chưa thể kết nối Chatbot</h4>
              <p>{errorMessage}</p>
              <button
                type="button"
                className="btn-primary-gold coze-Action-btn"
                onClick={handleRefreshConnection}
              >
                <RefreshCw size={15} />
                <span>Thử kết nối lại</span>
              </button>
            </div>
          )}

          {/* Vùng DOM Mount chính thức của CozeWebSDK.WebChatClient */}
          <div
            ref={mountContainerRef}
            className={`coze-floating-sdk-mount ${
              authStatus === 'ready' ? 'is-ready' : 'is-hidden'
            }`}
          />
        </div>
      </div>

      {/* Nút Chatbot nổi ở góc dưới bên phải màn hình */}
      <button
        type="button"
        className={`coze-floating-trigger-btn ${isOpen ? 'is-active' : ''}`}
        onClick={handleToggleChat}
        aria-expanded={isOpen}
        aria-label={
          isOpen
            ? `Đóng ${CHATBOT_TITLE}`
            : `Mở ${CHATBOT_TITLE}`
        }
      >
        <span className="coze-trigger-pulse" aria-hidden="true" />
        <span className="coze-trigger-icon-box">
          {isOpen ? (
            <X size={24} />
          ) : (
            <MessageSquare size={24} className="coze-trigger-msg-icon" />
          )}
          {!isOpen && (
            <span className="coze-trigger-ai-badge">
              <Sparkles size={10} />
              AI
            </span>
          )}
        </span>
        <span className="coze-trigger-label">
          <span className="coze-trigger-label-top">Hỏi đáp Chủ quyền &amp; Luật Biển</span>
          <strong className="coze-trigger-label-main">{CHATBOT_TITLE}</strong>
        </span>
      </button>
    </div>
  )
}
