const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');
const app = express();

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Query{
        hello: String
    }
`)

// The root provides a resolver function for each API endpoint
const root = {
    hello: ()=>{
        return 'Hello World'
    }
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(5000,()=>{
    console.log('Server is running.')
})