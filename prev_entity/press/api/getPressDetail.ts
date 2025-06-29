import pressDetailEntity from '@/prev_entity/press/const/pressDetailEntity'

export default async function getPressDetail(id: string): Promise<pressDetailEntity> {
  // 실제 구현에서는 API 호출 대신, 더미 데이터 반환
  const dummyPressDetail: pressDetailEntity = {
    name: 'SBS',
    imgUrl: 'https://i.pinimg.com/736x/66/7d/c0/667dc0938dc7c1d22e56f0bbd1d04357.jpg',
    description: '지역뉴스의 전국화, \'전국지방지\' 선도',
    subscriberCount: 1234567,
    categories: ['주요뉴스', '정치', '경제', '엔터', '스포츠', '생활/문화', 'IT/과학', '세계', '랭킹'],
    isSubscribed: false
  }
  
  return dummyPressDetail
}
