import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { leadership } from '../data.js'

export default function Leadership() {
  return (
    <section id="leadership" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader
        eyebrow="07 / Beyond the Code"
        title="Leadership & activities."
        description="Music, service, and community — the parts of college that don't show up in coursework."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {leadership.map((l, i) => (
          <motion.div
            key={l.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className="rounded-2xl p-6 border border-ink/10 dark:border-white/10 card-hover hover:-translate-y-1 hover:border-violet/40 dark:hover:border-violet-bright/40"
          >
            <h3 className="font-semibold text-lg leading-snug">{l.role}</h3>
            <p className="mt-1 text-sm font-mono text-violet dark:text-violet-bright">{l.org}</p>
            <p className="mt-3 text-sm text-ink/60 dark:text-mist/60 leading-relaxed">{l.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
