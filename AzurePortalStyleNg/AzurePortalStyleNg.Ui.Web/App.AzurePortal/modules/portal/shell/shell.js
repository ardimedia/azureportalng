/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
(function () {
    'use strict';

    angular.module('app').directive('portalShell', ['$window', portalShell]);

    function portalShell($window) {
        var directive = {
            templateUrl: '/App.AzurePortal/modules/portal/shell/shell.html'
        };
        return directive;
    }
})();
//# sourceMappingURL=shell.js.map
