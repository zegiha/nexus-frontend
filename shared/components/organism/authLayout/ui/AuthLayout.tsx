'use client'

import { Col, Flex, Row } from '@/shared/components/atom/flex'
import { IconButton } from '@/shared/components/molecule/iconButton'
import { useRouter } from 'next/navigation'
import Logo from '@/public/Logo'
import styles from './authLayout.module.css'

interface IAuthLayout {
  children: React.ReactNode
  title?: string
}

export default function AuthLayout({ children, title }: IAuthLayout) {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <Flex className={styles.container}>
      <Flex className={styles.backButtonContainer}>
        <IconButton.transparent
          iconKey="arrow_backward"
          onClick={handleBack}
          aria-label="이전 페이지로 돌아가기"
        />
      </Flex>
      
      <Col className={styles.formContainer}>
        <Flex className={styles.logo}>
          <Logo />
        </Flex>
        <Col className={styles.content}>
          {title && <Flex className={styles.title}>{title}</Flex>}
          {children}
        </Col>
      </Col>
    </Flex>
  )
}
