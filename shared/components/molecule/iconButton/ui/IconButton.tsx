import {IBaseIconButton} from '@/shared/components/molecule/iconButton/const/type'
import BaseIconButton from '@/shared/components/molecule/iconButton/ui/BaseIconButton'

function createIconButton(type: IBaseIconButton['type']) {
  return (props: Omit<IBaseIconButton, 'type'>) =>
    <BaseIconButton
      type={type}
      {...props}
    />
}

const IconButton = {
  transparent: createIconButton('transparent'),
  outlined: createIconButton('outlined'),
  elevate: createIconButton('elevate'),
}

export default IconButton