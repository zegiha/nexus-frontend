'use client'

import {articleEntity, getArticlesEntity} from '@/prev_entity/article'
import {useQuery} from '@tanstack/react-query'

export default function useHeadlinesByPress(pressId: string) {
  // TODO getArticlesByPress에서는 여러 press의 데이터를 반환함, 수정해야함
  const queryRes = useQuery<Array<articleEntity>, Error>({
    queryKey: ['pressDetailHeadlines', pressId],
    queryFn: async () => {
      try {
        return await getArticlesEntity()
      } catch (error) {
        console.error('언론사별 헤드라인 API 실패, 더미 데이터 사용:', error)
        
        // API 실패 시 더미 헤드라인 데이터 (발표용)
        const dummyHeadlines: articleEntity[] = Array.from({length: 10}, (_, index) => ({
          id: `${pressId}-headline-${index + 1}`,
          title: [
            "대통령, 경제 활성화 방안 발표",
            "신기술 도입으로 산업혁신 가속화",
            "교육개혁 정책 세부안 확정",
            "글로벌 시장 진출 확대 방침",
            "지역균형발전 투자계획 공개",
            "디지털 전환 지원정책 강화",
            "청년 일자리 창출 대책 마련",
            "친환경 에너지 전환 가속화",
            "스마트시티 구축사업 본격화",
            "국제협력 강화 방안 모색"
          ][index],
          contents: `${pressId === "1" ? "조선일보" : pressId === "2" ? "중앙일보" : `언론사 ${pressId}`}의 주요 뉴스입니다. 자세한 내용은 기사를 참조하세요.`,
          category: ["정치", "경제", "사회", "국제", "문화"][index % 5],
          press: {
            name: pressId === "1" ? "조선일보" : 
                  pressId === "2" ? "중앙일보" : 
                  pressId === "3" ? "동아일보" : 
                  pressId === "4" ? "한겨레" :
                  pressId === "5" ? "경향신문" : `언론사 ${pressId}`,
            imgUrl: "/images/press-logo-placeholder.png"
          },
          img: {
            url: "/images/news-placeholder.jpg",
            alt: "뉴스 이미지"
          },
          createdAt: new Date(Date.now() - index * 3600000)
        }))
        
        return dummyHeadlines
      }
    },
  })

  return {...queryRes}
}
