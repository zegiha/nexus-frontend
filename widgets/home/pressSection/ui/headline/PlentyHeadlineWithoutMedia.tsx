import {articleWithoutPressEntity} from '@/prev_entity/article'
import {Col} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import style from './style.module.css'
import {useRouter} from 'next/navigation'

export default function PlentyHeadlineWithoutMedia({
  id,
  title,
  contents,
}: articleWithoutPressEntity) {
  const router = useRouter()

  return (
    <Col
      className={style.headlineContainer}
      gap={8}
      onClick={() => {router.push(`/article/${id}`)}}
    >
      <Typo.medium textOverflowLine={3}>
        {title}
      </Typo.medium>
      <Typo.medium color={'alternative'} textOverflowLine={2}>
        {contents}
      </Typo.medium>
    </Col>
  )
}