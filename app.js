const express = require('express');

const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.get("/terminator", (req, res) => {
    res.send("I'll be back - Hasta la vista, baby");
});

app.get("/Homer-Simpson", (req, res) => {
    res.send("D'Oh");
});

app.get("/batman", (req, res) => {
    res.send("To the Batmobile!");
});

app.get("/Gollum", (req, res) => {
    res.send("My precious");
});

app.get("/Abraham", (req, res) => {
    res.send("Oh no mom! i forgot how to code");
});

app.get("/Jim-Lovell", (req, res) => {
    res.send("Houston, we have a problem");
});

app.get("/james-bond", (req, res) => {
    res.send("the name is Bond, James Bond");
});

app.get("/tony-montana", (req, res) => {
    res.send("Say hello to my little friend");
});

app.get("/Fox-Mulder", (req, res) => {
    res.send("The truth is out there");
});

app.get("/magic8", (req, res) => {

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
    res.send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}</h1>`);

});

