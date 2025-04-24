import {IBaseTypo} from '@/shared/typo'

export interface IAvatar {
  size: 'small' | 'medium' | 'parentHeight'
  name?: string
  nameColor?: IBaseTypo['color']
  imageUrl: string
}