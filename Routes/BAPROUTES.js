const express = require("express");
const { BAPsearch } = require("../Controllers/BAP");

const BAPROUTES = express.Router();

BAPROUTES.post("/search", BAPsearch);

module.exports = BAPROUTES;
