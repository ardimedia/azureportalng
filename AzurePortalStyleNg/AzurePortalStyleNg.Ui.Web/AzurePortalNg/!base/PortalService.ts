module AzurePortalNg {
    'use strict';

    //#region Class Definition: PortalService

    export class PortalService implements ng.IModule {

        //#region Properties

        //#region ng.IModule properties

        animate;
        animation;
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

        //#region Dialogs

        ngDialog: NgDialog.INgDialog;

        //#endregion

        //#region Services

        $http: angular.IHttpService;
        $httpBackend: angular.IHttpBackendService;
        $injector: angular.auto.IInjectorService
        $q: angular.IQService;
        $scope: angular.IScope;
        $rootScope: angular.IRootScopeService;
        $window: angular.IWindowService;

        //#endregion

        //#endregion

        //#region Constructors

        constructor($injector: angular.auto.IInjectorService) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalService\' constructor called.', [this, $injector]);

            this.$injector = $injector;

            this.$http = <angular.IHttpService>$injector.get('$http');
            this.$httpBackend = <angular.IHttpBackendService>$injector.get('$httpBackend');
            this.$q = <angular.IQService>$injector.get('$q');
            //this.$scope = $injector.get('$scope');
            this.$rootScope = <angular.IRootScopeService>$injector.get('$rootScope');
            this.$window = <angular.IWindowService>$injector.get('$window');

            this.bladeArea = <AzurePortalNg.BladeArea>$injector.get('azurePortalNg.bladeArea');
            this.ngDialog = <any>$injector.get('ngDialog');
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