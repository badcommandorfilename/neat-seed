/// <amd-dependency path="angular" />
/// <amd-dependency path="angular-ui-bootstrap" />

'use strict';

import Product = require("../models/product");

class ProductsController {
    constructor(private $scope: any) {
        $scope.quantity = { adult: 1, young: 0 };
        var available: Array<Product> = [
            new Product(1, "Hay"),
            new Product(2, "Pellets"),
            new Product(3, "Hay & Pellets"),
            new Product(4, "Starter Pack"),
        ];

        $scope.products = {
            available: available,
            selectd: 0
        }
    }
}

var productsApp: ng.IModule = angular.module('productsApp', ['ui.bootstrap.dropdown']);

export = productsApp.controller('ProductsController', ['$scope', ProductsController]);
