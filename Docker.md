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
- 