import {IMotion} from '@/shared/design/motion'
import {TWidth} from '@/shared/design/width'
import {CSSProperties, ReactNode, Ref} from 'react'

interface IFlex {
  flexDirection?: 'row' | 'col'
  justifyContent?: 'start' | 'center' | 'end' | 'space-between'
  alignItems?: 'start' | 'center' | 'end'
  gap?: number

  id?: string
  ref?: Ref<HTMLDivElement>
  children?: ReactNode

  className?: string
  style?: CSSProperties
  width?: TWidth

  onClick?: () => void

  motionProps?: IMotion | boolean
}

export type {
  IFlex
}