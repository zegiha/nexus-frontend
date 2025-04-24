import {TWidth} from '@/shared/width'

export interface IBaseButtonContents {
  size: 'medium' | 'large'
  type: 'solid' | 'translucent' | 'outlined'
  color: 'gray' | 'positive' | 'cautionary' | 'negative' | 'brand' | 'white'
  accent?: boolean
  children: string
}

export interface IBaseButton
  extends Omit<IBaseButtonContents, 'type' | 'color'> {
  type?: IBaseButtonContents['type']
  color?: IBaseButtonContents['color']
  width?: TWidth
  disabled?: boolean
  round?: boolean
  onClick: () => void
}