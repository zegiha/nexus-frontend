import style from '@/shared/interaction/ui/style.module.css'
import {ICreateInteraction} from '@/shared/interaction/const/type'
import classNames from 'classnames'
import {createElement} from 'react'

export default function BaseInteraction({
  tag,
  props,
}: ICreateInteraction) {
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