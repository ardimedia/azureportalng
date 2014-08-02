/// <reference path="../scripts/typings/angularjs/angular.d.ts" />


(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        //'ngAnimate',        // animations
        //'ngRoute'           // routing

        // Custom modules 

        // 3rd Party Modules

    ]);

    // Execute bootstrapping code and any dependencies.
    // TODO: inject services as needed.
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();