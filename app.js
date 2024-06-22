const express = require('express')

const app = express()
const PORT = 5678

function cb(text) {
  return (req, res) => {
    res.send(text)
  }
}

app.get("/", (req, res) => {
  res.send("Test")
})

// routes
app.get('/terminator', (req, res) => {
  res.send("I'll be back")
  // res.send("Hasta la vista, baby") // only one response per request
})
app.get('/tim-gunn', cb("Make it work"))
app.get('/emeril', cb("Bam!"))
app.get('/steve-mcgarrett', cb("Book 'em Danno!"))
app.get('/coach-taylor', cb("Clear eyes, full hearts, can't Lose"))
app.get('/homer-simpson', cb("D'Oh"))
app.get('/bruce-banner', cb("Don't make me angry"))
app.get('/jj-evans', cb("Dy-no-mite!"))
app.get('/batman', cb("To the Batmobile!"))

// magic 8 ball

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
let prevIndex = -Infinity
function getRandomIndex(list) {
  return Math.floor(Math.random() * magic8Responses.length)
}

app.get("/magic8", (req, res) => {
  let randomIndex = getRandomIndex(magic8Responses)
  while (prevIndex === randomIndex) {
    randomIndex = getRandomIndex(magic8Responses)
  }
  prevIndex = randomIndex
  res.send(`<h1>${magic8Responses[randomIndex]}</h1>`)
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

// finish the test section of the notes. https://github.com/AntCannon/lab-intro-to-express-response