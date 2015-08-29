/// <amd-dependency path="angular" />
/// <amd-dependency path="angular-ui-bootstrap" />

'use strict';

class NavbarDirective implements ng.IDirective {
    constructor(private $scope: any) {
        $scope.isCollapsed = false;
    }

    public restrict = 'AE';
    public scope = {
        ngModel: "="
    };

    public link($scope: ng.IScope, element: JQuery, attributes: ng.IAttributes) {
        
    }
}

var navbarApp = angular.module('navbarApp', []);

export  = navbarApp.directive('collapseNavbar', ['$scope', NavbarDirective]);

