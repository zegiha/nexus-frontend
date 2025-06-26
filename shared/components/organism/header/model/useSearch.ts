'use client'

import {useArticleControllerSearchArticle} from '@/entity/api/article/article'
import {useEffect, useState} from 'react'

export default function useSearch() {
  const [search, setSearch] = useState<string>('')
  const [prevSearch, setPrevSearch] = useState<string>('')
  const queryRes = useArticleControllerSearchArticle(
    {search: prevSearch,},
    {
      query: {
        enabled: prevSearch.trim() !== '',
        queryKey: [`search-${prevSearch}`],
        select: v => v.items
      },
    }
  )

  useEffect(() => {
    const timer  =setTimeout(() => {
      setPrevSearch(search)
    }, 300)
    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    if(prevSearch.trim() !== '')
      queryRes.refetch()
  }, [prevSearch]);

  return {
    ...queryRes,
    prevSearch, setPrevSearch,
    search, setSearch,
  }
}