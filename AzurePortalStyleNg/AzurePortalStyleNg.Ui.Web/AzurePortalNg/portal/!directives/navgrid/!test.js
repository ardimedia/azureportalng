(function () {
    'use strict';
    angular.module('azureportalng').controller('testcontroller', ['$scope', '$http', testcontroller]);
    function testcontroller($scope, $http) {
        /* jshint validthis: true */
        var vm = this;
        $http({ method: 'GET', url: '!test.json' }).success(function (data, status, headers, config) {
            var data2 = angular.fromJson(data);
            vm.blade = data2;
            vm.blade.navigateTo = navigateTo;
        }).error(function (data, status, headers, config) {
            console.log('Could not successfully get json file.');
        });
        function navigateTo(id) {
            //console.log(id);
        }
    }
})();
//# sourceMappingURL=!test.js.map