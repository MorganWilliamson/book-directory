const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Replaces bodyParser.json()

app.listen(PORT, () => console.log(`App listening on port ${PORT}. . .`));