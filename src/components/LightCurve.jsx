import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Signature motif: a stellar light curve with a transit dip — a direct
// visual quote from Saikiran's exoplanet-detection project. Used as the
// hero centerpiece and, in a quieter form, as a section divider.
export default function LightCurve({ variant = 'hero', className = '' }) {
  const reduceMotion = useReducedMotion()

  if (variant === 'divider') {
    return (
      <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
        <svg viewBox="0 0 1200 40" className="w-full h-8" preserveAspectRatio="none">
          <motion.path
            d="M0,20 L440,20 L470,20 C480,20 486,30 496,30 C506,30 512,10 522,10 C532,10 538,20 548,20 L1200,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-ink/15 dark:text-mist/15"
            initial={reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>
    )
  }

  return (
    <svg
      viewBox="0 0 800 320"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5B4FE0" stopOpacity="0" />
          <stop offset="15%" stopColor="#8B7FFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#C97F1E" stopOpacity="1" />
          <stop offset="85%" stopColor="#8B7FFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#5B4FE0" stopOpacity="0" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* baseline scatter to suggest measured noise */}
      {Array.from({ length: 60 }).map((_, i) => {
        const x = (i / 59) * 800
        const dipCenter = 400
        const dipWidth = 90
        const distFromDip = Math.abs(x - dipCenter)
        let y = 150 + Math.sin(i * 12.9) * 6
        if (distFromDip < dipWidth) {
          const t = 1 - distFromDip / dipWidth
          y += t * 70 * Math.sin((Math.PI * (x - dipCenter + dipWidth)) / (2 * dipWidth))
        }
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={1.4}
            className="fill-ink/25 dark:fill-mist/25"
            initial={reduceMotion ? { opacity: 0.6 } : { opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: reduceMotion ? 0 : 0.5 + i * 0.008, duration: 0.4 }}
          />
        )
      })}

      {/* smooth trend line with transit dip */}
      <motion.path
        d="M0,150 C80,148 150,152 190,150 C230,148 260,150 300,150
           C330,150 350,152 370,155
           C385,165 392,195 400,215
           C408,195 415,165 430,155
           C450,152 470,150 500,150
           C540,150 570,148 610,150
           C660,152 700,149 800,150"
        fill="none"
        stroke="url(#curveGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#glow)"
        initial={reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />

      {/* transit marker */}
      <motion.circle
        cx="400"
        cy="215"
        r="4"
        className="fill-amber dark:fill-amber-bright"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.4, 1], opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.1, ease: 'easeOut' }}
      />
      <motion.text
        x="400"
        y="245"
        textAnchor="middle"
        className="fill-ink/40 dark:fill-mist/40 font-mono"
        fontSize="11"
        letterSpacing="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.4 }}
      >
        TRANSIT DETECTED
      </motion.text>
    </svg>
  )
}
