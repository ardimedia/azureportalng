﻿(function () {
    'use strict';

    angular.module('sampleapp').controller('blade1', ['$scope', '$http', 'bladeService', blade1]);

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
                    { title: 'Navigation 1', bladePath: '/Sample1/nav1/nav1.html' },
                    { title: 'Blade 2', bladePath: '/Sample1/blade2/blade2.html' },
                    { title: '', bladePath: '' },
                    { title: 'no path', bladePath: '' },
                ]
            }
        };

        vm.blade.navGrid.navigateTo = navigateTo;

        function navigateTo(path: string) {
            bladeService.addBladePath(path);
        }

        function onCommandDocument() {
            bladeService.addBladePath('/Sample1/blade11/blade11.html');
        }
    }
})();
