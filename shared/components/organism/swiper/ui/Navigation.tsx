import {motionTransition} from '@/shared/design/motion'
import {Row} from '@/shared/components/atom/flex'
import {IconButton} from '@/shared/components/molecule/iconButton'
import {IMotion} from '@/shared/design/motion'
import {ISwiperNavigation} from '@/shared/components/organism/swiper/const/type'
import {AnimatePresence} from 'motion/react'
import style from './style.module.css'

export default function Navigation({
  position,
  nextFunc,
  prevFunc,
  hovered,
}: ISwiperNavigation) {
  return (
    position === 'bottom' ?
      <NoneElevated nextFunc={nextFunc} prevFunc={prevFunc} /> :
      <Elevated
        nextFunc={nextFunc}
        prevFunc={prevFunc}
        hovered={hovered}
      />
  )
}

function Elevated({
  nextFunc,
  prevFunc,
  hovered
}: Omit<ISwiperNavigation, 'position'>) {
  const iconButtonMotion: IMotion = {
    initial: {opacity: 0, y: 4},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: 4},
    transition: motionTransition.fast
  }
  return (
    <AnimatePresence>
      {hovered && (
        <Row
          key={'backward'}
          width={'hug'}
          motionProps={iconButtonMotion}
          className={style.elevatedPrevArrow}
        >
          <IconButton.elevate
            iconKey={'arrow_backward'}
            size={'medium'}
            color={'alternative'}
            className={style.elevatedPrevArrow}
            onClick={prevFunc}
          />
        </Row>
      )}
      {hovered && (
        <Row
          key={'forward'}
          width={'hug'}
          motionProps={iconButtonMotion}
          className={style.elevatedNextArrow}
        >
          <IconButton.elevate
            iconKey={'arrow_forward'}
            size={'medium'}
            color={'alternative'}
            className={style.elevatedNextArrow}
            onClick={nextFunc}
          />
        </Row>
      )}
    </AnimatePresence>
  )
}

function NoneElevated({
  nextFunc,
  prevFunc
}: Omit<ISwiperNavigation, 'position' | 'hovered'>) {
  return (
    <Row
      justifyContent={'end'}
      gap={8}
    >
      <IconButton.elevate
        iconKey={'arrow_backward'}
        size={'medium'}
        color={'alternative'}
        onClick={prevFunc}
      />
      <IconButton.elevate
        iconKey={'arrow_forward'}
        size={'medium'}
        color={'alternative'}
        onClick={nextFunc}
      />
    </Row>
  )
}