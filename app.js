const express = require('express');
const mongoose = require('mongoose')

const app = express();

app.get('/', (req, res) => {
    res.send('we are at homie')
});

app.get('/posts', (req, res) => {
    res.send('we are at posts')
});

mongoose.connect('mongodb+srv://root:a6bx6vyt@rest.gapaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('connected to DB')
    })
app.listen(3001)