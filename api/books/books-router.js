// Endpoint Routing
const express = require("express");

const Books = require("./books-model.js");

const router = express.Router();

// READ
router.get("/", (req, res) => {
    Books.find()
        .then(books => {
            res.status(200).json(books);
        })
        .catch(() => {
            res.status(500).json({ message: "Failed to GET books."});
        });
});

// CREATE

// UPDATE

// DELETE


module.exports = router;
