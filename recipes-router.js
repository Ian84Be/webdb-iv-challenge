
const db = require('./data/dbConfig.js');
const Book = require('./data/book-model.js');

const router = require('express').Router();

router.post('/', async (req,res) => {
    if (!req.body) {
        res.status(400).json({error:'missing required fields'});
    } else {
        try {
            const result = await Book.addRecipe(req.body);
            res.status(201).json(result);
        }
        catch(err) {
            res.status(500).json(err);
        }
    }
});

router.get('/', async (req,res) => {
    try {
        const result = await Book.getRecipes();
        res.status(200).json(result);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
