"use client";

import styles from "./styles.module.css";
import { Icon } from "@/shared/components/atom/icon";

interface AccountSidebarProps {
  activeTab: "account" | "subscription";
  onTabChange: (tab: "account" | "subscription") => void;
}

export default function AccountSidebar({
  activeTab,
  onTabChange,
}: AccountSidebarProps) {
  return (
    <div className={styles.frameContainer}>
      {" "}
      <div
        className={`${styles.accountCircleParent} ${
          activeTab === "account" ? styles.active : ""
        }`}
        onClick={() => onTabChange("account")}
      >
        <Icon iconKey="person" size={24} color="normal" />
        <div className={styles.div1}>계정</div>
      </div>
      <div
        className={`${styles.favoriteParent} ${
          activeTab === "subscription" ? styles.active : ""
        }`}
        onClick={() => onTabChange("subscription")}
      >
        <Icon iconKey="subscriptions" size={24} color="normal" />
        <div className={styles.div}>구독</div>
      </div>
    </div>
  );
}
