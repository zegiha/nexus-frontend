import {Col} from '@/shared/flex'
import {ISwiper} from '@/shared/swiper/const/type'
import Navigation from '@/shared/swiper/ui/Navigation'
import {useRef} from 'react'
import {Swiper as RawSwiper, SwiperSlide as RawSwiperSlide} from 'swiper/react'
import {Swiper as TSwiper} from 'swiper'
import style from './style.module.css'

export default function Swiper({
  children,
  navigationPosition,
}: ISwiper) {
  const swiper = useRef<TSwiper | null>(null)

  return (
    <Col className={style.swiperContainer}>
      <RawSwiper
        onSwiper={newSwiper => {
          swiper.current = newSwiper
        }}
        className={style.swiper}
      >
        {Array.isArray(children) ? (
          children.map((v, i) => (
            <RawSwiperSlide key={i}>
              {v}
            </RawSwiperSlide>
          ))
        ):(
          <RawSwiperSlide>
            {children}
          </RawSwiperSlide>
        )}
      </RawSwiper>
      <Navigation
        position={navigationPosition}
        nextFunc={() => {swiper.current?.slideNext()}}
        prevFunc={() => {swiper.current?.slidePrev()}}
      />
    </Col>
  )
}