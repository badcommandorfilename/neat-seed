import express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('home', { name: 'home', title: 'Petscribe' });
});

export = router;