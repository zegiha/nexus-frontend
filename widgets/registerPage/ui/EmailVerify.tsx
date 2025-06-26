import {Col} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import {Button} from '@/shared/components/molecule/button'
import {motionTransition} from '@/shared/design/motion'
import {IOAnimation} from '@/widgets/registerPage/const/IOAnimation'
import {IEmailVerify} from '@/widgets/registerPage/const/propsInterface'
import useEmailVerify from '@/widgets/registerPage/model/useEmailVerify'
import NumberBoxInput from '@/widgets/registerPage/ui/NumberBoxInput'
import {AnimatePresence} from 'motion/react'
import Form from 'next/form'
import style from './registerPage.module.css'

export default function EmailVerify({
  email,
  code,
  setCode,
  next
}: IEmailVerify) {
  const {
    mutate,
    getButtonText,
    errorText,
  } = useEmailVerify(next, code)

  return (
    <Form className={style.wrapper} action={() => {
      mutate({
        data: {
          email,
          code,
        }
      })
    }}>
      <Col
        className={style.wrapper}
        width={'fill'}
        gap={24}
        motionProps={IOAnimation}
      >
        <Typo.xxlarge color={'strong'} accent>
          이메일 인증
        </Typo.xxlarge>
        <Col width={'fill'} alignItems={'center'} gap={8}>
          <NumberBoxInput value={code} setValue={setCode} />
          <AnimatePresence mode={'wait'}>
            {errorText ?
              <NoticeText type={'error'} contents={errorText}/>:
              code.length === 0 ?
                <NoticeText type={'normal'} contents={'인증번호를 입력해주세요'}/> :
                <div style={{height: 18}}/>
            }
          </AnimatePresence>
        </Col>

        <Button.solid
          color={'brand'}
          size={'large'}
          width={'fill'}
          onClick={() => {}}
        >
          {getButtonText()}
        </Button.solid>
      </Col>
    </Form>
  )
}

function NoticeText({
  type,
  contents,
}: {
  type: 'normal' | 'error',
  contents: string
}) {
  const textAnimation = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0},
    transition: motionTransition.fast
  }

  return (
    <Col
      key={type + contents}
      width={'auto'}
      motionProps={textAnimation}
    >
      <Typo.small color={type === 'normal' ? 'alternative' : 'negative'} width={'auto'}>
        {contents}
      </Typo.small>
    </Col>
  )
}

