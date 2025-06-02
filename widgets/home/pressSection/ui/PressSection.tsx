'use client'

import {motionTransition} from '@/shared/design/motion'
import usePressSection from '@/widgets/home/pressSection/model/usePressSection'
import Box from '@/widgets/home/pressSection/ui/Box'
import BoxSkeleton from '@/widgets/home/pressSection/ui/BoxSkeleton'
import style from './style.module.css'
import {motion} from 'motion/react'

export default function PressSection() {
  const {
    status, data
} = usePressSection()

  return (
    <motion.div
      className={style.container}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={motionTransition.fast}
    >
      {status === 'success' && (
        data.map((v, i) => (
          <Box
            key={i}
            {...v}
          />
        ))
      )}
      {status === 'pending' && (
        Array.from({length: 6}).map((_, i) => (
          <BoxSkeleton
            key={i}
          />
        ))
      )}
    </motion.div>
  )
}
