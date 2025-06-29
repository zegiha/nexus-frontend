import style from './style.module.css'
import { Col, Row } from "@/shared/components/atom/flex";
import { Skeleton } from "@/shared/components/atom/skeleton";

export default function ArticleSkeleton() {
  return (
    <div className={style.articleContainerSkeleton}>
      <Row gap={8}>
        <Col gap={4}>
          <Skeleton width='32%' height={20}/>
          <Skeleton width='12%' height={16}/>
        </Col>
        <Skeleton width={133} height={80} borderRadius={4}/>
      </Row>
    </div>
  )
}