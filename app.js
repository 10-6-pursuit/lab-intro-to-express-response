const express = require('express')

const app = express()
const PORT =3003

app.get('/termination', (request, response) => {
    response.send("I'll be back, Hasta la vista, baby")
    // response.send("Hasta la vista, baby")

})

app.get('/fastnfurious', (request, response) => {
    response.send("You never had your car")
})

app.get('/badboys', (request, response) => {
    response.send("You know you drive almost slow enough to drive Miss Daisy")
})

app.get('/pulpfiction', (request, response) => {
    response.send("I don't remember asking you a goddamn thing")
}) 

app.get('/luckyslevin', (request, response) => {
    response.send("Bad dog")
})

app.get('/starwars', (request, response) => {
    response.send("The force is strong with this one")
})

app.get('/hulk', (request, response) => {
    response.send("SMASH")
})
app.get('/avengers', (request, response) => {
    response.send("Assemble")
})

app.get('/trainingday', (request, response) => {
    response.send("Think ya'll can do this to me")
})


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

  app.get('/magic8', (request, response) => {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
    const randomResponse = magic8Responses[randomIndex];
    response.send(randomResponse);
  });


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})



