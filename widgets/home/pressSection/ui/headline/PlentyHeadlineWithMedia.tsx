import {headlineEntity} from '@/entity/headline'
import {Col} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import style from './style.module.css'

export default function PlentyHeadlineWithMedia({
  id,
  title,
  img,
  video
}: Omit<headlineEntity, 'press'>) {
  const router = useRouter()

  return (
    <Col
      className={style.headlineContainer}
      width={{unit: '%', value: 50}}
      gap={8}
      onClick={() => {router.replace(`/article/${id}`)}}
    >
      {img && (
        <div className={style.plentyHeadlineMediaWrapper}>
          <Image
            src={img.url}
            alt={img.alt ?? '헤드라인 이미지'}
            fill
            sizes={'240px'}
          />
        </div>
      )}
      {video && (
        <video
          className={style.plentyHeadlineMediaWrapper}
          src={video.url}
        />
      )}
      <Typo.medium>{title}</Typo.medium>
    </Col>
  )
}