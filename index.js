
require('dotenv').config()
const express = require('express');
const helmet = require('helmet');

const db = require('./data/dbConfig.js');
const Book = require('./data/book-model.js');

const server = express();
server.use(helmet());
server.use(express.json());

server.get('/', async (req, res) => {
    try {
        const recipes = await Book.find();
        res.status(200).json(recipes);
    }
    catch(err) {
        res.status(500).json(err);
    }
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`LISTEN ... ${port}`);
});
