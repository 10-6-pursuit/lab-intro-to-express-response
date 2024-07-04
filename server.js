const app = require("./app.js");

const PORT = 3333

//Listen to the server
app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`)
})
