const express = require('express')
const app = express();
const knex = require('knex')(require('./knexfile.js')["development"]) 
port = 8080;
const cors = require('cors')

app.use(cors())
app.use(express.json());

app.listen(port, () =>
    console.log(`app is running on port ${port}`)
)

app.get('/', (req, res) => {
    
res.send('homepage is up and running')
})

  app.get('/titles', function(req, res) {
    knex('titles')
      .select('*')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  });

  app.get('/titles/:id', (req, res)=>{
    let getId = req.params.id
    knex('titles')
    
    .select('*')
    .where({'id': parseInt(getId)})
    .then(titles => {
        res.json(titles)
    })
})

  app.post('/titles', (req, res) => {
    const {id, title} = req.body;

    knex('titles')
        .insert({id, title})
        .then(function() {
            res.json({success: true, message: 'ok'})
        })
  })


  app.patch('/titles/:id', (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    knex('titles')
        .where({id})
        .update({title})
        .then(function() {
            res.json({success: true, message: 'ok'})
        })
  })
  
// app.put('/', (req, res) => {
//     res.send('PUT request to homepage')
//   })

// app.delete('/', (req, res) => {
//     res.send('DELETE request to homepage')
//   })
