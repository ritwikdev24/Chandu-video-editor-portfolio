import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const companies = [
  { year: 'Present', name: 'ITS U TV', role: 'Senior Video Editor', current: true },
  { year: '2016', name: 'Myra Media', role: 'Video Editor', current: false },
  { year: '2016', name: 'IFrames Media', role: 'Video Editor', current: false },
  { year: '2016', name: 'NN Media', role: 'Video Editor', current: false },
  { year: '2016', name: 'HashtagU', role: 'Video Editor', current: false },
  { year: '2016', name: 'Red TV', role: 'Video Editor', current: false },
  { year: '2016', name: 'RTV', role: 'Video Editor', current: false },
  { year: '2016', name: 'Vihari News', role: 'Video Editor', current: false },
  { year: '2016', name: 'Point Blank TV', role: 'Video Editor', current: false },
]

const sortedCompanies = [...companies].sort((a, b) => {
  if (a.year === 'Present') return -1
  if (b.year === 'Present') return 1
  return Number(b.year) - Number(a.year)
})

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#0d0d0d]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-label">
            Journey
          </motion.span>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">
            Years of Excellence
          </motion.h2>

          <div className="gold-divider" />

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-3 px-6 py-3 border border-[#c9a84c]/30 rounded-full">
            <Briefcase size={14} className="text-[#c9a84c]" />
            <span className="gradient-gold text-sm font-bold">9+ Years in Digital Media</span>
          </motion.div>
        </div>

        <div className="relative timeline-container max-w-4xl mx-auto">
          <div className="space-y-8">
            {sortedCompanies.map((company, i) => {
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={`${company.name}-${i}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row pl-10 md:pl-0`}
                >
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`glass-card p-6 inline-block w-full md:w-auto md:min-w-[260px] ${company.current ? 'border-[#c9a84c]/40 shadow-lg shadow-[#c9a84c]/5' : ''}`}>
                      {company.current && (
                        <div className={`flex items-center gap-2 mb-3 justify-start ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                          <div className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse-gold" />
                          <span className="text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase">Current</span>
                        </div>
                      )}

                      <h3 className={`font-bold text-lg ${company.current ? 'gradient-gold' : 'text-white'} mb-1`}>
                        {company.name}
                      </h3>

                      <div className={`flex items-center gap-2 text-white/40 text-xs justify-start ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        <Briefcase size={10} />
                        <span className="font-semibold tracking-widest uppercase">{company.role}</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex-shrink-0 hidden md:flex">
                    <div className={`w-4 h-4 rounded-full border-2 ${company.current ? 'border-[#c9a84c] bg-[#c9a84c]' : 'border-[#c9a84c]/50 bg-[#080808]'} z-10`} />
                  </div>

                  <div className="absolute left-4 md:hidden">
                    <div className={`w-3 h-3 rounded-full border-2 ${company.current ? 'border-[#c9a84c] bg-[#c9a84c]' : 'border-[#c9a84c]/50 bg-[#080808]'}`} />
                  </div>

                  <div className={`flex-1 ${isLeft ? 'md:text-left' : 'md:text-right'} hidden md:block`}>
                    <div className={`flex items-center gap-2 text-white/30 text-sm ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                      <Calendar size={12} className="text-[#c9a84c]" />
                      <span className={`font-bold ${company.current ? 'text-[#c9a84c]' : ''}`}>{company.year}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}