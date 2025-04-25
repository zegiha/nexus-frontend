import {Row} from '@/shared/flex'
import {IconButton} from '@/shared/iconButton'
import {ISwiperNavigation} from '@/shared/swiper/const/type'
import style from './style.module.css'

export default function Navigation({
  position,
  nextFunc,
  prevFunc,
}: ISwiperNavigation) {
  return (
    position === 'bottom' ?
      <NoneElevated nextFunc={nextFunc} prevFunc={prevFunc} /> :
      <Elevated nextFunc={nextFunc} prevFunc={prevFunc} />
  )
}

function Elevated({
  nextFunc,
  prevFunc,
}: Omit<ISwiperNavigation, 'position'>) {
  return <>
    <IconButton.elevate
      iconKey={'arrow_backward'}
      size={'medium'}
      color={'alternative'}
      className={style.elevatedPrevArrow}
      onClick={prevFunc}
    />
    <IconButton.elevate
      iconKey={'arrow_forward'}
      size={'medium'}
      color={'alternative'}
      className={style.elevatedNextArrow}
      onClick={nextFunc}
    />
  </>
}

function NoneElevated({
  nextFunc,
  prevFunc
}: Omit<ISwiperNavigation, 'position'>) {
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