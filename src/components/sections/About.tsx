import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Building2, Video, Star } from 'lucide-react'

const stats = [
  { value: 9, suffix: '+', label: 'Years Experience', icon: Clock },
  { value: 8, suffix: '+', label: 'Media Organizations', icon: Building2 },
  { value: 5000, suffix: '+', label: 'Videos Edited', icon: Video },
  { value: 100, suffix: '%', label: 'Quality Delivery', icon: Star },
]

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = stat.value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) { setCount(stat.value); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, stat.value])

  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass-card p-8 text-center hover:border-[#c9a84c]/30 transition-all duration-300 group"
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-[#c9a84c]/20 flex items-center justify-center group-hover:border-[#c9a84c]/50 transition-all duration-300">
        <Icon size={20} className="text-[#c9a84c]" />
      </div>
      <div className="gradient-gold text-4xl font-black mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-white/50 text-xs font-semibold tracking-widest uppercase">{stat.label}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#0d0d0d]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            The Artist Behind The Frame
          </motion.h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="text-[#c9a84c] text-8xl font-serif leading-none opacity-20 absolute -top-6 -left-4">"</div>
              <blockquote className="relative z-10 text-white/70 text-lg leading-relaxed font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', lineHeight: '1.8' }}>
                Dynamic and results-oriented professional with over 9 years of experience in video production and editing. Skilled in editing techniques, storytelling, script visualization, motion graphics, sound mixing and post-production workflows.
              </blockquote>
              <div className="text-[#c9a84c] text-8xl font-serif leading-none opacity-20 text-right -mb-8 -mr-4">"</div>
            </div>

            <div className="mt-12">
              <p className="text-white/50 text-sm leading-relaxed font-light mb-6">
                Proven ability to deliver high-quality stories and visual content while maintaining strict deadlines and broadcast standards. A dedicated craftsman who treats every frame as an opportunity to tell a better story.
              </p>
              <div className="flex items-center gap-4">
                <div className="gold-divider-left mb-0 w-12" />
                <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">Senior Video Editor</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Image placeholder with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-sm mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/10 to-transparent rounded-2xl border border-[#c9a84c]/20" />
              <div className="absolute inset-4 border border-[#c9a84c]/10 rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="gradient-gold text-6xl font-black mb-2">PCK</div>
                  <div className="text-white/30 text-xs tracking-widest uppercase">Senior Video Editor</div>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#c9a84c]/60 rounded-tl" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#c9a84c]/60 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#c9a84c]/60 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#c9a84c]/60 rounded-br" />
            </div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
