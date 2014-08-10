(function () {
    'use strict';

    angular.module('azurePortal').controller('azurePortalShell', ['$scope', '$http', azurePortalShell]);

    function azurePortalShell($scope, $http) {
        var vm = this;

        vm.blades = [{ "path": "shares.html" }];
    }
})();
