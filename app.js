const express = require('express');
const mongoose = require('mongoose');
const { connect } = require('./routes/posts');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const multer  = require("multer");
require('dotenv/config')

app.use(bodyParser.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + - Date.now() + file.originalname)
    }
})

const upload = multer({
    storage,
}).single('image')

// import routes
const postsRoute = require('./routes/posts');
const formRoute = require('./routes/form');
const { path } = require('dotenv/lib/env-options');

app.use('/posts', postsRoute);
app.use('/form', formRoute);
app.post("/send", urlencodedParser, (req, res)=> {
    upload(req, res, (err) => {
        if(err) {
            res.render('err')
        } else {
            console.log(req.file)
        }
    })
})
            

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