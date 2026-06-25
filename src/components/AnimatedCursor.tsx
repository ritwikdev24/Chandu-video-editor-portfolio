import { useEffect, useRef, useState } from 'react'

export default function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setIsMobile(window.innerWidth < 768)
    if (window.innerWidth < 768) return

    let ringX = 0, ringY = 0
    let dotX = 0, dotY = 0
    let rafId: number

    const handleMove = (e: MouseEvent) => {
      dotX = e.clientX
      dotY = e.clientY
    }

    const animate = () => {
      ringX += (dotX - ringX) * 0.12
      ringY += (dotY - ringY) * 0.12
      if (dotRef.current) {
        dotRef.current.style.left = dotX + 'px'
        dotRef.current.style.top = dotY + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px'
        ringRef.current.style.top = ringY + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }

    const handleEnter = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(2)'
      if (ringRef.current) { ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)'; ringRef.current.style.background = 'rgba(201,168,76,0.1)' }
    }
    const handleLeave = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
      if (ringRef.current) { ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'; ringRef.current.style.background = 'transparent' }
    }

    document.addEventListener('mousemove', handleMove)
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ transition: 'transform 0.2s ease' }} />
      <div ref={ringRef} className="cursor-ring" style={{ transition: 'transform 0.3s ease, background 0.3s ease' }} />
    </>
  )
}
