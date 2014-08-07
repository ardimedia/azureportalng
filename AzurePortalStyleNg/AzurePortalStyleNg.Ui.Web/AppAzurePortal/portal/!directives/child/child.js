/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
(function () {
    'use strict';

    angular.module('appAzurePortal').directive('azurePortalChild', ['$window', azurePortalChild]);

    function azurePortalChild($window) {
        return {
            replace: true,
            scope: { vm: '=options' },
            templateUrl: '/AppAzurePortal/portal/!directives/child/child.html'
        };
    }
})();
//# sourceMappingURL=child.js.map
