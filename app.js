const express = require("express");

const app = express();
const PORT = 3335;
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

app.get("/", (req, res) => {
    res.send("Welcome!!")
});

app.get("/terminator", (req, res) => {
    res.send("I'll be back");
    // res.send("Hasta la vista baby"); Can't have 2 responses. The first one will only show and then an error in the terminal
});


// If we try to use /tim gunn in the url, we get an error because of the space (%20)
app.get("/tim-gunn", (req, res) => {
    res.send("Make it work");
});

app.get("/emeril", (req, res) => {
    res.send("Bam!");
})

app.get("/homersimpson", (req, res) => {
    res.send("D'Oh");
});

app.get("/batman", (req, res) => {
    res.send("To the Batmobile!");
});

app.get("/zeus", (req, res) => {
    res.send("Release the Kraken");
});

app.get("/rocky", (req, res) => {
    res.send("Yp, Adrian");
});

app.get("/frankenstein", (req, res) => {
    res.send("It's alive! It's alive!");
});

app.get("/jack-dawson", (req, res) => {
    res.send("I'm king of the world!");
});

app.get("/gollum", (req, res) => {
    res.send("My precious");
});

app.get("/tony-montana", (req, res) => {
    res.send("Say hello to my little friend");
});



// Activity Magic 8 Ball

app.get("/magic8", (req, res) => {
    res.send(`<h1>${magic8Responses[(Math.floor(Math.random()* magic8Responses.length))]}</h1>`);
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});