//(function () {
//    'use strict';

//    angular.module('azureportalng').factory('bladeService', ['$http', '$rootScope', '$window', bladeService]);

//    function bladeService($http, $rootScope, $window) {

//        var service = {
//            blades: [],

//            clear: clear,
//            clearLevel: clearLevel,
//            clearLastLevel: clearLastLevel,
//            addBladePath: addBladePath
//        };

//        return service;

//        function addBladePath(path: string) {
//            if (path === undefined || path == '') { return; }

//            service.blades.push({ 'path': path });
//            var portalcontent = $window.document.getElementById('azureportalscroll');

//            $window.setTimeout(function () {
//                var azureportalblades = $window.document.getElementsByClassName('azureportalblade');
//                var i = service.blades.length - 1;
//                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
//                //       So now if it is, the user has to scroll on its own.
//                if (azureportalblades[i] !== undefined && azureportalblades[i].offsetLeft !== undefined) {
//                    var sl = azureportalblades[i].offsetLeft - 30;
//                    portalcontent.scrollLeft = sl;
//                }
//            }, 250);
//        }

//        function clear() {
//            service.blades.length = 0;
//        }

//        function clearLevel(level) {
//            if (level == 0) { level = 1; }
//            service.blades.length = level - 1;
//        }

//        function clearLastLevel() {
//            clearLevel(service.blades.length);
//        }
//    }
//})();