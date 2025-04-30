import type { NextPage } from "next";
import Image from "next/image";
import styles from "./NewsBox1.module.css";

const NewsBox1: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <Image
          className={styles.frameChild}
          width={24}
          height={24}
          alt=""
          src="/images/frame-69.png"
        />
        <div className={styles.sbs}>SBS</div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.parent}>
            <div className={styles.div}>
              <p className={styles.p}>[속보]권성동 "野, 韓탄핵 돌입하면</p>
              <p className={styles.p}>정부와 문형배·이미선 후임 협의"`</p>
            </div>
            <div className={styles.div1}>
              국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일
              만료되는 것과 관련 "대통령 권한대행이 후임 헌법재판관을 임명할
              권한이 있다"고 밝혔습니다.
            </div>
          </div>
          <Image
            className={styles.frameItem}
            width={133}
            height={80}
            alt=""
            src="/images/frame-74.png"
          />
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.wrapper}>
            <div className={styles.div2}>
              <p className={styles.p}>
                [속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선
              </p>
              <p className={styles.p}>후임 협의"`</p>
            </div>
          </div>
          <div className={styles.frameInner} />
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.div3}>
                <p className={styles.p}>
                  [속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선
                </p>
                <p className={styles.p}>후임 협의"`</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBox1;
