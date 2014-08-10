(function () {
    'use strict';

    angular.module('azureportalng').controller('blade2', ['$scope', '$http', 'bladeService', blade2]);

    function blade2($scope, $http, bladeService) {
        var vm = this;

        vm.options = {
            "$schema": "/AzurePortalNg/$schema/navgrid.json?reload",
            "title": "Blade 2",
            "subTitle": "Second Blade",
            "isNavGrid": true,
            "navGridItems": {
                "items": [
                    { "title": "Als Excel exportieren", "bladePath": "/AzurePortalNgSampleAmms/bergbahnenevent/blades/exportexcel/exportexcel.html" }
                ]
            }
        };

        vm.options.navGridItems.navigateTo = navigateTo;

        function navigateTo(id) {
            bladeService.addBladePath(id);
        }
    }
})();
//# sourceMappingURL=blade2.js.map
