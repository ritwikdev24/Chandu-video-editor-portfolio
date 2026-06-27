import { motion } from 'framer-motion'
import {
  Clapperboard,
  Image,
  Scissors,
  BookOpen,
  Music,
  Palette,
  Sparkles,
  MonitorPlay,
  ClipboardList,
  Monitor,
  type LucideIcon,
} from 'lucide-react'

const skills: {
  name: string
  percentage: number
  icon: LucideIcon
  color: string
  glow: string
}[] = [
  {
    name: 'Adobe Premiere Pro',
    percentage: 95,
    icon: Clapperboard,
    color: '#a78bfa',
    glow: 'rgba(167, 139, 250, 0.35)',
  },
  {
    name: 'Adobe Photoshop',
    percentage: 85,
    icon: Image,
    color: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.35)',
  },
  {
    name: 'Video Editing',
    percentage: 95,
    icon: Scissors,
    color: '#facc15',
    glow: 'rgba(250, 204, 21, 0.35)',
  },
  {
    name: 'Storytelling',
    percentage: 95,
    icon: BookOpen,
    color: '#fb923c',
    glow: 'rgba(251, 146, 60, 0.35)',
  },
  {
    name: 'Sound Mixing',
    percentage: 90,
    icon: Music,
    color: '#22c55e',
    glow: 'rgba(34, 197, 94, 0.35)',
  },
  {
    name: 'Color Correction',
    percentage: 90,
    icon: Palette,
    color: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.35)',
  },
  {
    name: 'Motion Graphics',
    percentage: 85,
    icon: Sparkles,
    color: '#f97316',
    glow: 'rgba(249, 115, 22, 0.35)',
  },
  {
    name: 'Post Production',
    percentage: 95,
    icon: MonitorPlay,
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.35)',
  },
  {
    name: 'Workflow Management',
    percentage: 95,
    icon: ClipboardList,
    color: '#84cc16',
    glow: 'rgba(132, 204, 22, 0.35)',
  },
  {
    name: 'Windows OS',
    percentage: 90,
    icon: Monitor,
    color: '#60a5fa',
    glow: 'rgba(96, 165, 250, 0.35)',
  },
]

function SkillCard({ skill }: { skill: typeof skills[0] }) {
  const Icon = skill.icon

  return (
    <div className="glass-card p-6 hover:border-[#c9a84c]/30 transition-all duration-300">
      <div className="flex items-center gap-4">
        <motion.div
          animate={{
            y: [0, -4, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]"
          style={{
            boxShadow: `0 0 24px ${skill.glow}`,
          }}
        >
          <Icon size={26} color={skill.color} strokeWidth={1.8} />
        </motion.div>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-white/85">
            {skill.name}
          </h3>
          <p className="mt-1 text-xs font-medium text-white/35">
            {skill.percentage}% proficiency
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#080808]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Expertise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Crafting Excellence
          </motion.h2>

          <div className="gold-divider" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm max-w-xl mx-auto font-light"
          >
            Years of mastery across industry-leading tools and techniques, delivering broadcast-quality results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}