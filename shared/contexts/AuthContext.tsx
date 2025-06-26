"use client";

import { authControllerRefresh } from '@/entity/api/auth/auth';
import { userControllerMyEmail } from '@/entity/api/user/user';
import {SignInDto} from '@/entity/const'
import React, { createContext, useContext, useEffect, useState } from "react";


interface AuthContextType {
  isAuthenticated: boolean
  login: (data: SignInDto) => void
  logout: () => void
  user: Omit<SignInDto, 'password'> | undefined,
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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<Omit<SignInDto, 'password'> | undefined>();

  const login = (data: SignInDto) => {

    setIsAuthenticated(true)
    setUser(data)
  }

  const logout = () => {
    setIsAuthenticated(false);
    setUser(undefined);
  }

  const value: AuthContextType = {
    isAuthenticated,
    login, logout,
    user,
  };

  useEffect(() => {
    const handleRefreshAndLoginCheck = async () => {
      try {
        await authControllerRefresh()
        const newUser = await userControllerMyEmail()
        setUser({email: newUser})
        setIsAuthenticated(true)
      } catch(e) {
        console.error(e)
      }
    }
    handleRefreshAndLoginCheck()
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
