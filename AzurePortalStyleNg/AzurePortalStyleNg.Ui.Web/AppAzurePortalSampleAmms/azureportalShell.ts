(function () {
    'use strict';

    angular.module('azurePortal').controller('azureportalShell', ['$scope', '$http', 'bladeService', azureportalShell]);

    function azureportalShell($scope, $http, bladeService) {
        var vm = this;

        vm.navigateTo = navigateTo;

        vm.title = 'SAMPLE';
        vm.user = {
            username: 'Harry Pfleger',
            emailaddress: 'harry@ardimedia.com'
        };

        vm.tiles = [
            { title: 'Bergbahnen.Li', subTitle: 'Aktienverzeichnis', size: 'normal', left: '0', top: '0', bladePath: '/AppAzurePortalSampleAmms/bergbahnenevent/blades/nav/nav.html', bladeController: "bergbahneneventNav" },
            { title: 'Amms', subTitle: 'Administration', size: 'normal', left: '180px', top: '0', bladePath: '/AppAzurePortalSampleAmms/amms/blades/nav/nav.html', bladeController: "ammsNav" }
        ];

        //vm.blades = [
        //    { path: "/AppAzurePortalSampleAmms/bergbahnenevent/blades/nav/nav.html", controller: "1" },
        //    { path: "/AppAzurePortalSampleAmms/bergbahnenevent/blades/shares/shares.html", controller: "2" },
        //    { path: "/AppAzurePortalSampleAmms/bergbahnenevent/blades/share/share.html", controller: "3" },
        //    { path: "/AppAzurePortalSampleAmms/bergbahnenevent/blades/exportexcel/exportexcel.html", controller: "4" }
        //];

        vm.blades = bladeService.blades;


        function navigateTo(id) {
            bladeService.clearLevel(1);
            bladeService.addBladePath(id);
        }
    }
})();
