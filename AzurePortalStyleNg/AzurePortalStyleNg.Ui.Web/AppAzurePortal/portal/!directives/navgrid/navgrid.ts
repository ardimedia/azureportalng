/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

(function () {
    'use strict';

    angular.module('appAzurePortal').directive('navgrid', ['$window', navgrid]);

    function navgrid($window) {
        return {
            scope: { options: '=options' },
            templateUrl: '/AppAzurePortal/portal/!directives/navgrid/navgrid.html',
            link: function (scope, element, attrs, controller) {
                console.log('navgrid-scope:');
                console.log(scope);
            }
        };
    }
})();