const express = require("express");
const helmet = require("helmet");

const server = express();
const carRouter = require("../cars/carRouter.js");

server.use(helmet());
server.use(express.json());

server.use("/api/cars", carRouter);

server.get("/", (req, res) => {
  res.send(`Cars API Server`);
});

module.exports = server;
