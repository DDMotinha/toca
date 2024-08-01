// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const sys = require('./sys')
app.use('/sys', sys)


sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
