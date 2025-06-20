"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  useRequestEmailVerification,
  useVerifyEmail,
  useSignUp,
} from "@/prev_entity/auth/api";
import { useAuth } from "@/shared/contexts/AuthContext";
import styles from "./registerPage.module.css";

// 이메일 유효성 검사 함수
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 비밀번호 강도 검사 함수
const isValidPassword = (password: string) => {
  return password.length >= 8 && /^(?=.*[a-zA-Z])(?=.*\d)/.test(password);
};

type RegisterStep = "email" | "verification" | "password";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [step, setStep] = useState<RegisterStep>("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const requestEmailVerification = useRequestEmailVerification();
  const verifyEmail = useVerifyEmail();
  const signUp = useSignUp((data) => {
    login(data);
  });

  const handleEmailNext = async () => {
    if (!email) {
      alert("이메일을 입력해주세요");
      return;
    }

    if (!isValidEmail(email)) {
      alert("올바른 이메일 형식을 입력해주세요");
      return;
    }

    try {
      await requestEmailVerification.mutateAsync({ email });
      alert("인증 이메일이 발송되었습니다. 이메일을 확인해주세요.");
      setStep("verification");
    } catch (error: any) {
      console.error("이메일 인증 요청 실패:", error);
      alert(
        error?.response?.data?.message || "이메일 인증 요청에 실패했습니다."
      );
    }
  };
  const handleVerificationNext = async () => {
    if (verificationCode.length !== 4) {
      alert("4자리 인증번호를 입력해주세요");
      return;
    }

    try {
      await verifyEmail.mutateAsync({
        email,
        code: verificationCode,
      });
      alert("이메일 인증이 완료되었습니다.");
      setStep("password");
    } catch (error: any) {
      console.error("이메일 인증 실패:", error);
      alert(error?.response?.data?.message || "인증번호가 올바르지 않습니다.");
    }
  };
  const handlePasswordComplete = async () => {
    if (!password) {
      alert("비밀번호를 입력해주세요");
      return;
    }

    if (!isValidPassword(password)) {
      alert("비밀번호는 8자 이상, 영문과 숫자를 포함해야 합니다");
      return;
    }

    // 이메일에서 이름 추출 (@ 앞부분 사용)
    const extractedName = email.split("@")[0];

    console.log("회원가입 시도:", {
      email,
      password: "***",
      name: extractedName,
    });

    try {
      // UUID 생성하여 ID로 사용
      const userId = crypto.randomUUID();

      await signUp.mutateAsync({
        id: userId,
        email,
        password,
        name: extractedName,
      });
      alert("회원가입이 완료되었습니다! 홈페이지로 이동합니다.");
      router.push("/");
    } catch (error: any) {
      console.error("회원가입 실패:", error);
      console.error("에러 세부사항:", error.response?.data);

      // 만약 id 에러가 여전히 발생하면 id 없이 재시도
      if (error.response?.data?.message?.includes("id")) {
        console.log("ID 없이 재시도...");
        try {
          await signUp.mutateAsync({
            email,
            password,
            name: extractedName,
          });
          alert("회원가입이 완료되었습니다! 홈페이지로 이동합니다.");
          router.push("/");
        } catch (retryError: any) {
          console.error("재시도 실패:", retryError);
          alert(
            retryError?.response?.data?.message || "회원가입에 실패했습니다."
          );
        }
      } else {
        alert(error?.response?.data?.message || "회원가입에 실패했습니다.");
      }
    }
  };
  const handleVerificationInput = (index: number, value: string) => {
    if (value.length > 1) return;

    const newCode = verificationCode.split("");
    newCode[index] = value;
    setVerificationCode(newCode.join(""));

    // Auto focus next input
    if (value && index < 3) {
      const nextInput = document.querySelector(
        `input[name="code-${index + 1}"]`
      ) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }
  };

  const renderStep = () => {
    switch (step) {
      case "email":
        return (
          <div className={styles.desktop13}>
            <div className={styles.parent}>
              <div className={styles.div}>이메일</div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent}>
                  <div className={styles.group}>
                    <div className={styles.div1}>이메일</div>
                    <div className={styles.div2}>필수*</div>
                  </div>
                  <div className={styles.sunrin076sunrinthskrWrapper}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="23sunrin076@sunrint.hs.kr"
                      className={styles.sunrin076sunrinthskr}
                    />
                  </div>
                </div>
              </div>{" "}
              <div className={styles.frameContainer}>
                <div
                  className={styles.wrapper}
                  onClick={handleEmailNext}
                  style={{
                    opacity: requestEmailVerification.isPending ? 0.6 : 1,
                    cursor: requestEmailVerification.isPending
                      ? "not-allowed"
                      : "pointer",
                  }}
                >
                  <div className={styles.div3}>
                    {requestEmailVerification.isPending ? "전송 중..." : "다음"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "verification":
        return (
          <div className={styles.desktop14}>
            <div className={styles.parent}>
              <div className={styles.div}>이메일 인증</div>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  {" "}
                  {Array.from({ length: 4 }, (_, i) => (
                    <div
                      key={i}
                      className={
                        verificationCode[i]
                          ? styles.wrapper
                          : i === verificationCode.length
                          ? styles.frameItem
                          : styles.frameChild
                      }
                    >
                      {verificationCode[i] ? (
                        <div className={styles.div1}>{verificationCode[i]}</div>
                      ) : (
                        <input
                          type="text"
                          maxLength={1}
                          name={`code-${i}`}
                          onChange={(e) =>
                            handleVerificationInput(i, e.target.value)
                          }
                          className={styles.hiddenInput}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.div3}>인증번호를 입력해주세요</div>
                {verificationCode.length === 0 && (
                  <div className={styles.div4}>인증번호가 비어있습니다!</div>
                )}
              </div>{" "}
              <div className={styles.frameWrapper}>
                <div
                  className={styles.frame}
                  onClick={handleVerificationNext}
                  style={{
                    opacity: verifyEmail.isPending ? 0.6 : 1,
                    cursor: verifyEmail.isPending ? "not-allowed" : "pointer",
                  }}
                >
                  <div className={styles.div5}>
                    {verifyEmail.isPending ? "인증 중..." : "다음"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "password":
        return (
          <div className={styles.desktop15}>
            <div className={styles.parent}>
              <div className={styles.div}>비밀번호</div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent}>
                  <div className={styles.group}>
                    <div className={styles.div1}>비밀번호</div>
                    <div className={styles.div2}>필수*</div>
                  </div>
                  <div className={styles.password1234Wrapper}>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password1234!"
                      className={styles.password1234}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div
                  className={styles.wrapper}
                  onClick={handlePasswordComplete}
                  style={{
                    opacity: signUp.isPending ? 0.6 : 1,
                    cursor: signUp.isPending ? "not-allowed" : "pointer",
                  }}
                >
                  <div className={styles.div3}>
                    {signUp.isPending ? "가입 중..." : "완료!"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderStep();
}
