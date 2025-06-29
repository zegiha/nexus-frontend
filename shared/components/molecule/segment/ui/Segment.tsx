import ISegment from '@/shared/components/molecule/segment/const/ISegment'
import {RoundButton} from '@/shared/components/molecule/button'

export default function Segment({
  isActive,
  activate,
  children,
}: ISegment) {
  return (
    <RoundButton.translucent
      width={'hug'}
      color={isActive ? 'brand' : 'gray'}
      size={'small'}
      onClick={activate}
    >
      {children}
    </RoundButton.translucent>
  )
}