/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

(function () {
    'use strict';

    angular.module('app').directive('portalChild', ['$window', portalChild]);

    function portalChild($window) {
        var directive = {
            replace: true,
            templateUrl: '/App.AzurePortal/modules/portal/child/child.html',
        };
        return directive;
    }
})();