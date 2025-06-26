'use client'

import {useAuthControllerEmailVerify} from '@/entity/api/auth/auth'
import {getFirstErrorMessage} from '@/shared/helper'
import {IStep} from '@/widgets/registerPage/const/propsInterface'
import {useCallback, useEffect, useState} from 'react'

export default function useEmailVerify(next: IStep['next'], code: string) {
  const [errorText, setErrorText] = useState<string | undefined>()
  const mutation = useAuthControllerEmailVerify({
    mutation: {
      onSuccess: () => {
        next()
      },
      onError: e => {
        const message = getFirstErrorMessage(e)
        switch(message) {
          case 'Invalid verification code.':
            setErrorText('인증코드가 잘못됐어요')
            break
          case 'Verification code has expired.':
            setErrorText('인증이 만료됐어요')
            break
        }
      }
    }
  })

  const getButtonText = useCallback(() => {
    switch(mutation.status) {
      case 'success': return '다음으로 넘어갈게요'
      case 'pending': return '인증하는중...'
      default: return '인증하기'
    }
  }, [mutation.status])

  useEffect(() => {
    setErrorText(undefined)
  }, [code])

  return {
    ...mutation,
    getButtonText,
    errorText, setErrorText
  }
}