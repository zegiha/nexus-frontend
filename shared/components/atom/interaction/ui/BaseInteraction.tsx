import style from '@/shared/components/atom/interaction/ui/style.module.css'
import {ICreateInteraction} from '@/shared/components/atom/interaction/const/type'
import classNames from 'classnames'
import {createElement, HTMLAttributes} from 'react'

export default function BaseInteraction<Attributes extends HTMLAttributes<Element>, Element>({
  tag,
  props,
}: ICreateInteraction<Attributes, Element>) {
  return createElement(
    tag,
    {
      ...props,
      className: classNames(
        !props?.disabled ? style.interaction : style.interactionDisabled,
        props?.className
      )
    },
    props?.children,
  )
}