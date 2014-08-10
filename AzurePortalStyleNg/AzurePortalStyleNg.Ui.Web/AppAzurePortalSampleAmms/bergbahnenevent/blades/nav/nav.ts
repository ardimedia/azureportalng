(function () {
    'use strict';

    angular.module('azurePortal').controller('bergbahneneventNav', ['$scope', '$http', 'bladeService', bergbahneneventNav]);

    function bergbahneneventNav($scope, $http, bladeService) {
        var vm = this;

        //vm.options = {};
        //vm.navigateTo = navigateTo;

        getOptions();

        function getOptions() {
            $http({ method: 'GET', url: '/AppAzurePortalSampleAmms/bergbahnenevent/blades/nav/nav.json' })
                .success(function (data, status, headers, config) {
                    var data2 = angular.fromJson(data);
                    vm.options = data2;
                    vm.options.navGridItems.navigateTo = navigateTo;
                })
                .error(function (data, status, headers, config) {
                });
            return;
        }

        function navigateTo(id) {
            bladeService.clearLevel(2);

            var path = vm.options.navGridItems.items[id].bladePath;
            bladeService.addBladePath(path);
        }
    }
})();
