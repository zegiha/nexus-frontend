'use client'

import {
  useArticleControllerFindArticleByCategory,
  useArticleControllerGetCategories
} from '@/entity/api/article/article'
import {ArticleAllCategoryResponseDto} from '@/entity/const'
import {articleWithCategoryEntity, getArticlesWithCategoryEntity} from '@/prev_entity/article'
import {mediaToArticleVideoOrImage} from '@/shared/helper'
import {useQuery} from '@tanstack/react-query'
import {RefObject, useEffect, useRef} from 'react'

export default function useHeadlinesByCategories(
  updateOffsetHeight: (ref: RefObject<HTMLDivElement | null>) => void
) {
  const queryRes = useArticleControllerFindArticleByCategory<
    Array<articleWithCategoryEntity>,
    Error
  >({
    query: {
      queryKey: ['headlineByCategory-latest'],
      select: v => {
        const res: Array<articleWithCategoryEntity> = []
        v.items.forEach(item => {
          res.push({
            id: item.uuid,
            title: item.title,
            contents: item.contents,
            category: item.category ?? '',
            press: {
              name: item.company.name,
              imgUrl: item.company.profileImageUrl
            },
            createdAt: new Date(item.createAt),
            ...mediaToArticleVideoOrImage(item.media)
          })
        })

        return res
      }
    }
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