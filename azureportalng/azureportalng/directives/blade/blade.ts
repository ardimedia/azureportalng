(function () {
    'use strict';

    angular.module('azureportalng').directive('azurePortalBlade', ['$window', 'azurePortalNg.portalService', azurePortalBlade]);

    function azurePortalBlade($window: ng.IWindowService, portalService: AzurePortalNg.PortalService) {
        return {
            transclude: true,
            scope: { vm: '=vm' },
            restrict: 'E',
            templateUrl: '/azureportalng/directives/blade/blade.html',
            link: function (scope, element, attrs, controller) {
                AzurePortalNg.Debug.write('[azureportalng-debug] \'directive:azurePortalBlade.link\' called.', [this, portalService]);

                //#region the following code makes sure, that a function scope.vm.close is available

                if (scope.vm === undefined) { scope.vm = {}; }
                if (scope.vm.close === undefined) {
                    scope.vm.close = function () {
                        AzurePortalNg.Debug.write('[azureportalng-debug] \'directive:azurePortalBlade.close\' called.', [this, portalService]);
                        portalService.bladeArea.clearLastLevel();
                    }
                }

                //#endregion
            }
        };
    }
})();