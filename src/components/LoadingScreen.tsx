import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props { onComplete: () => void }

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + 4
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => {
        setVisible(false)
        setTimeout(onComplete, 600)
      }, 300)
      return () => clearTimeout(t)
    }
  }, [progress, onComplete])

  const letters = ['P','C','K']

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#080808] flex flex-col items-center justify-center"
        >
          {/* Blurred circles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Letters */}
            <div className="flex gap-2 mb-2">
              {letters.map((l, i) => (
                <motion.span
                  key={l}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                  className="gradient-gold text-7xl font-black tracking-widest"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {l}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[#c9a84c]/60 text-xs tracking-[8px] uppercase mb-16 font-light"
            >
              Studios
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden"
            >
              <div
                className="h-full rounded-full transition-all duration-100 ease-linear"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #c9a84c, #e8c97e)',
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/20 text-xs mt-4 font-light tracking-widest"
            >
              {progress}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
