import { motion } from 'framer-motion'
import { MapPin, Globe, Play, Mail, ChevronDown } from 'lucide-react'
import { useEffect, useRef } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }[] = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    let rafId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`
        ctx.fill()
      })

      rafId = requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#c9a84c]/5 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#c9a84c]/3 blur-[120px] animate-float-slow" />

      <div className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center overflow-hidden">
        <span className="whitespace-nowrap text-[12vw] font-black uppercase tracking-widest text-white/[0.02]">
          VIDEO EDITOR
        </span>
      </div>

      <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-2 xl:flex">
        <div className="h-24 w-[1px] bg-gradient-to-b from-transparent to-[#c9a84c]/40" />
        <div className="h-1 w-1 rounded-full bg-[#c9a84c]/60" />
        <div className="h-24 w-[1px] bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
      </div>

      <div className="relative z-10 container-custom px-4 pt-32 pb-16 text-center sm:pt-36 md:pt-40 lg:pt-24">
        <motion.div
          {...fadeUp(0.1)}
          className="mb-6 inline-flex items-center justify-center gap-2 lg:mb-8"
        >
          <div className="h-[1px] w-8 bg-[#c9a84c] sm:w-10" />
          <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#c9a84c] sm:text-xs sm:tracking-[6px]">
            VIDEO EDITOR
          </span>
          <div className="h-[1px] w-8 bg-[#c9a84c] sm:w-10" />
        </motion.div>

       <motion.p
  {...fadeUp(0.2)}
  className="mb-2 text-lg font-medium uppercase tracking-[6px] text-[#c9a84c]"
>
  Hello, I'm
</motion.p>

      <motion.h1
        {...fadeUp(0.3)}
        className="text-[clamp(34px,12vw,86px)] font-black leading-[0.95] text-white"
      >
        Purna Chandra
      </motion.h1>

      <motion.h1
        {...fadeUp(0.4)}
        className="gradient-gold text-[clamp(34px,12vw,80px)] font-black leading-[0.95]"
      >
        Koppisetti
      </motion.h1>

        <motion.p
          {...fadeUp(0.45)}
          className="mx-auto mb-4 max-w-xl text-base font-light italic text-white/50 md:text-xl"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
           Turning Ideas Into Cinematic Experiences.
        </motion.p>

        <motion.p
          {...fadeUp(0.5)}
          className="mx-auto mb-8 max-w-2xl text-sm font-light leading-relaxed text-white/40 md:text-base lg:mb-10"
        >
          Senior Video Editor with 9+ years of experience crafting cinematic visuals through professional editing, color grading, and storytelling.
        </motion.p>

        <motion.div
          {...fadeUp(0.6)}
          className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mb-12"
        >
          <button onClick={() => scrollTo('#portfolio')} className="btn-gold">
            <Play size={16} fill="currentColor" />
            View Showreel
          </button>

          <button onClick={() => scrollTo('#contact')} className="btn-outline">
            <Mail size={16} />
            Contact Me
          </button>
        </motion.div>

        <motion.div
          {...fadeUp(0.7)}
          className="flex flex-col flex-wrap items-center justify-center gap-4 text-xs font-light text-white/40 sm:flex-row sm:gap-6"
        >
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#c9a84c]" />
            <span>Kukatpally, Hyderabad, Telangana</span>
          </div>

          <div className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

          <div className="flex items-center gap-2">
            <Globe size={14} className="text-[#c9a84c]" />
            <span>Telugu • English • Hindi</span>
          </div>
        </motion.div>

        <motion.button
          {...fadeUp(1.0)}
          onClick={() => scrollTo('#about')}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-white/30 transition-colors hover:text-[#c9a84c] lg:flex"
        >
          <span className="text-[10px] font-light uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown size={18} className="animate-bounce-y" />
        </motion.button>
      </div>
    </section>
  )
}