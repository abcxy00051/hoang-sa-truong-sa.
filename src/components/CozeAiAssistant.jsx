import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import {
  Sparkles,
  ShieldCheck,
  RefreshCw,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  MessageSquare,
  AlertCircle,
  Lock,
  Smartphone,
  Monitor,
  ExternalLink,
  History,
  Trash2,
  Compass,
  BookOpen,
  Scale,
  Server
} from 'lucide-react'
import {
  loadCozeSdkScript,
  fetchCozeBackendToken,
  DEFAULT_COZE_BOT_ID,
  CHATBOT_TITLE
} from '../utils/cozeSdk'

const SUGGESTED_QUESTIONS = [
  {
    id: 'q-lich-su-1',
    category: 'Lịch sử & Chủ quyền',
    prompt:
      'Hãy trình bày quá trình xác lập và thực thi chủ quyền của nhà nước Việt Nam đối với quần đảo Hoàng Sa và Trường Sa qua các châu bản triều Nguyễn.'
  },
  {
    id: 'q-lich-su-2',
    category: 'Lịch sử & Chủ quyền',
    prompt:
      'Đội Hoàng Sa và Đội Bắc Hải được thành lập vào thời kỳ nào, có nhiệm vụ gì và được ghi chép trong những sử liệu cổ nào của Việt Nam?'
  },
  {
    id: 'q-phap-ly-1',
    category: 'Pháp lý Quốc tế & UNCLOS 1982',
    prompt:
      'Phân biệt khái niệm chủ quyền (sovereignty) tại lãnh hải và quyền chủ quyền (sovereign rights) tại vùng đặc quyền kinh tế theo UNCLOS 1982 và Luật Biển Việt Nam 2012.'
  },
  {
    id: 'q-phap-ly-2',
    category: 'Pháp lý Quốc tế & UNCLOS 1982',
    prompt:
      'Giải thích quy chế pháp lý của đảo và đá theo Điều 121 Công ước Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982).'
  },
  {
    id: 'q-dia-ly-1',
    category: 'Địa lý & Tự nhiên Biển Đông',
    prompt:
      'So sánh đặc điểm vị trí địa lý, đơn vị hành chính và điều kiện tự nhiên của hai quần đảo Hoàng Sa và Trường Sa.'
  },
  {
    id: 'q-kinh-te-1',
    category: 'Kinh tế & Môi trường Biển',
    prompt:
      'Nêu 6 ngành kinh tế biển chủ lực của Việt Nam và vai trò của 3 hệ sinh thái rạn san hô, thảm cỏ biển, rừng ngập mặn.'
  },
  {
    id: 'q-thpt-1',
    category: 'Ôn tập & Thuyết trình THPT',
    prompt:
      'Gợi ý dàn ý bài thuyết trình ngoại khóa 10 phút dành cho học sinh THPT với chủ đề: Tuổi trẻ với trách nhiệm bảo vệ chủ quyền biển đảo Tổ quốc.'
  }
]

const PROMPT_CATEGORIES = [
  'Tất cả',
  'Lịch sử & Chủ quyền',
  'Pháp lý Quốc tế & UNCLOS 1982',
  'Địa lý & Tự nhiên Biển Đông',
  'Kinh tế & Môi trường Biển',
  'Ôn tập & Thuyết trình THPT'
]

