/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
(function () {
    'use strict';

    angular.module('appAzurePortal').directive('azurePortalHome', ['$window', azurePortalHome]);

    function azurePortalHome($window) {
        return {
            scope: { vm: '=options' },
            templateUrl: '/AppAzurePortal/portal/!directives/home/home.html',
            link: function (scope, element, attrs, controller) {
                console.log('home-scope:');
                console.log(scope);
            }
        };
    }
})();
//# sourceMappingURL=home.js.map
