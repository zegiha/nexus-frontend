import useOffsetHeight from '@/widgets/home/highlightsSection/model/useOffsetHeight'
import HeadlinesByCategories from '@/widgets/home/highlightsSection/ui/headlineByCategories/HeadlinesByCategories'
import LatestNews from '@/widgets/home/highlightsSection/ui/latestNews/LatestNews'
import style from './style.module.css'

export default function HighlightsSection() {
  const {
    offsetHeight,
    updateOffsetHeight,
  } = useOffsetHeight()

  return (
    <section className={style.section}>
      <HeadlinesByCategories updateOffsetHeight={updateOffsetHeight}/>
      <LatestNews offsetHeight={offsetHeight}/>
    </section>
  )
}