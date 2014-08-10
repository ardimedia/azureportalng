(function () {
    'use strict';

    angular.module('azurePortal').controller('bergbahneneventShares', ['$scope', '$http', '$location', 'bladeService', 'shareService', bergbahneneventShares]);

    function bergbahneneventShares($scope, $http, $location, bladeService, shareService) {
        var vm = this;

        //vm.options = {};

        getOptions();

        function getOptions() {
            $http({ method: 'GET', url: '/AppAzurePortalSampleAmms/bergbahnenevent/blades/shares/shares.json' })
                .success(function (data, status, headers, config) {
                    var data2 = angular.fromJson(data);
                    vm.options = data2;
                    vm.options.navGridItems.navigateTo = navigateTo;
                    vm.options.navGridItems.items = shareService.shares;
                })
                .error(function (data, status, headers, config) {
                });
            return;
        }

        function navigateTo(id) {
            bladeService.clearLevel(3);
            bladeService.addBladePath("/AppAzurePortalSampleAmms/bergbahnenevent/blades/share/share.html");

            shareService.selectShare(id);
        }
    }
})();
