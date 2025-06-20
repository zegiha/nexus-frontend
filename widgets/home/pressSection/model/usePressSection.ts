'use client'

import {articleWithoutPressEntity, getArticlesByPress,} from '@/prev_entity/article'
import {pressSummaryEntity} from '@/prev_entity/press'
import {useQuery} from '@tanstack/react-query'

export default function usePressSection() {
  const queryRes = useQuery<
    Array<{
      press: pressSummaryEntity,
      articles: Array<articleWithoutPressEntity>
      headlines: Array<articleWithoutPressEntity>
    }>
  >({
    queryKey: ['headlinesByPress'],
    queryFn: async () => getArticlesByPress('pressId'),
  })

  return {
    ...queryRes
  }
}