'use client'

import { getAllPressArticles } from '@/entity/article/api/getArticles'
import { articleEntity } from '@/entity/article'
import { pressSummaryEntity } from '@/entity/press'
import { useQuery } from '@tanstack/react-query'

export default function usePressSection() {
  const queryRes = useQuery<
    Array<{
      press: pressSummaryEntity,
      articles: Array<articleEntity>
      headlines: Array<articleEntity>
    }>
  >({
    queryKey: ['headlinesByPress'],
    queryFn: async () => {
      try {
        const pressByArticles = await getAllPressArticles();
        
        // API 응답을 기존 형식으로 변환
        const result = Object.entries(pressByArticles).map(([pressName, articles]) => ({
          press: {
            name: pressName,
            imgUrl: articles[0]?.press.imgUrl || '/default-press-logo.png'
          } as pressSummaryEntity,
          articles: articles.slice(0, 6), // 일반 기사 6개
          headlines: articles.slice(0, 3) // 헤드라인 3개
        }));
        
        // 결과가 비어있으면 더미 데이터 반환
        if (result.length === 0) {
          return getFallbackPressData();
        }
        
        return result;
      } catch (error) {
        console.error('Failed to fetch press articles:', error);
        // 실패시 더미 데이터 반환
        return getFallbackPressData();
      }
    },
  });

  return {
    ...queryRes
  };
}

// 더미 데이터 생성 함수
function getFallbackPressData() {
  const dummyArticle: articleEntity = {
    id: 'dummy-press-article',
    title: '더미 뉴스 제목',
    contents: '더미 뉴스 내용입니다.',
    category: '정치',
    press: {
      name: 'SBS',
      imgUrl: 'https://i.pinimg.com/736x/66/7d/c0/667dc0938dc7c1d22e56f0bbd1d04357.jpg',
    },
    createdAt: new Date(),
  };

  const dummyPresses = ['SBS', 'KBS', 'MBC', '연합뉴스', '조선일보'];
  
  return dummyPresses.map(pressName => ({
    press: {
      name: pressName,
      imgUrl: 'https://i.pinimg.com/736x/66/7d/c0/667dc0938dc7c1d22e56f0bbd1d04357.jpg'
    } as pressSummaryEntity,
    articles: Array.from({length: 6}, (_, i) => ({
      ...dummyArticle,
      id: `dummy-${pressName}-${i}`,
      title: `${pressName} 뉴스 ${i + 1}`,
      press: { name: pressName, imgUrl: dummyArticle.press.imgUrl }
    })),
    headlines: Array.from({length: 3}, (_, i) => ({
      ...dummyArticle,
      id: `dummy-headline-${pressName}-${i}`,
      title: `${pressName} 헤드라인 ${i + 1}`,
      press: { name: pressName, imgUrl: dummyArticle.press.imgUrl }
    }))
  }));
}