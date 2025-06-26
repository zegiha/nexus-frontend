'use client'

import {useArticleControllerGetArticles} from '@/entity/api/article/article'
import {getArticlesEntity, articleEntity} from '@/prev_entity/article'
import {mediaToArticleVideoOrImage} from '@/shared/helper'
import {useQuery} from '@tanstack/react-query'
import {useEffect, useRef} from 'react'

export default function useLatestNews(offsetHeight: number) {
  // const queryRes = useQuery<Array<articleEntity>, Error>({
  //   queryKey: ['latestHeadline'],
  //   queryFn: async () => {
  //     await new Promise(resolve => setTimeout(resolve, 2000))
  //     return getArticlesEntity()
  //   },
  // })

  const queryRes = useArticleControllerGetArticles<
    Array<articleEntity>,
    Error
  >(
    {page: 1, limit: 20},
    {
      query: {
        queryKey: ['latestNews'],
        select: v => {
          const res: Array<articleEntity> = []
          v.items.forEach(v => {
            res.push({
              id: v.uuid,
              title: v.title,
              contents: v.contents,
              category: v.category ?? undefined,
              press: {
                name: v.company.name,
                imgUrl: v.company.profileImageUrl
              },
              createdAt: new Date(v.createAt),
              ...mediaToArticleVideoOrImage(v.media)
            })
          })

          return res
        }
      }
    }
  )

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