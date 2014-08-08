(function () {
    'use strict';

    angular.module('appAzurePortal').controller('sample', ['$scope', '$http', sample]);

    function sample($scope, $http) {
        var vm = this;

        vm.activate = activate;
        vm.navigateTo = navigateTo;

        vm.title = 'SAMPLE';
        vm.user = {
            username: 'Harry Pfleger',
            emailaddress: 'harry@ardimedia.com'
        };

        vm.tiles = [
            { title: 'Bergbahnen.Li', subTitle: 'Aktienverzeichnis', size: 'normal', left: '0', top: '0', bladeId: 'bgli-nav' },
            { title: 'Amms', subTitle: 'Administration', size: 'normal', left: '180px', top: '0', bladeId: 'amms-nav' }
        ];

        vm.blades = [];

        var x = { a: 1, fu1: activate };

        function activate() {
        }

        function navigateTo(id) {
            if (id === 'bgli-nav') {
                vm.blades.length = 0;
                $http({ method: 'GET', url: '/AppAzurePortalSampleAmms/bergbahnenevent/blades/nav/nav.json' }).success(function (data, status, headers, config) {
                    var data2 = angular.fromJson(data);
                    data2.navGridItems.navigateTo = navigateTo;
                    vm.blades[0] = data2;
                }).error(function (data, status, headers, config) {
                });
                return;
            }

            if (id === 'stockList') {
                vm.blades[1] = { title: 'stockList', subTitle: 'stockList' };
                return;
            }

            if (id === 'exportExcel') {
                vm.blades[1] = { title: 'exportExcel', subTitle: 'exportExcel' };
                return;
            }

            if (id === 'amms-nav') {
                vm.blades.length = 0;
                vm.blades[0] = { title: 'Amms', subTitle: 'Administration' };
                return;
            }

            console.log('Did not navigate [navigateTo]! No route defined for id: ' + id);
        }
    }
})();
//# sourceMappingURL=sample.js.map
