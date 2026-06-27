import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, ExternalLink } from 'lucide-react'

const categories = ['All', 'News Packages', 'Special Stories', 'Documentaries', 'Interviews', 'Social Media Videos', 'Promotional Videos', 'Showreels']

const portfolioItems = [
  { id: 1, title: 'Breaking News Special', category: 'News Packages', description: 'Live coverage editing for prime time news broadcast with real-time graphics and lower thirds.', youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 2, title: 'Human Interest Story', category: 'Special Stories', description: 'Emotional documentary-style editing on social impact stories connecting audiences to real lives.', youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 3, title: 'Corporate Documentary', category: 'Documentaries', description: 'Full length corporate history documentary with archival footage integration and narration.', youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 4, title: 'Celebrity Interview', category: 'Interviews', description: 'Prime time celebrity interview package with multi-camera switching and B-roll integration.', youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 5, title: 'Viral Social Reel', category: 'Social Media Videos', description: 'High engagement social media content optimized for maximum reach and viewer retention.', youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 6, title: 'Brand Campaign', category: 'Promotional Videos', description: '360 degree brand promotional campaign delivering consistent messaging across all platforms.', youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 7, title: '2024 Showreel', category: 'Showreels', description: 'Best work compilation from 2024 showcasing versatility across genres and formats.', youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 8, title: 'Election Coverage', category: 'News Packages', description: 'Special election night coverage package with live updates, graphics and result presentations.', youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [modalItem, setModalItem] = useState<typeof portfolioItems[0] | null>(null)

  const filtered = activeCategory === 'All' ? portfolioItems : portfolioItems.filter(i => i.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding bg-[#0d0d0d]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-label">
            Portfolio
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">
            Featured Work
          </motion.h2>
          <div className="gold-divider" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'btn-gold py-2 px-5'
                  : 'border border-white/10 text-white/40 hover:border-[#c9a84c]/40 hover:text-[#c9a84c]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card overflow-hidden group cursor-pointer hover:border-[#c9a84c]/30 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div
                  className="relative aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center overflow-hidden"
                  onClick={() => setModalItem(item)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/5 to-transparent" />
                  <div className="w-16 h-16 rounded-full border-2 border-[#c9a84c]/40 flex items-center justify-center group-hover:scale-110 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10 transition-all duration-300">
                    <Play size={24} className="text-[#c9a84c] ml-1" fill="currentColor" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#c9a84c] transition-colors">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed font-light mb-4">{item.description}</p>
                  <button
                    onClick={() => setModalItem(item)}
                    className="flex items-center gap-2 text-[#c9a84c] text-xs font-bold tracking-widest uppercase hover:gap-3 transition-all duration-300"
                  >
                    <Play size={12} fill="currentColor" />
                    Watch Video
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setModalItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative w-full max-w-3xl bg-[#0d0d0d] rounded-2xl border border-[#c9a84c]/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/5">
                <div>
                  <h3 className="font-bold text-white text-sm">{modalItem.title}</h3>
                  <span className="text-[#c9a84c] text-xs">{modalItem.category}</span>
                </div>
                <button
                  onClick={() => setModalItem(null)}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="aspect-video">
                <iframe
                  src={modalItem.youtubeUrl + '?autoplay=1'}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={modalItem.title}
                />
              </div>
              <div className="p-4">
                <p className="text-white/50 text-xs font-light">{modalItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
