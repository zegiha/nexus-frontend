# 1단계: 빌드 이미지
FROM node:22.14-bullseye-slim AS builder

# 환경 설정
ENV NODE_ENV=production

# 시스템 패키지 설치
RUN apt-get update && apt-get install -y \
  curl \
  && rm -rf /var/lib/apt/lists/*

# 작업 디렉토리
WORKDIR /app

# pnpm 설치
RUN corepack enable && corepack prepare pnpm@latest --activate

# 종속성 설치
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 소스 코드 복사
COPY . .

COPY .env .env

# Next.js 빌드
RUN pnpm build

# 2단계: 런타임 이미지
FROM node:22.14-bullseye-slim AS runner

ENV NODE_ENV=production
WORKDIR /app

# pnpm 설치
RUN corepack enable && corepack prepare pnpm@latest --activate

# 종속성 설치 (프로덕션 전용)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

# 빌드 결과 및 필요한 파일 복사
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/app ./app
COPY --from=builder /app/shared ./shared
COPY --from=builder /app/entity ./entity
COPY --from=builder /app/widgets ./widgets
COPY --from=builder /app/prev_entity ./prev_entity
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/.env ./.env

# 포트 노출
EXPOSE 3000

# 실행 명령
CMD ["pnpm", "start"]
