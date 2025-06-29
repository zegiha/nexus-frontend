import {Col} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import Swiper from '@/shared/components/organism/swiper/ui/Swiper'
import useHeadlinesByCategories from '@/widgets/home/highlightsSection/model/useHeadlinesByCategories'
import Headline from '@/widgets/home/highlightsSection/ui/headlineByCategories/Headline'
import HeadlineSkeleton from '@/widgets/home/highlightsSection/ui/headlineByCategories/HeadlineSkeleton'
import {RefObject} from 'react'
import style from './headlinesByCategories.module.css'

export default function HeadlinesByCategories({
  updateOffsetHeight,
}: {
  updateOffsetHeight: (ref: RefObject<HTMLDivElement | null>) => void
}) {
  const {
    ref,
    status, data, error,
  } = useHeadlinesByCategories(updateOffsetHeight)

  return (
    <Col
      ref={ref}
      className={style.headlinesByCategoriesContainer}
      gap={24}
    >
      <Typo.xlarge color={'strong'} accent>
        카테고리별 오늘의 헤드라인
      </Typo.xlarge>
      <Swiper loop={true} gap={24} navigationPosition={'bottom'}>
        {status === 'success' ? data.map((v, i) =>
          <Headline
            key={i}
            {...v}
          />
        ): status === 'pending' ? (
          Array.from({length: 3}).map((_, i) => (
            <HeadlineSkeleton key={i}/>
          ))
        ) : <></>}
      </Swiper>

      {status === 'error' && (
        <Typo.medium>{`문제 발생 : ${error?.message}`}</Typo.medium>
      )}
    </Col>
  )
}