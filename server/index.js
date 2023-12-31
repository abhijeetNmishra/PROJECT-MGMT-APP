const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const colors = require('colors');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 8000;
const app = express();

//connect to database
connectDB();

//just a comment
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`));