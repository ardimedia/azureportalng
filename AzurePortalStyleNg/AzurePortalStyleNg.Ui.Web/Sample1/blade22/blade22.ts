(function () {
    'use strict';

    angular.module('sampleapp')
        .controller('blade22', ['$scope', '$http', 'bladeService', blade22]);

    function blade22($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm = this;

        vm.blade = {
            title: 'Blade 22',
            subTitle: 'Second Blade',
            isCommandDocument: true,
            commandDocument: dummy,
            isNavGrid: true,
            statusbar: 'blade22-bar',
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
