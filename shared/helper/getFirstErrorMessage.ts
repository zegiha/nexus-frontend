import {AxiosError} from 'axios'

export default function(error: unknown) {
  if(error && error instanceof AxiosError) {
    const data = (error as AxiosError).response?.data
    const code = error.status as number
    if(
      code && code - 400 < 100 &&
      typeof data === 'object' &&
      data !== null &&
      'message' in data &&
      Array.isArray(data.message)
    ) {
      return data.message[0] as string
    } else {
      console.error('error dose not client or something wrong')
    }

  } else {
    console.error('error message is not instanceof AxiosError')
  }
}