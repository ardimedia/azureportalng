module Sample1 {
    'use strict';

    //#region Class Definition

    class Blade1 extends AzurePortalNg.ListViewModel {

        //#region Properties

        //#endregion

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super(portalService, '/Sample1/blade1/blade1.html', 'Blade-1', 'subtitle', 315);

            this.isCommandNew = true;
            this.isCommandSave = true;

            this.initialize();
            this.setObsoleteLayoutProperites();
        }

        //#endregion

        //#region Methods - Overrides for Blade

        protected onCommandNew(): void {
            this.portalService.bladeService.addBlade(this.path, '/Sample1/blade2/blade2.html');
        }

        protected onCommandSave(): void {
            this.portalService.bladeService.addBlade(this.path, '/Sample1/blade11/blade11.html');
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
        angular.module('sampleapp').controller('blade1', ['azurePortalNg.portalService', Blade1]);
    })();

    //#endregion

}