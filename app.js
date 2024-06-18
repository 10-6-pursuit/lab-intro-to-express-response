const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
    // res.send('Hasta la vista, baby')
});

app.get("/Homer-Simpson", (req, res) => {
    res.send("D'Oh")
});

app.get("/Bruce_Banner", (req, res) => {
    res.send("Don't make me angry")
});

app.get("/Batman", (req, res) => {
    res.send("To the Batmobile!")
});

app.get("/JJEvans", (req, res) => {
    res.send("Dy-no-myte!")
});

app.get("/T-Lynch", (req, res) => {
    res.send("I'm just here so I don't get fined")
});

app.get("/Yousseff", (req, res) => {
    res.send("Does that make sense?")
});

app.get("/Zeus", (req, res) => {
    res.send("Release the Kraken")
});

app.get("/Tony_Montana", (req, res) => {
    res.send("Say hello to my little friend")
});

app.get("/Jack-Dawson", (req, res) => {
    res.send("Im king of the world!")
});

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
});