const express = require("express");
const app = express();
const{show}=require(`./src/quoteController`)
const quotes=require(`./data/famousQuotes.json`)

app.get("/:id", (request, response) => { 

    const id=request.params.id
    response.send(show(quotes,id));
})


app.listen(3000, () => {
    console.log("Server's Running")
})