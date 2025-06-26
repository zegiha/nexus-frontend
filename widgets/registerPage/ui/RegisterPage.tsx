'use client'

import {Row} from '@/shared/components/atom/flex'
import useRegister from '@/widgets/registerPage/model/useRegister'
import Email from '@/widgets/registerPage/ui/Email'
import EmailVerify from '@/widgets/registerPage/ui/EmailVerify'
import IdAndPassword from '@/widgets/registerPage/ui/IdAndPassword'
import style from '@/widgets/registerPage/ui/registerPage.module.css'
import {AnimatePresence} from 'motion/react'
import {Fragment} from 'react'

export default function RegisterPage() {
  const {
    email, setEmail,
    code, setCode,
    id, setId,
    password, setPassword,
    step,
    next,
  } = useRegister()

  return <Row
    className={style.container}
    width={'fill'}
    justifyContent={'center'}
  >
    <AnimatePresence mode={'wait'}>
      {step === 1 && <Email {...{email, setEmail, next}} />}
      {step === 2 && <EmailVerify {...{email, code, setCode, next}} />}
      {step === 3 && <IdAndPassword {...{email, id, setId, password, setPassword, next}} />}
    </AnimatePresence>
  </Row>
}