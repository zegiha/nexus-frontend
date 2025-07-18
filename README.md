# Nexus

![](https://private-user-images.githubusercontent.com/118225985/467884349-246b1f2f-a87b-4885-8c67-2a224a44b90b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI4MTg5NzcsIm5iZiI6MTc1MjgxODY3NywicGF0aCI6Ii8xMTgyMjU5ODUvNDY3ODg0MzQ5LTI0NmIxZjJmLWE4N2ItNDg4NS04YzY3LTJhMjI0YTQ0YjkwYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxOFQwNjA0MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04YzFkNzU0MDFhZGIyNjM3YTI0MDQ1MGRkY2NhOTBjZWRjYWZjNThkZDM3YTRmNDc0NTY0Yzc0Yzc4M2U3MzJlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.EsVgS9Qe97gw6kv90lBQBDxtyp0EmrnBMXNbuxc6lTY)

뉴스 기사 가독성 향상 서비스

Axios 뉴스레터를 참고하여 뉴스 기사를 읽기 쉽게 재구성해 사용자에게 더 잘 전달하는 뉴스 서비스입니다.

## 설치 및 실행

### 설치
```bash
pnpm install
```

### 개발 서버 실행
```bash
pnpm dev
```
개발 모드로 실행하며, http://localhost:3000에서 확인할 수 있습니다.

### 빌드
```bash
pnpm build
```
프로덕션용 빌드 파일을 `.next` 폴더에 생성합니다.

### 프로덕션 서버 실행
```bash
pnpm start
```

## 주요 기능

- 뉴스 기사 내용을 LLM으로 가독성 높게 재구성
- 카테고리별 뉴스 분류 및 조회
- 언론사별 뉴스 구독 및 관리
- 사용자 계정 관리 및 알림 기능
- 반응형 웹 디자인

## 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: CSS Modules
- **State Management**: TanStack Query
- **HTTP Client**: Axios
- **UI Library**: Motion (Framer Motion)
- **Package Manager**: pnpm
