
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("books").del()
    .then(function () {
      // Inserts seed entries
      return knex("books").insert([
        {id: 1, book_name: "Cat in the Hat"},
        {id: 2, book_name: "Green Eggs and Ham"},
        {id: 3, book_name: "The Very Hungry Caterpillar"},
        {id: 4, book_name: "Wocket in my Pocket"},
        {id: 5, book_name: "James and the Giant Peach"},
        {id: 6, book_name: "The Rainbow Fish"},
      ]);
    });
};
