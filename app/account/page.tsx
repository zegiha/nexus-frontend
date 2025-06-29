"use client";

import {HeaderLayout} from '@/shared/components/organism/header'
import { useState, useEffect } from "react";
import { useAuth } from "@/shared/contexts/AuthContext";
import { useRouter } from "next/navigation";
import AccountSidebar from "@/widgets/account/sidebar/ui/AccountSidebar";
import AccountInfo from "@/widgets/account/accountInfo/ui/AccountInfo";
import Subscription from "@/widgets/account/subscription/ui/Subscription";
import styles from "./styles.module.css";

export default function AccountPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"account" | "subscription">(
    "account"
  );

  // 로그인되지 않은 경우 리다이렉트
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return null; // 리다이렉트 진행 중
  }

  return (
    <HeaderLayout>
      <div className={styles.accountPage}>
        {/* 메인 콘텐츠 */}
        <div className={styles.frameGroup}>
          {/* 사이드바 */}
          <AccountSidebar activeTab={activeTab} onTabChange={setActiveTab} />

          {/* 구분선 */}
          <div className={styles.frameInner} />

          {/* 메인 콘텐츠 영역 */}
          {activeTab === "account" ? <AccountInfo /> : <Subscription />}
        </div>
      </div>
    </HeaderLayout>
  );
}
