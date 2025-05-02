import {getTextColor, TTextColor} from '@/shared/design/text'
import iconCode from '@/shared/components/atom/icon/const/iconCode'
import TIconKey from '@/shared/components/atom/icon/const/TIconKey'

export default function Icon({
  iconKey,
  fill,
  size=24,
  color='normal'
}: {
  iconKey: TIconKey
  fill?: boolean
  size?: number
  color?: TTextColor
}) {
  return <div
    className={'material-symbols-rounded'}
    style={{
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}`,
      fontSize: `${size}px`,
      color: getTextColor(color),
      transitionDuration: `var(--transition-duration-fast)`,
      transitionTimingFunction: `var(--transition-cubic-bezier)`,
      userSelect: 'none'
    }}
  >
    {iconCode[iconKey]}
  </div>
}