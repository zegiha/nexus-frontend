import type { NextPage } from 'next';
import { Col, Row, Flex } from '@/shared/components/atom/flex';
import { motionTransition } from '@/shared/design/motion';
import { Divider } from '@/shared/components/atom/divider';
import styles from './notificationPanel.module.css';

interface INotificationPanel {
  isVisible: boolean;
}

const NotificationPanel: NextPage<INotificationPanel> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <Col
      className={styles.frameParent}
      width={'fill'}
      motionProps={{
        initial: { opacity: 0, y: -4 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -4 },
        transition: motionTransition.fast
      }}
    >
      <Col className={styles.parent}>
        <Flex className={styles.div}>언론사</Flex>
        <Col className={styles.frameGroup}>
          {[1, 2, 3].map((_, index) => (
            <Col key={index} className={styles.frameWrapper}>
              <Row className={styles.frameContainer} gap={12}>
                <Flex className={styles.frameChild} />
                <Col className={styles.group} gap={4}>
                  <Flex className={styles.div1}>
                    [속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"
                  </Flex>
                  <Flex className={styles.div2}>
                    국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련 "대통령 권한대행이 후임 헌법재판관을 임명할 권한이 있다"고 밝혔습니다.
                  </Flex>
                </Col>
                <Flex className={styles.frameItem} />
              </Row>
            </Col>
          ))}
        </Col>
      </Col>
      
      <Divider color="alternative" />
      
      <Col className={styles.parent}>
        <Flex className={styles.div}>기자</Flex>
        <Col className={styles.frameGroup}>
          {[1, 2, 3].map((_, index) => (
            <Col key={index} className={styles.frameWrapper}>
              <Row className={styles.frameContainer} gap={12}>
                <Flex className={styles.frameChild} />
                <Col className={styles.group} gap={4}>
                  <Flex className={styles.div1}>
                    [속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"
                  </Flex>
                  <Flex className={styles.div2}>
                    국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련 "대통령 권한대행이 후임 헌법재판관을 임명할 권한이 있다"고 밝혔습니다.
                  </Flex>
                </Col>
                <Flex className={styles.frameItem} />
              </Row>
            </Col>
          ))}
        </Col>
      </Col>
    </Col>
  );
};

export default NotificationPanel;
