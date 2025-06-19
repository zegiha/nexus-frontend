'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
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

  const handleEmailNext = () => {
    if (!email) {
      alert('이메일을 입력해주세요')
      return
    }
    
    if (!isValidEmail(email)) {
      alert('올바른 이메일 형식을 입력해주세요')
      return
    }
    
    console.log('Send verification code to:', email)
    setStep('verification')
  }

  const handleVerificationNext = () => {
    if (verificationCode.length !== 6) {
      alert('6자리 인증번호를 입력해주세요')
      return
    }
    setStep('password')
  }

  const handlePasswordComplete = () => {
    if (!password) {
      alert('비밀번호를 입력해주세요')
      return
    }

    if (!isValidPassword(password)) {
      alert('비밀번호는 8자 이상, 영문과 숫자를 포함해야 합니다')
      return
    }

    console.log('Register user:', { email, password })
    alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.')
    router.push('/auth/login')
  }

  const handleVerificationInput = (index: number, value: string) => {
    if (value.length > 1) return
    
    const newCode = verificationCode.split('')
    newCode[index] = value
    setVerificationCode(newCode.join(''))
    
    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.querySelector(`input[name="code-${index + 1}"]`) as HTMLInputElement
      if (nextInput) nextInput.focus()
    }
  }

  const renderStep = () => {
    switch (step) {
      case 'email':
        return (
          <div className={styles.desktop13}>
            <div className={styles.parent}>
              <div className={styles.div}>이메일</div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent}>
                  <div className={styles.group}>
                    <div className={styles.div1}>이메일</div>
                    <div className={styles.div2}>필수*</div>
                  </div>
                  <div className={styles.sunrin076sunrinthskrWrapper}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="23sunrin076@sunrint.hs.kr"
                      className={styles.sunrin076sunrinthskr}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.wrapper} onClick={handleEmailNext}>
                  <div className={styles.div3}>다음</div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'verification':
        return (
          <div className={styles.desktop14}>
            <div className={styles.parent}>
              <div className={styles.div}>이메일 인증</div>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className={
                      verificationCode[i] ? styles.wrapper : 
                      i === verificationCode.length ? styles.frameItem : styles.frameChild
                    }>
                      {verificationCode[i] ? (
                        <div className={styles.div1}>{verificationCode[i]}</div>
                      ) : (
                        <input
                          type="text"
                          maxLength={1}
                          name={`code-${i}`}
                          onChange={(e) => handleVerificationInput(i, e.target.value)}
                          className={styles.hiddenInput}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.div3}>인증번호를 입력해주세요</div>
                {verificationCode.length === 0 && (
                  <div className={styles.div4}>인증번호가 비어있습니다!</div>
                )}
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frame} onClick={handleVerificationNext}>
                  <div className={styles.div5}>다음</div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'password':
        return (
          <div className={styles.desktop15}>
            <div className={styles.parent}>
              <div className={styles.div}>비밀번호</div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent}>
                  <div className={styles.group}>
                    <div className={styles.div1}>비밀번호</div>
                    <div className={styles.div2}>필수*</div>
                  </div>
                  <div className={styles.password1234Wrapper}>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password1234!"
                      className={styles.password1234}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.wrapper} onClick={handlePasswordComplete}>
                  <div className={styles.div3}>완료!</div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return renderStep()
}
