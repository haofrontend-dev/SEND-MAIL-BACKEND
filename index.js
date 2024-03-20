const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

const { errorHandler } = require("./src/common/helpers/errorHandle");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.get('/', (req, res) => {
    return res.status(200).json({
        ok: true,
        message: 'Hello world'
    })
})

app.use("/api/v1", require("./src/app/v1/routes"));

app.use((error, __, next) => {
    next(error);
});

app.use((error, req, res, ____) => {
    const resultError = errorHandler(error);
    return res.status(resultError?.response.status).json(resultError?.response);
});

app.listen(5000, () => {
    console.info(`💸 Api backend start with http://localhost:${5000} 🔥`);
});

module.exports = app;
