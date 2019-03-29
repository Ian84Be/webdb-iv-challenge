
const db = require('./dbConfig.js');

module.exports = {
    addDish,
    getDishes,
    getDish,
    addRecipe,
    getRecipes,
}

function addDish(dish) {
    return db('dishes').insert(dish);
}
function getDishes() {
    return db('dishes');
}

function getDish(id) {
    return db.select('d.name as Dish','r.name').from('recipes as r')
    .leftJoin('dishes as d',{'r.dish_id':'d.id'})
    .where({'r.dish_id':id});
}

function addRecipe(recipe) {
    return db('recipes').insert(recipe);
}

function getRecipes() {
    return db('recipes');
}
