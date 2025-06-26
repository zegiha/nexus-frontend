"use client";

import { useState } from "react";
import { useAuth } from "@/shared/contexts/AuthContext";
import {
  useChangeEmail,
  useChangePassword,
  useDeleteAccount,
} from "@/prev_entity/user/api";
import styles from "./styles.module.css";

export default function AccountInfo() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {logout, user} = useAuth();

  const changeEmailMutation = useChangeEmail();
  const changePasswordMutation = useChangePassword();
  const deleteAccountMutation = useDeleteAccount();

  const handleEmailChange = async () => {
    if (!newEmail || !newEmail.includes("@")) {
      alert("올바른 이메일을 입력해주세요.");
      return;
    }

    if (!currentPassword) {
      alert("현재 비밀번호를 입력해주세요.");
      return;
    }

    try {
      await changeEmailMutation.mutateAsync({
        newEmail: newEmail,
        currentPassword: currentPassword,
      });
      alert("이메일이 성공적으로 변경되었습니다!");
      setNewEmail("");
      setCurrentPassword("");
      setShowEmailModal(false);
    } catch (error) {
      console.error("이메일 변경 실패:", error);
      alert("이메일 변경에 실패했습니다.");
    }
  };

  const handlePasswordChange = async () => {
    if (!currentPassword || !newPassword) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    if (newPassword.length < 6) {
      alert("새 비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    try {
      await changePasswordMutation.mutateAsync({
        currentPassword,
        newPassword,
      });
      alert("비밀번호가 성공적으로 변경되었습니다!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowPasswordModal(false);
    } catch (error) {
      console.error("비밀번호 변경 실패:", error);
      alert("비밀번호 변경에 실패했습니다.");
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = confirm(
      "정말로 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
    );

    if (!confirmed) return;

    try {
      await deleteAccountMutation.mutateAsync();
      alert("계정이 삭제되었습니다.");
      logout();
    } catch (error) {
      console.error("계정 삭제 실패:", error);
      alert("계정 삭제에 실패했습니다.");
    }
  };

  if (!user) return null;

  return (
    <div className={styles.frameDiv}>
      {/* 계정 정보 섹션 */}
      <div className={styles.parent}>
        <div className={styles.div3}>계정 정보</div>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.group}>
              <div className={styles.div4}>이메일</div>
              <div className={styles.iammusicplayboicarti}>{user.email}</div>
            </div>
            <div
              className={styles.wrapper}
              onClick={() => setShowEmailModal(true)}
            >
              <div className={styles.div}>변경하기</div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.container}>
              <div className={styles.div4}>비밀번호</div>
              <div className={styles.div7}>비밀번호 보기</div>
            </div>
            <div
              className={styles.wrapper}
              onClick={() => setShowPasswordModal(true)}
            >
              <div className={styles.div}>변경하기</div>
            </div>
          </div>
        </div>
      </div>

      {/* 계정 삭제 섹션 */}
      <div className={styles.parent1}>
        <div className={styles.div3}>계정 삭제</div>
        <div className={styles.parent2}>
          <div className={styles.div}>
            <p className={styles.p}>계정 삭제 시 이전 정보는 바로 삭제됩니다</p>
            <p className={styles.p}>신중히 선택해주세요</p>
          </div>
          <div className={styles.wrapper1} onClick={handleDeleteAccount}>
            <div className={styles.div}>
              {deleteAccountMutation.isPending ? "삭제 중..." : "삭제하기"}
            </div>
          </div>
        </div>
      </div>

      {/* 이메일 변경 모달 */}
      {showEmailModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>이메일 변경</h3>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="새 이메일 주소"
              className={styles.input}
            />
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="현재 비밀번호 (확인용)"
              className={styles.input}
            />
            <div className={styles.modalButtons}>
              <button
                onClick={() => setShowEmailModal(false)}
                className={styles.cancelButton}
              >
                취소
              </button>
              <button
                onClick={handleEmailChange}
                disabled={changeEmailMutation.isPending}
                className={styles.confirmButton}
              >
                {changeEmailMutation.isPending ? "변경 중..." : "변경하기"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 비밀번호 변경 모달 */}
      {showPasswordModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>비밀번호 변경</h3>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="현재 비밀번호"
              className={styles.input}
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="새 비밀번호"
              className={styles.input}
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="새 비밀번호 확인"
              className={styles.input}
            />
            <div className={styles.modalButtons}>
              <button
                onClick={() => setShowPasswordModal(false)}
                className={styles.cancelButton}
              >
                취소
              </button>
              <button
                onClick={handlePasswordChange}
                disabled={changePasswordMutation.isPending}
                className={styles.confirmButton}
              >
                {changePasswordMutation.isPending ? "변경 중..." : "변경하기"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
