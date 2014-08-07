(function () {
    'use strict';

    angular.module('appAzurePortal').controller('blade1', ['$scope', blade1]);

    function blade1($scope) {
        var vm = this;

        vm.activate = activate;
        vm.navigateTo = navigateTo;

        vm.title = 'Azure Portal Sample';

        function activate() {
        }

        function navigateTo(id) {
            console.log(id);
            if (id === 'tile1-nav') {
                vm.views[0] = { title: 'Tile 1', subTitle: 'Some subtitle' };
            }
            if (id === 'tile2-nav') {
                vm.views[0] = { title: 'Tile 2', subTitle: 'Some subtitle' };
            }
        }
    }
})();
//# sourceMappingURL=blade1.js.map
