'use strict';

require.config({
    paths: {
        angular: '/include/angular/angular',
        'angular-animate': '/include/angular/angular-animate',
        'angular-route': '/include/angular/angular-route',
        'angular-resource': '/include/angular/angular-resource',
        'angular-ui-bootstrap': '/include/angular-ui-bootstrap/ui-bootstrap'
    },
    
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-animate': {
            deps: ['angular'],
            exports: 'angular-animate'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'angular-resource': {
            deps: ['angular'],
            exports: 'angular-resource'
        },
        'angular-ui-bootstrap': {
            deps: ['angular'],
            exports: 'angular-ui-bootstrap'
        }
    }
});

window.name = "NG_DEFER_BOOTSTRAP";

require([
    'angular',
    './app/' + window.appName
], function (angular, app) {
    angular.bootstrap(document, [app.name]);
});