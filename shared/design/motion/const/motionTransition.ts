import {Transition} from 'motion'
import transition from '@/shared/design/motion/const/transition'

const motionTransition: {[K in 'slow' | 'normal' | 'fast']: Transition} = {
  slow: {
    ease: transition.cubicBezier,
    duration: transition.duration.slow,
  },
  normal: {
    ease: transition.cubicBezier,
    duration: transition.duration.normal,
  },
  fast: {
    ease: transition.cubicBezier,
    duration: transition.duration.fast,
  }
}

export default motionTransition