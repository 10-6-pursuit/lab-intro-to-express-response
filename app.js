const express = require("express");

const app = express();
const PORT = 3333

//Magic 8 Array

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
]

//Main Route
app.get("/", (req, res) => {
  res.send("Intro to express response")
})

//Routes based on characters and their famous catch phrases
app.get("/BruceBanner", (req, res) => {
  res.send("Don't make me angry")
});

app.get("/Batman", (req, res) => {
  res.send("I'm Batman!")
});

app.get("/Terminator", (req, res) => {
  res.send("Hasta la vista, baby!")
});

app.get("/JamesBond", (req, res) => {
  res.send("Bond. James Bond")
});

app.get("/MartyMcFly", (req, res) => {
  res.send("Back to the Future: Great Scott!")
});

app.get("/Dorothy", (req, res) => {
  res.send("There's no place like home.")
});

app.get("/Scarface", (req, res) => {
  res.send("Say hello to my little friend!")
});

app.get("/ForrestGump", (req, res) => {
  res.send("Life is like a box of chocolates!")
});

app.get("/Yoda", (req, res) => {
  res.send("Do or do not.")
});

//Magic 8 Route
app.get("/magic8", (req, res) => {
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  const randomAnswer = magic8Responses[randomIndex]
  res.send(`<h1>${randomAnswer}</h1>`);
})

//Listen to the server
app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`)
})