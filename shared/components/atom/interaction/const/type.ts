import {DetailedHTMLProps, HTMLAttributes, JSX} from 'react'

export type IntrinsicTags = keyof JSX.IntrinsicElements


export interface ICreateInteraction<Attributes extends HTMLAttributes<Element>, Element> {
  tag: IntrinsicTags
  props?: (DetailedHTMLProps<Attributes, Element> & {disabled?: boolean}) | null | undefined
}