const express = require("express");
const app = express();
const router = require("./templates/routers");
const serverPort = process.env.PORT || 4000;
const cors = require("cors");

app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
app.use("/", router);

app.listen(serverPort, () => console.log(`serwer work on port: ${serverPort}`));
