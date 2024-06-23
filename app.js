const express = require("express");
const app = express();

// Root route
app.get("/", (request, response) => response.status(200).send("Hello, world!"));

// Catchphrases routes
const catchphrases = {
  "terminator": "I'll be back",
  "terminator2": "Hasta la vista, baby",
  "tim-gunn": "Make it work",
  "emeril": "Bam!",
  "steve-mcgarrett": "Book 'em Danno!",
  "coach-taylor": "Clear eyes, full hearts, can't Lose",
  "homer-simpson": "D'Oh",
  "bruce-banner": "Don't make me angry",
  "jj-evans": "Dy-no-myte!",
  "batman": "To the Batmobile!",
  "hannibal-smith": "I love it when a plan comes together",
  "frasier": "I'm listening",
};

Object.keys(catchphrases).forEach((route) => {
  app.get(`/${route}`, (request, response) => {
    response.send(catchphrases[route]);
  });
});

// Magic 8 Ball route
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
  "Very doubtful",
];

app.get("/magic8", (require, response) => {
  const randomResponse = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  response.send(`<h1>${randomResponse}</h1>`);
});

module.exports = app;
