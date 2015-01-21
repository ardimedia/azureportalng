(function () {
    'use strict';
    angular.module('azureportalng').controller('bergbahneneventShares', ['$scope', '$http', '$location', 'bladeService', 'shareService', bergbahneneventShares]);
    function bergbahneneventShares($scope, $http, $location, bladeService, shareService) {
        /* jshint validthis: true */
        var vm = this;
        vm.blade = {
            title: "Aktienregister",
            subTitle: "",
            isNavGrid: true,
            isCommandNew: true,
            navGrid: {
                items: []
            }
        };
        vm.blade.navGrid.navigateTo = navigateTo;
        vm.blade.navGrid.items = shareService.shares;
        function navigateTo(id) {
            bladeService.clearLevel(3);
            bladeService.addBladePath("/AzurePortalNgSampleAmms/bergbahnenevent/blades/share/share.html");
            shareService.selectShare(id);
        }
    }
})();
//# sourceMappingURL=shares.js.map