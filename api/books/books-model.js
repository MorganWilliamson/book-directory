const db = require("../../data/db-config");

module.exports = {
    getAll() {
        return db("books");
    },
    getById(id) {
        return db("books").where({ id }).first(); // Two books can't have the same ID
    }, 
    createBook(book) {
        return db("books").insert(book)
            .then(([id]) => {
                return db("books").where("id", id).first();
            });
    },
    updateBook(id, book) {
        return db("books").where("id", id).update(book);
    },
    deleteBook(id) {
        return db("books").where("id", id).del();
    }
};
