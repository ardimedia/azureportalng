(function () {
    'use strict';

    angular.module('azureportalng').controller('exportexcel', ['$scope', '$http', 'bladeService', exportexcel]);

    function exportexcel($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm = this;

        //vm.blade = {};
        //$scope.vm = vm;
        getOptions();

        function getOptions() {
            $http({ method: 'GET', url: '/AzurePortalNgSampleAmms/bergbahnenevent/blades/exportexcel/exportexcel.json' }).success(function (data, status, headers, config) {
                var data2 = angular.fromJson(data);
                vm.blade = data2;
                vm.blade.navGrid.navigateTo = navigateTo;
            }).error(function (data, status, headers, config) {
            });
            return;
        }

        function navigateTo(id) {
            //console.log(id);
            bladeService.addBladePath(id);
        }
    }
})();
//# sourceMappingURL=exportexcel.js.map
