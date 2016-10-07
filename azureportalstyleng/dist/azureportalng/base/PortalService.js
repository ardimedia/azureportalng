"use strict";
var angular = require('angular');
var azureportalng = require('azureportalng');
var PortalService = (function () {
    //#region Constructors
    function PortalService($injector) {
        //#endregion
        //#region Properties
        this.parameter = { action: 'none', itemId: 0 };
        azureportalng.Debug.write('[azureportalng-debug] \'PortalService\' constructor called.', [this, $injector]);
        this.$injector = $injector;
        //this.$scope = $scope;
        this.$http = $injector.get('$http');
        this.$httpBackend = $injector.get('$httpBackend');
        this.$q = $injector.get('$q');
        this.$rootScope = $injector.get('$rootScope');
        this.$window = $injector.get('$window');
        this.ngdialog = $injector.get('ngdialog');
    }
    return PortalService;
}());
exports.PortalService = PortalService;
//#region Angular Registration
(function () {
    'use strict';
    angular.module('azureportalng').service('azureportalng.portalService', ['$injector', azureportalng.PortalService]);
})();
//#endregion
