(function () {
    'use strict';

    angular.module('azureportalng').directive('azurePortalBlade', ['$window', 'azurePortalNg.bladeArea', azurePortalBlade]);

    function azurePortalBlade($window, bladeArea) {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            link: function (scope, element, attrs, controller) {
                scope.bladeClose = function () {
                    bladeArea.clearLastLevel();
                }
            }
        };
    }
})();