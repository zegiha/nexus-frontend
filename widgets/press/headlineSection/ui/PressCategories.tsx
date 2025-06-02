'use client'

import {Col, Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import Image from 'next/image'
import {useState} from 'react'
import style from './style.module.css'
import { RoundButton } from '@/shared/components/molecule/button'

interface PressCategoriesProps {
  categories: string[]
  onSelectCategoryAction: (category: string) => void
}

export default function PressCategories({ categories, onSelectCategoryAction }: PressCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  
  const handleSelectCategory = (category: string) => {
    setActiveCategory(category)
    onSelectCategoryAction(category)
  }
  
  return (
    <Row className={style.categotyTabs}>
            {categories.map((category, index) => (
        // <div 
        //   key={index} 
        //   className={`${style.categoryTab} ${category === activeCategory ? style.activeTab : style.normalTab}`}
        //   onClick={() => handleSelectCategory(category)}
        // >
        //   <Typo.medium>
        //     {category}
        //   </Typo.medium>
        // </div>
        <RoundButton.translucent
          key={index}
          size='small'
          onClick={() => handleSelectCategory(category)}
        >
          {category}
        </RoundButton.translucent>
      ))}
    </Row>
  )
}
