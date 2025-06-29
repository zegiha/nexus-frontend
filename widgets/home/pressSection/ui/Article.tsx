import {Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import {useRouter} from 'next/navigation'
import style from './style.module.css'

export default function Article({
  id,
  title,
}: {
  id: string
  title: string
}) {
  const router = useRouter()

  return (
    <Row className={style.articleContainer} onClick={() => router.push(`/article/${id}`)}>
      <Typo.medium>{title}</Typo.medium>
    </Row>
  )
}