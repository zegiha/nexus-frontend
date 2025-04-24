import IBaseTypo from '@/shared/typo/const/IBaseTypo'
import {IBaseButtonContents} from '@/shared/button/const/type'
import {Typo} from '@/shared/typo'

export default function BaseButtonContents({
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
          else if(color === 'white') return 'static-black'
          else return 'static-white'
        default:
          if(color === 'gray') return 'normal'
          else if(color === 'white') return 'static-black'
          else return color
      }
  }

  const typoProps = {
    color: getColor(color),
    accent: accent,
    children,
  }

  return <Typo.medium {...typoProps}></Typo.medium>
}