import BaseInteraction from '@/shared/interaction/ui/BaseInteraction'
import {ICreateInteraction} from '@/shared/interaction/const/type'
import {HTMLElementType} from 'react'

function createInteraction(tag: HTMLElementType) {
  return (props: ICreateInteraction['props']) => (
    <BaseInteraction
      tag={tag}
      props={props}
    />
  )
}

const Interaction = {
  button: createInteraction('button')
}

export default Interaction