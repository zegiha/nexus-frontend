import {TIconKey} from '@/shared/icon'

export interface IBaseIconButton {
  iconKey: TIconKey
  type?: 'transparent' | 'outlined' | 'elevate'
  size?: 'small' | 'medium'
  active?: boolean
  onClick: () => void
}