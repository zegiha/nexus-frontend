'use client'

import {Col} from '@/shared/components/atom/flex'
import {useParams} from 'next/navigation'
import PressDetailSection from '@/widgets/press'
import useHeadlinesByPress from '@/widgets/press/headlineSection/model/useHeadlinesByPress'
import usePressDetail from '@/widgets/press/pressInfoSection/model/usePressDetail'
import styles from './styles.module.css'

export default function PressDetailPage() {
  // URL에서 언론사 ID 파라미터 가져오기
  const {id: pressId} = useParams<{id: string}>()
  
  // 언론사 상세 정보와 헤드라인 데이터 가져오기
  const { pressDetail, isLoading: isPressLoading, error: pressError, toggleSubscription } = usePressDetail(pressId)
  const { data: headlines, isLoading: isHeadlinesLoading, error: headlinesError } = useHeadlinesByPress(pressId)
  
  // 로딩 상태 처리
  if (isPressLoading || isHeadlinesLoading) {
    return (
      <Col className={styles.container}>
        <div className={styles.loading}>로딩 중...</div>
      </Col>
    )
  }
  
  // 에러 상태 처리 - 더미 데이터가 있으면 표시
  if ((pressError || headlinesError) && !pressDetail) {
    return (
      <Col className={styles.container}>
        <div className={styles.error}>정보를 불러오는데 실패했습니다.</div>
      </Col>
    )
  }
  
  if(headlines !== undefined && pressDetail)
    return (
      <Col className={styles.container}>
        <PressDetailSection
          pressDetail={pressDetail}
          headlines={headlines}
          onSubscribeAction={toggleSubscription}
        />
      </Col>
    )
}
