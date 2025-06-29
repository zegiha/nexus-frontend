import {TTextColor} from '@/shared/design/text'
import {TIconKey} from '@/shared/components/atom/icon'

export interface IBaseIconButton {
  iconKey: TIconKey
  type?: 'transparent' | 'outlined' | 'elevate'
  size?: 'small' | 'medium'
  color?: TTextColor
  active?: boolean
  className?: string
  onClick: () => void
}