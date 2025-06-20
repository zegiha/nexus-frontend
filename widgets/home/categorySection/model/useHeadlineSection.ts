'use client'

import {articleWithMediaEntity, getArticlesWithMediaEntity} from '@/prev_entity/article'
import {useQuery} from '@tanstack/react-query'

export default function useHeadlineSection() {
  const queryRes = useQuery<
    Array<articleWithMediaEntity>,
    Error
  >({
    queryKey: ['categorySectionHeadlines'],
    queryFn: async () => {
      const res = await getArticlesWithMediaEntity()
      await new Promise((res) => setTimeout(res, 2000))
      return res
    }
  })

  return {
    ...queryRes
  }
}