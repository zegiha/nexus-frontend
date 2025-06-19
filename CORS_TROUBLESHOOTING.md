# 🚨 CORS 오류 해결 가이드

## 문제 상황

로그인 및 회원가입이 모든 요청에서 실패하며, 다음과 같은 에러가 발생:

```
Access to XMLHttpRequest at 'http://52.231.201.28:4000/auth/sign/in'
from origin 'http://25.9.125.227:3000' has been blocked by CORS policy:
Response to preflight request doesn't pass access control check:
The 'Access-Control-Allow-Origin' header has a value 'http://localhost:3000'
that is not equal to the supplied origin.
```

## 원인 분석

1. **백엔드 CORS 설정**: 서버(`52.231.201.28:4000`)가 `http://localhost:3000`만 허용
2. **프론트엔드 실행 주소**: 실제로는 `http://25.9.125.227:3000`에서 실행됨
3. **CORS 정책**: 브라우저가 다른 origin 간의 요청을 차단

## 즉시 해결 방법

### 1. 개발 서버를 localhost에서 실행

**수정된 package.json**:

```json
{
  "scripts": {
    "dev": "next dev --turbopack --hostname localhost"
  }
}
```

**실행 명령**:

```bash
npm run dev
```

**접속 주소**:

- ❌ `http://25.9.125.227:3000` (CORS 오류)
- ✅ `http://localhost:3000` (정상 동작)

### 2. 브라우저에서 localhost로 접속

1. 기존 탭을 모두 닫기
2. 새 탭에서 `http://localhost:3000` 접속
3. 로그인/회원가입 테스트

## 장기 해결 방법

### 1. 백엔드 CORS 설정 수정 요청

백엔드 개발자에게 다음 중 하나 요청:

**Option A: 특정 IP 추가**

```javascript
// Express.js 예시
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://25.9.125.227:3000", // 추가
      // 팀원들의 IP도 추가 가능
    ],
  })
);
```

**Option B: 개발 환경에서 모든 origin 허용**

```javascript
// 개발 환경에서만
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development" ? "*" : ["http://localhost:3000"],
  })
);
```

### 2. 프론트엔드에서 프록시 설정 (대안)

**next.config.ts 수정**:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://52.231.201.28:4000/:path*",
      },
    ];
  },
};

export default nextConfig;
```

**API 클라이언트 수정**:

```typescript
// shared/api/client.ts
const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "/api" // 프록시 사용
    : "http://52.231.201.28:4000";
```

## 확인 방법

### 1. CORS 오류 해결 확인

- 브라우저 콘솔에서 CORS 관련 에러가 사라져야 함
- 네트워크 탭에서 API 요청이 성공적으로 전송되어야 함

### 2. 로그인 테스트

```
1. http://localhost:3000/auth/login 접속
2. 유효한 이메일/비밀번호 입력
3. 로그인 버튼 클릭
4. 콘솔에서 다음 로그 확인:
   - "API 응답 원본: { ... }"
   - "AuthContext login 호출됨: { ... }"
   - AuthDebugger에서 Token: ✅ 표시
```

## 네트워크 디버깅

### Chrome DevTools 확인 사항

1. **F12 → Network 탭**
2. **로그인 요청 클릭**
3. **Response Headers 확인**:
   ```
   Access-Control-Allow-Origin: http://localhost:3000
   Access-Control-Allow-Methods: GET, POST, PUT, DELETE
   Access-Control-Allow-Headers: Content-Type, Authorization
   ```

### 성공적인 요청 예시

```
Status: 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Content-Type: application/json

{
  "accessToken": "...",
  "refreshToken": "...",
  "user": { ... }
}
```

## 추가 참고사항

- CORS는 브라우저의 보안 정책이므로 서버에서만 해결 가능
- Postman이나 curl에서는 CORS 제한이 없어 정상 동작할 수 있음
- 프로덕션 환경에서는 정확한 도메인만 허용하는 것이 보안상 권장됨

이 가이드를 따라하면 CORS 문제를 해결하고 정상적으로 로그인/회원가입을 테스트할 수 있습니다!
