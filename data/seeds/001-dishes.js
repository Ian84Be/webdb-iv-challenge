
exports.seed = function(knex, Promise) {
      return knex('dishes').insert([
        {name: 'tacos'},
        {name: 'pizza'},
      ]);
};
