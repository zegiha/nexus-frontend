# 🔍 로그인 인증 상태 디버깅 가이드

## ✅ SSR 호환성 문제 해결됨

**이전 문제**: Next.js SSR 환경에서 localStorage 접근으로 인한 오류
**해결됨**: 모든 localStorage 접근을 클라이언트 환경에서만 수행하도록 수정

## 🛠️ 추가된 디버깅 기능

### 1. 실시간 Auth 상태 표시

- 우상단에 **Auth Debug** 패널 표시 (개발 환경에서만)
- SSR 호환성 개선으로 서버/클라이언트 모두에서 안전하게 동작
- 실시간으로 다음 정보 확인 가능:
  - Mounted 상태 (클라이언트에서 마운트됨)
  - Loading 상태
  - Authenticated 상태
  - User 정보
  - Token 존재 여부

### 2. 콘솔 로그 추가

- **AuthContext**: 초기화, 로그인, 사용자 상태 업데이트 (서버/클라이언트 구분)
- **Header**: 인증 상태 변화 감지
- **로그인 API**: API 응답 원본 및 변환된 데이터
- **로그인 페이지**: 로그인 성공 시 데이터 흐름

## 🧪 디버깅 단계

### 1. 개발 서버 실행

```bash
npm run dev
```

### 2. 브라우저 개발자 도구 열기

- F12 → Console 탭

### 3. 초기 로드 확인

- 페이지 로드 시 콘솔에서 다음 확인:
  ```
  AuthContext 초기화: 서버 환경에서 실행됨
  AuthContext 초기화: { token: false, userData: false, isClient: true }
  ```

### 4. 로그인 테스트

1. `/auth/login` 페이지 접속
2. 이메일, 비밀번호 입력
3. 로그인 버튼 클릭
4. **콘솔 로그 확인**:
   ```
   API 응답 원본: { ... }
   변환된 AuthResponse: { ... }
   로그인 성공 데이터: { ... }
   AuthContext login 호출됨: { ... }
   사용자 상태 업데이트됨: { ... }
   Header - 인증 상태: { isAuthenticated: true, user: { ... } }
   ```

### 4. 우상단 Debug 패널 확인

- **Authenticated**: ✅ 로 변경되어야 함
- **User**: 사용자 이메일 표시되어야 함
- **Token**: ✅ 로 표시되어야 함

### 5. 헤더 account 버튼 테스트

- 계정 아이콘 클릭
- `/account` 페이지로 이동하는지 확인

## 🔧 가능한 문제들과 해결책

### 🚨 문제 0: CORS 정책 위반 (중요!)

**증상**:

- 로그인/회원가입 요청이 모두 실패
- 콘솔에 다음 에러 표시:

```
Access to XMLHttpRequest at 'http://52.231.201.28:4000/...' from origin 'http://25.9.125.227:3000' has been blocked by CORS policy
```

**원인**:

- 백엔드 서버가 CORS 설정에서 `http://localhost:3000`만 허용
- 프론트엔드가 다른 IP 주소(예: `http://25.9.125.227:3000`)에서 실행됨

**해결 방법**:

1. **즉시 해결**: 개발 서버를 localhost에서 실행
   ```bash
   npm run dev
   # 이제 package.json에서 --hostname localhost 옵션이 추가됨
   ```
2. **브라우저에서 http://localhost:3000 접속**
3. **프록시 해결**: Next.js 프록시 설정으로 CORS 우회 (✅ 적용됨)
   - API 호출이 `/api/...`로 프록시되어 CORS 문제 없음
   - 어떤 주소에서 접속해도 정상 동작
4. **장기 해결**: 백엔드 개발자에게 CORS 설정에 현재 IP 추가 요청

### 문제 1: User가 "unknown"으로 표시되는 경우

**증상**: AuthDebugger에서 `User: unknown` 표시
**원인**:

- API 응답에서 사용자 정보가 제대로 추출되지 않음
- `name` 필드가 비어있거나 없음

**해결됨**:

- API 응답 변환 시 `name` 필드를 이메일에서 자동 추출
- AuthContext에서 사용자 정보 보정 로직 추가

### 문제 2: Token이 ❌로 표시되는 경우

**증상**: AuthDebugger에서 `Token: ❌` 표시
**원인**:

- useSignIn에서 localStorage 저장과 AuthContext.login이 중복 처리
- 토큰 저장 타이밍 문제

**해결됨**:

- useSignIn에서 localStorage 저장 로직 제거
- AuthContext.login에서만 토큰 저장 처리
- AuthDebugger에서 실시간 토큰 상태 감시 추가

### 문제 3: API 응답 구조 불일치

**증상**: `API 응답 원본`에서 예상과 다른 필드명
**해결**: 코드에서 여러 필드명 대안 처리 추가됨

```typescript
accessToken: data.accessToken || data.access_token || data.token;
name: data.name || data.username || data.email?.split("@")[0] || "User";
```

### 문제 4: AuthContext 상태 업데이트 실패

**증상**: `AuthContext login 호출됨` 로그는 있지만 `Header - 인증 상태`가 false
**해결**: useAuth 훅이 제대로 동작하는지 확인

### 문제 5: 토큰 저장 실패

**증상**: Debug 패널에서 Token이 ❌
**해결**: localStorage 접근 권한 확인

### 문제 6: 페이지 새로고침 시 상태 손실

**증상**: 새로고침하면 로그인 상태 사라짐
**해결**: AuthContext 초기화 로직 확인

## 📋 체크리스트

- [ ] **프록시 설정 적용**: 개발 서버 재시작 후 `/api/...` 경로로 API 호출 확인
- [ ] **CORS 확인**: 콘솔에 CORS 관련 에러가 없는지 확인 (프록시로 우회됨)
- [ ] **네트워크 에러 없음**: 네트워크 탭에서 API 요청이 성공하는지 확인
- [ ] 로그인 시 `API 응답 원본` 로그 확인
- [ ] `AuthContext login 호출됨` 로그 확인
- [ ] Debug 패널에서 Authenticated ✅ 확인
- [ ] Debug 패널에서 User 정보 확인
- [ ] Debug 패널에서 Token ✅ 확인
- [ ] Header에서 `인증 상태: true` 로그 확인
- [ ] 계정 버튼 클릭 시 `/account` 이동 확인

## 🔍 추가 확인사항

### localStorage 확인

브라우저 개발자 도구 → Application → Local Storage:

- `accessToken`: 토큰 값 존재
- `refreshToken`: 리프레시 토큰 존재
- `userData`: 사용자 JSON 데이터 존재

### 네트워크 탭 확인

- 로그인 API 요청/응답 확인
- 응답 Status: 200
- 응답 Body: 토큰과 사용자 정보 포함

이 디버깅 과정을 통해 정확한 문제점을 파악할 수 있습니다!
