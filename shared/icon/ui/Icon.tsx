import {getTextColor, TTextColor} from '@/shared/design'
import iconCode from '@/shared/icon/const/iconCode'
import TIconKey from '@/shared/icon/const/TIconKey'

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
      transitionDuration: '0.16s',
      userSelect: 'none'
    }}
  >
    {iconCode[iconKey]}
  </div>
}