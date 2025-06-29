'use client'

import {useArticleControllerGetArticleByAllCompany} from '@/entity/api/article/article'
import {mediaToArticleVideoOrImage} from '@/shared/helper'
import IBox from '@/widgets/home/pressSection/const/IBox'
import {useQuery} from '@tanstack/react-query'

export default function usePressSection() {
  const queryRes = useArticleControllerGetArticleByAllCompany<
    Array<IBox>,
    Error
  >({
    query: {
      queryKey: ['articleByCompanies'],
      select: v => {
        const res: Array<IBox> = []
        v.items.forEach(v => {
          res.push({
            headlines: v.headlines.map(v => ({
              id: v.uuid,
              title: v.title,
              contents: v.contents,
              category: v.category ?? undefined,
              createdAt: new Date(v.createAt),
              ...mediaToArticleVideoOrImage(v.media)
            })),
            articles: v.normals.map(v => ({
              id: v.uuid,
              title: v.title,
              contents: v.contents,
              category: v.category ?? undefined,
              createdAt: new Date(v.createAt),
              ...mediaToArticleVideoOrImage(v.media)
            })),
            press: {
              name: v.company.name,
              imgUrl: v.company.profileImageUrl
            }
          })
        })
        return res
      }
    }
  })

  return {
    ...queryRes,
  };
}