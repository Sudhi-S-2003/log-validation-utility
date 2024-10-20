const express = require("express");
const { BAPsearch, BAPSelect, BAPInit, BAPConfirm, BAPStatus } = require("../Controllers/BAP");

const BAPROUTES = express.Router();

BAPROUTES.post("/search", BAPsearch);
BAPROUTES.post("/select", BAPSelect);
BAPROUTES.post("/init", BAPInit);
BAPROUTES.post("/confirm", BAPConfirm);
BAPROUTES.post("/status", BAPStatus);

module.exports = BAPROUTES;
