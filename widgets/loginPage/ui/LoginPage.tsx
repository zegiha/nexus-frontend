"use client";

import Logo from '@/public/Logo'
import {Col} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import {Button} from '@/shared/components/molecule/button'
import {TextInput} from '@/shared/components/molecule/textInput'
import useLogin from '@/widgets/loginPage/model/useLogin'
import Form from 'next/form'
import { useRouter } from "next/navigation";
import { useAuth } from "@/shared/contexts/AuthContext";
import styles from "./loginPage.module.css";

export default function LoginPage() {
  const router = useRouter();
  const {
    email, setEmail,
    password, setPassword,
    mutate,
    messageProvider
  } = useLogin()

  return (
    <Col className={styles.container} width={'fill'} alignItems={'center'}>
      <Form className={styles.wrapper} action={() => {
        mutate({
          data: {
            email,
            password,
          }
        })
      }}>
        <Col width={'fill'} gap={24} className={styles.wrapper}>
          <Logo width={125} height={32}/>
          <Col width={'fill'} gap={8}>
            <TextInput
              inputType={'email'}
              name={'nexus-email'}
              labelContents={'이메일'}
              placeholder={'이메일을 입력해주세요'}
              value={email}
              onChange={e => {setEmail(e.currentTarget.value)}}
              isNecessary
            />
            <TextInput
              inputType={'password'}
              name={'nexus-password'}
              labelContents={'비밀번호'}
              placeholder={'비밀번호를 입력해주세요'}
              value={password}
              onChange={e => {setPassword(e.currentTarget.value)}}
              isNecessary
            />
          </Col>
          <Col width={'fill'} gap={4}>
            <Button.solid
              width={'fill'}
              size={'large'}
              color={'brand'}
            >
              {messageProvider()}
            </Button.solid>
            <Col width={'fill'} alignItems={'center'}>
              <Typo.small
                width={'auto'}
                color={'alternative'}
                underline
                onClick={() => {router.push('/auth/register')}}
              >
                아직 계정이 없으신가요? 회원 가입하기
              </Typo.small>
            </Col>
          </Col>
        </Col>
      </Form>
    </Col>
  );
}
