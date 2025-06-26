import {IAvatar} from '@/shared/components/molecule/avatar/const/type'
import getGap from '@/shared/components/molecule/avatar/helper/getGap'
import {Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
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
      width={'auto'}
      alignItems={'center'}
      gap={getGap(size)}
    >
      <div className={style[size]}>
        <Image
          src={imageUrl}
          alt={'프로필 이미지'}
          fill
          sizes={'256px'}
          priority={true}
          fetchPriority={'low'}
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