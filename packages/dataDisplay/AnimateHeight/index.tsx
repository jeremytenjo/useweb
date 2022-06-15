import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

import { defaultProps } from './props'

export default function AnimateHeight({ isOpen, children, className }) {
  const variants = {
    open: {
      height: 'auto',
    },
    closed: {
      height: 0,
    },
  }

  return (
    <motion.div
      className={`${className}`}
      variants={variants}
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      transition={{ stiffness: 0, duration: 0.2 }}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  )
}

AnimateHeight.defaultProps = defaultProps

AnimateHeight.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
