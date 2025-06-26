import {Col, Row} from '@/shared/components/atom/flex'
import {Avatar} from '@/shared/components/molecule/avatar'
import {Button, RoundButton} from '@/shared/components/molecule/button'
import {Chip} from '@/shared/components/molecule/chip'
import style from './style.module.css'

export default function PressInfoSection() {
  return (
    <Row className={style.infoSection} gap={16}>
      <Avatar size={'parentHeight'} imageUrl={'https://i.pinimg.com/736x/9b/b6/73/9bb67379c6f332b49bfe7e7df0f21468.jpg'}/>
      <Col className={style.infoTextWrapper} width={'auto'} gap={8}>
        <RoundButton.solid color={'white'} size={'small'}>
          구독
        </RoundButton.solid>
      </Col>
    </Row>
  )
}