import {Col} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import {Button} from '@/shared/components/molecule/button'
import {TextInput} from '@/shared/components/molecule/textInput'
import {IOAnimation} from '@/widgets/registerPage/const/IOAnimation'
import {IEmail} from '@/widgets/registerPage/const/propsInterface'
import useEmail from '@/widgets/registerPage/model/useEmail'
import Form from 'next/form'
import style from './registerPage.module.css'

export default function Email({
  email,
  setEmail,
  next
}: IEmail) {
  const {mutate, textProvider} = useEmail(next)

  return (
    <Form className={style.wrapper} action={() => {
      mutate({
        data: {
          email,
        }
      })
    }}>
      <Col
        className={style.wrapper}
        motionProps={IOAnimation}
        width={'fill'}
        gap={24}
      >
        <Typo.xxlarge color={'strong'} accent>
          이메일
        </Typo.xxlarge>
        <TextInput
          inputType={'email'}
          name={'registerEmail'}
          labelContents={'이메일'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={'이메일을 입력해주세요'}
          isNecessary
        />
        <Button.solid
          color={'brand'}
          size={'large'}
          width={'fill'}
          onClick={() => {}}
        >
          {textProvider()}
        </Button.solid>
      </Col>
    </Form>
  )
}