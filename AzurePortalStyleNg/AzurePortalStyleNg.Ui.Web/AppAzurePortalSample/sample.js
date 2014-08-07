(function () {
    'use strict';

    angular.module('appAzurePortal').controller('sample', ['$scope', sample]);

    function sample($scope) {
        var vm = this;

        vm.activate = activate;
        vm.navigateTo = navigateTo;

        vm.title = 'Azure Portal Sample';
        vm.user = {
            username: 'User Name',
            emailaddress: 'email@domain.com'
        };
        vm.tiles = [
            // size: normal (180x180), mini (180x90), small (90x90), herowide (540x360)
            { title: 'Tile 1', subTitle: 'Some subtitle 1', size: 'normal', left: '0', top: '0', bladeId: 'tile1-nav' },
            { title: 'Tile 2', subTitle: 'Some subtitle 2', size: 'normal', left: '180px', top: '0', bladeId: 'tile2-nav' }
        ];
        vm.views = [];

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
//# sourceMappingURL=sample.js.map
