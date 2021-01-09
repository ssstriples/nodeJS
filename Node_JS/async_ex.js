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