import { motionTransition } from '@/shared/design/motion';

export const IOAnimation = {
  initial: {opacity: 0, y: 4},
  animate: {opacity: 1, y: 0},
  exit: {opacity: 0},
  transition: motionTransition.fast
}