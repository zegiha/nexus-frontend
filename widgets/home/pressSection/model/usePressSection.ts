'use client'

import { getAllPressArticles } from '@/entity/article/api/getArticles'
import { articleEntity } from '@/entity/article'
import { pressSummaryEntity } from '@/entity/press'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useMemo, useCallback } from 'react'

// 뉴스 제목 풀
const pressTitles = [
  '정부, 경제 활성화를 위한 종합대책 발표',
  '신기술 스타트업 지원 정책 확대',
  '교육부, 디지털 교육 혁신 방안 공개',
  '환경부, 탄소중립 실현 로드맵 제시',
  '문화체육관광부, K-콘텐츠 해외진출 지원',
  '보건복지부, 의료시스템 디지털화 추진',
  '국토교통부, 스마트시티 구축 계획 발표',
  '외교부, 다자외교 강화 방안 마련',
  '국방부, 첨단무기 도입 계획 공개',
  '농림축산식품부, 스마트팜 확산 정책 발표'
]

// 주요 언론사 목록
const majorPress = [
  { name: 'SBS', imgUrl: 'https://i.pinimg.com/736x/66/7d/c0/667dc0938dc7c1d22e56f0bbd1d04357.jpg' },
  { name: 'KBS', imgUrl: '/images/press/kbs-logo.png' },
  { name: 'MBC', imgUrl: '/images/press/mbc-logo.png' },
  { name: '연합뉴스', imgUrl: '/images/press/yonhap-logo.png' },
  { name: '조선일보', imgUrl: '/images/press/chosun-logo.png' },
  { name: '중앙일보', imgUrl: '/images/press/joongang-logo.png' },
  { name: '동아일보', imgUrl: '/images/press/donga-logo.png' },
  { name: '한겨레', imgUrl: '/images/press/hani-logo.png' },
  { name: 'JTBC', imgUrl: '/images/press/jtbc-logo.png' },
  { name: 'YTN', imgUrl: '/images/press/ytn-logo.png' }
]

export default function usePressSection() {
  const generatePressData = useCallback((page: number) => {
    const startIndex = page * 5 // 페이지당 5개 언론사
    return majorPress.slice(startIndex, startIndex + 5).map((press, pressIndex) => {
      const totalPressIndex = startIndex + pressIndex
      
      return {
        press: press as pressSummaryEntity,
        articles: Array.from({length: 10}, (_, i) => ({ // 기사 수 증가
          id: `news-${totalPressIndex}-${i}`,
          title: pressTitles[(totalPressIndex * 10 + i) % pressTitles.length],
          contents: `${press.name}의 주요 뉴스입니다. 정확하고 신속한 정보 전달을 위해 노력하고 있습니다.`,
          category: ['정치', '경제', '사회', '국제', '문화', '스포츠', 'IT'][i % 7],
          press: press,
          img: i % 3 === 0 ? {
            url: '/images/news-placeholder.jpg',
            alt: '뉴스 이미지'
          } : undefined,
          createdAt: new Date(Date.now() - (totalPressIndex * 10 + i) * 3600000)
        } as articleEntity)),
        headlines: Array.from({length: 5}, (_, i) => ({ // 헤드라인 수 증가
          id: `headline-${totalPressIndex}-${i}`,
          title: `${press.name} 주요 헤드라인 ${i + 1}`,
          contents: `${press.name}의 주요 헤드라인 뉴스입니다.`,
          category: ['정치', '경제', '사회', '국제', '문화'][i % 5],
          press: press,
          createdAt: new Date(Date.now() - (totalPressIndex * 5 + i) * 1800000)
        } as articleEntity))
      }
    })
  }, [])

  const queryRes = useInfiniteQuery({
    queryKey: ['headlinesByPress'],
    queryFn: async ({ pageParam = 0 }) => {
      try {
        // 실제 API 호출 시도
        const pressByArticles = await getAllPressArticles();
        
        // API 응답을 기존 형식으로 변환
        const result = Object.entries(pressByArticles).map(([pressName, articles]) => ({
          press: {
            name: pressName,
            imgUrl: articles[0]?.press.imgUrl || '/default-press-logo.png'
          } as pressSummaryEntity,
          articles: articles.slice(0, 10),
          headlines: articles.slice(0, 5)
        }));
        
        return result.length > 0 ? result : generatePressData(pageParam);
      } catch (error) {
        console.log('언론사별 뉴스 API 실패, 생성된 데이터 사용:', error);
        return generatePressData(pageParam);
      }
    },
    getNextPageParam: (lastPage, pages) => {
      // 무한 스크롤을 위해 다음 페이지 번호 반환
      return pages.length < 3 ? pages.length : undefined // 최대 3페이지까지
    },
    initialPageParam: 0,
  });

  // 모든 페이지의 데이터를 하나의 배열로 합치기
  const allData = useMemo(() => {
    return queryRes.data?.pages.flat() || []
  }, [queryRes.data])

  return {
    ...queryRes,
    data: allData,
  };
}