
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('book-info').del()
    .then(function () {
      // Inserts seed entries
      return knex('book-info').insert([
        {
          id: 1,
          author: "Dr. Seuss"
        },
        {
          id: 2,
          author: "Dr. Seuss"
        },
        {
          id: 3,
          author: "Eric Carle"
        },
        {
          id: 4,
          author: "Dr. Seuss"
        },
        {
          id: 5,
          author: "Roald Dahl"
        },
        {
          id: 6,
          author: "Marcus Pfister"
        },
      ]);
    });
};
