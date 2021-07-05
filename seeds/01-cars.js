
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 4, make: "Tesla", model: "super", mileage: "10,000", title: "yes" },
        { VIN: 5, make: "Subaru", model: "outback", mileage: "10,000", title: "yes"},
        { VIN: 6, make: "Ford", model: "mustang", mileage: "10,000", title: "yes"}
      ]);
    });
};
