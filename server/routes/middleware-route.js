const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const compression = require("compression");
const middleware = express.Router();

middleware.use(cors());
middleware.use(morgan("dev"));
middleware.use(compression());
middleware.use(bodyParser.json());
middleware.use(express.urlencoded({ extended: true }));

let rootDirectory = path.join(__dirname, "../../");
middleware.use(express.static(rootDirectory + "dist"));

module.exports = middleware;