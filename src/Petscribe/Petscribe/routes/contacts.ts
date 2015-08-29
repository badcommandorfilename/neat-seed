import express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('contacts', { name: 'contacts', title: 'Petscribe' });
});

export = router;