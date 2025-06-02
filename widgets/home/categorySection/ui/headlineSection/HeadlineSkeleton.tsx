import {Col} from '@/shared/components/atom/flex'
import {Skeleton} from '@/shared/components/atom/skeleton'
import classNames from 'classnames'
import style from '../style.module.css'

export default function HeadlineSkeleton() {
  return (
    <Col className={classNames(style.headlineContainer, style.skeleton)}>
      <div className={style.mediaWrapper}>
        <Skeleton
          width={'100%'}
          height={'100%'}
          borderRadius={12}
        />
      </div>
      <Col className={style.headlineContents}>
        <Skeleton width={'64%'} height={24}/>
        <Skeleton width={'24%'} height={20}/>
      </Col>
    </Col>
  )
}