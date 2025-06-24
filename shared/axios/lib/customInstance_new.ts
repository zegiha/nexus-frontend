import axios, {AxiosError, AxiosRequestConfig} from 'axios'

// CORS 우회를 위해 프록시 사용
const baseUrl = process.env.NODE_ENV === 'development' 
  ? '/api'  // 개발 환경에서는 프록시 사용
  : process.env.NEXT_PUBLIC_API_BASE_URL || 'http://52.231.201.28:4000';

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // 클라이언트 환경에서만 localStorage 접근
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // 클라이언트 환경에서만 localStorage 접근
        if (typeof window !== 'undefined') {
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            const response = await axios.get(`${baseUrl}/auth/refresh`, {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            });

            const newAccessToken = response.data.accessToken;
            localStorage.setItem('accessToken', newAccessToken);
            
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return instance(originalRequest);
          }
        }
      } catch (refreshError) {
        // Refresh failed, redirect to login
        if (typeof window !== 'undefined') {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('userData');
          window.location.href = '/auth/login';
        }
      }
    }

    return Promise.reject(error);
  }
);

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
