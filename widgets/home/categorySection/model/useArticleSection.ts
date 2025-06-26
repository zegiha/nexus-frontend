'use client'

import {articleControllerGetArticles} from '@/entity/api/article/article'
import {PaginatedArticleResponseSummaryDto} from '@/entity/const'
import {articleEntity, getArticlesWithMediaEntity} from '@/prev_entity/article'
import {mediaToArticleVideoOrImage} from '@/shared/helper'
import {useInfiniteQuery} from '@tanstack/react-query'
import { useCallback, useMemo } from 'react'

// 뉴스 제목 풀
const newsTitles = [
  '대통령, 경제 활성화 방안 발표',
  '신기술 도입으로 산업혁신 가속화',
  '교육개혁 정책 세부안 확정',
  '글로벌 시장 진출 확대 방침',
  '지역균형발전 투자계획 공개',
  '디지털 전환 지원정책 강화',
  '청년 일자리 창출 대책 마련',
  '친환경 에너지 전환 가속화',
  '스마트시티 구축사업 본격화',
  '국제협력 강화 방안 모색',
  '중소기업 지원 정책 확대',
  '혁신기술 R&D 투자 증액',
  '문화예술 진흥 계획 수립',
  '관광산업 회복 지원책 마련',
  '농업기술 현대화 추진',
  '의료시스템 디지털화 진행',
  '교통인프라 확충 계획',
  '환경보호 정책 강화',
  '사회복지 제도 개선',
  '금융시장 안정화 방안'
]

// 언론사 목록
const pressList = ['SBS', '조선일보', '중앙일보', '동아일보', '한겨레', '경향신문', 'YTN', 'MBC', 'KBS', 'JTBC']

export default function useArticleSection(category: string) {
  const queryRes = useInfiniteQuery<
    PaginatedArticleResponseSummaryDto,
    Error,
    Array<articleEntity>
  >({
    queryKey: [`categorySectionArticles-${category}`],
    queryFn: async ({pageParam}) => {
      if(typeof pageParam !== 'number')
        throw new Error('pageParam is not number')
      return await articleControllerGetArticles({
        category,
        page: pageParam
      })
    },
    getNextPageParam: (lastPage, _) => {
      if(lastPage.totalPages === lastPage.page)
        return undefined
      return lastPage.page + 1
    },
    initialPageParam: 1,
    select: v => {
      const res: Array<articleEntity> = []

      v.pages.forEach(v => {
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
      })

      return res
    }
  })

  return {
    ...queryRes,
  }
}