'use client'

import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

const AccountPage: NextPage = () => {
  const [activeSection, setActiveSection] = useState<'account' | 'subscription'>('account')

  const handleDeleteAccount = () => {
    if (confirm('정말로 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
      // 계정 삭제 로직
      alert('계정이 삭제되었습니다.')
    }
  }

  return (
    <div className={styles.desktop10}>
      {/* Main Content */}
      <div className={styles.frameGroup}>
        {/* Sidebar */}
        <div className={styles.frameContainer}>
          <div 
            className={`${styles.accountCircleParent} ${activeSection === 'account' ? styles.active : ''}`}
            onClick={() => setActiveSection('account')}
          >
            <Image className={styles.searchIcon} width={24} height={24} alt="account" src="/account_circle.svg" />
            <div className={styles.div1}>계정</div>
          </div>
          
          <div 
            className={`${styles.favoriteParent} ${activeSection === 'subscription' ? styles.active : ''}`}
            onClick={() => setActiveSection('subscription')}
          >
            <Image className={styles.searchIcon} width={24} height={24} alt="favorite" src="/favorite.svg" />
            <div className={styles.div}>구독</div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.frameInner} />

        {/* Content Area */}
        <div className={styles.frameDiv}>
          {activeSection === 'account' ? (
            // Account Info Content
            <>
              <div className={styles.parent}>
                <div className={styles.div3}>계정 정보</div>
                <div className={styles.frameParent1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.group}>
                      <div className={styles.div4}>이메일</div>
                      <div className={styles.iammusicplayboicarti}>iam!music@playboi.carti</div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>변경하기</div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.container}>
                      <div className={styles.div4}>비밀번호</div>
                      <div className={styles.div7}>비밀번호 보기</div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>변경하기</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parent1}>
                <div className={styles.div3}>계정 삭제</div>
                <div className={styles.parent2}>
                  <div className={styles.div}>
                    <p className={styles.p}>계정 삭제 시 이전 정보는 바로 삭제됩니다</p>
                    <p className={styles.p}>신중히 선택해주세요</p>
                  </div>
                  <div className={styles.wrapper1} onClick={handleDeleteAccount}>
                    <div className={styles.div}>삭제하기</div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Subscription Content
            <>
              <div className={styles.parent}>
                <div className={styles.div3}>언론사</div>
                <div className={styles.frameParent1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <Image className={styles.frameIcon} width={32} height={32} alt="SBS" src="/Frame 146.png" />
                      <div className={styles.div}>SBS</div>
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.wrapper}>
                        <div className={styles.div}>알림 해제</div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.div}>구독 해제</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <Image className={styles.frameIcon} width={32} height={32} alt="SBS" src="/Frame 146.png" />
                      <div className={styles.div}>SBS</div>
                    </div>
                    <div className={styles.frameParent7}>
                      <div className={styles.frame}>
                        <div className={styles.div}>알림 설정</div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.div}>구독 해제</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div3}>기자</div>
                <div className={styles.frameParent1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <Image className={styles.frameIcon} width={32} height={32} alt="김민재" src="/Frame 146.png" />
                      <div className={styles.div}>김민재</div>
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.wrapper}>
                        <div className={styles.div}>알림 해제</div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.div}>구독 해제</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <Image className={styles.frameIcon} width={32} height={32} alt="김민재" src="/Frame 146.png" />
                      <div className={styles.div}>김민재</div>
                    </div>
                    <div className={styles.frameParent7}>
                      <div className={styles.frame}>
                        <div className={styles.div}>알림 설정</div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.div}>구독 해제</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccountPage
