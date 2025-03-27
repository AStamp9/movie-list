const express = require('express')
const app = express()
const knex = require('knex')(require('./knexfile.js')["development"]) 
port = 8080;

app.get('/', (req, res) => {
    res.send('homepage is up and running')
  })

//   app.post('/', (req, res) => {
//     res.send('POST request to homepage')
//   })

// app.put('/', (req, res) => {
//     res.send('PUT request to homepage')
//   })

// app.delete('/', (req, res) => {
//     res.send('DELETE request to homepage')
//   })


app.listen(port, () =>
    console.log(`app is running on port ${port}`)
)