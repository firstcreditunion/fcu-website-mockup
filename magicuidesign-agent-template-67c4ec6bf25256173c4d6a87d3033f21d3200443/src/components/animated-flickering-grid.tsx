'use client'

import { FlickeringGrid } from '@/components/ui/flickering-grid'
import { motion } from 'motion/react'

export function AnimatedFlickeringGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='size-full'
    >
      <FlickeringGrid
        className='size-full'
        gridGap={4}
        squareSize={2}
        maxOpacity={0.5}
      />
    </motion.div>
  )
}
