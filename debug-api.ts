// 디버깅용 API 테스트 파일
import axios from 'axios';

const API_BASE_URL = 'http://52.231.201.28:4000';

// 1. 이메일 인증 요청 테스트
export const testEmailVerification = async (email: string) => {
  try {
    console.log('이메일 인증 요청 테스트:', email);
    const response = await axios.post(`${API_BASE_URL}/auth/email/verify/request`, {
      email
    });
    console.log('이메일 인증 요청 성공:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('이메일 인증 요청 실패:', error.response?.data);
    throw error;
  }
};

// 2. 이메일 인증 테스트
export const testEmailVerify = async (email: string, code: string) => {
  try {
    console.log('이메일 인증 테스트:', { email, code });
    const response = await axios.post(`${API_BASE_URL}/auth/email/verify`, {
      email,
      code
    });
    console.log('이메일 인증 성공:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('이메일 인증 실패:', error.response?.data);
    throw error;
  }
};

// 3. 회원가입 테스트 (여러 버전)
export const testSignUp1 = async (email: string, password: string, name: string) => {
  try {
    console.log('회원가입 테스트 1:', { email, password: '***', name });
    const response = await axios.post(`${API_BASE_URL}/auth/sign/up`, {
      email,
      password,
      name
    });
    console.log('회원가입 성공:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('회원가입 실패:', error.response?.data);
    throw error;
  }
};

// 4. ID와 함께 회원가입 테스트
export const testSignUp2 = async (email: string, password: string, name: string) => {
  try {
    console.log('회원가입 테스트 2 (ID 포함):', { email, password: '***', name });
    const response = await axios.post(`${API_BASE_URL}/auth/sign/up`, {
      id: email, // 이메일을 ID로 사용
      email,
      password,
      name
    });
    console.log('회원가입 성공:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('회원가입 실패:', error.response?.data);
    throw error;
  }
};

// 5. UUID ID와 함께 회원가입 테스트
export const testSignUp3 = async (email: string, password: string, name: string) => {
  try {
    const uuid = crypto.randomUUID();
    console.log('회원가입 테스트 3 (UUID 포함):', { id: uuid, email, password: '***', name });
    const response = await axios.post(`${API_BASE_URL}/auth/sign/up`, {
      id: uuid,
      email,
      password,
      name
    });
    console.log('회원가입 성공:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('회원가입 실패:', error.response?.data);
    throw error;
  }
};
