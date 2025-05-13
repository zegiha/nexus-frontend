import {Col} from '@/shared/components/atom/flex'
import {semantic} from '@/shared/design'
import SegmentBar from '@/widgets/home/segmentBarSection/ui/SegmentBar'
import {ReactNode, useState} from 'react'
import style from './style.module.css'

export default function SegmentBarSection({
  children
}: {
  children: ReactNode
}) {
  const [active, setActive] = useState<number>(0)
  return (
    <Col
      className={style.sectionContainer}
      style={{backgroundColor: active === 0 ?
          semantic.light.background.alternative :
          semantic.light.background.normal}}
    >
      <SegmentBar/>
      {children}
    </Col>
  )
}