# Node.js Base Web Project

## 5. Promise

### 5.1 Promise란?
- Callback Hell
    - Callback안에 Callback 그 안에 또 Callback ...
    <pre>
    <code>
    const product1 = models.Products.findByPk(req.params.id).then( (product) => {
        const product2 = models.Products.findByPk(req.params.id).then( (product) => {
                const product3 = models.Products.findByPk(req.params.id).then( (product) => {
                    ...
                });
        });
    });
    </code>
    </pre>

- Promise 만들기
    - resolve와 reject를 인자로 가지는 함수를 만든다.
    - 내가 원하는 시점을 resolve로 받아온다.

### 5.2 Promise Chaining, Promise all
- Promise Chaining
    - 순서 보장
- Promise all

### 5.3 async await
<pre>
<code>
const models = require('./models');
async function getProducts() {
    try{
        const product2 = await models.Products.findByPk(2);
        const product3 = await models.Products.findByPk(3);
    
        console.log(product2.dataValues);
        console.log(product3.dataValues);
    } catch(err) {
        console.log(err);
    }
}
getProducts()
</pre>
</code>
