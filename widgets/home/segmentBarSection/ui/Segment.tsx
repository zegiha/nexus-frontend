import {RoundButton} from '@/shared/components/molecule/button'
import ISegment from '@/widgets/home/segmentBarSection/const/ISegment'

export default function Segment({
  isActive,
  activate,
  children,
}: ISegment) {
  return (
    <RoundButton.translucent
      color={isActive ? 'brand' : 'gray'}
      size={'small'}
      onClick={activate}
    >
      {children}
    </RoundButton.translucent>
  )
}