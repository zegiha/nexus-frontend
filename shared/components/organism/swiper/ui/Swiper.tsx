import {Col} from '@/shared/components/atom/flex'
import {ISwiper} from '@/shared/components/organism/swiper/const/type'
import Navigation from '@/shared/components/organism/swiper/ui/Navigation'
import {useEffect, useRef, useState} from 'react'
import {Swiper as RawSwiper, SwiperSlide as RawSwiperSlide} from 'swiper/react'
import {Swiper as TSwiper} from 'swiper'
import style from './style.module.css'

export default function Swiper({
  children,
  navigationPosition,
}: ISwiper) {
  const swiper = useRef<TSwiper | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)
  const [isHover, setIsHover] = useState<boolean>(false)

  useEffect(() => {
    if(ref && ref.current) {
      ref.current.addEventListener('mouseenter', () => {
        setIsHover(true)
      })
      ref.current.addEventListener('mouseleave', () => {
        setIsHover(false)
      })
    }
    return () => {
      if(ref && ref.current) {
        ref.current.removeEventListener('mouseenter', () => {})
        ref.current.removeEventListener('mouseleave', () => {})
      }
    }
  }, [])

  return (
    <Col ref={ref} className={style.swiperContainer} gap={4}>
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
        hovered={isHover}
      />
    </Col>
  )
}