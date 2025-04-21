import {IFlex} from '@/shared/flex/const/type'
import Flex from '@/shared/flex/ui/Flex'

export default function Row(props: Omit<IFlex, 'flexDirection'>) {
  return <Flex
    flexDirection={'row'}
    {...props}
  />
}