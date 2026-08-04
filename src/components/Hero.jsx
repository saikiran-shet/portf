import React from 'react'
import { motion } from 'framer-motion'
import LightCurve from './LightCurve.jsx'
import { profile } from '../data.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* ambient gradient wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-violet/10 dark:bg-violet/[0.08] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber/10 dark:bg-amber/[0.06] blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-px mx-auto max-w-7xl w-full"
      >
        <motion.p variants={item} className="eyebrow mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber dark:bg-amber-bright animate-pulse-dot" />
          Bengaluru, Karnataka · Open to Software Engineering roles
        </motion.p>

        <motion.h1
          variants={item}
          className="text-[13vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-semibold tracking-[-0.04em] leading-[0.92]"
        >
          Saikiran
          <br />
          <span className="text-ink/25 dark:text-mist/25">Shet.</span>
        </motion.h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <motion.p variants={item} className="lg:col-span-6 text-lg md:text-xl text-ink/65 dark:text-mist/65 leading-relaxed max-w-xl">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-ink dark:bg-mist text-paper dark:text-void text-sm font-medium hover:opacity-85 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-ink/15 dark:border-white/15 text-sm font-medium hover:border-violet dark:hover:border-violet-bright hover:text-violet dark:hover:text-violet-bright transition-colors"
            >
              Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-ink/15 dark:border-white/15 text-sm font-medium hover:border-violet dark:hover:border-violet-bright hover:text-violet dark:hover:text-violet-bright transition-colors"
            >
              GitHub ↗
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Signature light-curve visual */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-12 md:mt-16 w-full"
      >
        <LightCurve variant="hero" className="w-full h-[140px] md:h-[220px] lg:h-[260px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 inset-x-0 justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-ink/30 dark:text-mist/30">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-ink/40 dark:from-mist/40 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
