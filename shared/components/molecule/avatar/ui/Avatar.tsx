import {IAvatar} from '@/shared/components/molecule/avatar/const/type'
import getGap from '@/shared/components/molecule/avatar/helper/getGap'
import {Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import classNames from 'classnames'
import style from './style.module.css'
import Image from 'next/image'
import { Ref, useEffect, useRef } from 'react'
import { Skeleton } from '@/shared/components/atom/skeleton'

export default function Avatar({
  size,
  name,
  nameColor,
  imageUrl,
}: IAvatar) {
  const image = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if(size !== 'parentHeight' || !image.current)
      return
    
    const updateWidth = () => {
      const currentHeight = image.current!.offsetHeight
      image.current!.style.width = `${currentHeight}px`
    }

    updateWidth()

    const resizeObserver = new ResizeObserver(() => {
      updateWidth()
    })

    resizeObserver.observe(image.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [size])

  if(size === 'parentHeight') {
    return (
      <AvatarImage ref={image} size={size} imageUrl={imageUrl}/>
    )
  } else {
    return (
      <Row
        width={'auto'}
        alignItems={'center'}
        gap={getGap(size)}
      >
        <AvatarImage size={size} imageUrl={imageUrl}/>
        {name && (
          <Typo.medium color={nameColor}>
            {name}
          </Typo.medium>
        )}
      </Row>
    )
  }
}

function AvatarImage({
  ref,
  size,
  imageUrl
}: {
  ref?: Ref<HTMLDivElement | null>
  size: IAvatar['size']
  imageUrl: IAvatar['imageUrl']
}) {
  return (
    <div ref={ref} className={style[size]}>
      {imageUrl === '' ? (
        <Skeleton width='100%' height='100%'/>
      ):(
        <Image
          src={imageUrl}
          alt={'프로필 이미지'}
          fill
          sizes={'256px'}
          priority={true}
          fetchPriority={'low'}
        />
      )}
    </div>
  )
}