'use client'

import {Col} from '@/shared/flex'
import {IconButton} from '@/shared/iconButton'
import {useState} from 'react'

export default function Home() {
  const [v, sv] = useState<string | null>(null)
  const [t, st] = useState<Array<string> | null>(null)

  return (
    <Col style={{padding: '240px 0'}} alignItems={'center'} motionProps={{
    }}>
      <Col style={{maxWidth: 360, backgroundColor: 'red'}} gap={24}>
      </Col>
    </Col>
  )
}
