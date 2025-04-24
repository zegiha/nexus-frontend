import BaseButton from '@/shared/button/ui/BaseButton'
import {IBaseButton} from '@/shared/button/const/type'

function createButton(
  type: IBaseButton['type'],
) {
  return (props: Omit<IBaseButton, 'type' | 'round'>) => (
    <BaseButton
      type={type}
      {...props}
    />
  )
}

const Button = {
  solid: createButton('solid'),
  translucent: createButton('translucent'),
  outlined: createButton('outlined'),
}

export default Button;