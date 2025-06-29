import {semantic} from '@/shared/design'
import {getWidth, TWidth} from '@/shared/design/width'

interface IDivider {
  color?: 'normal' | 'alternative'
  width?: TWidth
  height?: string | number
}

export default function Divider({
  color='normal',
  width='fill',
  height=1,
}: IDivider) {
  return (
    <div
      style={{
        backgroundColor: semantic.light.line[color],
        height: height,
        ...getWidth(width)
      }}
    />
  )
}