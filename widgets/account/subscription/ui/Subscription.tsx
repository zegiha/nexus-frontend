'use client'

import { Col, Row } from '@/shared/components/atom/flex'
import { Typo } from '@/shared/components/atom/typo'
import { Button } from '@/shared/components/molecule/button'
import Image from 'next/image'
import styles from './styles.module.css'

export default function Subscription() {
  return (
    <Col width="fill" gap={24}>
      <Col gap={16}>
        <Typo.large color="strong" accent>
          언론사
        </Typo.large>
        <Col className={styles.subscriptionContainer} gap={16}>
          <Row alignItems="center" justifyContent="space-between">
            <Row gap={8} alignItems="center">
              <Image 
                src="/Frame 146.png" 
                alt="SBS" 
                width={32} 
                height={32} 
                style={{ borderRadius: '20px' }}
              />
              <Typo.medium color="normal">
                SBS
              </Typo.medium>
            </Row>
            <Row gap={8}>
              <Button.solid size="small" color="cautionary" onClick={() => {}}>
                알림 해제
              </Button.solid>
              <Button.outlined size="small" color="negative" onClick={() => {}}>
                구독 해제
              </Button.outlined>
            </Row>
          </Row>
          
          <Row alignItems="center" justifyContent="space-between">
            <Row gap={8} alignItems="center">
              <Image 
                src="/Frame 146.png" 
                alt="SBS" 
                width={32} 
                height={32} 
                style={{ borderRadius: '20px' }}
              />
              <Typo.medium color="normal">
                SBS
              </Typo.medium>
            </Row>
            <Row gap={8}>
              <Button.solid size="small" color="positive" onClick={() => {}}>
                알림 설정
              </Button.solid>
              <Button.outlined size="small" color="negative" onClick={() => {}}>
                구독 해제
              </Button.outlined>
            </Row>
          </Row>
        </Col>
      </Col>
      
      <Col gap={16}>
        <Typo.large color="strong" accent>
          기자
        </Typo.large>
        <Col className={styles.subscriptionContainer} gap={16}>
          <Row alignItems="center" justifyContent="space-between">
            <Row gap={8} alignItems="center">
              <Image 
                src="/Frame 146.png" 
                alt="김민재" 
                width={32} 
                height={32} 
                style={{ borderRadius: '20px' }}
              />
              <Typo.medium color="normal">
                김민재
              </Typo.medium>
            </Row>
            <Row gap={8}>
              <Button.solid size="small" color="cautionary" onClick={() => {}}>
                알림 해제
              </Button.solid>
              <Button.outlined size="small" color="negative" onClick={() => {}}>
                구독 해제
              </Button.outlined>
            </Row>
          </Row>
          
          <Row alignItems="center" justifyContent="space-between">
            <Row gap={8} alignItems="center">
              <Image 
                src="/Frame 146.png" 
                alt="김민재" 
                width={32} 
                height={32} 
                style={{ borderRadius: '20px' }}
              />
              <Typo.medium color="normal">
                김민재
              </Typo.medium>
            </Row>
            <Row gap={8}>
              <Button.solid size="small" color="positive" onClick={() => {}}>
                알림 설정
              </Button.solid>
              <Button.outlined size="small" color="negative" onClick={() => {}}>
                구독 해제
              </Button.outlined>
            </Row>
          </Row>
        </Col>
      </Col>
    </Col>
  )
}
