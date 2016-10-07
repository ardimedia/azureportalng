import * as azureportalng from 'azureportalng';

export class Startboard extends azureportalng.UserControlBase {
    //#region Constructors

    constructor(portalService: azureportalng.PortalService) {
        super(portalService);
        azureportalng.Debug.write('[azureportalng-debug] \'Startboard\' constructor called.', [this]);

        this.tiles = new azureportalng.Tiles();
    }

    //#endregion

    //#region Properties

    tiles: azureportalng.Tiles;

    //#endregion
}
