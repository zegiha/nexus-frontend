import {Col} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import {Button} from '@/shared/components/molecule/button'
import {TextInput} from '@/shared/components/molecule/textInput'
import {IOAnimation} from '@/widgets/registerPage/const/IOAnimation'
import {IIdAndPassword} from '@/widgets/registerPage/const/propsInterface'
import useIdAndPassword from '@/widgets/registerPage/model/useIdAndPassword'
import Form from 'next/form'
import style from './registerPage.module.css'

export default function IdAndPassword({
  email,
  id,
  setId,
  password,
  setPassword,
  next,
}: IIdAndPassword) {
  const {
    mutate,
    textProvider
  } = useIdAndPassword(next)

  return (
    <Form className={style.wrapper} action={() => {
      mutate({
        data: {
          email,
          id,
          password
        }
      })
    }}>
      <Col
        width={'fill'}
        gap={24}
        motionProps={IOAnimation}
      >
        <Typo.xxlarge color={'strong'} accent>
          사용자 정보
        </Typo.xxlarge>
        <Col width={'fill'} gap={8}>
          <TextInput
            inputType={'text'}
            name={'registerId'}
            labelContents={'아이디'}
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder={'아이디를 입력해주세요'}
            isNecessary
          />
          <TextInput
            inputType={'password'}
            name={'registerPassword'}
            labelContents={'비밀번호'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={'비밀번호를 입력해주세요'}
            isNecessary
          />
        </Col>
        <Button.solid
          color={'brand'}
          size={'large'}
          width={'fill'}
        >
          {textProvider()}
        </Button.solid>
      </Col>
    </Form>
  )
}