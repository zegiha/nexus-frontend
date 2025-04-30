import type { NextPage } from "next";
import styles from "./TagFrame.module.css";

const TagFrame: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.wrapper}>
          <div className={styles.div}>언론사별</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>정치</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>경제</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>엔터</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>스포츠</div>
        </div>
        <div className={styles.wrapper2}>
          <div className={styles.div}>생활/문화</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>IT/과학</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>세계</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>랭킹</div>
        </div>
      </div>
    </div>
  );
};

export default TagFrame;
