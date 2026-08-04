import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import LightCurve from './LightCurve.jsx'
import { profile } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <LightCurve variant="divider" className="mb-20 md:mb-28 text-ink dark:text-mist" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="08 / Contact"
            title="Let's build something."
            description="Open to Software Engineering, ML, and full-stack roles. The fastest way to reach me is email — I read everything."
          />

          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between group rounded-2xl p-5 border border-ink/10 dark:border-white/10 hover:border-violet/40 dark:hover:border-violet-bright/40 transition-colors"
            >
              <span>
                <span className="block text-xs font-mono uppercase tracking-widest text-ink/40 dark:text-mist/40">Email</span>
                <span className="block mt-1 font-medium">{profile.email}</span>
              </span>
              <span className="text-ink/30 dark:text-mist/30 group-hover:text-violet dark:group-hover:text-violet-bright group-hover:translate-x-1 transition-all">→</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between group rounded-2xl p-5 border border-ink/10 dark:border-white/10 hover:border-violet/40 dark:hover:border-violet-bright/40 transition-colors"
            >
              <span>
                <span className="block text-xs font-mono uppercase tracking-widest text-ink/40 dark:text-mist/40">LinkedIn</span>
                <span className="block mt-1 font-medium">Saikiran Shet</span>
              </span>
              <span className="text-ink/30 dark:text-mist/30 group-hover:text-violet dark:group-hover:text-violet-bright group-hover:translate-x-1 transition-all">↗</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between group rounded-2xl p-5 border border-ink/10 dark:border-white/10 hover:border-violet/40 dark:hover:border-violet-bright/40 transition-colors"
            >
              <span>
                <span className="block text-xs font-mono uppercase tracking-widest text-ink/40 dark:text-mist/40">GitHub</span>
                <span className="block mt-1 font-medium">@saikiranshet</span>
              </span>
              <span className="text-ink/30 dark:text-mist/30 group-hover:text-violet dark:group-hover:text-violet-bright group-hover:translate-x-1 transition-all">↗</span>
            </a>
            <a
              href={profile.portfolio}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between group rounded-2xl p-5 border border-ink/10 dark:border-white/10 hover:border-violet/40 dark:hover:border-violet-bright/40 transition-colors"
            >
              <span>
                <span className="block text-xs font-mono uppercase tracking-widest text-ink/40 dark:text-mist/40">Portfolio</span>
                <span className="block mt-1 font-medium">saikiranshet.dev</span>
              </span>
              <span className="text-ink/30 dark:text-mist/30 group-hover:text-violet dark:group-hover:text-violet-bright group-hover:translate-x-1 transition-all">↗</span>
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 glass rounded-3xl p-8 md:p-10 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/40 dark:text-mist/40 mb-2">
                Name
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-ink/15 dark:border-white/15 focus:border-violet dark:focus:border-violet-bright outline-none py-2.5 transition-colors placeholder:text-ink/30 dark:placeholder:text-mist/30"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/40 dark:text-mist/40 mb-2">
                Email
              </label>
              <input
                required
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="you@company.com"
                className="w-full bg-transparent border-b border-ink/15 dark:border-white/15 focus:border-violet dark:focus:border-violet-bright outline-none py-2.5 transition-colors placeholder:text-ink/30 dark:placeholder:text-mist/30"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/40 dark:text-mist/40 mb-2">
              Message
            </label>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell me about the role or project..."
              className="w-full bg-transparent border-b border-ink/15 dark:border-white/15 focus:border-violet dark:focus:border-violet-bright outline-none py-2.5 resize-none transition-colors placeholder:text-ink/30 dark:placeholder:text-mist/30"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-ink dark:bg-mist text-paper dark:text-void font-medium hover:opacity-85 transition-opacity"
          >
            {sent ? 'Opening your mail client…' : 'Send message'}
          </button>
          <p className="text-xs text-ink/40 dark:text-mist/40">
            This opens your email client addressed to {profile.email} — nothing is stored or sent from this site.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
