# Node.js Base Web Project

## 8. AWS

### 8.1 AWS 개요
- 클라우드 호스팅
- AWS계정가입
    - https://aws.amazon.com/ko/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc
- AWS Management Console
    - EC2
    - 인스턴스

### 8.2 AWS서버 접속(Mac, Windows)
- Putty
    - https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
    - Putty, Puttygen
- SSH
    - ssh -i [pem] [user@url]

### 8.3 Nodejs 설치
- curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
- sudo apt-get install -y nodejs
- opt 하위 project 생성
    - sudo npm install -g express express-generator nodemon
    - express 치면 generate됨
    - npm install
    - npm start
- AWS 보안그룹 설정
    - 인바운드 규칙 3000 port 추가
- sudo npm install -g pm2
- pm2 start bin/www
- pm2 list
- pm2 stop 0

### 8.4 Mysql RDS
- RDS 서비스
- 데이터베이스 생성
    - 퍼블릭 액세스 가능성 : 예 (외부에서 접속할 수 있게)
- 보안 그룹 설정
    - 인바운드 편집(내IP와 인스턴스 보안그룹ID)
- 워크벤치 접속

### 8.5 소스파일 업로드
- git clone or filezila
- npm install
- .env 파일 설정
- pm2 start index.js


### 8.6 NGINX 설치 및 배포완료
- NGINX vs Apache
- sudo vi /etc/apt/sources.list
    - deb http://nginx.org/packages/ubuntu/ xenial nginx
    - deb-src http://nginx.org/packages/ubuntu/ xenial nginx
- sudo apt-get update
- sudo apt-get install nginx
- sudo service nginx start
- sudo service nginx status
- 보안 그룹 root위치 보여주기
    - 인스턴스 보안그룹
    - 보안그룹 수정 - 인바운드 편집
    - 기존 3000port지우고 규칙저장
    - 규칙추가 :  http 80 port 모두 접속할 수 있도록 수정
- nginx proxy설정
    - cd /etc/nginx/site-enabled/default파일 설정
    - proxy_pass http://127.0.0.1:3000/;
- sudo service nginx reload