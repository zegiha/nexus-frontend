import {TTextColor} from '@/shared/design/text'
import typoType from '@/shared/components/atom/typo/const/typoType'
import {TWidth} from '@/shared/design/width'

export default interface IBaseTypo {
  children: string
  className?: string
  size: keyof typeof typoType
  width?: TWidth
  color?: TTextColor
  accent?: boolean
  onClick?: () => void
  textOverflowLine?: number
  underline?: boolean
  wrap?: boolean
}