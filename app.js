const express = require("express");
require("express-async-errors");
require("dotenv").config();

const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

app.use(express.static("./public"));
app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000

const start = async () => {
    try {
        app.listen(port, console.log(`The server is listening on port ${port}..`));
    } catch (err) {
        console.log(err);
    }
};

start();