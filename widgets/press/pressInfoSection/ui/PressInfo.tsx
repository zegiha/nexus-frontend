'use client'

import {pressDetailEntity} from '@/prev_entity/press'
import {Col, Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import Image from 'next/image'
import style from './style.module.css'

interface PressInfoProps {
  pressDetail: pressDetailEntity
  onSubscribeAction: () => void
}

export default function PressInfo({ pressDetail, onSubscribeAction }: PressInfoProps) {
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
        <div onClick={onSubscribeAction} className={style.subscribeButton}>
          <Typo.medium>
            {pressDetail.isSubscribed ? '구독중' : '구독'}
          </Typo.medium>
        </div>
        
        <Col gap={4}>
          <Typo.xxlarge accent color="static-white">
            {pressDetail.name}
          </Typo.xxlarge>
          
          <Typo.medium color="static-white">
            {pressDetail.description}
          </Typo.medium>

          <Row>
            <Typo.medium width={'hug'} accent color={'static-white'}>
              {pressDetail.subscriberCount.toLocaleString()}
            </Typo.medium>
            <Typo.medium color="static-white">
              구독중
            </Typo.medium>
          </Row>
        </Col>
      </Col>

      {pressDetail.isSubscribed && (
        <div onClick={onSubscribeAction} className={style.subscribedButton}>
          <Typo.medium color={'static-white'}>
            구독하기
          </Typo.medium>
        </div>
      )}
    </Row>
  )
}
