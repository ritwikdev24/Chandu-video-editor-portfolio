import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Creative Director',
    company: 'ITS U TV',
    quote: 'Professional and highly creative editor. Purna brings a unique vision to every project that consistently elevates our production quality to new heights.',
    rating: 5,
  },
  {
    name: 'Executive Producer',
    company: 'Red TV',
    quote: 'Exceptional storytelling and output quality. His ability to craft compelling narratives from raw footage is truly unmatched in the industry.',
    rating: 5,
  },
  {
    name: 'News Director',
    company: 'Vihari News',
    quote: 'Always delivers on time, every time. Under the most intense deadline pressure, Purna maintains a quality level that sets the benchmark for our entire team.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-[#080808]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-label">
            Testimonials
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">
            What They Say
          </motion.h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 relative group hover:border-[#c9a84c]/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="text-[#c9a84c]/20 mb-6 group-hover:text-[#c9a84c]/30 transition-colors">
                <Quote size={40} />
              </div>

              {/* Quote */}
              <p className="text-white/70 text-sm leading-relaxed font-light mb-8 italic" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '17px', lineHeight: '1.8' }}>
                "{t.quote}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} className="text-[#c9a84c]" fill="#c9a84c" />
                ))}
              </div>

              {/* Author */}
              <div className="border-t border-white/5 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#c9a84c]/30 flex items-center justify-center bg-[#c9a84c]/10">
                    <span className="gradient-gold text-sm font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-[#c9a84c] text-xs font-light">{t.company}</p>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c9a84c]/20 group-hover:border-[#c9a84c]/40 transition-colors rounded-tr-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
