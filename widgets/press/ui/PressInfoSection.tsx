import {Col, Row} from '@/shared/components/atom/flex'
import {Avatar} from '@/shared/components/molecule/avatar'
import {RoundButton} from '@/shared/components/molecule/button'
import style from './style.module.css'
import { Typo } from '@/shared/components/atom/typo'
import usePressInfoSection from '../model/usePressInfoSection'
import { ICompanyName } from '../const/ICompanyName'

export default function PressInfoSection({
  name
}: ICompanyName) {
  const {
    data,
  } = usePressInfoSection({name})

  return (
    <Row
      className={style.infoSection}
      gap={16}
      style={{
        backgroundColor: data?.signatureColor ?? undefined,
      }}
      >
      <Avatar size={'parentHeight'} imageUrl={data?.profileImageUrl ?? ''}/>
      <Col className={style.infoTextWrapper} width={'auto'} gap={8}>
        <RoundButton.solid color={'white'} size={'small'}>
          구독
        </RoundButton.solid>
        <Col width={'auto'} gap={4}>
          <Typo.xxlarge color='static-white' accent width={'auto'}>
            {data?.name ?? ''}
          </Typo.xxlarge>
          <Typo.small color='static-white' width={'auto'}>
            {data?.description ?? ''}
          </Typo.small>
          <Row gap={2}>
            <Typo.small color='static-white' width={'auto'}>
              {data?.subscribers.toLocaleString('ko-KR') ?? ''}
            </Typo.small>
            <Typo.small color='static-white' width={'auto'}>
              구독중
            </Typo.small>
          </Row>
        </Col>
      </Col>
    </Row>
  )
}