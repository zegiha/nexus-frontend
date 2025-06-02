import IBaseTypo from '@/shared/components/atom/typo/const/IBaseTypo'
import {IBaseButtonContents} from '@/shared/components/molecule/button/const/type'
import {Typo} from '@/shared/components/atom/typo'

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
    wrap: false,
    children,
  }

  return <Typo.medium {...typoProps}/>
}