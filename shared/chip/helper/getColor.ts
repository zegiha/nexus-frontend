import {IChip} from '@/shared/chip/const/type'
import {IBaseTypo} from '@/shared/typo'

export default function getColor(color: IChip['color']): IBaseTypo['color'] {
  switch(color) {
    case 'gray': return 'alternative'
  }
}