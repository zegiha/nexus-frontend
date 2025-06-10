'use client'

import { Row, Col } from '@/shared/components/atom/flex'
import { Typo } from '@/shared/components/atom/typo'
import { Icon } from '@/shared/components/atom/icon'
import { Interaction } from '@/shared/components/atom/interaction'
import styles from './styles.module.css'

interface AccountSidebarProps {
  activeSection: 'account' | 'subscription'
  onSectionChange: (section: 'account' | 'subscription') => void
}

export default function AccountSidebar({ activeSection, onSectionChange }: AccountSidebarProps) {
  return (
    <Col className={styles.sidebar}>
      <Interaction.button
        className={`${styles.sidebarItem} ${activeSection === 'account' ? styles.active : ''}`}
        onClick={() => onSectionChange('account')}
      >
        <Row gap={8} alignItems="center">
          <Icon iconKey="account" />
          <Typo.medium color={activeSection === 'account' ? 'strong' : 'normal'}>
            계정
          </Typo.medium>
        </Row>
      </Interaction.button>
      
      <Interaction.button
        className={`${styles.sidebarItem} ${activeSection === 'subscription' ? styles.active : ''}`}
        onClick={() => onSectionChange('subscription')}
      >
        <Row gap={8} alignItems="center">
          <Icon iconKey="favorite" />
          <Typo.medium color={activeSection === 'subscription' ? 'strong' : 'normal'}>
            구독
          </Typo.medium>
        </Row>
      </Interaction.button>
    </Col>
  )
}
