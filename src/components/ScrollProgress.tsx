import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setProgress(scrollTop / (scrollHeight - clientHeight))
    }
    window.addEventListener('scroll', update)
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-white/5">
      <div
        className="h-full origin-left"
        style={{
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, #c9a84c, #e8c97e)',
          transition: 'width 0.05s linear',
        }}
      />
    </div>
  )
}
