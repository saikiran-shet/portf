import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { achievements, certifications } from '../data.js'

export default function Achievements() {
  return (
    <section id="achievements" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="06 / Achievements" title="Recognition." />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl p-6 border border-ink/10 dark:border-white/10 card-hover hover:-translate-y-1 hover:border-amber/40 dark:hover:border-amber-bright/40"
            >
              <div className="w-9 h-9 rounded-full grid place-items-center bg-amber/10 dark:bg-amber-bright/10 mb-4">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber dark:text-amber-bright" fill="currentColor">
                  <path d="M12 2 15 8.5 22 9.5 17 14.2 18.3 21 12 17.6 5.7 21 7 14.2 2 9.5 9 8.5Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg leading-snug">{a.title}</h3>
              <p className="mt-2 text-sm text-ink/60 dark:text-mist/60 leading-relaxed">{a.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 glass rounded-2xl p-7"
        >
          <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-ink/40 dark:text-mist/40 mb-5">
            Certifications
          </h3>
          <ul className="space-y-4">
            {certifications.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-ink/70 dark:text-mist/70 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet dark:bg-violet-bright shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
