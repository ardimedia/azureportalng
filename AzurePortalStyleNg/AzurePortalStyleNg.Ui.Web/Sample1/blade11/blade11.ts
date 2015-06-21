module Sample1 {
    'use strict';

    //#region Class Definition

    class Blade11 extends AzurePortalNg.BladeList {

        //#region Properties

        //#endregion

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super(portalService, '/Sample1/blade11/blade11.html', 'Blade-11', 'subtitle', 315);

            this.isCommandNew = true;

            this.initialize();
            this.setObsoleteLayoutProperites();
        }

        //#endregion

        //#region Methods - Overrides for Blade

        protected onCommandNew(): void {
            this.portalService.bladeService.addBlade(this.path, '/Sample1/blade2/blade2.html');
        }

        //#endregion

        //#region Data Access

        protected onGetDataList(): angular.IHttpPromise<any> {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('sampleapp').controller('blade11', ['azurePortalNg.portalService', Blade11]);
    })();

    //#endregion

}