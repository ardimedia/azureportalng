(function () {
    'use strict';

    angular.module('sampleOld').controller('blade1', ['$scope', '$http', 'azurePortalNg.bladeArea', blade1]);

    function blade1($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm = this;

        vm.blade = {
            title: 'Blade 1',
            subTitle: 'JavaScript based',
            isCommandDocument: true,
            commandDocument: onCommandDocument,
            commandDocumentText: 'Blade 1-1',
            isNavGrid: true,
            statusbar: 'Blade 1...',
            navGrid: {
                items: [
                    { title: 'Navigation 1', bladePath: '/SampleOld/nav1/nav1.html' },
                    { title: 'Blade 2', bladePath: '/SampleOld/blade2/blade2.html' },
                    { title: '', bladePath: '' },
                    { title: 'no path', bladePath: '' },
                ]
            }
        };

        vm.blade.navGrid.navigateTo = navigateTo;

        function navigateTo(path) {
            bladeService.addBladePath(path);
        }

        function onCommandDocument() {
            bladeService.addBladePath('/SampleOld/blade11/blade11.html');
        }
    }
})();
