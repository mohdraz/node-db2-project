exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("VIN", 128)
      .unique()
      .notNullable();
    tbl.text("make", 128).notNullable();
    tbl.text("model", 128).notNullable();
    tbl.integer("mileage").notNullable();
    tbl.boolean("clean");
    tbl.boolean("salvage");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
