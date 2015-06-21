(function () {
    'use strict';
    angular.module('sampleapp')
        .controller('blade21', ['$scope', '$http', 'bladeService', blade21]);
    function blade21($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm = this;
        vm.blade = {
            title: 'Blade 2-1',
            subTitle: 'Second Blade',
            isCommandDocument: true,
            commandDocument: dummy,
            isNavGrid: true,
            statusbar: 'status bar of Blade 2-1',
            navGrid: {
                items: [
                    { title: 'Menu 1', bladePath: '/Sample1/nav1/nav1.html' },
                    { title: 'Menu 2', bladePath: '/Sample1/blade2/blade2.html' },
                    { title: '', bladePath: '' },
                    { title: 'no path', bladePath: '' },
                ]
            }
        };
        vm.blade.navGrid.navigateTo = navigateTo;
        function navigateTo(path) {
            bladeService.addBladePath(path);
        }
        function dummy() { }
    }
})();
//# sourceMappingURL=blade21.js.map