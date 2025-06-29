import axios, {AxiosError, AxiosRequestConfig} from 'axios'

// CORS 우회를 위해 프록시 사용
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
})

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = axios.CancelToken.source()
  const promise = instance({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({data}) => data)

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled')
  };

  return promise
};

export type ErrorType<e> = AxiosError<e>

export type BodyType<BodyData> = BodyData

export default instance
