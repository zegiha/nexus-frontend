'use client'

import {headlineEntity} from '@/entity/headline'
import {Col} from '@/shared/components/atom/flex'
import {Divider} from '@/shared/components/atom/divider'
import PressPageHeadline from './PressPageHeadline'
import style from './style.module.css'

interface HeadlinesGridProps {
  headlines: headlineEntity[]
}

export default function HeadlinesGrid({ headlines }: HeadlinesGridProps) {
  if (!headlines || headlines.length === 0) {
    return (
      <Col className={style.noHeadlines}>
        현재 표시할 뉴스가 없습니다.
      </Col>
    )
  }

  return (
    <div className={style.headlinesGrid}>
      {headlines.map((headline, index) => (
        <div key={headline.id} className={style.headlineWrapper}>
          <PressPageHeadline {...headline} />
          {index !== headlines.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  )
}
