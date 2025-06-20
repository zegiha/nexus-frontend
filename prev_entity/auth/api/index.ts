import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../shared/api/client';
import { 
  EmailVerifyRequestDto, 
  EmailVerifyDto, 
  SignUpDto, 
  SignInDto, 
  AuthResponse, 
  RefreshResponse 
} from '../../types/auth';

// API functions
export const authApi = {
  // 이메일 인증 요청
  requestEmailVerification: (data: EmailVerifyRequestDto) =>
    apiClient<void>({
      url: '/auth/email/verify/request',
      method: 'POST',
      data,
    }),

  // 이메일 인증
  verifyEmail: (data: EmailVerifyDto) =>
    apiClient<void>({
      url: '/auth/email/verify',
      method: 'POST',
      data,
    }),
  // 회원가입
  signUp: (data: SignUpDto) => {
    console.log('회원가입 요청 데이터:', data);
    return apiClient<AuthResponse>({
      url: '/auth/sign/up',
      method: 'POST',
      data,
    });
  },

  // 로그인
  signIn: (data: SignInDto) =>
    apiClient<AuthResponse>({
      url: '/auth/sign/in',
      method: 'POST',
      data,
    }),

  // 토큰 갱신
  refresh: () =>
    apiClient<RefreshResponse>({
      url: '/auth/refresh',
      method: 'GET',
    }),
};

// React Query hooks
export const useRequestEmailVerification = () => {
  return useMutation({
    mutationFn: authApi.requestEmailVerification,
    onSuccess: () => {
      console.log('이메일 인증 요청이 성공했습니다.');
    },
    onError: (error: any) => {
      console.error('이메일 인증 요청 실패:', error);
      console.error('에러 응답:', error.response?.data);
      console.error('에러 상태:', error.response?.status);
    },
  });
};

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: authApi.verifyEmail,
    onSuccess: () => {
      console.log('이메일 인증이 완료되었습니다.');
    },
    onError: (error: any) => {
      console.error('이메일 인증 실패:', error);
      console.error('에러 응답:', error.response?.data);
      console.error('에러 상태:', error.response?.status);
    },
  });
};

export const useSignUp = (onSuccess?: (data: AuthResponse) => void) => {
  return useMutation({
    mutationFn: authApi.signUp,
    onSuccess: (data: any) => {
      console.log('회원가입 API 응답 원본:', data);
      
      // 백엔드 응답 구조에 맞게 변환
      const authResponse: AuthResponse = {
        accessToken: data.accessToken || data.access_token || data.token,
        refreshToken: data.refreshToken || data.refresh_token,
        user: data.user || {
          id: data.userId || data.id || 'unknown',
          email: data.email || 'unknown',
          name: data.name || data.username || 'User'
        }
      };
      
      console.log('변환된 AuthResponse:', authResponse);
      
      // 토큰 저장
      localStorage.setItem('accessToken', authResponse.accessToken);
      localStorage.setItem('refreshToken', authResponse.refreshToken);
      localStorage.setItem('userData', JSON.stringify(authResponse.user));
      console.log('회원가입이 완료되었습니다.');
      onSuccess?.(authResponse);
    },
    onError: (error: any) => {
      console.error('회원가입 실패:', error);
      console.error('에러 응답:', error.response?.data);
      console.error('에러 상태:', error.response?.status);
    },
  });
};

export const useSignIn = (onSuccess?: (data: AuthResponse) => void) => {
  return useMutation({
    mutationFn: authApi.signIn,
    onSuccess: (data: any) => {
      console.log('API 응답 원본:', data);
      
      // 백엔드 응답 구조에 맞게 변환
      const authResponse: AuthResponse = {
        accessToken: data.accessToken || data.access_token || data.token,
        refreshToken: data.refreshToken || data.refresh_token,
        user: data.user || {
          id: data.userId || data.id || 'unknown',
          email: data.email || 'unknown',
          name: data.name || data.username || data.email?.split('@')[0] || 'User'
        }
      };
      
      console.log('변환된 AuthResponse:', authResponse);
      
      // AuthContext의 login 함수가 localStorage 저장을 담당하므로 여기서는 제거
      onSuccess?.(authResponse);
    },
    onError: (error: any) => {
      console.error('로그인 실패:', error);
      console.error('에러 응답:', error.response?.data);
      console.error('에러 상태:', error.response?.status);
    },
  });
};

export const useRefreshToken = () => {
  return useQuery({
    queryKey: ['auth', 'refresh'],
    queryFn: authApi.refresh,
    enabled: false, // 수동으로 실행
  });
};
