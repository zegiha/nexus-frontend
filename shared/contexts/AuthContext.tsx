"use client";

import {SignInDto} from '@/entity/const'
import React, { createContext, useContext, useState } from "react";


interface AuthContextType {
  isAuthenticated: boolean
  login: (data: SignInDto) => void
  logout: () => void
  user: SignInDto | undefined,
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
  const [user, setUser] = useState<SignInDto | undefined>();

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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
