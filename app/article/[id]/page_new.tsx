'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getArticleById } from '@/entity/article/api/getArticles'
import styles from './index.module.css'

// 더미 데이터
const dummyArticle = {
  id: '1',
  title: '윤석열, 스캔들에 휩싸였다 계엄령까지 선포한 한국의 대통령',
  publishedAt: '2025.04.01.',
  modifiedAt: '2025.04.01.',
  publishedTime: '오후 1:45',
  modifiedTime: '오후 2:24',
  journalist: {
    name: '김도형',
    profileImage: '/Frame 24.png'
  },
  mainImage: {
    url: '/image 1.png',
    caption: '윤석열 대통령이 계엄을 선포하고 있다. 사진:YTN뉴스'
  },
  summary: {
    title: '핵심 요약',
    points: [
      '윤석열 대통령이 3일 밤 갑작스럽게 비상계엄령을 선포했으나, 몇 시간 만에 철회했다.',
      '4월 총선에서 패배한 이후 정치적 압박이 거세지던 상황에서 극단적인 처리를 단행했지만, 국회와 시민들의 강한 반발을 불러왔다.',
      '국회는 긴급히 소집되어 계엄 해제 요구안을 통과시켰고, 여당에서도 대통령의 탈당을 요구하는 목소리가 나왔다.',
      '야당은 탄핵을 추진하고 있으며, 대통령실 보좌진도 전원 사임을 발표했다.'
    ]
  },
  sections: [
    {
      title: '정치적 배경',
      content: '윤석열 대통령은 2022년 대선에서 근소한 차이로 승리하며 집권했다. 반페미니즘 공약과 강경한 외교 정책으로 지지층을 형성했으나, 2024년 4월 총선에서 야당이 압승하며 국정 운영이 어려워졌다. 총선 패배 이후 거부권을 반복적으로 행사하며 정국 운영에 대한 비판이 커졌고, 지지율도 17%까지 하락했다. 최근에는 영부인 김건희의 디올 핸드백 수수 및 주가 조작 의혹이 불거지며 논란이 더욱 커졌다.'
    },
    {
      title: '더 알아보기',
      content: '윤석열 대통령은 2022년 대선에서 근소한 차이로 승리하며 집권했다. 반페미니즘 공약과 강경한 외교 정책으로 지지층을 형성했으나, 2024년 4월 총선에서 야당이 압승하며 국정 운영이 어려워졌다. 총선 패배 이후 거부권을 반복적으로 행사하며 정국 운영에 대한 비판이 커졌고, 지지율도 17%까지 하락했다. 최근에는 영부인 김건희의 디올 핸드백 수수 및 주가 조작 의혹이 불거지며 논란이 더욱 커졌다.',
      bulletPoints: [
        '윤석열 대통령은 2022년 대선에서 근소한 차이로 승리하며 집권했다. 반페미니즘 공약과 강경한 외교 정책으로 지지층을 형성했으나, 2024년 4월 총선에서 야당이 압승하며 국정 운영이 어려워졌다. 총선 패배 이후 거부권을 반복적으로 행사하며 정국 운영에 대한 비판이 커졌고, 지지율도 17%까지 하락했다. 최근에는 영부인 김건희의 디올 핸드백 수수 및 주가 조작 의혹이 불거지며 논란이 더욱 커졌다.',
        '윤석열 대통령은 2022년 대선에서 근소한 차이로 승리하며 집권했다. 반페미니즘 공약과 강경한 외교 정책으로 지지층을 형성했으나, 2024년 4월 총선에서 야당이 압승하며 국정 운영이 어려워졌다. 총선 패배 이후 거부권을 반복적으로 행사하며 정국 운영에 대한 비판이 커졌고, 지지율도 17%까지 하락했다. 최근에는 영부인 김건희의 디올 핸드백 수수 및 주가 조작 의혹이 불거지며 논란이 더욱 커졌다.'
      ]
    },
    {
      title: '계엄령 선포와 철회 과정',
      content: '윤 대통령은 계엄령 선포 당시 "북한 공산 세력의 위협"을 이유로 들었지만, 이를 국내 정치 위기에서 벗어나기 위한 조치로 보는 시각이 우세하다. 계엄령 선포 후 국회는 긴급 소집되어 계엄 해제 요구 결의안을 통과시켰고, 국회 밖에서는 시민 수천 명이 모여 강하게 반발했다. 결국 몇 시간 만에 윤 대통령이 계엄령 해제를 발표했으나, 정치적 후폭풍은 더욱 거세지고 있다.'
    },
    {
      title: '국내외 반응',
      content: '윤 대통령의 돌발적인 계엄령 선포는 국내외에서 큰 반향을 불러일으켰다. 미국은 윤 대통령의 조치에 당혹스럽다는 반응을 보이며 "한국이 법치에 따라 이번 사태를 해결하길 바란다"고 밝혔다. 일본 정부도 "예외적이고 심각한 우려"를 표명하며 한국의 정국 상황을 예의주시하고 있다고 밝혔다. 국내에서는 윤 대통령 퇴진을 요구하는 대규모 시위가 확산되고 있으며, 민주노총은 윤 대통령이 사퇴할 때까지 무기한 총파업을 선언했다.'
    },
    {
      title: '향후 전망',
      content: '윤 대통령의 거취는 불확실한 상태다. 야당은 본격적으로 탄핵 절차를 추진하고 있으며, 여당 내부에서도 대통령을 향한 압박이 거세지고 있다. 또한, 이번 사태로 인해 한국 사회의 혼란이 가중될 것으로 보이며, 북한이 이 상황을 이용해 도발할 가능성도 제기되고 있다. 윤 대통령은 계엄령 철회 이후 아직 공식 석상에 모습을 드러내지 않고 있다.'
    }
  ]
};

