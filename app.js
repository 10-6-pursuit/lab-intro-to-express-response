const express = require("express");
console.log(express);
const app = express();

app.get("/", (request, response) => {
    response.send("Here's looking at you, kid!!!");
  });

  app.get("/Emeril", (request, response) => {
    response.send("Here's looking at you, kid!!!");
  });

  app.get("/CoachTaylor", (request, response) => {
    response.send("Clear eyes, full hearts, can't Lose!!!!");
  });

  app.get("/Batman", (request, response) => {
    response.send("To the BatMobile!!!");
  });

  app.get("/FoxMulder", (request, response) => { //even if the route name is in all caps, lower or camel, the response is same.
    response.send("The truth is out there");
  });

  app.get("/terminator", (req, res) => {
    res.send("Ill be back Hasta la vista, baby");
   
  });

  
  app.get("/magic8", (req, res) => {
    res.send(`<h1>${magic8Answer}</h1>`);
        
    const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]});



  app.listen(3033, () => { // listen to any incoming http requests to localhost:3003
    console.log("Listening for all incoming requests on port 3033");
  });

  module.exports = app;
   