(function () {
    'use strict';
    angular.module('sampleapp')
        .controller('blade2', ['$scope', '$http', 'bladeService', blade2]);
    function blade2($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm = this;
        vm.blade = {
            title: 'Blade 2',
            subTitle: 'First Blade',
            isCommandDocument: true,
            commandDocument: dummy,
            isNavGrid: true,
            statusbar: 'blade1-bar',
            navGrid: {
                items: [
                    { title: 'blade22', bladePath: '/Sample1/blade22/blade22.html' },
                    { title: 'blade1', bladePath: '/Sample1/blade1/blade1.html' },
                    { title: '', bladePath: '' },
                    { title: 'no path', bladePath: '' },
                ]
            }
        };
        vm.blade.navGrid.navigateTo = navigateTo;
        function navigateTo(id) {
            bladeService.addBladePath(id);
        }
        function dummy() { }
    }
})();
//# sourceMappingURL=blade2.js.map