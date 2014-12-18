(function () {
    'use strict';
    angular.module('azureportalng').controller('azurePortalShell', ['$scope', '$http', azurePortalShell]);
    function azurePortalShell($scope, $http) {
        /* jshint validthis: true */
        var vm = this;
        vm.blades = [{ "path": "nav.html" }];
        //vm.activate = activate;
        //vm.navigateTo = navigateTo;
        //function activate() { }
        //function navigateTo(id) {
        //    if (id === 'amms-nav') {
        //        vm.views[0] = { title: 'Amms', subTitle: 'Administration' };
        //        return;
        //    }
        //    console.log('Did not navigate [navigateTo]! No route defined for id: ' + id);
        //}
    }
})();
//# sourceMappingURL=azurePortalShell.js.map