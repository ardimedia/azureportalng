(function () {
    'use strict';

    angular.module('azureportalng').directive('nav', ['$window', nav]);

    function nav($window) {
        return {
            scope: { vm: '=viewModel' },
            templateUrl: '/azureportalng/directives/nav/nav.html',
            link: function (scope, element, attrs, controller) {
                angular.forEach(scope.vm.navItems, function (item) {
                    // Set some default values, depending on existing values
                    if (item.isVisible == undefined) { item.isVisible = true; }
                    if (item.title == undefined || item.title == '') { item.style = { cursor: 'default' }; }
                    if (item.bladePath == undefined || item.bladePath == '') { item.style = { cursor: 'default' }; }
                });
            }
        };
    }
})();