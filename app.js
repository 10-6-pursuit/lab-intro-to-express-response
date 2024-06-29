const express = require("express");

const app = express();

function getRandomResponse(arr) {
    return Math.floor(Math.random() * arr.length);
  }

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


app.get('/', (request, response)=> {
    response.send("Hello, world!");
})

app.get('/termination', (request, response) => {
    response.send("I'll be back")
    // response.send("Hasta la vista, baby")
})

app.get("/Batman", (request, response) => {
    response.send("To the Batmobile!")
})

app.get("/Fraiser", (request, response) => {
    response.send("I'm listening")
})

app.get("/TonyMontana", (request, response) => {
    response.send("Say hello to my little friend!")
})
app.get("/Zeus", (request, response) => {
    response.send("Release the Kraken")
})

app.get("Frankenstein", (request, response) => {
    response.send("It's alive! it's alive")
})

app.get("/Travis/Bickle", (request, response) => {
    response.send("You talkin' to me?")
})

app.get("/Rocky", (request,response) => {
    response.send("Yo, Adrian")
})

app.get("/JackDawson", (request, response) => {
    response.send("I'm king of the world!")
})

app.get("/JimLovell", (request, response) => {
    response.send("Houston, we have a problem")
})

app.get("/RodTidwell", (request,response) => {
    response.send("Show me the money!")
})

app.get("/magic8",(request,response) => {
    const randomWord = getRandomResponse(magic8Responses)
    response.send(`<h1>${magic8Responses[randomWord]}</h1>`)
})


module.exports = app;