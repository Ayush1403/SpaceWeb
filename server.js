const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const planets = require('./planets.json');

app.use(cors());

app.get('/planets', (req, res) => {
  res.json(planets);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});