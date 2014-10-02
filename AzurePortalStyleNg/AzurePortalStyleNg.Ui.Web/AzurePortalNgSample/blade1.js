(function () {
    'use strict';

    angular.module('azureportalng').controller('blade1', ['$scope', '$http', 'bladeService', blade1]);

    function blade1($scope, $http, bladeService) {
        var vm = this;

        vm.blade = {
            "$schema": "/AzurePortalNg/$schema/navgrid.json?reload",
            "title": "Blade 1",
            "subTitle": "First Blade",
            "isCommandDocument": true,
            //"commandDocumentText": 'Lieferschein',
            "commandDocument": dummy,
            "isNavGrid": true,
            "navGrid": {
                "items": [
                    { "title": "Als Excel exportieren", "bladePath": "/AzurePortalNgSampleAmms/bergbahnenevent/blades/exportexcel/exportexcel.html" }
                ]
            }
        };

        vm.blade.navGrid.navigateTo = navigateTo;

        function navigateTo(id) {
            bladeService.addBladePath(id);
        }

        function dummy() {
        }
    }
})();
//# sourceMappingURL=blade1.js.map
