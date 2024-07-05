// DEPENDENCIES
const app = require('./app.js')

// CONFIGURATION
const PORT = 3033

// LISTEN
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})
