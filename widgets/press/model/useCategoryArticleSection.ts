'use client'

import { useInfiniteQuery } from "@tanstack/react-query";
import { ICategoryArticleSection } from "../const/ICategoryArticleSection";
import { articleControllerGetArticles } from "@/entity/api/article/article";
import { PaginatedArticleResponseSummaryDto } from './../../../entity/const/paginatedArticleResponseSummaryDto';
import { AxiosError } from "axios";
import { ArticleSummaryResponseDto } from "@/entity/const";

export default function useCategoryArticleSection({name, category}: ICategoryArticleSection) {
  const headline = getInfiniteQueryResult({name, category, isHeadline: true})
  const normal = getInfiniteQueryResult({name, category, isHeadline: false})

  return {
    headline,
    normal
  }
}

function getInfiniteQueryResult({name, category, isHeadline}: {isHeadline: boolean} & ICategoryArticleSection) {
  return useInfiniteQuery<
  PaginatedArticleResponseSummaryDto,
  AxiosError,
  Array<ArticleSummaryResponseDto>
  >({
    queryKey: [`article-headline-by-press-and-category-${name}-${category}-${isHeadline ? 'headline' : 'normal'}`],
    queryFn: async ({pageParam}) => {
      return await articleControllerGetArticles({
        type: isHeadline ? 'headline' : 'normal',
        companies: [name],
        category: category === '전체' ? undefined : category,
        page: pageParam as number,
        limit: 20,
      })
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if(lastPage.page === lastPage.totalPages)
        return undefined
      return lastPage.page + 1
    },
    select: v => {
      const res: Array<ArticleSummaryResponseDto> = []
      v.pages.forEach(v => {
        res.push(...v.items)
      })
      return res
    }
  })
}
