import useHeadlineSection from '@/widgets/home/categorySection/model/useHeadlineSection'
import Headline from '@/widgets/home/categorySection/ui/headlineSection/Headline'
import HeadlineSkeleton from '@/widgets/home/categorySection/ui/headlineSection/HeadlineSkeleton'
import style from '../style.module.css'

export default function HeadlineSection({
  activeCategory,
}:{
  activeCategory: string
}) {
  const {
    data,
    status,
  } = useHeadlineSection(activeCategory)

  return (
    <div className={style.section}>
      {status === 'success' && data.length > 0 && (<Headline {...data[0]}/>)}
      {status === 'pending' && (<HeadlineSkeleton/>)}
      <div className={style.smallHeadlineSection}>
        {status === 'success' && data.slice(1, 5).map((v, i) => (
          <Headline
            key={i}
            {...v}
          />
        ))}
        {status === 'pending' && Array.from({length: 4}).map((_, i) => (
          <HeadlineSkeleton key={i}/>
        ))}
      </div>
    </div>
  )
}