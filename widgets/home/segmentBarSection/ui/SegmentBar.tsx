import {Row} from '@/shared/components/atom/flex'
import Segment from '@/widgets/home/segmentBarSection/ui/Segment'
import {useState} from 'react'
import style from './style.module.css'

export default function SegmentBar() {
  const [active, setActive] = useState<number>(0)

  return (
    <Row className={style.segmentBarSectionWrapper} justifyContent={'center'} alignItems={'center'}>
      <Row
        className={style.segmentBarContainer}
        width={'hug'}
        alignItems={'center'}
        gap={8}
      >
        {Array.from({length: 6}).map((_, i) => (
          <Segment
            key={i}
            isActive={active === i}
            activate={() => setActive(i)}
          >
            Label
          </Segment>
        ))}
      </Row>
    </Row>
  )
}
