import {TTextColor} from '@/shared/design'
import typoType from '@/shared/typo/const/typoType'
import {TWidth} from '@/shared/width'

export default interface IBaseTypo {
  children: string
  size: keyof typeof typoType
  width?: TWidth
  color?: TTextColor
  accent?: boolean
  onClick?: () => void
  textOverflowLine?: number
  underline?: boolean
}