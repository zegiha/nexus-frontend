'use client'

import { Col, Row } from '@/shared/components/atom/flex'
import { Typo } from '@/shared/components/atom/typo'
import { Button } from '@/shared/components/molecule/button'
import styles from './styles.module.css'

export default function AccountInfo() {
  return (
    <Col width="fill" gap={16}>
      <Typo.large color="strong" accent>
        계정 정보
      </Typo.large>
      
      <Col className={styles.infoContainer} gap={16}>
        <Row alignItems="center" justifyContent="space-between" gap={8}>
          <Col gap={4}>
            <Typo.medium color="alternative">
              이메일
            </Typo.medium>
            <Typo.medium color="strong">
              iam!music@playboi.carti
            </Typo.medium>
          </Col>
          <Button.solid size="small" color="gray">
            변경하기
          </Button.solid>
        </Row>
        
        <Row alignItems="center" justifyContent="space-between" gap={8}>
          <Col gap={4}>
            <Typo.medium color="alternative">
              비밀번호
            </Typo.medium>
            <Typo.medium color="strong" underline>
              비밀번호 보기
            </Typo.medium>
          </Col>
          <Button.solid size="small" color="gray">
            변경하기
          </Button.solid>
        </Row>
      </Col>
      
      <Col gap={16}>
        <Typo.large color="negative" accent>
          계정 삭제
        </Typo.large>
        <Col gap={8}>
          <Typo.medium color="normal">
            계정 삭제 시 이전 정보는 바로 삭제됩니다
          </Typo.medium>
          <Typo.medium color="normal">
            신중히 선택해주세요
          </Typo.medium>
          <Button.solid size="small" color="red" width="hug">
            삭제하기
          </Button.solid>
        </Col>
      </Col>
    </Col>
  )
}
