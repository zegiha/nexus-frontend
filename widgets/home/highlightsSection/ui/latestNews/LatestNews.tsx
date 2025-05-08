import {Col} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import useLatestNews from '@/widgets/home/highlightsSection/model/useLatestNews'
import NewsRow from '@/widgets/home/highlightsSection/ui/latestNews/NewsRow'
import NewsRowSkeleton from '@/widgets/home/highlightsSection/ui/latestNews/NewsRowSkeleton'
import style from './latestNews.module.css'

export default function LatestNews({
  offsetHeight,
}: {
  offsetHeight: number
}){
  const {
    ref,
    status, data, error
  } = useLatestNews(offsetHeight)

  return (
    <Col ref={ref} gap={24}>
      <Typo.xlarge color={'strong'} accent>
        제일 최근 뉴스 모아보기
      </Typo.xlarge>
      <Col className={style.latestNewsWrapper} gap={4}>
        {status === 'success' && (
          data.map((v, i) => (
            <NewsRow
              key={i}
              {...v}
            />
          ))
        )}
        {status === 'pending' && (
          Array.from({length: 5}).map((_, i) => (
            <NewsRowSkeleton
              key={i}
            />
          ))
        )}
      </Col>
    </Col>
  )
}
