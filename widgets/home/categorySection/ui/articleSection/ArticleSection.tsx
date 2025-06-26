'use client'

import { useEffect, useRef, useCallback } from 'react'
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
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useArticleSection(activeCategory)

  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries
    if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  useEffect(() => {
    const element = loadMoreRef.current
    if (!element) return

    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    })
    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [handleObserver])

  return (
    <div className={style.section}>
      {status === 'success' && (
        <>
          {data.map((v: any, i: number) => (
            <Article key={`${v.id}-${i}`} {...v}/>
          ))}
          
          {/* 무한 스크롤 트리거 */}
          <div ref={loadMoreRef} style={{ height: '20px' }} />
          
          {/* 더 로딩 중일 때 스켈레톤 표시 */}
          {isFetchingNextPage && (
            Array.from({length: 6}).map((_, i) => (
              <ArticleSkeleton key={`loading-${i}`}/>
            ))
          )}
        </>
      )}
      {status === 'pending' && (
        Array.from({length: 12}).map((_, i) => (
          <ArticleSkeleton key={i}/>
        ))
      )}
    </div>
  )
}