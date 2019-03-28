
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {name: 'pound(s) of Ground Beef'},
    {name: 'Roma Tomatoes'},
    {name: 'TSP(s) of Cumin'},
    {name: 'TSP(s) of Chili Powder'},
    {name: 'Cup(s) of Water'},
    {name: 'Cup(s) of Shredded Cheese'},
    {name: 'Tortillas'},
    {name: 'Pizza Dough'},
    {name: 'Pizza Sauce'},
    {name: 'Stick of Cream Cheese (8oz)'},
    {name: 'Can(s) of Shredded Chicken'},
    {name: 'Cup(s) of Frank\'s Hot Sauce'},
  ]);
};
