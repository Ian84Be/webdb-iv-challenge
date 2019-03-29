
require('dotenv').config()
const express = require('express');
const helmet = require('helmet');

const db = require('./data/dbConfig.js');

const dishesRouter = require('./dishes-router.js');
const recipesRouter = require('./recipes-router.js');

const server = express();
server.use(helmet());
server.use(express.json());

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`LISTEN ... ${port}`);
});
