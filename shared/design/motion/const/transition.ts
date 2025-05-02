import {Transition} from 'motion'

const transition: {
  cubicBezier: Transition['ease'],
  duration: {[K: string]: number}
} = {
  cubicBezier: [.16,0,.36,1],
  duration: {
    fast: .2,
    normal: .32,
    slow: .52,
  }
}

export default transition