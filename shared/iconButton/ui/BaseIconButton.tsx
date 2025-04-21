import {Icon} from '@/shared/icon'
import {IBaseIconButton} from '@/shared/iconButton/const/type'
import getSize from '@/shared/iconButton/helper/getSize'
import {Interaction} from '@/shared/interaction'
import classNames from 'classnames'
import style from './style.module.css'

export default function BaseIconButton({
  iconKey,
  type='transparent',
  size='medium',
  active,
  onClick
}: IBaseIconButton) {

  return <Interaction.button
    className={classNames(
      [
        style[type],
        style[size],
      ]
    )}
    onClick={onClick}
  >
    <Icon
      iconKey={iconKey}
      size={getSize(size)}
      fill={active}
    />
  </Interaction.button>
}