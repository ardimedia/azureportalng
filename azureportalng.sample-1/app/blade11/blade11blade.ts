(function () {
    'use strict';

    angular.module('sample1App').directive('blade11Blade', [blade11Blade]);

    function blade11Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/azureportalng/directives/blade/blade.html',
            controller: 'blade11',
            controllerAs: 'vm',
        };
    }
})();
