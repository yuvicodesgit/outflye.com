'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Spotlight Effect Component
export function Spotlight({
  className = '',
  fill = 'white',
}: {
  className?: string
  fill?: string
}) {
  const spotlightRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const animateSpotlight = (e: MouseEvent) => {
      if (!spotlightRef.current) return
      const { clientX, clientY } = e
      spotlightRef.current.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(255, 165, 0, 0.15), transparent 80%)`
    }
    window.addEventListener('mousemove', animateSpotlight)
    return () => window.removeEventListener('mousemove', animateSpotlight)
  }, [])

  return (
    <div
      ref={spotlightRef}
      className={`pointer-events-none fixed inset-0 z-30 transition duration-300 ${className}`}
    />
  )
}

// Background Beams Component
export function BackgroundBeams({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 165, 0, 0.5)" />
          <stop offset="100%" stopColor="rgba(255, 105, 180, 0.1)" />
        </linearGradient>
      </defs>
      <motion.line
        x1="0"
        y1="0"
        x2="1920"
        y2="1080"
        stroke="url(#beam1)"
        strokeWidth="2"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  )
}

// Sparkles Component
export function Sparkles({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const [sparklePos, setSparklePos] = React.useState<
    Array<{ id: number; x: number; y: number }>
  >([])

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      }
      setSparklePos((prev) => [...prev, newSparkle])
      setTimeout(() => {
        setSparklePos((prev) => prev.filter((s) => s.id !== newSparkle.id))
      }, 1000)
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative ${className}`}>
      {sparklePos.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            opacity: [1, 0],
            scale: [1, 0],
          }}
          transition={{ duration: 0.6 }}
        />
      ))}
      {children}
    </div>
  )
}

// Glowing Stars Card
export function GlowingStarsCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={`relative rounded-xl p-8 border border-orange-200 overflow-hidden bg-white/50 backdrop-blur-sm ${className}`}
      whileHover={{ boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-transparent to-pink-400/10 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

// Focus Cards Effect
export function FocusCards({
  cards,
}: {
  cards: Array<{ title: string; description: string; src: string }>
}) {
  const [focused, setFocused] = React.useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="relative rounded-xl overflow-hidden cursor-pointer"
          onMouseEnter={() => setFocused(index)}
          onMouseLeave={() => setFocused(null)}
          animate={{
            scale: focused === index ? 1.05 : focused !== null ? 0.95 : 1,
            filter: focused === index ? 'blur(0px)' : focused !== null ? 'blur(2px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.3 }}
        >
          <img src={card.src || "/placeholder.svg"} alt={card.title} className="w-full h-64 object-cover" />
          <motion.div
            className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6"
            animate={{ opacity: focused === index ? 1 : 0 }}
          >
            <h3 className="text-white font-bold text-xl">{card.title}</h3>
            <p className="text-white/80 text-sm">{card.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

// 3D Tilt Card Component
export function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const [rotateX, setRotateX] = React.useState(0)
  const [rotateY, setRotateY] = React.useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientY - rect.top) / rect.height - 0.5
    const y = (e.clientX - rect.left) / rect.width - 0.5
    setRotateX(x * 10)
    setRotateY(y * 10)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className={`relative transform-gpu perspective ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  )
}
