'use client'

import {useArticleControllerGetCategories} from '@/entity/api/article/article'

export default function useCategories() {
  const queryRes = useArticleControllerGetCategories({
    query: {
      queryKey: ['allCategories'],
      select: v => {
        return ['언론사별', ...v]
      }
    }
  })
  return {
    ...queryRes,
  }
}