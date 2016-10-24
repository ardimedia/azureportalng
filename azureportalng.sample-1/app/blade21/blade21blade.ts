(function () {
    'use strict';

    angular.module('sample1App').directive('blade21Blade', [blade21Blade]);

    function blade21Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/azureportalng/directives/blade/blade.html',
            controller: 'blade21',
            controllerAs: 'vm',
        };
    }
})();
