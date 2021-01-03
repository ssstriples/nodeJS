# Node.js Base Web Project

## 2. Node.js 기초

### 2.1 nodejs란
- 웹브라우저에서 쓰이는 자바스크립트를 서버에서 사용가능(자바스크립트 문법 서버에서 사용가능)
- V8(크롬에 탑재된 자바스크립트 엔진)으로 인해 자바스크립트 사용가능

- 설치 : https://nodejs.org/en/download/
    - node -v : 노드버전 확인 v14.15.3
    - npm -v : npm버전 확인 6.14.9

- 에디터 : VSCode 사용, WebStorm, Atom 등

### 2.2 모듈 패턴
- 내보낼땐 module.exports 변수
- 불러올떈 require 파일명

### 2.3 npm
- 다른 사람이 만들어놓은 모듈을 사용
- npm init
- npm install **express**
- npm install **uuid4**
    <pre>
    <code>
    const uuid4 = require('uuid4'); 
    console.log(uuid4())
    </code>
    </pre>
- Script 추가
    - npm **start**
    - npm run **dev**
    <pre>
    <code>
    "scripts": {
        "start" : "node index.js",
        "dev" : "node index.js"
    },
    ...
    "dependencies": {
        "express": "^4.17.1",
        "uuid4": "^2.0.2"
    }
    </code>
    </pre>

---

## 3. Express
### 3.1 express 시작
- 왜 Express를 사용해야 하는가?
    - 웹서비스 관점
    - 프레임워크 선정시 고려해야될 점

- Express를 사용하지 않고 웹서버 띄우기
    - 서버<->Client 웹서버 요청/응답 구조
    <pre>
    <code>
    const http = require('http');   //내장모듈

    http.createServer( (request, response) => {  
        response.writeHead(200, {'Content-Type' : 'text/plain'});
        response.write('Hello Server');
        response.end();
    }).listen(3000);    // port 3000
    </code>
    </pre>
- http 상태코드

|상태코드|설명|
|:---:|:---:|
|1XX|조건부응답|
|2XX|응답성공|
|3XX|리다이렉션|
|4XX|요청오류 (ex 404 Not Found)|
|5XX|서버오류|

- Express를 사용 웹서버 
    <pre>
    <code>
    const express = require('express');

    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
        res.send('hello express');
    });

    app.get('/portfolio', (req, res) => {
        res.send('portfolio get');
    });

    app.listen(port, () => {
        console.log('Express listening on port', port);
    });
    </code>
    </pre>

- nodemon 
    - 서버를 재기동하지 않더라도 변경점 자동 반영
    - npm install -g nodemon

### 3.2 Routing
- routes directory
- admin, contacts js파일 생성
- index에서 참조 및 사용
<pre>
<code>
const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

...

app.use('/admin', admin);
app.use('/contacts', contacts);
</code>
</pre>

### 3.3 View Engine - Nunjucks
- View Engine이란?
    - Controler단에서 읽어온 정보를 가지고 HTML등 View로 뿌려줌
- npm install nunjucks

### 3.4 템플릿 상속
- 기본이 되는 틀의 내용을 상속
- products.html extends base.html

### 3.5 미들웨어
- npm install morgan
    - 터미널에서 logging가능한 기능
- 로그인, 관리자 여부 등 라우팅 전 처리 필요할 때 사용
<pre>
<code>
function loginRequired(req, res, next) {
    if(로그인이 되어있지 않으면) {
        res.redirect(로그인창으로)
    } else {
        next()
    }
}
...
router.get('/products', loginRequired, (req, res) => {

    //res.send('admin products');
    res.render('admin/products.html', {
        message : '<p1>태그가 출력됩니다.</p1>',
        online : 'express'
    })
})
</code>
</pre>

### 3.6 form(body-parser)
- HTML Form을 통해 data 송/수신
- REST API
    - GET /users => 사용자 정보
    - POST /users => 사용자 추가
    - GET /users/(ID) => 사용자 한 명 정보
    - POS /users/(ID) => 사용자 한 명 수정
    - DELETE /users/(ID) => 사용자 한 명 삭제

### 3.7 정적파일


### 3.8 Global View Variable


### 3.9 404, 500 error handling


### 3.10 nunjucks macro



### 3.11 Express 권장 구조