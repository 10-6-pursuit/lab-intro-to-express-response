//Dependencies

const express = require("express");

//CONFIGURATION
const app = express()
PORT=3333

//ROUTES
app.get('/', (req, res) =>{
    res.send('Hello, world')
})

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })

  /*
app.get('/terminator', (req, res) => {
    res.send('terminator is good')
  })

  */
app.get(`/${encodeURIComponent('Steve McGarrett')}`, (req, res) => {
    res.send('Book em Danno')
})

app.get(`/${encodeURIComponent('Coach Taylor')}`, (req, res) =>{
    res.send('Hello, worldClear eyes, full hearts, cannot Lose')
})

app.get(`/${encodeURIComponent('Homer Simpson')}`, (req, res) =>{
    res.send('D Oh')
})

app.get('/Bruce%20Banner', (req, res) =>{
    res.send('Donot make me angry')
})


app.get('/JJ%20Evans', (req, res) =>{
    res.send('Dy no mite')
})

app.get('/Batman', (req, res) =>{
    res.send('To the Batman')
})

app.get('/Hannibal%20Smith', (req, res) =>{
    res.send('I Love it when a plan comes together')
})

app.get('/Fraiser', (req, res) =>{
    res.send('I am listening')
})

app.get('/Regis', (req, res) =>{
    res.send('Is that your Final Answer')
})

app.get('/terminator', (req, res) => {
    res.send('I\ll be back Hasta la vista, baby');

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

  app.get('/magic8', (req, res) => {
    res.send(magic8Responses[Math.floor(Math.random() * magic8Responses.length)-1]);
  })


//LISTEN
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})





/*

Emeril - Bam!

Steve McGarrett - Book 'em Danno!

Coach Taylor - Clear eyes, full hearts, can't Lose

Homer Simpson - D'Oh

Bruce Banner - Don't make me angry

JJ Evans - Dy-no-myte!

Batman - To the Batmobile!

Hannibal Smith - I love it when a plan comes together

Fraiser - I'm listening
*/



module.exports = app;