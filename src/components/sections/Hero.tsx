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

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = []
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

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize) }
  }, [])

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c9a84c]/3 rounded-full blur-[120px] animate-float-slow" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden select-none pointer-events-none">
        <span className="text-[12vw] font-black text-white/[0.02] tracking-widest uppercase whitespace-nowrap">
          VIDEO EDITOR
        </span>
      </div>

      {/* Decorative lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-[#c9a84c]/40" />
        <div className="w-1 h-1 rounded-full bg-[#c9a84c]/60" />
        <div className="w-[1px] h-24 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container-custom pt-24 pb-12 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <div className="h-[1px] w-10 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-xs font-bold tracking-[6px] uppercase">Senior Video Editor</span>
          <div className="h-[1px] w-10 bg-[#c9a84c]" />
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.25)} className="text-[clamp(48px,8vw,96px)] font-black leading-[0.9] tracking-tight mb-2">
          Purna Chandra
        </motion.h1>
        <motion.h1 {...fadeUp(0.35)} className="text-[clamp(48px,8vw,96px)] font-black leading-[0.9] tracking-tight gradient-gold mb-8">
          Koppisetti
        </motion.h1>

        {/* Tagline */}
        <motion.p {...fadeUp(0.45)} className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-4 font-light italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          "Transforming Stories Into Powerful Visual Experiences"
        </motion.p>

        {/* Description */}
        <motion.p {...fadeUp(0.5)} className="text-white/40 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Dynamic and results-oriented Senior Video Editor with 9+ years of experience in digital media and video production. Specialized in storytelling, post-production, sound mixing, color correction and creating high-quality visual content.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.6)} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button onClick={() => scrollTo('#portfolio')} className="btn-gold">
            <Play size={16} fill="currentColor" />
            View Showreel
          </button>
          <button onClick={() => scrollTo('#contact')} className="btn-outline">
            <Mail size={16} />
            Contact Me
          </button>
        </motion.div>

        {/* Info row */}
        <motion.div {...fadeUp(0.7)} className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-xs font-light">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#c9a84c]" />
            <span>Kukatpally, Hyderabad, Telangana</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-[#c9a84c]" />
            <span>Telugu • English • Hindi</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          {...fadeUp(1.0)}
          onClick={() => scrollTo('#about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#c9a84c] transition-colors cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase font-light">Scroll</span>
          <ChevronDown size={18} className="animate-bounce-y" />
        </motion.button>
      </div>
    </section>
  )
}
