"use client";

import { useState } from "react";
import { useGetSubscriptions, useUnsubscribe } from "@/prev_entity/user/api";
import { Icon } from "@/shared/components/atom/icon";
import styles from "./styles.module.css";

export default function Subscription() {
  const { data: subscriptions, isLoading } = useGetSubscriptions();
  const unsubscribeMutation = useUnsubscribe();
  const [notifications, setNotifications] = useState<Record<string, boolean>>(
    {}
  );
  const handleUnsubscribe = async (companyName: string) => {
    try {
      await unsubscribeMutation.mutateAsync({ companyName });
      alert("구독이 해제되었습니다!");
    } catch (error) {
      console.error("구독 해제 실패:", error);
      alert("구독 해제에 실패했습니다.");
    }
  };

  const toggleNotification = (companyName: string) => {
    setNotifications((prev) => ({
      ...prev,
      [companyName]: !prev[companyName],
    }));
    // 실제 API 호출은 여기에 추가
    console.log(
      `${companyName} 알림 ${notifications[companyName] ? "해제" : "설정"}`
    );
  };

  // 언론사와 기자를 분리 (실제 API 응답에 따라 조정 필요)
  const pressSubscriptions =
    subscriptions?.filter((sub) =>
      // 언론사는 보통 회사명이 짧고 알려진 언론사명
      [
        "SBS",
        "KBS",
        "MBC",
        "JTBC",
        "조선일보",
        "중앙일보",
        "동아일보",
        "한겨레",
        "경향신문",
      ].includes(sub.companyName)
    ) || [];

  const journalistSubscriptions =
    subscriptions?.filter(
      (sub) =>
        ![
          "SBS",
          "KBS",
          "MBC",
          "JTBC",
          "조선일보",
          "중앙일보",
          "동아일보",
          "한겨레",
          "경향신문",
        ].includes(sub.companyName)
    ) || [];

  if (isLoading) {
    return (
      <div className={styles.frameDiv}>
        <div style={{ padding: "24px", textAlign: "center" }}>로딩 중...</div>
      </div>
    );
  }

  return (
    <div className={styles.frameDiv}>
      {/* 언론사 섹션 */}
      <div className={styles.parent}>
        <div className={styles.div3}>언론사</div>
        <div className={styles.frameParent1}>
          {pressSubscriptions.length > 0 ? (
            pressSubscriptions.map((subscription) => (
              <div key={subscription.id} className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <Icon iconKey="account" size={32} color="normal" />
                  <div className={styles.div}>{subscription.companyName}</div>
                </div>
                <div className={styles.frameParent4}>
                  <div
                    className={styles.wrapper}
                    onClick={() => toggleNotification(subscription.companyName)}
                  >
                    <Icon
                      iconKey={
                        notifications[subscription.companyName]
                          ? "notifications_off"
                          : "notifications_active"
                      }
                      size={20}
                      color="normal"
                    />
                    <div className={styles.div}>
                      {notifications[subscription.companyName]
                        ? "알림 해제"
                        : "알림 설정"}
                    </div>
                  </div>
                  <div
                    className={styles.container}
                    onClick={() => handleUnsubscribe(subscription.companyName)}
                  >
                    <div className={styles.div}>구독 해제</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{ padding: "16px", color: "#858585", textAlign: "center" }}
            >
              구독 중인 언론사가 없습니다.
            </div>
          )}
        </div>
      </div>

      {/* 기자 섹션 */}
      <div className={styles.parent}>
        <div className={styles.div3}>기자</div>
        <div className={styles.frameParent1}>
          {journalistSubscriptions.length > 0 ? (
            journalistSubscriptions.map((subscription) => (
              <div key={subscription.id} className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <Icon iconKey="person" size={32} color="normal" />
                  <div className={styles.div}>{subscription.companyName}</div>
                </div>
                <div className={styles.frameParent7}>
                  <div
                    className={styles.frame}
                    onClick={() => toggleNotification(subscription.companyName)}
                  >
                    <Icon
                      iconKey={
                        notifications[subscription.companyName]
                          ? "notifications_off"
                          : "notifications_active"
                      }
                      size={20}
                      color="normal"
                    />
                    <div className={styles.div}>
                      {notifications[subscription.companyName]
                        ? "알림 해제"
                        : "알림 설정"}
                    </div>
                  </div>
                  <div
                    className={styles.container}
                    onClick={() => handleUnsubscribe(subscription.companyName)}
                  >
                    <div className={styles.div}>구독 해제</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{ padding: "16px", color: "#858585", textAlign: "center" }}
            >
              구독 중인 기자가 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
