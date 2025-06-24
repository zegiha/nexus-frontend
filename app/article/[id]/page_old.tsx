'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getArticleById } from '@/entity/article/api/getArticles'
import { articleEntity } from '@/entity/article'
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
              imgUrl: 'https://i.pinimg.com/736x/66/7d/c0/667dc0938dc7c1d22e56f0bbd1d04357.jpg'
            },
            img: {
              url: 'https://i.pinimg.com/736x/61/6b/07/616b0725c22d2103ff02f0682f4ea493.jpg',
              alt: '윤석열 대통령이 계엄을 선포하고 있다. 사진:YTN뉴스'
            },
            createdAt: new Date('2025-04-01T13:45:00')
          })
        } finally {
          setLoading(false)
        }
      }
    }

    fetchArticle()
  }, [params.id])

  if (loading) {
    return (
      <div className={styles.desktop3}>
        <div className={styles.header}>
          <div className={styles.nexusParent}>
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="59" height="16" viewBox="0 0 59 16" fill="none">
                <path d="M55.4651 7.36043C55.3027 6.52793 54.6123 6.00001 53.5159 6.00001C52.3991 6.00001 51.5869 6.54823 51.6072 7.29951C51.5869 7.86805 52.0539 8.29445 53.1707 8.55841L55.0387 8.94421C57.1301 9.41122 58.1251 10.3655 58.1454 11.9493C58.1251 14.0204 56.3179 15.4621 53.4346 15.4621C50.6326 15.4621 48.9676 14.2032 48.7036 12.0915H51.3432C51.5057 13.0255 52.2367 13.4925 53.4346 13.4925C54.6732 13.4925 55.5057 12.9849 55.5057 12.1727C55.5057 11.5432 54.9981 11.1371 53.9017 10.8935L52.1351 10.5077C50.0843 10.1016 49.0285 9.02543 49.0285 7.44165C49.0285 5.41116 50.7747 4.07104 53.4753 4.07104C56.1149 4.07104 57.7393 5.35025 57.922 7.36043H55.4651Z" fill="#0A0A0A"/>
                <path d="M44.2384 10.6094V4.21338H46.8171V15.2389H44.3196V13.2896H44.1978C43.6902 14.5079 42.5328 15.381 40.8881 15.381C38.7155 15.381 37.2129 13.8785 37.1926 11.2389V4.21338H39.7916V10.8328C39.7916 12.2338 40.6241 13.1272 41.883 13.1272C43.0201 13.1272 44.2384 12.2947 44.2384 10.6094Z" fill="#0A0A0A"/>
                <path d="M28.1996 4.21338L30.4331 8.29465L32.7072 4.21338H35.4484L32.1184 9.71599L35.5093 15.2389H32.7885L30.4331 11.2592L28.1387 15.2389H25.3772L28.7478 9.71599L25.4584 4.21338H28.1996Z" fill="#0A0A0A"/>
                <path d="M19.4906 15.4621C16.1606 15.4621 14.1301 13.2488 14.1301 9.79701C14.1301 6.3858 16.2012 4.07104 19.3485 4.07104C22.049 4.07104 24.3841 5.75635 24.3841 9.63457V10.4468H16.6885C16.719 12.325 17.8256 13.4316 19.5109 13.4316C20.648 13.4316 21.4196 12.9443 21.7444 12.2945H24.2825C23.8155 14.2032 22.049 15.4621 19.4906 15.4621ZM16.7088 8.68024H21.9069C21.8866 7.17769 20.8916 6.08123 19.3891 6.08123C17.8256 6.08123 16.7901 7.26906 16.7088 8.68024Z" fill="#0A0A0A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.0814 10.589V0.538086H9.46206V10.589H12.0814Z" fill="#0A0A0A"/>
                <path d="M9.72602 15.2388H12.0814V10.589H9.46206H9.31992L2.39597 0.538086H0V15.2388H2.63963V5.18789H2.76146L9.72602 15.2388Z" fill="#2F89FA"/>
              </svg>
            </Link>
            <div className={styles.searchParent}>
              <div className="material-symbols-rounded" style={{fontSize: '24px', color: '#858585'}}>search</div>
              <div className={styles.div}>검색어를 입력해주세요</div>
            </div>
            <div className={styles.frameParent}>
              <button className="material-symbols-rounded" style={{fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer'}}>notifications</button>
              <button className="material-symbols-rounded" style={{fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer'}}>account_circle</button>
            </div>
          </div>
        </div>
        <div className={styles.desktop3Inner}>
          <div className={styles.frameGroup}>
            <div style={{padding: '40px', textAlign: 'center'}}>
              <div>로딩 중...</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className={styles.desktop3}>
        <div className={styles.header}>
          <div className={styles.nexusParent}>
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="59" height="16" viewBox="0 0 59 16" fill="none">
                <path d="M55.4651 7.36043C55.3027 6.52793 54.6123 6.00001 53.5159 6.00001C52.3991 6.00001 51.5869 6.54823 51.6072 7.29951C51.5869 7.86805 52.0539 8.29445 53.1707 8.55841L55.0387 8.94421C57.1301 9.41122 58.1251 10.3655 58.1454 11.9493C58.1251 14.0204 56.3179 15.4621 53.4346 15.4621C50.6326 15.4621 48.9676 14.2032 48.7036 12.0915H51.3432C51.5057 13.0255 52.2367 13.4925 53.4346 13.4925C54.6732 13.4925 55.5057 12.9849 55.5057 12.1727C55.5057 11.5432 54.9981 11.1371 53.9017 10.8935L52.1351 10.5077C50.0843 10.1016 49.0285 9.02543 49.0285 7.44165C49.0285 5.41116 50.7747 4.07104 53.4753 4.07104C56.1149 4.07104 57.7393 5.35025 57.922 7.36043H55.4651Z" fill="#0A0A0A"/>
                <path d="M44.2384 10.6094V4.21338H46.8171V15.2389H44.3196V13.2896H44.1978C43.6902 14.5079 42.5328 15.381 40.8881 15.381C38.7155 15.381 37.2129 13.8785 37.1926 11.2389V4.21338H39.7916V10.8328C39.7916 12.2338 40.6241 13.1272 41.883 13.1272C43.0201 13.1272 44.2384 12.2947 44.2384 10.6094Z" fill="#0A0A0A"/>
                <path d="M28.1996 4.21338L30.4331 8.29465L32.7072 4.21338H35.4484L32.1184 9.71599L35.5093 15.2389H32.7885L30.4331 11.2592L28.1387 15.2389H25.3772L28.7478 9.71599L25.4584 4.21338H28.1996Z" fill="#0A0A0A"/>
                <path d="M19.4906 15.4621C16.1606 15.4621 14.1301 13.2488 14.1301 9.79701C14.1301 6.3858 16.2012 4.07104 19.3485 4.07104C22.049 4.07104 24.3841 5.75635 24.3841 9.63457V10.4468H16.6885C16.719 12.325 17.8256 13.4316 19.5109 13.4316C20.648 13.4316 21.4196 12.9443 21.7444 12.2945H24.2825C23.8155 14.2032 22.049 15.4621 19.4906 15.4621ZM16.7088 8.68024H21.9069C21.8866 7.17769 20.8916 6.08123 19.3891 6.08123C17.8256 6.08123 16.7901 7.26906 16.7088 8.68024Z" fill="#0A0A0A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.0814 10.589V0.538086H9.46206V10.589H12.0814Z" fill="#0A0A0A"/>
                <path d="M9.72602 15.2388H12.0814V10.589H9.46206H9.31992L2.39597 0.538086H0V15.2388H2.63963V5.18789H2.76146L9.72602 15.2388Z" fill="#2F89FA"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className={styles.desktop3Inner}>
          <div className={styles.frameGroup}>
            <div style={{padding: '40px', textAlign: 'center'}}>
              <div>기사를 찾을 수 없습니다.</div>
              <Link href="/" style={{marginTop: '20px', display: 'inline-block', color: '#2e86f5'}}>
                홈으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const formatDate = (date: Date) => {
    return `입력${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}.  오후 ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
  }

  return (
    <div className={styles.desktop3}>
      <div className={styles.header}>
        <div className={styles.nexusParent}>
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="16" viewBox="0 0 59 16" fill="none">
              <path d="M55.4651 7.36043C55.3027 6.52793 54.6123 6.00001 53.5159 6.00001C52.3991 6.00001 51.5869 6.54823 51.6072 7.29951C51.5869 7.86805 52.0539 8.29445 53.1707 8.55841L55.0387 8.94421C57.1301 9.41122 58.1251 10.3655 58.1454 11.9493C58.1251 14.0204 56.3179 15.4621 53.4346 15.4621C50.6326 15.4621 48.9676 14.2032 48.7036 12.0915H51.3432C51.5057 13.0255 52.2367 13.4925 53.4346 13.4925C54.6732 13.4925 55.5057 12.9849 55.5057 12.1727C55.5057 11.5432 54.9981 11.1371 53.9017 10.8935L52.1351 10.5077C50.0843 10.1016 49.0285 9.02543 49.0285 7.44165C49.0285 5.41116 50.7747 4.07104 53.4753 4.07104C56.1149 4.07104 57.7393 5.35025 57.922 7.36043H55.4651Z" fill="#0A0A0A"/>
              <path d="M44.2384 10.6094V4.21338H46.8171V15.2389H44.3196V13.2896H44.1978C43.6902 14.5079 42.5328 15.381 40.8881 15.381C38.7155 15.381 37.2129 13.8785 37.1926 11.2389V4.21338H39.7916V10.8328C39.7916 12.2338 40.6241 13.1272 41.883 13.1272C43.0201 13.1272 44.2384 12.2947 44.2384 10.6094Z" fill="#0A0A0A"/>
              <path d="M28.1996 4.21338L30.4331 8.29465L32.7072 4.21338H35.4484L32.1184 9.71599L35.5093 15.2389H32.7885L30.4331 11.2592L28.1387 15.2389H25.3772L28.7478 9.71599L25.4584 4.21338H28.1996Z" fill="#0A0A0A"/>
              <path d="M19.4906 15.4621C16.1606 15.4621 14.1301 13.2488 14.1301 9.79701C14.1301 6.3858 16.2012 4.07104 19.3485 4.07104C22.049 4.07104 24.3841 5.75635 24.3841 9.63457V10.4468H16.6885C16.719 12.325 17.8256 13.4316 19.5109 13.4316C20.648 13.4316 21.4196 12.9443 21.7444 12.2945H24.2825C23.8155 14.2032 22.049 15.4621 19.4906 15.4621ZM16.7088 8.68024H21.9069C21.8866 7.17769 20.8916 6.08123 19.3891 6.08123C17.8256 6.08123 16.7901 7.26906 16.7088 8.68024Z" fill="#0A0A0A"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12.0814 10.589V0.538086H9.46206V10.589H12.0814Z" fill="#0A0A0A"/>
              <path d="M9.72602 15.2388H12.0814V10.589H9.46206H9.31992L2.39597 0.538086H0V15.2388H2.63963V5.18789H2.76146L9.72602 15.2388Z" fill="#2F89FA"/>
            </svg>
          </Link>
          <div className={styles.searchParent}>
            <div className="material-symbols-rounded" style={{fontSize: '24px', color: '#858585'}}>search</div>
            <div className={styles.div}>검색어를 입력해주세요</div>
          </div>
          <div className={styles.frameParent}>
            <button className="material-symbols-rounded" style={{fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer'}}>notifications</button>
            <button className="material-symbols-rounded" style={{fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer'}}>account_circle</button>
          </div>
        </div>
      </div>
      <div className={styles.desktop3Inner}>
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <div className={styles.div1}>{article.title}</div>
            <div className={styles.div2}>{formatDate(article.createdAt)} 수정{formatDate(article.createdAt)}</div>
          </div>
          <div className={styles.frameContainer}>
            <Image 
              className={styles.frameInner} 
              width={32} 
              height={32} 
              sizes="100vw" 
              alt="" 
              src={article.press.imgUrl}
            />
            <div className={styles.div3}>김도형 기자</div>
          </div>
          <div className={styles.frameDiv}>
            {article.img && (
              <div className={styles.image1Parent}>
                <Image 
                  className={styles.image1Icon} 
                  width={810} 
                  height={405} 
                  sizes="100vw" 
                  alt="" 
                  src={article.img.url}
                />
                <div className={styles.ytnWrapper}>
                  <div className={styles.ytn}>{article.img.alt}</div>
                </div>
              </div>
            )}
            <div className={styles.parent}>
              <div className={styles.div4}>핵심 요약</div>
              <div className={styles.div5}>
                <p className={styles.p}>
                  <span>
                    <span>{article.contents}</span>
                  </span>
                </p>
                <p className={styles.p}>
                  <span>
                    <span>4월 총선에서 패배한 이후 정치적 압박이 거세지던 상황에서 </span>
                    <span className={styles.span}>극단적인 처리</span>
                    <span>를 단행했지만, 국회와 시민들의 강한 반발을 불러왔다.</span>
                  </span>
                </p>
                <p className={styles.p}>
                  <span>
                    <span>국회는 긴급히 소집되어 계엄 해제 요구안을 통과시켰고, 여당에서도 대통령의 탈당을 요구하는 목소리가 나왔다.</span>
                  </span>
                </p>
                <p className={styles.p}>
                  <span>
                    <span>야당은 탄핵을 추진하고 있으며, 대통령실 보좌진도 전원 사임을 발표했다.</span>
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div4}>정치적 배경</div>
              <div className={styles.div5}>윤석열 대통령은 2022년 대선에서 근소한 차이로 승리하며 집권했다. 반페미니즘 공약과 강경한 외교 정책으로 지지층을 형성했으나, 2024년 4월 총선에서 야당이 압승하며 국정 운영이 어려워졌다. 총선 패배 이후 거부권을 반복적으로 행사하며 정국 운영에 대한 비판이 커졌고, 지지율도 17%까지 하락했다. 최근에는 영부인 김건희의 디올 핸드백 수수 및 주가 조작 의혹이 불거지며 논란이 더욱 커졌다.</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.parent1}>
                <div className={styles.div4}>더 알아보기</div>
                <div className={styles.div5}>윤석열 대통령은 2022년 대선에서 근소한 차이로 승리하며 집권했다. 반페미니즘 공약과 강경한 외교 정책으로 지지층을 형성했으나, 2024년 4월 총선에서 야당이 압승하며 국정 운영이 어려워졌다. 총선 패배 이후 거부권을 반복적으로 행사하며 정국 운영에 대한 비판이 커졌고, 지지율도 17%까지 하락했다. 최근에는 영부인 김건희의 디올 핸드백 수수 및 주가 조작 의혹이 불거지며 논란이 더욱 커졌다.</div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div10}>
                  <ul className={styles.ul}>
                    <li>윤석열 대통령은 2022년 대선에서 근소한 차이로 승리하며 집권했다. 반페미니즘 공약과 강경한 외교 정책으로 지지층을 형성했으나, 2024년 4월 총선에서 야당이 압승하며 국정 운영이 어려워졌다. 총선 패배 이후 거부권을 반복적으로 행사하며 정국 운영에 대한 비판이 커졌고, 지지율도 17%까지 하락했다. 최근에는 영부인 김건희의 디올 핸드백 수수 및 주가 조작 의혹이 불거지며 논란이 더욱 커졌다.</li>
                  </ul>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div10}>
                  <ul className={styles.ul}>
                    <li>윤석열 대통령은 2022년 대선에서 근소한 차이로 승리하며 집권했다. 반페미니즘 공약과 강경한 외교 정책으로 지지층을 형성했으나, 2024년 4월 총선에서 야당이 압승하며 국정 운영이 어려워졌다. 총선 패배 이후 거부권을 반복적으로 행사하며 정국 운영에 대한 비판이 커졌고, 지지율도 17%까지 하락했다. 최근에는 영부인 김건희의 디올 핸드백 수수 및 주가 조작 의혹이 불거지며 논란이 더욱 커졌다.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div4}>계엄령 선포와 철회 과정</div>
              <div className={styles.div5}>윤 대통령은 계엄령 선포 당시 "북한 공산 세력의 위협"을 이유로 들었지만, 이를 국내 정치 위기에서 벗어나기 위한 조치로 보는 시각이 우세하다. 계엄령 선포 후 국회는 긴급 소집되어 계엄 해제 요구 결의안을 통과시켰고, 국회 밖에서는 시민 수천 명이 모여 강하게 반발했다. 결국 몇 시간 만에 윤 대통령이 계엄령 해제를 발표했으나, 정치적 후폭풍은 더욱 거세지고 있다.</div>
            </div>
            {article.img && (
              <div className={styles.image1Group}>
                <Image 
                  className={styles.image1Icon} 
                  width={810} 
                  height={405} 
                  sizes="100vw" 
                  alt="" 
                  src={article.img.url}
                />
                <div className={styles.ytn1}>{article.img.alt}</div>
              </div>
            )}
            <div className={styles.parent}>
              <div className={styles.div4}>국내외 반응</div>
              <div className={styles.div5}>윤 대통령의 돌발적인 계엄령 선포는 국내외에서 큰 반향을 불러일으켰다. 미국은 윤 대통령의 조치에 당혹스럽다는 반응을 보이며 "한국이 법치에 따라 이번 사태를 해결하길 바란다"고 밝혔다. 일본 정부도 "예외적이고 심각한 우려"를 표명하며 한국의 정국 상황을 예의주시하고 있다고 밝혔다. 국내에서는 윤 대통령 퇴진을 요구하는 대규모 시위가 확산되고 있으며, 민주노총은 윤 대통령이 사퇴할 때까지 무기한 총파업을 선언했다.</div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div4}>향후 전망</div>
              <div className={styles.div5}>윤 대통령의 거취는 불확실한 상태다. 야당은 본격적으로 탄핵 절차를 추진하고 있으며, 여당 내부에서도 대통령을 향한 압박이 거세지고 있다. 또한, 이번 사태로 인해 한국 사회의 혼란이 가중될 것으로 보이며, 북한이 이 상황을 이용해 도발할 가능성도 제기되고 있다. 윤 대통령은 계엄령 철회 이후 아직 공식 석상에 모습을 드러내지 않고 있다.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
