import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../../../shared/api/client';
import { 
  User,
  ChangeEmailDto, 
  ChangePasswordDto, 
  SubscribeCompanyDto,
  UserSubscription
} from '../../types/user';

// API functions
export const userApi = {
  // 사용자 정보 조회 (토큰에서 자동으로 사용자 식별)
  getCurrentUser: () =>
    apiClient<User>({
      url: '/user/me', // 추정되는 엔드포인트
      method: 'GET',
    }),

  // 이메일 변경
  changeEmail: (data: ChangeEmailDto) =>
    apiClient<void>({
      url: '/user/change/email',
      method: 'PATCH',
      data,
    }),

  // 비밀번호 변경
  changePassword: (data: ChangePasswordDto) =>
    apiClient<void>({
      url: '/user/change/password',
      method: 'PATCH',
      data,
    }),

  // 구독
  subscribe: (data: SubscribeCompanyDto) =>
    apiClient<void>({
      url: '/user/subscribe',
      method: 'PATCH',
      data,
    }),

  // 구독 해제
  unsubscribe: (data: SubscribeCompanyDto) =>
    apiClient<void>({
      url: '/user/unsubscribe',
      method: 'PATCH',
      data,
    }),

  // 사용자 구독 목록 조회 (추정)
  getSubscriptions: () =>
    apiClient<UserSubscription[]>({
      url: '/user/subscriptions',
      method: 'GET',
    }),

  // 계정 삭제
  deleteAccount: () =>
    apiClient<void>({
      url: '/user/delete',
      method: 'DELETE',
    }),
};

// React Query hooks
export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ['user', 'current'],
    queryFn: userApi.getCurrentUser,
    staleTime: 5 * 60 * 1000, // 5분
    enabled: false, // 일단 비활성화 (AuthContext 사용)
  });
};

export const useChangeEmail = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: userApi.changeEmail,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'current'] });
      console.log('이메일이 성공적으로 변경되었습니다.');
    },
    onError: (error: any) => {
      console.error('이메일 변경 실패:', error);
      console.error('에러 응답:', error.response?.data);
    },
  });
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: userApi.changePassword,
    onSuccess: () => {
      console.log('비밀번호가 성공적으로 변경되었습니다.');
    },
    onError: (error: any) => {
      console.error('비밀번호 변경 실패:', error);
      console.error('에러 응답:', error.response?.data);
    },
  });
};

export const useSubscribe = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: userApi.subscribe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'subscriptions'] });
      console.log('구독이 완료되었습니다.');
    },
    onError: (error: any) => {
      console.error('구독 실패:', error);
      console.error('에러 응답:', error.response?.data);
    },
  });
};

export const useUnsubscribe = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: userApi.unsubscribe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'subscriptions'] });
      console.log('구독이 해제되었습니다.');
    },
    onError: (error: any) => {
      console.error('구독 해제 실패:', error);
      console.error('에러 응답:', error.response?.data);
    },
  });
};

export const useGetSubscriptions = () => {
  return useQuery({
    queryKey: ['user', 'subscriptions'],
    queryFn: userApi.getSubscriptions,
    staleTime: 5 * 60 * 1000,
  });
};

export const useDeleteAccount = () => {
  return useMutation({
    mutationFn: userApi.deleteAccount,
    onSuccess: () => {
      // 로그아웃 처리
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userData');
      console.log('계정이 삭제되었습니다.');
      window.location.href = '/';
    },
    onError: (error: any) => {
      console.error('계정 삭제 실패:', error);
      console.error('에러 응답:', error.response?.data);
    },
  });
};
