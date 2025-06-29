import {IBaseButton} from '@/shared/components/molecule/button/const/type'
import BaseButton from '@/shared/components/molecule/button/ui/BaseButton'

function createRoundButton(
  type: IBaseButton['type']
) {
  return (props: Omit<IBaseButton, 'type' | 'round'>) => (
    <BaseButton
      type={type}
      round
      {...props}
    />
  )
}

const RoundButton = {
  solid: createRoundButton('solid'),
  translucent: createRoundButton('translucent'),
  outlined: createRoundButton('outlined'),
}

export default RoundButton