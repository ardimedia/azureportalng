(function () {
    'use strict';

    angular.module('sampleJsApp').controller('nav1', ['$scope', '$http', 'azurePortalNg.portalService', nav1]);

    function nav1($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm = this;

        vm.blade = {
            title: 'Navigation 1',
            subTitle: 'Javascript based',
            isNavGrid: true,
            statusbar: 'Nav 1...',
            navGrid: {
                items: [
                    { title: 'Navigation 1', bladePath: '/SampleJs/nav1/nav1.html' },
                    { title: 'Blade 1', bladePath: '/SampleJs/blade1/blade1.html' },
                    {}, // empty line
                    { title: 'no path' }, // line with not link
                    { title: 'go to microsoft.com', hrefPath: 'http://www.microsoft.com' }, // line with external link
                ]
            }
        };

        vm.blade.navGrid.navigateTo = navigateTo;

        function navigateTo(path) {
            bladeService.bladeArea.clearLevel(2);
            bladeService.bladeArea.addBlade(path);//.addBladePath(path);
        }

        function dummy() { }
    }
})();
