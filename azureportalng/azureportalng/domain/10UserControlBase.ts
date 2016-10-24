namespace AzurePortalNg {
    'use strict';

    //#region Class Definition: AvatarMenu

    export class UserControlBase {

        //#region Properties

        portalService: PortalService;

        //#endregion

        //#region Constructors

        constructor(portalService: PortalService) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'UserControlBase\' constructor called.', [this, portalService]);
            this.portalService = portalService;
        }

        //#endregion
    }

    //#endregion
}