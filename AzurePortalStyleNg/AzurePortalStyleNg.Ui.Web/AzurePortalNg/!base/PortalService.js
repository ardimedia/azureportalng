var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: PortalService
    var PortalService = (function () {
        //#endregion
        //#region Constructors
        function PortalService($injector) {
            // Debugging
            this.debug = new AzurePortalNg.Debug();
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalService\' constructor called.', [this, $injector]);
            this.$injector = $injector;
            this.$http = $injector.get('$http');
            this.$httpBackend = $injector.get('$httpBackend');
            this.$q = $injector.get('$q');
            this.$window = $injector.get('$window');
            this.$rootScope = $injector.get('$rootScope');
        }
        return PortalService;
    })();
    AzurePortalNg.PortalService = PortalService;
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('azureportalng').service('azurePortalNg.portalService', ['$injector', AzurePortalNg.PortalService]);
    })();
})(AzurePortalNg || (AzurePortalNg = {}));
