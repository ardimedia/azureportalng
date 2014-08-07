(function () {
    'use strict';

    angular.module('appAzurePortal').controller('sampleAmms', ['$scope', sampleAmms]);

    function sampleAmms($scope) {
        var vm = this;

        vm.activate = activate;
        vm.navigateTo = navigateTo;

        vm.title = 'my.bvd.li';
        vm.user = {
            username: 'Harry Pfleger',
            emailaddress: 'harry@ardimedia.com'
        };
        vm.tiles = [
            // size: normal (180x180), mini (180x90), small (90x90), herowide (540x360)
            { title: 'Bergbahnen.Li', subTitle: 'Aktienverzeichnis', size: 'normal', left: '0', top: '0', childId: 'bgli-nav' },
            { title: 'Amms', subTitle: 'Administration', size: 'normal', left: '180px', top: '0', childId: 'amms-nav' }
        ];
        vm.views = [];

        function activate() {
        }

        function navigateTo(id) {
            console.log(id);
            if (id === 'bgli-nav') {
                vm.views[0] = { title: 'Bergbahnen.Li', subTitle: 'Aktienverzeichnis' };
            }
            if (id === 'amms-nav') {
                vm.views[0] = { title: 'Amms', subTitle: 'Administration' };
            }
        }
    }
})();
//# sourceMappingURL=sampleAmms.js.map
