'use client'

import {getArticlesWithMediaEntity} from '@/entity/article'
import {useQuery} from '@tanstack/react-query'

export default function useArticleSection() {
  const queryRes = useQuery({
    queryKey: ['categorySectionArticles'],
    queryFn: async () => {
      const res = await getArticlesWithMediaEntity()
      await new Promise(res => setTimeout(res, 2000))
      return res
    }
  })

  return {
    ...queryRes,
  }
}