'use client'

import {getArticlesWithMediaEntity} from '@/prev_entity/article'
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

export default function useArticleSection() {
  const generateNewsData = useCallback((page: number) => {
    return Array.from({length: 20}, (_, index) => {
      const totalIndex = page * 20 + index
      return {
        id: `news-${totalIndex}`,
        title: newsTitles[totalIndex % newsTitles.length],
        contents: `${pressList[totalIndex % pressList.length]}의 주요 뉴스입니다. 정확하고 신속한 정보 전달을 위해 노력하고 있습니다.`,
        category: ['정치', '경제', '사회', '국제', '문화'][totalIndex % 5],
        press: {
          name: pressList[totalIndex % pressList.length],
          imgUrl: '/images/press-logo-placeholder.png'
        },
        img: totalIndex % 3 === 0 ? {
          url: '/images/news-placeholder.jpg',
          alt: '뉴스 이미지'
        } : undefined,
        video: totalIndex % 7 === 0 ? {
          url: '/videos/news-video-placeholder.mp4'
        } : undefined,
        createdAt: new Date(Date.now() - totalIndex * 3600000)
      }
    })
  }, [])

  const queryRes = useInfiniteQuery({
    queryKey: ['categorySectionArticles'],
    queryFn: async ({ pageParam = 0 }) => {
      try {
        // 실제 API 호출 시도
        const res = await getArticlesWithMediaEntity()
        return res
      } catch (error) {
        console.log('뉴스 API 실패, 생성된 뉴스 데이터 사용:', error)
        // API 실패시 생성된 뉴스 데이터 반환
        return generateNewsData(pageParam)
      }
    },
    getNextPageParam: (lastPage, pages) => {
      // 무한 스크롤을 위해 다음 페이지 번호 반환
      return pages.length
    },
    initialPageParam: 0,
  })

  // 모든 페이지의 데이터를 하나의 배열로 합치기
  const allData = useMemo(() => {
    return queryRes.data?.pages.flat() || []
  }, [queryRes.data])

  return {
    ...queryRes,
    data: allData,
  }
}