// Auth API Types
export interface EmailVerifyRequestDto {
  email: string;
}

export interface EmailVerifyDto {
  email: string;
  code: string;
}

export interface SignUpDto {
  email: string;
  password: string;
  name: string;
  id?: string; // 혹시 필요할 수 있는 필드
}

export interface SignInDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export interface RefreshResponse {
  accessToken: string;
}
