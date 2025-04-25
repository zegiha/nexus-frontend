import {TTextColor} from '@/shared/design'
import {TIconKey} from '@/shared/icon'

export interface IBaseIconButton {
  iconKey: TIconKey
  type?: 'transparent' | 'outlined' | 'elevate'
  size?: 'small' | 'medium'
  color?: TTextColor
  active?: boolean
  className?: string
  onClick: () => void
}