'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Col, Flex } from '@/shared/components/atom/flex'
import { AuthLayout } from '@/shared/components/organism/authLayout'
import { Button } from '@/shared/components/molecule/button'
import { TextInput } from '@/shared/components/molecule/textInput'
import styles from './loginPage.module.css'

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // 기본적인 검사 (TextInput 컴포넌트에서 이미 검증됨)
    if (!email || !password) {
      alert('모든 필드를 입력해주세요.')
      return
    }

    if (!isValidEmail(email)) {
      alert('올바른 이메일 형식을 입력해주세요.')
      return
    }

    if (password.length < 6) {
      alert('비밀번호는 최소 6자 이상이어야 합니다.')
      return
    }

    console.log('Login attempt:', { email, password })
    alert('로그인 성공! 홈페이지로 이동합니다.')
    router.push('/')
  }

  return (
    <AuthLayout>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>로그인</h1>
        <p className={styles.description}>계정에 로그인하여 Nexus를 이용해보세요</p>
      </div>
      
      <Col className={styles.formContainer}>
        <TextInput
          inputType={'email'}
          labelContents='이메일'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
          isNecessary={true}
          checker={[
            (value: string) => {
              if (!value) return '이메일을 입력해주세요'
              if (!isValidEmail(value)) return '올바른 이메일 형식을 입력해주세요'
              return null
            }
          ]}
        />
        
        <TextInput
          inputType={'password'}
          labelContents='비밀번호'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
          isNecessary={true}
          checker={[
            (value: string) => {
              if (!value) return '비밀번호를 입력해주세요'
              if (value.length < 6) return '비밀번호는 최소 6자 이상이어야 합니다'
              return null
            }
          ]}
        />
      </Col>

      <Col className={styles.buttonContainer}>
        <Button.solid
          size="large"
          width="fill"
          color="brand"
          onClick={handleLogin}
        >
          로그인
        </Button.solid>
        
        <Flex 
          className={styles.signupLink}
          onClick={() => router.push('/auth/register')}
        >
          아직 계정이 없으신가요? 회원 가입하기
        </Flex>
      </Col>
    </AuthLayout>
  )
}
