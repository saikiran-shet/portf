import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { skills } from '../data.js'

export default function Skills() {
  const groups = Object.entries(skills)
  return (
    <section id="skills" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="05 / Skills" title="Toolkit." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {groups.map(([group, items], gi) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: gi * 0.05 }}
          >
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-ink/40 dark:text-mist/40 mb-4">
              {group}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {items.map((s) => (
                <motion.span
                  key={s}
                  whileHover={{ y: -3, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  className="px-4 py-2 rounded-xl text-sm border border-ink/10 dark:border-white/10 hover:border-violet/50 dark:hover:border-violet-bright/50 hover:text-violet dark:hover:text-violet-bright hover:bg-violet/[0.04] dark:hover:bg-violet-bright/[0.06] transition-colors cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
