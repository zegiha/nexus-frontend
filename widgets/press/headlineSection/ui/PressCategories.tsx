'use client'

import {Col, Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import Image from 'next/image'
import {useState} from 'react'
import style from './style.module.css'

interface PressCategoriesProps {
  categories: string[]
  onSelectCategory: (category: string) => void
}

export default function PressCategories({ categories, onSelectCategory }: PressCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  
  const handleSelectCategory = (category: string) => {
    setActiveCategory(category)
    onSelectCategory(category)
  }
  
  return (
    <div className={style.categoryTabs}>
      {categories.map((category, index) => (
        <div 
          key={index} 
          className={`${style.categoryTab} ${category === activeCategory ? style.activeTab : style.normalTab}`}
          onClick={() => handleSelectCategory(category)}
        >
          <Typo.medium>
            {category}
          </Typo.medium>
        </div>
      ))}
    </div>
  )
}
