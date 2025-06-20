'use client'

import {articleWithCategoryEntity, getArticlesWithCategoryEntity} from '@/prev_entity/article'
import {useQuery} from '@tanstack/react-query'
import {RefObject, useEffect, useRef} from 'react'

export default function useHeadlinesByCategories(
  updateOffsetHeight: (ref: RefObject<HTMLDivElement | null>) => void
) {
  const queryRes = useQuery<Array<articleWithCategoryEntity>, Error>({
    queryKey: ['headlineByCategory'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2초 대기
      return getArticlesWithCategoryEntity();
    },
  })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('resize', () => updateOffsetHeight(ref))
    return () => window.removeEventListener('resize', () => updateOffsetHeight(ref))
  }, [])

  useEffect(() => {
    updateOffsetHeight(ref)
  }, [queryRes.status])

  return {
    ref,
    ...queryRes,
  }
}