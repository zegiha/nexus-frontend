import {articleWithoutPressEntity} from '@/prev_entity/article'
import {Col, Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import style from './style.module.css'

export default function FewHeadline({
  id,
  title,
  contents,
  img,
  video,
}: articleWithoutPressEntity) {
  const router = useRouter()

  return (
    <Row
      className={style.headlineContainer}
      gap={8}
      onClick={() => {router.push(`/article/${id}`)}}
    >
      <Col gap={4}>
        <Typo.medium textOverflowLine={2}>
          {title}
        </Typo.medium>
        <Typo.medium color={'alternative'} textOverflowLine={1}>
          {contents}
        </Typo.medium>
      </Col>
      {img && (
        <div className={style.fewHeadlineMediaWrapper}>
          <Image
            src={img.url}
            alt={img.alt ?? '헤드라인 이미지'}
            fill
            priority={true}
            fetchPriority={'low'}
            sizes={'133px'}
          />
        </div>
      )}
      {video && (
        <video
          className={style.fewHeadlineMediaWrapper}
          src={video.url}
        />
      )}
    </Row>
  )
}