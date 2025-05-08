import {Col, Row} from '@/shared/components/atom/flex'
import {Skeleton} from '@/shared/components/atom/skeleton'
import style from './style.module.css'

export default function BoxSkeleton() {
  return (
    <Col className={style.boxContainer} gap={24}>
      <Row alignItems={'center'} gap={4}>
        <Skeleton width={24} height={24}/>
        <Skeleton width={40} height={20}/>
      </Row>
      <Skeleton
        height={160}
        borderRadius={8}
      />
      <Skeleton
        height={52}
        borderRadius={8}
      />
    </Col>
  )
}