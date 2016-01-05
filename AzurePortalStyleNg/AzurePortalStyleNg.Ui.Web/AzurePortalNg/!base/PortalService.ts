module AzurePortalNg {
    'use strict';

    //#region Interface IBladeParameter

    export interface IBladeParameter {
        action: string;
        item?: any;
        itemId: number;
    }

    //#endregion

    //#region Class Definition: PortalService

    export class PortalService implements ng.IModule {

        //#region Properties

        parameter: AzurePortalNg.IBladeParameter = { action: 'none', itemId: 0 };

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

        portalShell: AzurePortalNg.PortalShell;
        panorama: AzurePortalNg.Panorama;
        bladeArea: AzurePortalNg.BladeArea;

        //#endregion

        //#region NgDialogs

        ngDialog: NgDialog.INgDialog;

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

        //#region Constructors

        constructor($injector: angular.auto.IInjectorService) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalService\' constructor called.', [this, $injector]);

            this.$injector = $injector;
            //this.$scope = $scope;

            this.$http = <angular.IHttpService>$injector.get('$http');
            this.$httpBackend = <angular.IHttpBackendService>$injector.get('$httpBackend');
            this.$q = <angular.IQService>$injector.get('$q');
            this.$rootScope = <angular.IRootScopeService>$injector.get('$rootScope');
            this.$window = <angular.IWindowService>$injector.get('$window');

            this.ngDialog = <any>$injector.get('ngDialog');
            this.ngDialog.openConfirm
        }

        //#endregion

        //#region Methods

        //initialize(portalShell: PortalShell) {
        //    AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalService.initialize\' called.', [this, portalShell]);
        //    this.portalShell = portalShell;
        //    this.portalShell.setObsoleteLayoutProperites();
        //}

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('azureportalng').service('azurePortalNg.portalService', ['$injector', AzurePortalNg.PortalService]);
    })();

    //#endregion
}