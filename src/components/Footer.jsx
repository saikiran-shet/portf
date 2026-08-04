import React from 'react'
import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="container-px mx-auto max-w-7xl py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink/40 dark:text-mist/40 border-t border-ink/10 dark:border-white/10">
      <span className="font-mono">© {new Date().getFullYear()} {profile.name}. Built from scratch.</span>
      <span className="font-mono flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-amber dark:bg-amber-bright" />
        Bengaluru, India
      </span>
    </footer>
  )
}
