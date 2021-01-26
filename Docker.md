# Node.js Base Web Project

## 9. Docker

### 9.1 Docker 개요
- 도커(Docker)는 전세계적으로 사용되고있는 컨테이너 가상화 플랫폼이다.
- VM웨어 -> 호스트 OS위에 가상 OS를 올린다.
- 도커 -> 호스트 OS 위(X), 호스트 OS와 시스템 자원을 공유 VM웨어보다 빠르다.

- 용어
    - 도커 이미지 : 우분투 + nodejs + express등 실행할 서비스들을 패키지화 해놓음
    - 컨테이너 : 이미지를 토대로 서비스를 띄운다. 여러 개의 컨테이너가 작동함

- 내가 이미지를 만들고 dockerhub를 통해 github처럼 pull, push 가능
    - https://hub.docker.com/

- docker image
    - 이미지를 불러오고, 컨테이너를 하나 띄워본다.
- 이미지 검색 방법
    - dockerhub 사이트
    - docker search 명령 : docker search ubuntu
- 이미지 가져오기
    - docker pull ubuntu:latest
- 가져온 이미지 확인
    - docker images
- docker run ubuntu:latest /bin/echo 'Hello World'
- 이미지 삭제
    - docker rmi [이미지명]
    - ex) docker rmi nginx

- 리눅스 centos에 접속
    - docker run -it centos /bin/bash

- Nginx를 가져와서 웹서버를 띄워보기
    - docker run -d -p 3000:80 --name webserver nginx
    - -d옵션 백그라운드, -p옵션 port
    - docker ps
    - docker stop [CONTAINER ID]
- 현재 띄운 프로세스 다 종료
    - docker stop $(docker ps -a -q)

- 명령어
    1. docker run : 컨테이너 생성 및 구동
    2. docker start : 컨테이너 구동
    3. docker stop : 컨테이너 중지
    4. docker rm : 중지된 컨테이너 삭제
---
#### [사전 준비]
- AWS 접속
- 보안그룹 설정
    - 3000 Port 개방
- 설치
    - curl -s https://get.docker.com/ | sudo sh
- 권한
    - sudo usermod -aG docker $USER
- 설치 확인
    - docker version
---

### 9.2 Dockerfile로 이미지 만들기
- Dockerfile만들기
- 이미지 만들기
    - docker build -t test .
- 실행
    - docker run -d -p 80:80 test
- 컨테이너 접속
    - docker exec -it [CONTAINER ID] /bin/bash

### 9.3 Docker-compose
- 보통 서비스
    - Nginx, node, mysql 컨테이너를 띄운다
    - link옵션으로 연결

- 그밖에 붙여넣을 파일이 많을 시
- 컨테이너간의 연결관계를 설정하는 파일
- python기반 yml확장자 사용
- docker-compose 설치
    - https://docs.docker.com/compose/install/
- 권한 부여
    - sudo chmod +x /usr/local/bin/docker-compose
- docker-compose version

- docker-node-mysql 작업후
    - docker-compose build
    - docker-compose up
- 내리기
    - docker-compose down

### 9.4 컨테이너 순서
- Mysql 컨테이너 -> NodeJS 컨테이너 띄우고 싶을때
- netcat설치
    - 해당 Port가 떠있는지 check하는 shellscript작성
- nodejs 컨테이너에서 nc 명령어 확인
    - docker exec -it docker-node-mysql_node_1 /bin/bash
    - nc db_url 3306

### 9.5 서비스 배포
- mysql migration
- nodejs 접속
- 서비스 실행