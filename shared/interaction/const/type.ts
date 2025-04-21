import {ClassAttributes, HTMLAttributes, JSX} from 'react'

export type HTMLElementType = keyof JSX.IntrinsicElements

export interface ICreateInteraction {
  tag: HTMLElementType
  props?: (ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElementType> & {disabled?: boolean}) | null | undefined
}