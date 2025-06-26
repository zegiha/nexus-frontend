import {motionTransition} from '@/shared/design/motion'

const IOAnimation = {
  initial: {opacity: 0, x: 16},
  animate: {opacity: 1, x: 0},
  exit: {opacity: 0, x: -16},
  transition:motionTransition.normal
}

export {IOAnimation}