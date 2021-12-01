const express = require('express');

const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());


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




app.listen(3001);