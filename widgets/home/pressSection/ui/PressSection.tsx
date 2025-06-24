'use client'

import { useEffect, useRef, useCallback } from 'react'
import {motionTransition} from '@/shared/design/motion'
import usePressSection from '@/widgets/home/pressSection/model/usePressSection'
import Box from '@/widgets/home/pressSection/ui/Box'
import BoxSkeleton from '@/widgets/home/pressSection/ui/BoxSkeleton'
import style from './style.module.css'
import {motion} from 'motion/react'

export default function PressSection() {
  const {
    status, 
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePressSection()

  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries
    if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  useEffect(() => {
    const element = loadMoreRef.current
    if (!element) return

    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    })
    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [handleObserver])

  return (
    <motion.div
      className={style.container}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={motionTransition.fast}
    >
      {status === 'success' && (
        <>
          {data.map((v: any, i: number) => (
            <Box
              key={`${v.press.name}-${i}`}
              {...v}
            />
          ))}
          
          {/* 무한 스크롤 트리거 */}
          <div ref={loadMoreRef} style={{ height: '20px', width: '100%' }} />
          
          {/* 더 로딩 중일 때 스켈레톤 표시 */}
          {isFetchingNextPage && (
            Array.from({length: 3}).map((_, i) => (
              <BoxSkeleton
                key={`loading-${i}`}
              />
            ))
          )}
        </>
      )}
      {status === 'pending' && (
        Array.from({length: 6}).map((_, i) => (
          <BoxSkeleton
            key={i}
          />
        ))
      )}
    </motion.div>
  )
}
