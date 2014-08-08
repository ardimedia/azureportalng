(function () {
    'use strict';

    angular.module('appAzurePortal').controller('testcontroller', ['$scope', '$http', testcontroller]);

    function testcontroller($scope, $http) {
        var vm = this;

        $http({ method: 'GET', url: '!test.json' }).success(function (data, status, headers, config) {
            var data2 = angular.fromJson(data);
            vm.options = data2;
        }).error(function (data, status, headers, config) {
            console.log('Could not successfully get json file.');
        });
    }
})();
//# sourceMappingURL=!test.js.map
