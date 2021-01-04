# Node.js Base Web Project

## 4. Sequelize

### 4.1 Sequelize란?
- ORM(Object-Relational Mapping)
- Nodejs로 **mysql 또는 postgresql DB를 제어**할 수 있게 해줌.
- CRUD
    - C : 입력
    - R : 조회
    - U : 수정
    - D : 삭제

### 4.2 dotenv 설정
- 환경설정 변수들을 dotenv파일에 만들어 놓음.
- DB 접속
    - DB ID/PW

- npm install dotenv : package install
<pre>
<code>
.env file

DATABASE = "데이터베이스명"
DB_USER = "root"
DB_PASSWORD = "1002329"
DB_HOST = "DB호스트"

XXX.js file내에서 env file 변수 접근 방법cd 
process.env.DB_USER
</code>
</pre>

### 4.3 Database 생성
- DB 접속 : mysql -u root -p
- DB 생성
<pre>
<code>
mysql> create database exercise;
Query OK, 1 row affected (0.08 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| exercise           |
| information_schema |
| lectureevaluation  |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.05 sec)
</code>
</pre>

- Sequalizer에서 DB에 접속해서 Control하기 위한 설정 추가
    - ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1002329';

### 4.4 DB 접속(Mysql)
- Package 설치
    - sequelize : npm install sequelize@4.42.0
    - mysql2 : npm install mysql2

