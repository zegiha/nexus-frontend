'use client'

import {articleEntity} from '@/prev_entity/article'
import {pressDetailEntity} from '@/prev_entity/press'
import {Col} from '@/shared/components/atom/flex'
import {SegmentBar} from '@/shared/components/organism/segmentBar'
import PressInfo from '@/widgets/press/pressInfoSection/ui/PressInfo'
import HeadlinesGrid from '@/widgets/press/headlineSection/ui/HeadlinesGrid'
import {useState} from 'react'

interface PressDetailSectionProps {
  pressDetail: pressDetailEntity
  headlines: articleEntity[]
  onSubscribeAction: () => void
}

export default function PressDetailSection({ 
  pressDetail, 
  headlines, 
  onSubscribeAction
}: PressDetailSectionProps) {
  const [active, setActive] = useState<number>(0)

  const filteredHeadlines = headlines.filter(headline =>
    pressDetail.categories[active] === '주요뉴스' || headline.category === pressDetail.categories[active]
  )

  return (
    <Col gap={24}>
      <PressInfo
        pressDetail={pressDetail} 
        onSubscribeAction={onSubscribeAction}
      />
      <SegmentBar
        segments={pressDetail.categories}
        active={active}
        setActive={setActive}
      />
      <HeadlinesGrid headlines={filteredHeadlines} />
    </Col>
  )
}
