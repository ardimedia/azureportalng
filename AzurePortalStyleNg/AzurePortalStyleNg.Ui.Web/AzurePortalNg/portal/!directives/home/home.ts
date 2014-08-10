/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

(function () {
    'use strict';

    angular.module('azureportalng').directive('azurePortalHome', ['$window', '$interpolate', azurePortalHome]);

    function azurePortalHome($window, $interpolate) {
        return {
            //scope: { vm: '=options' },
            scope: { vm: '=options' },
            //controller: "@",
            //name: "controllerName",
            //controllerAs: "controllerName",
            templateUrl: '/AzurePortalNg/portal/!directives/home/home.html',
            link: function (scope, element, attrs, controller) {
                //console.log('home-scope:');
                //console.log(scope);
            }
        };
    }
})();