const express = require("express");
const { BPPsearch, BPPSelect, BPPInit, BPPConfirm, BPPStatus } = require("../Controllers/BPP");

const BPPROUTES = express.Router();

BPPROUTES.post("/search", BPPsearch);
BPPROUTES.post("/select", BPPSelect);
BPPROUTES.post("/init", BPPInit);
BPPROUTES.post("/confirm", BPPConfirm);
BPPROUTES.post("/status", BPPStatus);


module.exports = BPPROUTES;
