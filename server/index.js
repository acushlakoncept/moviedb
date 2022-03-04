
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const fs = require('fs');
const path = require('path');
const filePath = './data.json';
const moviesData = require(filePath);

app.prepare().then(() => {

  const server = express();
  server.use(bodyParser.json());

  server.get('/api/v1/movies', (req, res) => {
    return res.json(moviesData);
  })

  server.post('/api/v1/movies', (req, res) => {
    const movie = req.body;
    moviesData.push(movie);
    console.log(moviesData);

    const pathToFile = path.join(__dirname, filePath);
    const stringifyData = JSON.stringify(moviesData, null, 2);

    fs.writeFile(pathToFile, stringifyData, (err) => {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('Movie added successfully');
    })
  })

  server.get('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = moviesData.find(movie => movie.id === id);
    return res.json(movie);
  })

  server.patch('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params;
    return res.json({message: `Updating Movie ${id}`});
  })

  server.delete('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params;
    const movieIndex = moviesData.findIndex(movie => movie.id === id);
    moviesData.splice(movieIndex, 1);

    const pathToFile = path.join(__dirname, filePath);
    const stringifyData = JSON.stringify(moviesData, null, 2);

    fs.writeFile(pathToFile, stringifyData, (err) => {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('Movie deleted successfully');
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  })

})