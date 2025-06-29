'use client'

import {RefObject, useCallback, useState} from 'react'

export default function useOffsetHeight() {
  const [offsetHeight, setOffsetHeight] = useState<number>(0)

  const updateOffsetHeight = useCallback((ref: RefObject<HTMLDivElement | null>) => {
    if(setOffsetHeight !== null && ref.current !== null)
      setOffsetHeight(ref.current.offsetHeight)
  }, [setOffsetHeight])

  return {
    offsetHeight,
    updateOffsetHeight,
  }
}