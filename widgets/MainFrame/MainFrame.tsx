import type { NextPage } from 'next';
import Image from "next/image";
import styles from './MainFrame.module.css';

const Frame: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.parent}>
        <div className={styles.div}>카테고리별 오늘의 헤드라인</div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.wrapper}>
              <div className={styles.sbs}>정치</div>
            </div>
            <div className={styles.group}>
              <div className={styles.div2}>尹대통령 '운명의 날'…헌재 탄핵심판 4일 오전 11시 선고(종합)</div>
              <div className={styles.div3}>
                <p className={styles.p}>11회 변론·16명 증인신문…38일 '대통령사건 최장' 평의 끝에 결론</p>
                <p className={styles.p}>현 8명 중 재판관 6인 이상 찬성시 尹대통령 파면…미달시 직무복귀</p>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <Image className={styles.frameChild} width={32} height={32} alt="" src="/images/frame-24.png" />
              <div className={styles.sbs}>SBS</div>
            </div>
            <div className={styles.frameParent1}>
              <Image className={styles.frameItem} width={778} height={451} alt="" src="/images/frame-14.png" />
              <div className={styles.sbsWrapper}>
                <div className={styles.sbs1}>윤석열 대통령이 재판을 받고 있다. 사진 : SBS</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <Image className={styles.frameInner} width={32} height={32} alt="" src="/images/arrow-back-ios-new.svg" />
            <Image className={styles.frameIcon} width={32} height={32} alt="" src="/images/arrow-forward-ios.svg" />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.div}>전체 인기 뉴스 모아보기</div>
        <div className={styles.frameParent3}>
          <div className={styles.frameParent4}>
            <div className={styles.parent1}>
              <div className={styles.div5}>
                <p className={styles.p}>[속보]권성동 "野, 韓탄핵 돌입하면</p>
                <p className={styles.p}>정부와 문형배·이미선 후임 협의"</p>
              </div>
              <div className={styles.div6}>국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련 "대통령 권한대행이 후임 헌법재판관을 임명할 권한이 있다"고 밝혔습니다.</div>
              <div className={styles.frameParent5}>
                <Image className={styles.frameChild1} width={24} height={24} alt="" src="/images/frame-24.png" />
                <div className={styles.sbs2}>SBS</div>
              </div>
            </div>
            <Image className={styles.frameChild2} width={150} height={100} alt="" src="/images/frame-18.png" />
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.parent1}>
              <div className={styles.div5}>
                <p className={styles.p}>[속보]권성동 "野, 韓탄핵 돌입하면</p>
                <p className={styles.p}>정부와 문형배·이미선 후임 협의"</p>
              </div>
              <div className={styles.div6}>국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련 "대통령 권한대행이 후임 헌법재판관을 임명할 권한이 있다"고 밝혔습니다.</div>
              <div className={styles.frameParent5}>
                <Image className={styles.frameChild1} width={24} height={24} alt="" src="/images/frame-24.png" />
                <div className={styles.sbs2}>SBS</div>
              </div>
            </div>
            <Image className={styles.frameChild2} width={150} height={100} alt="" src="/images/frame-18.png" />
          </div>
          <div className={styles.frameParent8}>
            <div className={styles.parent1}>
              <div className={styles.div5}>
                <p className={styles.p}>[속보]권성동 "野, 韓탄핵 돌입하면</p>
                <p className={styles.p}>정부와 문형배·이미선 후임 협의"</p>
              </div>
              <div className={styles.div6}>국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련 "대통령 권한대행이 후임 헌법재판관을 임명할 권한이 있다"고 밝혔습니다.</div>
              <div className={styles.frameParent5}>
                <Image className={styles.frameChild1} width={24} height={24} alt="" src="/images/frame-24.png" />
                <div className={styles.sbs2}>SBS</div>
              </div>
            </div>
            <Image className={styles.frameChild2} width={150} height={100} alt="" src="/images/frame-18.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
