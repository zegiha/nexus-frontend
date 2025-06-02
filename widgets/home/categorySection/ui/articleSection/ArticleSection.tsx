'use client'

import useArticleSection from '@/widgets/home/categorySection/model/useArticleSection'
import Article from '@/widgets/home/categorySection/ui/articleSection/Article'
import ArticleSkeleton from '@/widgets/home/categorySection/ui/articleSection/ArticleSkeleton'
import style from '../style.module.css'

export default function ArticleSection({
  activeCategory
}: {
  activeCategory: string
}) {
  const {
    data,
    status,
  } = useArticleSection()

  return (
    <div className={style.section}>
      {status === 'success' && (
        data.map((v, i) => (
          <Article key={i} {...v}/>
        ))
      )}
      {status === 'pending' && (
        Array.from({length: 12}).map((_, i) => (
          <ArticleSkeleton key={i}/>
        ))
      )}
    </div>
  )
}