
exports.up = function(knex) {
  //change I want to make to schema
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.integer('VIN')
      .unique()
      .notNull();
      tbl.text('make')
      .notNull();
      tbl.text('model')
      .notNull();
      tbl.integer('mileage')
      .notNull();
      tbl.text('title')
  });
};

exports.down = function(knex) {
  //undoing that change
  return knex.schema.dropTableIfExists('cars')
};
