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
                    { title: 'Menu 1', bladePath: '/AzurePortalNgSampleAmms/bergbahnenevent/blades/exportexcel/exportexcel.html' },
                    { title: 'Menu 2', bladePath: '/AzurePortalNgSampleAmms/bergbahnenevent/blades/exportexcel/exportexcel.html', roles: 'lgtbc-admin' },
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
