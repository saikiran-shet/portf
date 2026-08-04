import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="02 / Education" title="Timeline." />

      <div className="relative">
        <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-violet/40 via-ink/10 dark:via-mist/10 to-transparent" />
        <div className="space-y-10">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-paper dark:bg-void border-2 border-violet dark:border-violet-bright" />
              <div className="glass rounded-2xl p-6 md:p-8 card-hover hover:-translate-y-1 hover:shadow-xl hover:shadow-violet/5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-xl md:text-2xl font-semibold">{ed.degree}</h3>
                  <span className="font-mono text-xs tracking-wide text-ink/45 dark:text-mist/45 whitespace-nowrap">
                    {ed.date}
                  </span>
                </div>
                <p className="mt-2 text-ink/60 dark:text-mist/60">
                  {ed.school} <span className="text-ink/35 dark:text-mist/35">· {ed.meta}</span>
                </p>
                <p className="mt-1 font-mono text-sm text-amber dark:text-amber-bright">{ed.detail}</p>

                {ed.coursework.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {ed.coursework.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-3 py-1.5 rounded-full bg-ink/[0.04] dark:bg-white/[0.06] text-ink/60 dark:text-mist/60"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
