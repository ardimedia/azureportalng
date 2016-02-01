(function () {
    'use strict';
    angular.module('sampleTsApp').directive('list1Blade', [list1Blade]);
    function list1Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'list1',
            controllerAs: 'vm',
        };
    }
})();
//# sourceMappingURL=list1blade.js.map