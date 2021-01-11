# Node.js Base Web Project

## 7. GraphQL

### 7.1 GraphQL
- 페이스북에서 만든 API로 쿼리를 호출할 수 있게함.
- 하나의 endpoint
    - /graphql
    <pre>
    <code>
    {
        product( id: 1 ){
            id
            price
            name
        },
        cart( user_id : 10 ){
            thumbnail,
            price
        }
    }
    </code>
    </pre>
- REST API
    - GET /products (제품을 가져오고싶다)
    - GET /products/1
    - GET /checkout
    - GET /cart (장바구니를 가져오고 싶다)
- Backend를 거치지않고 **Frontend에서 자유롭게 모델 호출**
- 작성법
    - 스키마 작성 (데이터 구조)
    - url로 호출할 수 있게 작성
- npm install graphql
- 타입
    - Int : 부호가 있는 32비트 정수.
    - Float : 부호가 있는 부동소수점 값.
    - String : UTF-8 문자열.
    - Boolean : true 또는 false
    
### 7.2 Express 연동

### 7.3 데이터 추가

### 7.4 데이터 수정, 삭제

### 클라이언트 사용하기