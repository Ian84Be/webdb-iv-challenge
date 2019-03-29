
const db = require('./data/dbConfig.js');
const Book = require('./data/book-model.js');

const router = require('express').Router();

router.post('/', async (req,res) => {
    if (!req.body.name) {
        res.status(400).json({error:'missing name'});
    } else {
        try {
            const result = await Book.addDish(req.body);
            res.status(201).json(result);
        }
        catch(err) {
            res.status(500).json(err);
        }
    }
});

router.get('/', async (req, res) => {
    try {
        const result = await Book.getDishes();
        res.status(200).json(result);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const result = await Book.getDishes();
        res.status(200).json(result);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await Book.getDish(req.params.id);
        res.status(200).json(result);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
