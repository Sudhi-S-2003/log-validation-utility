const express = require("express");
const { user, All ,Enum} = require("../Controllers/Test");

const TESTROUTES = express.Router();

TESTROUTES.post("/user", user);
TESTROUTES.post("/all", All);
TESTROUTES.post("/enum",Enum );

module.exports = TESTROUTES;
