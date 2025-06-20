'use client'

import {articleEntity} from '@/prev_entity/article'
import {Col} from '@/shared/components/atom/flex'
import PressPageHeadline from './PressPageHeadline'
import style from './style.module.css'

interface HeadlinesGridProps {
  headlines: articleEntity[]
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
        <div key={index} className={style.headlineWrapper}>
          <PressPageHeadline {...headline} />
        </div>
      ))}
    </div>
  )
}
