const express = require("express");
const app = express();

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
function randomMagicRes(array) {
  const randomIdx = Math.floor(Math.random() * array.length);
  return array[randomIdx];
}
app.get('/', (request, response) => {
  response.status(418).send('Hello, world!')
})
app.get("/emeril", (request, response) => {
  response.send("Bam!");
  response.send("Boom!");
});
app.get("/steve-mcGarrett", (request, response) => {
  response.send("Book 'em Danno!");
});
app.get("/hannibal-smith", (req, res) => {
  res.send("I love it when a plan comes together");
});
app.get("/frasier", (req, res) => {
  res.send("I'm listening");
});
app.get("/regis", (req, res) => {
  res.send("Is that your final answer?");
});
app.get("/borg", (req, res) => {
  res.send("Resistance is futile");
});
app.get("/fox-mulder", (req, res) => {
  res.send("The truth is out there");
});
app.get("/harry-callahan", (req, res) => {
  res.send("Go ahead, make my day");
});
app.get("/travis-bickle", (req, res) => {
  res.send("You talkin' to me?");
});
app.get("/jack-dawson", (req, res) => {
  res.send("I'm king of the world!");
});
app.get("/magic8", (req, res) => {
  res.send(`<h1>${randomMagicRes(magic8Responses)}</h1>`);
});

module.exports = app