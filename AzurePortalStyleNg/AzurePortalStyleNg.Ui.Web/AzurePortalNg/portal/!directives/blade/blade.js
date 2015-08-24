(function () {
    'use strict';
    angular.module('azureportalng').directive('azurePortalBlade', ['$window', 'azurePortalNg.portalService', azurePortalBlade]);
    function azurePortalBlade($window, portalService) {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            link: function (scope, element, attrs, controller) {
                AzurePortalNg.Debug.write('[azureportalng-debug] \'directive:azurePortalBlade.link\' called.', [this, portalService]);
                if (scope.vm === undefined) {
                    scope.vm = {};
                }
                if (scope.vm.bladeClose === undefined) {
                    scope.vm.bladeClose = function () {
                        AzurePortalNg.Debug.write('[azureportalng-debug] \'directive:azurePortalBlade.bladeClose\' called.', [this, portalService]);
                        portalService.bladeArea.clearLastLevel();
                    };
                }
            }
        };
    }
})();
