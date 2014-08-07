/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
(function () {
    'use strict';

    angular.module('appAzurePortal').directive('azurePortalShell', ['$window', azurePortalShell]);

    function azurePortalShell($window) {
        return {
            scope: { vm: '=options' },
            templateUrl: '/AppAzurePortal/portal/!directives/shell/shell.html'
        };
    }
})();
//# sourceMappingURL=shell.js.map
