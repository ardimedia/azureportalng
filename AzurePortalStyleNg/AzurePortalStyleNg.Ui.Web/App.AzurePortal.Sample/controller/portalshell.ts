(function () {
    'use strict';

    angular.module('app.azureportal').controller('portalshell', ['$scope', portalshell]);

    function portalshell($scope) {
        var vm = this;

        vm.activate = activate;
        vm.createChild = createChild;

        vm.title = 'Azure Portal Sample';
        vm.user = {
            username: 'User Name',
            emailaddress: 'email@domain.com'
        };
        vm.tiles = [
            // size: normal (180x180), mini (180x90), small (90x90), herowide (540x360)
            { title: 'Tile 1', subtitle: 'Some subtitle 1', size: 'normal', left: '0', top: '0', childid: 'tile1-nav' },
            { title: 'Tile 2', subtitle: 'Some subtitle 2', size: 'normal', left: '180px', top: '0', childid: 'tile2-nav' }
        ];
        vm.views = [];

        function activate() { }

        function createChild(childid) {
            console.log(childid);
            if (childid === 'tile1-nav') {
                vm.views[0] = { title: 'Tile 1', subtitle: 'Some subtitle' };
            }
            if (childid === 'tile2-nav') {
                vm.views[0] = { title: 'Tile 2', subtitle: 'Some subtitle' };
            }
        }
    }
})();
