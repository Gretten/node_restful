const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false});
const multer  = require("multer");
// const Image = require('../models/posts')

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + - Date.now() + file.originalname)
    }
})

const upload = multer({
    storage,
}).single('image')

// const Image = require('../models/posts')

router.get('/', async (req, res) => {
    res.sendFile('C:/Users/Workplace/Desktop/Pet projects/REST/pages/form.html')
})

router.post("/", urlencodedParser, (req, res) => {
    upload(req, res, (err) => {
        if(err) {
            res.render('err')
        } else {
            console.log(req.file)
        }
    })
})


module.exports = router;