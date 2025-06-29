'use client'

import { Col, Row, Flex } from '@/shared/components/atom/flex'
import styles from './formField.module.css'

interface IFormField {
  label: string
  required?: boolean
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  error?: string
  focused?: boolean
  helpText?: string
}

export default function FormField({
  label,
  required = false,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  focused = false,
  helpText
}: IFormField) {
  return (
    <Col className={styles.fieldContainer}>
      <Row className={styles.labelRow} justifyContent="space-between" alignItems="center">
        <Flex className={styles.label}>{label}</Flex>
        {required && <Flex className={styles.required}>필수*</Flex>}
      </Row>
      <Flex 
        className={`${styles.inputWrapper} ${focused ? styles.focused : ''} ${error ? styles.error : ''}`}
      >
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={styles.input}
        />
      </Flex>
      {error && <Flex className={styles.errorMessage}>{error}</Flex>}
      {!error && helpText && <Flex className={styles.helpText}>{helpText}</Flex>}
    </Col>
  )
}
