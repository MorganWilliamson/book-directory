// Database Model
const express = require("express");

const BooksRouter = require("./books/books-router.js");

const server = express();

server.use(express.json());
server.use("/api/books", BooksRouter);

module.exports = server;