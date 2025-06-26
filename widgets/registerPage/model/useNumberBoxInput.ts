'use client'

import {INumberBoxInput} from '@/widgets/registerPage/const/propsInterface'
import {useEffect, useRef, useState} from 'react'

export default function useNumberBoxInput({
  value, setValue
}: INumberBoxInput) {
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCursor = () => {
    if(inputRef.current ) {
      const length = inputRef.current.value.length
      inputRef.current.setSelectionRange(length, length)
    }
  }

  useEffect(() => {
    if(!inputRef.current) return
    inputRef.current.onselectionchange = (e) => {
      handleCursor()
    }
  }, []);

  return {
    inputRef,
    isFocus, setIsFocus,
    handleCursor,
  }
}