import * as azureportalng from 'azureportalng';

export class AvatarMenu extends azureportalng.UserControlBase {
    //#region Constructors

    constructor(portalService: azureportalng.PortalService) {
        super(portalService);
        azureportalng.Debug.write('[azureportalng-debug] \'AvatarMenu\' constructor called.', [this]);
    }

    //#endregion

    //#region Properties

    userAccount: azureportalng.UserAccount;

    //#endregion
}