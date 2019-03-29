
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
        tbl.increments();
        tbl.string('name').notNullable().unique();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name').notNullable().unique();
    })
    .createTable('shop_list', tbl => {
        tbl.increments();
        tbl.integer('in_1').unsigned()
            .references('id').inTable('ingredients')
            .onUpdate('CASCADE').onDelete('RESTRICT');
        tbl.integer('amt_1').unsigned();
    })
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name').notNullable().unique();
        tbl.string('howto').notNullable();
        tbl.integer('dish_id').unsigned()
            .references('id').inTable('dishes')
            .onUpdate('CASCADE').onDelete('RESTRICT');
        tbl.integer('shop_list').unsigned()
            .references('id').inTable('shop_list')
            .onUpdate('CASCADE').onDelete('RESTRICT');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('shop_list')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('dishes');
};
