import {articleEntity} from '@/prev_entity/article'
import {Col, Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import {Avatar} from '@/shared/components/molecule/avatar'
import Image from 'next/image'
import Link from 'next/link'
import style from './latestNews.module.css'

export default function NewsRow({
  id,
  title,
  contents,
  press,
  img,
  video
}: articleEntity) {
  return (
    <Link href={`/app/article/${id}`}>
      <Row className={style.newsRow} gap={12}>
        <Col gap={4}>
          <Typo.medium textOverflowLine={2}>
            {title}
          </Typo.medium>
          <Typo.medium color={'alternative'} textOverflowLine={1}>
            {contents}
          </Typo.medium>
          <Avatar
            size={'small'}
            imageUrl={press.imgUrl}
            name={press.name}
            nameColor={'alternative'}
          />
        </Col>
        {img && (
          <div className={style.newsRowImgAndVideoWrapper}>
            <Image
              src={img.url}
              alt={img.alt ?? '헤드라인 이미지'}
              fill
              sizes={'201px'}
              priority={true}
              fetchPriority={'low'}
            />
          </div>
        )}
        {video && (
          <video
            className={style.newsRowImgAndVideoWrapper}
            src={video.url}
          />
        )}
      </Row>
    </Link>
  )
}