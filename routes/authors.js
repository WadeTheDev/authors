const express = require('express');
const authors = require('../authors.json')
const app = express();

app.get('/id', (req, res) =>{
    const { id } = req.params
    const author = authors.find(author => author.id === Number(id))

    if (author) {
        res.json(`${author.name}, ${author.nationality}`)
    }else {
        res.status(404).send('Not found')
      }
})

app.get('/:id/books', (req, res) =>{
    const { id } = req.params
    const author = authors.find(author => author.id === Number(id))

    if (author) {
        res.json(author.books.join(', '))
    }else{
        res.status(404).send('Not Found')
    }
})

module.exports = app