'use client'

import { Col } from "@/shared/components/atom/flex";
import {HeaderLayout} from '@/shared/components/organism/header'
import {HighlightsSection, SegmentBarSection} from '@/widgets/home'

export default function Page() {
  return (
    <HeaderLayout>
      <Col>
        <HighlightsSection/>
        <SegmentBarSection/>
      </Col>
    </HeaderLayout>
  )
}
