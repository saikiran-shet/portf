import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="03 / Experience" title="Where I've worked." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, delay: i * 0.1 }}
            className="group relative rounded-3xl p-8 md:p-10 border border-ink/10 dark:border-white/10 card-hover hover:-translate-y-1.5 hover:border-violet/40 dark:hover:border-violet-bright/40 overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-violet/[0.06] dark:bg-violet-bright/[0.06] blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <span className="font-mono text-xs tracking-widest uppercase text-ink/40 dark:text-mist/40">
              {exp.date}
            </span>
            <h3 className="mt-4 text-2xl font-semibold leading-snug">{exp.role}</h3>
            <p className="mt-1 text-violet dark:text-violet-bright font-medium">{exp.org}</p>
            <ul className="mt-6 space-y-3">
              {exp.points.map((p) => (
                <li key={p} className="flex gap-3 text-ink/65 dark:text-mist/65 leading-relaxed">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-ink/30 dark:bg-mist/30 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
