import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import {
  LayoutDashboard,
  Film,
  MessageSquare,
  Settings,
  LogOut,
  Plus,
  Trash2,
  Edit3,
  Eye,
  Clock,
  Building2,
  Video,
  CheckCircle,
  AlertCircle,
  Lock,
  X,
} from 'lucide-react'

export const Route = createFileRoute('/admin')({
  component: AdminPage,
})

const ADMIN_PASSWORD = 'PCK@admin2026'

type Message = {
  id: number
  name: string
  email: string
  message: string
  createdAt: string
  read: boolean
}

type VideoItem = {
  id: number
  title: string
  category: string
  description: string
  youtubeUrl: string
}

const demoVideos: VideoItem[] = [
  { id: 1, title: 'Breaking News Special', category: 'News Packages', description: 'Live coverage editing', youtubeUrl: 'https://youtube.com/watch?v=demo1' },
  { id: 2, title: 'Human Interest Story', category: 'Special Stories', description: 'Emotional documentary', youtubeUrl: 'https://youtube.com/watch?v=demo2' },
  { id: 3, title: '2024 Showreel', category: 'Showreels', description: 'Best work compilation', youtubeUrl: 'https://youtube.com/watch?v=demo3' },
]

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('pck_admin_auth', '1')
      onLogin()
    } else {
      setError('Invalid password. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#c9a84c]/3 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <div className="gradient-gold text-5xl font-black tracking-widest mb-1">PCK</div>
          <div className="text-[10px] font-light tracking-[6px] text-[#c9a84c]/60 uppercase mb-6">Admin Portal</div>
          <div className="w-12 h-12 rounded-full border border-[#c9a84c]/30 flex items-center justify-center mx-auto bg-[#c9a84c]/5">
            <Lock size={20} className="text-[#c9a84c]" />
          </div>
        </div>

        <div className="glass-card p-8">
          <h2 className="text-white font-bold text-lg mb-2">Admin Login</h2>
          <p className="text-white/40 text-xs font-light mb-8">Enter your credentials to access the dashboard.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-2 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError('') }}
                placeholder="Enter admin password"
                required
                className="input-dark"
              />
            </div>
            {error && (
              <div className="flex items-center gap-2 text-red-400 text-xs">
                <AlertCircle size={14} />
                {error}
              </div>
            )}
            <button type="submit" className="btn-gold w-full justify-center">
              <Lock size={16} />
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, icon: Icon, color = 'text-[#c9a84c]' }: { label: string; value: string | number; icon: React.ElementType; color?: string }) {
  return (
    <div className="glass-card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl border border-[#c9a84c]/20 flex items-center justify-center">
          <Icon size={18} className={color} />
        </div>
      </div>
      <div className={`text-3xl font-black mb-1 ${color === 'text-[#c9a84c]' ? 'gradient-gold' : color}`}>{value}</div>
      <p className="text-white/40 text-xs font-semibold tracking-widest uppercase">{label}</p>
    </div>
  )
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [messages, setMessages] = useState<Message[]>([])
  const [videos, setVideos] = useState<VideoItem[]>(demoVideos)
  const [showAddVideo, setShowAddVideo] = useState(false)
  const [newVideo, setNewVideo] = useState({ title: '', category: 'News Packages', description: '', youtubeUrl: '' })
  const [msgStatus, setMsgStatus] = useState('')

  useEffect(() => {
    if (localStorage.getItem('pck_admin_auth') === '1') setIsLoggedIn(true)
  }, [])

  useEffect(() => {
    if (isLoggedIn && activeTab === 'messages') {
      fetch('/api/admin/messages')
        .then((r) => r.json())
        .then((data) => { if (Array.isArray(data)) setMessages(data) })
        .catch(() => {})
    }
  }, [isLoggedIn, activeTab])

  const logout = () => {
    localStorage.removeItem('pck_admin_auth')
    setIsLoggedIn(false)
  }

  const addVideo = () => {
    if (!newVideo.title) return
    const id = videos.length + 10
    setVideos([...videos, { ...newVideo, id }])
    setNewVideo({ title: '', category: 'News Packages', description: '', youtubeUrl: '' })
    setShowAddVideo(false)
  }

  const deleteVideo = (id: number) => setVideos(videos.filter((v) => v.id !== id))

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'portfolio', label: 'Portfolio', icon: Film },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  if (!isLoggedIn) return <LoginScreen onLogin={() => setIsLoggedIn(true)} />

  return (
    <div className="min-h-screen bg-[#080808] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0d0d0d] border-r border-[#c9a84c]/10 flex flex-col fixed top-0 left-0 h-full z-40">
        <div className="p-6 border-b border-[#c9a84c]/10">
          <div className="gradient-gold text-2xl font-black tracking-widest">PCK</div>
          <div className="text-[10px] font-light tracking-[6px] text-[#c9a84c]/40 uppercase">Admin Portal</div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === id
                  ? 'bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20'
                  : 'text-white/40 hover:text-white/70 hover:bg-white/5'
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-[#c9a84c]/10">
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/40 hover:text-red-400 hover:bg-red-400/5 transition-all duration-200 cursor-pointer"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-64 min-h-screen">
        {/* Top bar */}
        <header className="bg-[#0d0d0d] border-b border-[#c9a84c]/10 px-8 py-4 flex items-center justify-between sticky top-0 z-30">
          <h1 className="text-white font-bold text-base capitalize">{activeTab}</h1>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs font-light">Welcome, Admin</span>
            <div className="w-8 h-8 rounded-full border border-[#c9a84c]/30 flex items-center justify-center bg-[#c9a84c]/10">
              <span className="gradient-gold text-xs font-bold">A</span>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div>
              <p className="text-white/40 text-sm font-light mb-8">Portfolio management overview</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <StatCard label="Total Videos" value={videos.length} icon={Video} />
                <StatCard label="Messages" value={messages.length || '—'} icon={MessageSquare} />
                <StatCard label="Years Active" value="9+" icon={Clock} />
                <StatCard label="Organizations" value="8+" icon={Building2} />
              </div>
              <div className="glass-card p-6">
                <h3 className="text-white font-bold mb-4 text-sm">Quick Actions</h3>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => setActiveTab('portfolio')} className="btn-gold text-xs py-2 px-5">
                    <Plus size={14} />
                    Add Video
                  </button>
                  <button onClick={() => setActiveTab('messages')} className="btn-outline text-xs py-2 px-5">
                    <MessageSquare size={14} />
                    View Messages
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Portfolio */}
          {activeTab === 'portfolio' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <p className="text-white/40 text-sm font-light">Manage portfolio videos</p>
                <button onClick={() => setShowAddVideo(true)} className="btn-gold text-xs py-2 px-5">
                  <Plus size={14} />
                  Add Video
                </button>
              </div>

              {showAddVideo && (
                <div className="glass-card p-6 mb-6 border-[#c9a84c]/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold text-sm">Add New Video</h3>
                    <button onClick={() => setShowAddVideo(false)} className="text-white/40 hover:text-white"><X size={16} /></button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input value={newVideo.title} onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })} placeholder="Video Title" className="input-dark" />
                    <select value={newVideo.category} onChange={(e) => setNewVideo({ ...newVideo, category: e.target.value })} className="input-dark">
                      {['News Packages','Special Stories','Documentaries','Interviews','Social Media Videos','Promotional Videos','Showreels'].map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <input value={newVideo.youtubeUrl} onChange={(e) => setNewVideo({ ...newVideo, youtubeUrl: e.target.value })} placeholder="YouTube URL" className="input-dark" />
                    <input value={newVideo.description} onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })} placeholder="Description" className="input-dark" />
                  </div>
                  <button onClick={addVideo} className="btn-gold text-xs py-2 px-5">
                    <Plus size={14} />
                    Add Video
                  </button>
                </div>
              )}

              <div className="space-y-3">
                {videos.map((video) => (
                  <div key={video.id} className="glass-card p-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center">
                        <Film size={16} className="text-[#c9a84c]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{video.title}</p>
                        <span className="text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase">{video.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-[#c9a84c] hover:border-[#c9a84c]/30 transition-all">
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => deleteVideo(video.id)}
                        className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-red-400 hover:border-red-400/30 transition-all"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          {activeTab === 'messages' && (
            <div>
              <p className="text-white/40 text-sm font-light mb-8">Contact form submissions</p>
              {messages.length === 0 ? (
                <div className="glass-card p-12 text-center">
                  <MessageSquare size={40} className="text-white/20 mx-auto mb-4" />
                  <p className="text-white/40 text-sm font-light">No messages yet. Messages from the contact form will appear here.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className="glass-card p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-white font-semibold text-sm">{msg.name}</p>
                          <p className="text-[#c9a84c] text-xs font-light">{msg.email}</p>
                        </div>
                        <span className="text-white/20 text-[10px] font-light">
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm font-light leading-relaxed">{msg.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Settings */}
          {activeTab === 'settings' && (
            <div>
              <p className="text-white/40 text-sm font-light mb-8">Contact information & site settings</p>
              <div className="glass-card p-8">
                <h3 className="text-white font-bold mb-6 text-sm">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Name', value: 'Purna Chandra Koppisetti' },
                    { label: 'Role', value: 'Senior Video Editor' },
                    { label: 'Phone', value: '+91 95503 01842' },
                    { label: 'Email', value: 'purnachandrakoppisetti@gmail.com' },
                    { label: 'Address', value: 'KPHB, Kukatpally, Hyderabad, Telangana - 500072' },
                    { label: 'Languages', value: 'Telugu, English, Hindi' },
                    { label: 'Experience', value: '9+ Years' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start gap-4 py-3 border-b border-white/5 last:border-0">
                      <span className="text-white/30 text-[10px] font-bold tracking-widest uppercase w-24 flex-shrink-0 pt-0.5">{label}</span>
                      <span className="text-white/70 text-sm font-light">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
