module AzurePortalNg {
    'use strict';

    //#region Class Definition: PortalService

    export class PortalService {

        //#region Properties

        /** PortalShell, containing xxx. */
        portalShell: PortalShell;

        /** Panorama, containing the Startboard and other visual elements. */
        panorama: Panorama;
        /** Contains all blades with are available for display. */
        bladeService: BladeService;

        $http: angular.IHttpService;
        $httpBackend: angular.IHttpBackendService;
        $injector: angular.auto.IInjectorService
        $q: angular.IQService;
        $window: angular.IWindowService;

        //#endregion

        //#region Constructors

        constructor($injector: angular.auto.IInjectorService) {
            this.$injector = $injector;

            this.$http = $injector.get('$http');
            this.$httpBackend = $injector.get('$httpBackend');
            this.$q = $injector.get('$q');;
            this.$window = $injector.get('$window');;

            this.panorama = new Panorama('');
            this.bladeService = new BladeService(this);
        }

        //#endregion

        //#region Methods

        initialize(portalShell: PortalShell) {
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