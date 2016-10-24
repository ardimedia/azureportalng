(function () {
    'use strict';

    angular.module('sample1App').directive('detail1Blade', [detail1Blade]);

    function detail1Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/azureportalng/directives/blade/blade.html',
            controller: 'detail1',
            controllerAs: 'vm',
        };
    }
})();
