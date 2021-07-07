
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("books").del()
    .then(function () {
      // Inserts seed entries
      return knex("books").insert([
        {id: 1, bookName: "Cat in the Hat"},
        {id: 2, bookName: "Green Eggs and Ham"},
        {id: 3, bookName: "The Very Hungry Caterpillar"},
        {id: 4, bookName: "Wocket in my Pocket"},
        {id: 5, bookName: "James and the Giant Peach"},
        {id: 6, bookName: "The Rainbow Fish"},
      ]);
    });
};
