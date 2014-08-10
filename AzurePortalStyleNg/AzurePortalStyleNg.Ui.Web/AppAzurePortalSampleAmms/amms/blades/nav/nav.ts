(function () {
    'use strict';

    angular.module('azurePortal').controller('ammsNav', ['$scope', '$http', ammsNav]);

    function ammsNav($scope, $http) {
        var vm = this;

        //vm.options = {};

        //$scope.vm = vm;

        getOptions();

        function getOptions() {
            $http({ method: 'GET', url: '/AppAzurePortalSampleAmms/amms/blades/nav/nav.json' })
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
            //console.log(id);
        }
    }
})();
