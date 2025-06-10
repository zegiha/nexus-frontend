'use client'

import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import { Row, Col } from '@/shared/components/atom/flex'
import { Typo } from '@/shared/components/atom/typo'
import { Icon } from '@/shared/components/atom/icon'
import { Interaction } from '@/shared/components/atom/interaction'
import { Button } from '@/shared/components/molecule/button'
import styles from './styles.module.css'

const AccountPage: NextPage = () => {
  const [activeSection, setActiveSection] = useState<'account' | 'subscription'>('account')

  return (
    <div className={styles.desktop10}>
    
      {/* Main Content */}
      <div className={styles.frameGroup}>
        {/* Sidebar */}
        <div className={styles.frameContainer}>
          <Interaction.button
            className={`${styles.accountCircleParent} ${activeSection === 'account' ? styles.active : ''}`}
            onClick={() => setActiveSection('account')}
          >
            <Icon iconKey="account" size={24} />
            <div className={`${styles.div1} ${activeSection === 'account' ? styles.activeText : ''}`}>계정</div>
          </Interaction.button>
          
          <Interaction.button
            className={`${styles.favoriteParent} ${activeSection === 'subscription' ? styles.active : ''}`}
            onClick={() => setActiveSection('subscription')}
          >
            <Icon iconKey="heart" size={24} />
            <div className={`${styles.div} ${activeSection === 'subscription' ? styles.activeText : ''}`}>구독</div>
          </Interaction.button>
        </div>

        {/* Divider */}
        <div className={styles.frameInner} />

        {/* Content Area */}
        <div className={styles.frameDiv}>
          {activeSection === 'account' ? (
            // Account Info Content
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
              
              <div className={styles.parent1}>
                <div className={styles.div3}>계정 삭제</div>
                <div className={styles.parent2}>
                  <div className={styles.div}>
                    <p className={styles.p}>계정 삭제 시 이전 정보는 바로 삭제됩니다</p>
                    <p className={styles.p}>신중히 선택해주세요</p>
                  </div>
                  <div className={styles.wrapper1}>
                    <div className={styles.div}>삭제하기</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Subscription Content
            <>
              <div className={styles.parent}>
                <div className={styles.div3}>언론사</div>
                <div className={styles.frameParent1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <Image 
                        className={styles.frameIcon} 
                        width={32} 
                        height={32} 
                        sizes="100vw" 
                        alt="" 
                        src="/Frame 146.png"
                      />
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
                      <Image 
                        className={styles.frameIcon} 
                        width={32} 
                        height={32} 
                        sizes="100vw" 
                        alt="" 
                        src="/Frame 146.png"
                      />
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
                      <Image 
                        className={styles.frameIcon} 
                        width={32} 
                        height={32} 
                        sizes="100vw" 
                        alt="" 
                        src="/Frame 146.png"
                      />
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
                      <Image 
                        className={styles.frameIcon} 
                        width={32} 
                        height={32} 
                        sizes="100vw" 
                        alt="" 
                        src="/Frame 146.png"
                      />
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
