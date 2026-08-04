import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'

const stats = [
  { value: '9.10', label: 'CGPA · through 6th semester' },
  { value: '5', label: 'End-to-end AI/ML & systems projects' },
  { value: 'Top 30', label: 'Teams · Smart India Hackathon 2025' },
  { value: '2', label: 'Industry internships — Samsung PRISM & Yug Yatra' },
]

export default function About() {
  return (
    <section id="about" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader
        eyebrow="01 / About"
        title="A systems thinker who ships."
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6 text-lg md:text-xl leading-relaxed text-ink/70 dark:text-mist/70"
        >
          <p>
            I'm a Computer Science undergraduate at Ramaiah Institute of Technology, Bengaluru,
            with a habit of picking projects that sit at the edge of what I already know — decoding
            stellar light curves to find exoplanets, reconstructing lungs in 3D from flat scans,
            building a safety app that has to work in someone's worst five minutes.
          </p>
          <p>
            What connects the work is the same instinct: take a noisy or high-stakes signal —
            astronomical, medical, or human — and build a pipeline precise and trustworthy enough
            to act on. In parallel, I've interned across a Samsung Research program and a live
            product team, so the systems I design are shaped by both research rigor and shipping
            constraints.
          </p>
          <p className="text-ink dark:text-mist font-medium">
            Off-screen, I'm usually playing flute or guitar with the RIT Music Club, or
            volunteering with NSS.
          </p>
        </motion.div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 card-hover hover:-translate-y-1 hover:shadow-xl hover:shadow-violet/5"
            >
              <div className="font-mono text-2xl md:text-3xl font-semibold text-violet dark:text-violet-bright">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-ink/55 dark:text-mist/55 leading-snug">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
