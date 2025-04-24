import {IAvatar} from '@/shared/avatar/const/type'
import getGap from '@/shared/avatar/helper/getGap'
import {Row} from '@/shared/flex'
import {Typo} from '@/shared/typo'
import classNames from 'classnames'
import style from './style.module.css'
import Image from 'next/image'

export default function Avatar({
  size,
  name,
  nameColor,
  imageUrl,
}: IAvatar) {

  return (
    <Row
      className={classNames([
        size === 'parentHeight' && style.parentHeightContainer
      ])}
      alignItems={'center'}
      gap={getGap(size)}
    >
      <div className={style[size]}>
        <Image
          src={imageUrl}
          alt={'프로필 이미지'}
          fill
        />
      </div>
      {name && (
        <Typo.medium color={nameColor}>
          {name}
        </Typo.medium>
      )}
    </Row>
  )
}