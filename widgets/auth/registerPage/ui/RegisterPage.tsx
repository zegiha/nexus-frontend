'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Col } from '@/shared/components/atom/flex'
import { AuthLayout } from '@/shared/components/organism/authLayout'
import { TextInput } from '@/shared/components/molecule/textInput'
import { VerificationCode } from '@/shared/components/molecule/verificationCode'
import { Button } from '@/shared/components/molecule/button'
import styles from './registerPage.module.css'

// 이메일 유효성 검사 함수
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// 비밀번호 강도 검사 함수
const isValidPassword = (password: string) => {
  return password.length >= 8 && /^(?=.*[a-zA-Z])(?=.*\d)/.test(password)
}

type RegisterStep = 'email' | 'verification' | 'password'

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState<RegisterStep>('email')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const getStepInfo = (currentStep: RegisterStep) => {
    switch (currentStep) {
      case 'email':
        return {
          title: '이메일 입력',
          description: '회원가입을 위해 이메일 주소를 입력해주세요'
        }
      case 'verification':
        return {
          title: '이메일 인증',
          description: '이메일로 전송된 인증번호를 입력해주세요'
        }
      case 'password':
        return {
          title: '비밀번호 설정',
          description: '계정에서 사용할 비밀번호를 설정해주세요'
        }
    }
  }

  const handleEmailNext = () => {
    if (!email) {
      setErrors({ email: '이메일을 입력해주세요' })
      return
    }
    
    if (!isValidEmail(email)) {
      setErrors({ email: '올바른 이메일 형식을 입력해주세요' })
      return
    }
    
    console.log('Send verification code to:', email)
    setErrors({})
    setStep('verification')
  }

  const handleVerificationComplete = (code: string) => {
    setVerificationCode(code)
    if (code.length === 6) {
      setStep('password')
    }
  }

  const handlePasswordComplete = () => {
    if (!password) {
      setErrors({ password: '비밀번호를 입력해주세요' })
      return
    }

    if (!isValidPassword(password)) {
      setErrors({ password: '비밀번호는 8자 이상, 영문과 숫자를 포함해야 합니다' })
      return
    }

    console.log('Register user:', { email, password })
    
    alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.')
    router.push('/auth/login')
  }

  const renderProgressIndicator = () => {
    const steps: RegisterStep[] = ['email', 'verification', 'password']
    const currentIndex = steps.indexOf(step)
    
    return (
      <div className={styles.progressIndicator}>
        {steps.map((_, index) => (
          <div
            key={index}
            className={`${styles.progressDot} ${index <= currentIndex ? styles.active : ''}`}
          />
        ))}
      </div>
    )
  }

  const renderStep = () => {
    switch (step) {
      case 'email':
        return (
          <div className={styles.stepContent}>
            <Col className={styles.formContainer}>
              <TextInput
                inputType="email"
                labelContents="이메일"
                name="email"
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
            </Col>
            <Button.solid
              size="large"
              width="fill"
              color="brand"
              onClick={handleEmailNext}
            >
              다음
            </Button.solid>
          </div>
        )

      case 'verification':
        return (
          <div className={styles.stepContent}>
            <VerificationCode
              onComplete={handleVerificationComplete}
              error={errors.verification}
            />
            <Button.solid
              size="large"
              width="fill"
              color="brand"
              onClick={() => setStep('password')}
            >
              다음
            </Button.solid>
          </div>
        )

      case 'password':
        return (
          <div className={styles.stepContent}>
            <Col className={styles.formContainer}>
              <TextInput
                inputType="password"
                labelContents="비밀번호"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
                isNecessary={true}
                checker={[
                  (value: string) => {
                    if (!value) return '비밀번호를 입력해주세요'
                    if (!isValidPassword(value)) return '비밀번호는 8자 이상, 영문과 숫자를 포함해야 합니다'
                    return null
                  }
                ]}
              />
            </Col>
            <Button.solid
              size="large"
              width="fill"
              color="brand"
              onClick={handlePasswordComplete}
            >
              완료!
            </Button.solid>
          </div>
        )

      default:
        return null
    }
  }

  const getTitle = () => {
    switch (step) {
      case 'email':
        return '이메일'
      case 'verification':
        return '이메일 인증'
      case 'password':
        return '비밀번호'
      default:
        return ''
    }
  }

  return (
    <AuthLayout>
      {renderProgressIndicator()}
      
      <div className={styles.stepHeader}>
        <div className={styles.stepTitle}>
          {getStepInfo(step).title}
        </div>
        <div className={styles.stepDescription}>
          {getStepInfo(step).description}
        </div>
      </div>

      <div className={styles.stepContainer}>
        {renderStep()}
      </div>
    </AuthLayout>
  )
}
