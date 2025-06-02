import {Row} from '@/shared/components/atom/flex'
import {Segment} from '@/shared/components/molecule/segment'
import ISegmentBar from '@/shared/components/organism/segmentBar/const/ISegmentBar'
import style from './style.module.css'

export default function SegmentBar({
  segments,
  active,
  setActive,
}: ISegmentBar) {
  return (
    <Row className={style.segmentBarSectionWrapper} justifyContent={'center'} alignItems={'center'}>
      <Row className={style.segmentBarContainer}>
        <Row
          className={style.segmentBarWrapper}
          alignItems={'center'}
          gap={8}
        >
          {segments.map((v, i) => (
            <Segment
              key={i}
              isActive={active === i}
              activate={() => setActive(i)}
            >
              {v}
            </Segment>
          ))}
        </Row>
      </Row>
    </Row>
  )
}