'use client'

import {useAuthControllerSignUp} from '@/entity/api/auth/auth'
import {getFirstErrorMessage} from '@/shared/helper'
import {IStep} from '@/widgets/registerPage/const/propsInterface'
import {useCallback} from 'react'

export default function useIdAndPassword(next: IStep['next']) {
  const mutation = useAuthControllerSignUp({
    mutation: {
      onSuccess: () => {
        next()
      },
      onError: (e) => {
        const message = getFirstErrorMessage(e)
      }
    }
  })

  const textProvider = useCallback(() => {
    switch(mutation.status) {
      case 'pending': return '회원가입 하는중'
      case 'success': return 'Nexus에 온걸 환영해요!'
      default: return '회원가입'
    }
  }, [mutation.status])

  return {
    ...mutation,
    textProvider,
  }
}