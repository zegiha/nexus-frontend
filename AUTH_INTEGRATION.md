# Auth 백엔드 연동 완료 ✅

## 🚀 구현된 기능

### 1. **환경 설정**

- ✅ `.env.local` 파일에 API URL 설정
- ✅ Axios 인터셉터로 자동 토큰 관리
- ✅ TanStack Query(React Query) 설정

### 2. **Auth API 연동**

- ✅ 이메일 인증 요청 (`POST /auth/email/verify/request`)
- ✅ 이메일 인증 (`POST /auth/email/verify`)
- ✅ 회원가입 (`POST /auth/sign/up`)
- ✅ 로그인 (`POST /auth/sign/in`)
- ✅ 토큰 갱신 (`GET /auth/refresh`)

### 3. **상태 관리**

- ✅ AuthContext로 전역 인증 상태 관리
- ✅ 로컬 스토리지에 토큰 자동 저장
- ✅ 자동 토큰 갱신 로직

### 4. **UI 연동**

- ✅ 로그인 페이지 API 연동
- ✅ 회원가입 페이지 API 연동 (이메일 인증 포함)
- ✅ 로딩 상태 표시
- ✅ 에러 처리

## 🔧 사용 방법

### 개발 서버 실행

\`\`\`bash
npm run dev
\`\`\`

### API 재생성 (Orval 사용시)

\`\`\`bash
npm run generate:api
\`\`\`

## 📁 주요 파일

### API 관련

- `shared/api/client.ts` - Axios 클라이언트 설정
- `entity/auth/api/index.ts` - Auth API 훅들
- `entity/types/auth.ts` - 타입 정의

### 상태 관리

- `shared/contexts/AuthContext.tsx` - 인증 컨텍스트

### 페이지

- `widgets/auth/loginPage/ui/LoginPage.tsx` - 로그인 페이지
- `widgets/auth/registerPage/ui/RegisterPage.tsx` - 회원가입 페이지

## 🌐 API 엔드포인트

베이스 URL: `http://52.231.201.28:4000`

### Auth 엔드포인트

- `POST /auth/email/verify/request` - 이메일 인증 요청
- `POST /auth/email/verify` - 이메일 인증
- `POST /auth/sign/up` - 회원가입
- `POST /auth/sign/in` - 로그인
- `GET /auth/refresh` - 토큰 갱신

## 🧪 테스트 방법

1. **개발 서버 실행**
   \`\`\`bash
   npm run dev
   \`\`\`

2. **회원가입 테스트**

   - `/auth/register` 접속
   - 이메일 입력 → 인증 이메일 발송
   - 4자리 인증번호 입력 → 이메일 인증
   - 비밀번호 입력 → 회원가입 완료 (이름은 이메일에서 자동 추출)

3. **로그인 테스트**
   - `/auth/login` 접속
   - 이메일, 비밀번호 입력 → 로그인 완료

## 🛠️ 추가 기능

### 자동 토큰 갱신

- Access Token 만료 시 자동으로 Refresh Token 사용
- 실패 시 자동 로그인 페이지 리다이렉트

### 글로벌 에러 처리

- API 에러 응답 메시지 자동 표시
- 네트워크 에러 처리

### React Query DevTools

- 개발 환경에서 쿼리 상태 확인 가능
- 오른쪽 하단 React Query 아이콘 클릭

## 📝 다음 단계

1. **User API 연동** (계정 정보 수정, 구독 관리)
2. **Article API 연동** (뉴스 조회, 카테고리)
3. **Company API 연동** (언론사 정보)
4. **보안 강화** (CSRF, XSS 방지)
5. **성능 최적화** (캐싱, 무한 스크롤)
