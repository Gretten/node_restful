const express = require('express');
const mongoose = require('mongoose');
const { connect } = require('./routes/posts');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const multer  = require("multer");
require('dotenv/config')

app.use(bodyParser.json());
app.use(cors());

// import routes
const postsRoute = require('./routes/posts');
const formRoute = require('./routes/form');

app.use('/posts', postsRoute);
app.use('/form', formRoute);        

app.get('/', 
    (req, res) => {
        res.send('We are at home!')
    }
);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('connected to DB')
    })
app.listen(3001)