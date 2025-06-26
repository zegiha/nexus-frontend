import {TWidth} from '@/shared/design/width'

export interface IBaseButtonContents {
  type: 'solid' | 'translucent' | 'outlined'
  color: 'gray' | 'positive' | 'cautionary' | 'negative' | 'brand' | 'white'
  accent?: boolean
  children: string
}

export interface IBaseButton
  extends Omit<IBaseButtonContents, 'type' | 'color'> {
  size: 'medium' | 'large' | 'small'
  type?: IBaseButtonContents['type']
  color?: IBaseButtonContents['color']
  width?: TWidth
  disabled?: boolean
  round?: boolean
  onClick?: () => void
}