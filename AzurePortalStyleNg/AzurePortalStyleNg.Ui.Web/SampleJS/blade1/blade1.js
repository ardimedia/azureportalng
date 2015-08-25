(function () {
    'use strict';

    angular.module('sampleJsApp').controller('blade1', ['$scope', '$http', 'azurePortalNg.bladeArea', blade1]);

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
                    { title: 'Navigation 1', bladePath: '/SampleJs/nav1/nav1.html' },
                    { title: 'Blade 2', bladePath: '/SampleJs/blade2/blade2.html' },
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
            bladeService.addBladePath('/SampleJs/blade11/blade11.html');
        }
    }
})();
