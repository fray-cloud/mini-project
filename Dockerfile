# Dockerfile

# Node.js 버전 지정
FROM node:22.2.0 as build

# 작업 디렉토리 설정
WORKDIR /app

# 소스 코드 복사
COPY . .

# 필요한 패키지 설치 및 애플리케이션 빌드
RUN npm install
RUN npm run build

# Nginx 이미지 사용하여 애플리케이션 빌드 결과물을 제공
FROM nginx:latest

# Nginx 설정 파일 복사
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# 빌드된 React 애플리케이션 파일을 Nginx에 복사
COPY --from=build /app/build /usr/share/nginx/html

# 포트 노출
EXPOSE 80

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]
