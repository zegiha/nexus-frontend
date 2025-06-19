'use client'

import { Col } from "@/shared/components/atom/flex";
import {HighlightsSection, SegmentBarSection} from '@/widgets/home'

export default function Page() {
  return (
    <Col style={{ paddingTop: '8px' }}>
      <HighlightsSection/>
      <SegmentBarSection/>
    </Col>
  )
}