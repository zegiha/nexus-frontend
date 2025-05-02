import IBaseTypo from '@/shared/components/atom/typo/const/IBaseTypo'
import BaseTypo from '@/shared/components/atom/typo/ui/BaseTypo'

function createTypo(size: IBaseTypo['size']) {
  return (props: Omit<IBaseTypo, 'size'>) => (
    <BaseTypo
      size={size}
      {...props}
    />
  )
}

const Typo = {
  xxxlarge: createTypo('xxxlarge'),
  xxlarge: createTypo('xxlarge'),
  xlarge: createTypo('xlarge'),
  large: createTypo('large'),
  medium: createTypo('medium'),
  small: createTypo('small'),
  xsmall: createTypo('xsmall')
}

export default Typo