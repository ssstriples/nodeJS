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
- Query HTTP요청/응답
- Postman 설치
    - Get Request : http://localhost:4000/graphql?query={hello}
- npm i express express-graphql

### 7.3 데이터 읽기
- 변수를 사용한 query 주고 받기
#### query
<pre>
<code>
{
	getProduct( id : 2 ) {
    name
    price
  }
}
</code>
</pre>
#### result
<pre>
<code>
{
  "data": {
    "getProduct": {
      "name": "두번째 제품",
      "price": 4000
    }
  }
}
</code>
</pre>

- Postman
    - Get Request : http://localhost:4000/graphql?query={getProduct( id : 1 ) {
        name
        price
    }
}

### 7.4 데이터 쓰기
- mutation
- Postman
    - Post Content-Type application/json
    <pre>
    <code>
    {
        "query": "mutation addProduct($input: ProductInput) { addProduct(input: $input) { id, name, price} }",
        "variables": { "input" : { "name" : "네번째상품" , "price" : 3000 , "description" : "후후후" } }
    }
    </code>
    </pre>
    - response
    <pre>
    <code>
    {
        "data": {
            "addProduct": {
                "id": "4",
                "name": "네번째상품",
                "price": 3000
            }
        }
    }
    </code>
    </pre>

### 7.5 데이터 수정, 삭제
- Postman
    - Post Content-Type application/json
    <pre>
    <code>
    {
        "query": "mutation updateProduct($id: ID!, $input: ProductInput!) { updateProduct(id: $id, input: $input) { id } }",
        "variables": { "id" : 1,  "input" : { "name" : "수정상품" , "price" : 1000 , "description" : "후후후" } }
    }
    </code>
    </pre>
    - response
    <pre>
    <code>
    {
        "data": {
            "updateProduct": {
                "id": "1"
            }
        }
    }
    </code>
    </pre>
    - 삭제
    <pre>
    <code>
    {
        "query": "mutation deleteProduct($id: ID!) { deleteProduct(id: $id) }",
        "variables": { "id" : 1 }
    }
    </code>
    </pre>
    - response
    <pre>
    <code>
    {
        "data": {
            "deleteProduct": "remove success"
        }
    }
    </code>
    </pre>  


### 7.6 클라이언트 사용하기
- 