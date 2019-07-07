const express = require('express');
const helmet = require('helmet');
const moment = require('moment');

const app = express();

app.use(helmet());

//
app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send(
    moment().format('MMMM Do YYYY, h:mm:ss a')
  );
});

module.exports = app;
