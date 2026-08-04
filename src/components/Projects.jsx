import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { projects } from '../data.js'

function ProjectCard({ p, i, featured }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay: (i % 3) * 0.08 }}
      className={`group relative rounded-3xl border border-ink/10 dark:border-white/10 card-hover hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet/10 overflow-hidden ${
        featured ? 'p-8 md:p-10' : 'p-7 md:p-8'
      }`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet/[0.05] via-transparent to-amber/[0.05] pointer-events-none" />

      <div className="flex items-start justify-between gap-4 relative">
        <span className="font-mono text-[11px] tracking-widest text-amber dark:text-amber-bright uppercase">
          {p.tag}
        </span>
        {p.ongoing && (
          <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-violet dark:text-violet-bright">
            <span className="w-1.5 h-1.5 rounded-full bg-violet dark:bg-violet-bright animate-pulse-dot" />
            Ongoing
          </span>
        )}
      </div>

      <h3 className={`relative mt-4 font-semibold leading-tight ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
        {p.title}
      </h3>

      <ul className="relative mt-5 space-y-2.5">
        {p.points.map((pt) => (
          <li key={pt} className="flex gap-2.5 text-sm md:text-base text-ink/65 dark:text-mist/65 leading-relaxed">
            <span className="mt-2 w-1 h-1 rounded-full bg-ink/30 dark:bg-mist/30 shrink-0" />
            {pt}
          </li>
        ))}
      </ul>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-ink/[0.04] dark:bg-white/[0.06] text-ink/55 dark:text-mist/55"
          >
            {s}
          </span>
        ))}
      </div>

      <a
        href={p.github}
        target="_blank"
        rel="noreferrer"
        className="relative mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-mist group-hover:text-violet dark:group-hover:text-violet-bright transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-1.94c-3.16.68-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
        </svg>
        View repository
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </motion.article>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader
        eyebrow="04 / Projects"
        title="Selected work."
        description="Five builds spanning astrophysics, medical imaging, mobile safety, distributed systems, and health data — each grounded in code you can read."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {featured.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} featured />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rest.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} featured={false} />
        ))}
      </div>
    </section>
  )
}
