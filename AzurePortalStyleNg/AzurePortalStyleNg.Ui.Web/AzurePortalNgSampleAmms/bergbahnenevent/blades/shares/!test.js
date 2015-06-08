(function () {
    'use strict';
    angular.module('azureportalng').controller('azurePortalShell', ['$scope', '$http', azurePortalShell]);
    function azurePortalShell($scope, $http) {
        /* jshint validthis: true */
        var vm = this;
        vm.blades = [{ "path": "shares.html" }];
    }
})();
//# sourceMappingURL=!test.js.map