(function () {
    'use strict';

    angular.module('azurePortal').controller('bergbahneneventShare', ['$scope', '$http', '$location', 'bladeService', 'shareService', bergbahneneventShare]);

    function bergbahneneventShare($scope, $http, $location, bladeService, shareService) {
        var vm = this;

        //vm.options = {};

        getOptions();

        shareService.shareChanged.bind(function (share) {
            setShare(share);
        });

        function getOptions() {
            $http({ method: 'GET', url: '/AppAzurePortalSampleAmms/bergbahnenevent/blades/share/share.json' })
                .success(function (data, status, headers, config) {
                    var data2 = angular.fromJson(data);
                    vm.options = data2;
                    setShare(shareService.share);
                })
                .error(function (data, status, headers, config) {
                });
            return;
        }

        function setShare(share) {
            vm.options.title = "Aktie: " + share.title;
        }
    }
})();
