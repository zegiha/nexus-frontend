import {useAuthControllerEmailVerifyRequest} from '@/entity/api/auth/auth'
import {getFirstErrorMessage} from '@/shared/helper'
import {IStep} from '@/widgets/registerPage/const/propsInterface'
import {AxiosError} from 'axios'
import {useCallback} from 'react'

export default function useEmail(next: IStep['next']) {
  const mutation = useAuthControllerEmailVerifyRequest({
    mutation: {
      onSuccess: () => {
        next()
      },
      onError: (e) => {
        const message = getFirstErrorMessage(e)
        switch (message) {
          case 'email must be an email':
            alert('이메일이 잘못됐습니다')
            break
          case 'Email is already registered.':
            alert('이메일이 이미 등록됐습니다')
            break
        }
      }
    }
  })

  const textProvider = useCallback(() => {
    switch (mutation.status) {
      case 'pending':
        return '인증 메일 발송중...'
      case 'success':
        return '발송됐습니다!'
      default:
        return '다음'
    }
  }, [mutation.status])

  return {
    ...mutation,
    textProvider,
  }
}