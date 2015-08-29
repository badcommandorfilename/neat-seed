/// <amd-dependency path="angular" />
/// <amd-dependency path="angular-ui-bootstrap" />

'use strict';

class HomeController {
    constructor(private $scope: any) {

    }
}

var contactsApp = angular.module('homeApp', ['ui.bootstrap.dropdown']);

export = contactsApp.controller('HomeController', ['$scope', HomeController]);