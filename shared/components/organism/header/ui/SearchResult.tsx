'use client'

import {ArticleSearch} from '@/entity/const'
import {Col, Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import {useRouter} from 'next/navigation'
import style from './style.module.css'
import Interaction from '@/shared/components/atom/interaction/ui/Interaction'
import Image from 'next/image'

export default function SearchResult({
  uuid,
  title,
  contents,
  media
}: ArticleSearch) {
  const router = useRouter()

  return (
    <Interaction.div
      className={style.searchResultContainer}
      onClick={() => {
        router.push(`/article/${uuid}`)
      }}
    >
      <Row width={'fill'} gap={8}>
        <Col width={'fill'} gap={4}>
          <Typo.medium width={'fill'} textOverflowLine={2}>
            {title}
          </Typo.medium>
          <Typo.medium width={'fill'} textOverflowLine={1} color={'alternative'}>
            {contents}
          </Typo.medium>
        </Col>
        {media && (
          media.mediaType === 'image' ? (
            <div className={style.searchResultImageWrapper}>
              <Image
                src={media.url}
                alt={media.description ?? '기사 이미지'}
                fill
              />
            </div>
          ): (
            <video
              src={media.url}
              className={style.searchResultImageWrapper}
            />
          )
        )}
      </Row>
    </Interaction.div>
  )
}