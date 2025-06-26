'use client'

import Link from 'next/link'
import {Col, Row} from '@/shared/components/atom/flex'
import {Avatar} from '@/shared/components/molecule/avatar'
import {pressSummaryEntity} from '@/prev_entity/press'
import style from './style.module.css'

interface PressSummaryProps {
  press: pressSummaryEntity
}

export default function PressSummary({ press }: PressSummaryProps) {
  return (
    <Link href={`/app/press/${encodeURIComponent(press.name)}`} className={style.pressLink}>
      <Row className={style.pressContainer} gap={8}>
        <Avatar 
          size={'small'} 
          imageUrl={press.imgUrl} 
          name={press.name} 
        />
        <Col>
          <span className={style.pressName}>{press.name}</span>
        </Col>
      </Row>
    </Link>
  )
}
