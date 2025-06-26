import {getTextColor} from '@/shared/design/text'
import IBaseTypo from '@/shared/components/atom/typo/const/IBaseTypo'
import getTag from '@/shared/components/atom/typo/helper/getTag'
import {getWidth} from '@/shared/design/width'
import classNames from 'classnames'
import {createElement} from 'react'
import style from './style.module.css'

export default function BaseTypo({
  children,
  className: classNameProps,
  size,
  width='fill',
  color='normal',
  accent,
  onClick,
  textOverflowLine,
  underline,
  wrap=true
}: IBaseTypo) {
  return createElement(
    getTag(size),
    {
      className: classNames([
        style[size],
        accent && style.accent,
        textOverflowLine ?
          textOverflowLine === 1 ?
            style.overflowLine1 :
            textOverflowLine === 2 ?
              style.overflowLine2 :
              style.overflowLine3:
          undefined,
        style[color],
        !wrap && style.noWrap,
        classNameProps,
      ]),
      style: {
        ...getWidth(width),
        color: getTextColor(color),
        textDecoration: underline ? 'underline' : undefined,
        cursor: onClick ? 'pointer' : undefined,
      },
      onClick: () => {onClick && onClick()},
    },
    children
  )
}