import {articleWithMediaEntity} from '@/prev_entity/article'
import {Col, Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import {formatDateWithDot} from '@/shared/helper'
import Image from 'next/image'
import style from '../style.module.css'

export default function Article({
  title,
  contents,
  media,
  createdAt,
}: articleWithMediaEntity) {
  return (
    <Row gap={12}>
      <Typo.small width={64} color={'alternative'}>
        {formatDateWithDot(createdAt)}
      </Typo.small>
      <Col gap={8}>
        <Typo.xlarge
          color={'strong'}
          accent
          textOverflowLine={2}
        >
          {title}
        </Typo.xlarge>
        <Typo.medium textOverflowLine={3}>
          {contents}
        </Typo.medium>
      </Col>
      {media.type === 'img' ? (
        <div className={style.articleMediaWrapper}>
          <Image
            src={media.url}
            alt={media.alt ?? '기사 사진'}
            fill
          />
        </div>
      ):(
        <video
          className={style.articleMediaWrapper}
          src={media.url}
        />
      )}
    </Row>
  )
}