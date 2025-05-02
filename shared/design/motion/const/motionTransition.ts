import {transition} from '@/shared/design/motion'
import {Transition} from 'motion'

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