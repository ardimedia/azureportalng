/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

(function () {
    'use strict';

    angular.module('app.azureportal').directive('azureportalShell', ['$window', azureportalShell]);

    function azureportalShell($window) {
        return {
            scope: { vm: '=options' },
            templateUrl: '/App.AzurePortal/modules/portal/shell/shell.html',
        };
    }
})();