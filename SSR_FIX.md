# SSR 호환성 수정 사항

## 문제

Next.js의 SSR 환경에서 localStorage에 직접 접근하여 다음과 같은 오류가 발생:

```
ReferenceError: localStorage is not defined
```

## 해결 방법

모든 localStorage 접근을 클라이언트 환경에서만 수행하도록 수정:

### 1. AuthDebugger 컴포넌트 수정

**파일**: `shared/components/debug/AuthDebugger.tsx`

**변경사항**:

- `useEffect`와 `useState`를 사용하여 컴포넌트 마운트 후에만 localStorage 접근
- `typeof window !== "undefined"` 체크 추가
- 컴포넌트가 마운트된 후에만 렌더링하도록 `isMounted` 상태 추가

### 2. AuthContext 수정

**파일**: `shared/contexts/AuthContext.tsx`

**변경사항**:

- 모든 localStorage 접근에 `typeof window !== "undefined"` 체크 추가
- 서버 환경에서는 localStorage 접근을 건너뛰고 로그만 출력
- login/logout 함수에서도 클라이언트 환경 체크 추가

### 3. Axios 클라이언트 수정

**파일**: `shared/api/client.ts`

**변경사항**:

- Request interceptor에서 localStorage 접근 시 클라이언트 환경 체크
- Response interceptor의 토큰 갱신 로직에서도 클라이언트 환경 체크
- 토큰 갱신 실패 시 localStorage 정리에도 클라이언트 환경 체크 추가

## 수정 후 동작

1. **서버 환경 (SSR)**: localStorage 접근을 건너뛰고 기본값 사용
2. **클라이언트 환경**: 정상적으로 localStorage에서 토큰과 사용자 정보 읽기/쓰기
3. **Hydration**: 클라이언트에서 컴포넌트가 마운트된 후 localStorage 기반으로 상태 업데이트

## 테스트 방법

```bash
npm run dev
```

오류 없이 서버가 시작되고, 브라우저에서 페이지 로드 시:

1. 콘솔에 SSR 관련 오류가 나타나지 않음
2. AuthDebugger가 페이지 우상단에 정상 표시
3. 로그인/로그아웃 기능이 정상 동작
4. 페이지 새로고침 후에도 인증 상태 유지

## 추가 고려사항

- 초기 로딩 시 잠깐의 깜빡임이 있을 수 있음 (SSR과 클라이언트 상태 동기화)
- 필요시 `next-themes`와 같은 라이브러리의 패턴을 참고하여 더 정교한 SSR 처리 가능
