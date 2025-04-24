'use client'

import {Avatar} from '@/shared/avatar'
import {Col} from '@/shared/flex'
import {useState} from 'react'

export default function Home() {
  const [v, sv] = useState<string | null>(null)
  const [t, st] = useState<Array<string> | null>(null)

  return (
    <Col style={{padding: '240px 0'}} alignItems={'center'} motionProps={{
    }}>
      <Col style={{maxWidth: 360, backgroundColor: 'red', height: 256}} gap={24}>
        <Avatar
          size={'parentHeight'}
          name={'haha'}
          nameColor={'alternative'}
          imageUrl={'https://i.pinimg.com/736x/9c/5d/c6/9c5dc69b5eff8b3c14e63a47fd1b7fa9.jpg'}
        />
      </Col>
    </Col>
  )
}
