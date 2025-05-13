'use client'

import {pressDetailEntity} from '@/entity/press'
import {Col, Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import Image from 'next/image'
import style from './style.module.css'

interface PressInfoProps {
  pressDetail: pressDetailEntity
  onSubscribe: () => void
}

export default function PressInfo({ pressDetail, onSubscribe }: PressInfoProps) {
  return (
    <Row className={style.pressInfoContainer}>
      <div className={style.pressLogo}>
        <Image 
          src={pressDetail.imgUrl} 
          alt={pressDetail.name} 
          width={136} 
          height={136} 
          objectFit="cover"
        />
      </div>
      
      <Col className={style.pressInfoText} gap={8}>
        <div onClick={onSubscribe} className={style.subscribeButton}>
          <Typo.medium>
            {pressDetail.isSubscribed ? '구독중' : '구독'}
          </Typo.medium>
        </div>
        
        <Col gap={4}>
          <Typo.xxlarge weight="bold" color="white">
            {pressDetail.name}
          </Typo.xxlarge>
          
          <Typo.medium color="static-white">
            {pressDetail.description}
          </Typo.medium>
          
          <Typo.medium color="white">
            <strong>{pressDetail.subscriberCount.toLocaleString()}</strong> 구독중
          </Typo.medium>
        </Col>
      </Col>
      
      {pressDetail.isSubscribed && (
        <div onClick={onSubscribe} className={style.subscribedButton}>
          <Typo.medium>
            구독중
          </Typo.medium>
        </div>
      )}
    </Row>
  )
}
