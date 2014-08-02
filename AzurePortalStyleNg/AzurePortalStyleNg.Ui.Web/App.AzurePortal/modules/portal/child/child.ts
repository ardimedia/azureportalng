/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

(function () {
    'use strict';

    angular.module('app.azureportal').directive('azureportalChild', ['$window', azureportalChild]);

    function azureportalChild($window) {
        return {
            replace: true,
            scope: { vm: '=options' },
            templateUrl: '/App.AzurePortal/modules/portal/child/child.html',
        };
    }
})();