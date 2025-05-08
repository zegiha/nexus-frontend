import {Col, Row} from '@/shared/components/atom/flex'
import {Skeleton} from '@/shared/components/atom/skeleton'
import style from './headlinesByCategories.module.css'

export default function HeadlineSkeleton() {
  return (
    <Col className={style.headlineContainer} gap={8}>
      <Skeleton width={50} height={30}/>
      <Col className={style.visualPadding} gap={4}>
        <Skeleton height={40}/>
        <Skeleton height={20}/>
      </Col>
      <Row className={style.visualPadding} alignItems={'center'} gap={8}>
        <Skeleton
          width={32}
          height={32}
        />
        <Skeleton
          width={40}
          height={20}
        />
      </Row>
      <div className={style.headlineImgWrapper}>
        <Skeleton height={'100%'} borderRadius={12}/>
      </div>
    </Col>
  )
}