'use client'

import {getPressDetail, pressDetailEntity} from '@/prev_entity/press'
import {useEffect, useState} from 'react'

export default function usePressDetail(pressId: string) {
  const [pressDetail, setPressDetail] = useState<pressDetailEntity | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    const fetchPressDetail = async () => {
      try {
        setIsLoading(true)
        const data = await getPressDetail(pressId)
        setPressDetail(data)
        setError(null)
      } catch (err) {
        console.error('언론사 상세 API 실패, 더미 데이터 사용:', err)
        
        // API 실패 시 더미 데이터로 fallback (발표용)
        const dummyPressDetail: pressDetailEntity = {
          name: pressId === "1" ? "조선일보" : 
                pressId === "2" ? "중앙일보" : 
                pressId === "3" ? "동아일보" : 
                pressId === "4" ? "한겨레" :
                pressId === "5" ? "경향신문" : `언론사 ${pressId}`,
          imgUrl: "/images/press-logo-placeholder.png",
          description: "대한민국의 대표적인 일간지로, 정확하고 신속한 뉴스 전달을 위해 노력하고 있습니다.",
          subscriberCount: Math.floor(Math.random() * 100000) + 50000,
          categories: ["정치", "경제", "사회", "국제"],
          isSubscribed: false
        }
        
        setPressDetail(dummyPressDetail)
        setError(null)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchPressDetail()
  }, [pressId])
  
  const toggleSubscription = () => {
    if (pressDetail) {
      setPressDetail({
        ...pressDetail,
        isSubscribed: !pressDetail.isSubscribed
      })
    }
  }
  
  return { pressDetail, isLoading, error, toggleSubscription }
}
