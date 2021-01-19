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
-

### 8.5 소스파일 업로드
### 8.6 NGINX 설치 및 배포완료
- NGINX vs Apache
