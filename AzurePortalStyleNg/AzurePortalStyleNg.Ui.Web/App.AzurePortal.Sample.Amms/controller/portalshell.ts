(function () {
    'use strict';

    angular.module('app.azureportal').controller('portalshell', ['$scope', portalshell]);

    function portalshell($scope) {
        var vm = this;

        vm.activate = activate;
        vm.createChild = createChild;

        vm.title = 'my.bvd.li';
        vm.user = {
            username: 'Harry Pfleger',
            emailaddress: 'harry@ardimedia.com'
        };
        vm.tiles = [
            // size: normal (180x180), mini (180x90), small (90x90), herowide (540x360)
            { title: 'Bergbahnen.Li', subtitle: 'Aktienverzeichnis', size: 'normal', left: '0', top: '0', childid: 'bgli-nav' },
            { title: 'Amms', subtitle: 'Administration', size: 'normal', left: '180px', top: '0', childid: 'amms-nav' }
        ];
        vm.views = [];

        function activate() { }

        function createChild(childid) {
            console.log(childid);
            if (childid === 'bgli-nav') {
                vm.views[0] = { title: 'Bergbahnen.Li', subtitle: 'Aktienverzeichnis' };
            }
            if (childid === 'amms-nav') {
                vm.views[0] = { title: 'Amms', subtitle: 'Administration' };
            }
        }
    }
})();
