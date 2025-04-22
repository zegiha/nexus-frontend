import {Interaction} from '@/shared/interaction'
import {getWidth} from '@/shared/width'
import BaseButtonContents from '@/shared/button/ui/BaseButtonContents'
import {IBaseButton} from '@/shared/button/const/type'
import classNames from 'classnames'
import style from './style.module.css'

export default function BaseButton({
  size='medium',
  type='solid',
  color='gray',
  width='hug',
  accent,
  disabled,
  rounded,
  onClick,
  children,
}: IBaseButton) {
  return <Interaction.button
      onClick={onClick}
      style={{
        ...getWidth(width),
        boxShadow: type !== 'outlined' ? 'none' : undefined,
        backgroundColor: type === 'outlined' ? 'transparent' : undefined,
      }}
      className={classNames(
        [
          type !== 'translucent' ?
            style[color] :
            style[`${color}Translucent`],
          style[size],
          rounded && style.rounded,
        ]
      )}
      disabled={disabled}
    >
      <BaseButtonContents
        {...{size, type, color, children, accent}}
      />
    </Interaction.button>
}