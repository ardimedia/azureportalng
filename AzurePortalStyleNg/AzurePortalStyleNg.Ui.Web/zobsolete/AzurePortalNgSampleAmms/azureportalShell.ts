(function () {
    'use strict';

    angular.module('azureportalng')
        .controller('azureportalShell', ['$scope', '$http', 'bladeService', azureportalShell]);

    function azureportalShell($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm = this;

        vm.navigateTo = navigateTo;

        vm.title = 'SAMPLE';
        vm.user = {
            username: 'Harry Pfleger',
            emailaddress: 'harry@ardimedia.com'
        };

        vm.tiles = [
            { title: 'Bergbahnen.Li', subTitle: 'Aktienverzeichnis', size: 'normal', left: '0', top: '0', bladePath: '/AzurePortalNgSampleAmms/bergbahnenevent/blades/nav/nav.html', bladeController: "bergbahneneventNav" },
        ];

        vm.blades = bladeService.blades;
        console.log(vm.tiles);

        if (vm.tiles.length === 1) {
            console.log("nav to 1");
            navigateTo(vm.tiles[0].bladePath);
        }

        function navigateTo(id) {
            bladeService.clearLevel(1);
            bladeService.addBladePath(id);
        }
    }
})();
