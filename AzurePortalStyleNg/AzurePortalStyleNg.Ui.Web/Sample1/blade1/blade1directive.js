(function () {
    'use strict';
    angular.module('sampleapp').directive('sample1Blade1Blade', ['$window', 'bladeService', sample1Blade1Blade]);
    function sample1Blade1Blade($window, bladeService) {
        console.log('sample1Blade1Blade');
        return {
            replace: true,
            transclude: true,
            templateUrl: '/Sample1/blade1/blade1.html',
            controller: 'blade1',
            controllerAs: 'vm',
            link: function (scope, element, attrs, controller) {
                scope.bladeClose = function () {
                    bladeService.clearLastLevel();
                };
            }
        };
    }
})();
//# sourceMappingURL=blade1directive.js.map