import {Row, Col} from '@/shared/components/atom/flex'
import {Skeleton} from '@/shared/components/atom/skeleton'
import style from './latestNews.module.css'

export default function NewsRowSkeleton() {
  return (
    <Row gap={12} className={style.newsRowSkeleton}>
      <Col gap={4}>
        <Skeleton height={20}/>
        <Skeleton
          width={'64%'}
          height={20}
        />
        <Row alignItems={'center'} gap={4}>
          <Skeleton
            width={24}
            height={24}
          />
          <Skeleton
            width={40}
            height={16}
          />
        </Row>
      </Col>
      <div className={style.newsRowImgAndVideoWrapper}>
        <Skeleton height={'100%'} borderRadius={4}/>
      </div>
    </Row>
  )
}