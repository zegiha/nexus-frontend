import IBaseTypo from '@/shared/typo/const/IBaseTypo'
import {IBaseButtonContents} from '@/shared/button/const/type'
import {Typo} from '@/shared/typo'

export default function BaseButtonContents({
  size,
  type,
  color,
  accent,
  children
}: IBaseButtonContents) {
  const getColor =
    (color: IBaseButtonContents['color']): IBaseTypo['color'] => {
      switch(type) {
        case 'solid':
          if(color === 'gray') return 'reverse-white'
          else return 'static-white'
        default:
          if(color === 'gray') return 'normal'
          else return color
      }
  }

  const typoProps = {
    color: getColor(color),
    accent: accent,
    children,
  }

  if(size === 'medium' || size === 'large')
    return <Typo.medium {...typoProps}></Typo.medium>
}