(function () {
    'use strict';

    angular.module('azureportalng').controller('sample', ['$scope','bladeService', sample]);

    function sample($scope, bladeService) {
        var vm = this;

        vm.navigateTo = navigateTo;

        vm.title = 'Azure Portal Sample';
        vm.user = {
            username: 'User Name',
            emailaddress: 'email@domain.com'
        };
        vm.tiles = [
            // size: normal (180x180), mini (180x90), small (90x90), herowide (540x360)
            { title: 'Tile 1', subTitle: 'Some subtitle 1', size: 'normal', left: '0', top: '0', bladePath: '/AzurePortalNgSample/blade1.html' },
            { title: 'Tile 2', subTitle: 'Some subtitle 2', size: 'normal', left: '180px', top: '0', bladePath: '/AzurePortalNgSample/blade2.html' }
        ];
        
        vm.blades = bladeService.blades;

        function navigateTo(id) {
            bladeService.clearLevel(1);
            bladeService.addBladePath(id);
        }
    }
})();
