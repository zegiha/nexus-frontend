import {Interaction} from '@/shared/components/atom/interaction'
import {getWidth} from '@/shared/design/width'
import BaseButtonContents from '@/shared/components/molecule/button/ui/BaseButtonContents'
import {IBaseButton} from '@/shared/components/molecule/button/const/type'
import classNames from 'classnames'
import style from './style.module.css'

export default function BaseButton({
  size='medium',
  type='solid',
  color='gray',
  width='hug',
  accent,
  disabled,
  round,
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
          round && style.round,
        ]
      )}
      disabled={disabled}
    >
      <BaseButtonContents
        {...{size, type, color, children, accent}}
      />
    </Interaction.button>
}