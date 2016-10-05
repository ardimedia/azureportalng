(function () {
    'use strict';

    angular.module('sample1App').directive('blade2Blade', [blade2Blade]);

    function blade2Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'blade2',
            controllerAs: 'vm',
        };
    }
})();
