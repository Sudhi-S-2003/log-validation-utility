const express = require("express");
const { user, All } = require("../Controllers/Test");

const TESTROUTES = express.Router();

TESTROUTES.post("/user", user);
TESTROUTES.post("/all", All);

module.exports = TESTROUTES;
