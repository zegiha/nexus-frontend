import {IAvatar} from '@/shared/avatar/const/type'

export default function getGap(size: IAvatar['size']): number | undefined {
  if(size === undefined) return undefined
  switch(size) {
    case 'small': return 4
    default: return 8
  }
}