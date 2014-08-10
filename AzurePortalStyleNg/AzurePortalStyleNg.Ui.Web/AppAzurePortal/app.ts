/// <reference path="../scripts/typings/angularjs/angular.d.ts" />

(function () {
    'use strict';

    var app = angular.module('azurePortal', [
        // Angular modules 
        //'ngAnimate',        // animations
        //'ngRoute'           // routing

        // Custom modules 

        // 3rd Party Modules

    ]);

    // Execute bootstrapping code and any dependencies.
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {
        }]);
})();