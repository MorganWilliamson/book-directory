// Endpoint Routing
const express = require("express");

const Books = require("./books-model.js");

const router = express.Router();

// Check ID first
const validateBookId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        res.json({ message: "Can't find book with specified id. Would you like to create it?"});
    } else {
        next();
    }
};

// READ
router.get("/", async (req, res) => {
    try {
        const data = await Books.getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", validateBookId, async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Books.getById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// CREATE
router.post("/", async (req, res) => {
    try {
        const info = req.body;
        const book = await Books.createBook(info);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const changes = req.body; // Find the data that's changing
        await Books.updateBook(id, changes); // Update correct id
        const updated = await Books.getById(id);
        res.status(204).json(updated); // Return the newly updated book
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE


module.exports = router;
