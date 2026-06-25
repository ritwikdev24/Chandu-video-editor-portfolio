import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'Adobe Premiere Pro', percentage: 95, emoji: '🎬' },
  { name: 'Adobe Photoshop', percentage: 85, emoji: '🎨' },
  { name: 'Video Editing', percentage: 95, emoji: '✂️' },
  { name: 'Storytelling', percentage: 95, emoji: '📖' },
  { name: 'Sound Mixing', percentage: 90, emoji: '🎵' },
  { name: 'Color Correction', percentage: 90, emoji: '🎞️' },
  { name: 'Motion Graphics', percentage: 85, emoji: '⚡' },
  { name: 'Post Production', percentage: 95, emoji: '🖥️' },
  { name: 'Workflow Management', percentage: 95, emoji: '📋' },
  { name: 'Windows OS', percentage: 90, emoji: '💻' },
]

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setWidth(skill.percentage), 200)
      return () => clearTimeout(t)
    }
  }, [inView, skill.percentage])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="glass-card p-6 hover:border-[#c9a84c]/30 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.emoji}</span>
          <span className="text-sm font-semibold text-white/80">{skill.name}</span>
        </div>
        <span className="gradient-gold text-sm font-bold">{skill.percentage}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${width}%` }} />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#080808]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-label">
            Expertise
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">
            Crafting Excellence
          </motion.h2>
          <div className="gold-divider" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/40 text-sm max-w-xl mx-auto font-light">
            Years of mastery across industry-leading tools and techniques, delivering broadcast-quality results.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((s, i) => <SkillCard key={s.name} skill={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
