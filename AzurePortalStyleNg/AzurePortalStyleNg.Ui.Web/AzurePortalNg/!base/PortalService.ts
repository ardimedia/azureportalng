module AzurePortalNg {
    'use strict';

    //#region Class Definition: PortalService

    export class PortalService {

        //#region Properties

        // Visual components
        portalShell: AzurePortalNg.PortalShell;
        panorama: AzurePortalNg.Panorama;
        bladeArea: AzurePortalNg.BladeArea;

        // Dialogs
        ngDialog: NgDialog.INgDialog;

        // Services
        $http: angular.IHttpService;
        $httpBackend: angular.IHttpBackendService;
        $injector: angular.auto.IInjectorService
        $q: angular.IQService;
        $window: angular.IWindowService;
        $rootScope: angular.IRootScopeService;
        $scope: angular.IScope;

        // Debugging
        debug: Debug = new Debug();

        //#endregion

        //#region Constructors

        constructor($injector: angular.auto.IInjectorService) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalService\' constructor called.', [this, $injector]);

            this.$injector = $injector;
            this.$http = $injector.get('$http');
            this.$httpBackend = $injector.get('$httpBackend');
            this.$q = $injector.get('$q');
            this.$window = $injector.get('$window');
            this.$rootScope = $injector.get('$rootScope');
        }

        //#endregion

        ////#region Methods

        //initialize(portalShell: PortalShell) {
        //    console.log('****************************');
        //    AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalService.initialize\' called.', [this, portalShell]);
        //    this.portalShell = portalShell;
        //    this.portalShell.setObsoleteLayoutProperites();
        //}

        ////#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('azureportalng').service('azurePortalNg.portalService', ['$injector', AzurePortalNg.PortalService]);
    })();

    //#endregion
}