export default function ArticleDetailPage() {
  const params = useParams()
  const [article, setArticle] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      if (params.id) {
        try {
          // API 호출 시도하되 실패시 더미 데이터 사용
          const fetchedArticle = await getArticleById(params.id as string)
          setArticle(fetchedArticle || dummyArticle)
        } catch (error) {
          console.error('Failed to fetch article:', error)
          // 에러시 더미 데이터 사용
          setArticle(dummyArticle)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchArticle()
  }, [params.id])

  if (loading) {
    return <div className={styles.loading}>로딩 중...</div>
  }

  return (
    <div className={styles.desktop3}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.nexusParent}>
          <Link href="/">
            <svg width="58" height="15" viewBox="0 0 58 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.0814 10.589V0.538086H9.46206V10.589H12.0814Z" fill="#0A0A0A"/>
              <path d="M9.72602 15.2388H12.0814V10.589H9.46206H9.31992L2.39597 0.538086H0V15.2388H2.63963V5.18789H2.76146L9.72602 15.2388Z" fill="#2F89FA"/>
            </svg>
          </Link>
          <div className={styles.searchParent}>
            <div className="material-symbols-rounded" style={{fontSize: '24px', color: '#858585'}}>search</div>
            <div className={styles.div}>검색어를 입력해주세요</div>
          </div>
          <div className={styles.frameParent}>
            <Image className={styles.frameChild} width={40} height={40} sizes="100vw" alt="" src="/Frame 107.png" />
            <Image className={styles.frameChild} width={40} height={40} sizes="100vw" alt="" src="/Frame 112.png" />
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className={styles.desktop3Inner}>
        <div className={styles.frameGroup}>
          {/* 제목과 날짜 */}
          <div className={styles.parent}>
            <div className={styles.div1}>{dummyArticle.title}</div>
            <div className={styles.div2}>
              입력{dummyArticle.publishedAt}  {dummyArticle.publishedTime} 수정{dummyArticle.modifiedAt}  {dummyArticle.modifiedTime}
            </div>
          </div>

          {/* 기자 정보 */}
          <div className={styles.frameContainer}>
            <Image className={styles.frameInner} width={32} height={32} sizes="100vw" alt="" src={dummyArticle.journalist.profileImage} />
            <div className={styles.div3}>{dummyArticle.journalist.name} 기자</div>
          </div>

          {/* 본문 내용 */}
          <div className={styles.frameDiv}>
            {/* 메인 이미지 */}
            <div className={styles.image1Parent}>
              <Image className={styles.image1Icon} width={810} height={405} sizes="100vw" alt="" src={dummyArticle.mainImage.url} />
              <div className={styles.ytnWrapper}>
                <div className={styles.ytn}>{dummyArticle.mainImage.caption}</div>
              </div>
            </div>

            {/* 핵심 요약 */}
            <div className={styles.parent}>
              <div className={styles.div4}>{dummyArticle.summary.title}</div>
              <div className={styles.div5}>
                {dummyArticle.summary.points.map((point, index) => (
                  <p key={index} className={styles.p}>
                    <span>
                      <span>{point}</span>
                    </span>
                  </p>
                ))}
              </div>
            </div>

            {/* 정치적 배경 */}
            <div className={styles.parent}>
              <div className={styles.div4}>{dummyArticle.sections[0].title}</div>
              <div className={styles.div5}>{dummyArticle.sections[0].content}</div>
            </div>

            {/* 더 알아보기 */}
            <div className={styles.frameParent1}>
              <div className={styles.parent1}>
                <div className={styles.div4}>{dummyArticle.sections[1].title}</div>
                <div className={styles.div5}>{dummyArticle.sections[1].content}</div>
              </div>
              {dummyArticle.sections[1].bulletPoints?.map((point, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.div10}>
                    <ul className={styles.ul}>
                      <li>{point}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* 계엄령 선포와 철회 과정 */}
            <div className={styles.parent}>
              <div className={styles.div4}>{dummyArticle.sections[2].title}</div>
              <div className={styles.div5}>{dummyArticle.sections[2].content}</div>
            </div>

            {/* 두 번째 이미지 */}
            <div className={styles.image1Group}>
              <Image className={styles.image1Icon} width={810} height={405} sizes="100vw" alt="" src={dummyArticle.mainImage.url} />
              <div className={styles.ytn1}>{dummyArticle.mainImage.caption}</div>
            </div>

            {/* 국내외 반응 */}
            <div className={styles.parent}>
              <div className={styles.div4}>{dummyArticle.sections[3].title}</div>
              <div className={styles.div5}>{dummyArticle.sections[3].content}</div>
            </div>

            {/* 향후 전망 */}
            <div className={styles.parent}>
              <div className={styles.div4}>{dummyArticle.sections[4].title}</div>
              <div className={styles.div5}>{dummyArticle.sections[4].content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
