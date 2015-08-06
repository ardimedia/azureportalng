(function () {
    'use strict';
    angular.module('sampleapp').directive('blade21Blade', [blade21Blade]);
    function blade21Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'blade21',
            controllerAs: 'vm',
        };
    }
})();
