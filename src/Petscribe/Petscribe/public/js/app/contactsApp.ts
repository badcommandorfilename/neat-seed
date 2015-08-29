/// <amd-dependency path="angular" />
/// <amd-dependency path="angular-ui-bootstrap" />

'use strict';

class ContactsController {
    constructor(private $scope: any) {
        var emailString : string = "petscribe@gmail.com";

        $scope.email = "Petscribe";
        $scope.emailLink = "#";

        $scope.showAddress = function () {
            $scope.email = emailString;
            $scope.emailLink = emailString;
        }
    }
}

var contactsApp = angular.module('contactsApp', ['ui.bootstrap.dropdown']);

export = contactsApp.controller('ContactsController', ['$scope', ContactsController]);