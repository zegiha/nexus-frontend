import classNames from 'classnames'
import style from './registerPage.module.css'
import {Typo} from '@/shared/components/atom/typo'

export default function NumberBox({
  active,
  error,
  contents
}: {
  active?: boolean
  error?: boolean
  contents?: string
}) {
  return (
    <div
      className={classNames(
        style.numberBox,
        active && style.numberBoxActive,
        error && style.numberBoxError,
      )}
    >
      <Typo.xxxlarge width={'auto'} color={'strong'} accent>
        {contents ?? ''}
      </Typo.xxxlarge>
    </div>
  )
}