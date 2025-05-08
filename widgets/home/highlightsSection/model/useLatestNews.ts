'use client'

import {getHeadline, headlineEntity} from '@/entity/headline'
import {useQuery} from '@tanstack/react-query'
import {useEffect, useRef} from 'react'

export default function useLatestNews(offsetHeight: number) {
  const queryRes = useQuery<Array<headlineEntity>, Error>({
    queryKey: ['latestHeadline'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 2000))
      return getHeadline()
    },
  })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(offsetHeight && ref.current !== null) {
      ref.current.style.height = `${offsetHeight}px`
    }
  }, [offsetHeight, ref])

  return {
    ref,
    ...queryRes,
  }
}