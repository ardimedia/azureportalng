/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
(function () {
    'use strict';

    angular.module('appAzurePortal').directive('azurePortalChild', ['$window', azurePortalChild]);

    function azurePortalChild($window) {
        return {
            replace: true,
            scope: { vm: '=options' },
            templateUrl: '/AppAzurePortal/portal/!directives/child/child.html',
            link: function (scope, element, attrs, controller) {
                console.log('azurePortalChild');
            }
        };
    }
})();
//# sourceMappingURL=child.js.map
