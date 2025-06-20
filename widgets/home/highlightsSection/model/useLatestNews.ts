'use client'

import {getArticlesEntity, articleEntity} from '@/prev_entity/article'
import {useQuery} from '@tanstack/react-query'
import {useEffect, useRef} from 'react'

export default function useLatestNews(offsetHeight: number) {
  const queryRes = useQuery<Array<articleEntity>, Error>({
    queryKey: ['latestHeadline'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 2000))
      return getArticlesEntity()
    },
  })

  const ref = useRef<HTMLDivElement>(null)

  const handleHeight = () => {
    if(window.innerWidth <= 720  && ref.current !== null) ref.current.style.height = 'auto'
    else if(offsetHeight && ref.current !== null) {
      ref.current.style.height = `${offsetHeight}px`
    }
  }

  useEffect(() => {
    handleHeight()
    window.addEventListener('resize', handleHeight)
    return () => {
      window.removeEventListener('resize', handleHeight)
    }
  }, []);

  useEffect(() => {
    handleHeight()
  }, [offsetHeight, ref])

  return {
    ref,
    ...queryRes,
  }
}