
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('book_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('book_info').insert([
        {
          book_id: 1,
          author: "Dr. Seuss"
        },
        {
          book_id: 2,
          author: "Dr. Seuss"
        },
        {
          book_id: 3,
          author: "Eric Carle"
        },
        {
          book_id: 4,
          author: "Dr. Seuss"
        },
        {
          book_id: 5,
          author: "Roald Dahl"
        },
        {
          book_id: 6,
          author: "Marcus Pfister"
        },
      ]);
    });
};
