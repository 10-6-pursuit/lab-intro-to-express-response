const express = require("express");
const app = express();
const{show}=require(`./src/quoteController`)
const quotes=require(`./data/famousQuotes.json`)
const {magic8Responses}=require(`./data/magic8Data`)


app.get("/magic8", (request, response) => { 
   let randomNumber=Math.floor(Math.random()*magic8Responses.length)
   console.log(magic8Responses)
    response.send(`<h1>${magic8Responses[randomNumber]}</h1>`);
})
app.get("/:id", (request, response) => { 

    const id=request.params.id
    response.send(show(quotes,id));
})



app.listen(3000, () => {
    console.log("Server's Running")
})
