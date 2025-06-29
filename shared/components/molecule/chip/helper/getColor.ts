import {IChip} from '@/shared/components/molecule/chip/const/type'
import {IBaseTypo} from '@/shared/components/atom/typo'

export default function getColor(color: IChip['color']): IBaseTypo['color'] {
  switch(color) {
    case 'gray': return 'alternative'
  }
}