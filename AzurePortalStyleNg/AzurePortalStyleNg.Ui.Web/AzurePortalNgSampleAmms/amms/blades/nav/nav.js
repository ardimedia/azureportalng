(function () {
    'use strict';

    angular.module('azureportalng').controller('ammsNav', ['$scope', '$http', ammsNav]);

    function ammsNav($scope, $http) {
        /* jshint validthis: true */
        var vm = this;

        //vm.blade = {};
        //$scope.vm = vm;
        getOptions();

        function getOptions() {
            $http({ method: 'GET', url: '/AzurePortalNgSampleAmms/amms/blades/nav/nav.json' }).success(function (data, status, headers, config) {
                var data2 = angular.fromJson(data);
                vm.blade = data2;
                vm.blade.navGrid.navigateTo = navigateTo;
            }).error(function (data, status, headers, config) {
            });
            return;
        }

        function navigateTo(id) {
            //console.log(id);
        }
    }
})();
//# sourceMappingURL=nav.js.map
