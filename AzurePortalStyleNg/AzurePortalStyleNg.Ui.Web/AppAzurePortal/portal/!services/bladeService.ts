(function () {
    'use strict';

    angular.module('azurePortal').factory('bladeService', ['$http', '$rootScope', bladeService]);

    function bladeService($http, $rootScope) {

        var service = {
            blades: [],

            clear: clear,
            clearLevel: clearLevel,
            addBladePath: addBladePath
        };

        return service;

        function addBladePath(path: string) {
            service.blades.push({ "path": path, "controller": "" });
        }

        function clear() {
            service.blades.length = 0;
        }

        function clearLevel(level) {
            if (level == 0) { level = 1; }
            service.blades.length = level - 1;
        }
    }
})();