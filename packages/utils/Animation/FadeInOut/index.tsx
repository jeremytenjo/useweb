import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function FadeInOut({ children, show = null, style = {} }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          style={{ ...style }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
