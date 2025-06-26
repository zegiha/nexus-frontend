'use client'

import {useAuthControllerSignIn} from '@/entity/api/auth/auth'
import {useAuth} from '@/shared/contexts/AuthContext'
import {getFirstErrorMessage} from '@/shared/helper'
import {useRouter} from 'next/navigation'
import {useCallback, useState} from 'react'

export default function useLogin() {
  const router = useRouter()
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleError = (error: unknown) => {
    const message = getFirstErrorMessage(error)
    if(message) {
      switch(message) {
        case "email must be an email":
          alert('이메일이 잘못됐습니다')
          return
        default:
          alert('이메일 또는 비밀번호가 잘못됐습니다')
          return
      }
    }
  }

  const mutation = useAuthControllerSignIn({
    mutation: {
      onSuccess: data => {
        login(data)
        router.replace('/')
      },
      onError: e => {
        handleError(e)
      }
    }
  })

  const messageProvider = useCallback(() => {
    switch (mutation.status) {
      case 'pending':
        return '로그인중...'
      case 'success':
        return '로그인됐습니다. 잠시 기다려주세요...'
      default:
        return '로그인'
    }
  }, [mutation.status])

  return {
    email, setEmail,
    password, setPassword,
    ...mutation,
    messageProvider,
  }
}