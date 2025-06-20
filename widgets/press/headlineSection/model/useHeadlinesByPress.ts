'use client'

import {articleEntity, getArticlesEntity} from '@/prev_entity/article'
import {useQuery} from '@tanstack/react-query'

export default function useHeadlinesByPress(pressId: string) {
  // TODO getArticlesByPress에서는 여러 press의 데이터를 반환함, 수정해야함
  const queryRes = useQuery<Array<articleEntity>, Error>({
    queryKey: ['pressDetailHeadlines'],
    queryFn: getArticlesEntity,
  })

  return {...queryRes}
}
