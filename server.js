const express = require("express");
const { BAPROUTES ,TESTROUTES} = require("./Routes");
const app = express();
app.use(express.json());
app.use("/test",TESTROUTES)
app.use("/validate_BAP", BAPROUTES); 

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
