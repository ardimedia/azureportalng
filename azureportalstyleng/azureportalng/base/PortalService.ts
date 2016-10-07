import * as angular from 'angular';
import * as ngdialog from 'ng-dialog';
import * as azureportalng from 'azureportalng';

export class PortalService implements angular.IModule {
    //#region Constructors

    constructor($injector: angular.auto.IInjectorService) {
        azureportalng.Debug.write('[azureportalng-debug] \'PortalService\' constructor called.', [this, $injector]);

        this.$injector = $injector;
        //this.$scope = $scope;

        this.$http = <angular.IHttpService>$injector.get('$http');
        this.$httpBackend = <angular.IHttpBackendService>$injector.get('$httpBackend');
        this.$q = <angular.IQService>$injector.get('$q');
        this.$rootScope = <angular.IRootScopeService>$injector.get('$rootScope');
        this.$window = <angular.IWindowService>$injector.get('$window');

        this.ngdialog = <any>$injector.get('ngdialog');
    }

    //#endregion

    //#region Properties

    parameter: azureportalng.IBladeParameter = { action: 'none', itemId: 0 };

    //#region ng.IModule properties

    animate;
    animation;
    component;
    config;
    constant;
    controller;
    directive;
    factory;
    filter;
    provider;
    run;
    service;
    value;
    decorator;
    name;
    requires;

    //#endregion

    //#region Visual components

    portalShell: azureportalng.PortalShell;
    panorama: azureportalng.Panorama;
    bladeArea: azureportalng.BladeArea;

    //#endregion

    //#region NgDialog

    ngdialog: ngdialog.IDialogService;

    //#endregion

    //#region Angular Services

    $http: angular.IHttpService;
    $httpBackend: angular.IHttpBackendService;
    $injector: angular.auto.IInjectorService
    $q: angular.IQService;
    $rootScope: angular.IRootScopeService;
    $window: angular.IWindowService;
    $scope: angular.IScope;

    //#endregion

    //#endregion

    //#region Methods

    //initialize(portalShell: PortalShell) {
    //    azureportalng.Debug.write('[azureportalng-debug] \'PortalService.initialize\' called.', [this, portalShell]);
    //    this.portalShell = portalShell;
    //    this.portalShell.setObsoleteLayoutProperites();
    //}

    //#endregion
}

//#region Angular Registration

(function () {
    'use strict';
    angular.module('azureportalng').service('azureportalng.portalService', ['$injector', azureportalng.PortalService]);
})();

//#endregion
