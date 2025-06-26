import {Icon} from '@/shared/components/atom/icon'
import {IBaseIconButton} from '@/shared/components/molecule/iconButton/const/type'
import getSize from '@/shared/components/molecule/iconButton/helper/getSize'
import {Interaction} from '@/shared/components/atom/interaction'
import classNames from 'classnames'
import style from './style.module.css'

export default function BaseIconButton({
  iconKey,
  type='transparent',
  size='medium',
  color='normal',
  active,
  className,
  onClick
}: IBaseIconButton) {

  return <Interaction.button
    type='button'
    className={classNames(
      [
        style[type],
        style[size],
        className,
      ]
    )}
    onClick={onClick}
  >
    <Icon
      iconKey={iconKey}
      size={getSize(size)}
      color={color}
      fill={active}
    />
  </Interaction.button>
}