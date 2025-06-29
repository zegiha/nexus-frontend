import {Col, Row} from '@/shared/components/atom/flex'
import {Skeleton} from '@/shared/components/atom/skeleton'
import style from '../style.module.css'

export default function ArticleSkeleton() {
  return (
    <Row gap={12} className={style.skeleton}>
      <Skeleton width={64} height={16}/>
      <Col gap={8}>
        <Skeleton width={'72%'} height={24}/>
        <Skeleton width={'32'} height={20}/>
      </Col>
      <div className={style.mediaWrapper}>
        <Skeleton width={'100%'} height={'100%'} borderRadius={12}/>
      </div>
    </Row>
  )
}