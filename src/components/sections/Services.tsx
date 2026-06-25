import { motion } from 'framer-motion'
import { Film, Tv, BookOpen, Eye, Music, Palette, Zap, Radio, Share2, Youtube, Star, Layers } from 'lucide-react'

const services = [
  { title: 'Video Editing', desc: 'Professional editing with seamless cuts and narrative flow that captivates audiences from start to finish.', icon: Film },
  { title: 'News Package Editing', desc: 'Fast-paced broadcast news editing delivering accurate, compelling stories on strict deadlines.', icon: Tv },
  { title: 'Storytelling', desc: 'Compelling narratives crafted with precision to emotionally connect with your target audience.', icon: BookOpen },
  { title: 'Script Visualization', desc: 'Transforming written scripts into powerful visual masterpieces with creative precision.', icon: Eye },
  { title: 'Sound Mixing', desc: 'Crystal clear audio with professional mixing, ensuring every sound element elevates the story.', icon: Music },
  { title: 'Color Grading', desc: 'Cinematic color science delivering stunning, mood-enhancing visuals with professional LUT work.', icon: Palette },
  { title: 'Motion Graphics', desc: 'Dynamic animated graphics that enhance storytelling and add professional polish to productions.', icon: Zap },
  { title: 'Broadcast Production', desc: 'End-to-end broadcast quality production meeting the highest industry standards and requirements.', icon: Radio },
  { title: 'Social Media Content', desc: 'Platform-optimized content designed for maximum engagement across all social media channels.', icon: Share2 },
  { title: 'YouTube Editing', desc: 'Engaging YouTube content with strong retention hooks, clean cuts and subscriber-growing edits.', icon: Youtube },
  { title: 'Special Stories & Packages', desc: 'Unique documentary and feature packages that tell extraordinary stories with depth and impact.', icon: Star },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#080808]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-label">
            Services
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">
            What I Offer
          </motion.h2>
          <div className="gold-divider" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/40 text-sm max-w-xl mx-auto font-light">
            Comprehensive video production services tailored to tell your story with impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, borderColor: 'rgba(201,168,76,0.4)' }}
                className="glass-card p-8 cursor-default group transition-all duration-300 hover:shadow-2xl hover:shadow-[#c9a84c]/5"
              >
                <div className="w-14 h-14 rounded-xl border border-[#c9a84c]/20 flex items-center justify-center mb-6 group-hover:border-[#c9a84c]/50 group-hover:bg-[#c9a84c]/5 transition-all duration-300">
                  <Icon size={22} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-white font-bold text-base mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{service.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
