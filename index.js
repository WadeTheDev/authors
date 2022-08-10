const authors = require('./authors.json')

const express = require('express');
const app = express();
const port = 5000
const authorsRoutes = require('./routes/authors')

app.use('/authors', authorsRoutes)

app.get('/', (req, res) => {
    res.send('Authors API')
  })


app.listen(port, () => {
        console.log('hello')
        })