
exports.up = function(knex) {
  return knex.schema
    .createTable("books", tbl => {
        tbl.increments();
        tbl.text("book_name", 128)
            .unique()
            .notNullable();
    })
    .createTable("book-info", tbl => {
        tbl.increments();
        tbl.text("author")
            .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("book-info")
    .dropTableIfExists("books");
};
