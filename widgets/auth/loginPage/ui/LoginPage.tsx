'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
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
    <div className={styles.desktop12}>
      <div className={styles.nexusParent}>
        <div className={styles.nexusIcon}>Nexus</div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <div className={styles.div}>이메일</div>
              <div className={styles.div1}>필수*</div>
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
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <div className={styles.div}>비밀번호</div>
              <div className={styles.div1}>필수*</div>
            </div>
            <div className={styles.wrapper}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
                className={styles.sunrin076sunrinthskr}
              />
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.container} onClick={handleLogin}>
            <div className={styles.div5}>로그인</div>
          </div>
          <div className={styles.div6} onClick={() => router.push('/auth/register')}>
            아직 계정이 없으신가요? 회원 가입하기
          </div>
        </div>
      </div>
    </div>
  )
}
