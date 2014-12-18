(function () {
    'use strict';

    angular.module('azureportalng').directive('azurePortalBlade', ['$window', 'bladeService', azurePortalBlade]);

    function azurePortalBlade($window, bladeService) {
        return {
            replace: true,
            transclude: true,
            //scope: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            link: function (scope, element, attrs, controller) {
                scope.bladeClose = function () {
                    bladeService.clearLastLevel();
                }
            }
        };
    }
})();