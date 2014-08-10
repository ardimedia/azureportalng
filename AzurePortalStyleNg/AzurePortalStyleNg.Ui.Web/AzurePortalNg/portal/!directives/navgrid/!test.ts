(function () {
    'use strict';

    angular.module('azureportalng').controller('testcontroller', ['$scope', '$http', testcontroller]);

    function testcontroller($scope, $http) {
        var vm = this;

        $http({ method: 'GET', url: '!test.json' })
            .success(function (data, status, headers, config) {
                var data2 = angular.fromJson(data);
                vm.options = data2;
                vm.options.navigateTo = navigateTo;
            })
            .error(function (data, status, headers, config) {
                console.log('Could not successfully get json file.');
            });


        function navigateTo(id) {
            //console.log(id);
        }
    }
})();
