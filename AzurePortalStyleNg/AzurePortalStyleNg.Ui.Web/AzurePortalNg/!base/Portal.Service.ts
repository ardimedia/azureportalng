module AzurePortalNg {
    'use strict';

    //#region Class Definition: PortalService

    export class PortalService {

        //#region Properties

        /** PortalShell, containing xxx. */
        portalShell: PortalShell;

        /** Panorama, containing the Startboard and other visual elements. */
        panorama: Panorama;

        ngDialog: NgDialog.INgDialog;

        /* Services */
        bladeService: AzurePortalNg.BladeService;
        $http: angular.IHttpService;
        $httpBackend: angular.IHttpBackendService;
        $injector: angular.auto.IInjectorService
        $q: angular.IQService;
        $window: angular.IWindowService;
        $rootScope: angular.IRootScopeService;
        $scope: angular.IScope;

        //#region Setup Debugging

        debug: Debug = new Debug();

        //#endregion

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
            //this.$scope = $injector.get('$scope');
            //this.ngDialog = $injector.get('ngDialog');

            this.panorama = new Panorama('');
            this.bladeService = new BladeService(this);
        }

        //#endregion

        //#region Methods

        initialize(portalShell: PortalShell) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalService.initialize\' called.', [this, portalShell]);
            this.portalShell = portalShell;
            this.portalShell.setObsoleteLayoutProperites();
        }

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