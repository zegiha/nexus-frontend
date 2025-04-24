import {IChip} from '@/shared/chip/const/type'
import getColor from '@/shared/chip/helper/getColor'
import {Row} from '@/shared/flex'
import {Typo} from '@/shared/typo'
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
      <Typo.small color={getColor(color)}>
        {children}
      </Typo.small>
    </Row>
  )
}