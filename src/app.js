const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

const { errorHandler } = require("./common/helpers/errorHandle");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/api/v1", require("./app/v1/routes"));

app.use((error, __, next) => {
    next(error);
});

app.use((error, req, res, ____) => {
    const resultError = errorHandler(error);
    return res.status(resultError?.response.status).json(resultError?.response);
});

module.exports = app;
