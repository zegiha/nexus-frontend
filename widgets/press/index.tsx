'use client'

import {headlineEntity} from '@/entity/headline'
import {pressDetailEntity} from '@/entity/press'
import {Col, Row} from '@/shared/components/atom/flex'
import PressInfo from '@/widgets/press/pressInfoSection/ui/PressInfo'
import PressCategories from '@/widgets/press/headlineSection/ui/PressCategories'
import HeadlinesGrid from '@/widgets/press/headlineSection/ui/HeadlinesGrid'
import {useState} from 'react'
import style from './style.module.css'

interface PressDetailSectionProps {
  pressDetail: pressDetailEntity
  headlines: headlineEntity[]
  onSubscribe: () => void
}

export default function PressDetailSection({ 
  pressDetail, 
  headlines, 
  onSubscribe 
}: PressDetailSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(pressDetail.categories[0])
  
  const filteredHeadlines = headlines.filter(headline => 
    selectedCategory === '주요뉴스' || headline.category === selectedCategory
  )
  
  return (
    <Col gap={24}>
      <PressInfo 
        pressDetail={pressDetail} 
        onSubscribe={onSubscribe} 
      />
      
      <div>
        <PressCategories 
          categories={pressDetail.categories} 
          onSelectCategory={setSelectedCategory} 
        />
      </div>
      
      <HeadlinesGrid headlines={filteredHeadlines} />
    </Col>
  )
}
