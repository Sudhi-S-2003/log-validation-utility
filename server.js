const express = require("express");
const { BAPROUTES ,TESTROUTES, BPPROUTES} = require("./Routes");
const app = express();
app.use(express.json({ limit: "10mb" }))
app.use("/test",TESTROUTES)
app.use("/validate_BAP", BAPROUTES); 
app.use("/validate_BPP", BPPROUTES); 
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
