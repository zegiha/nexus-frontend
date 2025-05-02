import {IBaseIconButton} from '@/shared/components/molecule/iconButton/const/type'

export default function getSize(size: IBaseIconButton['size']) {
  switch (size) {
    case 'small': return 20
    case 'medium': return 24
    default: return 24
  }
}