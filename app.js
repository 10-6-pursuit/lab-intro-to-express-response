const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

// Terminator routes
app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

app.get("/terminator2", (req, res) => {
  res.send("Hasta la vista, baby");
});

// Catchphrases routes
const catchphrases = {
  "tim-gunn": "Make it work",
  emeril: "Bam!",
  "steve-mcgarrett": "Book 'em Danno!",
  "coach-taylor": "Clear eyes, full hearts, can't Lose",
  "homer-simpson": "D'Oh",
  "bruce-banner": "Don't make me angry",
  "jj-evans": "Dy-no-myte!",
  batman: "To the Batmobile!",
  "hannibal-smith": "I love it when a plan comes together",
  frasier: "I'm listening",
};

Object.keys(catchphrases).forEach((route) => {
  app.get(`/${route}`, (req, res) => {
    res.send(catchphrases[route]);
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

app.get("/magic8", (req, res) => {
  const randomResponse =
    magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  res.send(`<h1>${randomResponse}</h1>`);
});

module.exports = app;
