import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`mb-14 md:mb-20 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="eyebrow mb-4"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="section-title"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-ink/60 dark:text-mist/60 text-lg max-w-xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
