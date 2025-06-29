import {articleEntity} from '@/prev_entity/article'

export default async function getArticlesEntity() {
  const dummyWithPicture: articleEntity = {
    id: '00d249ec-d787-42aa-bcc6-e64c9c4232ef',
    category: '정치',
    title: '尹대통령 \'운명의 날\'…헌재 탄핵심판 4일 오전 11시 선고(종합)',
    contents: '11회 변론·16명 증인신문…38일 \'대통령사건 최장\' 평의 끝에 결론\n현 8명 중 재판관 6인 이상 찬성시 尹대통령 파면…미달시 직무복귀',
    img: {
      url: 'https://i.pinimg.com/736x/61/6b/07/616b0725c22d2103ff02f0682f4ea493.jpg',
      alt: '윤석열 대통령이 제판을 받고 있다. 사진 출처:SBS',
    },
    press: {
      name: 'SBS',
      imgUrl: 'https://i.pinimg.com/736x/66/7d/c0/667dc0938dc7c1d22e56f0bbd1d04357.jpg',
    },
    createdAt:new Date('2025-06-02'),
  }

  const dummyWithVideo: articleEntity = {
    id: '00d249ec-d787-42aa-bcc6-e64c9c4232ef',
    title: '尹대통령 \'운명의 날\'…헌재 탄핵심판 4일 오전 11시 선고(종합)',
    contents: '11회 변론·16명 증인신문…38일 \'대통령사건 최장\' 평의 끝에 결론\n현 8명 중 재판관 6인 이상 찬성시 尹대통령 파면…미달시 직무복귀',
    video: {
      url: 'https://v1.pinimg.com/videos/mc/720p/2c/87/ff/2c87ffd3dd4b2b4daedab26124864b49.mp4',
    },
    press: {
      name: 'SBS',
      imgUrl: 'https://i.pinimg.com/736x/66/7d/c0/667dc0938dc7c1d22e56f0bbd1d04357.jpg',
    },
    createdAt:new Date('2025-06-02'),
  }

  const dummy: articleEntity = {
    id: '00d249ec-d787-42aa-bcc6-e64c9c4232ef',
    title: '尹대통령 \'운명의 날\'…헌재 탄핵심판 4일 오전 11시 선고(종합)',
    contents: '11회 변론·16명 증인신문…38일 \'대통령사건 최장\' 평의 끝에 결론\n현 8명 중 재판관 6인 이상 찬성시 尹대통령 파면…미달시 직무복귀',
    press: {
      name: 'SBS',
      imgUrl: 'https://i.pinimg.com/736x/66/7d/c0/667dc0938dc7c1d22e56f0bbd1d04357.jpg',
    },
    createdAt:new Date('2025-06-02'),
  }

  const res: Array<articleEntity> = []
  for(let i = 0; i < 18; i++) {
    if(i % 2 == 0) res.push(dummyWithPicture)
    else if(i % 3 == 0) res.push(dummyWithVideo)
    else res.push(dummy)
  }
  return res
}