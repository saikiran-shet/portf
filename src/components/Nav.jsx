import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../ThemeContext.jsx'
import { profile } from '../data.js'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Activities', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="4.5" />
      <path strokeLinecap="round" d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
    </svg>
  )
}
function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
    </svg>
  )
}

export default function Nav() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`container-px flex items-center justify-between mx-auto max-w-7xl transition-all duration-500 ${
            scrolled ? 'glass rounded-2xl mx-4 md:mx-8 lg:mx-16 shadow-lg shadow-black/[0.03] dark:shadow-black/40' : ''
          }`}
          style={scrolled ? { paddingTop: '0.6rem', paddingBottom: '0.6rem' } : {}}
        >
          <a href="#top" className="font-mono text-sm font-semibold tracking-tight flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-amber dark:bg-amber-bright group-hover:animate-pulse-dot" />
            SK<span className="text-violet dark:text-violet-bright">.</span>SHET
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 text-sm text-ink/60 dark:text-mist/60 hover:text-ink dark:hover:text-mist transition-colors rounded-full hover:bg-ink/[0.04] dark:hover:bg-white/[0.06]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 grid place-items-center rounded-full border border-ink/10 dark:border-white/10 hover:border-violet/50 dark:hover:border-violet-bright/50 transition-colors"
            >
              {theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-9 h-9 grid place-items-center rounded-full border border-ink/10 dark:border-white/10"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-paper dark:bg-void lg:hidden"
          >
            <div className="flex justify-between items-center container-px py-5">
              <span className="font-mono text-sm font-semibold">{profile.name}</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="w-9 h-9 grid place-items-center rounded-full border border-ink/10 dark:border-white/10">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col container-px gap-1 mt-8">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-3xl font-semibold py-3 border-b border-ink/10 dark:border-white/10"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
