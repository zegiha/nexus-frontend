'use client'

import {useArticleControllerGetArticles} from '@/entity/api/article/article'
import {articleWithMediaEntity, getArticlesWithMediaEntity} from '@/prev_entity/article'
import {useQuery} from '@tanstack/react-query'

export default function useHeadlineSection(category: string) {
  // const queryRes = useQuery<
  //   Array<articleWithMediaEntity>,
  //   Error
  // >({
  //   queryKey: ['categorySectionHeadlines'],
  //   queryFn: async () => {
  //     const res = await getArticlesWithMediaEntity()
  //     await new Promise((res) => setTimeout(res, 2000))
  //     return res
  //   }
  // })

  const queryRes = useArticleControllerGetArticles<
    Array<articleWithMediaEntity>,
    Error
  >(
    {
      type: 'headline',
      category,
      page: 1,
      limit: 5,
    },
    {
      query: {
        queryKey: [`articleByCategory-${category}`],
        select: v => {
          const res: Array<articleWithMediaEntity> = []
          v.items.forEach(v => {
            res.push({
              id: v.uuid,
              title: v.title,
              contents: v.contents,
              category: v.category ?? category,
              press: {
                name: v.company.name,
                imgUrl: v.company.profileImageUrl
              },
              createdAt: new Date(v.createAt),
              media: {
                type: v.media.mediaType === 'image' ? 'img' : 'video',
                url: v.media.url,
                alt: v.media.description
              }
            })
          })
          return res
        }
      }
    }
  )

  return {
    ...queryRes
  }
}