'use client'

import { Col } from "@/shared/components/atom/flex";
import {HighlightsSection} from '@/widgets/home'
import HeadlineSection from '@/widgets/home/categorySection/ui/HeadlineSection'
import PressSection from '@/widgets/home/pressSection/ui/PressSection'
import SegmentBarSection from '@/widgets/home/segmentBarSection/ui/SegmentBarSection'

export default function Page() {
  return (
    <Col>
      <HighlightsSection/>
      <SegmentBarSection>
        {/*<PressSection/>*/}
        <HeadlineSection/>
      </SegmentBarSection>
    </Col>
  )
}