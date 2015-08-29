import express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('products', { name: 'products', title: 'Petscribe' });
});

export = router;