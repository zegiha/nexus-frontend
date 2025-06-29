import {Col} from '@/shared/components/atom/flex'
import {motionTransition} from '@/shared/design/motion'
import ArticleSection from '@/widgets/home/categorySection/ui/articleSection/ArticleSection'
import HeadlineSection from '@/widgets/home/categorySection/ui/headlineSection/HeadlineSection'

export default function CategorySection({
  activeCategory
}:{
  activeCategory: string
}) {
  return (
    <Col motionProps={{
      initial: {opacity: 0},
      animate: {opacity: 1},
      exit: {opacity: 0},
      transition: motionTransition
    }}>
      <HeadlineSection activeCategory={activeCategory}/>
      <ArticleSection activeCategory={activeCategory}/>
    </Col>
  )
}