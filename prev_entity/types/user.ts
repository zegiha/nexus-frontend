// User API Types
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChangeEmailDto {
  newEmail: string;
  currentPassword: string;
}

export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

export interface SubscribeCompanyDto {
  companyName: string;
}

export interface UserSubscription {
  id: string;
  companyName: string;
  subscribedAt: string;
}
