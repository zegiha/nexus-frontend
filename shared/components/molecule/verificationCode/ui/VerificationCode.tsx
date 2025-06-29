'use client'

import { useState, useRef } from 'react'
import { Col, Row, Flex } from '@/shared/components/atom/flex'
import styles from './verificationCode.module.css'

interface IVerificationCode {
  length?: number
  onComplete: (code: string) => void
  error?: string
}

export default function VerificationCode({ 
  length = 6, 
  onComplete, 
  error 
}: IVerificationCode) {
  const [codes, setCodes] = useState<string[]>(new Array(length).fill(''))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newCodes = [...codes]
    newCodes[index] = value
    setCodes(newCodes)

    // Move to next input if value is entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }

    // Check if all inputs are filled
    if (newCodes.every(code => code !== '')) {
      onComplete(newCodes.join(''))
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <Col className={styles.container}>
      <Row className={styles.codeInputs} justifyContent="center" gap={4}>
        {codes.map((code, index) => (
          <Flex
            key={index}
            className={`${styles.codeInput} ${error ? styles.error : ''} ${code ? styles.filled : ''}`}
          >
            <input
              ref={(el) => {
                inputRefs.current[index] = el
              }}
              type="text"
              maxLength={1}
              value={code}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={styles.input}
            />
          </Flex>
        ))}
      </Row>
      <Flex className={`${styles.message} ${error ? styles.error : ''}`}>
        {error ? error : '입력하신 이메일로 전송된 인증번호를 입력해주세요'}
      </Flex>
    </Col>
  )
}
