import {articleEntity, articleWithMediaEntity} from '@/prev_entity/article'
import {Col, Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import {formatDateWithDot} from '@/shared/helper'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import style from '../style.module.css'

export default function Article({
  id,
  title,
  contents,
  img,
  video,
  createdAt,
}: articleEntity) {
  const router = useRouter()
  return (
    <Row
      className={style.articleContainer}
      gap={12}
      onClick={() => router.push(`/article/${id}`)}
    >
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
      {img && (
        <div className={style.articleMediaWrapper}>
          <Image
            src={img.url}
            alt={img.alt ?? '기사 사진'}
            fill
          />
        </div>
      )}
      {video && (
        <video
          className={style.articleMediaWrapper}
          src={video.url}
        />
      )}
    </Row>
  )
}