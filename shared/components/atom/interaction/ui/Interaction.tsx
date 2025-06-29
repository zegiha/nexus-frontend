import BaseInteraction from '@/shared/components/atom/interaction/ui/BaseInteraction'
import {ICreateInteraction, IntrinsicTags} from '@/shared/components/atom/interaction/const/type'
import {ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes} from 'react'

function createInteraction<Attributes extends HTMLAttributes<Element>, Element>(tag: IntrinsicTags) {
  return (props: ICreateInteraction<Attributes, Element>['props']) => (
    <BaseInteraction
      tag={tag}
      props={props}
    />
  )
}

const Interaction = {
  button: createInteraction<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>('button'),
  input: createInteraction<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>('input'),
  div: createInteraction<HTMLAttributes<HTMLDivElement>, HTMLDivElement>('div')
}

export default Interaction