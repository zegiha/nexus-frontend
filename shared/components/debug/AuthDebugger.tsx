"use client";

import { useAuth } from "@/shared/contexts/AuthContext";
import { useEffect, useState } from "react";

export default function AuthDebugger() {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [hasToken, setHasToken] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // localStorage 상태를 실시간으로 업데이트
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkToken = () => {
        const token = localStorage.getItem("accessToken");
        setHasToken(!!token);
        console.log("AuthDebugger - Token 체크:", !!token);
      };

      // 초기 체크
      checkToken();

      // storage 이벤트 리스너 (다른 탭에서 변경 시)
      window.addEventListener("storage", checkToken);

      // 주기적으로 체크 (같은 탭에서 변경 시)
      const interval = setInterval(checkToken, 1000);

      return () => {
        window.removeEventListener("storage", checkToken);
        clearInterval(interval);
      };
    }
  }, []);

  // 디버깅용 로그
  useEffect(() => {
    console.log("AuthDebugger - 상태 업데이트:", {
      isAuthenticated,
      user,
      hasToken,
      userEmail: user?.email,
    });
  }, [isAuthenticated, user, hasToken]);

  if (process.env.NODE_ENV !== "development" || !isMounted) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "80px",
        right: "10px",
        background: "rgba(0,0,0,0.8)",
        color: "white",
        padding: "10px",
        borderRadius: "8px",
        fontSize: "12px",
        zIndex: 9999,
        minWidth: "250px",
      }}
    >
      <div>
        <strong>🔍 Auth Debug</strong>
      </div>
      <div>Mounted: {isMounted ? "✅" : "❌"}</div>
      <div>Loading: {isLoading ? "✅" : "❌"}</div>
      <div>Authenticated: {isAuthenticated ? "✅" : "❌"}</div>
      <div>User: {user ? user.email || user.name || "No Email" : "None"}</div>
      <div>Token: {hasToken ? "✅" : "❌"}</div>
      {typeof window !== "undefined" && (
        <div style={{ fontSize: "10px", marginTop: "5px", opacity: 0.7 }}>
          LS: {localStorage.getItem("accessToken") ? "✅" : "❌"}
        </div>
      )}
    </div>
  );
}
