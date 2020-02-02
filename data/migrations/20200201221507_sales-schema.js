exports.up = function(knex) {
  return knex.schema.createTable("sales", tbl => {
    tbl.increments();
    tbl
      .integer("car_id")
      .unsigned()
      .index()
      .references("id")
      .inTable("cars");
  });
  tbl.integer("total-cars");
  tbl.integer("sold-cars");
  tbl.integer("avail-cars");
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};

// table.bigInteger('AddressId').unsigned().index().references('id').inTable('Address')
