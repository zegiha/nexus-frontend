import {IChip} from '@/shared/components/molecule/chip/const/type'
import getColor from '@/shared/components/molecule/chip/helper/getColor'
import {Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import classNames from 'classnames'
import style from './style.module.css'

export default function Chip({
  color,
  children
}: IChip) {

  return (
    <Row
      className={classNames(
        style.container,
        style[color],
      )}
      width={'hug'}
    >
      <Typo.small width={'hug'} color={getColor(color)}>
        {children}
      </Typo.small>
    </Row>
  )
}