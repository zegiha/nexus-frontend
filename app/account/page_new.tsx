"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/shared/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AccountSidebar from "@/widgets/account/sidebar/ui/AccountSidebar";
import AccountInfo from "@/widgets/account/accountInfo/ui/AccountInfo";
import Subscription from "@/widgets/account/subscription/ui/Subscription";
import styles from "./styles.module.css";

export default function AccountPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"account" | "subscription">(
    "account"
  );

  // 로그인되지 않은 경우 리다이렉트
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, isLoading, router]);

  // 로딩 중이거나 인증되지 않은 경우
  if (isLoading) {
    return (
      <div className={styles.desktop10}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div>로딩 중...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null; // 리다이렉트 진행 중
  }

  return (
    <div className={styles.desktop10}>
      {/* 헤더 */}
      <div className={styles.desktop10Inner}>
        <div className={styles.nexusParent}>
          <Image
            className={styles.nexusIcon}
            width={58.1}
            height={14.9}
            sizes="100vw"
            alt=""
            src="/Nexus.svg"
          />
          <div className={styles.searchParent}>
            <Image
              className={styles.searchIcon}
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/search.svg"
            />
            <div className={styles.div}>검색어를 입력해주세요</div>
          </div>
          <div className={styles.frameParent}>
            <Image
              className={styles.frameChild}
              width={40}
              height={40}
              sizes="100vw"
              alt=""
              src="/Frame 107.png"
            />
            <Image
              className={styles.frameChild}
              width={40}
              height={40}
              sizes="100vw"
              alt=""
              src="/Frame 112.png"
            />
          </div>
        </div>
      </div>

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
  );
}
