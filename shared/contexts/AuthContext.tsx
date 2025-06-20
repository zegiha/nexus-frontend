"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthResponse } from "@/prev_entity/types/auth";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (authData: AuthResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 클라이언트 환경에서만 localStorage 접근
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      const userData = localStorage.getItem("userData");

      console.log("AuthContext 초기화:", {
        token: !!token,
        userData: !!userData,
        isClient: true,
      });
      if (token && userData) {
        try {
          const parsedUser = JSON.parse(userData);
          // name이 없으면 이메일에서 추출
          const correctedUser = {
            ...parsedUser,
            name: parsedUser.name || parsedUser.email?.split("@")[0] || "User",
          };
          setUser(correctedUser);
          console.log("로컬 스토리지에서 사용자 복원:", correctedUser);
        } catch (error) {
          console.error("사용자 데이터 파싱 실패:", error);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("userData");
        }
      }
    } else {
      console.log("AuthContext 초기화: 서버 환경에서 실행됨");
    }

    setIsLoading(false);
  }, []);
  const login = (authData: AuthResponse) => {
    console.log("AuthContext login 호출됨:", authData);

    // 사용자 정보 보정 (name이 없으면 이메일에서 추출)
    const userData = {
      ...authData.user,
      name: authData.user.name || authData.user.email?.split("@")[0] || "User",
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", authData.accessToken);
      localStorage.setItem("refreshToken", authData.refreshToken);
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("localStorage에 저장된 데이터:", {
        accessToken: !!authData.accessToken,
        refreshToken: !!authData.refreshToken,
        userData: userData,
      });
    }

    setUser(userData);
    console.log("사용자 상태 업데이트됨:", userData);
  };

  const logout = () => {
    console.log("AuthContext logout 호출됨");

    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userData");
    }

    setUser(null);
    console.log("사용자 상태 초기화됨");
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
