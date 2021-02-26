const express = require('express');
const router = express.Router();
// const Image = require('../models/posts')

router.get('/', async (req, res) => {
    res.sendFile('C:/Users/Workplace/Desktop/Pet projects/REST/pages/form.html')
})

module.exports = router;