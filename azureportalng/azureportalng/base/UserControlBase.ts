import * as azureportalng from 'azureportalng';

export class UserControlBase {

    //#region Properties

    portalService: azureportalng.PortalService;

    //#endregion

    //#region Constructors

    constructor(portalService: azureportalng.PortalService) {
        azureportalng.Debug.write('[azureportalng-debug] \'UserControlBase\' constructor called.', [this, portalService]);
        this.portalService = portalService;
    }

    //#endregion
}
