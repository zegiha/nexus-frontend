import {IMotion} from '@/shared/motion'
import {TWidth} from '@/shared/width'
import {CSSProperties, ReactNode, Ref} from 'react'

interface IFlex {
  flexDirection?: 'row' | 'col'
  justifyContent?: 'start' | 'center' | 'end' | 'space-between'
  alignItems?: 'start' | 'center' | 'end'
  gap?: number

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