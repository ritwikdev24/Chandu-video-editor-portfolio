import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'

const categories = [
  'All',
  'News Packages',
  'Special Stories',
  'Social Media Videos',
  'Promotional Videos',
  'Showreels',
]

const portfolioItems = [
  {
    id: 1,
    title: 'News Package 1',
    category: 'News Packages',
    image: '/1st.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/Igdd5aNq1Yo',
  },
  {
    id: 2,
    title: 'News Package 2',
    category: 'News Packages',
    image: '/2nd.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/C5YjgFJoxmA',
  },
  {
    id: 3,
    title: 'Special Story',
    category: 'Special Stories',
    image: '/3rd.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/uQMhYbjDUc0',
  },
  {
    id: 4,
    title: 'Social Media Video',
    category: 'Social Media Videos',
    image: '/4th.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/D9ejaJanLjw',
  },
  {
    id: 5,
    title: 'Promotional Video',
    category: 'Promotional Videos',
    image: '/5th.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/RjdpctPl-tg',
  },
  {
    id: 6,
    title: 'Showreel',
    category: 'Showreels',
    image: '/6th.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/_VPubJkExM8',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [modalItem, setModalItem] = useState<(typeof portfolioItems)[0] | null>(null)

  const filtered =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding bg-[#0d0d0d]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Portfolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Featured Work
          </motion.h2>

          <div className="gold-divider" />
        </div>

        {/* Filter Tabs */}
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

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="
                            group
                            overflow-hidden
                            rounded-3xl
                            border border-[#c9a84c]/15
                            bg-[#111]
                            hover:border-[#c9a84c]/40
                            hover:-translate-y-2
                            hover:shadow-[0_20px_60px_rgba(201,168,76,0.18)]
                            transition-all
                            duration-500
                            "
              >
                {/* Thumbnail */}
                {/* Thumbnail */}
<div
  className="relative aspect-video overflow-hidden cursor-pointer"
  onClick={() => setModalItem(item)}
>
  {/* Background Image */}
  <img
  src={item.image}
  alt={item.title}
  loading="lazy"
  draggable={false}
  className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110 transition-transform duration-700 group-hover:scale-110"
/>

<div className="absolute inset-0 border border-[#c9a84c]/15 pointer-events-none" />

  {/* Dark Overlay */}
  {/* Dark Overlay */}
<div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all duration-300" />

  {/* Bottom Gradient */}
  {/* Bottom Gradient */}
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

  {/* Category Badge */}
  <div className="absolute top-4 right-4 z-20">
    <span className="px-4 py-1 rounded-full border border-[#c9a84c]/50 bg-[#1b1710]/70 backdrop-blur-md text-[#c9a84c] text-[10px] font-bold tracking-[2px] uppercase">
      {item.category}
    </span>
  </div>

  {/* Play Button */}
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <div className="w-14 h-14 rounded-full border-2 border-[#c9a84c]/70 bg-black/20 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c9a84c]/20 group-hover:border-[#c9a84c]">
      <Play
        size={18}
        className="text-[#c9a84c] ml-1"
        fill="currentColor"
      />
    </div>
  </div>
</div>

                {/* Content */}
                <div className="p-6 bg-[#111111]">
  <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-[#c9a84c] transition-colors duration-300">
    {item.title}
  </h3>

  <button
    onClick={() => setModalItem(item)}
    className="inline-flex items-center gap-2 text-[#c9a84c] text-sm font-semibold uppercase tracking-[2px] hover:gap-3 transition-all duration-300"
  >
    <Play size={14} fill="currentColor" />
    Watch Video
  </button>
</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal */}
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
              className="relative w-full max-w-4xl bg-[#0d0d0d] rounded-2xl border border-[#c9a84c]/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/5">
                <div>
                  <h3 className="font-bold text-white">
                    {modalItem.title}
                  </h3>

                  <span className="text-[#c9a84c] text-sm">
                    {modalItem.category}
                  </span>
                </div>

                <button
                  onClick={() => setModalItem(null)}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="aspect-video">
                <iframe
                src={`${modalItem.youtubeUrl}?autoplay=1&rel=0&modestbranding=1`}
                  className="w-full h-full"
                  title={modalItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}