const express = require("express");
const app = express();

app.get("/terminator", (request, response) => { 
    response.send("I'll be back...");
})

app.listen(3000, () => {
    console.log("Server's Running")
})