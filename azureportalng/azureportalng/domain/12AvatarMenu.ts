namespace AzurePortalNg {
    'use strict';

    //#region Class Definition: AvatarMenu

    export class AvatarMenu extends UserControlBase {

        //#region Properties

        userAccount: UserAccount;

        //#endregion

        //#region Constructors

        constructor(portalService: PortalService) {
            super(portalService);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'AvatarMenu\' constructor called.', [this]);
        }

        //#endregion
    }

    //#endregion
}