export default function CozeAiAssistant({ activeRole = 'student' }) {
  const embeddedMountRef = useRef(null)
  const clientInstanceRef = useRef(null)
  const chatWorkspaceRef = useRef(null)

  const [sdkLoaded, setSdkLoaded] = useState(false)
  const [authStatus, setAuthStatus] = useState('checking') // 'checking' | 'ready' | 'unconfigured' | 'error'
  const [authMode, setAuthMode] = useState('')
  const [botId, setBotId] = useState(DEFAULT_COZE_BOT_ID)
  const [errorMessage, setErrorMessage] = useState('')
  const [displayMode, setDisplayMode] = useState('embedded') // 'embedded' | 'floating'
  const [isWorkspaceExpanded, setIsWorkspaceExpanded] = useState(false)
  const [selectedPromptCategory, setSelectedPromptCategory] = useState('Tất cả')
  const [showSecurityModal, setShowSecurityModal] = useState(false)
  const [isMobileView, setIsMobileView] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  )
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [reloadCounter, setReloadCounter] = useState(0)

  // Lưu định danh phiên cố định trên trình duyệt để Coze WebChat SDK duy trì lịch sử hội thoại
  const [persistentSessionUserId] = useState(() => {
    try {
      const existing = localStorage.getItem('biendao_coze_sdk_session_uid')
      if (existing) return existing
      const created = `thpt-user-${Math.random().toString(36).slice(2, 10)}`
      localStorage.setItem('biendao_coze_sdk_session_uid', created)
      return created
    } catch {
      return 'hs-thpt-user'
    }
  })

  // Lịch sử các câu hỏi học sinh đã chọn / sao chép để tra cứu lại nhanh
  const [promptHistory, setPromptHistory] = useState(() => {
    try {
      const raw = localStorage.getItem('biendao_coze_prompt_history_v1')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(
        'biendao_coze_prompt_history_v1',
        JSON.stringify(promptHistory)
      )
    } catch {
      // ignore storage quota errors
    }
  }, [promptHistory])

  // Theo dõi kích thước màn hình để đồng bộ giao diện Máy tính & Điện thoại
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Hàm gọi Backend API (/api/coze/token) để lấy Token bảo mật từ biến môi trường phía Server
  const fetchBackendToken = useCallback(async () => {
    return fetchCozeBackendToken()
  }, [])

  // Tải Coze SDK và khởi tạo WebChatClient khi có Token từ Backend (GIỮ NGUYÊN LOGIC HIỆN CÓ)
  useEffect(() => {
    let isMounted = true

    async function initCozeChatbot() {
      setAuthStatus('checking')
      setErrorMessage('')

      try {
        // Bước 1: Tải Coze WebChat SDK 1.2.0-beta.6
        const CozeWebSDK = await loadCozeSdkScript()
        if (!isMounted) return
        setSdkLoaded(true)

        // Bước 2: Gọi Backend API (/api/coze/token) để kiểm tra và nhận Token
        const authPayload = await fetchBackendToken()
        if (!isMounted) return

        if (authPayload.botId) {
          setBotId(authPayload.botId)
        }

        if (!authPayload.configured || !authPayload.token) {
          setAuthStatus('unconfigured')
          setAuthMode('unconfigured')
          return
        }

        setAuthMode(authPayload.authMode || 'server_env_token')

        // Hủy instance cũ nếu đang chuyển đổi chế độ hiển thị hoặc làm mới
        if (clientInstanceRef.current?.destroy) {
          try {
            clientInstanceRef.current.destroy()
          } catch {
            // Bỏ qua lỗi dọn dẹp DOM của SDK cũ
          }
          clientInstanceRef.current = null
        }

        if (displayMode === 'floating') {
          setAuthStatus('ready')
          window.dispatchEvent(new CustomEvent('open-coze-floating-chat'))
          return
        }

        const mountElement = embeddedMountRef.current

        if (mountElement) {
          mountElement.innerHTML = ''
        }

        // Bước 3: Khởi tạo CozeWebSDK.WebChatClient ở chế độ Native React (isIframe: false)
        const clientOptions = {
          config: {
            bot_id: authPayload.botId || DEFAULT_COZE_BOT_ID,
            isIframe: false
          },
          auth: {
            type: 'token',
            token: authPayload.token,
            onRefreshToken: async () => {
              const refreshed = await fetchBackendToken()
              return refreshed.token || ''
            }
          },
          userInfo: {
            id: `${activeRole}-${persistentSessionUserId}`,
            url: '/assets/ecosystem/tro-ly-ai.svg',
            nickname:
              activeRole === 'teacher' ? 'Giáo viên THPT' : 'Học sinh THPT'
          },
          ui: {
            base: {
              icon: '/assets/ecosystem/tro-ly-ai.svg',
              layout: isMobileView ? 'mobile' : 'pc',
              lang: 'en',
              zIndex: 999
            },
            asstBtn: {
              isNeed: false
            },
            header: {
              isShow: true,
              isNeedClose: false
            },
            chatBot: {
              title: CHATBOT_TITLE,
              uploadable: true,
              width: '100%',
              el: mountElement || undefined
            },
            footer: {
              isShow: true,
              expressionText:
                'Hệ sinh thái số Biển Đảo Việt Nam • Nền tảng Coze AI'
            }
          },
          componentProps: {
            title: CHATBOT_TITLE,
            layout: isMobileView ? 'mobile' : 'pc',
            width: '100%'
          }
        }

        if (mountElement) {
          clientOptions.el = mountElement
        }

        const webChatClient = new CozeWebSDK.WebChatClient(clientOptions)
        clientInstanceRef.current = webChatClient
        setAuthStatus('ready')

        if (typeof webChatClient.showChatBot === 'function') {
          try {
            webChatClient.showChatBot()
          } catch {
            // Một số phiên bản tự động hiển thị khi truyền el
          }
        }
      } catch (err) {
        if (!isMounted) return
        setAuthStatus('error')
        setErrorMessage(
          err?.message || 'Không thể khởi tạo Coze WebChat SDK.'
        )
      }
    }

    initCozeChatbot()

    return () => {
      isMounted = false
      if (clientInstanceRef.current?.destroy) {
        try {
          clientInstanceRef.current.destroy()
        } catch {
          // Bỏ qua lỗi khi unmount
        }
        clientInstanceRef.current = null
      }
    }
  }, [
    displayMode,
    isMobileView,
    activeRole,
    persistentSessionUserId,
    fetchBackendToken,
    reloadCounter
  ])

  const filteredPrompts = useMemo(() => {
    if (selectedPromptCategory === 'Tất cả') return SUGGESTED_QUESTIONS
    return SUGGESTED_QUESTIONS.filter(
      (item) => item.category === selectedPromptCategory
    )
  }, [selectedPromptCategory])

  const handleCopyPrompt = (item, index) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(item.prompt)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2200)
    }
    // Lưu vào nhật ký câu hỏi đã tra cứu trong phiên học tập
    setPromptHistory((prev) => {
      const entry = {
        id: `hist-${Date.now()}`,
        category: item.category,
        prompt: item.prompt,
        timestamp: new Date().toLocaleTimeString('vi-VN', {
          hour: '2-digit',
          minute: '2-digit'
        })
      }
      const deduplicated = prev.filter((p) => p.prompt !== item.prompt)
      return [entry, ...deduplicated].slice(0, 8)
    })
  }

  const handleOpenChatPopup = () => {
    window.dispatchEvent(new CustomEvent('open-coze-floating-chat'))
  }

  const scrollToChatStage = () => {
    if (chatWorkspaceRef.current) {
      chatWorkspaceRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="coze-assistant-wrapper">
      {/* =====================================================================
          1. GIAO DIỆN MỞ ĐẦU (HERO SECTION RIÊNG CHO TRỢ LÝ AI BIỂN ĐẢO)
          ===================================================================== */}
      <section className="ai-assistant-hero-banner">
        <div className="ai-hero-grid">
          <div className="ai-hero-text-col">
            <div className="ai-hero-badges">
              <span className="ai-hero-pill gold">
                <Sparkles size={14} />
                <span>COZE AI ENGINE • BOT ID: {botId}</span>
              </span>
              <span className="ai-hero-pill cyan">
                <ShieldCheck size={14} />
                <span>BẢO MẬT TOKEN QUA BACKEND (.ENV)</span>
              </span>
            </div>

            <h2 className="ai-hero-title">TRỢ LÝ AI BIỂN ĐẢO</h2>

            <p className="ai-hero-lead">
              Đồng hành cùng học sinh khám phá và giải đáp tri thức biển đảo Việt Nam.
            </p>

            <p className="ai-hero-desc">
              Hệ thống trợ lý trí tuệ nhân tạo được tích hợp trực tiếp từ nền tảng{' '}
              <strong>Coze WebChat SDK v1.2.0-beta.6</strong>, hỗ trợ học sinh và
              giáo viên THPT tra cứu nhanh sử liệu Hoàng Sa – Trường Sa, Công ước
              Luật Biển UNCLOS 1982, Luật Biển Việt Nam 2012, địa lý tự nhiên và
              gợi ý đề cương thuyết trình.
            </p>

            <div className="ai-hero-highlights">
              <div className="ai-highlight-chip">
                <BookOpen size={15} />
                <span>Sử liệu Châu bản &amp; Mộc bản</span>
              </div>
              <div className="ai-highlight-chip">
                <Scale size={15} />
                <span>UNCLOS 1982 &amp; Luật Biển 2012</span>
              </div>
              <div className="ai-highlight-chip">
                <Compass size={15} />
                <span>Địa lý &amp; Bản đồ số Biển Đông</span>
              </div>
            </div>

            <div className="ai-hero-actions">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={scrollToChatStage}
              >
                <MessageSquare size={17} />
                <span>Bắt đầu Trò chuyện cùng Trợ lý AI</span>
              </button>

              <button
                type="button"
                className="ai-hero-sec-btn"
                onClick={() => setShowSecurityModal((v) => !v)}
              >
                <Server size={16} />
                <span>
                  {showSecurityModal
                    ? 'Ẩn Kiến trúc Bảo mật Backend'
                    : 'Phương án Bảo mật Token Backend'}
                </span>
              </button>
            </div>
          </div>

          <div className="ai-hero-visual-col">
            <div className="ai-hero-artwork-card">
              <img
                src="/assets/ai/hero-tro-ly-ai.svg"
                alt="Trợ lý AI Biển Đảo – Kết nối dữ liệu bản đồ, lịch sử và công nghệ biển đảo"
                className="ai-hero-artwork-img"
              />
            </div>
          </div>
        </div>

        {/* Hộp thuyết minh Phương án bảo mật Token qua Backend (Đáp ứng mục I.3) */}
        {showSecurityModal && (
          <div className="ai-backend-architecture-box">
            <div className="ai-arch-header">
              <Lock size={18} />
              <h4>
                Phương án Kiến trúc Bảo mật Xác thực Coze SDK qua Backend &amp; Biến môi trường
              </h4>
            </div>
            <div className="ai-arch-steps-grid">
              <div className="ai-arch-step">
                <strong>1. Không lưu PAT ở Frontend</strong>
                <p>
                  Mã nguồn React tuyệt đối không chứa chuỗi{' '}
                  <code>pat_...</code> hoặc khóa bí mật. Tệp <code>.env</code> đã
                  được đưa vào <code>.gitignore</code> để ngăn chặn rò rỉ lên GitHub.
                </p>
              </div>
              <div className="ai-arch-step">
                <strong>2. Endpoint Nội bộ (/api/coze/token)</strong>
                <p>
                  Khi học sinh mở trang Trợ lý AI, trình duyệt gọi{' '}
                  <code>GET /api/coze/token</code>. Máy chủ đọc{' '}
                  <code>process.env.COZE_API_TOKEN</code> (hoặc ký OAuth JWT ngắn hạn)
                  và cấp cho phiên làm việc.
                </p>
              </div>
              <div className="ai-arch-step">
                <strong>3. Tự động Làm mới (onRefreshToken)</strong>
                <p>
                  <code>CozeWebSDK.WebChatClient</code> sử dụng callback{' '}
                  <code>onRefreshToken</code> để tự động xin cấp lại token mới từ
                  Backend khi hết hạn mà không làm gián đoạn cuộc hội thoại.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* =====================================================================
          2. THANH ĐIỀU KHIỂN TRẠNG THÁI KẾT NỐI, MỞ RỘNG / THU NHỎ KHUNG CHAT
          ===================================================================== */}
      <div className="coze-top-status-bar" ref={chatWorkspaceRef}>
        <div className="coze-status-left">
          {/* Ảnh đại diện & Trạng thái kết nối trực quan */}
          <div className="coze-avatar-status-wrap">
            <div className="coze-bot-avatar-ring">
              <img
                src="/assets/ecosystem/tro-ly-ai.svg"
                alt="Avatar Trợ lý AI Biển Đảo"
                className="coze-bot-avatar-img"
              />
              <span
                className={`coze-live-dot ${
                  authStatus === 'ready'
                    ? 'online'
                    : authStatus === 'checking'
                      ? 'checking'
                      : 'offline'
                }`}
              />
            </div>
            <div className="coze-bot-meta">
              <strong>Trợ lý AI Biển Đảo Việt Nam</strong>
              <span>
                Coze SDK v1.2.0-beta.6 • Bot ID: <code>{botId}</code>
              </span>
            </div>
          </div>

          <span
            className={`coze-security-pill ${
              authStatus === 'ready'
                ? 'is-ready'
                : authStatus === 'unconfigured'
                  ? 'is-warning'
                  : 'is-checking'
            }`}
          >
            <ShieldCheck size={15} />
            <span>
              {authStatus === 'ready' &&
                (authMode === 'oauth_jwt'
                  ? 'Trạng thái: Đã kết nối (OAuth JWT Backend)'
                  : 'Trạng thái: Đã kết nối (Token Backend .env)')}
              {authStatus === 'checking' && 'Trạng thái: Đang kiểm tra kết nối...'}
              {authStatus === 'unconfigured' &&
                'Trạng thái: Chờ cấu hình COZE_API_TOKEN (.env)'}
              {authStatus === 'error' && 'Trạng thái: Tạm gián đoạn kết nối'}
            </span>
          </span>
        </div>

        <div className="coze-status-actions">
          {/* Nút Mở rộng / Thu nhỏ khung trò chuyện */}
          <button
            type="button"
            className={`coze-expand-toggle-btn ${
              isWorkspaceExpanded ? 'active' : ''
            }`}
            onClick={() => setIsWorkspaceExpanded((prev) => !prev)}
            title="Mở rộng hoặc thu nhỏ không gian khung trò chuyện"
          >
            {isWorkspaceExpanded ? (
              <>
                <Minimize2 size={14} />
                <span>Thu nhỏ khung chat</span>
              </>
            ) : (
              <>
                <Maximize2 size={14} />
                <span>Mở rộng toàn khung</span>
              </>
            )}
          </button>

          <div
            className="coze-mode-switcher"
            role="group"
            aria-label="Chế độ hiển thị"
          >
            <button
              type="button"
              className={`coze-mode-btn ${displayMode === 'embedded' ? 'active' : ''}`}
              onClick={() => setDisplayMode('embedded')}
            >
              <Monitor size={14} />
              <span>Nhúng trong trang</span>
            </button>
            <button
              type="button"
              className={`coze-mode-btn ${displayMode === 'floating' ? 'active' : ''}`}
              onClick={() => setDisplayMode('floating')}
            >
              <MessageSquare size={14} />
              <span>Cửa sổ nổi</span>
            </button>
          </div>

          <button
            type="button"
            className="coze-refresh-btn"
            onClick={() => setReloadCounter((c) => c + 1)}
            title="Kiểm tra lại kết nối Backend và làm mới Coze SDK"
          >
            <RefreshCw size={15} />
            <span>Kết nối lại</span>
          </button>
        </div>
      </div>

      {/* =====================================================================
          3. BỐ CỤC KHUNG TRÒ CHUYỆN HIỆN ĐẠI, RỘNG RÃI + GỢI Ý & LỊCH SỬ
          ===================================================================== */}
      <div
        className={`coze-main-grid ${
          isWorkspaceExpanded ? 'is-workspace-expanded' : ''
        }`}
      >
        {/* Cột trái: Gợi ý câu hỏi theo chủ đề & Lịch sử hội thoại/tra cứu */}
        <aside className="coze-guide-sidebar">
          <div className="coze-sidebar-card">
            <div className="coze-sidebar-header">
              <div className="coze-sidebar-icon">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3>Gợi ý Câu hỏi &amp; Lịch sử Phiên</h3>
                <p>Chọn câu hỏi mẫu để sao chép và gửi vào khung chat Coze</p>
              </div>
            </div>

            <div className="coze-device-indicator">
              {isMobileView ? (
                <>
                  <Smartphone size={15} />
                  <span>Giao diện tối ưu cho Điện thoại (Mobile)</span>
                </>
              ) : (
                <>
                  <Monitor size={15} />
                  <span>Giao diện tối ưu cho Máy tính (Desktop)</span>
                </>
              )}
            </div>

            {/* Bộ lọc chủ đề câu hỏi gợi ý */}
            <div className="coze-prompt-cat-pills">
              {PROMPT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`coze-cat-pill ${
                    selectedPromptCategory === cat ? 'active' : ''
                  }`}
                  onClick={() => setSelectedPromptCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="coze-prompts-section">
              <h4>
                Câu hỏi gợi ý dành cho Học sinh THPT ({filteredPrompts.length}):
              </h4>
              <div className="coze-prompts-list">
                {filteredPrompts.map((item, idx) => (
                  <div key={item.id || idx} className="coze-prompt-item">
                    <div className="coze-prompt-top">
                      <span className="coze-prompt-cat">{item.category}</span>
                      <button
                        type="button"
                        className="coze-copy-btn"
                        onClick={() => handleCopyPrompt(item, idx)}
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check size={13} />
                            <span>Đã chép câu hỏi</span>
                          </>
                        ) : (
                          <>
                            <Copy size={13} />
                            <span>Sao chép</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="coze-prompt-text">&ldquo;{item.prompt}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lịch sử hội thoại SDK & Nhật ký câu hỏi đã tra cứu */}
            <div className="coze-history-panel">
              <div className="coze-history-head">
                <div className="coze-history-title">
                  <History size={15} />
                  <strong>Lịch sử Hội thoại &amp; Câu hỏi đã chọn</strong>
                </div>
                {promptHistory.length > 0 && (
                  <button
                    type="button"
                    className="coze-clear-hist-btn"
                    onClick={() => setPromptHistory([])}
                    title="Xóa nhật ký câu hỏi đã chọn"
                  >
                    <Trash2 size={13} />
                    <span>Xóa</span>
                  </button>
                )}
              </div>
              <p className="coze-sdk-session-note">
                Phiên hội thoại Coze SDK (ID: <code>{persistentSessionUserId}</code>)
                tự động lưu lịch sử tin nhắn trực tiếp trong khung chat bên phải.
              </p>

              {promptHistory.length > 0 && (
                <div className="coze-prompt-history-list">
                  {promptHistory.map((h) => (
                    <div key={h.id} className="coze-hist-item">
                      <div className="coze-hist-meta">
                        <span>{h.category}</span>
                        <small>{h.timestamp}</small>
                      </div>
                      <p>{h.prompt}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Cột phải: Khung hiển thị chính thức của Coze WebChat SDK */}
        <div
          className={`coze-chat-stage ${
            isWorkspaceExpanded ? 'stage-expanded' : ''
          }`}
        >
          {/* Thanh tiêu đề khung chat hiện đại */}
          <div className="coze-stage-window-bar">
            <div className="coze-window-bar-left">
              <span className="win-dot red" />
              <span className="win-dot gold" />
              <span className="win-dot green" />
              <strong>Khung Trò chuyện Trực tiếp • {CHATBOT_TITLE}</strong>
            </div>
            <div className="coze-window-bar-right">
              <button
                type="button"
                className="coze-win-action-btn"
                onClick={() => setIsWorkspaceExpanded((prev) => !prev)}
              >
                {isWorkspaceExpanded ? (
                  <>
                    <Minimize2 size={13} />
                    <span>Thu gọn</span>
                  </>
                ) : (
                  <>
                    <Maximize2 size={13} />
                    <span>Mở rộng</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {authStatus === 'checking' && (
            <div className="coze-stage-state-card">
              <RefreshCw size={32} className="coze-spin-icon" />
              <h4>Đang khởi tạo Coze WebChat SDK (v1.2.0-beta.6)...</h4>
              <p>
                Đang tải thư viện từ CDN chính thức của Coze và lấy khóa xác
                thực từ máy chủ <code>/api/coze/token</code>.
              </p>
            </div>
          )}

          {authStatus === 'unconfigured' && (
            <div className="coze-stage-state-card is-setup-guide">
              <div className="coze-setup-badge">
                <AlertCircle size={20} />
                <span>CẦN CẤU HÌNH KHÓA XÁC THỰC TRONG TỆP .ENV PHÍA SERVER</span>
              </div>
              <h4>
                Đã tích hợp sẵn Coze WebChat SDK ({sdkLoaded ? 'Đã tải SDK' : 'Đang chờ SDK'}) — Chờ cấp Token
              </h4>
              <p>
                Theo đúng yêu cầu bảo mật (không tạo chatbot giả lập và không
                đặt trực tiếp Personal Access Token trong code Frontend), hệ
                thống đang chờ bạn điền khóa vào tệp <code>.env</code> trên máy:
              </p>

              <ol className="coze-setup-steps">
                <li>
                  Mở tệp <code>.env</code> tại thư mục gốc dự án (tệp này đã
                  được chặn trong <code>.gitignore</code> để không đẩy lên
                  GitHub).
                </li>
                <li>
                  Dán Token Coze của bạn vào dòng{' '}
                  <code>COZE_API_TOKEN=pat_...</code> (hoặc điền thông tin{' '}
                  <code>COZE_OAUTH_*</code> nếu dùng OAuth JWT App) rồi nhấn{' '}
                  <strong>Ctrl + S</strong> để lưu tệp.
                </li>
                <li>
                  Nhấn nút <strong>&ldquo;Kiểm tra &amp; Kết nối ngay&rdquo;</strong> bên
                  dưới (không cần khởi động lại máy chủ web).
                </li>
              </ol>

              <div className="coze-setup-actions">
                <button
                  type="button"
                  className="btn-primary-gold"
                  onClick={() => setReloadCounter((c) => c + 1)}
                >
                  <RefreshCw size={17} />
                  <span>Kiểm tra &amp; Kết nối ngay</span>
                </button>
                <a
                  href="https://www.coze.com/open/oauth/pats"
                  target="_blank"
                  rel="noreferrer"
                  className="coze-ext-link"
                >
                  <span>Lấy Token trên Coze Developer</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          )}

          {authStatus === 'error' && (
            <div className="coze-stage-state-card is-error">
              <AlertCircle size={32} />
              <h4>Không thể kết nối tới Coze WebChat SDK</h4>
              <p>{errorMessage}</p>
              <button
                type="button"
                className="btn-primary-gold"
                onClick={() => setReloadCounter((c) => c + 1)}
              >
                <RefreshCw size={16} />
                <span>Thử kết nối lại</span>
              </button>
            </div>
          )}

          {authStatus === 'ready' && displayMode === 'floating' && (
            <div className="coze-stage-state-card is-floating-active">
              <Sparkles size={34} />
              <h4>Chatbot Coze đang hoạt động ở chế độ Cửa sổ nổi</h4>
              <p>
                Bạn có thể nhấn vào biểu tượng Chatbot ở góc dưới bên phải màn
                hình hoặc nhấn nút bên dưới để mở khung trò chuyện với Trợ lý
                AI Biển Đảo (Bot ID: <code>{botId}</code>).
              </p>
              <div className="coze-setup-actions">
                <button
                  type="button"
                  className="btn-primary-gold"
                  onClick={handleOpenChatPopup}
                >
                  <MessageSquare size={17} />
                  <span>Mở cửa sổ trò chuyện Coze AI</span>
                </button>
                <button
                  type="button"
                  className="coze-switch-inline-btn"
                  onClick={() => setDisplayMode('embedded')}
                >
                  <Maximize2 size={16} />
                  <span>Chuyển sang khung nhúng trực tiếp</span>
                </button>
              </div>
            </div>
          )}

          {/* Vùng DOM Mount chính thức cho CozeWebSDK.WebChatClient ở chế độ nhúng */}
          <div
            id="coze-webchat-mount"
            ref={embeddedMountRef}
            className={`coze-embedded-mount-box ${
              authStatus === 'ready' && displayMode === 'embedded'
                ? 'is-visible'
                : 'is-hidden'
            }`}
          />
        </div>
      </div>
    </div>
  )
}
