'use client'

import {articleEntity} from '@/prev_entity/article'
import {Col, Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import style from './style.module.css'

export default function PressPageHeadline({
  id,
  title,
  contents,
  img,
}: articleEntity) {
  const router = useRouter()

  return (
    <Row
      className={style.headlineContainer}
      gap={8}
      onClick={() => {router.push(`/article/${id}`)}}
    >
      <Col gap={4} className={style.headlineContent}>
        <Typo.large textOverflowLine={2}>
          {title}
        </Typo.large>
        <Typo.medium color={'alternative'} textOverflowLine={1}>
          {contents}
        </Typo.medium>
      </Col>
      {img && (
        <div className={style.headlineImage}>
          <Image
            src={img.url}
            alt={img.alt || '뉴스 이미지'}
            width={133}
            height={80}
            objectFit="cover"
          />
        </div>
      )}
    </Row>
  )
}
