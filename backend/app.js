const express = require('express');

const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// IMPORT OUTES
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)


// ROUTES
app.get('/', (req, res) => {
    res.send('we are on home');
  });

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => 
    console.log('connected to DB !')
);




app.listen(3002);