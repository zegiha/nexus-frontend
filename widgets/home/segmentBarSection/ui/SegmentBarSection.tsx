'use client'

import {Col} from '@/shared/components/atom/flex'
import {SegmentBar} from '@/shared/components/organism/segmentBar'
import categories from '@/widgets/home/categorySection/const/categories'
import CategorySection from '@/widgets/home/categorySection/ui/CategorySection'
import PressSection from '@/widgets/home/pressSection/ui/PressSection'
import classNames from 'classnames'
import {AnimatePresence} from 'motion/react'
import {useState} from 'react'
import style from './style.module.css'

export default function() {
  const [active, setActive] = useState<number>(0)
  const segments = ['언론사별', ...categories]

  return (
    <Col className={classNames(
      style.container,
      active === 0 ?
        style.whenPressSection :
        style.whenCategorySection
    )}>
      <SegmentBar segments={segments} active={active} setActive={setActive} />
      <AnimatePresence mode={'wait'}>
        {active === 0 ?
          <PressSection key={'press'}/>:
          <CategorySection
            key={`category-${segments[active]}`}
            activeCategory={segments[active]}
          />
        }
      </AnimatePresence>
    </Col>
  )
}