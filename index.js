const app = require("./src/app");

const server = app.listen(5000, () => {
    console.info(`💸 Api backend start with http://localhost:${5000} 🔥`);
});

process.on("SIGINT", () => {
    server.close(() => console.log(`Exit Server Express`));
});
