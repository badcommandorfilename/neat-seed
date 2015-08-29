import express = require('express');
import db = require('../db');
import Product = require("public/js/models/product");

var router = express.Router();

var Products = db.Model.extend({ tableName: "products" });

/* GET api */
router.get('/products', function (req, res) {

    var a = function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result.rows);
        }
    }

    var items = new Products().fetch().then(
        function (rows) {
            a(null, rows);
        }).catch(function (err) {
            console.error(err);
            a(err, []);
        });
});

export = router;