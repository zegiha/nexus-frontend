'use client'

import {headlineEntity, getHeadlinesByPress} from '@/entity/headline'
import {useEffect, useState} from 'react'

export default function useHeadlinesByPress(pressId: string) {
  const [headlines, setHeadlines] = useState<headlineEntity[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        setIsLoading(true)
        const data = await getHeadlinesByPress(pressId)
        setHeadlines(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch headlines'))
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchHeadlines()
  }, [pressId])
  
  return { headlines, isLoading, error }
}
