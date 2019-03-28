
exports.seed = function(knex, Promise) {
      return knex('shop_list').insert([
        {in_1:1, amt_1:1},
      ]);
};
