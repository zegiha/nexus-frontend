import {IFlex} from '@/shared/flex/const/type'
import Flex from '@/shared/flex/ui/Flex'

export default function Col(props: Omit<IFlex, 'flexDirection'>) {
  return <Flex
    flexDirection={'col'}
    {...props}
  />
}