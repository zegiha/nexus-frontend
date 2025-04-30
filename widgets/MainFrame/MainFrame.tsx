import type { NextPage } from "next";
import Image from "next/image";
import styles from "./MainFrame.module.css";

// 뉴스 아이템 타입 정의
interface NewsItem {
  id: number;
  title: string;
  content: string;
  source: string;
  imageUrl: string;
}

const Frame: NextPage = () => {
  // 인기 뉴스 데이터
  const popularNews: NewsItem[] = [
    {
      id: 1,
      title:
        '[속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"',
      content:
        '국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련 "대통령 권한대행이 후임 헌법재판관을 임명할 권한이 있다"고 밝혔습니다.',
      source: "SBS",
      imageUrl: "/images/frame-18.png",
    },
    {
      id: 2,
      title:
        '[속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"',
      content:
        '국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련 "대통령 권한대행이 후임 헌법재판관을 임명할 권한이 있다"고 밝혔습니다.',
      source: "SBS",
      imageUrl: "/images/frame-18.png",
    },
    {
      id: 3,
      title:
        '[속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"',
      content:
        '국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련 "대통령 권한대행이 후임 헌법재판관을 임명할 권한이 있다"고 밝혔습니다.',
      source: "SBS",
      imageUrl: "/images/frame-18.png",
    },
    {
      id: 4,
      title:
        '[속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"',
      content:
        '국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련 "대통령 권한대행이 후임 헌법재판관을 임명할 권한이 있다"고 밝혔습니다.',
      source: "SBS",
      imageUrl: "/images/frame-18.png",
    },
    {
      id: 5,
      title:
        '[속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"',
      content:
        '국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련 "대통령 권한대행이 후임 헌법재판관을 임명할 권한이 있다"고 밝혔습니다.',
      source: "SBS",
      imageUrl: "/images/frame-18.png",
    },
  ];

  // 단일 뉴스 아이템 렌더링 함수
  const renderNewsItem = (news: NewsItem, index: number) => {
    const cardClassName =
      index === 0
        ? styles.popularNewsCardFeatured
        : index === 1
        ? styles.popularNewsCard
        : styles.popularNewsCardRegular;

    return (
      <div key={news.id} className={cardClassName}>
        <div className={styles.newsCardTextContent}>
          <div className={styles.newsCardTitle}>
            <p className={styles.p}>
              {news.title.split(" ").slice(0, 5).join(" ")}
            </p>
            <p className={styles.p}>
              {news.title.split(" ").slice(5).join(" ")}
            </p>
          </div>
          <div className={styles.newsCardContent}>{news.content}</div>
          <div className={styles.newsCardSourceContainer}>
            <Image
              className={styles.newsCardSourceIcon}
              width={24}
              height={24}
              alt=""
              src="/images/frame-24.png"
            />
            <div className={styles.newsCardSourceName}>{news.source}</div>
          </div>
        </div>
        <Image
          className={styles.newsCardThumbnail}
          width={150}
          height={100}
          alt=""
          src={news.imageUrl}
        />
      </div>
    );
  };

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.categoryTitle}>카테고리별 오늘의 헤드라인</div>
          <div className={styles.mainNewsSection}>
            <div className={styles.mainNewsCard}>
              <div className={styles.categoryTag}>
                <div className={styles.sourceName}>정치</div>
              </div>
              <div className={styles.headlineContainer}>
                <div className={styles.newsHeadline}>
                  尹대통령 '운명의 날'…헌재 탄핵심판 4일 오전 11시 선고(종합)
                </div>
                <div className={styles.newsContent}>
                  <p className={styles.p}>
                    11회 변론·16명 증인신문…38일 '대통령사건 최장' 평의 끝에
                    결론
                  </p>
                  <p className={styles.p}>
                    현 8명 중 재판관 6인 이상 찬성시 尹대통령 파면…미달시
                    직무복귀
                  </p>
                </div>
              </div>
              <div className={styles.sourceContainer}>
                <Image
                  className={styles.sourceIcon}
                  width={32}
                  height={32}
                  alt=""
                  src="/images/frame-24.png"
                />
                <div className={styles.sourceName}>SBS</div>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.mainNewsImage}
                  width={778}
                  height={451}
                  alt=""
                  src="/images/frame-14.png"
                />
                <div className={styles.captionWrapper}>
                  <div className={styles.imageCaption}>
                    윤석열 대통령이 재판을 받고 있다. 사진 : SBS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.categoryTitle}>전체 인기 뉴스 모아보기</div>
          <div className={styles.popularNewsContainer}>
            {popularNews.map((news, index) => renderNewsItem(news, index))}
          </div>
        </div>
      </div>
      <div className={styles.navigationButtons}>
        <Image
          className={styles.navButtonPrev}
          width={32}
          height={32}
          alt=""
          src="/images/arrow-back-ios-new.svg"
        />
        <Image
          className={styles.navButtonNext}
          width={32}
          height={32}
          alt=""
          src="/images/arrow-forward-ios.svg"
        />
      </div>
    </div>
  );
};

export default Frame;
