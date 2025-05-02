import {IFlex} from '@/shared/components/atom/flex/const/type'
import Flex from '@/shared/components/atom/flex/ui/Flex'

export default function Row(props: Omit<IFlex, 'flexDirection'>) {
  return <Flex
    flexDirection={'row'}
    {...props}
  />
}