import type { NextPage } from "next";
import Image from "next/image";
import styles from "./NewsBox2.module.css";

const NewsBox2: NextPage = () => {
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
          <div className={styles.frameParent1}>
            <Image
              className={styles.frameItem}
              width={197}
              height={197}
              alt=""
              src="/images/frame-87.png"
            />
            <div className={styles.div}>
              <p className={styles.p}>
                [속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선
              </p>
              <p className={styles.p}>후임 협의"`</p>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <Image
              className={styles.frameItem}
              width={197}
              height={197}
              alt=""
              src="/images/frame-87.png"
            />
            <div className={styles.div}>
              <p className={styles.p}>
                [속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선
              </p>
              <p className={styles.p}>후임 협의"`</p>
            </div>
          </div>
          <Image
            className={styles.frameIcon}
            width={32}
            height={32}
            alt=""
            src="/images/arrow-back-ios-new.svg"
          />
          <Image
            className={styles.frameChild1}
            width={32}
            height={32}
            alt=""
            src="/images/arrow-forward-ios.svg"
          />
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.wrapper}>
            <div className={styles.div2}>
              <p className={styles.p}>
                [속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선
              </p>
              <p className={styles.p}>후임 협의"`</p>
            </div>
          </div>
          <div className={styles.frameChild2} />
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

export default NewsBox2;
