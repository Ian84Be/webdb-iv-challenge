
exports.seed = function(knex, Promise) {
      return knex('recipes').insert([
        {
          name:'Dos Tacos', 
          howto:'this is how you cook Dos Tacos', 
          dish_id:1,
          shop_list:1,
        },
      ]);
};
