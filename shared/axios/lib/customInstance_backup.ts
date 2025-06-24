import axios, {AxiosError, AxiosRequestConfig} from 'axios'

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

export type ErrorType<Error> = AxiosError<Error>

export type BodyType<BodyData> = BodyData

export default instance