/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

(function () {
    'use strict';

    angular.module('azurePortal').directive('azurePortalBlade', ['$window', azurePortalBlade]);

    function azurePortalBlade($window) {
        return {
            replace: true,
            scope: {
                vm: '=viewModel'
            },
            templateUrl: '/AppAzurePortal/portal/!directives/blade/blade.html',
            link: function (scope, element, attrs, controller) {
                //console.log('blade-scope:');
                //console.log(scope);
            }
        };
    }
})();