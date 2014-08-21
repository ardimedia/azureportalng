(function () {
    'use strict';

    angular.module('azureportalng').directive('navGrid', ['$window', navGrid]);

    function navGrid($window) {
        return {
            scope: { vm: '=viewModel' },
            templateUrl: '/AzurePortalNg/portal/!directives/navgrid/navgrid.html',
            link: function (scope, element, attrs, controller) {
                //console.log('navgrid-scope:');
                //console.log(scope);
            }
        };
    }
})();