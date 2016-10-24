namespace Sample1 {
    'use strict';

    //#region Class Definition

    class Blade2 extends AzurePortalNg.BladeList {

        //#region Properties

        //#endregion

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super(portalService, '/app/blade2/blade2.html', 'Blade 2', 'TypeScript based', 315);

            this.isCommandNew = true;
            this.commandNewText = 'Blade 2-1';
            this.isCommandSave = true;
            this.commandSaveText = 'Blade 1';

            this.statusbar = 'Blade 2...';
        }

        //#endregion

        //#region Methods - Overrides for Blade

        onCommandNew(): void {
            this.portalService.bladeArea.addBlade('/Sample1/blade21/blade21.html', this.path);
        }

        onCommandSave(): void {
            this.portalService.bladeArea.addBlade('/Sample1/blade1/blade1.html', this.path);
        }

        //#endregion

        //#region Data Access

        onGetDataList(): angular.IHttpPromise<any> {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('sample1App').controller('blade2', ['azurePortalNg.portalService', Blade2]);
    })();

    //#endregion

}