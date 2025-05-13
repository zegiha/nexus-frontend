import {headlineEntity} from '@/entity/headline'

export default async function getHeadlinesByPress(pressId: string): Promise<Array<headlineEntity>> {
  // 실제 구현에서는 API를 사용할 것이지만, 지금은 더미 데이터 반환
  const dummyHeadlines: Array<headlineEntity> = []
  
  for(let i = 0; i < 12; i++) {
    dummyHeadlines.push({
      id: `headline-${i}`,
      title: `[속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"`,
      contents: '국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련 "대통령 권한대행이 후임 헌법재판관을 임명할 권한이 있다"고 밝혔습니다.',
      category: i % 3 === 0 ? '정치' : i % 3 === 1 ? '경제' : '사회',
      press: {
        name: 'SBS',
        imgUrl: 'https://i.pinimg.com/736x/66/7d/c0/667dc0938dc7c1d22e56f0bbd1d04357.jpg',
      },
      img: {
        url: 'https://i.pinimg.com/736x/61/6b/07/616b0725c22d2103ff02f0682f4ea493.jpg',
        alt: '뉴스 이미지'
      }
    })
  }
  
  return dummyHeadlines
}
