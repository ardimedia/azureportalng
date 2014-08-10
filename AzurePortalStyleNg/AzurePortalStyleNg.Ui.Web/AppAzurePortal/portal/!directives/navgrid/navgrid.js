/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
(function () {
    'use strict';

    angular.module('azurePortal').directive('navgrid', ['$window', navgrid]);

    function navgrid($window) {
        return {
            scope: { vm: '=viewModel' },
            templateUrl: '/AppAzurePortal/portal/!directives/navgrid/navgrid.html',
            link: function (scope, element, attrs, controller) {
                //console.log('navgrid-scope:');
                //console.log(scope);
            }
        };
    }
})();
//# sourceMappingURL=navgrid.js.map
