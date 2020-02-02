exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "1829389aldjlsajlj928392",
          make: "toyoa",
          model: "scion",
          mileage: "23892",
          clean: "no",
          salvage: "yes"
        },
        {
          vin: "1829389a2839sajlj928392",
          make: "honda",
          model: "civic",
          mileage: "23892",
          clean: "no",
          salvage: "yes"
        },
        {
          vin: "29jsljlsjsl297392739sjf",
          make: "mercedes",
          model: "benz",
          mileage: "23892",
          clean: "no",
          salvage: "yes"
        },
        {
          vin: "slhdsfjldlsjf92929",
          make: "ford",
          model: "mustang",
          mileage: "23892",
          clean: "no",
          salvage: "yes"
        },
        {
          vin: "jsldjlsjf928392973",
          make: "chevy",
          model: "scion",
          mileage: "23892",
          clean: "no",
          salvage: "yes"
        }
      ]);
    });
};
