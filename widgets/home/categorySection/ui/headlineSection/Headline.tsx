import {articleWithMediaEntity} from '@/prev_entity/article'
import {Col} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import {useRouter} from 'next/navigation'
import style from '../style.module.css'
import Image from 'next/image'

export default function Headline({
  id,
  title,
  contents,
  media
}: articleWithMediaEntity) {
  const router = useRouter()

  return (
    <Col className={style.headlineContainer} onClick={() => router.push(`/article/${id}`)}>
      {media.type === 'img' ? (
        <div className={style.mediaWrapper}>
          <Image
            src={media.url}
            alt={media.alt ?? '헤드라인 이미지'}
            fill
            sizes={'960px'}
            priority={false}
            fetchPriority={'low'}
          />
        </div>
      ):(
        <video
          className={style.mediaWrapper}
          src={media.url}
        />
      )}
      <Col className={style.headlineContents}>
        <Typo.xxlarge color={'strong'}
          accent
          textOverflowLine={2}
        >
          {title}
        </Typo.xxlarge>
        <Typo.medium
          color={'alternative'}
          textOverflowLine={2}
        >
          {contents}
        </Typo.medium>
      </Col>
    </Col>
  )
}