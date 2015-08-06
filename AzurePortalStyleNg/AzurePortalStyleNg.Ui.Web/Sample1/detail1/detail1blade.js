(function () {
    'use strict';
    angular.module('sampleapp').directive('detail1Blade', [detail1Blade]);
    function detail1Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'detail1',
            controllerAs: 'vm',
        };
    }
})();
//# sourceMappingURL=detail1blade.js.map