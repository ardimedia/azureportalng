/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
(function () {
    'use strict';

    angular.module('appAzurePortal').directive('azurePortalBlade', ['$window', azurePortalBlade]);

    function azurePortalBlade($window) {
        return {
            replace: true,
            scope: { vm: '=options' },
            templateUrl: '/AppAzurePortal/portal/!directives/blade/blade.html',
            link: function (scope, element, attrs, controller) {
                //console.log(scope);
            }
        };
    }
})();
//# sourceMappingURL=blade.js.map
