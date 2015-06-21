(function () {
    'use strict';
    angular.module('sampleapp')
        .controller('blade2', ['$scope', '$http', 'bladeService', blade2]);
    function blade2($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm = this;
        vm.blade = {
            title: 'Blade-2',
            subTitle: 'First Blade',
            isCommandDocument: true,
            commandDocument: dummy,
            isNavGrid: true,
            statusbar: 'blade1-bar',
            navGrid: {
                items: [
                    { title: 'Blade 2-1', bladePath: '/Sample1/blade21/blade21.html' },
                    { title: 'Blade 1', bladePath: '/Sample1/blade1/blade1.html' },
                    { title: '', bladePath: '' },
                    { title: 'no path', bladePath: '' },
                ]
            }
        };
        vm.blade.navGrid.navigateTo = navigateTo;
        function navigateTo(path) {
            bladeService.clearLevel(2);
            bladeService.addBladePath(path);
        }
        function dummy() { }
    }
})();
//# sourceMappingURL=blade2.js.map