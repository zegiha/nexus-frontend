'use client'

import {Col} from '@/shared/components/atom/flex'
import {HeaderLayout} from '@/shared/components/organism/header'
import {PressInfoSection, SegmentSection} from '@/widgets/press'
import {useParams} from 'next/navigation'
import style from './styles.module.css'

export default function PressDetailPage() {
  const {id: pressId} = useParams<{id: string}>()

  return (
    <HeaderLayout>
      <Col
        className={style.container}
        width={'fill'}
        alignItems={'center'}
      >
        <Col className={style.wrapper} width={'fill'} gap={24}>
          <PressInfoSection name={pressId}/>
          <SegmentSection name={pressId}/>
        </Col>
      </Col>
    </HeaderLayout>
  )
}
