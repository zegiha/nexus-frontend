import type { NextPage } from 'next';
import { Col, Row, Flex } from '@/shared/components/atom/flex';
import { motionTransition } from '@/shared/design/motion';
import { Divider } from '@/shared/components/atom/divider';
import { useRouter } from 'next/navigation';
import styles from './notificationPanel.module.css';

interface INotificationPanel {
  isVisible: boolean;
}

// 더미 알림 데이터
const dummyPressNotifications = [
  {
    id: 1,
    title: '[속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"',
    content: '국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련...',
    pressName: 'SBS',
    time: '10분 전',
    imageUrl: '/Frame 146.png'
  },
  {
    id: 2,
    title: '[속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"',
    content: '국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련...',
    pressName: 'KBS',
    time: '25분 전',
    imageUrl: '/Frame 146.png'
  },
  {
    id: 3,
    title: '[속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"',
    content: '국민의힘은 31일 문형배·이미선 헌법재판관의 임기가 오는 4월18일 만료되는 것과 관련...',
    pressName: 'MBC',
    time: '1시간 전',
    imageUrl: '/Frame 146.png'
  }
];

const dummyJournalistNotifications = [
  {
    id: 1,
    title: '[속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"',
    content: '국민의힘은 31일 문형배·이미선 헌법재판관의 임기가...',
    journalistName: '김민재',
    time: '5분 전',
    imageUrl: '/Frame 146.png'
  },
  {
    id: 2,
    title: '[속보]권성동 "野, 韓탄핵 돌입하면 정부와 문형배·이미선 후임 협의"',
    content: '국민의힘은 31일 문형배·이미선 헌법재판관의 임기가...',
    journalistName: '이정민',
    time: '30분 전',
    imageUrl: '/Frame 146.png'
  }
];

const NotificationPanel: NextPage<INotificationPanel> = ({ isVisible }) => {
  const router = useRouter();
  
  if (!isVisible) return null;

  const handleNotificationClick = (id: number) => {
    // 더미 뉴스 ID로 이동
    router.push(`/article/${id}`);
  };

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
          {dummyPressNotifications.map((notification) => (
            <Col 
              key={notification.id} 
              className={styles.frameWrapper}
              onClick={() => handleNotificationClick(notification.id)}
            >
              <Row className={styles.frameContainer} gap={12}>
                <Flex className={styles.frameChild} />
                <Col className={styles.group} gap={4}>
                  <Flex className={styles.div1}>
                    {notification.title}
                  </Flex>
                  <Flex className={styles.div2}>
                    {notification.content}
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
          {dummyJournalistNotifications.map((notification) => (
            <Col 
              key={notification.id} 
              className={styles.frameWrapper}
              onClick={() => handleNotificationClick(notification.id)}
            >
              <Row className={styles.frameContainer} gap={12}>
                <Flex className={styles.frameChild} />
                <Col className={styles.group} gap={4}>
                  <Flex className={styles.div1}>
                    {notification.title}
                  </Flex>
                  <Flex className={styles.div2}>
                    {notification.content}
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
