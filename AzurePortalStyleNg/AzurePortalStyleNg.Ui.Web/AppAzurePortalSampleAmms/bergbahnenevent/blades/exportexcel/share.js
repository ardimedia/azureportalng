(function () {
    'use strict';

    angular.module('azurePortal').controller('bergbahneneventShare', ['$scope', '$http', bergbahneneventShare]);

    function bergbahneneventShare($scope, $http) {
        var vm = this;

        vm.options = {};

        getOptions();

        function getOptions() {
            $http({ method: 'GET', url: '/AppAzurePortalSampleAmms/bergbahnenevent/blades/share/share.json' }).success(function (data, status, headers, config) {
                var data2 = angular.fromJson(data);
                vm.options = data2;
                vm.options.navGridItems.navigateTo = navigateTo;
            }).error(function (data, status, headers, config) {
            });
            return;
        }

        function navigateTo(id) {
            console.log(id);
        }
    }
})();
//# sourceMappingURL=share.js.map
