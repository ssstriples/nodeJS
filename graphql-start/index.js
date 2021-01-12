const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { ProvidedRequiredArgumentsOnDirectivesRule } = require('graphql/validation/rules/ProvidedRequiredArgumentsRule');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Product {
        id : ID!
        name : String
        price : Int
        description : String
    }

    type Query {
        getProduct(id : ID!) : Product
    }
`);

const products = [
    {
        id : 1,
        name : '첫번째 제품',
        price : 2000,
        description : '첫번째 제품입니다.'
    },
    {
        id : 2,
        name : '두번째 제품',
        price : 4000,
        description : '두번째 제품입니다.'
    }
]

const root = {
    getProduct : ({id}) => products.find( product => product.id === parseInt(id)),
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema : schema,
    rootValue : root,
    graphiql : true,
}));

app.listen(4000, () => {
    console.log('Running a GraphQL API Server at localhost:4000/graphql');
});