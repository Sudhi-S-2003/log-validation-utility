const express = require("express");
const { BPPsearch } = require("../Controllers/BPP");

const BPPROUTES = express.Router();

BPPROUTES.post("/search", BPPsearch);

module.exports = BPPROUTES;
