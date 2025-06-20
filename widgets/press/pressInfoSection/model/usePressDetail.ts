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
        setError(err instanceof Error ? err : new Error('Failed to fetch press details'))
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
